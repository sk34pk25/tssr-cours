import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";

const opened = [];
const context = { module: { exports: {} }, URL, window: { open: (...args) => opened.push(args) } };
vm.runInNewContext(fs.readFileSync(new URL("../docs/assets/javascripts/kahoot.js", import.meta.url), "utf8"), context);
const api = context.module.exports;
const editorContext = { module: { exports: {} }, crypto: { randomUUID: () => "test" } };
vm.runInNewContext(fs.readFileSync(new URL("../docs/assets/javascripts/course-creator-utils.js", import.meta.url), "utf8"), editorContext);
const editor = editorContext.module.exports;

test("host needs active existing profile, including after signout", () => {
  let profile = null;
  const button = { dataset: { kahootHost: "https://create.kahoot.it/creator/12345678-1234-1234-1234-123456789abc" } };
  const document = { querySelectorAll: () => [button] };
  const bridge = { getProfile: () => profile };
  api.sync(document, bridge);
  assert.equal(button.hidden, true);
  assert.equal(button.disabled, true);
  button.onclick();
  assert.equal(opened.length, 0);
  profile = { id: "test", status: "active" };
  api.sync(document, bridge);
  assert.equal(button.hidden, false);
  assert.equal(button.disabled, false);
  button.onclick();
  assert.equal(opened.length, 1);
  assert.equal(opened[0][0], button.dataset.kahootHost);
  assert.equal(opened[0][1], "_blank");
  assert.equal(opened[0][2], "noopener,noreferrer");
  profile = null;
  button.onclick();
  assert.equal(opened.length, 1);
  assert.equal(button.hidden, true);
  assert.equal(button.disabled, true);
  assert.equal(api.canHost({ id: "test", status: "inactive" }), false);
  assert.equal(api.canHost({ status: "active" }), false);
});

test("host rejects non-official or session URLs even for an active profile", () => {
  const valid = "https://create.kahoot.it/creator/12345678-1234-1234-1234-123456789abc";
  assert.equal(api.officialHostUrl(valid), valid);
  assert.equal(api.officialHostUrl("https://create.kahoot.it/share/test/123"), "https://create.kahoot.it/share/test/123");
  for (const url of ["", "javascript:alert(1)", "https://example.org/creator/123", valid + "?pin=123", valid + "#fragment", valid.replace("create.kahoot.it", "user@create.kahoot.it"), valid.replace("create.kahoot.it", "kahoot.it"), "https://create.kahoot.it/creator/invalid"]) {
    assert.equal(api.officialHostUrl(url), null);
    const button = { dataset: { kahootHost: url } };
    api.sync({ querySelectorAll: () => [button] }, { getProfile: () => ({ id: "test", status: "active" }) });
    assert.equal(button.hidden, true);
    assert.equal(button.disabled, true);
    const before = opened.length;
    button.onclick();
    assert.equal(opened.length, before);
  }
});

test("form limits 0/1/20/21, legacy and canonical per-module identity", () => {
  const quiz = { title: "Test", kind: "kahoot", moduleIndex: 0, url: "https://create.kahoot.it/share/test/123", questions: [] };
  for (const count of [1, 20]) editor.validateKahootDraft({ modules: [{}], quizzes: [{ ...quiz, questionCount: count }] });
  for (const count of [0, 21, 30, 40]) assert.throws(() => editor.validateKahootDraft({ modules: [{}], quizzes: [{ ...quiz, questionCount: count }] }));
  assert.throws(() => editor.validateKahootDraft({ modules: [{}], quizzes: [{ ...quiz, questionCount: 1 }, { ...quiz, questionCount: 1 }] }));
  editor.validateKahootDraft({ modules: [], quizzes: [{ ...quiz, clientId: "old" }] }, { quizzes: [{ clientId: "old" }] });
});

test("module reordering and deletion never silently reassign a Kahoot", () => {
  const draft = { modules: [{ clientId: "a" }, { clientId: "b" }], quizzes: [{ moduleIndex: 0 }] };
  editor.preserveQuizModules(draft, () => draft.modules.reverse());
  assert.equal(draft.quizzes[0].moduleIndex, 1);
  editor.preserveQuizModules(draft, () => draft.modules.pop());
  assert.equal(draft.quizzes[0].moduleIndex, -1);
});
