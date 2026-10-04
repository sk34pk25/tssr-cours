import { assertEquals, assertRejects } from "jsr:@std/assert@1.0.18";
import { handleReconciliation, verifyReconciliationEvidence } from "./reconciliation.ts";
import type { GitHubReader, PublicationRow } from "./publication.ts";
import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";

const SHA = "a".repeat(40), DEPLOYED = "b".repeat(40), PAGES = "c".repeat(40);
function evidence() {
  const name = (role: string) => `TSSR-${role}-v1|||${DEPLOYED}`;
  return {
    "/commits/gh-pages": { sha: PAGES, commit: { message: `deploy: ${DEPLOYED}` } },
    [`/compare/${DEPLOYED}...main`]: { status: "ahead" },
    [`/actions/workflows/deploy-docs.yml/runs?head_sha=${DEPLOYED}&status=completed&per_page=20`]: {
      workflow_runs: [{ id: 123, run_attempt: 1 }],
    },
    "/actions/runs/123/attempts/1": { id: 123, run_attempt: 1, path: ".github/workflows/deploy-docs.yml",
      event: "push", head_branch: "main", head_sha: DEPLOYED, repository: { full_name: "example/tssr" },
      status: "completed", conclusion: "success" },
    "/actions/runs/123/attempts/1/jobs?per_page=100": { total_count: 2, jobs: [
      { name: name("build"), conclusion: "success", steps: [
        { name: "Verify checked-out deployment commit", conclusion: "success" },
        { name: "Validate and build MkDocs", conclusion: "success" }] },
      { name: name("deploy"), conclusion: "success", steps: [
        { name: "Publish gh-pages without force push", conclusion: "success" }] },
    ] },
    [`/actions/runs?head_sha=${PAGES}&status=success&per_page=20`]: { workflow_runs: [{ id: 456, run_attempt: 1, path: "dynamic/pages/pages-build-deployment" }] },
    "/actions/runs/456/attempts/1": { id: 456, run_attempt: 1, repository: { full_name: "example/tssr" },
      path: "dynamic/pages/pages-build-deployment", event: "dynamic", head_branch: "gh-pages", head_sha: PAGES,
      status: "completed", conclusion: "success" },
    "/actions/runs/456/attempts/1/jobs?per_page=100": { total_count: 2,
      jobs: [{ name: "build", conclusion: "success" }, { name: "deploy", conclusion: "success" }] },
  };
}
function reader(values: Record<string, unknown>): GitHubReader {
  return <T>(path: string) => {
    if (!(path in values)) throw new Error(`Unexpected read: ${path}`);
    return Promise.resolve(structuredClone(values[path]) as T);
  };
}

Deno.test("reconciliation requires completed build AND matching successful Pages deployment", async () => {
  const proof = await verifyReconciliationEvidence("example/tssr", "main", reader(evidence()));
  assertEquals(proof.deployed_sha, DEPLOYED);
  assertEquals(proof.gh_pages_sha, PAGES);
  assertEquals(proof.pages_run_id, "456");
});

const CONFIG = { token: "test-only", owner: "example", repo: "tssr", branch: "main", publishMode: "direct" as const };
function batch(count: number) {
  const rows: PublicationRow[] = Array.from({ length: count }, (_, index) => ({
    id: `11111111-1111-4111-8111-${String(index + 1).padStart(12, "0")}`,
    status: "publishing", publication_expected_sha: (index + 1).toString(16).padStart(40, "0"),
    publication_mode: "direct", github_pr_number: null,
    published_commit_sha: (index + 1).toString(16).padStart(40, "0"),
    publication_callback: null, published_at: null, failure_reason: null,
  }));
  let mutations = 0;
  const refuse = new Set<string>();
  const client = {
    from: (table: string) => {
      assertEquals(table, "change_requests");
      const filters: Record<string, unknown> = {};
      const chain = {
        select: () => chain, eq: (key: string, value: unknown) => { filters[key] = value; return chain; },
        order: () => chain, limit: () => chain, gt: (_key: string, value: string) => { filters.after = value; return chain; },
        single: () => Promise.resolve({ error: null, data: structuredClone(rows.find((r) => r.id === filters.id)) }),
        then: (resolve: (v: unknown) => unknown) => Promise.resolve({ error: null,
          data: structuredClone(rows.filter((r) => r.status === filters.status && (!filters.after || r.id > String(filters.after))).slice(0, 11)),
        }).then(resolve),
      };
      return chain;
    },
    rpc: (name: string, args: { p_change_request_id: string; p_receipt: PublicationRow["publication_callback"]; p_dry_run: boolean }) => {
      assertEquals(name, "service_reconcile_publication");
      const row = rows.find((r) => r.id === args.p_change_request_id)!;
      if (refuse.has(row.id)) return Promise.resolve({ data: null, error: { message: "unfinished permit" } });
      if (!args.p_dry_run) {
        mutations++; row.status = "published"; row.publication_callback = args.p_receipt;
        row.published_commit_sha = args.p_receipt!.commit_sha;
        row.published_at = "2026-10-04T00:00:00Z";
      }
      return Promise.resolve({ error: null, data: { id: row.id, status: row.status, eligible: true, replayed: false } });
    },
  } as unknown as SupabaseClient;
  const values: Record<string, unknown> = evidence();
  for (const row of rows) {
    values[`/compare/${row.publication_expected_sha}...main`] = { status: "ahead" };
    values[`/compare/${row.publication_expected_sha}...${DEPLOYED}`] = { status: "ahead" };
    values[`/git/commits/${row.publication_expected_sha}`] = { sha: row.publication_expected_sha };
  }
  return { rows, client, values, refuse, mutations: () => mutations };
}

for (const count of [1, 2, 10]) Deno.test(`${count} covered CRs converge despite cancelled/missing intermediate workflows; redeploy is a no-op`, async () => {
  const b = batch(count);
  // No API evidence whatsoever is supplied for intermediate runs: only the
  // final successful build/Pages run is allowed to prove cumulative coverage.
  await handleReconciliation(b.client, { dry_run: false }, reader(b.values), CONFIG);
  assertEquals(b.mutations(), count);
  assertEquals(b.rows.every((r) => r.status === "published"), true);
  const snapshot = structuredClone(b.rows);
  await handleReconciliation(b.client, { dry_run: false }, reader({}), CONFIG);
  assertEquals(b.rows, snapshot); assertEquals(b.mutations(), count);
});

Deno.test("dry-run validates eligibility without mutation", async () => {
  const b = batch(2), before = structuredClone(b.rows);
  const result = await handleReconciliation(b.client, {}, reader(b.values), CONFIG);
  assertEquals(result.dry_run, true); assertEquals(b.rows, before); assertEquals(b.mutations(), 0);
});

Deno.test("lost callback report is recoverable only when all deployment jobs succeeded", async () => {
  const e = evidence();
  e["/actions/runs/123/attempts/1"].conclusion = "failure";
  e["/actions/runs/123/attempts/1/jobs?per_page=100"].jobs.push({ name: "report", conclusion: "failure", steps: [] });
  e["/actions/runs/123/attempts/1/jobs?per_page=100"].total_count++;
  await verifyReconciliationEvidence("example/tssr", "main", reader(e));
  e["/actions/runs/123/attempts/1/jobs?per_page=100"].jobs[2].name = "authorize-deploy";
  await assertRejects(() => verifyReconciliationEvidence("example/tssr", "main", reader(e)));
});

Deno.test("main-only, divergent, failed, historical and unfinished rows remain untouched", async () => {
  const b = batch(6);
  b.values[`/compare/${b.rows[0].publication_expected_sha}...${DEPLOYED}`] = { status: "behind" };
  b.values[`/compare/${b.rows[1].publication_expected_sha}...${DEPLOYED}`] = { status: "diverged" };
  b.rows[2].failure_reason = "Existing contradiction";
  b.rows[3].publication_expected_sha = null;
  b.refuse.add(b.rows[4].id);
  b.rows[5].publication_mode = null;
  const before = structuredClone(b.rows);
  await handleReconciliation(b.client, { dry_run: false }, reader(b.values), CONFIG);
  assertEquals(b.rows, before); assertEquals(b.mutations(), 0);
});

Deno.test("pagination advances past ineligible historical rows without starvation", async () => {
  const b = batch(12); b.rows[0].publication_expected_sha = null;
  const first = await handleReconciliation(b.client, { dry_run: false }, reader(b.values), CONFIG);
  assertEquals(first.next_cursor, b.rows[9].id);
  const second = await handleReconciliation(b.client, { dry_run: false, after_id: first.next_cursor }, reader(b.values), CONFIG);
  assertEquals(second.next_cursor, null); assertEquals(b.mutations(), 11);
  assertEquals(b.rows[0].status, "publishing");
});

Deno.test("Pages moving during proof fails closed before SQL completion", async () => {
  const b = batch(1); let pagesReads = 0;
  const base = reader(b.values);
  const read: GitHubReader = <T>(path: string) => path === "/commits/gh-pages" && ++pagesReads > 1
    ? Promise.resolve({ sha: SHA } as T) : base<T>(path);
  await handleReconciliation(b.client, { dry_run: false }, read, CONFIG);
  assertEquals(b.mutations(), 0);
});

Deno.test("collaborative deployment anchor is tied to its own DB intent, not an unrelated CR", async () => {
  const b = batch(2);
  const anchor = { ...b.rows[1], status: "published", publication_expected_sha: DEPLOYED, published_commit_sha: DEPLOYED };
  b.rows[1] = anchor;
  const jobs = b.values["/actions/runs/123/attempts/1/jobs?per_page=100"] as ReturnType<typeof evidence>["/actions/runs/123/attempts/1/jobs?per_page=100"];
  for (const job of jobs.jobs) job.name = job.name.replace("|||", `|${anchor.id}|${DEPLOYED}|`);
  await handleReconciliation(b.client, { dry_run: true }, reader(b.values), CONFIG);
  anchor.publication_expected_sha = SHA;
  await assertRejects(() => handleReconciliation(b.client, { dry_run: false }, reader(b.values), CONFIG), Error, "ANCHOR_IDENTITY_MISMATCH");
  assertEquals(b.mutations(), 0);
});

Deno.test("PR recovery requires the real merge SHA of the exact approved head and same repository", async () => {
  const b = batch(1), row = b.rows[0];
  row.publication_mode = "pull_request"; row.github_pr_number = 7;
  b.values["/pulls/7"] = { number: 7, state: "closed", merged: true, merge_commit_sha: DEPLOYED,
    head: { sha: row.publication_expected_sha, ref: `collaboration/change-${row.id}`, repo: { full_name: "example/tssr" } },
    base: { ref: "main", repo: { full_name: "example/tssr" } } };
  b.values[`/compare/${DEPLOYED}...${DEPLOYED}`] = { status: "identical" };
  await handleReconciliation(b.client, { dry_run: false }, reader(b.values), CONFIG);
  assertEquals(b.mutations(), 1); assertEquals(row.published_commit_sha, DEPLOYED);
});

Deno.test("workflow_dispatch must still match exact pinned job SHA; no provenance from the event alone", async () => {
  const e = evidence(); e["/actions/runs/123/attempts/1"].event = "workflow_dispatch";
  await verifyReconciliationEvidence("example/tssr", "main", reader(e));
  e["/actions/runs/123/attempts/1/jobs?per_page=100"].jobs[0].name = `TSSR-build-v1|||${SHA}`;
  await assertRejects(() => verifyReconciliationEvidence("example/tssr", "main", reader(e)), Error, "BUILD_SOURCE_MISMATCH");
});

Deno.test("main alone, wrong Pages SHA, failed jobs or incomplete proof never attest publication", async () => {
  for (const mutate of [
    (e: ReturnType<typeof evidence>) => { e[`/compare/${DEPLOYED}...main`].status = "diverged"; },
    (e: ReturnType<typeof evidence>) => { e["/actions/runs/123/attempts/1"].conclusion = "failure"; },
    (e: ReturnType<typeof evidence>) => { e["/actions/runs/123/attempts/1"].repository.full_name = "fork/tssr"; },
    (e: ReturnType<typeof evidence>) => { e["/actions/runs/123/attempts/1"].head_sha = SHA; },
    (e: ReturnType<typeof evidence>) => { e["/actions/runs/123/attempts/1/jobs?per_page=100"].jobs[0].conclusion = "cancelled"; },
    (e: ReturnType<typeof evidence>) => { e["/actions/runs/123/attempts/1/jobs?per_page=100"].jobs[0].steps = []; },
    (e: ReturnType<typeof evidence>) => { e["/actions/runs/456/attempts/1"].head_sha = SHA; },
    (e: ReturnType<typeof evidence>) => { e["/actions/runs/456/attempts/1"].conclusion = "failure"; },
    (e: ReturnType<typeof evidence>) => { e["/actions/runs/456/attempts/1/jobs?per_page=100"].jobs[1].conclusion = "skipped"; },
  ]) {
    const e = evidence(); mutate(e);
    await assertRejects(() => verifyReconciliationEvidence("example/tssr", "main", reader(e)));
  }
});
