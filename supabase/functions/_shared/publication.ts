import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";
import { changeRequestId, commitSha } from "./publication-metadata.ts";
import { githubConfig, readGitHub } from "./github.ts";

export interface PublicationRow {
  id: string;
  status: string;
  publication_expected_sha: string | null;
  publication_mode: "direct" | "pull_request" | null;
  github_pr_number: number | null;
  published_commit_sha: string | null;
  publication_callback: PublicationReceipt | null;
}

export interface PublicationReceipt {
  change_request_id: string;
  expected_sha: string;
  commit_sha: string;
  status: "published" | "failed";
  phase: "deploy" | "pr-validation";
  run_id: string;
  run_attempt: number;
  pr_number: number | null;
  failure_reason: string | null;
}

export type GitHubReader = <T>(path: string) => Promise<T>;
interface Pull {
  number: number; state: string; merged: boolean; merge_commit_sha: string | null;
  head: { sha: string; ref: string; repo: { full_name: string } | null };
  base: { ref: string; repo: { full_name: string } };
}
interface Run {
  id: number; run_attempt: number; path: string; event: string; head_branch: string;
  head_sha: string; repository: { full_name: string }; pull_requests: Array<{ number: number }>;
}
interface Job {
  name: string;
  conclusion: string | null;
  steps?: Array<{ name: string; conclusion: string | null }>;
}
const COLUMNS = "id, status, publication_expected_sha, publication_mode, github_pr_number, published_commit_sha, publication_callback";

function positiveInteger(value: unknown, label: string): number {
  if (typeof value !== "number" || !Number.isSafeInteger(value) || value < 1) throw new Error(`${label} invalide.`);
  return value;
}

export function normalizeReceipt(body: Record<string, unknown>): PublicationReceipt {
  if (body.status !== "published" && body.status !== "failed") throw new Error("Résultat de publication invalide.");
  if (body.phase !== "deploy" && body.phase !== "pr-validation") throw new Error("Phase de publication invalide.");
  if (body.phase === "pr-validation" && body.status !== "failed") throw new Error("Une validation de PR ne publie pas le site.");
  if (typeof body.run_id !== "string" || !/^[1-9][0-9]{0,19}$/.test(body.run_id)) throw new Error("Run GitHub invalide.");
  let reason: string | null = null;
  if (body.status === "failed") {
    reason = body.failure_reason == null ? "Le workflow de publication a échoué." : body.failure_reason as string;
    if (typeof reason !== "string" || reason.length > 2000) throw new Error("Motif de publication invalide.");
  } else if (body.failure_reason != null) throw new Error("Un succès ne peut pas porter un motif d’échec.");
  return {
    change_request_id: changeRequestId(body.change_request_id),
    expected_sha: commitSha(body.expected_sha), commit_sha: commitSha(body.commit_sha),
    status: body.status, phase: body.phase, run_id: body.run_id,
    run_attempt: positiveInteger(body.run_attempt, "Tentative GitHub"),
    pr_number: body.pr_number == null ? null : positiveInteger(body.pr_number, "Numéro PR"),
    failure_reason: reason,
  };
}

export function identicalReceipt(left: PublicationReceipt, right: PublicationReceipt): boolean {
  const keys = Object.keys(right) as Array<keyof PublicationReceipt>;
  return Object.keys(left).length === keys.length && keys.every((key) => left[key] === right[key]);
}

/** Pure precheck; the SQL RPC repeats the state/identity checks under a row lock. */
export function checkReceiptState(row: PublicationRow, receipt: PublicationReceipt): "apply" | "replay" {
  if (row.id !== receipt.change_request_id || !row.publication_expected_sha || row.publication_expected_sha !== receipt.expected_sha) {
    throw new Error("Le SHA attendu ne correspond pas à cette proposition.");
  }
  if (row.publication_callback) {
    if (identicalReceipt(row.publication_callback, receipt)) return "replay";
    throw new Error("Callback contradictoire avec le résultat déjà enregistré.");
  }
  if (row.status !== "publishing") throw new Error("Cette proposition n’est pas en publication.");
  if (row.publication_mode === "direct") {
    if (receipt.commit_sha !== receipt.expected_sha || receipt.pr_number !== null || receipt.phase !== "deploy") {
      throw new Error("Callback incompatible avec la publication directe attendue.");
    }
  } else if (row.publication_mode === "pull_request") {
    if (receipt.pr_number === null || row.github_pr_number !== null && row.github_pr_number !== receipt.pr_number) {
      throw new Error("Le numéro PR ne correspond pas à la proposition.");
    }
    if (receipt.phase === "pr-validation" && receipt.commit_sha !== receipt.expected_sha) throw new Error("SHA testé incompatible.");
  } else throw new Error("Intention de publication manquante.");
  return "apply";
}

async function loadPublication(client: SupabaseClient, id: string): Promise<PublicationRow> {
  const { data, error } = await client.from("change_requests").select(COLUMNS).eq("id", changeRequestId(id)).single();
  if (error || !data) throw new Error("Proposition de publication introuvable.");
  return data as PublicationRow;
}

export async function verifyPull(
  row: PublicationRow, number: number, repository: string, branch: string,
  read: GitHubReader, allowMerged = false,
): Promise<Pull> {
  positiveInteger(number, "Numéro PR");
  if (!row.publication_expected_sha || row.publication_mode !== "pull_request" ||
    row.github_pr_number !== null && row.github_pr_number !== number) throw new Error("PR non liée à la proposition.");
  const pull = await read<Pull>(`/pulls/${number}`);
  if (pull.number !== number || pull.head.sha !== row.publication_expected_sha ||
    pull.head.ref !== `collaboration/change-${row.id}` ||
    pull.head.repo?.full_name.toLowerCase() !== repository.toLowerCase() ||
    pull.base.repo.full_name.toLowerCase() !== repository.toLowerCase() || pull.base.ref !== branch ||
    (!allowMerged && (pull.state !== "open" || pull.merged))) {
    throw new Error("La PR, sa branche ou son SHA ne correspond pas à la proposition validée.");
  }
  return pull;
}

async function verifyDeployment(
  row: PublicationRow, sha: string, repository: string, branch: string, read: GitHubReader,
): Promise<number | null> {
  commitSha(sha);
  if (!row.publication_expected_sha) throw new Error("SHA de publication attendu manquant.");
  if (row.publication_mode === "direct") {
    if (sha !== row.publication_expected_sha) throw new Error("SHA différent du commit approuvé.");
  } else if (row.publication_mode === "pull_request" && row.github_pr_number !== null) {
    const pull = await verifyPull(row, row.github_pr_number, repository, branch, read, true);
    if (!pull.merged || pull.merge_commit_sha !== sha) throw new Error("SHA différent du commit réellement fusionné.");
  } else throw new Error("Intention de publication incomplète.");
  // A valid commit object or a branch name alone is not evidence of publication on main.
  const comparison = await read<{ status: string }>(`/compare/${sha}...${encodeURIComponent(branch)}`);
  if (!["identical", "ahead"].includes(comparison.status)) throw new Error("Le commit n’appartient pas à la branche publiée.");
  return row.publication_mode === "pull_request" ? row.github_pr_number : null;
}

export async function verifyRunEvidence(
  receipt: PublicationReceipt, repository: string, branch: string, read: GitHubReader,
): Promise<void> {
  const base = `/actions/runs/${receipt.run_id}/attempts/${receipt.run_attempt}`;
  const run = await read<Run>(base);
  const workflow = receipt.phase === "deploy" ? "deploy-docs.yml" : "publish-collaboration-pr.yml";
  if (String(run.id) !== receipt.run_id || run.run_attempt !== receipt.run_attempt ||
    run.repository.full_name.toLowerCase() !== repository.toLowerCase() ||
    run.path.split("@")[0] !== `.github/workflows/${workflow}`) throw new Error("Run GitHub non lié au workflow attendu.");
  if (receipt.phase === "deploy") {
    if (!["push", "workflow_dispatch"].includes(run.event) || run.head_branch !== branch ||
      (run.event === "push" && run.head_sha !== receipt.commit_sha)) throw new Error("Source du run de déploiement incompatible.");
  } else {
    if (run.event !== "pull_request_target" || !run.pull_requests.some((pull) => pull.number === receipt.pr_number)) {
      throw new Error("Run de validation non lié à cette PR.");
    }
  }
  const jobs = await read<{ total_count: number; jobs: Job[] }>(`${base}/jobs?per_page=100`);
  if (jobs.total_count > jobs.jobs.length) throw new Error("Preuve GitHub incomplète : liste de jobs tronquée.");
  // Names returned by GitHub identify the pinned source from trusted attestation
  // outputs, unlike run.head_sha for a manual dispatch of an older main commit.
  const roles = receipt.phase === "deploy" ? ["build", "deploy"] : ["validate", "merge"];
  const boundJobs = roles.map((role) => {
    const name = `TSSR-${role}-v1|${receipt.change_request_id}|${receipt.expected_sha}|${receipt.commit_sha}`;
    const matches = jobs.jobs.filter((job) => job.name === name);
    if (matches.length > 1) throw new Error("Preuve de job ambiguë.");
    return matches[0];
  });
  const requireStep = (job: Job | undefined, name: string) => {
    const matches = job?.steps?.filter((step) => step.name === name) || [];
    if (matches.length !== 1 || matches[0].conclusion !== "success") {
      throw new Error("GitHub ne confirme pas l’étape du commit attesté.");
    }
  };
  if (receipt.status === "published") {
    requireStep(boundJobs[0], "Verify checked-out deployment commit");
    requireStep(boundJobs[0], "Validate and build MkDocs");
    requireStep(boundJobs[1], "Publish gh-pages without force push");
  } else if (!boundJobs.some((job) => job &&
    [job, ...(job.steps || [])].some((item) => ["failure", "cancelled"].includes(item.conclusion || "")))) {
    throw new Error("GitHub ne confirme pas l’échec déclaré.");
  }
}

export async function handlePublication(
  client: SupabaseClient, body: Record<string, unknown>,
  read: GitHubReader = readGitHub,
  config = githubConfig(),
): Promise<Record<string, unknown>> {
  const id = changeRequestId(body.change_request_id);
  const row = await loadPublication(client, id);
  if (!row.publication_expected_sha || !row.publication_mode) {
    throw new Error("Publication historique ou intention incomplète : réconciliation manuelle requise, aucun état modifié.");
  }
  const repository = `${config.owner}/${config.repo}`;
  if (body.action === "verify-pr") {
    if (row.status !== "publishing" || commitSha(body.commit_sha) !== row.publication_expected_sha) throw new Error("Proposition/SHA non disponible pour cette PR.");
    const number = positiveInteger(body.pr_number, "Numéro PR");
    await verifyPull(row, number, repository, config.branch, read);
    return { ok: true, change_request_id: id, expected_sha: row.publication_expected_sha, pr_number: number };
  }
  if (body.action === "verify-deploy") {
    if (row.status !== "publishing" && row.status !== "published") throw new Error("Proposition non disponible pour déploiement.");
    const number = await verifyDeployment(row, commitSha(body.commit_sha), repository, config.branch, read);
    return { ok: true, change_request_id: id, expected_sha: row.publication_expected_sha, pr_number: number };
  }
  if (body.action != null) throw new Error("Action de publication inconnue.");
  const receipt = normalizeReceipt(body);
  if (checkReceiptState(row, receipt) === "replay") {
    return { ok: true, replayed: true, change_request: { id: row.id, status: row.status, published_commit_sha: row.published_commit_sha } };
  }
  if (receipt.phase === "deploy") {
    const number = await verifyDeployment(row, receipt.commit_sha, repository, config.branch, read);
    if (number !== receipt.pr_number) throw new Error("PR du callback incompatible.");
  } else {
    const pull = await verifyPull(row, receipt.pr_number!, repository, config.branch, read, true);
    if (pull.merged) throw new Error("Une PR déjà fusionnée ne peut pas être déclarée en échec de validation.");
  }
  await verifyRunEvidence(receipt, repository, config.branch, read);
  const { data, error } = await client.rpc("service_complete_publication", { p_change_request_id: id, p_receipt: receipt });
  if (error || !data) throw new Error(error?.message || "Retour de publication non enregistré.");
  return { ok: true, replayed: Boolean(data.replayed), change_request: data };
}
