import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";
import { githubConfig, readGitHub } from "./github.ts";
import { changeRequestId, commitSha } from "./publication-metadata.ts";
import { type GitHubReader, type PublicationRow, verifyDeployment, verifyRunEvidence } from "./publication.ts";
import { assertAncestor, type DeploymentProof, verifyReconciliationEvidence } from "./reconciliation.ts";

interface File { file_path: string; new_file_path: string | null; change_type: string; content_encoding: string; new_content: string | null }
export interface RecoveryEvidence {
  protocol: "tssr-failed-deployment-recovery-v1";
  initial_commit_sha: string; initial_callback: PublicationRow["publication_callback"];
  main_sha: string; deployment: DeploymentProof; files: Array<{ path: string; sha256: string }>;
}
function requireProof(value: unknown, reason: string): asserts value {
  if (!value) throw new Error(reason);
}
async function hexHash(algorithm: string, bytes: Uint8Array): Promise<string> {
  const digest = await crypto.subtle.digest(algorithm, bytes);
  return Array.from(new Uint8Array(digest), b => b.toString(16).padStart(2, "0")).join("");
}

/** Read immutable Git trees. Git blob identity proves exact bytes, not path existence. */
export async function verifyRecoveryFiles(files: File[], refs: string[], read: GitHubReader) {
  requireProof(files.length > 0 && files.length <= 100, "RECOVERY_FILES_INVALID");
  const seen = new Set<string>();
  const proofs = [];
  for (const file of files) {
    requireProof(!seen.has(file.file_path) && /^docs\/[a-zA-Z0-9_./-]+\.md$/.test(file.file_path) &&
      !file.file_path.split('/').includes('..') && !file.new_file_path &&
      ["create", "update"].includes(file.change_type) && file.content_encoding === "utf-8" &&
      typeof file.new_content === "string", "RECOVERY_FILES_INVALID");
    seen.add(file.file_path);
    const bytes = new TextEncoder().encode(file.new_content);
    const prefix = new TextEncoder().encode(`blob ${bytes.length}\0`);
    const gitBytes = new Uint8Array(prefix.length + bytes.length);
    gitBytes.set(prefix); gitBytes.set(bytes, prefix.length);
    proofs.push({ path: file.file_path, sha256: await hexHash("SHA-256", bytes), blob: await hexHash("SHA-1", gitBytes) });
  }
  for (const ref of new Set(refs)) {
    const tree = await read<{ truncated: boolean; tree: Array<{ path: string; sha: string; type: string; mode: string }> }>(`/git/trees/${commitSha(ref)}?recursive=1`);
    requireProof(tree.truncated === false, "RECOVERY_TREE_INCOMPLETE");
    for (const proof of proofs) {
      const matches = tree.tree.filter(item => item.path === proof.path);
      requireProof(matches.length === 1 && matches[0].type === "blob" &&
        ["100644", "100755"].includes(matches[0].mode) && matches[0].sha === proof.blob, "RECOVERY_CONTENT_MISMATCH");
    }
  }
  return proofs.map(({ path, sha256 }) => ({ path, sha256 })).sort((a,b) => a.path < b.path ? -1 : 1);
}

/** Only reachable behind publication-status's server webhook secret. Never AGENT JWT. */
export async function handleRecovery(client: SupabaseClient, body: Record<string, unknown>,
  read: GitHubReader = readGitHub, config = githubConfig()) {
  const id = changeRequestId(body.change_request_id);
  requireProof(body.dry_run === undefined || typeof body.dry_run === "boolean", "DRY_RUN_INVALID");
  const dryRun = body.dry_run !== false;
  const { data: row, error } = await client.from("change_requests").select("*").eq("id", id).single();
  requireProof(!error && row && row.status === "failed" && row.publication_mode === "direct" &&
    row.published_commit_sha && row.published_commit_sha === row.publication_expected_sha &&
    row.publication_callback?.status === "failed" && row.publication_callback?.phase === "deploy" &&
    row.publication_callback.commit_sha === row.published_commit_sha && row.failure_reason && !row.published_at,
    "RECOVERY_FAILED_DEPLOYMENT_REQUIRED");
  // Replays retain the original immutable evidence and are rechecked by SQL.
  const existing = await client.from("publication_recoveries").select("evidence").eq("change_request_id", id).maybeSingle();
  requireProof(!existing.error, "RECOVERY_READ_FAILED");
  let evidence: RecoveryEvidence;
  if (existing.data) {
    evidence = existing.data.evidence;
  } else {
    const files = await client.from("change_request_files").select("file_path,new_file_path,change_type,content_encoding,new_content").eq("change_request_id", id);
    requireProof(!files.error && Array.isArray(files.data), "RECOVERY_FILES_UNAVAILABLE");
    const repository = `${config.owner}/${config.repo}`;
    await verifyRunEvidence(row.publication_callback, repository, config.branch, read);
    const initial = await read<{ sha: string; parents: unknown[]; files: Array<{ filename: string; status: string }> }>(`/commits/${commitSha(row.published_commit_sha)}?per_page=100`);
    const expectedPaths = files.data.map(f => f.file_path).sort();
    requireProof(initial.sha === row.published_commit_sha && initial.parents.length === 1 &&
      initial.files.length < 100 && initial.files.length === expectedPaths.length &&
      initial.files.every(f => files.data.some(file => file.file_path === f.filename &&
        f.status === (file.change_type === "create" ? "added" : "modified"))) &&
      initial.files.map(f => f.filename).sort().every((path, i) => path === expectedPaths[i]), "RECOVERY_INITIAL_MANIFEST_MISMATCH");
    const proof = await verifyReconciliationEvidence(repository, config.branch, read);
    requireProof(proof.run_id !== row.publication_callback.run_id, "RECOVERY_LATER_DEPLOYMENT_REQUIRED");
    if (proof.anchor_change_request_id) {
      const anchor = await client.from("change_requests").select("*").eq("id", proof.anchor_change_request_id).single();
      requireProof(!anchor.error && anchor.data?.publication_expected_sha === proof.anchor_expected_sha &&
        ["publishing", "published"].includes(anchor.data.status) && !anchor.data.failure_reason, "RECOVERY_ANCHOR_MISMATCH");
      await verifyDeployment(anchor.data, proof.deployed_sha, repository, config.branch, read);
    }
    await verifyDeployment(row, row.published_commit_sha, repository, config.branch, read);
    await assertAncestor(read, row.published_commit_sha, proof.deployed_sha);
    const main = await read<{ sha: string }>(`/commits/${encodeURIComponent(config.branch)}`);
    await assertAncestor(read, proof.deployed_sha, commitSha(main.sha));
    const hashes = await verifyRecoveryFiles(files.data, [row.published_commit_sha, proof.deployed_sha, main.sha], read);
    const pages = await read<{ sha: string }>("/commits/gh-pages");
    const mainAgain = await read<{ sha: string }>(`/commits/${encodeURIComponent(config.branch)}`);
    requireProof(pages.sha === proof.gh_pages_sha && mainAgain.sha === main.sha, "RECOVERY_REFS_MOVED");
    evidence = { protocol: "tssr-failed-deployment-recovery-v1", initial_commit_sha: row.published_commit_sha,
      initial_callback: row.publication_callback, main_sha: main.sha, deployment: proof, files: hashes };
  }
  const result = await client.rpc("service_recover_failed_publication", {
    p_change_request_id: id, p_evidence: evidence, p_dry_run: dryRun,
  });
  requireProof(!result.error && result.data?.id === id &&
    (result.data.status === "recovered" || (dryRun && result.data.eligible === true)), "RECOVERY_CONSENSUS_OR_STATE_REFUSED");
  return { ok: true, dry_run: dryRun, ...result.data };
}
