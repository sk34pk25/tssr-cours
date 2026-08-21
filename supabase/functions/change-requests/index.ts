import { parse } from "npm:yaml@2.9.0";
import {
  errorResponse,
  handlePreflight,
  isAllowedOrigin,
  jsonResponse,
} from "../_shared/cors.ts";
import { readJsonBody, requireProfile } from "../_shared/auth.ts";
import {
  fetchRepositoryBlob,
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
import {
  buildCourseProposal,
  COURSE_LIMITS,
  type CourseRepositorySnapshot,
} from "../_shared/course.ts";
import {
  buildCourseEditorModel,
  buildCourseModification,
  type CourseEditorSnapshot,
  resolveCourseEditorPlan,
} from "../_shared/course-editor.ts";

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
  proposal_kind?:
    | "content_change"
    | "navigation_change"
    | "create_course"
    | "modify_course";
  payload_summary?: Record<string, unknown>;
  course?: unknown;
  course_editor?: unknown;
  course_path?: string;
}

function recordBody(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value as Record<string, unknown>
    : {};
}

function rpcRow<T>(data: T | T[] | null): T | null {
  return Array.isArray(data) ? (data[0] ?? null) : data;
}

function cleanTitle(title: string): string {
  const value = title.trim();
  if (value.length < 3 || value.length > 160) {
    throw new Error("Le titre doit contenir entre 3 et 160 caractères.");
  }
  return value;
}

async function trustedFiles(
  files: ProposedFile[],
  baseCommitSha: string,
): Promise<ProposedFile[]> {
  const validated = validateProposedFiles(files);
  const tree = await fetchRepositoryTree();
  if (tree.commitSha !== baseCommitSha) {
    throw new Error(
      "Le dépôt a changé depuis l’ouverture de l’éditeur. Rechargez la source avant de soumettre.",
    );
  }
  const treeMap = new Map(tree.files.map((file) => [file.path, file.sha]));
  const trusted: ProposedFile[] = [];

  for (const file of validated) {
    const currentSha = treeMap.get(file.file_path);
    if (file.change_type === "create") {
      if (currentSha) {
        throw new Error(`Le fichier ${file.file_path} existe déjà.`);
      }
      trusted.push({ ...file, base_file_sha: null, old_content: null });
      continue;
    }
    if (!currentSha || currentSha !== file.base_file_sha) {
      throw new Error(
        `Le fichier ${file.file_path} a changé. Rechargez-le avant de soumettre.`,
      );
    }
    const current = file.content_encoding === "base64"
      ? await fetchRepositoryFileRaw(file.file_path)
      : await fetchRepositoryFile(file.file_path);
    if (
      file.change_type === "rename" && treeMap.has(file.new_file_path || "")
    ) {
      throw new Error(`La destination ${file.new_file_path} existe déjà.`);
    }
    trusted.push({
      ...file,
      old_content: current.content,
      base_file_sha: current.fileSha,
    });
  }

  const available = new Set(tree.files.map((file) => file.path));
  for (const file of trusted) {
    if (file.change_type === "delete" || file.change_type === "rename") {
      available.delete(file.file_path);
    }
    if (file.change_type !== "delete") {
      available.add(file.new_file_path || file.file_path);
    }
  }
  const currentMkDocs = await fetchRepositoryFile("mkdocs.yml");
  const mkdocsChange = trusted.find((file) => file.file_path === "mkdocs.yml");
  validateMkDocsEdit(
    currentMkDocs.content,
    mkdocsChange?.new_content ?? currentMkDocs.content,
    available,
  );
  return trusted;
}

async function submit(
  req: Request,
  body: ChangeRequestBody,
  context: Awaited<ReturnType<typeof requireProfile>>,
  files: ProposedFile[],
  baseCommitSha: string,
  proposalKind:
    | "content_change"
    | "navigation_change"
    | "create_course"
    | "modify_course" = "content_change",
  payloadSummary: Record<string, unknown> = {},
): Promise<Response> {
  const trusted = await trustedFiles(files, baseCommitSha);
  const { data, error } = await context.adminClient.rpc(
    "create_change_request",
    {
      p_title: cleanTitle(body.title || ""),
      p_description: body.description?.trim() || null,
      p_base_commit_sha: baseCommitSha,
      p_files: trusted,
      p_supersedes_id: body.supersedes_id || null,
      p_proposal_kind: proposalKind,
      p_payload_summary: { ...payloadSummary, _actor_profile_id: context.profile.id },
    },
  );
  const changeRequest = rpcRow(data);
  if (error || !changeRequest) {
    throw new Error(error?.message || "Création de la proposition impossible.");
  }
  if (changeRequest.status === "approved") {
    await publishApprovedChange(context.adminClient, changeRequest.id);
  }
  const { data: refreshed } = await context.adminClient.from("change_requests")
    .select("*").eq("id", changeRequest.id).single();
  return jsonResponse(req, { change_request: refreshed || changeRequest }, 201);
}

async function mapWithConcurrency<T, R>(
  values: T[],
  concurrency: number,
  task: (value: T) => Promise<R>,
): Promise<R[]> {
  const output = new Array<R>(values.length);
  let cursor = 0;
  const workers = Array.from(
    { length: Math.min(concurrency, values.length) },
    async () => {
      while (cursor < values.length) {
        const index = cursor++;
        output[index] = await task(values[index]);
      }
    },
  );
  await Promise.all(workers);
  return output;
}

async function loadCompleteCourse(coursePath: string): Promise<{
  plan: ReturnType<typeof resolveCourseEditorPlan>;
  snapshot: CourseEditorSnapshot;
  editor: Record<string, unknown>;
}> {
  const [tree, mkdocs, glossary] = await Promise.all([
    fetchRepositoryTree(),
    fetchRepositoryFile("mkdocs.yml"),
    fetchRepositoryFile("data/glossaire.json"),
  ]);
  if (
    mkdocs.commitSha !== tree.commitSha || glossary.commitSha !== tree.commitSha
  ) {
    throw new Error(
      "Le dépôt a évolué pendant le chargement du cours. Réessayez.",
    );
  }
  const plan = resolveCourseEditorPlan(
    coursePath,
    mkdocs.content,
    glossary.content,
  );
  const treeMap = new Map(tree.files.map((file) => [file.path, file]));
  const curriculumFile = treeMap.get("docs/parcours/index.md");
  const [sources, curriculum] = await Promise.all([
    mapWithConcurrency(plan.documentPaths, 8, async (path) => {
      const file = treeMap.get(path);
      if (!file) {
        throw new Error(`La navigation référence un fichier absent : ${path}.`);
      }
      return [path, await fetchRepositoryBlob(path, file.sha)] as const;
    }),
    curriculumFile
      ? fetchRepositoryBlob("docs/parcours/index.md", curriculumFile.sha)
      : Promise.resolve(undefined),
  ]);
  const snapshot: CourseEditorSnapshot = {
    commitSha: tree.commitSha,
    files: tree.files,
    mkdocs,
    glossary,
    curriculum,
    documents: Object.fromEntries(sources),
  };
  return { plan, snapshot, editor: buildCourseEditorModel(plan, snapshot) };
}

Deno.serve(async (req: Request) => {
  const preflight = handlePreflight(req);
  if (preflight) return preflight;
  if (!isAllowedOrigin(req)) {
    return errorResponse(req, "Origine non autorisée.", 403);
  }
  if (req.method !== "POST") {
    return errorResponse(req, "Méthode non autorisée.", 405);
  }

  try {
    const body = await readJsonBody<ChangeRequestBody>(req, 20_000_000);

    if (body.action === "get-source") {
      await requireProfile(req, { canEdit: true });
      const filePath = assertEditablePath(body.file_path || "");
      if (!filePath.endsWith(".md") && filePath !== "mkdocs.yml") {
        throw new Error(
          "L’éditeur textuel accepte uniquement Markdown et mkdocs.yml.",
        );
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

    if (body.action === "get-course-context") {
      await requireProfile(req, { canEdit: true });
      const [tree, glossary] = await Promise.all([
        fetchRepositoryTree(),
        fetchRepositoryFile("data/glossaire.json"),
      ]);
      const glossaryData = JSON.parse(glossary.content) as Record<
        string,
        unknown
      >;
      const terms =
        (Array.isArray(glossaryData.entries) ? glossaryData.entries : []).map(
          (entry) => {
            const item = entry as Record<string, unknown>;
            return {
              id: item.id,
              term: item.term,
              full_name: item.fullName || "",
              definition: item.definition || "",
            };
          },
        );
      return jsonResponse(req, {
        course_context: {
          base_commit_sha: tree.commitSha,
          terms,
          limits: COURSE_LIMITS,
          file_limits: {
            image: 5_000_000,
            pdf: 7_000_000,
            other: 5_000_000,
            total: 12_000_000,
          },
        },
      });
    }

    if (body.action === "get-course-editor") {
      await requireProfile(req, { canEdit: true });
      const loaded = await loadCompleteCourse(body.course_path || "");
      return jsonResponse(req, { course_editor: loaded.editor });
    }

    if (body.action === "create-navigation-change") {
      const context = await requireProfile(req, { canEdit: true });
      const source = await fetchRepositoryFile("mkdocs.yml");
      if (source.commitSha !== body.base_commit_sha) {
        throw new Error(
          "La navigation a changé. Rechargez-la avant de soumettre.",
        );
      }
      const tree = await fetchRepositoryTree();
      const available = new Set(tree.files.map((file) => file.path));
      const next = buildNavigationEdit(
        source.content,
        body.site_name || "",
        body.site_description || "",
        body.nav,
      );
      const normalized =
        validateMkDocsEdit(source.content, next, available).content;
      return await submit(
        req,
        body,
        context,
        [{
          file_path: "mkdocs.yml",
          base_file_sha: source.fileSha,
          old_content: source.content,
          new_content: normalized,
          content_encoding: "utf-8",
          change_type: "update",
        }],
        source.commitSha,
        "navigation_change",
      );
    }

    if (body.action === "create-course") {
      const context = await requireProfile(req, { canEdit: true });
      if (!body.base_commit_sha) throw new Error("Commit de base manquant.");
      const tree = await fetchRepositoryTree();
      if (tree.commitSha !== body.base_commit_sha) {
        throw new Error(
          "Le dépôt a changé depuis l’ouverture du formulaire. Rechargez le contexte avant de soumettre.",
        );
      }
      const [mkdocs, glossary, kahoot, home, generalIndex, curriculum] =
        await Promise.all([
          fetchRepositoryFile("mkdocs.yml"),
          fetchRepositoryFile("data/glossaire.json"),
          fetchRepositoryFile("docs/kahoot/bibliotheque.md"),
          fetchRepositoryFile("docs/index.md"),
          fetchRepositoryFile("docs/index-general.md"),
          fetchRepositoryFile("docs/parcours/index.md"),
        ]);
      const snapshot: CourseRepositorySnapshot = {
        commitSha: tree.commitSha,
        files: tree.files,
        mkdocs,
        glossary,
        kahoot,
        home,
        generalIndex,
        curriculum,
      };
      const built = buildCourseProposal(body.course, snapshot);
      return await submit(
        req,
        {
          ...body,
          title: body.title || `Ajout du cours « ${built.summary.title} »`,
        },
        context,
        built.files,
        tree.commitSha,
        "create_course",
        built.summary,
      );
    }

    if (body.action === "modify-course") {
      const context = await requireProfile(req, { canEdit: true });
      const editorPayload = recordBody(body.course_editor);
      const meta = recordBody(editorPayload.meta);
      const locator = String(body.course_path || meta.coursePath || "");
      const loaded = await loadCompleteCourse(locator);
      if (
        String(meta.courseId || "") !==
          String(recordBody(loaded.editor.meta).courseId || "")
      ) {
        throw new Error(
          "L’identifiant du cours ne correspond pas à la source serveur.",
        );
      }
      const built = buildCourseModification(
        editorPayload,
        loaded.plan,
        loaded.snapshot,
      );
      return await submit(
        req,
        {
          ...body,
          title: body.title ||
            `Modification du cours « ${built.summary.title} »`,
        },
        context,
        built.files,
        loaded.snapshot.commitSha,
        "modify_course",
        built.summary,
      );
    }

    if (body.action === "create") {
      const context = await requireProfile(req, { canEdit: true });
      if (!body.base_commit_sha) throw new Error("Commit de base manquant.");
      return await submit(
        req,
        body,
        context,
        body.files || [],
        body.base_commit_sha,
        body.proposal_kind === "navigation_change"
          ? "navigation_change"
          : "content_change",
        body.payload_summary || {},
      );
    }

    if (body.action === "vote") {
      const context = await requireProfile(req, { canEdit: true });
      if (
        !body.change_request_id ||
        !["approved", "rejected"].includes(body.decision || "")
      ) {
        throw new Error("Vote incomplet.");
      }
      const { data, error } = await context.userClient.rpc("cast_change_vote", {
        p_change_request_id: body.change_request_id,
        p_decision: body.decision,
        p_comment: body.comment?.trim() || null,
      });
      const changeRequest = rpcRow(data);
      if (error || !changeRequest) {
        throw new Error(error?.message || "Vote impossible.");
      }
      if (changeRequest.status === "approved") {
        await publishApprovedChange(context.adminClient, changeRequest.id);
      }
      const { data: refreshed } = await context.adminClient.from(
        "change_requests",
      ).select("*").eq("id", changeRequest.id).single();
      return jsonResponse(req, { change_request: refreshed || changeRequest });
    }

    if (body.action === "cancel") {
      const context = await requireProfile(req);
      if (!body.change_request_id) throw new Error("Proposition manquante.");
      const { data, error } = await context.userClient.rpc(
        "cancel_change_request",
        {
          p_change_request_id: body.change_request_id,
        },
      );
      const changeRequest = rpcRow(data);
      if (error || !changeRequest) {
        throw new Error(error?.message || "Annulation impossible.");
      }
      return jsonResponse(req, { change_request: changeRequest });
    }

    throw new Error("Action de modification inconnue.");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const status = /Session|Accès|Permission|suspendu/i.test(message)
      ? 403
      : 400;
    return errorResponse(req, error, status);
  }
});
