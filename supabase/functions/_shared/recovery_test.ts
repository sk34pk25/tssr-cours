import { assertEquals, assertRejects } from "jsr:@std/assert@1.0.18";
import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";
import type { GitHubReader } from "./publication.ts";
import { handleRecovery } from "./recovery.ts";

const ID = "651b0516-95a7-40c0-976d-6f1652217bfa";
const SHA = "b7f7def6c3dc7073d88f4acc2521da84da37cf83";
const DEPLOYED = "4dfaf77293112f06577ea89ee7bebc2dea2f0c65", PAGES = "c".repeat(40);
const PATH = "docs/modules/11-initiation-scripting-bash/module-07-les-structures-de-boucle.md";
const CONFIG = { token: "test-only", owner: "example", repo: "tssr", branch: "main", publishMode: "direct" as const };
async function fixture() {
  const content = "# M07\n"; // Synthetic bytes, same M07 identity/deployment topology.
  const bytes = new TextEncoder().encode(`blob ${new TextEncoder().encode(content).length}\0${content}`);
  const blob = Array.from(new Uint8Array(await crypto.subtle.digest("SHA-1", bytes)), b => b.toString(16).padStart(2,"0")).join("");
  const callback = { change_request_id: ID, expected_sha: SHA, commit_sha: SHA, phase: "deploy", status: "failed",
    run_id: "38924204493", run_attempt: 1, pr_number: null, failure_reason: "Attested build failure" };
  const row = { id: ID, status: "failed", publication_expected_sha: SHA, published_commit_sha: SHA,
    publication_mode: "direct", publication_callback: callback, failure_reason: callback.failure_reason,
    published_at: null, github_pr_number: null };
  const files = [{ file_path: PATH, new_file_path: null, new_content: content, content_encoding: "utf-8", change_type: "update" }];
  let evidence: unknown = null, writes = 0, calls = 0;
  const client = {
    from: (table: string) => {
      const data = table === "change_requests" ? row : table === "publication_recoveries" ? (evidence ? { evidence } : null) : files;
      const chain = { select: () => chain, eq: () => chain, single: () => Promise.resolve({data,error:null}),
        maybeSingle: () => Promise.resolve({data,error:null}), then: (resolve: (v: unknown) => unknown) => Promise.resolve({data,error:null}).then(resolve) };
      return chain;
    },
    rpc: (name: string, args: { p_dry_run: boolean; p_evidence: unknown }) => {
      assertEquals(name,"service_recover_failed_publication"); calls++;
      const replayed = evidence !== null;
      if (!args.p_dry_run && !replayed) { evidence = structuredClone(args.p_evidence); writes++; }
      return Promise.resolve({error:null,data:{id:ID,status:replayed || !args.p_dry_run ? "recovered" : undefined,eligible:true,replayed}});
    },
  } as unknown as SupabaseClient;
  const run = (id: number, head: string, conclusion: string) => ({id,run_attempt:1,path:".github/workflows/deploy-docs.yml",event:"push",head_branch:"main",
    head_sha:head,repository:{full_name:"example/tssr"},status:"completed",conclusion});
  const values: Record<string, unknown> = {
    "/actions/runs/38924204493/attempts/1": run(38924204493,SHA,"failure"),
    "/actions/runs/38924204493/attempts/1/jobs?per_page=100": {total_count:1,jobs:[{name:`TSSR-build-v1|${ID}|${SHA}|${SHA}`,conclusion:"failure"}]},
    [`/commits/${SHA}?per_page=100`]: {sha:SHA,parents:[{}],files:[{filename:PATH,status:"modified"}]},
    "/commits/gh-pages": {sha:PAGES,commit:{message:`deploy: ${DEPLOYED}`}},
    "/commits/main": {sha:DEPLOYED},
    [`/compare/${SHA}...main`]: {status:"ahead"},
    [`/compare/${SHA}...${DEPLOYED}`]: {status:"ahead"},
    [`/compare/${DEPLOYED}...main`]: {status:"identical"},
    [`/compare/${DEPLOYED}...${DEPLOYED}`]: {status:"identical"},
    [`/actions/workflows/deploy-docs.yml/runs?head_sha=${DEPLOYED}&status=completed&per_page=20`]: {workflow_runs:[{id:38924520461,run_attempt:1}]},
    "/actions/runs/38924520461/attempts/1": run(38924520461,DEPLOYED,"success"),
    "/actions/runs/38924520461/attempts/1/jobs?per_page=100": {total_count:2,jobs:[
      {name:`TSSR-build-v1|||${DEPLOYED}`,conclusion:"success",steps:[{name:"Verify checked-out deployment commit",conclusion:"success"},{name:"Validate and build MkDocs",conclusion:"success"}]},
      {name:`TSSR-deploy-v1|||${DEPLOYED}`,conclusion:"success",steps:[{name:"Publish gh-pages without force push",conclusion:"success"}]}]},
    [`/actions/runs?head_sha=${PAGES}&status=success&per_page=20`]: {workflow_runs:[{id:456,run_attempt:1,path:"dynamic/pages/pages-build-deployment"}]},
    "/actions/runs/456/attempts/1": {...run(456,PAGES,"success"),path:"dynamic/pages/pages-build-deployment",event:"dynamic",head_branch:"gh-pages"},
    "/actions/runs/456/attempts/1/jobs?per_page=100": {total_count:2,jobs:[{name:"build",conclusion:"success"},{name:"deploy",conclusion:"success"}]},
  };
  for (const ref of [SHA,DEPLOYED]) values[`/git/trees/${ref}?recursive=1`] = {truncated:false,tree:[{path:PATH,sha:blob,type:"blob",mode:"100644"}]};
  const read: GitHubReader = <T>(path: string) => {
    if (!(path in values)) throw new Error("Missing fixture evidence");
    return Promise.resolve(structuredClone(values[path]) as T);
  };
  return {row,files,values,read,client,writes:()=>writes,calls:()=>calls};
}
Deno.test("M07 later deployment: exact files, dry-run, recovery and identical replay; initial failure unchanged", async () => {
  const f=await fixture(), before=structuredClone(f.row);
  await handleRecovery(f.client,{change_request_id:ID},f.read,CONFIG); assertEquals(f.writes(),0);
  await handleRecovery(f.client,{change_request_id:ID,dry_run:false},f.read,CONFIG);
  const result=await handleRecovery(f.client,{change_request_id:ID,dry_run:false},f.read,CONFIG);
  assertEquals(result.replayed,true); assertEquals(f.writes(),1); assertEquals(f.row,before);
});
for (const status of ["pending","publishing","published"]) Deno.test(`recovery refuses ${status} before SQL`, async()=>{
  const f=await fixture(); f.row.status=status;
  await assertRejects(()=>handleRecovery(f.client,{change_request_id:ID,dry_run:false},f.read,CONFIG)); assertEquals(f.calls(),0);
});
for (const mutation of ["changed-content","deleted","renamed","wrong-blob","wrong-operation","initial-absent","extra-file","missing-run","failed-build","missing-pages","wrong-commit","not-ancestor","missing-callback","prewrite"]) {
  Deno.test(`recovery refuses ${mutation} without mutation`,async()=>{
    const f=await fixture();
    // Tests mutate only synthetic GitHub/DB fixtures.
    if(mutation==="changed-content") f.files[0].new_content+="Changed";
    if(mutation==="wrong-operation") f.files[0].change_type="create";
    if(mutation==="deleted") f.values[`/git/trees/${DEPLOYED}?recursive=1`]={truncated:false,tree:[]};
    if(mutation==="renamed") f.files[0].new_file_path="docs/renamed.md" as unknown as null;
    if(mutation==="wrong-blob") f.values[`/git/trees/${DEPLOYED}?recursive=1`]={truncated:false,tree:[{path:PATH,sha:"f".repeat(40),mode:"100644",type:"blob"}]};
    if(mutation==="initial-absent") delete f.values[`/commits/${SHA}?per_page=100`];
    if(mutation==="extra-file") f.values[`/commits/${SHA}?per_page=100`]={sha:SHA,parents:[{}],files:[{filename:PATH,status:"modified"},{filename:"docs/other.md",status:"added"}]};
    if(mutation==="missing-run") f.values[`/actions/workflows/deploy-docs.yml/runs?head_sha=${DEPLOYED}&status=completed&per_page=20`]={workflow_runs:[]};
    if(mutation==="failed-build") f.values["/actions/runs/38924520461/attempts/1/jobs?per_page=100"]={total_count:1,jobs:[{name:`TSSR-build-v1|||${DEPLOYED}`,conclusion:"failure"}]};
    if(mutation==="missing-pages") f.values[`/actions/runs?head_sha=${PAGES}&status=success&per_page=20`]={workflow_runs:[]};
    if(mutation==="wrong-commit") f.values["/actions/runs/38924520461/attempts/1"]={...(f.values["/actions/runs/38924520461/attempts/1"] as object),head_sha:SHA};
    if(mutation==="not-ancestor") f.values[`/compare/${SHA}...${DEPLOYED}`]={status:"diverged"};
    if(mutation==="missing-callback") f.row.publication_callback=null as unknown as typeof f.row.publication_callback;
    if(mutation==="prewrite") f.row.published_commit_sha="";
    await assertRejects(()=>handleRecovery(f.client,{change_request_id:ID,dry_run:false},f.read,CONFIG));
    assertEquals(f.calls(),0); assertEquals(f.writes(),0);
  });
}
