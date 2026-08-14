import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const context = { module: { exports: {} }, exports: {} };
vm.runInNewContext(
  fs.readFileSync(new URL("../docs/assets/javascripts/collaboration-utils.js", import.meta.url), "utf8"),
  context
);
const utils = context.module.exports;

test("public Supabase configuration accepts only a project URL and publishable key", () => {
  assert.equal(utils.collaborationConfigured({
    supabaseUrl: "https://example-ref.supabase.co",
    supabasePublishableKey: "sb_publishable_example"
  }), true);
  assert.equal(utils.collaborationConfigured({
    supabaseUrl: "javascript:alert(1)",
    supabasePublishableKey: "service-role-secret"
  }), false);
});

test("source paths reject traversal and keep Markdown under docs", () => {
  assert.equal(utils.sourcePath("modules/reseau.md"), "docs/modules/reseau.md");
  assert.equal(utils.sourcePath("../mkdocs.yml"), null);
  assert.equal(utils.sourcePath("assets/script.js"), null);
});

test("relative image links are correct at root and nested levels", () => {
  assert.equal(
    utils.relativeAssetPath("docs/index.md", "docs/assets/images/collaboration/image.png"),
    "assets/images/collaboration/image.png"
  );
  assert.equal(
    utils.relativeAssetPath("docs/modules/linux/page.md", "docs/assets/images/collaboration/image.png"),
    "../../assets/images/collaboration/image.png"
  );
});

test("line diff identifies unchanged, removed and added lines", () => {
  assert.deepEqual(JSON.parse(JSON.stringify(utils.lineDiff("A\nB", "A\nC"))), [
    { type: "same", line: "A" },
    { type: "remove", line: "B" },
    { type: "add", line: "C" }
  ]);
});

test("navigation round trip preserves nested labels and targets", () => {
  const navigation = [{ Cours: [{ Réseaux: "modules/reseaux.md" }] }, { Kahoot: "kahoot/bibliotheque.md" }];
  assert.deepEqual(JSON.parse(JSON.stringify(utils.modelToNavigation(utils.navigationToModel(navigation)))), navigation);
});
