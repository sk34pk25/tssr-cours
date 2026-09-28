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

test("solo public; live needs active existing profile, including after signout", () => {
  let profile = null;
  const button = { dataset: { kahootLive: "https://create.kahoot.it/share/test/123" } };
  const login = {};
  const document = { querySelectorAll: (selector) => selector === "[data-kahoot-live]" ? [button] : [login] };
  const bridge = { getProfile: () => profile };
  api.sync(document, bridge);
  assert.equal(button.hidden, true);
  button.onclick();
  assert.equal(opened.length, 0);
  profile = { id: "test", status: "active" };
  api.sync(document, bridge);
  assert.equal(button.hidden, false);
  button.onclick();
  assert.equal(opened.length, 1);
  profile = null;
  button.onclick();
  assert.equal(opened.length, 1);
  assert.equal(button.hidden, true);
  assert.equal(api.canHost({ id: "test", status: "inactive" }), false);
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
