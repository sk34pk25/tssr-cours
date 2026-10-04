import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";
import { changeRequestId, commitSha } from "./publication-metadata.ts";
import { githubConfig, readGitHub } from "./github.ts";
import { type GitHubReader, type PublicationReceipt, type PublicationRow, verifyDeployment, verifyRunEvidence } from "./publication.ts";

interface Run {
  id: number; run_attempt: number; path: string; event: string; head_branch: string; head_sha: string;
  status: string; conclusion: string; repository: { full_name: string };
}
interface Job { name: string; conclusion: string }
interface Jobs { total_count: number; jobs: Job[] }
export interface DeploymentProof {
  protocol: "tssr-deployed-ancestor-v1";
  deployed_sha: string; gh_pages_sha: string;
  run_id: string; run_attempt: number; pages_run_id: string; pages_run_attempt: number;
  anchor_change_request_id: string; anchor_expected_sha: string;
}
export interface ReconciledReceipt extends PublicationReceipt { reconciliation: DeploymentProof }

function requireProof(condition: unknown, code: string): asserts condition {
  if (!condition) throw new Error(code);
}
async function completedRun(read: GitHubReader, id: number, attempt: number, repository: string): Promise<Run> {
  requireProof(Number.isSafeInteger(id) && id > 0 && Number.isSafeInteger(attempt) && attempt > 0, "RUN_ID_INVALID");
  const run = await read<Run>(`/actions/runs/${id}/attempts/${attempt}`);
  requireProof(run.id === id && run.run_attempt === attempt && run.status === "completed" &&
    run.repository.full_name.toLowerCase() === repository.toLowerCase(), "RUN_NOT_SUCCESSFUL_OR_WRONG_REPOSITORY");
  return run;
}
async function jobsFor(read: GitHubReader, run: Run): Promise<Job[]> {
  const result = await read<Jobs>(`/actions/runs/${run.id}/attempts/${run.run_attempt}/jobs?per_page=100`);
  requireProof(result.total_count === result.jobs.length, "JOBS_INCOMPLETE");
  return result.jobs;
}
function successfulJob(jobs: Job[], name: string): void {
  const matches = jobs.filter((j) => j.name === name);
  requireProof(matches.length === 1 && matches[0].conclusion === "success", "JOB_NOT_SUCCESSFUL_OR_AMBIGUOUS");
}
export async function assertAncestor(read: GitHubReader, base: string, head: string): Promise<void> {
  const comparison = await read<{ status: string }>(`/compare/${commitSha(base)}...${encodeURIComponent(head)}`);
  requireProof(["ahead", "identical"].includes(comparison.status), "NOT_DEPLOYED_ANCESTOR");
}

/** Only GETs. The gh-pages HEAD selects the source, never the latest main SHA. */
export async function verifyReconciliationEvidence(repository: string, branch: string, read: GitHubReader): Promise<DeploymentProof> {
  const pages = await read<{ sha: string; commit: { message: string } }>("/commits/gh-pages");
  const match = /^deploy: ([0-9a-f]{40})\s*$/.exec(pages.commit.message);
  requireProof(match, "GH_PAGES_SOURCE_UNPROVEN");
  const deployed = commitSha(match[1]), pagesSha = commitSha(pages.sha);
  await assertAncestor(read, deployed, branch);
  const runs = await read<{ workflow_runs: Run[] }>(`/actions/workflows/deploy-docs.yml/runs?head_sha=${deployed}&status=completed&per_page=20`);
  requireProof(runs.workflow_runs.length, "SUCCESSFUL_DEPLOYMENT_RUN_MISSING");
  const run = await completedRun(read, runs.workflow_runs[0].id, runs.workflow_runs[0].run_attempt, repository);
  requireProof(run.path.split("@")[0] === ".github/workflows/deploy-docs.yml" && run.head_branch === branch &&
    ["push", "workflow_dispatch"].includes(run.event) && run.head_sha === deployed, "DEPLOYMENT_SOURCE_MISMATCH");
  const jobs = await jobsFor(read, run);
  // A lost callback can fail the report job after successful deployment. This
  // is NOT permission to ignore a failed build/authorization/deploy job.
  requireProof(run.conclusion === "success" || (run.conclusion === "failure" &&
    jobs.filter((j) => j.name === "report" && j.conclusion === "failure").length === 1 &&
    jobs.filter((j) => j.name !== "report").every((j) => j.conclusion === "success")), "DEPLOYMENT_FAILED");
  const builds = jobs.filter((j) => j.name.startsWith("TSSR-build-v1|"));
  requireProof(builds.length === 1, "BUILD_IDENTITY_AMBIGUOUS");
  const parts = builds[0].name.split("|");
  requireProof(parts.length === 4 && parts[3] === deployed, "BUILD_SOURCE_MISMATCH");
  const [, id, expected] = parts;
  if (id) { changeRequestId(id); commitSha(expected); }
  else requireProof(expected === "", "TECHNICAL_DEPLOYMENT_IDENTITY_INVALID");
  successfulJob(jobs, builds[0].name);
  successfulJob(jobs, `TSSR-deploy-v1|${id}|${expected}|${deployed}`);
  // Reuse every exact checkout/build/push step check from the normal callback.
  await verifyRunEvidence({ change_request_id: id, expected_sha: expected, commit_sha: deployed,
    phase: "deploy", status: "published", run_id: String(run.id), run_attempt: run.run_attempt,
    pr_number: null, failure_reason: null }, repository, branch, read);
  const pagesRuns = await read<{ workflow_runs: Run[] }>(`/actions/runs?head_sha=${pagesSha}&status=success&per_page=20`);
  const candidate = pagesRuns.workflow_runs.find((r) => r.path === "dynamic/pages/pages-build-deployment");
  requireProof(candidate, "PAGES_RUN_MISSING");
  const pagesRun = await completedRun(read, candidate.id, candidate.run_attempt, repository);
  requireProof(pagesRun.path === "dynamic/pages/pages-build-deployment" && pagesRun.event === "dynamic" &&
    pagesRun.head_branch === "gh-pages" && pagesRun.head_sha === pagesSha && pagesRun.conclusion === "success", "PAGES_SOURCE_MISMATCH");
  const pagesJobs = await jobsFor(read, pagesRun);
  successfulJob(pagesJobs, "build"); successfulJob(pagesJobs, "deploy");
  return { protocol: "tssr-deployed-ancestor-v1", deployed_sha: deployed, gh_pages_sha: pagesSha,
    run_id: String(run.id), run_attempt: run.run_attempt, pages_run_id: String(pagesRun.id), pages_run_attempt: pagesRun.run_attempt,
    anchor_change_request_id: id, anchor_expected_sha: expected };
}

const COLUMNS = "id,status,publication_expected_sha,publication_mode,github_pr_number,published_commit_sha,publication_callback,published_at,failure_reason";

/** Called only behind publication-status's existing server webhook authentication. */
export async function handleReconciliation(
  client: SupabaseClient, body: Record<string, unknown>, read: GitHubReader = readGitHub, config = githubConfig(),
): Promise<Record<string, unknown>> {
  requireProof(body.dry_run === undefined || typeof body.dry_run === "boolean", "DRY_RUN_INVALID");
  const dryRun = body.dry_run !== false;
  const after = body.after_id == null ? null : changeRequestId(body.after_id);
  // Keyset pagination: a refused historical row cannot starve later proposals.
  let query = client.from("change_requests").select(COLUMNS).eq("status", "publishing").order("id").limit(11);
  if (after) query = query.gt("id", after);
  const { data, error } = await query;
  requireProof(!error && Array.isArray(data), "CANDIDATES_UNAVAILABLE");
  const rows = (data as PublicationRow[]).slice(0, 10);
  if (!rows.length) return { ok: true, dry_run: dryRun, results: [], next_cursor: null };
  // Cache immutable proof reads only within this bounded invocation.
  const cache = new Map<string, Promise<unknown>>();
  const cachedRead: GitHubReader = <T>(path: string) => {
    if (!cache.has(path)) cache.set(path, read(path));
    return cache.get(path)! as Promise<T>;
  };
  const repository = `${config.owner}/${config.repo}`;
  const proof = await verifyReconciliationEvidence(repository, config.branch, cachedRead);
  if (proof.anchor_change_request_id) {
    const anchor = await client.from("change_requests").select(COLUMNS).eq("id", proof.anchor_change_request_id).single();
    requireProof(!anchor.error && anchor.data && ["publishing", "published"].includes(anchor.data.status) &&
      anchor.data.failure_reason === null && anchor.data.publication_expected_sha === proof.anchor_expected_sha, "ANCHOR_IDENTITY_MISMATCH");
    await verifyDeployment(anchor.data as PublicationRow, proof.deployed_sha, repository, config.branch, cachedRead);
  }
  const results: Array<Record<string, unknown>> = [];
  for (const row of rows) {
    let reason = "INCOMPLETE_OR_CONTRADICTORY_STATE";
    try {
      requireProof(row.status === "publishing" && row.failure_reason === null && row.published_at === null &&
        row.publication_callback === null && row.publication_expected_sha &&
        row.published_commit_sha === row.publication_expected_sha, reason);
      let actual = commitSha(row.publication_expected_sha);
      // For PR transport the deployed ancestor must be the actual merged commit,
      // not merely its approved head (which may not be on main after squash).
      if (row.publication_mode === "pull_request" && row.github_pr_number) {
        const pull = await cachedRead<{ merge_commit_sha: string }>(`/pulls/${row.github_pr_number}`);
        actual = commitSha(pull.merge_commit_sha);
      }
      reason = "COMMIT_NOT_ON_MAIN_OR_IDENTITY_MISMATCH";
      const number = await verifyDeployment(row, actual, repository, config.branch, cachedRead);
      reason = "NOT_DEPLOYED_ANCESTOR";
      await assertAncestor(cachedRead, actual, proof.deployed_sha);
      // The immutable intent already binds the CR to its own commit; verify it
      // still exists, without logging its message, author or pedagogical files.
      reason = "COMMIT_MISSING";
      const commit = await cachedRead<{ sha: string }>(`/git/commits/${row.publication_expected_sha}`);
      requireProof(commit.sha === row.publication_expected_sha, "COMMIT_MISSING");
      const receipt: ReconciledReceipt = { change_request_id: row.id, expected_sha: row.publication_expected_sha,
        commit_sha: actual, status: "published", phase: "deploy", run_id: proof.run_id, run_attempt: proof.run_attempt,
        pr_number: number, failure_reason: null, reconciliation: proof };
      // Re-read the mutable Pages reference before each terminal attempt. A
      // changing deployment fails closed; the next scheduled pass re-attests it.
      reason = "PAGES_MOVED";
      const pages = await read<{ sha: string }>("/commits/gh-pages");
      requireProof(pages.sha === proof.gh_pages_sha, "PAGES_MOVED");
      reason = "PERMIT_UNFINISHED_OR_STATE_CHANGED";
      const complete = await client.rpc("service_reconcile_publication", {
        p_change_request_id: row.id, p_receipt: receipt, p_dry_run: dryRun,
      });
      requireProof(!complete.error && complete.data?.id === row.id &&
        (dryRun ? complete.data?.eligible === true : complete.data?.status === "published"), reason);
      results.push({ id: row.id, expected_sha: row.publication_expected_sha,
        result: dryRun ? "ELIGIBLE" : complete.data.replayed ? "REPLAYED" : "RECONCILED" });
    } catch {
      // Never include upstream exception bodies, credentials or personal data.
      results.push({ id: row.id, expected_sha: row.publication_expected_sha, result: "SKIPPED", reason });
    }
  }
  for (const result of results) console.info(JSON.stringify({ event: "publication_reconciliation", ...result,
    deployed_sha: proof.deployed_sha, run_id: proof.run_id, gh_pages_sha: proof.gh_pages_sha, dry_run: dryRun }));
  return { ok: true, dry_run: dryRun, proof, results, next_cursor: data.length > 10 ? rows.at(-1)!.id : null };
}
