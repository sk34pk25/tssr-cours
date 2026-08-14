import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";
import {
  ProposedFile,
  validateMkDocsEdit,
  validateProposedFiles,
} from "./validation.ts";

interface GitHubConfig {
  token: string;
  owner: string;
  repo: string;
  branch: string;
  publishMode: "auto" | "direct" | "pull_request";
}

interface GitTreeItem {
  path: string;
  mode: string;
  type: "blob" | "tree";
  sha: string;
}

interface ChangeRequestRow {
  id: string;
  title: string;
  author_display_name: string;
  base_commit_sha: string;
}

function env(name: string, fallback = ""): string {
  return Deno.env.get(name) || fallback;
}

export function githubConfig(): GitHubConfig {
  const token = env("GITHUB_TOKEN");
  const owner = env("GITHUB_OWNER");
  const repo = env("GITHUB_REPO");
  const branch = env("GITHUB_BRANCH", "main");
  const requestedMode = env("GITHUB_PUBLISH_MODE", "auto");
  if (!token || !owner || !repo) throw new Error("Configuration GitHub serveur incomplète.");
  if (!["auto", "direct", "pull_request"].includes(requestedMode)) {
    throw new Error("GITHUB_PUBLISH_MODE doit valoir auto, direct ou pull_request.");
  }
  return { token, owner, repo, branch, publishMode: requestedMode as GitHubConfig["publishMode"] };
}

async function github<T>(config: GitHubConfig, path: string, init: RequestInit = {}): Promise<T> {
  const response = await fetch(`https://api.github.com/repos/${config.owner}/${config.repo}${path}`, {
    ...init,
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${config.token}`,
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });
  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    const error = new Error(data?.message || `Erreur GitHub ${response.status}`) as Error & { status?: number };
    error.status = response.status;
    throw error;
  }
  return data as T;
}

function decodeBase64(value: string): string {
  const binary = atob(value.replace(/\s/g, ""));
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export async function fetchRepositoryFile(filePath: string): Promise<{
  content: string;
  encoding: "utf-8";
  fileSha: string;
  commitSha: string;
}> {
  const config = githubConfig();
  const ref = await github<{ object: { sha: string } }>(config, `/git/ref/heads/${encodeURIComponent(config.branch)}`);
  const encodedPath = filePath.split("/").map(encodeURIComponent).join("/");
  const file = await github<{ content: string; encoding: string; sha: string; type: string }>(
    config,
    `/contents/${encodedPath}?ref=${encodeURIComponent(config.branch)}`,
  );
  if (file.type !== "file" || file.encoding !== "base64") throw new Error("Le fichier demandé n’est pas un fichier texte lisible.");
  return { content: decodeBase64(file.content), encoding: "utf-8", fileSha: file.sha, commitSha: ref.object.sha };
}

export async function fetchRepositoryFileRaw(filePath: string): Promise<{
  content: string;
  encoding: "base64";
  fileSha: string;
  commitSha: string;
}> {
  const config = githubConfig();
  const ref = await github<{ object: { sha: string } }>(config, `/git/ref/heads/${encodeURIComponent(config.branch)}`);
  const encodedPath = filePath.split("/").map(encodeURIComponent).join("/");
  const file = await github<{ content: string; encoding: string; sha: string; type: string }>(
    config,
    `/contents/${encodedPath}?ref=${encodeURIComponent(config.branch)}`,
  );
  if (file.type !== "file" || file.encoding !== "base64") throw new Error("Le fichier demandé n’est pas lisible.");
  return { content: file.content.replace(/\s/g, ""), encoding: "base64", fileSha: file.sha, commitSha: ref.object.sha };
}

export async function fetchRepositoryTree(): Promise<{
  commitSha: string;
  files: Array<{ path: string; sha: string }>;
}> {
  const config = githubConfig();
  const ref = await github<{ object: { sha: string } }>(config, `/git/ref/heads/${encodeURIComponent(config.branch)}`);
  const commit = await github<{ tree: { sha: string } }>(config, `/git/commits/${ref.object.sha}`);
  const tree = await github<{ tree: GitTreeItem[]; truncated: boolean }>(config, `/git/trees/${commit.tree.sha}?recursive=1`);
  if (tree.truncated) throw new Error("L’arbre GitHub est trop volumineux pour une validation sûre.");
  return {
    commitSha: ref.object.sha,
    files: tree.tree.filter((item) => item.type === "blob").map((item) => ({ path: item.path, sha: item.sha })),
  };
}

async function markFailure(
  adminClient: SupabaseClient,
  changeId: string,
  status: "conflict" | "failed",
  reason: string,
): Promise<void> {
  await adminClient.from("change_requests").update({ status, failure_reason: reason }).eq("id", changeId);
  await adminClient.from("audit_logs").insert({
    action: status === "conflict" ? "publication_conflict" : "publication_failed",
    target_type: "change_request",
    target_id: changeId,
    metadata: { reason },
  });
}

function treeMap(tree: GitTreeItem[]): Map<string, GitTreeItem> {
  return new Map(tree.filter((entry) => entry.type === "blob").map((entry) => [entry.path, entry]));
}

function applyAvailableFiles(current: Set<string>, files: ProposedFile[]): Set<string> {
  const result = new Set(current);
  for (const file of files) {
    if (file.change_type === "delete" || file.change_type === "rename") result.delete(file.file_path);
    if (file.change_type !== "delete") result.add(file.new_file_path || file.file_path);
  }
  return result;
}

function assertNoConflicts(files: ProposedFile[], currentTree: Map<string, GitTreeItem>): void {
  for (const file of files) {
    const current = currentTree.get(file.file_path);
    if (file.change_type === "create") {
      if (current) throw new Error(`Le fichier ${file.file_path} existe désormais.`);
      continue;
    }
    if (!current) throw new Error(`Le fichier ${file.file_path} n’existe plus.`);
    if (current.sha !== file.base_file_sha) {
      throw new Error(`Le fichier ${file.file_path} a été modifié depuis la création de la proposition.`);
    }
    if (file.change_type === "rename" && currentTree.has(file.new_file_path || "")) {
      throw new Error(`La destination ${file.new_file_path} existe désormais.`);
    }
  }
}

async function createAtomicCommit(
  config: GitHubConfig,
  request: ChangeRequestRow,
  files: ProposedFile[],
  approverNames: string[],
): Promise<{ commitSha: string; currentSha: string }> {
  const ref = await github<{ object: { sha: string } }>(config, `/git/ref/heads/${encodeURIComponent(config.branch)}`);
  const currentSha = ref.object.sha;
  const commit = await github<{ tree: { sha: string } }>(config, `/git/commits/${currentSha}`);
  const recursive = await github<{ tree: GitTreeItem[]; truncated: boolean }>(config, `/git/trees/${commit.tree.sha}?recursive=1`);
  if (recursive.truncated) throw new Error("L’arbre GitHub est trop volumineux pour une validation sûre.");
  const currentTree = treeMap(recursive.tree);
  assertNoConflicts(files, currentTree);

  const availableFiles = applyAvailableFiles(new Set(currentTree.keys()), files);
  const mkdocsChange = files.find((file) => file.file_path === "mkdocs.yml");
  const currentMkDocs = await fetchRepositoryFile("mkdocs.yml");
  const nextMkDocs = mkdocsChange?.new_content ?? currentMkDocs.content;
  validateMkDocsEdit(currentMkDocs.content, nextMkDocs || "", availableFiles);

  const elements: Array<Record<string, unknown>> = [];
  for (const file of files) {
    if (file.change_type === "delete" || file.change_type === "rename") {
      elements.push({ path: file.file_path, mode: "100644", type: "blob", sha: null });
    }
    if (file.change_type !== "delete") {
      const blob = await github<{ sha: string }>(config, "/git/blobs", {
        method: "POST",
        body: JSON.stringify({
          content: file.new_content,
          encoding: file.content_encoding === "base64" ? "base64" : "utf-8",
        }),
      });
      elements.push({
        path: file.new_file_path || file.file_path,
        mode: currentTree.get(file.file_path)?.mode || "100644",
        type: "blob",
        sha: blob.sha,
      });
    }
  }

  const tree = await github<{ sha: string }>(config, "/git/trees", {
    method: "POST",
    body: JSON.stringify({ base_tree: commit.tree.sha, tree: elements }),
  });
  const shortId = request.id.slice(0, 8);
  const message = [
    `docs: apply approved change #${shortId}`,
    "",
    `Approved change: ${request.title}`,
    `Author: ${request.author_display_name}`,
    `Approved by: ${approverNames.join(", ")}`,
    `Change-Request-ID: ${request.id}`,
  ].join("\n");
  const created = await github<{ sha: string }>(config, "/git/commits", {
    method: "POST",
    body: JSON.stringify({ message, tree: tree.sha, parents: [currentSha] }),
  });
  return { commitSha: created.sha, currentSha };
}

async function publishDirect(config: GitHubConfig, commitSha: string, expectedParent: string): Promise<void> {
  try {
    await github(config, `/git/refs/heads/${encodeURIComponent(config.branch)}`, {
      method: "PATCH",
      body: JSON.stringify({ sha: commitSha, force: false }),
    });
  } catch (error) {
    const latest = await github<{ object: { sha: string } }>(config, `/git/ref/heads/${encodeURIComponent(config.branch)}`);
    if (latest.object.sha !== expectedParent) {
      const conflict = new Error("La branche GitHub a avancé pendant la publication.") as Error & { conflict?: boolean };
      conflict.conflict = true;
      throw conflict;
    }
    throw error;
  }
}

async function publishPullRequest(
  config: GitHubConfig,
  request: ChangeRequestRow,
  commitSha: string,
): Promise<number> {
  const branch = `collaboration/change-${request.id}`;
  await github(config, "/git/refs", {
    method: "POST",
    body: JSON.stringify({ ref: `refs/heads/${branch}`, sha: commitSha }),
  });
  const pull = await github<{ number: number }>(config, "/pulls", {
    method: "POST",
    body: JSON.stringify({
      title: `docs: ${request.title}`,
      head: branch,
      base: config.branch,
      body: [
        `Publication automatique de la proposition approuvée ${request.id}.`,
        "",
        "Cette Pull Request est validée et fusionnée automatiquement après `mkdocs build --strict`.",
      ].join("\n"),
      maintainer_can_modify: false,
    }),
  });
  return pull.number;
}

export async function publishApprovedChange(adminClient: SupabaseClient, changeId: string): Promise<void> {
  let claimed = false;
  try {
    const { data: claimedRequest, error: claimError } = await adminClient
      .rpc("service_claim_change_for_publication", { p_change_request_id: changeId });
    const request = Array.isArray(claimedRequest) ? claimedRequest[0] : claimedRequest;
    if (claimError || !request) throw new Error(claimError?.message || "Publication déjà prise en charge.");
    claimed = true;

    const { data: rawFiles, error: filesError } = await adminClient
      .from("change_request_files")
      .select("file_path, new_file_path, base_file_sha, old_content, new_content, content_encoding, change_type")
      .eq("change_request_id", changeId);
    if (filesError) throw new Error(filesError.message);
    const files = validateProposedFiles((rawFiles || []) as ProposedFile[]);

    const { data: approvals, error: approvalsError } = await adminClient
      .from("change_approvals")
      .select("user_display_name, decision, user_id")
      .eq("change_request_id", changeId)
      .eq("decision", "approved");
    if (approvalsError) throw new Error(approvalsError.message);
    const approverIds = new Set((approvals || []).map((approval) => approval.user_id));
    if (!(request.required_approvers as string[]).every((id) => approverIds.has(id))) {
      throw new Error("Le consensus n’est plus complet.");
    }

    const config = githubConfig();
    const { commitSha, currentSha } = await createAtomicCommit(
      config,
      request as ChangeRequestRow,
      files,
      (approvals || []).map((approval) => approval.user_display_name),
    );

    let mode = config.publishMode;
    let prNumber: number | null = null;
    if (mode !== "pull_request") {
      try {
        await publishDirect(config, commitSha, currentSha);
        mode = "direct";
      } catch (error) {
        if ((error as Error & { conflict?: boolean }).conflict) throw error;
        if (config.publishMode === "direct") throw error;
        mode = "pull_request";
      }
    }
    if (mode === "pull_request") {
      prNumber = await publishPullRequest(config, request as ChangeRequestRow, commitSha);
    }

    await adminClient.from("change_requests").update({
      published_commit_sha: commitSha,
      github_pr_number: prNumber,
      failure_reason: null,
    }).eq("id", changeId);
    await adminClient.from("audit_logs").insert({
      action: mode === "direct" ? "publication_committed" : "publication_pull_request_created",
      target_type: "change_request",
      target_id: changeId,
      metadata: { commit_sha: commitSha, pull_request: prNumber },
    });
  } catch (error) {
    if (!claimed && /déjà prise en charge/i.test(error instanceof Error ? error.message : String(error))) return;
    const conflict = Boolean((error as Error & { conflict?: boolean }).conflict) || /modifié|existe désormais|n’existe plus|avancé/i.test(
      error instanceof Error ? error.message : String(error),
    );
    await markFailure(adminClient, changeId, conflict ? "conflict" : "failed", error instanceof Error ? error.message : String(error));
    if (!conflict) throw error;
  }
}
