import { assertActorAction, agentSummary } from "./agent-policy.ts";
const agent = { actor_kind: "AGENT" as const, role: "member" as const,
  can_edit: false, can_propose: true, status: "active", must_change_password: false };
Deno.test("agent: only create; no vote/override/publish/admin/cancel", () => {
  assertActorAction(agent, "create");
  for (const action of ["vote", "admin_override_approval", "publish", "manage-users", "cancel", "human-only"]) {
    let rejected = false;
    try { assertActorAction(agent, action); } catch { rejected = true; }
    if (!rejected) throw Error(action);
  }
  for (const action of ["vote", "cancel"]) assertActorAction({ ...agent, actor_kind: "HUMAN", can_edit: true }, action);
});
Deno.test("agent: invalid/suspended identity cannot propose", () => {
  for (const changes of [{can_edit:true},{can_propose:false},{status:"suspended"},{role:"admin" as const},{must_change_password:true}]) {
    let rejected = false;
    try { assertActorAction({...agent,...changes}, "create"); } catch { rejected = true; }
    if (!rejected) throw Error("invalid agent");
  }
});
Deno.test("agent provenance: server fingerprint and authority stripping", async () => {
  const summary = {source:{type:"google_drive_read_only",rootId:"1N73OtTF2TKxYUEO9X0_4NObnmEAugzZ1",
    fileId:"fixture",sha256:"a".repeat(64)}, idempotencyKey:"b".repeat(64), can_override:true};
  const a=await agentSummary(summary, [{new_content:"safe"}], "c".repeat(40));
  const b=await agentSummary(summary, [{new_content:"changed"}], "c".repeat(40));
  if (a.proposalFingerprint===b.proposalFingerprint || "can_override" in a) throw Error("unsafe fingerprint");
  let rejected=false;
  try { await agentSummary({...summary,source:{...summary.source,rootId:"other"}},[],""); } catch {rejected=true;}
  if(!rejected) throw Error("external root");
});
