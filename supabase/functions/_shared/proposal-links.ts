import { maskMarkdownCode, type ProposedFile } from "./validation.ts";

/** Additional server invariant, not a replacement for Python-Markdown strict
 * builds. Check local .md destinations in changed Markdown against committed
 * files plus ONLY this CR, both at submission and before any Git write.
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
      if (/^(?:[a-z][a-z0-9+.-]*:|\/|#)/i.test(link)) continue;
      link = link.split(/[?#]/, 1)[0];
      if (!link.endsWith(".md")) continue;
      const parts = path.split("/").slice(0, -1);
      for (const part of link.split("/")) {
        if (part === "..") parts.pop();
        else if (part && part !== ".") parts.push(part);
      }
      if (!available.has(parts.join("/"))) throw new Error("UNRESOLVED_CROSS_CR_DEPENDENCY: local Markdown target absent");
    }
  }
}
