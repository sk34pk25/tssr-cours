import { parse, stringify } from "npm:yaml@2.9.0";

export type ChangeType = "create" | "update" | "delete" | "rename";

export interface ProposedFile {
  file_path: string;
  new_file_path?: string | null;
  base_file_sha?: string | null;
  old_content?: string | null;
  new_content?: string | null;
  content_encoding?: "utf-8" | "base64";
  change_type: ChangeType;
}

const SAFE_IMAGE = /^docs\/assets\/images\/[a-zA-Z0-9_./-]+\.(png|jpe?g|webp|gif)$/i;
const SAFE_MARKDOWN = /^docs\/[a-zA-Z0-9_./-]+\.md$/;
const SHA = /^[0-9a-f]{40}$/;
const FORBIDDEN_MARKDOWN = [
  /<\s*script\b/i,
  /<\s*(iframe|object|embed|form|input|button)\b/i,
  /\bon[a-z]+\s*=/i,
  /javascript\s*:/i,
  /data\s*:\s*text\/html/i,
  /\bsrcdoc\s*=/i,
];

function normalizePath(path: string): string {
  const normalized = path.replaceAll("\\", "/").replace(/^\.\//, "");
  if (!normalized || normalized.startsWith("/") || normalized.includes("..") || normalized.includes("//")) {
    throw new Error(`Chemin interdit : ${path}`);
  }
  return normalized;
}

export function assertEditablePath(path: string): string {
  const normalized = normalizePath(path);
  if (normalized === "mkdocs.yml" || SAFE_MARKDOWN.test(normalized) || SAFE_IMAGE.test(normalized)) {
    return normalized;
  }
  throw new Error(`Le fichier ${normalized} n’est pas éditable depuis le portail.`);
}

export function validateMarkdown(content: string): void {
  if (content.length > 2_000_000) throw new Error("Un fichier Markdown ne peut pas dépasser 2 Mo.");
  if (FORBIDDEN_MARKDOWN.some((pattern) => pattern.test(content))) {
    throw new Error("Le Markdown contient du HTML actif interdit pour des raisons de sécurité.");
  }
}

function decodeBase64Size(value: string): number {
  const padding = value.endsWith("==") ? 2 : value.endsWith("=") ? 1 : 0;
  return Math.floor((value.length * 3) / 4) - padding;
}

export function validateProposedFiles(files: ProposedFile[]): ProposedFile[] {
  if (!Array.isArray(files) || files.length < 1 || files.length > 20) {
    throw new Error("Une proposition doit contenir entre 1 et 20 fichiers.");
  }
  const seen = new Set<string>();

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
    if (SAFE_IMAGE.test(path) || (file.new_file_path && SAFE_IMAGE.test(file.new_file_path))) {
      if (encoding !== "base64") throw new Error(`L’image ${path} doit être encodée en base64.`);
      if (file.new_content && decodeBase64Size(file.new_content) > 5_000_000) {
        throw new Error(`L’image ${path} dépasse 5 Mo.`);
      }
    } else {
      if (encoding !== "utf-8") throw new Error(`Le fichier texte ${path} doit être encodé en UTF-8.`);
      if (path.endsWith(".md") && file.new_content != null) validateMarkdown(file.new_content);
    }
    return { ...file, file_path: path, content_encoding: encoding };
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
  const oldConfig = parse(oldContent) as Record<string, unknown>;
  const newConfig = parse(newContent) as Record<string, unknown>;
  if (!oldConfig || !newConfig || typeof oldConfig !== "object" || typeof newConfig !== "object") {
    throw new Error("Configuration MkDocs invalide.");
  }
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
  return { content: stringify(newConfig), navTargets };
}

export function buildNavigationEdit(
  oldContent: string,
  siteName: string,
  siteDescription: string,
  nav: unknown,
): string {
  const config = parse(oldContent) as Record<string, unknown>;
  config.site_name = siteName.trim();
  config.site_description = siteDescription.trim();
  config.nav = nav;
  return stringify(config);
}
