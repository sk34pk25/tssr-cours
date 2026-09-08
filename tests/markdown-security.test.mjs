import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";
import os from "node:os";
import path from "node:path";
import { pathToFileURL } from "node:url";

const context = { module: { exports: {} }, exports: {}, URL };
vm.runInNewContext(fs.readFileSync(new URL("../docs/assets/javascripts/course-editor.js", import.meta.url), "utf8"), context);
const editor = context.module.exports;
const fixtures = JSON.parse(fs.readFileSync(new URL("./fixtures/markdown-attributes.json", import.meta.url), "utf8"));

for (const fixture of fixtures) {
  test(`attribute policy: ${fixture.name}`, () => {
    for (const validate of [editor.validateMarkdownSecurity, editor.validateUserMarkdown]) {
      if (fixture.allowed) assert.doesNotThrow(() => validate(fixture.markdown));
      else assert.throws(() => validate(fixture.markdown));
    }
    if (fixture.allowed) {
      assert.doesNotThrow(() => editor.validateMarkdownTransition(fixture.markdown, fixture.markdown + "\n\nAjout passif."));
    }
  });
}

function pages(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    return entry.isDirectory() ? pages(path) : entry.name.endsWith(".md") ? [path] : [];
  });
}

test("Markdown discovery includes a newly added nested page without a fixed corpus size", (t) => {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "tssr-page-discovery-"));
  t.after(() => fs.rmSync(directory, { recursive: true, force: true }));
  const root = pathToFileURL(directory + path.sep);
  fs.writeFileSync(path.join(directory, "index.md"), "# Accueil");
  const initial = pages(root).map((file) => file.href);
  fs.mkdirSync(path.join(directory, "modules"));
  fs.writeFileSync(path.join(directory, "modules", "new.md"), "# Nouveau module");
  fs.writeFileSync(path.join(directory, "modules", "ignored.txt"), "Ressource");
  const added = new URL("modules/new.md", root).href;
  assert.deepEqual(pages(root).map((file) => file.href).sort(), [...initial, added].sort());
  for (const file of pages(root)) editor.validateMarkdownSecurity(fs.readFileSync(file, "utf8"));
});

test("every existing page permits unchanged and passive Markdown transitions", () => {
  const files = pages(new URL("../docs/", import.meta.url));
  assert.ok(files.length > 0, "docs must contain Markdown pages");
  const expected = fs.readdirSync(new URL("../docs/", import.meta.url), { recursive: true })
    .filter((path) => path.endsWith(".md")).sort();
  const root = new URL("../docs/", import.meta.url);
  assert.deepEqual(files.map((path) => decodeURIComponent(path.href.slice(root.href.length))).sort(), expected);
  for (const path of files) {
    const source = fs.readFileSync(path, "utf8");
    assert.doesNotThrow(() => editor.validateMarkdownTransition(source, source), path.pathname);
    assert.doesNotThrow(() => editor.validateMarkdownTransition(source, `${source}\n\nParagraphe de test.\n`), path.pathname);
    assert.equal(editor.serializeLosslessDocument(editor.parseLosslessDocument(source)), source, path.pathname);
  }
});
