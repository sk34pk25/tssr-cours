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

const courseContext = { module: { exports: {} }, exports: {}, crypto: { randomUUID: () => "00000000-0000-4000-8000-000000000000" } };
vm.runInNewContext(
  fs.readFileSync(new URL("../docs/assets/javascripts/course-creator-utils.js", import.meta.url), "utf8"),
  courseContext
);
const course = courseContext.module.exports;

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

test("course slugs and defaults remain valid when almost every field is empty", () => {
  assert.equal(course.slugify("Administration Windows avancée (N2)"), "administration-windows-avancee-n2");
  assert.equal(course.slugify("../../"), "nouveau-cours");
  const draft = course.defaultDraft();
  assert.equal(draft.general.title, "Nouveau cours");
  assert.equal(draft.modules.length, 0);
  assert.deepEqual(JSON.parse(JSON.stringify(course.summarize(draft))), {
    title: "Nouveau cours", modules: 0, pages: 0, exercises: 0, labs: 0,
    quizzes: 0, kahoots: 0, glossary: 0, resources: 0, files: 0, pdfs: 0
  });
});

test("course summaries include nested pages and every contribution family", () => {
  const draft = course.defaultDraft();
  draft.general.title = "Cours test";
  draft.modules.push(course.newModule({ pages: [course.newPage(), course.newPage()] }));
  draft.exercises.push(course.newExercise());
  draft.labs.push(course.newLab());
  draft.quizzes.push(course.newQuiz({ kind: "kahoot" }));
  draft.glossaryEntries.push(course.newGlossaryEntry());
  draft.existingGlossary.push({ id: "dhcp", moduleIndex: 0 });
  draft.resources.push(course.newResource());
  draft.attachments.push({ mediaType: "application/pdf" });
  const summary = course.summarize(draft);
  assert.equal(summary.pages, 2);
  assert.equal(summary.kahoots, 1);
  assert.equal(summary.glossary, 2);
  assert.equal(summary.pdfs, 1);
});

test("client file checks reject active formats and verify PDF/image signatures", () => {
  assert.equal(course.allowedFile("support.pdf", "application/pdf"), true);
  assert.equal(course.allowedFile("attaque.svg", "image/svg+xml"), false);
  assert.equal(course.allowedFile("attaque.html", "text/html"), false);
  assert.equal(course.signatureMatches(Uint8Array.from([0x25, 0x50, 0x44, 0x46, 0x2d]), "support.pdf", "application/pdf"), true);
  assert.equal(course.signatureMatches(Uint8Array.from([0x4e, 0x4f, 0x50, 0x45]), "support.pdf", "application/pdf"), false);
  assert.equal(course.signatureMatches(Uint8Array.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]), "capture.png", "image/png"), true);
});

test("serialized local drafts never persist selected file payloads", () => {
  const draft = course.defaultDraft();
  draft.general.coverAttachmentId = "file-local-only";
  draft.attachments = [{ name: "secret.pdf", content: "base64" }];
  const serialized = course.serializableDraft(draft);
  assert.deepEqual(JSON.parse(JSON.stringify(serialized.attachments)), []);
  assert.equal(serialized.general.coverAttachmentId, "");
});
