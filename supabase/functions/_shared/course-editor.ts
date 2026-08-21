import {
  parseMkDocsConfig,
  type ProposedFile,
  stringifyMkDocsConfig,
  validateMarkdown,
  validateMkDocsEdit,
  validateProposedFiles,
} from "./validation.ts";
import { renderPdfAttachment } from "./course.ts";

type JsonRecord = Record<string, unknown>;

export interface EditorRepositorySource {
  content: string;
  fileSha: string;
}

export interface CourseEditorSnapshot {
  commitSha: string;
  files: Array<{ path: string; sha: string; size?: number }>;
  mkdocs: EditorRepositorySource;
  glossary: EditorRepositorySource;
  curriculum?: EditorRepositorySource;
  documents: Record<string, EditorRepositorySource>;
}

export interface CourseEditorPlan {
  courseTitle: string;
  coursePath: string;
  courseDirectory: string;
  courseId: string;
  courseOrder: number;
  core: Array<{ label: string; path: string; breadcrumbs: string[] }>;
  exercises: Array<{ label: string; path: string; breadcrumbs: string[] }>;
  labs: Array<{ label: string; path: string; breadcrumbs: string[] }>;
  quizzes: Array<{ label: string; path: string; breadcrumbs: string[] }>;
  relatedNavLabels: { exercises?: string; labs?: string; quizzes?: string };
  documentPaths: string[];
}

export interface BuiltCourseModification {
  files: ProposedFile[];
  summary: Record<string, unknown>;
  editor: Record<string, unknown>;
}

const COURSE_SECTIONS = Object.freeze({
  exercises: "Exercices",
  labs: "Travaux pratiques",
  quizzes: "Kahoot",
});
const ALLOWED_PAGE_TYPES = new Set([
  "cours",
  "chapitre",
  "fiche",
  "resume",
  "procedure",
  "tutoriel",
]);
const ALLOWED_DIFFICULTIES = new Set([
  "",
  "debutant",
  "intermediaire",
  "avance",
]);
const ALLOWED_RESOURCE_TYPES = new Set([
  "web",
  "video",
  "documentation",
  "outil",
  "autre",
]);
const ALLOWED_STYLES = new Set([
  "",
  "accent",
  "information",
  "success",
  "warning",
  "danger",
]);
const MAX_EDITOR_MARKDOWN = 2_000_000;

function record(value: unknown): JsonRecord {
  return value && typeof value === "object" && !Array.isArray(value)
    ? value as JsonRecord
    : {};
}

function list(value: unknown, maximum = 200): unknown[] {
  const result = Array.isArray(value) ? value : [];
  if (result.length > maximum) {
    throw new Error(`La liste dépasse la limite de ${maximum} éléments.`);
  }
  return result;
}

function cleanText(value: unknown, maximum: number, fallback = ""): string {
  const result = String(value ?? "").replaceAll("\0", "").replace(
    /\r\n?/g,
    "\n",
  ).trim();
  if (result.length > maximum) {
    throw new Error(`Un champ dépasse la limite de ${maximum} caractères.`);
  }
  return result || fallback;
}

function rawMarkdown(value: unknown): string {
  const result = String(value ?? "").replaceAll("\0", "");
  if (result.length > MAX_EDITOR_MARKDOWN) {
    throw new Error("Un contenu Markdown dépasse 2 Mo.");
  }
  return result;
}

function cleanInteger(
  value: unknown,
  minimum: number,
  maximum: number,
  fallback: number,
): number {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(parsed)
    ? Math.min(maximum, Math.max(minimum, parsed))
    : fallback;
}

function stringList(value: unknown, maximum = 30): string[] {
  const source = Array.isArray(value)
    ? value
    : String(value ?? "").split(/[\n,;]/);
  return source.map((item) => cleanText(item, 180)).filter(Boolean).slice(
    0,
    maximum,
  );
}

function slugify(value: unknown, fallback = "element"): string {
  return String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 64)
    .replace(/-+$/g, "") || fallback;
}

function stableId(kind: string, value: string): string {
  let hash = 2166136261;
  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return `${kind}-${(hash >>> 0).toString(36)}`;
}

function docPath(target: string): string | null {
  if (/^https:\/\//i.test(target)) return null;
  const cleaned = target.split(/[?#]/)[0].replace(/^\.\//, "");
  if (
    !cleaned.endsWith(".md") || cleaned.includes("..") ||
    cleaned.startsWith("/")
  ) return null;
  return cleaned.startsWith("docs/") ? cleaned : `docs/${cleaned}`;
}

function navSection(nav: unknown[], label: string): unknown[] | null {
  for (const entry of nav) {
    const source = record(entry);
    if (Array.isArray(source[label])) return source[label] as unknown[];
  }
  return null;
}

function flattenNav(
  value: unknown,
  breadcrumbs: string[] = [],
): Array<{ label: string; path: string; breadcrumbs: string[] }> {
  const output: Array<{ label: string; path: string; breadcrumbs: string[] }> =
    [];
  if (Array.isArray(value)) {
    value.forEach((child) => output.push(...flattenNav(child, breadcrumbs)));
    return output;
  }
  for (const [label, child] of Object.entries(record(value))) {
    if (typeof child === "string") {
      const path = docPath(child);
      if (path) {
        output.push({ label, path, breadcrumbs: [...breadcrumbs, label] });
      }
    } else if (Array.isArray(child)) {
      output.push(...flattenNav(child, [...breadcrumbs, label]));
    }
  }
  return output;
}

function navEntry(
  section: unknown[],
  label: string,
): { index: number; value: unknown } | null {
  const index = section.findIndex((entry) =>
    Object.keys(record(entry))[0] === label
  );
  if (index < 0) return null;
  const item = record(section[index]);
  return { index, value: item[label] };
}

function significantTokens(value: string): string[] {
  const ignored = new Set([
    "les",
    "des",
    "une",
    "pour",
    "avec",
    "dans",
    "cours",
    "module",
    "administration",
    "utilisation",
    "systemes",
  ]);
  return slugify(value, "").split("-").filter((token) =>
    token.length >= 4 && !ignored.has(token)
  );
}

function relatedEntry(
  section: unknown[] | null,
  courseTitle: string,
  courseId: string,
  directorySlug: string,
): { label: string; value: unknown } | null {
  if (!section) return null;
  const normalizedTitle = slugify(courseTitle, "");
  const tokens = new Set([
    ...significantTokens(courseTitle),
    ...significantTokens(courseId),
    ...significantTokens(directorySlug),
  ]);
  let best: { label: string; value: unknown; score: number } | null = null;
  for (const item of section) {
    const source = record(item);
    const label = Object.keys(source)[0];
    if (
      !label ||
      ["Présentation", "Tous les Kahoots", "Bibliothèque"].includes(label)
    ) continue;
    const targets = flattenNav(item);
    const searchable = slugify(
      `${label} ${targets.map((target) => target.path).join(" ")}`,
      "",
    );
    const normalizedLabel = slugify(label, "");
    let score = normalizedLabel === normalizedTitle ? 100 : 0;
    if (courseId && searchable.includes(slugify(courseId, ""))) score += 25;
    for (const token of tokens) if (searchable.includes(token)) score += 4;
    if (!best || score > best.score) {
      best = { label, value: source[label], score };
    }
  }
  return best && best.score >= 8 ? best : null;
}

function glossaryCourse(
  glossary: JsonRecord,
  coursePath: string,
): JsonRecord | null {
  const relative = coursePath.replace(/^docs\//, "");
  return (Array.isArray(glossary.courses)
    ? glossary.courses as JsonRecord[]
    : [])
    .find((course) => String(course.path || "") === relative) || null;
}

export function resolveCourseEditorPlan(
  locator: string,
  mkdocsContent: string,
  glossaryContent: string,
): CourseEditorPlan {
  const requested = docPath(locator.replace(/^docs\//, ""));
  if (!requested || !requested.startsWith("docs/modules/")) {
    throw new Error(
      "Le cours demandé ne correspond pas à une page de la section Cours.",
    );
  }
  const config = parseMkDocsConfig(mkdocsContent);
  const nav = Array.isArray(config.nav) ? config.nav as unknown[] : [];
  const courses = navSection(nav, "Cours");
  if (!courses) {
    throw new Error("La section Cours est introuvable dans mkdocs.yml.");
  }
  let selected: {
    title: string;
    index: number;
    value: unknown;
    core: ReturnType<typeof flattenNav>;
  } | null = null;
  for (let index = 0; index < courses.length; index += 1) {
    const entry = courses[index];
    const source = record(entry);
    const title = Object.keys(source)[0];
    if (!title) continue;
    const core = flattenNav(source[title]);
    const presentation = core.find((item) =>
      /(^|\/)index\.md$/.test(item.path)
    ) || core[0];
    const directory = presentation?.path.replace(/\/[^/]+$/, "");
    if (
      core.some((item) => item.path === requested) ||
      (directory && requested.startsWith(`${directory}/`))
    ) {
      selected = { title, index, value: source[title], core };
      break;
    }
  }
  if (!selected) {
    throw new Error(
      "Ce fichier n’est rattaché à aucun cours déclaré dans la navigation.",
    );
  }
  const core = selected.core;
  const presentation =
    core.find((item) => /(^|\/)index\.md$/.test(item.path)) || core[0];
  if (!presentation) {
    throw new Error("La page de présentation du cours est introuvable.");
  }
  const courseDirectory = presentation.path.replace(/\/[^/]+$/, "");
  const directorySlug =
    courseDirectory.split("/").at(-1)?.replace(/^\d+-/, "") || "cours";
  let glossary: JsonRecord;
  try {
    glossary = JSON.parse(glossaryContent) as JsonRecord;
  } catch {
    throw new Error("Le glossaire du dépôt n’est pas un JSON valide.");
  }
  const course = glossaryCourse(glossary, presentation.path);
  const courseId = String(course?.id || directorySlug);
  const exerciseMatch = relatedEntry(
    navSection(nav, COURSE_SECTIONS.exercises),
    selected.title,
    courseId,
    directorySlug,
  );
  const labMatch = relatedEntry(
    navSection(nav, COURSE_SECTIONS.labs),
    selected.title,
    courseId,
    directorySlug,
  );
  const quizMatch = relatedEntry(
    navSection(nav, COURSE_SECTIONS.quizzes),
    selected.title,
    courseId,
    directorySlug,
  );
  const exercises = exerciseMatch
    ? flattenNav({ [exerciseMatch.label]: exerciseMatch.value })
    : [];
  const labs = labMatch ? flattenNav({ [labMatch.label]: labMatch.value }) : [];
  const quizzes = quizMatch
    ? flattenNav({ [quizMatch.label]: quizMatch.value }).filter((item) =>
      !/bibliotheque\.md$/.test(item.path)
    )
    : [];
  const documentPaths = [
    ...new Set([
      ...core.map((item) => item.path),
      ...exercises.map((item) => item.path),
      ...labs.map((item) => item.path),
      ...quizzes.map((item) => item.path),
    ]),
  ];
  return {
    courseTitle: selected.title,
    coursePath: presentation.path,
    courseDirectory,
    courseId,
    courseOrder: selected.index + 1,
    core,
    exercises,
    labs,
    quizzes,
    relatedNavLabels: {
      exercises: exerciseMatch?.label,
      labs: labMatch?.label,
      quizzes: quizMatch?.label,
    },
    documentPaths,
  };
}

function firstHeading(content: string, fallback: string): string {
  const value = content.match(/^#[ \t]+(.+?)[ \t]*$/m)?.[1]?.replace(
    /^:material-[^:]+:[ \t]*/,
    "",
  ) || fallback;
  return value.replace(/^Module\s+(?:\d+|additionnel)\s*[—:-]\s*/i, "").trim();
}

function firstMetadata(content: string, label: string): string {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return content.match(
    new RegExp(`\\*\\*${escaped}\\s*:\\*\\*\\s*([^\\n]+)`, "i"),
  )?.[1]?.replace(/\\s{2}$/, "").trim() || "";
}

function sectionList(content: string, title: string): string[] {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const body = content.match(
    new RegExp(`^##\\s+${escaped}\\s*$([\\s\\S]*?)(?=^##\\s+|\\Z)`, "mi"),
  )?.[1] || "";
  return [...body.matchAll(/^\s*[-*]\s+(.+)$/gm)].map((match) =>
    match[1].trim()
  ).slice(0, 30);
}

function shortDescriptionLocation(
  content: string,
): { start: number; end: number; value: string } | null {
  const heading = /^#[^\n]*(?:\n|$)/m.exec(content);
  if (!heading || heading.index === undefined) return null;
  const start = heading.index + heading[0].length;
  const tail = content.slice(start);
  const structuralMarkers = [
    /^\*\*(?:Catégorie|Domaine|Niveau|Durée estimée|Formateur|Période|Source)\s*:\*\*/mi,
    /^<div\s+class="tssr-course-intro\b/mi,
    /^##[ \t]+/m,
    /^<p\s+class="tssr-course-keywords"/mi,
  ];
  const markerOffsets = structuralMarkers.map((expression) =>
    expression.exec(tail)?.index
  ).filter((value): value is number => value !== undefined);
  const preamble = tail.slice(
    0,
    markerOffsets.length ? Math.min(...markerOffsets) : tail.length,
  );
  const paragraphs = /(^|\n[ \t]*\n)([^\n][\s\S]*?)(?=\n[ \t]*\n|$)/g;
  for (const match of preamble.matchAll(paragraphs)) {
    const raw = match[2];
    const value = raw.trim();
    if (
      !value ||
      /^(?:!\[|\*[^\n]+\*$|<!--|<|#{1,6}[ \t]|!!!|\?\?\?|```|~~~|[-*+]\s|\d+\.\s|>)/
        .test(
          value,
        )
    ) continue;
    const localStart = (match.index || 0) + match[0].indexOf(raw) +
      raw.indexOf(value);
    return {
      start: start + localStart,
      end: start + localStart + value.length,
      value,
    };
  }
  return null;
}

function externalLinks(
  content: string,
  sourcePath: string,
  moduleIndex: number,
): JsonRecord[] {
  const links: JsonRecord[] = [];
  const seen = new Set<string>();
  const markdown = /\[([^\]]+)\]\((https:\/\/[^\s)]+)(?:\s+[^)]*)?\)/g;
  for (const match of content.matchAll(markdown)) {
    if (/(^|\.)kahoot\.(com|it)(\/|$)/i.test(match[2])) continue;
    const token = match[0];
    const id = stableId("resource", `${sourcePath}:${match.index}:${token}`);
    if (seen.has(id)) continue;
    seen.add(id);
    links.push({
      clientId: id,
      title: match[1],
      url: match[2],
      description: "",
      type: "web",
      moduleIndex,
      storage: { sourcePath, token, format: "markdown" },
    });
  }
  return links;
}

function resolveRelativePath(
  sourcePath: string,
  target: string,
): string | null {
  const clean = target.trim().replace(/^<|>$/g, "").split(/[?#]/)[0];
  if (!clean || /^(?:https?:|mailto:|tel:|data:|#)/i.test(clean)) return null;
  const sourceParts = sourcePath.split("/").slice(0, -1);
  const targetParts =
    (clean.startsWith("/")
      ? clean.replace(/^\/+/, "")
      : [...sourceParts, ...clean.split("/")].join("/")).split("/");
  const normalized: string[] = [];
  targetParts.forEach((part) => {
    if (!part || part === ".") return;
    if (part === "..") normalized.pop();
    else normalized.push(part);
  });
  const path = normalized.join("/");
  return path.startsWith("docs/") ? path : null;
}

function attachmentType(path: string): string {
  const extension = path.toLowerCase().split(".").at(-1) || "";
  return ({
    png: "image/png",
    jpg: "image/jpeg",
    jpeg: "image/jpeg",
    webp: "image/webp",
    gif: "image/gif",
    pdf: "application/pdf",
    csv: "text/csv",
    json: "application/json",
    yaml: "application/yaml",
    yml: "application/yaml",
    zip: "application/zip",
  } as Record<string, string>)[extension] || "application/octet-stream";
}

function attachmentReferences(
  content: string,
  sourcePath: string,
): Array<{ path: string; token: string; format: "markdown" | "html" | "pdf"; title?: string }> {
  const output: Array<{ path: string; token: string; format: "markdown" | "html" | "pdf"; title?: string }> = [];
  const pdfRanges: Array<{ start: number; end: number }> = [];
  const pdfComponent = /<div\b(?=[^>]*\bclass\s*=\s*["'][^"']*\btssr-pdf-embed\b[^"']*["'])[^>]*>[\s\S]*?<\/div>/gi;
  for (const match of content.matchAll(pdfComponent)) {
    const token = match[0];
    const relative = token.match(/\bdata-tssr-pdf-src\s*=\s*["']([^"']+)["']/i)?.[1] || "";
    const path = resolveRelativePath(sourcePath, relative);
    if (!path || !/^docs\/assets\/resources\/.*\.pdf$/i.test(path)) continue;
    const title = token.match(/\bdata-tssr-pdf-title\s*=\s*["']([^"']*)["']/i)?.[1] ||
      token.match(/<strong>([^<]*)<\/strong>/i)?.[1] || "";
    const start = match.index ?? 0;
    pdfRanges.push({ start, end: start + token.length });
    output.push({ path, token, format: "pdf", title });
  }
  const patterns = [
    { expression: /!?\[[^\]]*\]\(([^\s)]+)(?:\s+[^)]*)?\)/g, format: "markdown" as const },
    { expression: /\b(?:src|href)\s*=\s*["']([^"']+)["']/gi, format: "html" as const },
  ];
  patterns.forEach(({ expression, format }) => {
    for (const match of content.matchAll(expression)) {
      const start = match.index ?? 0;
      if (pdfRanges.some((range) => start >= range.start && start < range.end)) continue;
      const path = resolveRelativePath(sourcePath, match[1]);
      if (path && /^docs\/assets\/(?:images|resources)\//.test(path)) {
        output.push({ path, token: match[0], format });
      }
    }
  });
  return output;
}

function moduleIndexForSource(
  sourcePath: string,
  modules: JsonRecord[],
): number {
  return modules.findIndex((module) => {
    const storage = record(module.storage);
    if (storage.path === sourcePath) return true;
    return list(module.pages).some((page) =>
      record(record(page).storage).path === sourcePath
    );
  });
}

function sourceOrThrow(
  snapshot: CourseEditorSnapshot,
  path: string,
): EditorRepositorySource {
  const source = snapshot.documents[path];
  if (!source) {
    throw new Error(
      `Le chargement du cours est incomplet : ${path} est absent.`,
    );
  }
  return source;
}

export function buildCourseEditorModel(
  plan: CourseEditorPlan,
  snapshot: CourseEditorSnapshot,
): Record<string, unknown> {
  const overview = sourceOrThrow(snapshot, plan.coursePath);
  const glossary = JSON.parse(snapshot.glossary.content) as JsonRecord;
  const glossaryCourseRecord = glossaryCourse(glossary, plan.coursePath);
  const coreWithoutOverview = plan.core.filter((item) =>
    item.path !== plan.coursePath
  );
  const moduleNav = coreWithoutOverview.filter((item) =>
    /(^|\/)module-[^/]+\.md$/.test(item.path)
  );
  const pageNav = coreWithoutOverview.filter((item) =>
    !moduleNav.some((module) => module.path === item.path)
  );
  const modules: JsonRecord[] = moduleNav.map((item, index) => {
    const source = sourceOrThrow(snapshot, item.path);
    return {
      clientId: stableId("module", item.path),
      title: firstHeading(source.content, item.label),
      subtitle: "",
      description: "",
      content: source.content,
      pages: [],
      storage: {
        path: item.path,
        sha: source.fileSha,
        label: item.label,
        role: "module",
      },
    };
  });
  pageNav.forEach((item, index) => {
    const source = sourceOrThrow(snapshot, item.path);
    const number =
      Number.parseInt(item.path.match(/page-(\d+)-/)?.[1] || "", 10) - 1;
    const moduleIndex = Number.isFinite(number) && modules[number]
      ? number
      : Math.min(index, Math.max(0, modules.length - 1));
    if (!modules[moduleIndex]) {
      modules.push({
        clientId: stableId("module", `${plan.coursePath}:pages`),
        title: "Pages complémentaires",
        subtitle: "",
        description: "",
        content: "",
        pages: [],
        storage: { virtual: true, role: "module" },
      });
    }
    (modules[moduleIndex].pages as JsonRecord[]).push({
      clientId: stableId("page", item.path),
      title: firstHeading(source.content, item.label),
      type: "cours",
      description: "",
      content: source.content,
      storage: {
        path: item.path,
        sha: source.fileSha,
        label: item.label,
        role: "page",
      },
    });
  });

  const exercises = plan.exercises.map((item, index) => {
    const source = sourceOrThrow(snapshot, item.path);
    return {
      clientId: stableId("exercise", item.path),
      title: firstHeading(source.content, item.label),
      instructions: source.content,
      difficulty: "",
      duration: "",
      type: "",
      solution: "",
      hint: "",
      moduleIndex: -1,
      tags: [],
      storage: {
        path: item.path,
        sha: source.fileSha,
        label: item.label,
        role: "exercise",
        navLabel: plan.relatedNavLabels.exercises,
        order: index,
      },
    };
  });

  const labGroups = new Map<
    string,
    Array<{ label: string; path: string; breadcrumbs: string[] }>
  >();
  plan.labs.forEach((item) => {
    const directory = item.path.replace(/\/[^/]+$/, "");
    const key = /\/module-[^/]+$/.test(directory)
      ? directory
      : `${directory}:root`;
    labGroups.set(key, [...(labGroups.get(key) || []), item]);
  });
  const labs = [...labGroups.entries()].map(([group, items], index) => {
    const statement = items.find((item) => /enonces\.md$/.test(item.path));
    const correction = items.find((item) => /corrections\.md$/.test(item.path));
    const introduction = items.find((item) => /index\.md$/.test(item.path));
    const titleSource = statement || introduction || correction || items[0];
    const sources = {
      statement: statement ? sourceOrThrow(snapshot, statement.path) : null,
      correction: correction ? sourceOrThrow(snapshot, correction.path) : null,
      introduction: introduction
        ? sourceOrThrow(snapshot, introduction.path)
        : null,
    };
    return {
      clientId: stableId("lab", group),
      title: firstHeading(
        (sources.statement || sources.introduction || sources.correction)
          ?.content || "",
        titleSource.label,
      ),
      objective: "",
      prerequisites: [],
      environment: "",
      duration: "",
      steps: sources.statement?.content || "",
      resources: sources.introduction?.content || "",
      correction: sources.correction?.content || "",
      moduleIndex: -1,
      storage: {
        group,
        navLabel: plan.relatedNavLabels.labs,
        order: index,
        files: {
          statement: statement
            ? { path: statement.path, sha: sources.statement?.fileSha }
            : null,
          correction: correction
            ? { path: correction.path, sha: sources.correction?.fileSha }
            : null,
          introduction: introduction
            ? { path: introduction.path, sha: sources.introduction?.fileSha }
            : null,
        },
      },
    };
  });

  const quizzes = plan.quizzes.map((item, index) => {
    const source = sourceOrThrow(snapshot, item.path);
    const url = source.content.match(
      /https:\/\/(?:create\.)?kahoot\.(?:com|it)\/[^\s)"'}]+/i,
    )?.[0] || "";
    return {
      clientId: stableId("quiz", item.path),
      title: firstHeading(source.content, item.label),
      kind: url ? "kahoot" : "quiz",
      description: "",
      url,
      difficulty: "",
      category: "",
      moduleIndex: -1,
      questions: [],
      content: source.content,
      storage: {
        path: item.path,
        sha: source.fileSha,
        label: item.label,
        role: "quiz",
        navLabel: plan.relatedNavLabels.quizzes,
        order: index,
      },
    };
  });

  const glossaryModules = Array.isArray(glossary.modules)
    ? glossary.modules as JsonRecord[]
    : [];
  const glossaryModuleIndex = new Map<string, number>();
  glossaryModules.filter((item) => item.courseId === plan.courseId).forEach(
    (item) => {
      const path = docPath(String(item.path || ""));
      const index = modules.findIndex((module) =>
        record(module.storage).path === path
      );
      glossaryModuleIndex.set(String(item.id), index);
    },
  );
  const glossaryEntries =
    (Array.isArray(glossary.entries) ? glossary.entries as JsonRecord[] : [])
      .flatMap((entry) => {
        const refs = Array.isArray(entry.refs) ? entry.refs.map(String) : [];
        const relation = refs.find((ref) =>
          ref.startsWith(`${plan.courseId}:`)
        );
        if (!relation) return [];
        const moduleId = relation.slice(plan.courseId.length + 1);
        return [{
          clientId: `glossary:${String(entry.id || slugify(entry.term))}`,
          id: String(entry.id || slugify(entry.term)),
          term: String(entry.term || ""),
          fullName: String(entry.fullName || ""),
          definition: String(entry.definition || ""),
          aliases: Array.isArray(entry.aliases) ? entry.aliases : [],
          keywords: Array.isArray(entry.keywords) ? entry.keywords : [],
          moduleIndex: glossaryModuleIndex.get(moduleId) ?? -1,
          shared: refs.some((ref) => !ref.startsWith(`${plan.courseId}:`)),
          storage: { refs, moduleId, role: "glossary" },
        }];
      });

  const allSources = [...new Set(plan.documentPaths)].map((path) => ({
    path,
    source: sourceOrThrow(snapshot, path),
  }));
  const resources: JsonRecord[] = [];
  allSources.forEach(({ path, source }) =>
    resources.push(
      ...externalLinks(
        source.content,
        path,
        moduleIndexForSource(path, modules),
      ),
    )
  );
  const tree = new Map(snapshot.files.map((file) => [file.path, file]));
  const attachments = new Map<string, JsonRecord>();
  allSources.forEach(({ path, source }) => {
    attachmentReferences(source.content, path).forEach((reference) => {
      const file = tree.get(reference.path);
      if (!file) return;
      const markdownLabel = reference.token.match(/^(!?)\[([^\]]*)\]/);
      const existing = attachments.get(reference.path) || {
        id: stableId("attachment", reference.path),
        kind: "existing",
        name: reference.path.split("/").at(-1),
        mediaType: attachmentType(reference.path),
        size: file.size || 0,
        title: reference.title || (markdownLabel && !markdownLabel[1] ? markdownLabel[2] : ""),
        alt: markdownLabel?.[1] ? markdownLabel[2] : "",
        caption: "",
        path: reference.path,
        publicPath: reference.path.replace(/^docs\//, ""),
        moduleIndex: moduleIndexForSource(path, modules),
        pageIndex: -1,
        references: [],
        storage: { sha: file.sha },
      };
      (existing.references as unknown[]).push({
        sourcePath: path,
        token: reference.token,
        format: reference.format,
      });
      attachments.set(reference.path, existing);
    });
  });

  const rawOverview = overview.content;
  const icon = rawOverview.match(/^#\s+:material-([^:]+):/m)?.[1] ||
    "book-open-page-variant";
  const period = firstMetadata(rawOverview, "Période").split("→").map((value) =>
    value.trim()
  );
  const sourceUrl = rawOverview.match(
    /\*\*Source\s*:\*\*[^\n]*\]\((https:\/\/[^)]+)\)/i,
  )?.[1] || "";
  const subtitle = rawOverview.match(
    /^#[^\n]*\n(?:\n)*\*([^*\n]+)\*[ \t]*$/m,
  )?.[1] || "";
  const keywordText = rawOverview.match(
    /<p class="tssr-course-keywords"><strong>Mots-clés\s*:<\/strong>\s*([^<]+)<\/p>/i,
  )?.[1] || "";
  const shortDescription = shortDescriptionLocation(rawOverview)?.value || "";
  const coverTarget = rawOverview.match(
    /!\[[^\]]*\]\(([^)\s]+)(?:\s+[^)]*)?\)\{[^}]*\.tssr-course-cover\b[^}]*\}/i,
  )?.[1];
  const coverPath = coverTarget
    ? resolveRelativePath(plan.coursePath, coverTarget)
    : null;
  const coverAttachmentId = coverPath
    ? String(attachments.get(coverPath)?.id || "")
    : "";
  const courseSlug =
    plan.courseDirectory.split("/").at(-1)?.replace(/^\d+-/, "") ||
    plan.courseId;
  const curriculumMarker = new RegExp(
    `<!-- TSSR-COURSE-CREATOR:${expressionText(courseSlug)}:START -->`,
  );
  const general = {
    title: plan.courseTitle,
    shortTitle: String(glossaryCourseRecord?.shortName || ""),
    subtitle,
    shortDescription,
    description: rawOverview,
    category: firstMetadata(rawOverview, "Catégorie"),
    domain: firstMetadata(rawOverview, "Domaine"),
    level: firstMetadata(rawOverview, "Niveau"),
    order: plan.courseOrder,
    duration: firstMetadata(rawOverview, "Durée estimée"),
    trainer: firstMetadata(rawOverview, "Formateur"),
    startDate: period[0] || "",
    endDate: period[1] || "",
    prerequisites: sectionList(rawOverview, "Prérequis"),
    objectives: sectionList(rawOverview, "Objectifs"),
    skills: sectionList(rawOverview, "Compétences visées"),
    keywords: keywordText.split("·").map((value) => value.trim()).filter(
      Boolean,
    ),
    tags: [],
    style: rawOverview.match(/tssr-course-intro--([a-z]+)/)?.[1] || "",
    icon,
    status: "Publié",
    source: sourceUrl,
    notes: "",
    includeInPath: curriculumMarker.test(snapshot.curriculum?.content || ""),
    coverAttachmentId,
    storage: { path: plan.coursePath, sha: overview.fileSha, role: "overview" },
  };
  return {
    schemaVersion: 2,
    mode: "edit",
    meta: {
      courseId: plan.courseId,
      coursePath: plan.coursePath,
      courseDirectory: plan.courseDirectory,
      slug: plan.courseDirectory.split("/").at(-1)?.replace(/^\d+-/, "") ||
        plan.courseId,
      baseCommitSha: snapshot.commitSha,
      loadedAt: new Date().toISOString(),
      relatedNavLabels: plan.relatedNavLabels,
    },
    draft: {
      schemaVersion: 2,
      general,
      modules,
      exercises,
      labs,
      quizzes,
      glossaryEntries,
      existingGlossary: [],
      resources,
      attachments: [],
    },
    attachments: [...attachments.values()],
    context: {
      base_commit_sha: snapshot.commitSha,
      terms:
        (Array.isArray(glossary.entries)
          ? glossary.entries as JsonRecord[]
          : []).map((entry) => ({
            id: entry.id,
            term: entry.term,
            full_name: entry.fullName || "",
            definition: entry.definition || "",
          })),
      limits: {
        modules: 80,
        pagesPerModule: 40,
        exercises: 80,
        labs: 80,
        quizzes: 80,
        questionsPerQuiz: 80,
        glossaryEntries: 500,
        resources: 500,
        attachments: 80,
      },
      file_limits: {
        image: 5_000_000,
        pdf: 7_000_000,
        other: 5_000_000,
        total: 12_000_000,
      },
    },
    relations: {
      core: "complete",
      exercises: plan.exercises.length ? "complete" : "none",
      labs: plan.labs.length ? "complete" : "none",
      quizzes: plan.quizzes.length ? "complete" : "none",
      glossary: glossaryCourseRecord ? "complete" : "none",
      resources: "derived_from_loaded_markdown",
      files: "derived_from_loaded_markdown",
    },
  };
}

function replaceFirstHeading(
  content: string,
  title: string,
  kind: "course" | "module" | "page" | "generic",
  index = 0,
): string {
  const safeTitle = title.replace(/[\r\n#]/g, " ").trim() || "Sans titre";
  const match = content.match(/^#[ \t]+(.+?)[ \t]*$/m);
  let heading = `# ${safeTitle}`;
  if (kind === "course" && match?.[1].match(/^:material-[^:]+:/)) {
    heading = `# ${match[1].match(/^:material-[^:]+:/)?.[0]} ${safeTitle}`;
  }
  if (kind === "module") {
    heading = `# Module ${String(index + 1).padStart(2, "0")} — ${safeTitle}`;
  }
  if (!match) return `${heading}\n\n${content}`;
  return content.replace(/^#[ \t]+(.+?)[ \t]*$/m, heading);
}

function expressionText(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function updateMetadataLine(
  content: string,
  label: string,
  value: string,
): string {
  const expression = new RegExp(
    `^\\*\\*${expressionText(label)}\\s*:\\*\\*[^\\n]*(?:\\n|$)`,
    "mi",
  );
  const line = value ? `**${label} :** ${value}  \n` : "";
  if (expression.test(content)) return content.replace(expression, line);
  if (!value) return content;
  const heading = content.match(/^#[^\n]*(?:\n|$)/m)?.[0] || "";
  return heading
    ? content.replace(heading, `${heading}\n${line}`)
    : `${line}\n${content}`;
}

function updateShortDescription(
  content: string,
  before: string,
  after: string,
): string {
  if (before === after) return content;
  const location = shortDescriptionLocation(content);
  if (location && location.value === before) {
    return `${content.slice(0, location.start)}${after}${
      content.slice(location.end)
    }`;
  }
  if (!after) return content;
  const markers = [
    /^\*\*(?:Catégorie|Domaine|Niveau|Durée estimée|Formateur|Période|Source)\s*:\*\*/mi,
    /^<div\s+class="tssr-course-intro\b/mi,
    /^##[ \t]+/m,
  ];
  const offsets = markers.map((expression) => expression.exec(content)?.index)
    .filter((value): value is number => value !== undefined);
  const insertion = offsets.length ? Math.min(...offsets) : content.length;
  const prefix = content.slice(0, insertion).trimEnd();
  const suffix = content.slice(insertion).trimStart();
  return `${prefix}\n\n${after}\n\n${suffix}`;
}

function markdownInline(
  value: unknown,
  maximum: number,
  fallback = "",
): string {
  return cleanText(value, maximum, fallback).replace(/\s+/g, " ").replace(
    /([\\`*_[\]<>])/g,
    "\\$1",
  );
}

function updateCurriculumContribution(
  content: string,
  plan: CourseEditorPlan,
  general: JsonRecord,
  include: boolean,
): string {
  const slug = plan.courseDirectory.split("/").at(-1)?.replace(/^\d+-/, "") ||
    plan.courseId;
  const marker = expressionText(slug);
  const expression = new RegExp(
    `\\n?<!-- TSSR-COURSE-CREATOR:${marker}:START -->[\\s\\S]*?<!-- TSSR-COURSE-CREATOR:${marker}:END -->\\n?`,
  );
  if (!include) return content.replace(expression, "\n");
  const title = markdownInline(general.title, 160, "Nouveau cours");
  const period = [
    markdownInline(general.startDate, 20),
    markdownInline(general.endDate, 20),
  ].filter(Boolean).join(" → ") || "Période à préciser";
  const trainer = markdownInline(general.trainer, 120);
  const description = markdownInline(
    general.shortDescription,
    500,
    "Cours ajouté au parcours après validation communautaire.",
  );
  const target = relativePath("docs/parcours/index.md", plan.coursePath)
    .replace(/index\.md$/, "");
  const block =
    `<!-- TSSR-COURSE-CREATOR:${slug}:START -->\n<section class="tssr-path-contribution" markdown>\n\n## ${title}\n\n**${period}${
      trainer ? ` · ${trainer}` : ""
    }**\n\n${description}\n\n[Ouvrir ce cours](${target}){ .md-button }\n\n</section>\n<!-- TSSR-COURSE-CREATOR:${slug}:END -->`;
  if (expression.test(content)) {
    return content.replace(expression, `\n${block}\n`);
  }
  return `${content.trimEnd()}\n\n${block}\n`;
}

function updateListSection(
  content: string,
  title: string,
  values: string[],
): string {
  const expression = new RegExp(
    `^##[ \\t]+${
      expressionText(title)
    }[ \\t]*\\n[\\s\\S]*?(?=^##[ \\t]+|(?![\\s\\S]))`,
    "m",
  );
  const block = values.length
    ? `## ${title}\n\n${values.map((value) => `- ${value}`).join("\n")}\n\n`
    : "";
  if (expression.test(content)) return content.replace(expression, block);
  return values.length ? `${content.trimEnd()}\n\n${block}` : content;
}

function applyGeneralFields(
  content: string,
  current: JsonRecord,
  next: JsonRecord,
): string {
  let result = content;
  result = updateShortDescription(
    result,
    String(current.shortDescription || ""),
    cleanText(next.shortDescription, 500),
  );
  const metadata: Array<[string, string, string]> = [
    [
      "Catégorie",
      String(current.category || ""),
      cleanText(next.category, 100),
    ],
    ["Domaine", String(current.domain || ""), cleanText(next.domain, 100)],
    ["Niveau", String(current.level || ""), cleanText(next.level, 80)],
    [
      "Durée estimée",
      String(current.duration || ""),
      cleanText(next.duration, 80),
    ],
    ["Formateur", String(current.trainer || ""), cleanText(next.trainer, 120)],
  ];
  metadata.forEach(([label, before, after]) => {
    if (before !== after) result = updateMetadataLine(result, label, after);
  });
  const beforePeriod = [current.startDate, current.endDate].filter(Boolean)
    .join(" → ");
  const afterPeriod = [
    cleanText(next.startDate, 20),
    cleanText(next.endDate, 20),
  ].filter(Boolean).join(" → ");
  if (beforePeriod !== afterPeriod) {
    result = updateMetadataLine(result, "Période", afterPeriod);
  }
  if (String(current.source || "") !== String(next.source || "")) {
    const url = safeHttps(next.source);
    result = updateMetadataLine(
      result,
      "Source",
      url
        ? `[ouvrir la source officielle](${url}){ target="_blank" rel="noopener noreferrer" }`
        : "",
    );
  }
  ([
    ["Prérequis", current.prerequisites, next.prerequisites],
    ["Objectifs", current.objectives, next.objectives],
    ["Compétences visées", current.skills, next.skills],
  ] as Array<[string, unknown, unknown]>).forEach(([title, before, after]) => {
    const beforeList = stringList(before);
    const afterList = stringList(after);
    if (JSON.stringify(beforeList) !== JSON.stringify(afterList)) {
      result = updateListSection(result, title, afterList);
    }
  });
  if (String(current.subtitle || "") !== String(next.subtitle || "")) {
    const before = String(current.subtitle || "");
    const after = cleanText(next.subtitle, 220);
    if (before && result.includes(`*${before}*`)) {
      result = result.replace(`*${before}*`, after ? `*${after}*` : "");
    } else if (after) {
      const heading = result.match(/^#[^\n]*(?:\n|$)/m)?.[0] || "";
      if (heading) result = result.replace(heading, `${heading}\n*${after}*\n`);
    }
  }
  if (String(current.icon || "") !== String(next.icon || "")) {
    const icon = slugify(next.icon, "book-open-page-variant");
    if (/^#[ \t]+:material-[^:]+:/m.test(result)) {
      result = result.replace(
        /^#[ \t]+:material-[^:]+:/m,
        `# :material-${icon}:`,
      );
    }
  }
  if (
    String(current.style || "") !== String(next.style || "")
  ) {
    const style = cleanText(next.style, 30);
    if (!ALLOWED_STYLES.has(style)) {
      throw new Error("Le style de présentation demandé n’est pas autorisé.");
    }
    if (style && /tssr-course-intro--[a-z]+/.test(result)) {
      result = result.replace(
        /tssr-course-intro--[a-z]+/,
        `tssr-course-intro--${style}`,
      );
    } else if (style) {
      throw new Error(
        "Ce cours ancien ne possède pas de bloc de style contrôlé. Ajoutez ce style directement dans le Markdown afin d’éviter d’envelopper le mauvais contenu.",
      );
    } else if (!style) {
      result = result.replace(
        /<div class="tssr-course-intro tssr-course-intro--[a-z]+" markdown="1">\n\n([\s\S]*?)\n\n<\/div>/,
        "$1",
      );
    }
  }
  const beforeKeywords = [
    ...stringList(current.keywords),
    ...stringList(current.tags),
  ];
  const afterKeywords = [
    ...stringList(next.keywords),
    ...stringList(next.tags),
  ];
  if (JSON.stringify(beforeKeywords) !== JSON.stringify(afterKeywords)) {
    const expression = /<p class="tssr-course-keywords">[\s\S]*?<\/p>/i;
    const block = afterKeywords.length
      ? `<p class="tssr-course-keywords"><strong>Mots-clés :</strong> ${
        afterKeywords.join(" · ")
      }</p>`
      : "";
    result = expression.test(result)
      ? result.replace(expression, block)
      : `${result.trimEnd()}\n\n${block}\n`;
  }
  return result;
}

function safeHttps(value: unknown, kahoot = false): string {
  const raw = cleanText(value, 2_000);
  if (!raw) return "";
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(`URL invalide : ${raw.slice(0, 80)}`);
  }
  if (url.protocol !== "https:" || url.username || url.password) {
    throw new Error("Seules les URL HTTPS sans identifiants sont autorisées.");
  }
  if (kahoot && !/(^|\.)kahoot\.(com|it)$/i.test(url.hostname)) {
    throw new Error("Un lien Kahoot doit utiliser kahoot.com ou kahoot.it.");
  }
  return url.href;
}

function uniquePath(
  base: string,
  unavailable: Set<string>,
  extension = "md",
): string {
  let candidate = `${base}.${extension}`;
  let suffix = 2;
  while (unavailable.has(candidate)) {
    candidate = `${base}-${suffix++}.${extension}`;
  }
  unavailable.add(candidate);
  return candidate;
}

function entityMap(values: unknown, label: string): Map<string, JsonRecord> {
  const result = new Map<string, JsonRecord>();
  list(values, 500).forEach((value) => {
    const item = record(value);
    const id = cleanText(item.clientId, 180);
    if (!id || result.has(id)) {
      throw new Error(`${label} : identifiant manquant ou dupliqué.`);
    }
    result.set(id, item);
  });
  return result;
}

function textChange(
  path: string,
  source: EditorRepositorySource,
  content: string,
): ProposedFile {
  return {
    file_path: path,
    base_file_sha: source.fileSha,
    old_content: source.content,
    new_content: content,
    content_encoding: "utf-8",
    change_type: "update",
  };
}

function createMarkdown(path: string, content: string): ProposedFile {
  validateMarkdown(content);
  return {
    file_path: path,
    new_content: content,
    content_encoding: "utf-8",
    change_type: "create",
  };
}

function deleteFile(
  path: string,
  source: EditorRepositorySource,
): ProposedFile {
  return {
    file_path: path,
    base_file_sha: source.fileSha,
    old_content: source.content,
    content_encoding: "utf-8",
    change_type: "delete",
  };
}

function coreShape(draft: JsonRecord): string {
  return JSON.stringify(
    list(draft.modules).map((moduleValue) => {
      const module = record(moduleValue);
      return {
        id: module.clientId,
        title: module.title,
        pages: list(module.pages).map((pageValue) => ({
          id: record(pageValue).clientId,
          title: record(pageValue).title,
        })),
      };
    }),
  );
}

function relatedShape(draft: JsonRecord): string {
  return JSON.stringify(
    ["exercises", "labs", "quizzes"].map((family) =>
      list(draft[family]).map((item) => ({
        id: record(item).clientId,
        title: record(item).title,
      }))
    ),
  );
}

function updateCoreNavigation(
  content: string,
  plan: CourseEditorPlan,
  currentDraft: JsonRecord,
  nextDraft: JsonRecord,
): string {
  const config = parseMkDocsConfig(content);
  const nav = Array.isArray(config.nav) ? config.nav as unknown[] : [];
  const courses = navSection(nav, "Cours");
  if (!courses) {
    throw new Error("La section Cours est introuvable dans mkdocs.yml.");
  }
  const currentEntry = navEntry(courses, plan.courseTitle);
  if (!currentEntry) {
    throw new Error("Le cours n’existe plus dans la navigation.");
  }
  const general = record(nextDraft.general);
  const title = cleanText(general.title, 160, plan.courseTitle);
  const children: unknown[] = [{
    Présentation: plan.coursePath.replace(/^docs\//, ""),
  }];
  list(nextDraft.modules).forEach((moduleValue, moduleIndex) => {
    const module = record(moduleValue);
    const storage = record(module.storage);
    const path = String(storage.resolvedPath || storage.path || "");
    if (!path || storage.virtual) return;
    const moduleTitle = cleanText(
      module.title,
      160,
      `Module ${moduleIndex + 1}`,
    );
    children.push({
      [`Module ${String(moduleIndex + 1).padStart(2, "0")} — ${moduleTitle}`]:
        path.replace(/^docs\//, ""),
    });
    list(module.pages).forEach((pageValue) => {
      const page = record(pageValue);
      const pageStorage = record(page.storage);
      const pagePath = String(
        pageStorage.resolvedPath || pageStorage.path || "",
      );
      if (pagePath) {
        children.push({
          [`${moduleTitle} — ${cleanText(page.title, 160, "Page")}`]: pagePath
            .replace(/^docs\//, ""),
        });
      }
    });
  });
  const courseNavigationChanged =
    record(currentDraft.general).title !== title ||
    record(currentDraft.general).order !== general.order ||
    coreShape(currentDraft) !== coreShape(nextDraft);
  if (courseNavigationChanged) {
    courses.splice(currentEntry.index, 1);
    const order = cleanInteger(
      general.order,
      1,
      Math.max(1, courses.length + 1),
      currentEntry.index + 1,
    ) - 1;
    courses.splice(order, 0, { [title]: children });
  }
  const updateRelated = (
    family: "exercises" | "labs" | "quizzes",
    sectionLabel: string,
  ): void => {
    const before = list(currentDraft[family]).map((item) => ({
      id: record(item).clientId,
      title: record(item).title,
    }));
    const after = list(nextDraft[family]).map((item) => ({
      id: record(item).clientId,
      title: record(item).title,
    }));
    if (
      JSON.stringify(before) === JSON.stringify(after) &&
      record(currentDraft.general).title === title
    ) return;
    const section = navSection(nav, sectionLabel);
    if (!section) {
      if (after.length) {
        throw new Error(
          `La section ${sectionLabel} est introuvable dans mkdocs.yml.`,
        );
      }
      return;
    }
    const previousLabel = plan.relatedNavLabels[family] || plan.courseTitle;
    const previous = navEntry(section, previousLabel) ||
      navEntry(section, plan.courseTitle);
    if (previous) section.splice(previous.index, 1);
    if (!after.length) return;
    let navigationValue: unknown;
    if (family === "labs") {
      navigationValue = list(nextDraft.labs).map((labValue, index) => {
        const lab = record(labValue);
        const files = record(record(lab.storage).files);
        const labChildren: unknown[] = [];
        const add = (label: string, key: string) => {
          const file = record(files[key]);
          const path = String(file.resolvedPath || file.path || "");
          if (path) labChildren.push({ [label]: path.replace(/^docs\//, "") });
        };
        add("Présentation", "introduction");
        add("Énoncés", "statement");
        add("Corrections", "correction");
        return { [cleanText(lab.title, 160, `TP ${index + 1}`)]: labChildren };
      });
    } else {
      navigationValue = list(nextDraft[family]).map((itemValue, index) => {
        const item = record(itemValue);
        const storage = record(item.storage);
        const path = String(storage.resolvedPath || storage.path || "");
        return {
          [cleanText(item.title, 160, `${family} ${index + 1}`)]: path.replace(
            /^docs\//,
            "",
          ),
        };
      });
    }
    section.push({ [title]: navigationValue });
  };
  updateRelated("exercises", COURSE_SECTIONS.exercises);
  updateRelated("labs", COURSE_SECTIONS.labs);
  updateRelated("quizzes", COURSE_SECTIONS.quizzes);
  config.nav = nav;
  return stringifyMkDocsConfig(config);
}

function normalizeEditItem(item: JsonRecord, kind: string): JsonRecord {
  const base: JsonRecord = {
    clientId: cleanText(item.clientId, 180),
    title: cleanText(item.title, 160, "Sans titre"),
  };
  if (kind === "module") {
    return {
      ...item,
      ...base,
      subtitle: cleanText(item.subtitle, 220),
      description: cleanText(item.description, 1_000),
      content: rawMarkdown(item.content),
      pages: list(item.pages, 80).map((page) =>
        normalizeEditItem(record(page), "page")
      ),
    };
  }
  if (kind === "page") {
    return {
      ...item,
      ...base,
      type: ALLOWED_PAGE_TYPES.has(String(item.type)) ? item.type : "cours",
      description: cleanText(item.description, 500),
      content: rawMarkdown(item.content),
    };
  }
  if (kind === "exercise") {
    return {
      ...item,
      ...base,
      instructions: rawMarkdown(item.instructions),
      hint: rawMarkdown(item.hint),
      solution: rawMarkdown(item.solution),
      difficulty: ALLOWED_DIFFICULTIES.has(String(item.difficulty))
        ? item.difficulty
        : "",
      duration: cleanText(item.duration, 80),
      type: cleanText(item.type, 80),
      tags: stringList(item.tags),
      moduleIndex: cleanInteger(item.moduleIndex, -1, 200, -1),
    };
  }
  if (kind === "lab") {
    return {
      ...item,
      ...base,
      objective: cleanText(item.objective, 1_000),
      prerequisites: stringList(item.prerequisites),
      environment: cleanText(item.environment, 1_000),
      duration: cleanText(item.duration, 80),
      steps: rawMarkdown(item.steps),
      resources: rawMarkdown(item.resources),
      correction: rawMarkdown(item.correction),
      moduleIndex: cleanInteger(item.moduleIndex, -1, 200, -1),
    };
  }
  if (kind === "quiz") {
    const quizKind = item.kind === "kahoot" ? "kahoot" : "quiz";
    return {
      ...item,
      ...base,
      kind: quizKind,
      description: cleanText(item.description, 1_000),
      url: safeHttps(item.url, quizKind === "kahoot"),
      difficulty: cleanText(item.difficulty, 60),
      category: cleanText(item.category, 100),
      moduleIndex: cleanInteger(item.moduleIndex, -1, 200, -1),
      content: rawMarkdown(item.content),
      questions: list(item.questions, 80),
    };
  }
  return { ...item, ...base };
}

function normalizedDraft(raw: unknown): JsonRecord {
  const source = record(raw);
  const generalSource = record(source.general);
  return {
    ...source,
    general: {
      ...generalSource,
      title: cleanText(generalSource.title, 160, "Nouveau cours"),
      shortTitle: cleanText(generalSource.shortTitle, 80),
      description: rawMarkdown(generalSource.description),
      order: cleanInteger(generalSource.order, 1, 999, 1),
      notes: cleanText(generalSource.notes, 2_000),
      includeInPath: generalSource.includeInPath === true,
      coverAttachmentId: cleanText(generalSource.coverAttachmentId, 100),
    },
    modules: list(source.modules, 80).map((item) =>
      normalizeEditItem(record(item), "module")
    ),
    exercises: list(source.exercises, 80).map((item) =>
      normalizeEditItem(record(item), "exercise")
    ),
    labs: list(source.labs, 80).map((item) =>
      normalizeEditItem(record(item), "lab")
    ),
    quizzes: list(source.quizzes, 80).map((item) =>
      normalizeEditItem(record(item), "quiz")
    ),
    glossaryEntries: list(source.glossaryEntries, 500),
    existingGlossary: list(source.existingGlossary, 500),
    resources: list(source.resources, 500),
  };
}

function updateKahootUrl(
  content: string,
  currentUrl: string,
  nextUrl: string,
): string {
  if (currentUrl === nextUrl) return content;
  if (currentUrl && content.includes(currentUrl)) {
    return content.replaceAll(currentUrl, nextUrl);
  }
  if (nextUrl) {
    return `${content.trimEnd()}\n\n[Jouer sur Kahoot](${nextUrl}){ .md-button .md-button--primary target="_blank" rel="noopener noreferrer" }\n`;
  }
  return content;
}

function renderNewExercise(item: JsonRecord): string {
  const output = [`# ${cleanText(item.title, 160, "Exercice")}`, ""];
  const metadata = [
    item.difficulty && `Difficulté : ${cleanText(item.difficulty, 30)}`,
    item.duration && `Durée : ${cleanText(item.duration, 80)}`,
    item.type && `Type : ${cleanText(item.type, 80)}`,
  ].filter(Boolean);
  if (metadata.length) output.push(`**${metadata.join(" · ")}**`, "");
  output.push(rawMarkdown(item.instructions) || "Consigne à compléter.", "");
  if (item.hint) {
    output.push(
      `??? tip "Indice"\n${
        rawMarkdown(item.hint).split("\n").map((line) => `    ${line}`).join(
          "\n",
        )
      }`,
      "",
    );
  }
  if (item.solution) {
    output.push(
      `??? success "Correction"\n${
        rawMarkdown(item.solution).split("\n").map((line) => `    ${line}`)
          .join("\n")
      }`,
      "",
    );
  }
  return output.join("\n").trimEnd() + "\n";
}

function renderNewQuiz(item: JsonRecord): string {
  const output = [`# ${cleanText(item.title, 160, "Quiz")}`, ""];
  if (item.description) output.push(cleanText(item.description, 1_000), "");
  if (item.url) {
    output.push(
      `[Jouer sur Kahoot](${
        safeHttps(item.url, item.kind === "kahoot")
      }){ .md-button .md-button--primary target="_blank" rel="noopener noreferrer" }`,
      "",
    );
  }
  list(item.questions, 80).forEach((questionValue, index) => {
    const question = record(questionValue);
    output.push(
      `## Question ${index + 1}`,
      "",
      cleanText(question.question, 1_000, `Question ${index + 1}`),
      "",
    );
    stringList(question.answers, 12).forEach((answer) =>
      output.push(`- ${answer}`)
    );
    const details = [
      question.correctAnswer &&
      `**Réponse :** ${cleanText(question.correctAnswer, 500)}`,
      question.explanation && cleanText(question.explanation, 2_000),
    ].filter(Boolean);
    if (details.length) {
      output.push(
        "",
        `??? success "Réponse et explication"\n${
          details.map((line) => `    ${line}`).join("\n\n")
        }`,
        "",
      );
    }
  });
  return output.join("\n").trimEnd() + "\n";
}

function renderNewLabStatement(item: JsonRecord): string {
  const output = [`# ${cleanText(item.title, 160, "TP")}`, ""];
  if (item.objective) {
    output.push(`**Objectif :** ${cleanText(item.objective, 1_000)}`, "");
  }
  if (item.duration) {
    output.push(`**Durée :** ${cleanText(item.duration, 80)}`, "");
  }
  if (item.environment) {
    output.push(
      `**Environnement :** ${cleanText(item.environment, 1_000)}`,
      "",
    );
  }
  const prerequisites = stringList(item.prerequisites);
  if (prerequisites.length) {
    output.push(
      "## Prérequis",
      "",
      ...prerequisites.map((value) => `- ${value}`),
      "",
    );
  }
  output.push(rawMarkdown(item.steps) || "Étapes à compléter.");
  return output.join("\n").trimEnd() + "\n";
}

function buildItemDiff(
  current: JsonRecord,
  next: JsonRecord,
): Record<string, number> {
  const families = [
    "modules",
    "exercises",
    "labs",
    "quizzes",
    "glossaryEntries",
    "resources",
  ];
  const result = { added: 0, modified: 0, removed: 0, unchanged: 0 };
  families.forEach((family) => {
    const before = new Map(
      list(current[family], 500).map((
        item,
      ) => [
        String(record(item).clientId || record(item).id),
        JSON.stringify(item),
      ]),
    );
    const after = new Map(
      list(next[family], 500).map((
        item,
      ) => [
        String(record(item).clientId || record(item).id),
        JSON.stringify(item),
      ]),
    );
    before.forEach((value, key) => {
      if (!after.has(key)) result.removed += 1;
      else if (after.get(key) === value) result.unchanged += 1;
      else result.modified += 1;
    });
    after.forEach((_value, key) => {
      if (!before.has(key)) result.added += 1;
    });
  });
  return result;
}

function extensionForAttachment(name: string, mediaType: string): string {
  const extension = name.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1] || "";
  const aliases: Record<string, string> = {
    "image/png": "png",
    "image/jpeg": "jpg",
    "image/webp": "webp",
    "image/gif": "gif",
    "application/pdf": "pdf",
    "text/csv": "csv",
    "application/zip": "zip",
  };
  const candidate = aliases[mediaType] || extension;
  const allowed = new Set([
    "png",
    "jpg",
    "jpeg",
    "webp",
    "gif",
    "pdf",
    "txt",
    "cfg",
    "conf",
    "ini",
    "csv",
    "json",
    "yaml",
    "yml",
    "xml",
    "zip",
    "xlsx",
    "pptx",
    "pka",
    "bat",
    "cmd",
    "ps1",
    "sh",
  ]);
  if (!allowed.has(candidate)) {
    throw new Error(`Le type du fichier ${name} n’est pas autorisé.`);
  }
  return candidate === "jpeg" ? "jpg" : candidate;
}

function relativePath(fromFile: string, toFile: string): string {
  const from = fromFile.split("/").slice(0, -1);
  const to = toFile.split("/");
  while (from.length && to.length && from[0] === to[0]) {
    from.shift();
    to.shift();
  }
  return `${"../".repeat(from.length)}${to.join("/")}`;
}

function withoutCourseCover(content: string): string {
  return content.replace(
    /(!\[[^\]]*\]\([^)]+\))\{([^}]*)\}/g,
    (whole, image, attributes) => {
      if (!/(?:^|\s)\.tssr-course-cover\b/.test(attributes)) return whole;
      const remaining = String(attributes).replace(
        /(?:^|\s)\.tssr-course-cover\b/,
        "",
      ).replace(/\s+/g, " ").trim();
      return remaining ? `${image}{ ${remaining} }` : image;
    },
  );
}

function insertCourseCover(content: string, markup: string): string {
  const heading = /^#[^\n]*(?:\n|$)/m.exec(content);
  if (!heading || heading.index === undefined) {
    return `${markup}\n\n${content}`;
  }
  const position = heading.index + heading[0].length;
  return `${content.slice(0, position)}\n${markup}\n${content.slice(position)}`;
}

export function buildCourseModification(
  rawEditor: unknown,
  plan: CourseEditorPlan,
  snapshot: CourseEditorSnapshot,
): BuiltCourseModification {
  if (
    snapshot.commitSha !== record(rawEditor).baseCommitSha ||
    snapshot.commitSha !== record(record(rawEditor).meta).baseCommitSha
  ) {
    throw new Error(
      "Le cours a évolué depuis son chargement. Rechargez la version actuelle avant de proposer vos changements.",
    );
  }
  const currentEditor = buildCourseEditorModel(plan, snapshot);
  const currentDraft = record(currentEditor.draft);
  const nextDraft = normalizedDraft(record(rawEditor).draft || rawEditor);
  const unavailable = new Set(snapshot.files.map((file) => file.path));
  const nextText = new Map<string, string>();
  const deleted = new Set<string>();
  const created = new Set<string>();
  plan.documentPaths.forEach((path) =>
    nextText.set(path, sourceOrThrow(snapshot, path).content)
  );

  const currentGeneral = record(currentDraft.general);
  const nextGeneral = record(nextDraft.general);
  let overview = rawMarkdown(nextGeneral.description);
  if (nextGeneral.title !== currentGeneral.title) {
    overview = replaceFirstHeading(
      overview,
      String(nextGeneral.title),
      "course",
    );
  }
  overview = applyGeneralFields(overview, currentGeneral, nextGeneral);
  nextText.set(plan.coursePath, overview);

  const currentModules = entityMap(currentDraft.modules, "Modules actuels");
  const nextModules = entityMap(nextDraft.modules, "Modules proposés");
  const resolvedModules: JsonRecord[] = [];
  list(nextDraft.modules, 80).forEach((value, moduleIndex) => {
    const module = record(value);
    const current = currentModules.get(String(module.clientId));
    let path = String(record(current?.storage).path || "");
    if (!current) {
      path = uniquePath(
        `${plan.courseDirectory}/module-${
          String(moduleIndex + 1).padStart(2, "0")
        }-${slugify(module.title, `module-${moduleIndex + 1}`)}`,
        unavailable,
      );
      created.add(path);
    }
    const rawContent = rawMarkdown(module.content);
    const content = current && current.title === module.title
      ? rawContent
      : replaceFirstHeading(
        rawContent,
        String(module.title),
        "module",
        moduleIndex,
      );
    nextText.set(
      path,
      content ||
        `# Module ${
          String(moduleIndex + 1).padStart(2, "0")
        } — ${module.title}\n`,
    );
    const pages: JsonRecord[] = [];
    list(module.pages, 80).forEach((pageValue, pageIndex) => {
      const page = record(pageValue);
      const currentPage = [...currentModules.values()].flatMap((item) =>
        list(item.pages).map(record)
      ).find((item) => item.clientId === page.clientId);
      let pagePath = String(record(currentPage?.storage).path || "");
      if (!currentPage) {
        pagePath = uniquePath(
          `${plan.courseDirectory}/page-${
            String(moduleIndex + 1).padStart(2, "0")
          }-${String(pageIndex + 1).padStart(2, "0")}-${
            slugify(page.title, `page-${pageIndex + 1}`)
          }`,
          unavailable,
        );
        created.add(pagePath);
      }
      const pageContent = rawMarkdown(page.content);
      nextText.set(
        pagePath,
        currentPage && currentPage.title === page.title
          ? pageContent
          : replaceFirstHeading(pageContent, String(page.title), "page"),
      );
      pages.push({
        ...page,
        storage: { ...record(page.storage), resolvedPath: pagePath },
      });
    });
    resolvedModules.push({
      ...module,
      pages,
      storage: { ...record(module.storage), resolvedPath: path },
    });
  });
  currentModules.forEach((module, id) => {
    if (nextModules.has(id)) return;
    const path = String(record(module.storage).path || "");
    if (path) deleted.add(path);
    list(module.pages).forEach((page) => {
      const pagePath = String(record(record(page).storage).path || "");
      if (pagePath) deleted.add(pagePath);
    });
  });
  const allCurrentPages = [...currentModules.values()].flatMap((module) =>
    list(module.pages).map(record)
  );
  const allNextPageIds = new Set(
    resolvedModules.flatMap((module) =>
      list(module.pages).map((page) => String(record(page).clientId))
    ),
  );
  allCurrentPages.forEach((page) => {
    if (!allNextPageIds.has(String(page.clientId))) {
      const path = String(record(page.storage).path || "");
      if (path) deleted.add(path);
    }
  });
  nextDraft.modules = resolvedModules;

  const processSingleFileFamily = (
    family: "exercises" | "quizzes",
    folder: string,
  ): void => {
    const currentItems = entityMap(
      currentDraft[family],
      `Éléments actuels ${family}`,
    );
    const nextItems = entityMap(
      nextDraft[family],
      `Éléments proposés ${family}`,
    );
    const resolved: JsonRecord[] = [];
    list(nextDraft[family], 80).forEach((value, index) => {
      const item = record(value);
      const current = currentItems.get(String(item.clientId));
      let path = String(record(current?.storage).path || "");
      if (!current) {
        path = uniquePath(
          `docs/${folder}/${String(record(currentEditor.meta).slug)}-${
            String(index + 1).padStart(2, "0")
          }-${slugify(item.title, family)}`,
          unavailable,
        );
        created.add(path);
      }
      let content = family === "exercises"
        ? rawMarkdown(item.instructions)
        : rawMarkdown(item.content);
      if (!current) {
        content = family === "exercises"
          ? renderNewExercise(item)
          : renderNewQuiz(item);
      }
      if (!current || current.title !== item.title) {
        content = replaceFirstHeading(content, String(item.title), "generic");
      }
      if (family === "quizzes" && current) {
        content = updateKahootUrl(
          content,
          String(current?.url || ""),
          String(item.url || ""),
        );
      }
      nextText.set(path, content);
      resolved.push({
        ...item,
        storage: { ...record(item.storage), resolvedPath: path },
      });
    });
    currentItems.forEach((item, id) => {
      if (!nextItems.has(id)) {
        const path = String(record(item.storage).path || "");
        if (path) deleted.add(path);
      }
    });
    nextDraft[family] = resolved;
  };
  processSingleFileFamily("exercises", "exercices");
  processSingleFileFamily("quizzes", "kahoot");

  const currentLabs = entityMap(currentDraft.labs, "TP actuels");
  const nextLabs = entityMap(nextDraft.labs, "TP proposés");
  const resolvedLabs: JsonRecord[] = [];
  list(nextDraft.labs, 80).forEach((value, index) => {
    const lab = record(value);
    const current = currentLabs.get(String(lab.clientId));
    const currentFiles = record(record(current?.storage).files);
    const directory = current
      ? String(record(current?.storage).group || "").replace(/:root$/, "")
      : `docs/tp/${String(record(currentEditor.meta).slug)}/module-${
        String(index + 1).padStart(2, "0")
      }-${slugify(lab.title, "tp")}`;
    const files: JsonRecord = {};
    ([{ key: "statement", name: "enonces.md", field: "steps" }, {
      key: "correction",
      name: "corrections.md",
      field: "correction",
    }, { key: "introduction", name: "index.md", field: "resources" }] as const)
      .forEach((definition) => {
        const existing = record(currentFiles[definition.key]);
        let path = String(existing.path || "");
        let content = rawMarkdown(lab[definition.field]);
        if (!current && definition.key === "statement") {
          content = renderNewLabStatement(lab);
        }
        if (!current && definition.key === "correction" && content) {
          content = `# Correction — ${
            cleanText(lab.title, 160, "TP")
          }\n\n${content.trim()}\n`;
        }
        if (!current && definition.key === "introduction" && content) {
          content = `# Présentation — ${
            cleanText(lab.title, 160, "TP")
          }\n\n${content.trim()}\n`;
        }
        if (!path && content) {
          path = `${directory}/${definition.name}`;
          if (unavailable.has(path)) {
            path = uniquePath(path.replace(/\.md$/, ""), unavailable);
          } else unavailable.add(path);
          created.add(path);
        }
        if (path) {
          nextText.set(
            path,
            current && current.title === lab.title
              ? content
              : replaceFirstHeading(content, String(lab.title), "generic"),
          );
          files[definition.key] = { ...existing, resolvedPath: path };
        }
      });
    resolvedLabs.push({
      ...lab,
      storage: { ...record(lab.storage), group: directory, files },
    });
  });
  currentLabs.forEach((lab, id) => {
    if (nextLabs.has(id)) return;
    Object.values(record(record(lab.storage).files)).forEach((file) => {
      const path = String(record(file).path || "");
      if (path) deleted.add(path);
    });
  });
  nextDraft.labs = resolvedLabs;

  const currentResources = entityMap(
    currentDraft.resources,
    "Ressources actuelles",
  );
  const nextResources = entityMap(nextDraft.resources, "Ressources proposées");
  currentResources.forEach((resource, id) => {
    const storage = record(resource.storage);
    const path = String(storage.sourcePath || "");
    const token = String(storage.token || "");
    const content = nextText.get(path);
    if (!content || !token || !content.includes(token)) return;
    const next = nextResources.get(id);
    if (!next) nextText.set(path, content.replace(token, ""));
    else {
      const url = safeHttps(next.url);
      const title = cleanText(next.title, 160, "Ressource");
      if (url !== resource.url || title !== resource.title) {
        nextText.set(path, content.replace(token, `[${title}](${url})`));
      }
    }
  });
  nextResources.forEach((resource, id) => {
    if (currentResources.has(id)) return;
    const url = safeHttps(resource.url);
    const title = cleanText(resource.title, 160, "Ressource");
    nextText.set(
      plan.coursePath,
      `${
        nextText.get(plan.coursePath)?.trimEnd()
      }\n\n- [${title}](${url}){ target="_blank" rel="noopener noreferrer" }\n`,
    );
  });

  const currentAttachments = new Map(
    list(currentEditor.attachments, 500).map((
      item,
    ) => [String(record(item).id), record(item)]),
  );
  const proposedAttachments = list(record(rawEditor).attachments, 500).map(
    record,
  );
  const proposedExisting = new Map(
    proposedAttachments.filter((item) => item.kind === "existing").map((
      item,
    ) => [String(item.id), item]),
  );
  const currentCoverId = String(currentGeneral.coverAttachmentId || "");
  const nextCoverId = String(nextGeneral.coverAttachmentId || "");
  const selectedCover = proposedAttachments.find((item) =>
    String(item.id) === nextCoverId
  );
  if (
    nextCoverId &&
    (!selectedCover ||
      !String(selectedCover.mediaType || "").startsWith("image/"))
  ) {
    throw new Error("L’image de couverture proposée est introuvable.");
  }
  if (currentCoverId !== nextCoverId) {
    let content = withoutCourseCover(nextText.get(plan.coursePath) || "");
    if (selectedCover?.kind === "existing") {
      const trusted = currentAttachments.get(nextCoverId);
      if (!trusted) {
        throw new Error("L’image de couverture existante n’est pas fiable.");
      }
      const overviewReference = list(trusted.references, 500).map(record).find((
        reference,
      ) => reference.sourcePath === plan.coursePath);
      const token = String(overviewReference?.token || "") || `![${
        cleanText(
          selectedCover.alt || trusted.alt || trusted.name,
          300,
          "Couverture",
        )
      }](${relativePath(plan.coursePath, String(trusted.path))})`;
      content = content.includes(token)
        ? content.replace(token, `${token}{ .tssr-course-cover }`)
        : insertCourseCover(content, `${token}{ .tssr-course-cover }`);
    }
    nextText.set(plan.coursePath, content);
  }
  currentAttachments.forEach((attachment, id) => {
    const proposed = proposedExisting.get(id);
    if (
      proposed &&
      String(proposed.title || "") === String(attachment.title || "") &&
      String(proposed.alt || "") === String(attachment.alt || "") &&
      String(proposed.caption || "") === String(attachment.caption || "")
    ) return;
    list(attachment.references, 500).forEach((referenceValue) => {
      const reference = record(referenceValue);
      const path = String(reference.sourcePath || "");
      const token = String(reference.token || "");
      const content = nextText.get(path);
      if (!content || !token) return;
      if (!proposed) {
        nextText.set(path, content.replaceAll(token, ""));
        return;
      }
      if (reference.format === "pdf") {
        const replacement = renderPdfAttachment(path, {
          path: attachment.path,
          name: attachment.name,
          title: cleanText(
            proposed.title,
            160,
            String(attachment.title || attachment.name || "Document PDF"),
          ),
        }).trim();
        nextText.set(path, content.replaceAll(token, replacement));
        return;
      }
      const label = token.match(/^(!?)\[([^\]]*)\]/);
      if (!label) return;
      const nextLabel = label[1]
        ? cleanText(
          proposed.alt,
          300,
          String(attachment.alt || attachment.name),
        )
        : cleanText(
          proposed.title,
          160,
          String(attachment.title || attachment.name),
        );
      const updated = `${label[1] || ""}[${nextLabel}]${
        token.slice(label[0].length)
      }`;
      if (updated !== token) {
        nextText.set(path, content.replaceAll(token, updated));
      }
    });
  });
  const binaryChanges: ProposedFile[] = [];
  proposedAttachments.filter((item) => item.kind !== "existing").forEach(
    (attachment, index) => {
      const name = cleanText(attachment.name, 180, `fichier-${index + 1}`);
      const mediaType = cleanText(
        attachment.mediaType,
        120,
        "application/octet-stream",
      ).toLowerCase();
      const content = cleanText(attachment.content, 10_000_000);
      if (
        !content || !/^[a-zA-Z0-9+/]*={0,2}$/.test(content) ||
        content.length % 4 !== 0
      ) throw new Error(`Le fichier ${name} est invalide.`);
      const extension = extensionForAttachment(name, mediaType);
      const image = mediaType.startsWith("image/");
      const base = `docs/assets/${image ? "images" : "resources"}/cours/${
        plan.courseDirectory.split("/").at(-1)
      }/${slugify(name.replace(/\.[^.]+$/, ""), "fichier")}`;
      const path = uniquePath(base, unavailable, extension);
      binaryChanges.push({
        file_path: path,
        new_content: content,
        content_encoding: "base64",
        media_type: mediaType,
        change_type: "create",
      });
      const chosenCover = String(attachment.id || "") === nextCoverId;
      const moduleIndex = cleanInteger(
        attachment.moduleIndex,
        -1,
        resolvedModules.length - 1,
        -1,
      );
      const pageIndex = cleanInteger(attachment.pageIndex, -1, 80, -1);
      let target = plan.coursePath;
      if (!chosenCover && moduleIndex >= 0) {
        const module = resolvedModules[moduleIndex];
        const page = pageIndex >= 0
          ? record(list(module.pages)[pageIndex])
          : null;
        target = String(
          record(page?.storage).resolvedPath ||
            record(module.storage).resolvedPath || plan.coursePath,
        );
      }
      const relative = relativePath(target, path);
      const title = cleanText(attachment.title || name, 160, name);
      const markup = image
        ? `![${cleanText(attachment.alt || title, 300, title)}](${relative})${
          chosenCover ? "{ .tssr-course-cover }" : ""
        }${
          attachment.caption
            ? `\n\n*${cleanText(attachment.caption, 500)}*`
            : ""
        }`
        : extension === "pdf"
        ? renderPdfAttachment(target, { ...attachment, path, title }).trim()
        : `- [${title}](${relative}){ download }`;
      nextText.set(target, `${nextText.get(target)?.trimEnd()}\n\n${markup}\n`);
    },
  );

  const glossaryData = JSON.parse(snapshot.glossary.content) as JsonRecord;
  let glossaryChanged = false;
  const courses = Array.isArray(glossaryData.courses)
    ? glossaryData.courses as JsonRecord[]
    : [];
  const glossaryCourseItem = courses.find((course) =>
    course.id === plan.courseId
  );
  if (glossaryCourseItem) {
    const nextShortName = nextGeneral.shortTitle || nextGeneral.title;
    if (
      glossaryCourseItem.name !== nextGeneral.title ||
      glossaryCourseItem.shortName !== nextShortName
    ) {
      glossaryCourseItem.name = nextGeneral.title;
      glossaryCourseItem.shortName = nextShortName;
      glossaryChanged = true;
    }
  }
  const glossaryModules = Array.isArray(glossaryData.modules)
    ? glossaryData.modules as JsonRecord[]
    : [];
  const existingModuleByPath = new Map(
    glossaryModules.filter((item) => item.courseId === plan.courseId).map((
      item,
    ) => [String(item.path), item]),
  );
  let overviewModule = glossaryModules.find((item) =>
    item.courseId === plan.courseId &&
    String(item.path) === plan.coursePath.replace(/^docs\//, "")
  );
  let overviewModuleRegistered = Boolean(overviewModule);
  if (!overviewModule) {
    overviewModule = {
      id: `${plan.courseId}-presentation`,
      courseId: plan.courseId,
      name: "Présentation",
      shortName: "Présentation",
      path: plan.coursePath.replace(/^docs\//, ""),
    };
  }
  const activeModuleIds = new Set<string>([String(overviewModule.id)]);
  resolvedModules.forEach((module, index) => {
    const path = String(record(module.storage).resolvedPath).replace(
      /^docs\//,
      "",
    );
    let item = existingModuleByPath.get(path);
    const currentModule = currentModules.get(String(module.clientId));
    const currentOrder = list(currentDraft.modules).findIndex((candidate) =>
      record(candidate).clientId === module.clientId
    );
    const identityChanged = !currentModule ||
      currentModule.title !== module.title || currentOrder !== index;
    if (!item) {
      let id = `${plan.courseId}-m${String(index + 1).padStart(2, "0")}`;
      const ids = new Set(
        glossaryModules.map((candidate) => String(candidate.id)),
      );
      let suffix = 2;
      while (ids.has(id)) {
        id = `${plan.courseId}-m${
          String(index + 1).padStart(2, "0")
        }-${suffix++}`;
      }
      item = { id, courseId: plan.courseId, path };
      glossaryModules.push(item);
      glossaryChanged = true;
    }
    const nextName = `Module ${
      String(index + 1).padStart(2, "0")
    } — ${module.title}`;
    const nextShortName = `M${String(index + 1).padStart(2, "0")} · ${
      String(module.title).slice(0, 70)
    }`;
    if (
      identityChanged &&
      (item.name !== nextName || item.shortName !== nextShortName)
    ) {
      item.name = nextName;
      item.shortName = nextShortName;
      glossaryChanged = true;
    }
    activeModuleIds.add(String(item.id));
    record(module.storage).glossaryModuleId = item.id;
  });
  const removedCoursePaths = new Set(
    [...currentModules.values()]
      .filter((module) => !nextModules.has(String(module.clientId)))
      .map((module) =>
        String(record(module.storage).path || "").replace(/^docs\//, "")
      ),
  );
  const filteredGlossaryModules = glossaryModules.filter((item) =>
    item.courseId !== plan.courseId ||
    !removedCoursePaths.has(String(item.path)) ||
    activeModuleIds.has(String(item.id))
  );
  if (filteredGlossaryModules.length !== glossaryModules.length) {
    glossaryChanged = true;
  }
  glossaryData.modules = filteredGlossaryModules;
  let entries = Array.isArray(glossaryData.entries)
    ? glossaryData.entries as JsonRecord[]
    : [];
  const currentGlossary = entityMap(
    currentDraft.glossaryEntries,
    "Glossaire actuel",
  );
  const nextGlossary = entityMap(
    nextDraft.glossaryEntries,
    "Glossaire proposé",
  );
  const moduleIdForIndex = (index: unknown, preserved = ""): string => {
    if (index === -1 || !resolvedModules[Number(index)]) {
      if (preserved) return preserved;
      if (!overviewModuleRegistered && overviewModule) {
        filteredGlossaryModules.push(overviewModule);
        overviewModuleRegistered = true;
        glossaryChanged = true;
      }
      return String(overviewModule?.id);
    }
    return String(
      record(resolvedModules[Number(index)].storage).glossaryModuleId ||
        overviewModule?.id,
    );
  };
  currentGlossary.forEach((current, id) => {
    const entryId = String(current.id || id.replace(/^glossary:/, ""));
    const entry = entries.find((candidate) =>
      String(candidate.id || slugify(candidate.term)) === entryId
    );
    if (!entry) {
      throw new Error(`Le terme de glossaire ${entryId} n’existe plus.`);
    }
    const next = nextGlossary.get(id);
    const otherRefs = (Array.isArray(entry.refs) ? entry.refs.map(String) : [])
      .filter((ref) => !ref.startsWith(`${plan.courseId}:`));
    if (!next) {
      entry.refs = otherRefs;
      glossaryChanged = true;
      return;
    }
    const preservedModuleId = String(record(current.storage).moduleId || "");
    const nextReference = `${plan.courseId}:${
      moduleIdForIndex(next.moduleIndex, preservedModuleId)
    }`;
    const currentReference =
      (Array.isArray(entry.refs) ? entry.refs.map(String) : [])
        .find((reference) => reference.startsWith(`${plan.courseId}:`));
    const unchanged =
      String(current.term || "") === cleanText(next.term, 120) &&
      String(current.fullName || "") === cleanText(next.fullName, 220) &&
      String(current.definition || "") === cleanText(next.definition, 420) &&
      JSON.stringify(current.aliases || []) ===
        JSON.stringify(stringList(next.aliases, 15)) &&
      JSON.stringify(current.keywords || []) ===
        JSON.stringify(stringList(next.keywords, 20)) &&
      currentReference === nextReference;
    if (unchanged) return;
    glossaryChanged = true;
    entry.term = cleanText(next.term, 120);
    entry.fullName = cleanText(next.fullName, 220);
    entry.definition = cleanText(next.definition, 420);
    entry.aliases = stringList(next.aliases, 15);
    entry.keywords = stringList(next.keywords, 20);
    entry.refs = [...otherRefs, nextReference];
  });
  entries = entries.filter((entry) =>
    Array.isArray(entry.refs) && entry.refs.length
  );
  const entryIds = new Set(
    entries.map((entry) => String(entry.id || slugify(entry.term))),
  );
  const normalizedTerms = new Set(
    entries.map((entry) => slugify(entry.term, "")),
  );
  nextGlossary.forEach((next, id) => {
    if (currentGlossary.has(id)) return;
    const term = cleanText(next.term, 120);
    if (!term) return;
    const normalized = slugify(term, "");
    if (normalizedTerms.has(normalized)) {
      throw new Error(
        `Le terme « ${term} » existe déjà. Utilisez l’association au terme existant.`,
      );
    }
    let entryId = normalized;
    let suffix = 2;
    while (entryIds.has(entryId)) entryId = `${normalized}-${suffix++}`;
    entryIds.add(entryId);
    normalizedTerms.add(normalized);
    entries.push({
      id: entryId,
      term,
      fullName: cleanText(next.fullName, 220),
      definition: cleanText(next.definition, 420),
      aliases: stringList(next.aliases, 15),
      keywords: stringList(next.keywords, 20),
      refs: [`${plan.courseId}:${moduleIdForIndex(next.moduleIndex)}`],
    });
    glossaryChanged = true;
  });
  list(nextDraft.existingGlossary, 500).forEach((linkValue) => {
    const link = record(linkValue);
    const entry = entries.find((candidate) =>
      String(candidate.id || slugify(candidate.term)) === String(link.id)
    );
    if (!entry) {
      throw new Error(`Le terme de glossaire ${link.id} n’existe plus.`);
    }
    const reference = `${plan.courseId}:${moduleIdForIndex(link.moduleIndex)}`;
    const refs = Array.isArray(entry.refs) ? entry.refs as string[] : [];
    if (!refs.includes(reference)) {
      refs.push(reference);
      glossaryChanged = true;
    }
    entry.refs = refs;
  });
  glossaryData.entries = entries;

  const files: ProposedFile[] = [];
  deleted.forEach((path) => {
    nextText.delete(path);
    files.push(deleteFile(path, sourceOrThrow(snapshot, path)));
  });
  nextText.forEach((content, path) => {
    const original = snapshot.documents[path];
    if (!original) files.push(createMarkdown(path, content));
    else if (content !== original.content) {
      files.push(textChange(path, original, content));
    }
  });
  const needsNav = currentGeneral.title !== nextGeneral.title ||
    currentGeneral.order !== nextGeneral.order ||
    coreShape(currentDraft) !== coreShape(nextDraft) ||
    relatedShape(currentDraft) !== relatedShape(nextDraft);
  if (needsNav) {
    const nextMkDocs = updateCoreNavigation(
      snapshot.mkdocs.content,
      plan,
      currentDraft,
      nextDraft,
    );
    if (nextMkDocs !== snapshot.mkdocs.content) {
      files.push(textChange("mkdocs.yml", snapshot.mkdocs, nextMkDocs));
    }
  }
  const nextGlossaryContent = JSON.stringify(glossaryData, null, 2) + "\n";
  if (glossaryChanged) {
    files.push(
      textChange("data/glossaire.json", snapshot.glossary, nextGlossaryContent),
    );
  }
  const curriculumChanged = currentGeneral.includeInPath !==
      nextGeneral.includeInPath ||
    Boolean(nextGeneral.includeInPath) && [
        "title",
        "shortDescription",
        "startDate",
        "endDate",
        "trainer",
      ].some((key) => currentGeneral[key] !== nextGeneral[key]);
  if (curriculumChanged) {
    if (!snapshot.curriculum) {
      throw new Error(
        "Le parcours chronologique n’a pas pu être chargé ; sa relation ne peut pas être modifiée sans risque.",
      );
    }
    const curriculumContent = updateCurriculumContribution(
      snapshot.curriculum.content,
      plan,
      nextGeneral,
      Boolean(nextGeneral.includeInPath),
    );
    if (curriculumContent !== snapshot.curriculum.content) {
      files.push(
        textChange(
          "docs/parcours/index.md",
          snapshot.curriculum,
          curriculumContent,
        ),
      );
    }
  }
  files.push(...binaryChanges);
  if (!files.length) throw new Error("Aucune modification n’a été détectée.");
  const available = new Set(snapshot.files.map((file) => file.path));
  files.forEach((file) => {
    if (file.change_type === "delete" || file.change_type === "rename") {
      available.delete(file.file_path);
    }
    if (file.change_type !== "delete") {
      available.add(file.new_file_path || file.file_path);
    }
  });
  const mkdocsChange = files.find((file) => file.file_path === "mkdocs.yml");
  validateMkDocsEdit(
    snapshot.mkdocs.content,
    mkdocsChange?.new_content || snapshot.mkdocs.content,
    available,
  );
  const validated = validateProposedFiles(files);
  const itemDiff = buildItemDiff(currentDraft, nextDraft);
  const summary = {
    title: nextGeneral.title,
    course_id: plan.courseId,
    course_path: plan.coursePath,
    operation: "modify_course",
    added: itemDiff.added +
      validated.filter((file) => file.change_type === "create").length,
    modified: itemDiff.modified +
      validated.filter((file) => file.change_type === "update").length,
    removed: itemDiff.removed +
      validated.filter((file) => file.change_type === "delete").length,
    unchanged: itemDiff.unchanged,
    files: validated.map((file) => ({
      path: file.new_file_path || file.file_path,
      change_type: file.change_type,
      encoding: file.content_encoding,
    })),
    modules: resolvedModules.length,
    pages: resolvedModules.reduce(
      (total, module) => total + list(module.pages).length,
      0,
    ),
    exercises: list(nextDraft.exercises).length,
    labs: resolvedLabs.length,
    quizzes: list(nextDraft.quizzes).length,
    glossary_entries: list(nextDraft.glossaryEntries).length,
    resources: list(nextDraft.resources).length,
    attachments: proposedAttachments.map((attachment) => ({
      name: attachment.name,
      path: attachment.path || null,
      kind: attachment.kind || "new",
    })),
  };
  return { files: validated, summary, editor: currentEditor };
}
