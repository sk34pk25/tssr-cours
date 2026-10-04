"""Future adapter to the EXISTING endpoint, never a GitHub publisher.

Not wired to Phase3A CLI. Requires explicit enablement and an agent session.
No server/service-role key, vote, override, admin, publish or merge capability.
"""
import json
import re
import urllib.request
from .drive import NoRedirect, SourceError
from .granularity import GranularityError, assert_payload_granularity, review_description


class ProposalClient:
    def __init__(self, project_url, publishable_key, agent_session, *, enabled=False):
        if not enabled:
            raise SourceError("Proposal submission disabled")
        if not re.fullmatch(r"https://[a-z]{20}\.supabase\.co",project_url):
            raise SourceError("Explicit Supabase project URL required")
        self.url=project_url+"/functions/v1/change-requests"
        self.headers={"apikey":publishable_key,"Authorization":"Bearer "+agent_session,
                      "Content-Type":"application/json","Origin":"https://sk34pk25.github.io"}

    def submit(self,preview):
        if preview.get("status")!="READY_FOR_REVIEW" or not preview.get("files"):
            raise SourceError("Validated preview with a nonempty diff required")
        body={"action":"create","title":"Proposition source "+preview["source"]["fileId"],
              "description":"AGENT — proposition nécessitant validation humaine.",
              "base_commit_sha":preview["base_commit_sha"],"files":preview["files"],
              "payload_summary":{"source":preview["source"],"idempotencyKey":preview["idempotencyKey"],
                                 "proposalFingerprint":preview["proposalFingerprint"]}}
        if "granularity" in preview:
            body["payload_summary"]["granularity"] = preview["granularity"]
        try:
            if preview.get("granularity", {}).get("components"):
                body["description"] += "\n\n" + review_description(preview["granularity"])
            assert_payload_granularity(body)
        except (GranularityError, KeyError, TypeError, AttributeError):
            raise SourceError("Proposal granularity violation") from None
        request=urllib.request.Request(self.url,data=json.dumps(body).encode(),headers=self.headers,method="POST")
        try:
            with urllib.request.build_opener(NoRedirect).open(request,timeout=30) as response:
                raw=response.read(1_000_001)
            if len(raw)>1_000_000:
                raise ValueError()
            result=json.loads(raw)["change_request"]
            if not re.fullmatch(r"[a-f0-9-]{36}",result["id"]):
                raise ValueError()
            return {"id":result["id"],"status":result["status"]}
        except Exception:
            # Delivery ambiguous: same key/body must be retried, never a fresh key.
            raise SourceError("Submission outcome unknown; keep exact key and payload for recovery") from None

    def submit_registered(self, registry, preview):
        # A lost response is retried with the same durable preview and key.
        with registry.lock():
            current=registry.get(preview["importId"])
            if current and current["state"]=="PROPOSED":
                if current["preview"]["proposalFingerprint"]!=preview["proposalFingerprint"]:
                    raise SourceError("Proposal fingerprint changed")
                return current["receipt"]
            if not current or current["state"]!="READY_FOR_REVIEW" or current["preview"]!={
                    k:v for k,v in preview.items() if k!="status"}:
                raise SourceError("Preview does not match durable validation")
            receipt=self.submit(preview)
            registry.record_proposed(preview["importId"],preview,receipt)
            return receipt
