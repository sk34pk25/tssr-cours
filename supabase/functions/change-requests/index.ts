import { parse } from "npm:yaml@2.9.0";
import { handlePreflight, isAllowedOrigin, jsonResponse, errorResponse } from "../_shared/cors.ts";
import { readJsonBody, requireProfile } from "../_shared/auth.ts";
import {
  fetchRepositoryFile,
  fetchRepositoryFileRaw,
  fetchRepositoryTree,
  publishApprovedChange,
} from "../_shared/github.ts";
import {
  assertEditablePath,
  buildNavigationEdit,
  type ProposedFile,
  validateMkDocsEdit,
  validateProposedFiles,
} from "../_shared/validation.ts";

interface ChangeRequestBody {
  action: string;
  change_request_id?: string;
  decision?: "approved" | "rejected";
  comment?: string;
  title?: string;
  description?: string;
  base_commit_sha?: string;
  files?: ProposedFile[];
  supersedes_id?: string;
  file_path?: string;
  site_name?: string;
  site_description?: string;
  nav?: unknown;
}

function rpcRow<T>(data: T | T[] | null): T | null {
  return Array.isArray(data) ? (data[0] ?? null) : data;
}

function cleanTitle(title: string): string {
  const value = title.trim();
  if (value.length < 3 || value.length > 160) throw new Error("Le titre doit contenir entre 3 et 160 caractères.");
  return value;
}

async function trustedFiles(files: ProposedFile[], baseCommitSha: string): Promise<ProposedFile[]> {
  const validated = validateProposedFiles(files);
  const tree = await fetchRepositoryTree();
  if (tree.commitSha !== baseCommitSha) {
    throw new Error("Le dépôt a changé depuis l’ouverture de l’éditeur. Rechargez la source avant de soumettre.");
  }
  const treeMap = new Map(tree.files.map((file) => [file.path, file.sha]));
  const trusted: ProposedFile[] = [];

  for (const file of validated) {
    const currentSha = treeMap.get(file.file_path);
    if (file.change_type === "create") {
      if (currentSha) throw new Error(`Le fichier ${file.file_path} existe déjà.`);
      trusted.push({ ...file, base_file_sha: null, old_content: null });
      continue;
    }
    if (!currentSha || currentSha !== file.base_file_sha) {
      throw new Error(`Le fichier ${file.file_path} a changé. Rechargez-le avant de soumettre.`);
    }
    const current = file.content_encoding === "base64"
      ? await fetchRepositoryFileRaw(file.file_path)
      : await fetchRepositoryFile(file.file_path);
    if (file.change_type === "rename" && treeMap.has(file.new_file_path || "")) {
      throw new Error(`La destination ${file.new_file_path} existe déjà.`);
    }
    trusted.push({ ...file, old_content: current.content, base_file_sha: current.fileSha });
  }

  const available = new Set(tree.files.map((file) => file.path));
  for (const file of trusted) {
    if (file.change_type === "delete" || file.change_type === "rename") available.delete(file.file_path);
    if (file.change_type !== "delete") available.add(file.new_file_path || file.file_path);
  }
  const currentMkDocs = await fetchRepositoryFile("mkdocs.yml");
  const mkdocsChange = trusted.find((file) => file.file_path === "mkdocs.yml");
  validateMkDocsEdit(currentMkDocs.content, mkdocsChange?.new_content ?? currentMkDocs.content, available);
  return trusted;
}

async function submit(
  req: Request,
  body: ChangeRequestBody,
  context: Awaited<ReturnType<typeof requireProfile>>,
  files: ProposedFile[],
  baseCommitSha: string,
): Promise<Response> {
  const trusted = await trustedFiles(files, baseCommitSha);
  const { data, error } = await context.userClient.rpc("create_change_request", {
    p_title: cleanTitle(body.title || ""),
    p_description: body.description?.trim() || null,
    p_base_commit_sha: baseCommitSha,
    p_files: trusted,
    p_supersedes_id: body.supersedes_id || null,
  });
  const changeRequest = rpcRow(data);
  if (error || !changeRequest) throw new Error(error?.message || "Création de la proposition impossible.");
  if (changeRequest.status === "approved") await publishApprovedChange(context.adminClient, changeRequest.id);
  const { data: refreshed } = await context.adminClient.from("change_requests").select("*").eq("id", changeRequest.id).single();
  return jsonResponse(req, { change_request: refreshed || changeRequest }, 201);
}

Deno.serve(async (req: Request) => {
  const preflight = handlePreflight(req);
  if (preflight) return preflight;
  if (!isAllowedOrigin(req)) return errorResponse(req, "Origine non autorisée.", 403);
  if (req.method !== "POST") return errorResponse(req, "Méthode non autorisée.", 405);

  try {
    const body = await readJsonBody<ChangeRequestBody>(req);

    if (body.action === "get-source") {
      await requireProfile(req, { canEdit: true });
      const filePath = assertEditablePath(body.file_path || "");
      if (!filePath.endsWith(".md") && filePath !== "mkdocs.yml") {
        throw new Error("L’éditeur textuel accepte uniquement Markdown et mkdocs.yml.");
      }
      const source = await fetchRepositoryFile(filePath);
      return jsonResponse(req, { source: { ...source, filePath } });
    }

    if (body.action === "get-navigation") {
      await requireProfile(req, { canEdit: true });
      const source = await fetchRepositoryFile("mkdocs.yml");
      const config = parse(source.content) as Record<string, unknown>;
      return jsonResponse(req, {
        navigation: {
          site_name: config.site_name,
          site_description: config.site_description,
          nav: config.nav,
          base_commit_sha: source.commitSha,
          base_file_sha: source.fileSha,
        },
      });
    }

    if (body.action === "create-navigation-change") {
      const context = await requireProfile(req, { canEdit: true });
      const source = await fetchRepositoryFile("mkdocs.yml");
      if (source.commitSha !== body.base_commit_sha) {
        throw new Error("La navigation a changé. Rechargez-la avant de soumettre.");
      }
      const tree = await fetchRepositoryTree();
      const available = new Set(tree.files.map((file) => file.path));
      const next = buildNavigationEdit(
        source.content,
        body.site_name || "",
        body.site_description || "",
        body.nav,
      );
      const normalized = validateMkDocsEdit(source.content, next, available).content;
      return await submit(req, body, context, [{
        file_path: "mkdocs.yml",
        base_file_sha: source.fileSha,
        old_content: source.content,
        new_content: normalized,
        content_encoding: "utf-8",
        change_type: "update",
      }], source.commitSha);
    }

    if (body.action === "create") {
      const context = await requireProfile(req, { canEdit: true });
      if (!body.base_commit_sha) throw new Error("Commit de base manquant.");
      return await submit(req, body, context, body.files || [], body.base_commit_sha);
    }

    if (body.action === "vote") {
      const context = await requireProfile(req, { canEdit: true });
      if (!body.change_request_id || !["approved", "rejected"].includes(body.decision || "")) {
        throw new Error("Vote incomplet.");
      }
      const { data, error } = await context.userClient.rpc("cast_change_vote", {
        p_change_request_id: body.change_request_id,
        p_decision: body.decision,
        p_comment: body.comment?.trim() || null,
      });
      const changeRequest = rpcRow(data);
      if (error || !changeRequest) throw new Error(error?.message || "Vote impossible.");
      if (changeRequest.status === "approved") await publishApprovedChange(context.adminClient, changeRequest.id);
      const { data: refreshed } = await context.adminClient.from("change_requests").select("*").eq("id", changeRequest.id).single();
      return jsonResponse(req, { change_request: refreshed || changeRequest });
    }

    if (body.action === "cancel") {
      const context = await requireProfile(req);
      if (!body.change_request_id) throw new Error("Proposition manquante.");
      const { data, error } = await context.userClient.rpc("cancel_change_request", {
        p_change_request_id: body.change_request_id,
      });
      const changeRequest = rpcRow(data);
      if (error || !changeRequest) throw new Error(error?.message || "Annulation impossible.");
      return jsonResponse(req, { change_request: changeRequest });
    }

    throw new Error("Action de modification inconnue.");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const status = /Session|Accès|Permission|suspendu/i.test(message) ? 403 : 400;
    return errorResponse(req, error, status);
  }
});
