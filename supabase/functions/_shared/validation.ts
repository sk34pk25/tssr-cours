import { parse, stringify } from "npm:yaml@2.9.0";

export type ChangeType = "create" | "update" | "delete" | "rename";

export interface ProposedFile {
  file_path: string;
  new_file_path?: string | null;
  base_file_sha?: string | null;
  old_content?: string | null;
  new_content?: string | null;
  content_encoding?: "utf-8" | "base64";
  media_type?: string | null;
  change_type: ChangeType;
}

const SAFE_IMAGE = /^docs\/assets\/images\/[a-zA-Z0-9_./-]+\.(png|jpe?g|webp|gif)$/i;
const SAFE_RESOURCE = /^docs\/assets\/resources\/[a-zA-Z0-9_./-]+\.(pdf|txt|cfg|conf|ini|csv|json|ya?ml|xml|zip|xlsx|pptx|pka|bat|cmd|ps1|sh)$/i;
const SAFE_MARKDOWN = /^docs\/[a-zA-Z0-9_./-]+\.md$/;
const SAFE_DATA = /^data\/glossaire\.json$/;
const SHA = /^[0-9a-f]{40}$/;
const FORBIDDEN_MARKDOWN = [
  /<\s*script\b/i,
  /<\s*(iframe|object|embed|form|input|button|svg|meta|base|link|template|video|audio|source|style|plaintext|xmp|textarea|marquee)\b/i,
  /javascript\s*:/i,
  /vbscript\s*:/i,
  /\b(?:src|href)\s*=\s*["']?\s*data\s*:/i,
  /\]\(\s*data\s*:/i,
  /\bsrcdoc\s*=/i,
];

function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#x([0-9a-f]+);?/gi, (_, code) => String.fromCodePoint(Math.min(Number.parseInt(code, 16) || 0, 0x10ffff)))
    .replace(/&#([0-9]+);?/g, (_, code) => String.fromCodePoint(Math.min(Number.parseInt(code, 10) || 0, 0x10ffff)))
    .replace(/&(colon|tab|newline|sol|bsol|amp|quot|apos);/gi, (_, name: string) => ({
      colon: ":",
      tab: "\t",
      newline: "\n",
      sol: "/",
      bsol: "\\",
      amp: "&",
      quot: '"',
      apos: "'",
    })[name.toLowerCase() as "colon"]);
}

type HtmlBlockState = { kind: "blank" } | { kind: "until"; pattern: RegExp };

function htmlBlockOpening(line: string): HtmlBlockState | null {
  const body = line.replace(/^ {0,3}/, "");
  const rawTag = body.match(/^<(script|pre|style|textarea)(?=\s|>|$)/i)?.[1];
  if (rawTag) return { kind: "until", pattern: new RegExp(`</${rawTag}\\s*>`, "i") };
  if (body.startsWith("<!--")) return { kind: "until", pattern: /-->/ };
  if (body.startsWith("<?")) return { kind: "until", pattern: /\?>/ };
  if (/^<!\[CDATA\[/i.test(body)) return { kind: "until", pattern: /\]\]>/ };
  if (/^<![A-Z]/.test(body)) return { kind: "until", pattern: />/ };
  if (/^<\/?(?:address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul)(?=\s|\/?>|$)/i.test(body)) {
    return { kind: "blank" };
  }
  const trimmed = body.trimEnd();
  const first = extractHtmlTagMatches(trimmed)[0];
  return first?.index === 0 && first.raw.length === trimmed.length ? { kind: "blank" } : null;
}

function maskMarkdownCode(value: string): string {
  const source = String(value ?? "");
  const output = source.split("");
  const barriers = new Uint8Array(source.length);
  const lines = source.match(/[^\r\n]*(?:\r\n|\r|\n|$)/g)?.filter(Boolean) || [];
  let offset = 0;
  let fence: string | null = null;
  let htmlBlock: HtmlBlockState | null = null;
  const mark = (start: number, end: number, barrier = false) => {
    for (let index = start; index < end; index += 1) {
      if (!/[\r\n]/.test(output[index])) output[index] = " ";
      if (barrier) barriers[index] = 1;
    }
  };

  for (const line of lines) {
    const start = offset;
    const end = start + line.length;
    offset = end;
    const text = line.replace(/[\r\n]+$/, "");
    if (fence) {
      mark(start, end);
      const closing = text.match(/^ {0,3}(`+|~+)\s*$/)?.[1];
      if (closing && closing[0] === fence[0] && closing.length >= fence.length) fence = null;
      continue;
    }
    if (htmlBlock) {
      if (htmlBlock.kind === "blank" && !text.trim()) {
        barriers.fill(1, start, end);
        htmlBlock = null;
        continue;
      }
      barriers.fill(1, start, end);
      if (htmlBlock.kind === "until" && htmlBlock.pattern.test(text)) htmlBlock = null;
      continue;
    }
    const openingHtml = htmlBlockOpening(text);
    if (openingHtml) {
      barriers.fill(1, start, end);
      if (!(openingHtml.kind === "until" && openingHtml.pattern.test(text))) htmlBlock = openingHtml;
      continue;
    }
    if (!text.trim()) barriers.fill(1, start, end);
    const opening = text.match(/^ {0,3}(`{3,}|~{3,})(.*)$/);
    if (!opening || opening[1][0] === "`" && opening[2].includes("`")) continue;
    fence = opening[1];
    mark(start, end);
  }

  const tagMask = new Uint8Array(source.length);
  for (const tag of extractHtmlTagMatches(source)) tagMask.fill(1, tag.index, tag.index + tag.raw.length);
  const runs: Array<{ start: number; end: number; length: number }> = [];
  for (let index = 0; index < source.length;) {
    if (output[index] !== "`" || barriers[index] || tagMask[index]) {
      index += 1;
      continue;
    }
    const start = index;
    while (index < source.length && output[index] === "`") index += 1;
    let slashCount = 0;
    for (let cursor = start - 1; cursor >= 0 && source[cursor] === "\\"; cursor -= 1) slashCount += 1;
    if (slashCount % 2 === 0) runs.push({ start, end: index, length: index - start });
  }
  const barrierPrefix = new Uint32Array(source.length + 1);
  for (let index = 0; index < source.length; index += 1) barrierPrefix[index + 1] = barrierPrefix[index] + barriers[index];
  const nextSame = new Int32Array(runs.length);
  nextSame.fill(-1);
  const lastRun = new Map<string, number>();
  for (let index = runs.length - 1; index >= 0; index -= 1) {
    const key = `${barrierPrefix[runs[index].start]}:${runs[index].length}`;
    if (lastRun.has(key)) nextSame[index] = lastRun.get(key)!;
    lastRun.set(key, index);
  }
  for (let index = 0; index < runs.length; index += 1) {
    const opening = runs[index];
    const closingIndex = nextSame[index];
    if (closingIndex < 0) continue;
    mark(opening.start, runs[closingIndex].end);
    index = closingIndex;
  }
  return output.join("");
}

function extractHtmlTagMatches(value: string): Array<{ raw: string; index: number }> {
  const tags: Array<{ raw: string; index: number }> = [];
  let index = 0;
  while ((index = value.indexOf("<", index)) >= 0) {
    if (value.startsWith("<!--", index)) {
      const end = value.indexOf("-->", index + 4);
      if (end < 0) throw new Error("Commentaire HTML non fermé.");
      tags.push({ raw: value.slice(index, end + 3), index });
      index = end + 3;
      continue;
    }
    if (!/^<\/?[a-z!]/i.test(value.slice(index))) {
      index += 1;
      continue;
    }
    let cursor = index + 1;
    let quote = "";
    while (cursor < value.length) {
      const character = value[cursor];
      if (quote) {
        if (character === quote) quote = "";
      } else if (character === '"' || character === "'") quote = character;
      else if (character === ">") break;
      cursor += 1;
    }
    if (cursor >= value.length) {
      index += 1;
      continue;
    }
    tags.push({ raw: value.slice(index, cursor + 1), index });
    index = cursor + 1;
  }
  return tags;
}

function extractHtmlTags(value: string): string[] {
  return extractHtmlTagMatches(value).map((tag) => tag.raw);
}

function securityView(content: string): string {
  return decodeHtmlEntities(maskMarkdownCode(content))
    .replace(/j[\t\n\r\f ]*a[\t\n\r\f ]*v[\t\n\r\f ]*a[\t\n\r\f ]*s[\t\n\r\f ]*c[\t\n\r\f ]*r[\t\n\r\f ]*i[\t\n\r\f ]*p[\t\n\r\f ]*t[\t\n\r\f ]*:/gi, "javascript:")
    .replace(/v[\t\n\r\f ]*b[\t\n\r\f ]*s[\t\n\r\f ]*c[\t\n\r\f ]*r[\t\n\r\f ]*i[\t\n\r\f ]*p[\t\n\r\f ]*t[\t\n\r\f ]*:/gi, "vbscript:")
    .replace(/d[\t\n\r\f ]*a[\t\n\r\f ]*t[\t\n\r\f ]*a[\t\n\r\f ]*:/gi, "data:");
}

function containsForbiddenMarkdown(content: string): boolean {
  const view = securityView(content);
  if (FORBIDDEN_MARKDOWN.some((pattern) => pattern.test(view))) return true;
  return extractHtmlTags(view).some((tag) => {
    const decoded = decodeHtmlEntities(tag);
    return /\s(?:on[a-z]+|style|srcdoc|ping)\s*=/i.test(decoded) ||
      /\s(?:href|src|xlink:href|action|formaction)\s*=\s*(?:["']\s*)?(?:javascript|vbscript|data)\s*:/i.test(decoded);
  });
}

// npm:yaml does not know MkDocs' Python object tags and otherwise serializes
// them as empty strings. Protect the three trusted, repository-owned tags while
// the editable site name, description and navigation are normalized.
const MKDOCS_PYTHON_TAGS = [
  {
    key: "emoji_index",
    raw: "!!python/name:material.extensions.emoji.twemoji",
    token: "__TSSR_MKDOCS_PYTHON_TAG_TWEMOJI__",
  },
  {
    key: "emoji_generator",
    raw: "!!python/name:material.extensions.emoji.to_svg",
    token: "__TSSR_MKDOCS_PYTHON_TAG_TO_SVG__",
  },
  {
    key: "format",
    raw: "!!python/name:pymdownx.superfences.fence_div_format",
    token: "__TSSR_MKDOCS_PYTHON_TAG_FENCE_DIV__",
  },
] as const;

function protectMkDocsPythonTags(content: string): string {
  return MKDOCS_PYTHON_TAGS.reduce((result, tag) => result.replaceAll(tag.raw, tag.token), content);
}

export function parseMkDocsConfig(content: string): Record<string, unknown> {
  const config = parse(protectMkDocsPythonTags(content)) as Record<string, unknown>;
  if (!config || typeof config !== "object" || Array.isArray(config)) throw new Error("Configuration MkDocs invalide.");
  return config;
}

export function stringifyMkDocsConfig(config: Record<string, unknown>): string {
  let content = stringify(config);
  for (const tag of MKDOCS_PYTHON_TAGS) {
    const escapedToken = tag.token.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const expression = new RegExp(`^(\\s*${tag.key}:\\s*)(?:[\"']?${escapedToken}[\"']?)\\s*$`, "gm");
    content = content.replace(expression, `$1${tag.raw}`);
  }
  return content;
}

function normalizePath(path: string): string {
  const normalized = path.replaceAll("\\", "/").replace(/^\.\//, "");
  if (!normalized || normalized.startsWith("/") || normalized.includes("..") || normalized.includes("//")) {
    throw new Error(`Chemin interdit : ${path}`);
  }
  return normalized;
}

export function assertEditablePath(path: string): string {
  const normalized = normalizePath(path);
  if (
    normalized === "mkdocs.yml" || SAFE_DATA.test(normalized) || SAFE_MARKDOWN.test(normalized) ||
    SAFE_IMAGE.test(normalized) || SAFE_RESOURCE.test(normalized)
  ) {
    return normalized;
  }
  throw new Error(`Le fichier ${normalized} n’est pas éditable depuis le portail.`);
}

export function validateMarkdown(content: string): void {
  if (content.length > 2_000_000) throw new Error("Un fichier Markdown ne peut pas dépasser 2 Mo.");
  if (containsForbiddenMarkdown(content)) {
    throw new Error("Le Markdown contient du HTML actif interdit pour des raisons de sécurité.");
  }
}

function isMaskedCodeSpan(masked: string, start: number, length: number): boolean {
  const view = masked.slice(start, start + length);
  return view.length === length && !/[^\s]/.test(view);
}

function removeOnceOutsideCode(content: string, fragment: string): string {
  const masked = maskMarkdownCode(content);
  let index = content.indexOf(fragment);
  while (index >= 0) {
    if (!isMaskedCodeSpan(masked, index, fragment.length)) {
      return `${content.slice(0, index)}${content.slice(index + fragment.length)}`;
    }
    index = content.indexOf(fragment, index + fragment.length);
  }
  return content;
}

/**
 * Legacy pages may retain sensitive visual fragments that already exist in the
 * trusted Git source. They must remain byte-for-byte identical; the rest of the
 * proposed Markdown still follows the strict rule used for new content.
 */
export function validateMarkdownTransition(oldContent: string, newContent: string): void {
  if (newContent.length > 2_000_000) throw new Error("Un fichier Markdown ne peut pas dépasser 2 Mo.");
  let candidate = newContent;
  const oldMasked = maskMarkdownCode(oldContent);
  const trusted = [
    ...extractHtmlTagMatches(oldContent).map((tag) => ({ raw: tag.raw, index: tag.index })),
    ...Array.from(oldContent.matchAll(/!?\[[^\]]*\]\([^\n)]*\)/g), (match) => ({ raw: match[0], index: match.index ?? -1 })),
  ].filter((match) => match.index >= 0 && !isMaskedCodeSpan(oldMasked, match.index, match.raw.length))
    .map((match) => match.raw).filter((fragment) => containsForbiddenMarkdown(fragment));
  for (const fragment of trusted) candidate = removeOnceOutsideCode(candidate, fragment);
  validateMarkdown(candidate);
}

function decodeBase64Size(value: string): number {
  const padding = value.endsWith("==") ? 2 : value.endsWith("=") ? 1 : 0;
  return Math.floor((value.length * 3) / 4) - padding;
}

function decodeBase64Prefix(value: string, byteLength = 16): Uint8Array {
  if (!/^[a-zA-Z0-9+/]*={0,2}$/.test(value) || value.length % 4 !== 0) {
    throw new Error("Le contenu binaire n’est pas un Base64 valide.");
  }
  const prefix = value.slice(0, Math.ceil(byteLength / 3) * 4);
  try {
    return Uint8Array.from(atob(prefix), (character) => character.charCodeAt(0));
  } catch {
    throw new Error("Le contenu binaire n’est pas un Base64 valide.");
  }
}

function startsWith(bytes: Uint8Array, signature: number[]): boolean {
  return signature.every((value, index) => bytes[index] === value);
}

function validateResourceMime(path: string, mediaType: string): void {
  if (!mediaType || mediaType === "application/octet-stream") return;
  const extension = path.toLowerCase().match(/\.([a-z0-9]+)$/)?.[1] || "";
  const allowed: Record<string, Set<string>> = {
    txt: new Set(["text/plain"]), cfg: new Set(["text/plain"]), conf: new Set(["text/plain"]), ini: new Set(["text/plain"]),
    csv: new Set(["text/csv", "application/csv", "text/plain"]),
    json: new Set(["application/json", "text/json", "text/plain"]),
    yaml: new Set(["application/yaml", "application/x-yaml", "text/yaml", "text/x-yaml", "text/plain"]),
    yml: new Set(["application/yaml", "application/x-yaml", "text/yaml", "text/x-yaml", "text/plain"]),
    xml: new Set(["application/xml", "text/xml", "text/plain"]),
    zip: new Set(["application/zip", "application/x-zip-compressed"]),
    xlsx: new Set(["application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/zip"]),
    pptx: new Set(["application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/zip"]),
    pka: new Set(["application/x-packet-tracer"]),
    bat: new Set(["application/x-bat", "application/x-msdos-program", "text/plain"]),
    cmd: new Set(["application/x-bat", "application/x-msdos-program", "text/plain"]),
    ps1: new Set(["text/plain", "application/x-powershell"]),
    sh: new Set(["text/plain", "application/x-sh", "application/x-shellscript"]),
  };
  if (!allowed[extension]?.has(mediaType)) throw new Error(`Le type MIME de ${path} ne correspond pas à son extension.`);
}

function validateBinary(path: string, content: string, mediaType: string): void {
  const size = decodeBase64Size(content);
  const bytes = decodeBase64Prefix(content);
  const lowerPath = path.toLowerCase();
  if (SAFE_IMAGE.test(path)) {
    if (size > 5_000_000) throw new Error(`L’image ${path} dépasse 5 Mo.`);
    const valid = lowerPath.endsWith(".png")
      ? startsWith(bytes, [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
      : lowerPath.endsWith(".jpg") || lowerPath.endsWith(".jpeg")
        ? startsWith(bytes, [0xff, 0xd8, 0xff])
        : lowerPath.endsWith(".gif")
          ? startsWith(bytes, [0x47, 0x49, 0x46, 0x38])
          : startsWith(bytes, [0x52, 0x49, 0x46, 0x46]) &&
            String.fromCharCode(...bytes.slice(8, 12)) === "WEBP";
    if (!valid) throw new Error(`La signature binaire de l’image ${path} est invalide.`);
    const expected = lowerPath.endsWith(".png") ? "image/png"
      : lowerPath.endsWith(".gif") ? "image/gif"
      : lowerPath.endsWith(".webp") ? "image/webp" : "image/jpeg";
    if (mediaType && mediaType !== expected) throw new Error(`Le type MIME de ${path} ne correspond pas à son extension.`);
    return;
  }
  if (lowerPath.endsWith(".pdf")) {
    if (size > 7_000_000) throw new Error(`Le PDF ${path} dépasse 7 Mo.`);
    if (!startsWith(bytes, [0x25, 0x50, 0x44, 0x46, 0x2d])) {
      throw new Error(`Le fichier ${path} n’est pas un PDF valide.`);
    }
    if (mediaType && mediaType !== "application/pdf") throw new Error(`Le type MIME de ${path} doit être application/pdf.`);
    return;
  }
  if (size > 5_000_000) throw new Error(`La ressource ${path} dépasse 5 Mo.`);
  validateResourceMime(path, mediaType);
  if (/\.(zip|xlsx|pptx)$/i.test(path) && !startsWith(bytes, [0x50, 0x4b])) {
    throw new Error(`L’archive ${path} possède une signature invalide.`);
  }
  if (/\.(html?|svg|js|mjs|exe|dll|dylib|so)$/i.test(path)) {
    throw new Error(`Le type de ressource ${path} est interdit.`);
  }
}

function validateGlossaryData(content: string): void {
  if (content.length > 4_000_000) throw new Error("Les données du glossaire dépassent 4 Mo.");
  let data: Record<string, unknown>;
  try {
    data = JSON.parse(content) as Record<string, unknown>;
  } catch {
    throw new Error("Les données du glossaire ne sont pas un JSON valide.");
  }
  if (data.schemaVersion !== 1 || !Array.isArray(data.courses) || !Array.isArray(data.modules) || !Array.isArray(data.entries)) {
    throw new Error("La structure des données du glossaire est invalide.");
  }
  if (data.courses.length > 200 || data.modules.length > 2_000 || data.entries.length > 2_000) {
    throw new Error("Les données du glossaire dépassent les limites de cohérence.");
  }
}

export function validateProposedFiles(files: ProposedFile[]): ProposedFile[] {
  if (!Array.isArray(files) || files.length < 1 || files.length > 100) {
    throw new Error("Une proposition doit contenir entre 1 et 100 fichiers.");
  }
  const seen = new Set<string>();
  let totalBinarySize = 0;

  return files.map((file) => {
    const path = assertEditablePath(file.file_path);
    if (seen.has(path)) throw new Error(`Le fichier ${path} apparaît plusieurs fois.`);
    seen.add(path);
    if (!["create", "update", "delete", "rename"].includes(file.change_type)) {
      throw new Error(`Type de modification invalide pour ${path}.`);
    }
    if (file.change_type !== "create" && (!file.base_file_sha || !SHA.test(file.base_file_sha))) {
      throw new Error(`SHA de base manquant ou invalide pour ${path}.`);
    }
    if ((file.change_type === "create" || file.change_type === "update" || file.change_type === "rename") && file.new_content == null) {
      throw new Error(`Nouveau contenu manquant pour ${path}.`);
    }
    if (file.change_type === "rename") {
      file.new_file_path = assertEditablePath(file.new_file_path || "");
      if (seen.has(file.new_file_path)) throw new Error(`Chemin de destination dupliqué : ${file.new_file_path}`);
      seen.add(file.new_file_path);
    }
    const encoding = file.content_encoding || "utf-8";
    const destination = file.new_file_path || path;
    if (SAFE_IMAGE.test(destination) || SAFE_RESOURCE.test(destination)) {
      if (encoding !== "base64") throw new Error(`L’image ${path} doit être encodée en base64.`);
      if (file.new_content) {
        totalBinarySize += decodeBase64Size(file.new_content);
        validateBinary(destination, file.new_content, String(file.media_type || "").toLowerCase());
      }
    } else {
      if (encoding !== "utf-8") throw new Error(`Le fichier texte ${path} doit être encodé en UTF-8.`);
      if (path.endsWith(".md") && file.new_content != null) {
        if (file.change_type === "create") validateMarkdown(file.new_content);
        else validateMarkdownTransition(file.old_content || "", file.new_content);
      }
      if (path === "data/glossaire.json" && file.new_content != null) validateGlossaryData(file.new_content);
    }
    if (totalBinarySize > 12_000_000) throw new Error("Les fichiers binaires de la proposition dépassent 12 Mo au total.");
    return { ...file, file_path: path, content_encoding: encoding, media_type: file.media_type || null };
  });
}

function stable(value: unknown): string {
  if (Array.isArray(value)) return `[${value.map(stable).join(",")}]`;
  if (value && typeof value === "object") {
    return `{${Object.entries(value as Record<string, unknown>)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([key, child]) => `${JSON.stringify(key)}:${stable(child)}`)
      .join(",")}}`;
  }
  return JSON.stringify(value);
}

function collectNavTargets(node: unknown, targets: Set<string>): void {
  if (Array.isArray(node)) {
    node.forEach((child) => collectNavTargets(child, targets));
    return;
  }
  if (!node || typeof node !== "object") throw new Error("Structure de navigation invalide.");
  for (const [label, target] of Object.entries(node as Record<string, unknown>)) {
    if (!label.trim() || label.length > 160) throw new Error("Libellé de navigation invalide.");
    if (typeof target === "string") {
      if (/^https:\/\//i.test(target)) continue;
      if (/^[a-z]+:/i.test(target)) throw new Error(`Protocole externe interdit dans la navigation : ${target}`);
      const path = normalizePath(target.split("#")[0]);
      if (!path.endsWith(".md")) throw new Error(`Cible de navigation non Markdown : ${target}`);
      targets.add(`docs/${path}`);
    } else {
      collectNavTargets(target, targets);
    }
  }
}

export function validateMkDocsEdit(
  oldContent: string,
  newContent: string,
  availableFiles: Set<string>,
): { content: string; navTargets: Set<string> } {
  const oldConfig = parseMkDocsConfig(oldContent);
  const newConfig = parseMkDocsConfig(newContent);
  const allowed = new Set(["site_name", "site_description", "nav"]);
  const allKeys = new Set([...Object.keys(oldConfig), ...Object.keys(newConfig)]);
  for (const key of allKeys) {
    if (!allowed.has(key) && stable(oldConfig[key]) !== stable(newConfig[key])) {
      throw new Error(`Le réglage sensible « ${key} » ne peut pas être modifié depuis le portail.`);
    }
  }
  if (typeof newConfig.site_name !== "string" || !newConfig.site_name.trim()) {
    throw new Error("site_name doit rester renseigné.");
  }
  if (newConfig.site_description != null && typeof newConfig.site_description !== "string") {
    throw new Error("site_description doit être une chaîne de caractères.");
  }
  const navTargets = new Set<string>();
  collectNavTargets(newConfig.nav, navTargets);
  for (const target of navTargets) {
    if (!availableFiles.has(target)) throw new Error(`La navigation référence un fichier absent : ${target}`);
  }
  return { content: stringifyMkDocsConfig(newConfig), navTargets };
}

export function buildNavigationEdit(
  oldContent: string,
  siteName: string,
  siteDescription: string,
  nav: unknown,
): string {
  const config = parseMkDocsConfig(oldContent);
  config.site_name = siteName.trim();
  config.site_description = siteDescription.trim();
  config.nav = nav;
  return stringifyMkDocsConfig(config);
}
