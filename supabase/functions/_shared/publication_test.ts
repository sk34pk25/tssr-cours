import { assertEquals, assertRejects, assertThrows } from "jsr:@std/assert@1.0.18";
import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";
import { buildCommitMessage, changeRequestId, commitSha, singleLine } from "./publication-metadata.ts";
import { publishApprovedChange } from "./github.ts";
import {
  checkReceiptState, handlePublication, normalizeReceipt, verifyPull, verifyRunEvidence,
  type GitHubReader, type PublicationReceipt, type PublicationRow,
} from "./publication.ts";

const ID = "11111111-1111-4111-8111-111111111111";
const SHA = "a".repeat(40);
const MERGE = "b".repeat(40);
const CONFIG = { token: "test-only", owner: "example", repo: "tssr", branch: "main", publishMode: "auto" as const };
function row(overrides: Partial<PublicationRow> = {}): PublicationRow {
  return { id: ID, status: "publishing", publication_expected_sha: SHA, publication_mode: "direct",
    github_pr_number: null, published_commit_sha: SHA, publication_callback: null, ...overrides };
}
function receipt(overrides: Partial<PublicationReceipt> = {}): PublicationReceipt {
  return { change_request_id: ID, expected_sha: SHA, commit_sha: SHA, status: "published",
    phase: "deploy", run_id: "123", run_attempt: 1, pr_number: null, failure_reason: null, ...overrides };
}
function reader(values: Record<string, unknown>): GitHubReader {
  return <T>(path: string): Promise<T> => {
    if (!(path in values)) throw new Error(`Unexpected GitHub request: ${path}`);
    return Promise.resolve(structuredClone(values[path]) as T);
  };
}
function runEvidence(overrides: Record<string, unknown> = {}) {
  return { id: 123, run_attempt: 1, repository: { full_name: "example/tssr" },
    path: ".github/workflows/deploy-docs.yml@main", event: "push", head_branch: "main", head_sha: SHA,
    pull_requests: [], ...overrides };
}
function successfulJobs() {
  return { total_count: 2, jobs: [
    { name: `TSSR-build-v1|${ID}|${SHA}|${SHA}`, conclusion: "success", steps: [
      { name: "Verify checked-out deployment commit", conclusion: "success" },
      { name: "Validate and build MkDocs", conclusion: "success" }] },
    { name: `TSSR-deploy-v1|${ID}|${SHA}|${SHA}`, conclusion: null,
      steps: [{ name: "Publish gh-pages without force push", conclusion: "success" }] },
  ] };
}
function pull(overrides: Record<string, unknown> = {}) {
  return { number: 7, state: "open", merged: false, merge_commit_sha: null,
    head: { sha: SHA, ref: `collaboration/change-${ID}`, repo: { full_name: "example/tssr" } },
    base: { ref: "main", repo: { full_name: "example/tssr" } }, ...overrides };
}

Deno.test("commit metadata rejects line/control injection at entry and Git sink", () => {
  const request = { id: ID, title: "Cours IPv4", author_display_name: "Éditeur légitime" };
  const message = buildCommitMessage(request, ["Équipe réseau"]);
  assertEquals(message.endsWith(`\n\nChange-Request-ID: ${ID}`), true);
  assertEquals(message.match(/^Change-Request-ID:/gm)?.length, 1);
  for (const control of ["\n", "\r", "\t", "\0", "\x1b", "\x7f", "\x85", "\u2028", "\u2029", "\u202e"]) {
    assertThrows(() => singleLine(`Normal${control}Autre`, "Nom", 100));
    assertThrows(() => singleLine(`${control}Normal`, "Nom", 100));
    assertThrows(() => buildCommitMessage({ ...request, title: `Cours${control}Change-Request-ID: ${ID}` }, ["Nom"]));
    assertThrows(() => buildCommitMessage({ ...request, author_display_name: `Nom${control}` }, ["Nom"]));
    assertThrows(() => buildCommitMessage(request, [`Nom${control}`]));
    assertThrows(() => changeRequestId(`${ID}${control}`));
    assertThrows(() => commitSha(`${SHA}${control}`));
  }
  assertEquals(singleLine("  Réseau — IPv4  ", "Titre", 160), "Réseau — IPv4");
});

Deno.test("callbacks require complete unambiguous identifiers, phase, SHA and run", () => {
  assertEquals(normalizeReceipt({ ...receipt() }), receipt());
  for (const override of [
    { expected_sha: undefined }, { commit_sha: null }, { commit_sha: `${SHA}\n` },
    { change_request_id: `${ID}\n` }, { run_id: "123\n" }, { run_attempt: 0 },
    { run_attempt: 1.5 }, { pr_number: -1 }, { phase: "pr-validation" },
    { failure_reason: "impossible pour un succès" },
  ]) assertThrows(() => normalizeReceipt({ ...receipt(), ...override }));
});

Deno.test("callback mismatch and contradiction reject; identical terminal replay is effect-free", () => {
  assertEquals(checkReceiptState(row(), receipt()), "apply");
  assertThrows(() => checkReceiptState(row(), receipt({ expected_sha: MERGE })));
  assertThrows(() => checkReceiptState(row(), receipt({ commit_sha: MERGE })));
  assertThrows(() => checkReceiptState(row({ status: "pending" }), receipt()));
  assertThrows(() => checkReceiptState(row({ publication_expected_sha: null }), receipt()));
  const done = row({ status: "published", publication_callback: receipt() });
  assertEquals(checkReceiptState(done, receipt()), "replay");
  for (const override of [{ status: "failed" as const }, { run_id: "124" }, { commit_sha: MERGE }, { failure_reason: "autre" }]) {
    assertThrows(() => checkReceiptState(done, receipt(override)));
  }
  const failure = receipt({ status: "failed", failure_reason: "Build échoué" });
  assertEquals(checkReceiptState(row({ status: "failed", publication_callback: failure }), failure), "replay");
  assertThrows(() => checkReceiptState(row({ status: "failed", publication_callback: failure }), receipt()));
});

Deno.test("PR attestation requires the approved head, repository, exact branch and base", async () => {
  const proposal = row({ publication_mode: "pull_request", github_pr_number: 7 });
  await verifyPull(proposal, 7, "example/tssr", "main", reader({ "/pulls/7": pull() }));
  for (const override of [
    { head: { sha: MERGE, ref: `collaboration/change-${ID}`, repo: { full_name: "example/tssr" } } },
    { head: { sha: SHA, ref: `collaboration/change-${ID}`, repo: { full_name: "fork/tssr" } } },
    { head: { sha: SHA, ref: "collaboration/change-spoof", repo: { full_name: "example/tssr" } } },
    { base: { ref: "other", repo: { full_name: "example/tssr" } } }, { merged: true },
  ]) await assertRejects(() => verifyPull(proposal, 7, "example/tssr", "main", reader({ "/pulls/7": pull(override) })));
  await assertRejects(() => verifyPull(row(), 7, "example/tssr", "main", reader({ "/pulls/7": pull() })));
});

Deno.test("GitHub run/attempt evidence, not caller assertions, establishes deploy success", async () => {
  const base = "/actions/runs/123/attempts/1";
  await verifyRunEvidence(receipt(), "example/tssr", "main", reader({ [base]: runEvidence(), [`${base}/jobs?per_page=100`]: successfulJobs() }));
  for (const override of [
    { id: 124 }, { run_attempt: 2 }, { path: ".github/workflows/other.yml" },
    { repository: { full_name: "fork/tssr" } }, { head_sha: MERGE }, { event: "pull_request" }, { head_branch: "other" },
  ]) await assertRejects(() => verifyRunEvidence(receipt(), "example/tssr", "main", reader({ [base]: runEvidence(override) })));
  for (const jobs of [{ total_count: 0, jobs: [] }, { total_count: 3, jobs: successfulJobs().jobs },
    { total_count: 1, jobs: [{ conclusion: "failure", steps: [] }] }]) {
    await assertRejects(() => verifyRunEvidence(receipt(), "example/tssr", "main", reader({ [base]: runEvidence(), [`${base}/jobs?per_page=100`]: jobs })));
  }
  await assertRejects(() => verifyRunEvidence(receipt({ status: "failed" }), "example/tssr", "main", reader({ [base]: runEvidence(), [`${base}/jobs?per_page=100`]: successfulJobs() })));
  await verifyRunEvidence(receipt({ status: "failed" }), "example/tssr", "main", reader({ [base]: runEvidence(), [`${base}/jobs?per_page=100`]: {
    total_count: 1, jobs: [{ name: `TSSR-build-v1|${ID}|${SHA}|${SHA}`, conclusion: "failure", steps: [] }] } }));
});

Deno.test("manual dispatch evidence binds proposal expected SHA and actual pinned source", async () => {
  const base = "/actions/runs/123/attempts/1";
  // main advanced; the actual checkout is still SHA. run.head_sha is NOT the checkout proof.
  const run = runEvidence({ event: "workflow_dispatch", head_sha: MERGE });
  const check = (jobs: unknown) => verifyRunEvidence(receipt(), "example/tssr", "main",
    reader({ [base]: run, [`${base}/jobs?per_page=100`]: jobs }));
  await check(successfulJobs());
  for (const mutate of [
    (name: string) => name.replaceAll(SHA, MERGE),
    (name: string) => name.replace(ID, "22222222-2222-4222-8222-222222222222"),
    (name: string) => name.replace(`|${SHA}|`, `|${MERGE}|`),
    () => "legacy job without source evidence",
  ]) await assertRejects(() => check({ ...successfulJobs(),
    jobs: successfulJobs().jobs.map((job) => ({ ...job, name: mutate(job.name) })) }));
  await assertRejects(() => check({ total_count: 3, jobs: [...successfulJobs().jobs, successfulJobs().jobs[0]] }));
  const missingCheckout = successfulJobs();
  missingCheckout.jobs[0].steps.shift();
  await assertRejects(() => check(missingCheckout));
  const swapped = successfulJobs();
  [swapped.jobs[0].steps, swapped.jobs[1].steps] = [swapped.jobs[1].steps, swapped.jobs[0].steps];
  await assertRejects(() => check(swapped));
});

Deno.test("failure proof is source-bound, including stale PR runs and skipped deploy", async () => {
  const base = "/actions/runs/123/attempts/1";
  for (const phase of ["deploy", "pr-validation"] as const) {
    const failed = receipt({ phase, status: "failed", pr_number: phase === "deploy" ? null : 7 });
    const run = runEvidence(phase === "deploy" ? { event: "workflow_dispatch", head_sha: MERGE } : {
      event: "pull_request_target", path: ".github/workflows/publish-collaboration-pr.yml", pull_requests: [{ number: 7 }],
    });
    const name = `TSSR-${phase === "deploy" ? "build" : "validate"}-v1|${ID}|${SHA}|${SHA}`;
    const check = (name: string) => verifyRunEvidence(failed, "example/tssr", "main", reader({
      [base]: run, [`${base}/jobs?per_page=100`]: { total_count: 1, jobs: [{ name, conclusion: "failure", steps: [] }] },
    }));
    await check(name);
    await assertRejects(() => check(name.replaceAll(SHA, MERGE)));
  }
});

function callbackClient(proposal: PublicationRow) {
  let writes = 0;
  const client = {
    from: () => ({ select: () => ({ eq: () => ({ single: () => Promise.resolve({ data: structuredClone(proposal), error: null }) }) }) }),
    rpc: (_name: string, args: { p_receipt: PublicationReceipt }) => {
      const replayed = checkReceiptState(proposal, args.p_receipt) === "replay";
      if (!replayed) { writes++; proposal.publication_callback = args.p_receipt; proposal.status = args.p_receipt.status; proposal.published_commit_sha = args.p_receipt.commit_sha; }
      return Promise.resolve({ data: { id: ID, status: proposal.status, published_commit_sha: proposal.published_commit_sha, replayed }, error: null });
    },
  } as unknown as SupabaseClient;
  return { client, writes: () => writes };
}

Deno.test("callback applies once and replay requires no GitHub call or additional write", async () => {
  for (const event of ["push", "workflow_dispatch"]) {
  const state = callbackClient(row());
  const read = reader({ [`/compare/${SHA}...main`]: { status: "identical" },
    "/actions/runs/123/attempts/1": runEvidence({ event, head_sha: event === "push" ? SHA : MERGE }),
    "/actions/runs/123/attempts/1/jobs?per_page=100": successfulJobs() });
  await handlePublication(state.client, { ...receipt() }, read, CONFIG);
  assertEquals(state.writes(), 1);
  const replay = await handlePublication(state.client, { ...receipt() }, reader({}), CONFIG);
  assertEquals(replay.replayed, true);
  assertEquals(state.writes(), 1);
  await assertRejects(() => handlePublication(state.client, { ...receipt({ status: "failed" }) }, reader({}), CONFIG));
  assertEquals(state.writes(), 1);
  }
});

Deno.test("historical rows without intent never acquire a fabricated publication result", async () => {
  for (const status of ["publishing", "published", "failed"]) {
    const historical = row({ status, publication_expected_sha: null, publication_mode: null });
    const before = structuredClone(historical);
    const state = callbackClient(historical);
    for (const body of [{ ...receipt() }, { action: "verify-deploy", change_request_id: ID, commit_sha: SHA }]) {
      await assertRejects(() => handlePublication(state.client, body, reader({}), CONFIG), Error, "historique");
    }
    assertEquals(state.writes(), 0);
    assertEquals(historical, before);
  }
});

Deno.test("PR deployment accepts only the real merged SHA of the approved PR", async () => {
  const proposal = row({ publication_mode: "pull_request", github_pr_number: 7 });
  const state = callbackClient(proposal);
  const read = reader({ "/pulls/7": pull({ merged: true, state: "closed", merge_commit_sha: MERGE }),
    [`/compare/${MERGE}...main`]: { status: "ahead" } });
  const gate = await handlePublication(state.client, { action: "verify-deploy", change_request_id: ID, commit_sha: MERGE }, read, CONFIG);
  assertEquals(gate.expected_sha, SHA);
  await assertRejects(() => handlePublication(state.client, { action: "verify-deploy", change_request_id: ID, commit_sha: SHA }, read, CONFIG));
  assertEquals(state.writes(), 0);
  await assertRejects(() => handlePublication(state.client, {
    ...receipt({ phase: "pr-validation", status: "failed", pr_number: 7 }),
  }, read, CONFIG));
  assertEquals(state.writes(), 0, "merged PR requires deploy recovery, never false validation failure");
});

Deno.test("two publication claims: losing worker never publishes, writes or marks failure", async () => {
  for (const losePushResponse of [false, true]) {
  const originalFetch = globalThis.fetch;
  const envNames = ["GITHUB_TOKEN", "GITHUB_OWNER", "GITHUB_REPO", "GITHUB_BRANCH", "GITHUB_PUBLISH_MODE"];
  const originals = envNames.map((key) => Deno.env.get(key));
  envNames.forEach((key, index) => Deno.env.set(key, ["test-only", "example", "tssr", "main", "direct"][index]));
  let status = "approved";
  let claims = 0;
  let updates = 0;
  let audits = 0;
  let pushes = 0;
  let expectedSha: string | null = null;
  const client = {
    rpc: () => {
      claims++;
      if (status !== "approved") return Promise.resolve({ data: null, error: { message: "La proposition n’est pas disponible pour publication." } });
      status = "publishing";
      return Promise.resolve({ data: { id: ID, title: "Cours testé", author_display_name: "Auteur", required_approvers: [ID] }, error: null });
    },
    from: (table: string) => {
      let values: Record<string, unknown> | null = null;
      let inserting = false;
      const filters: Record<string, unknown> = {};
      const execute = () => {
        if (table === "change_request_files") return { data: [{ file_path: "docs/new.md", change_type: "create", new_content: "# Nouveau", content_encoding: "utf-8" }], error: null };
        if (table === "change_approvals") return { data: [{ user_id: ID, user_display_name: "Auteur", decision: "approved" }], error: null };
        if (inserting) { audits++; return { data: {}, error: null }; }
        if (values && (!filters.status || filters.status === status)) {
          updates++;
          if (values.status) status = String(values.status);
          if (values.publication_expected_sha) expectedSha = String(values.publication_expected_sha);
          return { data: { id: ID }, error: null };
        }
        return { data: null, error: null };
      };
      const chain = {
        select: () => chain,
        eq: (key: string, value: unknown) => { filters[key] = value; return chain; },
        update: (value: Record<string, unknown>) => { values = value; return chain; },
        insert: () => { inserting = true; return chain; },
        single: () => Promise.resolve(execute()), maybeSingle: () => Promise.resolve(execute()),
        then: (resolve: (value: unknown) => unknown) => Promise.resolve(execute()).then(resolve),
      };
      return chain;
    },
  } as unknown as SupabaseClient;
  globalThis.fetch = async (input, init) => {
    const url = String(input);
    let result: unknown;
    if (url.includes("/git/ref/heads/")) result = { object: { sha: pushes ? SHA : MERGE } };
    else if (url.includes("/git/refs/heads/")) {
      // The second worker enters while the first is still publishing.
      const before = { updates, audits, pushes };
      await publishApprovedChange(client, ID);
      assertEquals({ updates, audits, pushes }, before);
      assertEquals(status, "publishing");
      assertEquals(expectedSha, SHA, "intent must be durable before any push");
      pushes++;
      if (losePushResponse) throw new Error("Simulated lost successful push response");
      result = {};
    } else if (url.includes("/contents/mkdocs.yml")) result = { type: "file", encoding: "base64", sha: MERGE, content: btoa("site_name: TSSR\nnav:\n  - Accueil: index.md\n") };
    else if (url.includes("/git/trees/") && !init?.method) result = { truncated: false, tree: [{ path: "docs/index.md", type: "blob", sha: MERGE }] };
    else if (url.endsWith("/git/commits") && init?.method === "POST") result = { sha: SHA };
    else if (url.includes("/git/commits/")) result = { tree: { sha: MERGE } };
    else if (url.endsWith("/git/trees") || url.endsWith("/git/blobs")) result = { sha: SHA };
    else throw new Error(`Unexpected network call ${url}`);
    return new Response(JSON.stringify(result), { status: 200 });
  };
  try {
    await publishApprovedChange(client, ID);
    assertEquals({ claims, pushes, status }, { claims: 2, pushes: 1, status: "publishing" });
    status = "published";
    const before = { updates, audits, pushes };
    await publishApprovedChange(client, ID);
    assertEquals({ updates, audits, pushes }, before);
    assertEquals(status, "published");
  } finally {
    globalThis.fetch = originalFetch;
    envNames.forEach((key, index) => originals[index] === undefined ? Deno.env.delete(key) : Deno.env.set(key, originals[index]!));
  }
  }
});
