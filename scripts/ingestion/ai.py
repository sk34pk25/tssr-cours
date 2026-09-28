"""Bounded Responses API provider. Model names and prices are operator config.

https://developers.openai.com/api/docs/guides/structured-outputs
No automatic tools, web, files, retries or escalation are delegated to a model.
"""
from dataclasses import dataclass
import json
import math
import os
from pathlib import Path
import time
import urllib.request
from .drive import NoRedirect, SourceError
from .registry import fingerprint

PROMPTS = json.loads((Path(__file__).resolve().parents[2]/"prompts/ingestion-v1.json").read_text())
KINDS = ["COURSE","MSP","TP","EXERCISE","REVISION","KAHOOT_SOURCE","RESOURCE","UNKNOWN"]


def obj(properties):
    return {"type":"object","properties":properties,"required":list(properties),"additionalProperties":False}


STRING={"type":"string"}
UNIT=obj({"content":STRING,"provenance":{"type":"string","enum":["B","C"]},"source":STRING})
QUESTION=obj({"question":STRING,"answers":{"type":"array","items":STRING,"minItems":2,"maxItems":4},
              "correctAnswer":STRING,"explanation":STRING,"source":STRING,
              "provenance":{"type":"string","enum":["B","C"]}})
SCHEMA=obj({"kind":{"type":"string","enum":KINDS},"units":{"type":"array","items":UNIT},
            "questions":{"type":"array","items":QUESTION,"maxItems":20}})


class BudgetExceeded(ValueError):
    pass


@dataclass(frozen=True)
class Limits:
    max_input_tokens: int = 12000
    max_output_tokens: int = 2000
    max_support_tokens: int = 150000
    max_calls: int = 30
    max_cost: float = 0.50
    max_retry: int = 1
    timeout: int = 45

    def __post_init__(self):
        if any(type(v) is not int or v < 1 for v in [self.max_input_tokens,self.max_output_tokens,
                  self.max_support_tokens,self.max_calls,self.timeout]) or not 0<=self.max_retry<=2:
            raise ValueError("Invalid limits")
        if not math.isfinite(self.max_cost) or self.max_cost<0:
            raise ValueError("Invalid cost budget")


class FakeAIProvider:
    namespace="fixture-v1"
    def __init__(self,kind="COURSE"):
        self.kind,self.calls=kind,0

    def respond(self, *, stage, model, payload, max_output_tokens, timeout):
        self.calls+=1
        chunks=payload["segments"]
        result={"kind":self.kind,"units":[],"questions":[]}
        if stage!="classify":
            result["units"]=[{"content":c["text"],"provenance":"B","source":c["hash"]} for c in chunks]
        # This provider asserts no pedagogical quality; tests exercise the contract.
        return result,{"input_tokens":len(json.dumps(payload).encode()),"output_tokens":min(100,max_output_tokens)}


class OpenAIProvider:
    namespace="openai-responses-v1"
    def __init__(self, api_key, *, paid_calls_authorized=False):
        if not paid_calls_authorized or not api_key:
            raise SourceError("Paid calls are disabled until explicitly authorized")
        self._key=api_key

    def respond(self, *, stage, model, payload, max_output_tokens, timeout):
        body={"model":model,"store":False,"max_output_tokens":max_output_tokens,
              "input":[{"role":"developer","content":PROMPTS["common"]+" "+PROMPTS["stages"][stage]},
                       {"role":"user","content":json.dumps(payload,ensure_ascii=False)}],
              "text":{"format":{"type":"json_schema","name":"tssr_analysis","strict":True,"schema":SCHEMA}}}
        request=urllib.request.Request("https://api.openai.com/v1/responses",
            data=json.dumps(body).encode(),method="POST",
            headers={"Authorization":"Bearer "+self._key,"Content-Type":"application/json"})
        try:
            with urllib.request.build_opener(NoRedirect).open(request,timeout=timeout) as response:
                raw=response.read(1_000_001)
            if len(raw)>1_000_000:
                raise ValueError()
            data=json.loads(raw)
            if data.get("status")!="completed":
                raise ValueError()
            texts=[part["text"] for item in data["output"] if item["type"]=="message"
                   for part in item["content"] if part["type"]=="output_text"]
            if len(texts)!=1:
                raise ValueError()
            return json.loads(texts[0]),data["usage"]
        except Exception:
            raise SourceError("AI request failed, refused or incomplete; response not logged") from None


class Engine:
    @classmethod
    def from_environment(cls, registry, provider):
        models={tier:os.environ.get("AI_MODEL_"+tier,"") for tier in ("FAST","STANDARD","COMPLEX")}
        prices=json.loads(os.environ.get("AI_PRICES_JSON","{}"))
        limits=Limits(
            max_input_tokens=int(os.environ.get("AI_MAX_INPUT_TOKENS","12000")),
            max_output_tokens=int(os.environ.get("AI_MAX_OUTPUT_TOKENS","2000")),
            max_support_tokens=int(os.environ.get("AI_MAX_SUPPORT_TOKENS","150000")),
            max_calls=int(os.environ.get("AI_MAX_CALLS","30")),
            max_cost=float(os.environ.get("AI_MAX_COST","0.50")),
            max_retry=int(os.environ.get("AI_MAX_RETRY","1")),
            timeout=int(os.environ.get("AI_TIMEOUT","45")))
        return cls(registry,provider,models,prices,limits)

    def __init__(self, registry, provider, models=None, prices=None, limits=None):
        self.registry,self.provider=registry,provider
        self.models=models or ({"FAST":"fixture-fast","STANDARD":"fixture-standard","COMPLEX":"fixture-complex"}
                               if isinstance(provider,FakeAIProvider) else {})
        self.prices=prices or ({model:(0,0) for model in self.models.values()} if isinstance(provider,FakeAIProvider) else {})
        self.limits=limits or Limits()

    def call(self, identity, stage, payload, *, complex_reason=None):
        tier="FAST" if stage in {"classify","extract","review"} else "STANDARD"
        if complex_reason:
            if complex_reason not in {"contradiction","technical_review","explicit_human_request"}:
                raise SourceError("Complex routing requires an explicit permitted reason")
            tier="COMPLEX"
        model=self.models.get(tier)
        rates=self.prices.get(model)
        if not isinstance(model,str) or not model or not isinstance(rates,(tuple,list)) or len(rates)!=2 or any(
                type(v) not in (int,float) or not math.isfinite(v) or v<0 for v in rates):
            raise SourceError("Model and current per-million-token prices required")
        key=fingerprint([self.provider.namespace,model,stage,PROMPTS,SCHEMA,payload,self.limits.max_output_tokens])
        cached=self.registry.cache(key)
        if cached is not None:
            self.registry.metric(identity,{"stage":stage,"model":model,"cacheHit":True,
                "inputTokens":0,"outputTokens":0,"estimatedCost":0,"promptVersion":PROMPTS["version"]})
            return cached
        # UTF-8 byte upper bound + schema/prompt overhead, not a claimed tokenizer count.
        input_bound=len(json.dumps([payload,PROMPTS["common"],PROMPTS["stages"][stage],SCHEMA],
                                   ensure_ascii=False).encode())+512
        tokens=input_bound+self.limits.max_output_tokens
        cost=(input_bound*rates[0]+self.limits.max_output_tokens*rates[1])/1_000_000
        for attempt in range(self.limits.max_retry+1):
            prior=self.registry.metrics(identity)
            if (input_bound>self.limits.max_input_tokens or
                sum(m.get("reservedTokens",0) for m in prior)+tokens>self.limits.max_support_tokens or
                sum(m.get("reservedCost",0) for m in prior)+cost>self.limits.max_cost or
                sum(m.get("status")=="RESERVED" for m in prior)>=self.limits.max_calls):
                raise BudgetExceeded("Source budget exhausted; reservations survive restarts")
            # Persist before request: a timeout/crash may still have incurred cost.
            self.registry.metric(identity,{"stage":stage,"status":"RESERVED","model":model,
                "reservedTokens":tokens,"reservedCost":cost,"attempt":attempt,"promptVersion":PROMPTS["version"]})
            started=time.monotonic()
            try:
                result,usage=self.provider.respond(stage=stage,model=model,payload=payload,
                    max_output_tokens=self.limits.max_output_tokens,timeout=self.limits.timeout)
                incoming,outgoing=usage["input_tokens"],usage["output_tokens"]
                if (type(incoming) is not int or type(outgoing) is not int or incoming<0 or outgoing<0 or
                    incoming>input_bound or outgoing>self.limits.max_output_tokens):
                    raise SourceError("Unexpected token usage")
                if not isinstance(result,dict) or set(result)!={"kind","units","questions"} or result["kind"] not in KINDS:
                    raise SourceError("Invalid structured response")
                self.registry.metric(identity,{"stage":stage,"status":"COMPLETE","model":model,"cacheHit":False,
                    "inputTokens":incoming,"outputTokens":outgoing,"estimatedCost":(incoming*rates[0]+outgoing*rates[1])/1_000_000,
                    "duration":time.monotonic()-started,"promptVersion":PROMPTS["version"]})
                self.registry.cache(key,result)
                return result
            except SourceError:
                self.registry.metric(identity,{"stage":stage,"status":"FAILED","model":model,
                                              "duration":time.monotonic()-started})
                if attempt==self.limits.max_retry:
                    raise
