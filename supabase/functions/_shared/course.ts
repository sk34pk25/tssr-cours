import {
  parseMkDocsConfig,
  type ProposedFile,
  stringifyMkDocsConfig,
  validateMarkdown,
  validateMkDocsEdit,
  validateProposedFiles,
} from "./validation.ts";

export interface RepositorySource {
  content: string;
  fileSha: string;
}

export interface CourseRepositorySnapshot {
  commitSha: string;
  files: Array<{ path: string; sha: string }>;
  mkdocs: RepositorySource;
  glossary: RepositorySource;
  kahoot: RepositorySource;
  home: RepositorySource;
  generalIndex: RepositorySource;
  curriculum: RepositorySource;
}

export interface BuiltCourseProposal {
  files: ProposedFile[];
  summary: Record<string, unknown>;
  courseSlug: string;
  coursePath: string;
}

type JsonRecord = Record<string, unknown>;

const MAX_MARKDOWN_TOTAL = 2_500_000;
const COURSE_LIMITS = Object.freeze({
  modules: 15,
  pagesPerModule: 12,
  exercises: 30,
  labs: 20,
  quizzes: 30,
  questionsPerQuiz: 40,
  glossaryEntries: 80,
  existingGlossaryLinks: 120,
  resources: 40,
  attachments: 12,
});

const ALLOWED_STYLES = new Set(["", "accent", "information", "success", "warning", "danger"]);
const ALLOWED_RESOURCE_TYPES = new Set(["web", "video", "documentation", "outil", "autre"]);
const ALLOWED_PAGE_TYPES = new Set(["cours", "chapitre", "fiche", "resume", "procedure", "tutoriel"]);
const ALLOWED_DIFFICULTIES = new Set(["", "debutant", "intermediaire", "avance"]);

function record(value: unknown): JsonRecord {
  return value && typeof value === "object" && !Array.isArray(value) ? value as JsonRecord : {};
}

function array(value: unknown, limit: number, label: string): unknown[] {
  const result = Array.isArray(value) ? value : [];
  if (result.length > limit) throw new Error(`${label} : limite de ${limit} éléments dépassée.`);
  return result;
}

function text(value: unknown, maxLength: number, fallback = ""): string {
  const normalized = String(value ?? "").replaceAll("\0", "").replace(/\r\n?/g, "\n").trim();
  if (normalized.length > maxLength) throw new Error(`Un champ dépasse la limite de ${maxLength} caractères.`);
  return normalized || fallback;
}

function boolean(value: unknown): boolean {
  return value === true || value === "true" || value === 1;
}

function integer(value: unknown, minimum: number, maximum: number, fallback = 0): number {
  const parsed = Number.parseInt(String(value ?? ""), 10);
  return Number.isFinite(parsed) ? Math.min(maximum, Math.max(minimum, parsed)) : fallback;
}

function stringList(value: unknown, limit = 30): string[] {
  const raw = Array.isArray(value) ? value : String(value ?? "").split(/[\n,;]/);
  return raw.map((item) => text(item, 160)).filter(Boolean).slice(0, limit);
}

function safeUrl(value: unknown, { kahoot = false }: { kahoot?: boolean } = {}): string {
  const raw = text(value, 2_000);
  if (!raw) return "";
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(`URL invalide : ${raw.slice(0, 80)}`);
  }
  if (url.protocol !== "https:") throw new Error("Seules les URL HTTPS sont autorisées.");
  if (url.username || url.password) throw new Error("Les identifiants intégrés aux URL sont interdits.");
  if (kahoot && !/(^|\.)kahoot\.(com|it)$/i.test(url.hostname)) {
    throw new Error("Un lien Kahoot doit utiliser un domaine officiel kahoot.com ou kahoot.it.");
  }
  return url.href;
}

function safeMarkdown(value: unknown, maxLength = 500_000): string {
  const content = text(value, maxLength);
  if (content) validateMarkdown(content);
  return content;
}

export function slugifyCourse(value: unknown, fallback = "nouveau-cours"): string {
  const normalized = String(value ?? "")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/['’]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-{2,}/g, "-")
    .slice(0, 64)
    .replace(/-+$/g, "");
  return normalized || fallback;
}

function uniqueSlug(base: string, unavailable: Set<string>): string {
  let candidate = base;
  let suffix = 2;
  while (unavailable.has(candidate)) candidate = `${base.slice(0, 58)}-${suffix++}`;
  unavailable.add(candidate);
  return candidate;
}

function markdownText(value: unknown): string {
  return text(value, 20_000)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replace(/([\\`*_{}\[\]()#+.!|])/g, "\\$1");
}

function htmlAttribute(value: unknown): string {
  return text(value, 2_000)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function heading(value: unknown, fallback: string): string {
  return markdownText(text(value, 180, fallback));
}

function markdownList(title: string, values: string[]): string {
  if (!values.length) return "";
  return `\n## ${title}\n\n${values.map((item) => `- ${markdownText(item)}`).join("\n")}\n`;
}

function pathRelative(fromFile: string, toFile: string): string {
  const from = fromFile.split("/").slice(0, -1);
  const to = toFile.split("/");
  while (from.length && to.length && from[0] === to[0]) {
    from.shift();
    to.shift();
  }
  return `${"../".repeat(from.length)}${to.join("/")}`;
}

function normalizeGeneral(value: unknown): JsonRecord {
  const source = record(value);
  const style = text(source.style, 30);
  return {
    title: text(source.title, 160, "Nouveau cours"),
    shortTitle: text(source.shortTitle, 80),
    subtitle: text(source.subtitle, 220),
    shortDescription: text(source.shortDescription, 500),
    description: safeMarkdown(source.description, 250_000),
    category: text(source.category, 100),
    domain: text(source.domain, 100),
    level: text(source.level, 80),
    order: integer(source.order, 0, 999, 0),
    duration: text(source.duration, 80),
    trainer: text(source.trainer, 120),
    startDate: text(source.startDate, 20),
    endDate: text(source.endDate, 20),
    prerequisites: stringList(source.prerequisites),
    objectives: stringList(source.objectives),
    skills: stringList(source.skills),
    keywords: stringList(source.keywords),
    tags: stringList(source.tags),
    style: ALLOWED_STYLES.has(style) ? style : "",
    icon: slugifyCourse(text(source.icon, 80), "book-open-page-variant"),
    status: text(source.status, 60, "Proposé"),
    source: safeUrl(source.source),
    notes: text(source.notes, 2_000),
    includeInPath: boolean(source.includeInPath),
    coverAttachmentId: text(source.coverAttachmentId, 100),
  };
}

function normalizePages(value: unknown): JsonRecord[] {
  return array(value, COURSE_LIMITS.pagesPerModule, "Pages du module").map((item, index) => {
    const source = record(item);
    const pageType = text(source.type, 30).toLowerCase();
    return {
      clientId: text(source.clientId, 100, `page-${index + 1}`),
      title: text(source.title, 160, `Page ${index + 1}`),
      type: ALLOWED_PAGE_TYPES.has(pageType) ? pageType : "cours",
      description: text(source.description, 500),
      content: safeMarkdown(source.content),
    };
  });
}

function normalizeModules(value: unknown): JsonRecord[] {
  return array(value, COURSE_LIMITS.modules, "Modules").map((item, index) => {
    const source = record(item);
    return {
      clientId: text(source.clientId, 100, `module-${index + 1}`),
      title: text(source.title, 160, `Module ${String(index + 1).padStart(2, "0")}`),
      subtitle: text(source.subtitle, 220),
      description: text(source.description, 1_000),
      content: safeMarkdown(source.content),
      pages: normalizePages(source.pages),
    };
  });
}

function normalizeExercises(value: unknown): JsonRecord[] {
  return array(value, COURSE_LIMITS.exercises, "Exercices").map((item, index) => {
    const source = record(item);
    const difficulty = text(source.difficulty, 30).toLowerCase();
    return {
      title: text(source.title, 160, `Exercice ${index + 1}`),
      instructions: safeMarkdown(source.instructions, 250_000),
      difficulty: ALLOWED_DIFFICULTIES.has(difficulty) ? difficulty : "",
      duration: text(source.duration, 80),
      type: text(source.type, 80),
      solution: safeMarkdown(source.solution, 250_000),
      hint: safeMarkdown(source.hint, 80_000),
      moduleIndex: integer(source.moduleIndex, -1, COURSE_LIMITS.modules - 1, -1),
      tags: stringList(source.tags),
    };
  });
}

function normalizeLabs(value: unknown): JsonRecord[] {
  return array(value, COURSE_LIMITS.labs, "Travaux pratiques").map((item, index) => {
    const source = record(item);
    return {
      title: text(source.title, 160, `TP ${index + 1}`),
      objective: text(source.objective, 1_000),
      prerequisites: stringList(source.prerequisites),
      environment: text(source.environment, 1_000),
      duration: text(source.duration, 80),
      steps: safeMarkdown(source.steps, 300_000),
      resources: safeMarkdown(source.resources, 100_000),
      correction: safeMarkdown(source.correction, 300_000),
      moduleIndex: integer(source.moduleIndex, -1, COURSE_LIMITS.modules - 1, -1),
    };
  });
}

function normalizeQuizzes(value: unknown): JsonRecord[] {
  return array(value, COURSE_LIMITS.quizzes, "Quiz et Kahoots").map((item, index) => {
    const source = record(item);
    const kind = text(source.kind, 30).toLowerCase() === "kahoot" ? "kahoot" : "quiz";
    return {
      title: text(source.title, 160, `${kind === "kahoot" ? "Kahoot" : "Quiz"} ${index + 1}`),
      kind,
      description: text(source.description, 1_000),
      url: safeUrl(source.url, { kahoot: kind === "kahoot" }),
      difficulty: text(source.difficulty, 60),
      category: text(source.category, 100),
      moduleIndex: integer(source.moduleIndex, -1, COURSE_LIMITS.modules - 1, -1),
      questions: array(source.questions, COURSE_LIMITS.questionsPerQuiz, "Questions du quiz").map((question, questionIndex) => {
        const questionSource = record(question);
        return {
          question: text(questionSource.question, 1_000, `Question ${questionIndex + 1}`),
          answers: stringList(questionSource.answers, 12),
          correctAnswer: text(questionSource.correctAnswer, 500),
          explanation: text(questionSource.explanation, 2_000),
        };
      }),
    };
  });
}

function normalizeGlossary(value: unknown): JsonRecord[] {
  return array(value, COURSE_LIMITS.glossaryEntries, "Nouveaux termes de glossaire").map((item) => {
    const source = record(item);
    return {
      term: text(source.term, 120),
      fullName: text(source.fullName, 220),
      definition: text(source.definition, 420),
      aliases: stringList(source.aliases, 15),
      keywords: stringList(source.keywords, 20),
      moduleIndex: integer(source.moduleIndex, -1, COURSE_LIMITS.modules - 1, -1),
    };
  }).filter((item) => item.term);
}

function normalizeExistingGlossary(value: unknown): JsonRecord[] {
  return array(value, COURSE_LIMITS.existingGlossaryLinks, "Termes de glossaire associés").map((item) => {
    const source = record(item);
    return {
      id: slugifyCourse(text(source.id, 160), ""),
      moduleIndex: integer(source.moduleIndex, -1, COURSE_LIMITS.modules - 1, -1),
    };
  }).filter((item) => item.id);
}

function normalizeResources(value: unknown): JsonRecord[] {
  return array(value, COURSE_LIMITS.resources, "Ressources Web").map((item, index) => {
    const source = record(item);
    const type = text(source.type, 30).toLowerCase();
    return {
      title: text(source.title, 160, `Ressource ${index + 1}`),
      description: text(source.description, 1_000),
      url: safeUrl(source.url),
      type: ALLOWED_RESOURCE_TYPES.has(type) ? type : "autre",
      moduleIndex: integer(source.moduleIndex, -1, COURSE_LIMITS.modules - 1, -1),
    };
  }).filter((item) => item.url);
}

function normalizeAttachments(value: unknown): JsonRecord[] {
  return array(value, COURSE_LIMITS.attachments, "Fichiers joints").map((item, index) => {
    const source = record(item);
    const content = text(source.content, 10_000_000);
    if (!content || !/^[a-zA-Z0-9+/]*={0,2}$/.test(content) || content.length % 4 !== 0) {
      throw new Error(`Le contenu du fichier joint ${index + 1} est invalide.`);
    }
    return {
      id: text(source.id, 100, `attachment-${index + 1}`),
      name: text(source.name, 180, `fichier-${index + 1}`),
      mediaType: text(source.mediaType || source.media_type, 120).toLowerCase(),
      content,
      title: text(source.title, 160),
      alt: text(source.alt, 300),
      caption: text(source.caption, 500),
      moduleIndex: integer(source.moduleIndex, -1, COURSE_LIMITS.modules - 1, -1),
      pageIndex: integer(source.pageIndex, -1, COURSE_LIMITS.pagesPerModule - 1, -1),
    };
  });
}

export function normalizeCoursePayload(value: unknown): JsonRecord {
  const source = record(value);
  const payload: JsonRecord = {
    general: normalizeGeneral(source.general),
    modules: normalizeModules(source.modules),
    exercises: normalizeExercises(source.exercises),
    labs: normalizeLabs(source.labs),
    quizzes: normalizeQuizzes(source.quizzes),
    glossaryEntries: normalizeGlossary(source.glossaryEntries),
    existingGlossary: normalizeExistingGlossary(source.existingGlossary),
    resources: normalizeResources(source.resources),
    attachments: normalizeAttachments(source.attachments),
  };
  const markdownTotal = [
    record(payload.general).description,
    ...array(payload.modules, COURSE_LIMITS.modules, "Modules").flatMap((item) => {
      const module = record(item);
      return [module.content, ...array(module.pages, COURSE_LIMITS.pagesPerModule, "Pages").map((page) => record(page).content)];
    }),
    ...array(payload.exercises, COURSE_LIMITS.exercises, "Exercices").flatMap((item) => [record(item).instructions, record(item).solution, record(item).hint]),
    ...array(payload.labs, COURSE_LIMITS.labs, "TP").flatMap((item) => [record(item).steps, record(item).resources, record(item).correction]),
  ].reduce<number>((total, item) => total + String(item || "").length, 0);
  if (markdownTotal > MAX_MARKDOWN_TOTAL) throw new Error("Le contenu Markdown du cours dépasse 2,5 Mo.");
  return payload;
}

function nextCourseNumber(paths: string[]): number {
  const numbers = paths.map((path) => path.match(/^docs\/modules\/(\d+)-/)?.[1]).filter(Boolean).map(Number);
  return Math.max(0, ...numbers) + 1;
}

function attachmentExtension(name: string, mediaType: string): string {
  const extension = name.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1] || "";
  const aliases: Record<string, string> = {
    "image/png": "png", "image/jpeg": "jpg", "image/webp": "webp", "image/gif": "gif",
    "application/pdf": "pdf", "text/plain": extension || "txt", "text/csv": "csv",
    "application/zip": "zip",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation": "pptx",
  };
  const allowed = new Set(["png", "jpg", "jpeg", "webp", "gif", "pdf", "txt", "cfg", "conf", "ini", "csv", "json", "yaml", "yml", "xml", "zip", "xlsx", "pptx", "pka", "bat", "cmd", "ps1", "sh"]);
  const candidate = aliases[mediaType] || extension;
  if (!allowed.has(candidate)) throw new Error(`Le type de fichier .${candidate || "inconnu"} n’est pas autorisé.`);
  return candidate === "jpeg" ? "jpg" : candidate;
}

function buildAttachmentChanges(
  attachments: JsonRecord[],
  directorySlug: string,
  unavailable: Set<string>,
): { changes: ProposedFile[]; published: JsonRecord[] } {
  const changes: ProposedFile[] = [];
  const published: JsonRecord[] = [];
  const localNames = new Set<string>();
  for (const attachment of attachments) {
    const mediaType = String(attachment.mediaType);
    const extension = attachmentExtension(String(attachment.name), mediaType);
    const rawBase = slugifyCourse(String(attachment.name).replace(/\.[^.]+$/, ""), "fichier").slice(0, 70);
    const base = uniqueSlug(rawBase, localNames);
    const image = mediaType.startsWith("image/");
    const folder = image ? "docs/assets/images/cours" : "docs/assets/resources/cours";
    const path = `${folder}/${directorySlug}/${base}.${extension}`;
    if (unavailable.has(path)) throw new Error(`Le fichier ${path} existe déjà.`);
    unavailable.add(path);
    changes.push({
      file_path: path,
      new_content: String(attachment.content),
      content_encoding: "base64",
      media_type: mediaType,
      change_type: "create",
    });
    published.push({ ...attachment, path, image, pdf: extension === "pdf" });
  }
  return { changes, published };
}

export function renderPdfAttachment(
  sourceFile: string,
  attachment: Record<string, unknown>,
): string {
  const relative = pathRelative(sourceFile, String(attachment.path));
  const title = String(attachment.title || attachment.name || "Document PDF");
  return `\n<div class="tssr-pdf-embed" data-tssr-pdf-src="${htmlAttribute(relative)}" data-tssr-pdf-title="${htmlAttribute(title)}" markdown>\n  <strong>${markdownText(title)}</strong>\n\n  [Ouvrir le PDF](${relative}){ target="_blank" rel="noopener noreferrer" } · [Télécharger](${relative}){ download }\n\n  <span class="tssr-pdf-embed__fallback">Le PDF ne peut pas être affiché directement dans ce navigateur. Utilisez les liens ci-dessus.</span>\n</div>\n`;
}

function renderAttachments(sourceFile: string, attachments: JsonRecord[]): string {
  if (!attachments.length) return "";
  const output = ["\n## Fichiers et documents\n"];
  for (const attachment of attachments) {
    const relative = pathRelative(sourceFile, String(attachment.path));
    const title = String(attachment.title || attachment.name || "Fichier");
    if (attachment.pdf) output.push(renderPdfAttachment(sourceFile, attachment));
    else if (attachment.image) {
      const alt = markdownText(attachment.alt || title);
      output.push(`\n![${alt}](${relative})`);
      if (attachment.caption) output.push(`\n*${markdownText(attachment.caption)}*\n`);
    } else output.push(`\n- [${markdownText(title)}](${relative}){ download }`);
  }
  return `${output.join("\n")}\n`;
}

function renderResources(resources: JsonRecord[]): string {
  if (!resources.length) return "";
  return `\n## Ressources externes\n\n${resources.map((resource) => {
    const description = resource.description ? ` — ${markdownText(resource.description)}` : "";
    return `- [${markdownText(resource.title)}](${resource.url}){ target="_blank" rel="noopener noreferrer" }${description}`;
  }).join("\n")}\n`;
}

function renderCourseIndex(
  filePath: string,
  general: JsonRecord,
  modules: JsonRecord[],
  moduleFiles: Array<{ title: string; path: string }>,
  resources: JsonRecord[],
  attachments: JsonRecord[],
  cover: JsonRecord | null,
  related: { exercises?: string; labs?: string; quizzes?: string },
): string {
  const title = heading(general.title, "Nouveau cours");
  const metadata = [
    general.category && `**Catégorie :** ${markdownText(general.category)}`,
    general.domain && `**Domaine :** ${markdownText(general.domain)}`,
    general.level && `**Niveau :** ${markdownText(general.level)}`,
    general.duration && `**Durée estimée :** ${markdownText(general.duration)}`,
    general.trainer && `**Formateur :** ${markdownText(general.trainer)}`,
    (general.startDate || general.endDate) && `**Période :** ${markdownText(general.startDate || "À préciser")} → ${markdownText(general.endDate || "À préciser")}`,
    general.source && `**Source :** [ouvrir la source officielle](${general.source}){ target="_blank" rel="noopener noreferrer" }`,
  ].filter(Boolean);
  const icon = String(general.icon || "book-open-page-variant");
  const output = ["---", "hide:", "  - toc", "---", "", `# :material-${icon}: ${title}`, ""];
  if (cover) {
    const relative = pathRelative(filePath, String(cover.path));
    output.push(`![${markdownText(cover.alt || cover.title || title)}](${relative}){ .tssr-course-cover }`, "");
    if (cover.caption) output.push(`*${markdownText(cover.caption)}*`, "");
  }
  if (general.subtitle) output.push(`*${markdownText(general.subtitle)}*`, "");
  if (general.shortDescription) output.push(markdownText(general.shortDescription), "");
  if (metadata.length) output.push(metadata.join("  \n"), "");
  if (general.description) {
    const style = String(general.style || "");
    if (style) output.push(`<div class="tssr-course-intro tssr-course-intro--${style}" markdown="1">\n\n${String(general.description)}\n\n</div>`, "");
    else output.push(String(general.description), "");
  }
  output.push(markdownList("Prérequis", general.prerequisites as string[]));
  output.push(markdownList("Objectifs", general.objectives as string[]));
  output.push(markdownList("Compétences visées", general.skills as string[]));
  if (moduleFiles.length) {
    output.push("\n## Modules et pages\n");
    moduleFiles.forEach((module, index) => output.push(`${index + 1}. [${markdownText(module.title)}](${pathRelative(filePath, module.path)})`));
    output.push("");
  } else {
    output.push("\n!!! info \"Cours à compléter\"\n    Cette première proposition ne contient pas encore de module. Le cours peut être enrichi ensuite par le workflow de modification habituel.\n");
  }
  const relatedLinks = [
    related.exercises && `- [Exercices associés](${pathRelative(filePath, related.exercises)})`,
    related.labs && `- [Travaux pratiques associés](${pathRelative(filePath, related.labs)})`,
    related.quizzes && `- [Quiz et Kahoots associés](${pathRelative(filePath, related.quizzes)})`,
  ].filter(Boolean);
  if (relatedLinks.length) output.push("\n## Activités associées\n", ...relatedLinks as string[], "");
  output.push(renderResources(resources));
  output.push(renderAttachments(filePath, attachments));
  if ((general.keywords as string[]).length || (general.tags as string[]).length) {
    output.push(`\n<p class="tssr-course-keywords"><strong>Mots-clés :</strong> ${markdownText([...(general.keywords as string[]), ...(general.tags as string[])].join(" · "))}</p>\n`);
  }
  return output.filter((part) => part !== "").join("\n").trimEnd() + "\n";
}

function renderModulePage(
  filePath: string,
  courseTitle: string,
  module: JsonRecord,
  index: number,
  pageLinks: Array<{ title: string; path: string }>,
  attachments: JsonRecord[],
  resources: JsonRecord[],
): string {
  const output = [`# Module ${String(index + 1).padStart(2, "0")} — ${heading(module.title, `Module ${index + 1}`)}`, ""];
  if (module.subtitle) output.push(`*${markdownText(module.subtitle)}*`, "");
  output.push(`[← Retour à ${markdownText(courseTitle)}](index.md)`, "");
  if (module.description) output.push(markdownText(module.description), "");
  if (module.content) output.push(String(module.content), "");
  else output.push("!!! note \"Contenu à compléter\"\n    Ce module a été créé avec une structure minimale et peut être complété par une proposition ultérieure.", "");
  if (pageLinks.length) {
    output.push("## Pages complémentaires", "");
    pageLinks.forEach((page) => output.push(`- [${markdownText(page.title)}](${pathRelative(filePath, page.path)})`));
  }
  output.push(renderResources(resources));
  output.push(renderAttachments(filePath, attachments));
  return output.filter((part) => part !== "").join("\n").trimEnd() + "\n";
}

function renderPage(filePath: string, modulePath: string, courseTitle: string, moduleTitle: string, page: JsonRecord, attachments: JsonRecord[]): string {
  const type = String(page.type).charAt(0).toUpperCase() + String(page.type).slice(1);
  const output = [
    `# ${heading(page.title, "Nouvelle page")}`,
    "",
    `**Type :** ${markdownText(type)}  `,
    `**Cours :** ${markdownText(courseTitle)}  `,
    `**Module :** ${markdownText(moduleTitle)}`,
    "",
    `[← Retour au module](${pathRelative(filePath, modulePath)})`,
    "",
  ];
  if (page.description) output.push(markdownText(page.description), "");
  output.push(String(page.content || "!!! note \"Page à compléter\"\n    Cette page a été créée vide et peut être enrichie ultérieurement."));
  output.push(renderAttachments(filePath, attachments));
  return output.join("\n").trimEnd() + "\n";
}

function renderExercises(filePath: string, courseTitle: string, exercises: JsonRecord[]): string {
  const output = [`# Exercices — ${heading(courseTitle, "Nouveau cours")}`, "", "Les exercices suivants sont liés au cours et restent modifiables par le workflow collaboratif.", ""];
  exercises.forEach((exercise, index) => {
    output.push(`## ${index + 1}. ${heading(exercise.title, `Exercice ${index + 1}`)}`, "");
    const metadata = [exercise.difficulty && `Difficulté : ${exercise.difficulty}`, exercise.duration && `Durée : ${exercise.duration}`, exercise.type && `Type : ${exercise.type}`].filter(Boolean);
    if (metadata.length) output.push(`**${markdownText(metadata.join(" · "))}**`, "");
    output.push(String(exercise.instructions || "Consigne à compléter."), "");
    if (exercise.hint) output.push(`??? tip \"Indice\"\n${String(exercise.hint).split("\n").map((line) => `    ${line}`).join("\n")}`, "");
    if (exercise.solution) output.push(`??? success \"Correction\"\n${String(exercise.solution).split("\n").map((line) => `    ${line}`).join("\n")}`, "");
  });
  return output.join("\n").trimEnd() + "\n";
}

function renderLabs(courseTitle: string, coursePath: string, labIndexPath: string, labs: JsonRecord[]): { index: string; statements: string; corrections: string } {
  const index = `# Travaux pratiques — ${heading(courseTitle, "Nouveau cours")}\n\n- [Énoncés](enonces.md)\n- [Corrections](corrections.md)\n- [Cours](${pathRelative(labIndexPath, coursePath)})\n`;
  const statements = [`# Énoncés — ${heading(courseTitle, "Nouveau cours")}`, ""];
  const corrections = [`# Corrections — ${heading(courseTitle, "Nouveau cours")}`, "", "!!! warning \"À consulter après la tentative\"\n    Réalisez les manipulations et conservez les preuves de vérification avant d’ouvrir les corrections.", ""];
  labs.forEach((lab, indexPosition) => {
    statements.push(`## TP ${indexPosition + 1} — ${heading(lab.title, `TP ${indexPosition + 1}`)}`, "");
    if (lab.objective) statements.push(`**Objectif :** ${markdownText(lab.objective)}`, "");
    if (lab.duration) statements.push(`**Durée :** ${markdownText(lab.duration)}`, "");
    if (lab.environment) statements.push(`**Environnement :** ${markdownText(lab.environment)}`, "");
    if ((lab.prerequisites as string[]).length) statements.push(markdownList("Prérequis", lab.prerequisites as string[]));
    statements.push(String(lab.steps || "Étapes à compléter."), "");
    if (lab.resources) statements.push("### Ressources", "", String(lab.resources), "");
    corrections.push(`## TP ${indexPosition + 1} — ${heading(lab.title, `TP ${indexPosition + 1}`)}`, "", String(lab.correction || "Correction à compléter."), "");
  });
  return {
    index,
    statements: statements.join("\n").trimEnd() + "\n",
    corrections: corrections.join("\n").trimEnd() + "\n",
  };
}

function renderQuizzes(courseTitle: string, quizzes: JsonRecord[]): string {
  const output = [`# Quiz et Kahoots — ${heading(courseTitle, "Nouveau cours")}`, ""];
  quizzes.forEach((quiz, index) => {
    output.push(`## ${index + 1}. ${heading(quiz.title, `Quiz ${index + 1}`)}`, "");
    if (quiz.description) output.push(markdownText(quiz.description), "");
    if (quiz.url) output.push(`[Jouer sur Kahoot :material-open-in-new:](${quiz.url}){ .md-button .md-button--primary target="_blank" rel="noopener noreferrer" }`, "");
    (quiz.questions as JsonRecord[]).forEach((question, questionIndex) => {
      output.push(`### Question ${questionIndex + 1}`, "", markdownText(question.question), "");
      (question.answers as string[]).forEach((answer) => output.push(`- ${markdownText(answer)}`));
      if (question.correctAnswer || question.explanation) {
        const details = [question.correctAnswer && `**Réponse :** ${markdownText(question.correctAnswer)}`, question.explanation && markdownText(question.explanation)].filter(Boolean);
        output.push("", `??? success \"Réponse et explication\"\n${details.map((line) => `    ${line}`).join("\n\n")}`, "");
      }
    });
  });
  return output.join("\n").trimEnd() + "\n";
}

function navigationSection(nav: unknown[], label: string): unknown[] | null {
  for (const entry of nav) {
    const source = record(entry);
    if (Array.isArray(source[label])) return source[label] as unknown[];
  }
  return null;
}

function insertAtRequestedOrder(items: unknown[], item: unknown, order: number): void {
  if (order > 0) items.splice(Math.min(items.length, order - 1), 0, item);
  else items.push(item);
}

function updateNavigation(
  content: string,
  general: JsonRecord,
  coursePath: string,
  moduleFiles: Array<{ title: string; path: string }>,
  pageFiles: Array<{ title: string; path: string }>,
  related: { exercises?: string; labs?: string; quizzes?: string },
): string {
  const config = parseMkDocsConfig(content) as JsonRecord;
  const nav = Array.isArray(config.nav) ? config.nav as unknown[] : [];
  const courses = navigationSection(nav, "Cours");
  if (!courses) throw new Error("La section Cours est introuvable dans mkdocs.yml.");
  const title = String(general.title);
  const children: unknown[] = [{ Présentation: coursePath.replace(/^docs\//, "") }];
  moduleFiles.forEach((module) => children.push({ [module.title]: module.path.replace(/^docs\//, "") }));
  pageFiles.forEach((page) => children.push({ [page.title]: page.path.replace(/^docs\//, "") }));
  insertAtRequestedOrder(courses, { [title]: children }, Number(general.order || 0));
  if (related.labs) navigationSection(nav, "Travaux pratiques")?.push({ [title]: [
    { Présentation: related.labs.replace(/^docs\//, "") },
    { Énoncés: related.labs.replace(/index\.md$/, "enonces.md").replace(/^docs\//, "") },
    { Corrections: related.labs.replace(/index\.md$/, "corrections.md").replace(/^docs\//, "") },
  ] });
  if (related.exercises) navigationSection(nav, "Exercices")?.push({ [title]: related.exercises.replace(/^docs\//, "") });
  if (related.quizzes) navigationSection(nav, "Kahoot")?.push({ [title]: related.quizzes.replace(/^docs\//, "") });
  config.nav = nav;
  return stringifyMkDocsConfig(config);
}

function appendKahootLibrary(content: string, title: string, target: string, quizzes: JsonRecord[]): string {
  const links = quizzes.filter((quiz) => quiz.url).map((quiz) => `- [${markdownText(quiz.title)}](${quiz.url}){ target="_blank" rel="noopener noreferrer" }`);
  const block = [
    `\n<!-- TSSR-COURSE-CREATOR:${target}:START -->`,
    `## ${heading(title, "Nouveau cours")}`,
    "",
    links.length ? links.join("\n") : `[Ouvrir les quiz du cours](./${target}/)`,
    `<!-- TSSR-COURSE-CREATOR:${target}:END -->\n`,
  ].join("\n");
  return content.trimEnd() + "\n" + block;
}

function appendGeneralIndex(content: string, title: string, coursePath: string, modules: Array<{ title: string; path: string }>): string {
  const slug = slugifyCourse(title);
  const rows = [`- [${markdownText(title)}](${coursePath.replace(/^docs\//, "")})`, ...modules.map((module) => `- [${markdownText(module.title)}](${module.path.replace(/^docs\//, "")})`)];
  return `${content.trimEnd()}\n\n<!-- TSSR-COURSE-CREATOR:${slug}:START -->\n## Contributions approuvées — ${heading(title, "Nouveau cours")}\n\n${rows.join("\n")}\n<!-- TSSR-COURSE-CREATOR:${slug}:END -->\n`;
}

function appendCurriculum(content: string, general: JsonRecord, coursePath: string, slug: string): string {
  const period = general.startDate || general.endDate ? `${general.startDate || "Date à préciser"} → ${general.endDate || "Date à préciser"}` : "Période à préciser";
  return `${content.trimEnd()}\n\n<!-- TSSR-COURSE-CREATOR:${slug}:START -->\n<section class="tssr-path-contribution" markdown>\n\n## ${heading(general.title, "Nouveau cours")}\n\n**${markdownText(period)}${general.trainer ? ` · ${markdownText(general.trainer)}` : ""}**\n\n${markdownText(general.shortDescription || "Cours ajouté au parcours après validation communautaire.")}\n\n[Ouvrir ce cours](../${coursePath.replace(/^docs\//, "").replace(/index\.md$/, "")}){ .md-button }\n\n</section>\n<!-- TSSR-COURSE-CREATOR:${slug}:END -->\n`;
}

function updateHomeModuleMetric(content: string, count: number): string {
  return content.replace(
    /(<span class="tssr-hero__metric" data-tssr-metric="modules"><strong>)\d+(<\/strong><span>modules et ateliers<\/span><\/span>)/,
    `$1${count}$2`,
  );
}

function updateGlossary(
  source: string,
  courseId: string,
  general: JsonRecord,
  coursePath: string,
  modules: JsonRecord[],
  moduleFiles: Array<{ title: string; path: string; id: string }>,
  entries: JsonRecord[],
  existingLinks: JsonRecord[],
): string | null {
  if (!entries.length && !existingLinks.length) return null;
  const data = JSON.parse(source) as JsonRecord;
  const courses = array(data.courses, 200, "Cours du glossaire") as JsonRecord[];
  const glossaryModules = array(data.modules, 2_000, "Modules du glossaire") as JsonRecord[];
  const glossaryEntries = array(data.entries, 2_000, "Entrées du glossaire") as JsonRecord[];
  if (courses.some((course) => course.id === courseId)) throw new Error(`L’identifiant de glossaire ${courseId} existe déjà.`);
  const overviewId = uniqueSlug(`${courseId}-presentation`, new Set(glossaryModules.map((module) => String(module.id))));
  courses.push({
    id: courseId,
    name: String(general.title),
    shortName: String(general.shortTitle || general.title).slice(0, 80),
    path: coursePath.replace(/^docs\//, ""),
  });
  glossaryModules.push({ id: overviewId, courseId, name: "Présentation", shortName: "Présentation", path: coursePath.replace(/^docs\//, "") });
  const moduleIds: string[] = [overviewId];
  moduleFiles.forEach((module, index) => {
    const id = uniqueSlug(`${courseId}-m${String(index + 1).padStart(2, "0")}`, new Set(glossaryModules.map((item) => String(item.id))));
    module.id = id;
    moduleIds.push(id);
    glossaryModules.push({
      id,
      courseId,
      name: `Module ${String(index + 1).padStart(2, "0")} — ${String(module.title)}`,
      shortName: `M${String(index + 1).padStart(2, "0")} · ${String(module.title).slice(0, 70)}`,
      path: module.path.replace(/^docs\//, ""),
    });
  });
  const ids = new Set(glossaryEntries.map((entry) => String(entry.id || slugifyCourse(entry.term))));
  const terms = new Map(glossaryEntries.map((entry) => [slugifyCourse(entry.term), entry]));
  const refFor = (moduleIndex: unknown) => `${courseId}:${moduleIds[Number(moduleIndex) + 1] || overviewId}`;
  for (const link of existingLinks) {
    const entry = glossaryEntries.find((candidate) => candidate.id === link.id);
    if (!entry) throw new Error(`Le terme de glossaire ${link.id} n’existe plus.`);
    const refs = Array.isArray(entry.refs) ? entry.refs as string[] : [];
    const reference = refFor(link.moduleIndex);
    if (!refs.includes(reference)) refs.push(reference);
    entry.refs = refs;
  }
  for (const entry of entries) {
    const normalizedTerm = slugifyCourse(entry.term);
    if (terms.has(normalizedTerm)) throw new Error(`Le terme « ${entry.term} » existe déjà. Associez le terme existant.`);
    const id = uniqueSlug(normalizedTerm, ids);
    const definition = String(entry.definition || "Définition pédagogique à compléter pour ce nouveau cours de la formation TSSR.");
    glossaryEntries.push({
      id,
      term: String(entry.term),
      fullName: String(entry.fullName || ""),
      definition: definition.length >= 35 ? definition : `${definition} — définition à compléter dans le cours.`,
      aliases: entry.aliases,
      keywords: entry.keywords,
      refs: [refFor(entry.moduleIndex)],
    });
    terms.set(normalizedTerm, glossaryEntries.at(-1) as JsonRecord);
  }
  data.courses = courses;
  data.modules = glossaryModules;
  data.entries = glossaryEntries;
  return JSON.stringify(data, null, 2) + "\n";
}

function textChange(path: string, source: RepositorySource, content: string): ProposedFile {
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
  return { file_path: path, new_content: content, content_encoding: "utf-8", change_type: "create" };
}

export function buildCourseProposal(rawPayload: unknown, snapshot: CourseRepositorySnapshot): BuiltCourseProposal {
  const payload = normalizeCoursePayload(rawPayload);
  const general = record(payload.general);
  const modules = payload.modules as JsonRecord[];
  const exercises = payload.exercises as JsonRecord[];
  const labs = payload.labs as JsonRecord[];
  const quizzes = payload.quizzes as JsonRecord[];
  const glossaryEntries = payload.glossaryEntries as JsonRecord[];
  const existingGlossary = payload.existingGlossary as JsonRecord[];
  const resources = payload.resources as JsonRecord[];
  const attachments = payload.attachments as JsonRecord[];
  const unavailable = new Set(snapshot.files.map((file) => file.path));
  const courseNumber = nextCourseNumber([...unavailable]);
  const directoryCandidates = new Set([...unavailable].flatMap((path) => path.match(/^docs\/modules\/\d+-([^/]+)\//)?.[1] || []));
  const slug = uniqueSlug(slugifyCourse(general.title), directoryCandidates);
  const directory = `${String(courseNumber).padStart(2, "0")}-${slug}`;
  const coursePath = `docs/modules/${directory}/index.md`;
  if (unavailable.has(coursePath)) throw new Error(`Le cours ${coursePath} existe déjà.`);
  const glossaryData = JSON.parse(snapshot.glossary.content) as JsonRecord;
  const courseId = uniqueSlug(slug, new Set((glossaryData.courses as JsonRecord[]).map((course) => String(course.id))));
  const attachmentResult = buildAttachmentChanges(attachments, directory, unavailable);
  const publishedAttachments = attachmentResult.published;
  publishedAttachments.forEach((attachment) => {
    const moduleIndex = Number(attachment.moduleIndex);
    const pageIndex = Number(attachment.pageIndex);
    if (pageIndex >= 0 && (moduleIndex < 0 || pageIndex >= ((modules[moduleIndex]?.pages as JsonRecord[] | undefined)?.length || 0))) {
      throw new Error(`Le fichier ${attachment.name} référence une page inexistante.`);
    }
  });
  const cover = general.coverAttachmentId
    ? publishedAttachments.find((attachment) => attachment.id === general.coverAttachmentId && attachment.image) || null
    : null;
  if (general.coverAttachmentId && !cover) throw new Error("L’image de couverture sélectionnée est introuvable ou n’est pas une image.");
  const files: ProposedFile[] = [...attachmentResult.changes];
  const moduleFiles: Array<{ title: string; path: string; id: string }> = [];
  const pageFiles: Array<{ title: string; path: string }> = [];
  const modulePaths = new Set<string>();
  modules.forEach((module, moduleIndex) => {
    const moduleSlug = uniqueSlug(slugifyCourse(module.title, `module-${moduleIndex + 1}`), modulePaths);
    const modulePath = `docs/modules/${directory}/module-${String(moduleIndex + 1).padStart(2, "0")}-${moduleSlug}.md`;
    const pages = module.pages as JsonRecord[];
    const localPageSlugs = new Set<string>();
    const pageLinks = pages.map((page, pageIndex) => {
      const pageSlug = uniqueSlug(slugifyCourse(page.title, `page-${pageIndex + 1}`), localPageSlugs);
      const path = `docs/modules/${directory}/page-${String(moduleIndex + 1).padStart(2, "0")}-${String(pageIndex + 1).padStart(2, "0")}-${pageSlug}.md`;
      pageFiles.push({ title: `${module.title} — ${page.title}`, path });
      const pageAttachments = publishedAttachments.filter((attachment) => attachment.moduleIndex === moduleIndex && attachment.pageIndex === pageIndex && attachment.id !== cover?.id);
      files.push(createMarkdown(path, renderPage(path, modulePath, String(general.title), String(module.title), page, pageAttachments)));
      return { title: String(page.title), path };
    });
    moduleFiles.push({ title: String(module.title), path: modulePath, id: "" });
    const moduleAttachments = publishedAttachments.filter((attachment) => attachment.moduleIndex === moduleIndex && Number(attachment.pageIndex) < 0 && attachment.id !== cover?.id);
    const moduleResources = resources.filter((resource) => resource.moduleIndex === moduleIndex);
    files.push(createMarkdown(modulePath, renderModulePage(modulePath, String(general.title), module, moduleIndex, pageLinks, moduleAttachments, moduleResources)));
  });
  const related: { exercises?: string; labs?: string; quizzes?: string } = {};
  if (exercises.length) {
    related.exercises = `docs/exercices/${slug}/index.md`;
    files.push(createMarkdown(related.exercises, renderExercises(related.exercises, String(general.title), exercises)));
  }
  if (labs.length) {
    related.labs = `docs/tp/${slug}/index.md`;
    const labPages = renderLabs(String(general.title), coursePath, related.labs, labs);
    files.push(createMarkdown(related.labs, labPages.index));
    files.push(createMarkdown(`docs/tp/${slug}/enonces.md`, labPages.statements));
    files.push(createMarkdown(`docs/tp/${slug}/corrections.md`, labPages.corrections));
  }
  if (quizzes.length) {
    related.quizzes = `docs/kahoot/${slug}.md`;
    files.push(createMarkdown(related.quizzes, renderQuizzes(String(general.title), quizzes)));
    files.push(textChange("docs/kahoot/bibliotheque.md", snapshot.kahoot, appendKahootLibrary(snapshot.kahoot.content, String(general.title), slug, quizzes)));
  }
  const globalAttachments = publishedAttachments.filter((attachment) => Number(attachment.moduleIndex) < 0 && attachment.id !== cover?.id);
  const globalResources = resources.filter((resource) => Number(resource.moduleIndex) < 0);
  files.push(createMarkdown(coursePath, renderCourseIndex(coursePath, general, modules, moduleFiles, globalResources, globalAttachments, cover, related)));

  const nextNavigation = updateNavigation(snapshot.mkdocs.content, general, coursePath, moduleFiles, pageFiles, related);
  files.push(textChange("mkdocs.yml", snapshot.mkdocs, nextNavigation));

  const nextGlossary = updateGlossary(snapshot.glossary.content, courseId, general, coursePath, modules, moduleFiles, glossaryEntries, existingGlossary);
  if (nextGlossary) files.push(textChange("data/glossaire.json", snapshot.glossary, nextGlossary));

  files.push(textChange(
    "docs/index-general.md",
    snapshot.generalIndex,
    appendGeneralIndex(snapshot.generalIndex.content, String(general.title), coursePath, moduleFiles),
  ));
  if (modules.length) {
    const existingModules = snapshot.files.filter((file) => /^docs\/modules\/\d+-[^/]+\/module-\d{2}-[^/]+\.md$/.test(file.path)).length;
    const nextHome = updateHomeModuleMetric(snapshot.home.content, existingModules + modules.length);
    if (nextHome !== snapshot.home.content) files.push(textChange("docs/index.md", snapshot.home, nextHome));
  }
  if (general.includeInPath) {
    files.push(textChange(
      "docs/parcours/index.md",
      snapshot.curriculum,
      appendCurriculum(snapshot.curriculum.content, general, coursePath, slug),
    ));
  }

  const availableFiles = new Set(snapshot.files.map((file) => file.path));
  files.forEach((file) => {
    if (file.change_type === "create") availableFiles.add(file.file_path);
  });
  validateMkDocsEdit(snapshot.mkdocs.content, nextNavigation, availableFiles);
  const validated = validateProposedFiles(files);
  const summary = {
    title: general.title,
    short_title: general.shortTitle || null,
    slug,
    course_id: courseId,
    course_path: coursePath,
    modules: modules.length,
    pages: pageFiles.length,
    exercises: exercises.length,
    labs: labs.length,
    quizzes: quizzes.length,
    kahoots: quizzes.filter((quiz) => quiz.kind === "kahoot").length,
    glossary_entries: glossaryEntries.length,
    glossary_links: existingGlossary.length,
    resources: resources.length,
    attachments: publishedAttachments.map((attachment) => ({
      name: attachment.name,
      media_type: attachment.mediaType,
      path: attachment.path,
      size: Math.floor(String(attachment.content).length * 3 / 4),
    })),
    include_in_path: general.includeInPath,
    internal_notes: general.notes || null,
    generated_files: validated.length,
  };
  return { files: validated, summary, courseSlug: slug, coursePath };
}

export { COURSE_LIMITS };
