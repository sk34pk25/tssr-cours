import { assertEquals, assertThrows } from "jsr:@std/assert@1.0.18";
import { readKahoot, validateKahootSet, writeKahoot } from "./kahoot.ts";
import { validateProposedFiles } from "./validation.ts";

const quiz = (count = 1) => ({ kind: "kahoot", title: "Test", moduleIndex: 0, questionCount: count,
  provenance: "A", url: "https://create.kahoot.it/share/test/123", questions: [] });

Deno.test("Kahoot server enforces 1..20 and one canonical quiz per module", () => {
  for (const count of [1, 20]) validateKahootSet([quiz(count)], 1);
  for (const count of [0, 21, 30, 40]) assertThrows(() => validateKahootSet([quiz(count)], 1));
  assertThrows(() => validateKahootSet([quiz(), quiz()], 1));
  assertThrows(() => validateKahootSet([quiz()], 0));
  assertThrows(() => validateKahootSet([{ ...quiz(), url: "" }], 1));
});
Deno.test("Kahoot server rejects sessions, credentials, untrusted URLs and missing provenance", () => {
  for (const url of ["https://kahoot.it/?pin=123", "javascript:alert(1)", "https://evil.kahoot.it/share/test/1", "https://user:pass@create.kahoot.it/share/test/1"]) {
    assertThrows(() => validateKahootSet([{ ...quiz(), url }], 1));
  }
  assertThrows(() => validateKahootSet([{ ...quiz(), questions: [{ question: "Q" }] }], 1));
});
Deno.test("Kahoot metadata roundtrip is stable and legacy remains available", () => {
  const item = { ...quiz(), title: "<!-- é -->", soloAvailable: true, liveAvailable: true };
  const content = writeKahoot("# Quiz\n", item, "docs/modules/test/index.md", "docs/modules/test/module.md");
  assertEquals(writeKahoot(content, item, "docs/modules/test/index.md", "docs/modules/test/module.md"), content);
  assertEquals(readKahoot(content)?.title, item.title);
  assertEquals(readKahoot(content)?.moduleId, "modules/test/module.md");
  assertEquals(readKahoot("# Historique"), null);
  validateKahootSet([{ clientId: "legacy", kind: "kahoot" }], 0, new Set(["legacy"]));
});

Deno.test("a quiz can be read before its course exists", () => {
  const meta = {
    schemaVersion: 1, courseId: null, moduleId: null, title: "TSSR-Services réseau Linux-Module-01",
    questionCount: 1, url: "https://create.kahoot.it/details/12345678-1234-1234-1234-123456789abc",
    soloAvailable: true, liveAvailable: true, provenance: "B", state: "linked", questions: [],
  };
  const content = `<!-- TSSR-KAHOOT-V1:${encodeURIComponent(JSON.stringify(meta))} -->\n# Quiz\n`;
  assertEquals(readKahoot(content)?.courseId, null);
  assertEquals(readKahoot(content)?.moduleId, null);
  const half = content.replace("moduleId%22%3Anull", "moduleId%22%3A%22modules%2Ftest%2Fmodule.md%22");
  assertThrows(() => readKahoot(half));
});

Deno.test("generic Markdown proposals also validate encoded Kahoot metadata", () => {
  const content = writeKahoot("# Test\n", quiz(), "docs/modules/test/index.md", "docs/modules/test/module.md");
  validateProposedFiles([{ file_path: "docs/kahoot/test.md", change_type: "create", new_content: content }]);
  const invalid = content.replace('questionCount%22%3A1', 'questionCount%22%3A21');
  assertThrows(() => validateProposedFiles([{ file_path: "docs/kahoot/test.md", change_type: "create", new_content: invalid }]));
  assertThrows(() => validateProposedFiles([{ file_path: "docs/kahoot/test.md", change_type: "update", base_file_sha: "a".repeat(40), old_content: content, new_content: "# Removed metadata\n" }]));
  assertThrows(() => validateProposedFiles([{ file_path: "docs/kahoot/test.md", change_type: "create", new_content: "# Quiz\n[Jouer](https://create.kahoot.it/share/test/123)\n" }]));
});
