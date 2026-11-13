import { maskMarkdownCode, type ProposedFile } from "./validation.ts";

const SITE_ORIGIN = "https://sk34pk25.github.io/tssr-cours";
const IMAGE_PATH = /\.(png|jpe?g|webp|gif)$/i;

/** Additional server invariant, not a replacement for Python-Markdown strict
 * builds. Check local Markdown destinations in changed Markdown against
 * committed files plus ONLY this proposal, both at submission and before any
 * Git write. Absolute links to the public site are internal pages too.
 */
export function assertProposalLinks(files: ProposedFile[], available: Set<string>): void {
  for (const file of files) {
    const path = file.new_file_path || file.file_path;
    if (file.change_type === "delete" || !path.endsWith(".md") || file.content_encoding === "base64") continue;
    const source = maskMarkdownCode(file.new_content || "").replace(/<!--[\s\S]*?-->/g, "");
    const destinations = [
      ...source.matchAll(/\]\(\s*(?:<([^>\n]+)>|([^\s)]+))/g),
      ...source.matchAll(/^ {0,3}\[[^\]\n]+\]:\s*(?:<([^>\n]+)>|(\S+))/gm),
      ...source.matchAll(/\b(?:href|src)\s*=\s*(?:"([^"]+)"|'([^']+)')/gi),
    ];
    for (const match of destinations) {
      let link: string;
      try { link = decodeURIComponent(match[1] || match[2]); }
      catch { throw new Error("UNRESOLVED_CROSS_CR_DEPENDENCY: invalid link encoding"); }
      const targets = resolveProposalLink(path, link);
      if (!targets) continue;
      if (targets.every((target) => IMAGE_PATH.test(target)) && !targets.some((target) => available.has(target))) {
        continue;
      }
      if (!targets.some((target) => available.has(target))) {
        throw new Error("UNRESOLVED_CROSS_CR_DEPENDENCY: local Markdown target absent");
      }
    }
  }
}

/** Relative page links and absolute links to the public site. External URLs
 * and non-page assets return null. Candidates are docs paths.
 */
export function resolveProposalLink(fromPath: string, link: string): string[] | null {
  const bare = link.split(/[?#]/, 1)[0];
  if (!bare || bare.startsWith("#")) return null;
  if (/^[a-z][a-z0-9+.-]*:/i.test(bare)) {
    if (!bare.startsWith(SITE_ORIGIN + "/") && bare !== SITE_ORIGIN) return null;
    const rest = bare.slice(SITE_ORIGIN.length).replace(/^\//, "").replace(/\/$/, "");
    return sitePageCandidates(rest);
  }
  if (bare.startsWith("/")) return null;
  if (IMAGE_PATH.test(bare)) return [joinRelative(fromPath, bare)];
  if (!bare.endsWith(".md") && !bare.endsWith("/") && /\.[a-z0-9]+$/i.test(bare)) return null;
  const parts = fromPath.split("/").slice(0, -1);
  const relative = bare.endsWith("/") ? bare.slice(0, -1) : bare;
  if (!relative) return sitePageCandidates("");
  for (const part of relative.split("/")) {
    if (part === "..") parts.pop();
    else if (part && part !== ".") parts.push(part);
  }
  const joined = parts.join("/");
  if (bare.endsWith(".md")) return [joined];
  const page = joined.replace(/^\//, "");
  const rest = page.startsWith("docs/") ? page.slice("docs/".length) : page;
  return sitePageCandidates(rest);
}

function joinRelative(fromPath: string, bare: string): string {
  const parts = fromPath.split("/").slice(0, -1);
  for (const part of bare.split("/")) {
    if (part === "..") parts.pop();
    else if (part && part !== ".") parts.push(part);
  }
  return parts.join("/");
}

function sitePageCandidates(rest: string): string[] {
  if (!rest) return ["docs/index.md"];
  if (rest.endsWith(".md")) return ["docs/" + rest.replace(/^\//, "")];
  return ["docs/" + rest + ".md", "docs/" + rest + "/index.md"];
}
