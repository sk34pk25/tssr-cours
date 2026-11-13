import { assertEquals, assertThrows } from "jsr:@std/assert@1.0.18";
import { assertProposalLinks, resolveProposalLink } from "./proposal-links.ts";
import type { ProposedFile } from "./validation.ts";
const path = "docs/modules/11-initiation-scripting-bash/module-07-les-structures-de-boucle.md";
const tp = "docs/tp/11-initiation-scripting-bash/module-07/index.md";
const revision = "docs/revision/11-initiation-scripting-bash/module-07-les-structures-de-boucle.md";
const file = (text: string): ProposedFile => ({ file_path: path, change_type: "update", new_content: text });
const links = `[TP](../../tp/11-initiation-scripting-bash/module-07/index.md)\n[Révision](../../revision/11-initiation-scripting-bash/module-07-les-structures-de-boucle.md)`;
Deno.test("M07 course cannot rely on later ecosystem; committed targets pass", () => {
  assertThrows(() => assertProposalLinks([file(links)], new Set([path])), Error, "UNRESOLVED_CROSS_CR_DEPENDENCY");
  assertThrows(() => assertProposalLinks([file(links)], new Set([path, tp])));
  assertProposalLinks([file(links)], new Set([path, tp, revision]));
  assertProposalLinks([file("# Standalone")], new Set([path]));
});
Deno.test("reference, encoded and HTML missing Markdown targets rejected; code ignored", () => {
  for (const text of ["[tp][x]\n[x]: ../../tp/missing.md", '[x](<../../tp/missing.md>)',
    '[x](../../tp/%6dissing.md)', '<a href="../../tp/missing.md">TP</a>']) {
    assertThrows(() => assertProposalLinks([file(text)], new Set([path])));
  }
  assertProposalLinks([file('```md\n[x](missing.md)\n```\n`[x](missing.md)`')], new Set([path]));
});
Deno.test("absolute public-site links are internal pages, including directory URLs", () => {
  const target = "docs/tp/11-initiation-scripting-bash/module-07/index.md";
  const absolute = "[TP](https://sk34pk25.github.io/tssr-cours/tp/11-initiation-scripting-bash/module-07/)";
  assertThrows(() => assertProposalLinks([file(absolute)], new Set([path])), Error, "UNRESOLVED_CROSS_CR_DEPENDENCY");
  assertProposalLinks([file(absolute)], new Set([path, target]));
  assertProposalLinks([file("[doc](https://learn.microsoft.com/windows)")], new Set([path]));
  assertProposalLinks([file(absolute + "\n[même jeu](https://sk34pk25.github.io/tssr-cours/tp/11-initiation-scripting-bash/module-07/index.md)")], new Set([path, target]));
});
Deno.test("an image link resolves inside the proposal and a missing image stays a non-page", () => {
  const page = "docs/modules/99-fixture-cours/index.md";
  const image = "docs/assets/images/99-fixture-cours/schema.png";
  const markdown = "![Schéma](../../assets/images/99-fixture-cours/schema.png)\n";
  assertEquals(resolveProposalLink(page, "../../assets/images/99-fixture-cours/schema.png"), [image]);
  assertProposalLinks([{ file_path: page, change_type: "create", new_content: markdown },
    { file_path: image, change_type: "create", new_content: "abc", content_encoding: "base64" }], new Set([page]));
  assertProposalLinks([{ file_path: page, change_type: "create", new_content: markdown }], new Set([page]));
  assertThrows(() => assertProposalLinks([{ file_path: page, change_type: "create", new_content: "[Absent](absent.md)" }], new Set([page])));
});
