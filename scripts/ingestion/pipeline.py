"""Source -> preview only. Never writes course files or calls a publication API."""
import difflib
import hashlib
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import subprocess
from urllib.parse import unquote, urlsplit, quote
import markdown

from import_contract import prepare_analysis
from kahoot_catalog import catalog as quiz_catalog
from markdown_security import MarkdownSecurityExtension
from parcours import canonical_title
from parcours_catalog import model, load_msp
from .ai import BudgetExceeded, PROMPTS
from .drive import SourceError, TSSR_ROOT
from .extract import extract, segments
from .registry import fingerprint
from .credentials import contains_credential


def safe_text(text):
    if not isinstance(text,str) or not text.strip() or len(text)>100_000 or contains_credential(text):
        raise SourceError("Empty, excessive or sensitive text")
    if re.search(r"[\x00-\x08\x0b\x0c\x0e-\x1f\x7f]",text):
        raise SourceError("Control characters refused")
    if re.search(r"https?://(?:create\.)?kahoot\.",text,re.I) or re.search(r"\bPIN\s*[:=]\s*\d+",text,re.I):
        raise SourceError("External Kahoot links/PINs require separate human handling")
    return text


def target_path(repo, relative):
    if not isinstance(relative,str) or not re.fullmatch(r"docs/[a-zA-Z0-9_/-]+\.md",relative):
        raise SourceError("Only explicit Markdown targets under docs are accepted")
    target=(repo/relative).resolve()
    if not target.is_relative_to((repo/"docs").resolve()):
        raise SourceError("Target outside docs")
    return target


class LinkCollector(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links=[]
    def handle_starttag(self,tag,attrs):
        if tag not in {"p","h1","h2","h3","h4","h5","h6","a","img","em","strong","code","pre",
                       "ul","ol","li","blockquote","hr","br","table","thead","tbody","tr","th","td","div","span"}:
            raise SourceError("Active or unsupported HTML")
        for key,value in attrs:
            if key in {"href","src"}:
                self.links.append(value)


def validate_markdown(content, repo, relative, planned=()):
    safe_text(content)
    # Additional restriction for new agent content: no raw HTML or marker tricks.
    if re.search(r"<\s*(?:/?[A-Za-z][\w:-]*(?:\s|>|/)|!--)",content):
        raise SourceError("Raw HTML from model refused")
    html=markdown.markdown(content,extensions=["attr_list","tables","pymdownx.superfences",MarkdownSecurityExtension()])
    parser=LinkCollector()
    parser.feed(html)
    base=target_path(repo,relative)
    for link in parser.links:
        value=urlsplit(unquote(link))
        if value.scheme or value.netloc:
            if value.scheme!="https" or value.username or value.password:
                raise SourceError("Unsafe URL")
            if value.hostname in {"drive.google.com","docs.google.com"}:
                raise SourceError("Model-created Drive reference refused; use source metadata")
            continue
        if not value.path:
            # Unverified local fragment IDs are not asserted valid.
            if value.fragment:
                raise SourceError("Fragment needs human link validation")
            continue
        dest=(base.parent/value.path).resolve()
        if not dest.is_relative_to((repo/"docs").resolve()) or (not dest.is_file() and str(dest) not in planned):
            raise SourceError("Missing/internal path outside docs")


def context_for(meta, repo, bindings):
    """Operator bindings win. Probable equivalences never become accepted links."""
    explicit=bindings.get(meta["id"])
    if explicit:
        if explicit.get("humanValidated") is not True:
            raise SourceError("Binding is not human validated")
        target_path(repo,explicit["targetPath"])
        return {**explicit,"confidence":"HUMAN_VALIDATED"}
    for msp in load_msp(repo):
        if meta.get("parents")==[msp["sourceFolderId"]]:
            return {"kind":"MSP","mspId":msp["id"],"courseRelations":msp["relations"],
                    "confidence":"SOURCE_FOLDER","requiresMappingReview":True}
    titles=[meta.get("name","").rsplit(".",1)[0]]+meta.get("logicalPath",[])[:-1]
    matches=[p for p in model(repo) if canonical_title(p["cours"]) in {canonical_title(t) for t in titles}]
    if matches:
        return {"confidence":matches[0]["mapping"]["state"],"candidates":matches[0]["mapping"]["candidates"],
                "kind":matches[0]["kind"],"requiresMappingReview":True}
    return {"kind":"UNKNOWN","confidence":"UNKNOWN","requiresMappingReview":True}


def checked_units(result, chunks):
    allowed={c["hash"]:c for c in chunks}
    if not isinstance(result["units"],list) or not isinstance(result["questions"],list):
        raise SourceError("Invalid arrays")
    units=[]
    for unit in result["units"]:
        if (not isinstance(unit,dict) or set(unit)!={"content","provenance","source"} or
            unit["provenance"] not in {"B","C"} or unit["source"] not in allowed):
            raise SourceError("Invented source, missing provenance or generated Original/D")
        safe_text(unit["content"])
        units.append({**unit,"positions":allowed[unit["source"]]["positions"]})
    return units


def git_blob(raw):
    return hashlib.sha1(b"blob "+str(len(raw)).encode()+b"\0"+raw).hexdigest()


class Pipeline:
    def __init__(self,reader,registry,engine,repo,bindings=None,pdftotext=None):
        self.reader,self.registry,self.engine=reader,registry,engine
        self.repo=Path(repo).resolve()
        self.bindings=bindings or {}
        self.pdftotext=pdftotext

    def run(self,identity,*,dry_run=True):
        if dry_run is not True:
            raise SourceError("Phase 3A CLI is dry-run only")
        with self.registry.lock():
            meta,raw=self.reader.snapshot(identity)
            imported=self.registry.snapshot(meta,raw)
            try:
                return self._analyze(imported,meta,raw)
            except BudgetExceeded:
                self.registry.state(imported,"BUDGET_EXCEEDED")
            except Exception as error:
                # Do not persist arbitrary exception text (may contain source/secret).
                self.registry.state(imported,"NEEDS_REVIEW",errorType=type(error).__name__)
            return {"importId":imported,**self.registry.get(imported)}

    def _analyze(self,imported,meta,raw):
        old=self.registry.get(imported)
        if old["state"]=="PROPOSED":
            return old["preview"] | {"status":"PROPOSED","receipt":old["receipt"]}
        context=context_for(meta,self.repo,self.bindings)
        context_key=fingerprint([context,PROMPTS,self.engine.models,self.engine.provider.namespace])
        # Reuse extraction & per-section AI, but always rebuild diff against current Git.
        extracted=old.get("extraction") or extract(raw,meta["mimeType"],pdftotext=self.pdftotext)
        self.registry.state(imported,"EXTRACTED",extraction=extracted,context=context)
        chunks=segments(extracted["fragments"])
        if not chunks:
            raise SourceError("No extractable evidence")
        for chunk in chunks:
            safe_text(chunk["text"])
        payload={"segments":chunks[:1],"context":context}
        classified=self.engine.call(imported,"classify",payload)
        kind=context.get("kind") if context.get("humanValidated") else classified["kind"]
        if context.get("humanValidated") and classified["kind"] not in {kind,"UNKNOWN"}:
            raise SourceError("Classification contradicts human mapping; review, never overwrite")
        if kind not in {"COURSE","MSP","TP","EXERCISE","REVISION","KAHOOT_SOURCE","RESOURCE"}:
            raise SourceError("Ambiguous source")
        self.registry.state(imported,"CLASSIFIED",kind=kind)
        stage={"MSP":"msp","TP":"exercise","EXERCISE":"exercise","REVISION":"revision",
               "KAHOOT_SOURCE":"kahoot"}.get(kind,"course")
        units,questions=[],[]
        for chunk in chunks:
            result=self.engine.call(imported,stage,{"segments":[chunk],"context":context,
                                    "remainingQuestions":20-len(questions)})
            units.extend(checked_units(result,[chunk]))
            for question in result["questions"]:
                if (not isinstance(question,dict) or question.get("source")!=chunk["hash"] or
                    question.get("provenance") not in {"B","C"} or not question.get("explanation")):
                    raise SourceError("Question evidence/explanation missing")
                safe_text(question["explanation"])
            questions.extend(result["questions"])
            if len(questions)>20:
                raise SourceError("Kahoot exceeds 20 questions per module")
        if len({q.get("question") for q in questions})!=len(questions):
            raise SourceError("Duplicate quiz questions")
        if not units or len({u["content"] for u in units})!=len(units):
            raise SourceError("Empty or duplicate generation")
        self.registry.state(imported,"GENERATED")
        sha=hashlib.sha256(raw).hexdigest()
        analysis=prepare_analysis(file_id=meta["id"],content_sha256=sha,kind=kind,
            # The Phase 2 contract accepts single-line metadata, not Markdown.
            # Keep original Markdown in units/files; normalize only its metadata copy.
            units=[{"provenance":u["provenance"],"source":u["source"],
                    "content":re.sub(r"\s+", " ", u["content"])} for u in units],
            questions=[{k:v for k,v in q.items() if k!="explanation"} for q in questions] if kind=="KAHOOT_SOURCE" else None,
            course_id=context.get("courseId"),module_id=context.get("moduleId"))
        # General course quiz output remains visible but must receive its own canonical target.
        if questions and kind!="KAHOOT_SOURCE":
            raise SourceError("Separate canonical module quiz target required")
        preview={"importId":imported,"source":{**analysis["source"],"rootId":TSSR_ROOT},
                 "context":context,"kind":kind,"units":units,"questions":questions,"warnings":extracted["warnings"],
                 "promptVersion":PROMPTS["version"],"idempotencyKey":analysis["idempotencyKey"],
                 "files":[],"diff":"","requiresHumanReview":True,"dryRun":True}
        preview["originalEvidence"]={"provenance":"A","fileId":meta["id"],
                                     "parserVersion":extracted["parserVersion"],"fragments":extracted["fragments"]}
        target=context.get("targetPath")
        if not target:
            self.registry.state(imported,"NEEDS_REVIEW",preview=preview)
            return preview | {"status":"NEEDS_REVIEW"}
        generated="\n\n".join(u["content"]+"\n\n*Provenance "+u["provenance"]+" — source "+meta["id"]+
                                ", segment "+u["source"][:12]+"*" for u in units)+"\n"
        if kind=="KAHOOT_SOURCE":
            generated+="\n"+"\n\n".join(q["question"]+"\n"+ "\n".join("- "+a for a in q["answers"])+
                "\n\nRéponse : "+q["correctAnswer"]+"\n\n"+q["explanation"] for q in questions)+"\n"
        validate_markdown(generated,self.repo,target)
        path=target_path(self.repo,target)
        previous=path.read_text() if path.exists() else ""
        # Only replace this source's generated block. Preserve all human text.
        marker=hashlib.sha256(meta["id"].encode()).hexdigest()
        start,end="<!-- TSSR-SOURCE:"+marker+" -->","<!-- /TSSR-SOURCE:"+marker+" -->"
        if previous.count(start)!=previous.count(end) or previous.count(start)>1:
            raise SourceError("Ambiguous source block")
        block=start+"\n"+generated+end
        if start in previous:
            begin,finish=previous.index(start),previous.index(end)+len(end)
            if finish<begin:
                raise SourceError("Reversed source block")
            updated=previous[:begin]+block+previous[finish:]
        else:
            updated=previous+("\n\n" if previous else "")+block+"\n"
        if kind=="KAHOOT_SOURCE":
            if not target.startswith("docs/kahoot/"):
                raise SourceError("Kahoot requires its canonical docs/kahoot target")
            if any(q.get("moduleId")==context["moduleId"] for q in quiz_catalog(self.repo)):
                raise SourceError("Module already has a canonical quiz; human reconciliation required")
            for reference in (context["courseId"],context["moduleId"]):
                if not target_path(self.repo,"docs/"+reference).is_file():
                    raise SourceError("Quiz course/module does not exist")
            if "TSSR-KAHOOT-V1:" in previous:
                raise SourceError("Existing quiz needs explicit human merge, not automatic replacement")
            metadata={"schemaVersion":1,"courseId":context["courseId"],"moduleId":context["moduleId"],
                "title":context.get("title","Quiz proposé"),"questionCount":len(questions),"url":None,
                "soloAvailable":False,"liveAvailable":False,"provenance":"B","state":"prepared","questions":questions}
            updated="<!-- TSSR-KAHOOT-V1:"+quote(json.dumps(metadata,ensure_ascii=False),safe="").replace("-","%2D")+" -->\n"+updated
        base=subprocess.check_output(["git","rev-parse","HEAD"],cwd=self.repo,text=True).strip()
        # Refuse dirty target: future server's base_file_sha must describe committed Git.
        if subprocess.check_output(["git","status","--porcelain","--",target],cwd=self.repo,text=True).strip():
            raise SourceError("Target contains local changes")
        if updated!=previous:
            preview["files"]=[{"file_path":target,"change_type":"update" if path.exists() else "create",
                              "base_file_sha":git_blob(previous.encode()) if path.exists() else None,
                              "new_content":updated,"content_encoding":"utf-8"}]
        preview["diff"]="".join(difflib.unified_diff(previous.splitlines(True),updated.splitlines(True),
                                                   fromfile=target,tofile=target))
        preview["base_commit_sha"]=base
        preview["proposalFingerprint"]=fingerprint([base,preview["files"],analysis["proposalFingerprint"]])
        preview["metrics"]=self.registry.metrics(imported)
        status="READY_FOR_REVIEW" if extracted["complete"] and context.get("humanValidated") else "NEEDS_REVIEW"
        if status=="READY_FOR_REVIEW":
            self.registry.state(imported,"VALIDATED")
        self.registry.state(imported,status,preview=preview,contextKey=context_key)
        return preview | {"status":status}
