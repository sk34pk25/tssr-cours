// Requires an existing Playwright + Chromium runtime, optionally resolved via NODE_PATH.
// No server, real account or API: every request is fulfilled from local fixtures.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { after, before, test } from "node:test";

const { chromium } = createRequire(import.meta.url)("playwright");
const origin = "http://127.0.0.1:41739";
const scripts = ["course-creator-utils.js", "course-editor.js", "course-editor-ui.js", "course-creator.js"];
let browser;
before(async () => { browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || undefined }); });
after(async () => { await browser?.close(); });

function setup({ mode, stale, corrupt, preview, glossaryOnly, initialLinks = [], savedLinks }) {
  const utils = window.TSSRCourseCreatorUtils;
  const sha = "a".repeat(40);
  const draft = utils.defaultDraft();
  draft.general.title = "Cours factice";
  draft.modules = [utils.newModule({ title: "Module factice", content: "# Contenu factice intact" })];
  if (glossaryOnly) draft.existingGlossary = initialLinks;
  const saved = utils.clone(draft);
  saved.general.title = "Brouillon conservé";
  saved.existingGlossary = [{}, { id: null }, { id: "obsolete", moduleIndex: -1 }, { id: "dhcp", moduleIndex: "abc" }, { id: "dns", moduleIndex: 0 }];
  if (glossaryOnly) {
    saved.general.title = draft.general.title;
    saved.existingGlossary = utils.clone(savedLinks ?? initialLinks);
  }
  const profile = { id: "fixture", can_edit: true, role: "member" };
  const context = { base_commit_sha: sha, terms: [{ id: "dhcp", term: "DHCP" }, { id: "dns", term: "DNS" }], limits: {}, file_limits: {} };
  window.fixture = { notices: [], submissions: [], contextCalls: 0, originalDraft: utils.clone(draft) };
  const key = `tssr-course-editor-draft-v3-fixture-${mode === "edit" ? `test-${sha}` : "create"}`;
  window.fixture.key = key;
  localStorage.setItem(key, corrupt ? "{broken" : JSON.stringify(mode === "edit" ? { baseCommitSha: stale ? "b".repeat(40) : sha, draft: saved, attachments: [], proposalDescription: "Description conservée" } : saved));
  window.TSSRCollaboration = {
    getProfile: () => profile,
    // Exercise the preview input path without loading the real collaboration client.
    renderPreview: (markdown, target) => { target.textContent = markdown; },
    toast: (message) => {
      window.fixture.notices.push(message);
      const notice = document.createElement("div");
      notice.setAttribute("role", "status");
      notice.setAttribute("data-fixture-toast", "");
      notice.textContent = message;
      document.body.append(notice);
    },
    siteUrl: (path) => new URL(path, location.origin).href,
    invoke: async (name, payload) => {
      if (["get-course-context", "get-course-editor"].includes(payload.action)) {
        window.fixture.contextCalls += 1;
        return { course_context: context, course_editor: { context, meta: { courseId: "test", coursePath: "docs/modules/test/index.md" }, draft, attachments: [], relations: {} } };
      }
      if (!["create-course", "modify-course"].includes(payload.action)) throw new Error("Unexpected fixture action");
      window.fixture.submissions.push(payload);
      return { change_request: { status: "pending" } };
    }
  };
  if (preview) localStorage.clear();
}

async function openFixture(options, run) {
  const context = await browser.newContext({ serviceWorkers: "block" });
  const errors = [];
  const unexpectedRequests = [];
  const page = await context.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  await context.route("**/*", async (route) => {
    const url = new URL(route.request().url());
    if (url.origin !== origin) {
      unexpectedRequests.push(url.origin);
      return route.abort();
    }
    if (url.pathname === "/ajouter/") {
      return route.fulfill({ contentType: "text/html; charset=utf-8", body: `<!doctype html><html lang="fr"><meta charset="utf-8"><title>Ajouter un cours - Test</title><body><main class="md-content__inner"><h1>Ajouter un cours</h1><div id="tssr-course-creator"></div></main><script src="/course-creator-utils.js"></script><script>(${setup.toString()})(${JSON.stringify(options)})</script>${scripts.slice(1).map((name) => `<script src="/${name}"></script>`).join("")}</body></html>` });
    }
    const name = url.pathname.slice(1);
    if (scripts.includes(name)) return route.fulfill({ contentType: "text/javascript", body: readFileSync(new URL(`../docs/assets/javascripts/${name}`, import.meta.url), "utf8") });
    unexpectedRequests.push(url.pathname);
    return route.abort();
  });
  try {
    const query = options.preview ? "?tssr-course-preview=1" : options.mode === "edit" ? "?mode=edit&course=docs/modules/test/index.md" : "";
    await page.goto(`${origin}/ajouter/${query}`);
    await page.locator("[data-builder-section=glossary]").waitFor();
    await run(page);
    assert.deepEqual(errors, []);
    assert.deepEqual(unexpectedRequests, []);
  } finally {
    await context.close();
  }
}

for (const mode of ["create", "edit"]) {
  test(`${mode}: restored glossary cleanup is visible once, autosaved and submitted through the existing UI`, async () => {
    await openFixture({ mode }, async (page) => {
      assert.equal(await page.locator("[data-model-path='general.title']").inputValue(), "Brouillon conservé");
      assert.equal(await page.locator("[data-fixture-toast]").count(), 1);
      assert.match(await page.locator("[data-fixture-toast]").textContent(), /associations de glossaire.*retirées/);
      await page.locator("[data-builder-section=glossary]").click();
      assert.equal(await page.locator("[data-struct-action=glossary-unlink]").count(), 2);
      await page.locator("[data-struct-action=glossary-unlink]").first().click();
      await page.locator("[data-existing-term-input]").fill("DHCP");
      await page.locator("[data-existing-term-module]").selectOption("0");
      await page.locator("[data-struct-action=glossary-link]").click();
      await page.locator("[data-struct-action=glossary-add]").click();
      await page.locator("[data-model-path='glossaryEntries.0.term']").fill("Terme factice");
      await page.waitForFunction(() => {
        const saved = JSON.parse(localStorage.getItem(window.fixture.key));
        return (saved.draft || saved).glossaryEntries[0]?.term === "Terme factice";
      });
      const saved = await page.evaluate(() => JSON.parse(localStorage.getItem(window.fixture.key)));
      assert.deepEqual((saved.draft || saved).existingGlossary, [{ id: "dns", moduleIndex: 0 }, { id: "dhcp", moduleIndex: 0 }]);
      await page.locator("[data-builder-section=preview]").click();
      assert.match(await page.locator("[data-global-preview]").textContent(), mode === "edit" ? /Contenu factice intact/ : /DHCP/);
      await page.locator("[data-builder-section=submit]").click();
      await page.locator("[data-submit-course]").click();
      await page.locator("dialog [data-confirm=true]").click();
      await page.waitForFunction(() => window.fixture.submissions.length === 1);
      const request = await page.evaluate(() => window.fixture.submissions[0]);
      const draft = mode === "edit" ? request.course_editor.draft : request.course;
      assert.equal(request.action, mode === "edit" ? "modify-course" : "create-course");
      assert.deepEqual(draft.existingGlossary, (saved.draft || saved).existingGlossary);
      assert.equal(draft.glossaryEntries[0].term, "Terme factice");
      if (mode === "edit") assert.equal(request.description, "Description conservée");
      assert.equal(await page.evaluate(() => window.fixture.notices.filter((notice) => notice.includes("associations de glossaire")).length), 1);
    });
  });
}

test("edit: a stale base SHA does not restore or clean the old draft", async () => {
  await openFixture({ mode: "edit", stale: true }, async (page) => {
    assert.equal(await page.locator("[data-model-path='general.title']").inputValue(), "Cours factice");
    assert.equal(await page.locator("[data-fixture-toast]").count(), 0);
    const saved = await page.evaluate(() => JSON.parse(localStorage.getItem(window.fixture.key)));
    assert.deepEqual(saved.draft.existingGlossary[0], {});
  });
});

test("corrupt localStorage retains the published edit model or the default create draft", async () => {
  for (const mode of ["create", "edit"]) await openFixture({ mode, corrupt: true }, async (page) => {
    assert.equal(await page.locator("[data-model-path='general.title']").inputValue(), mode === "edit" ? "Cours factice" : "Nouveau cours");
    assert.equal(await page.locator("[data-fixture-toast]").count(), 0);
  });
});

test("local preview still forbids submission and does not call the backend", async () => {
  await openFixture({ mode: "create", preview: true }, async (page) => {
    await page.locator("[data-builder-section=submit]").click();
    assert.equal(await page.locator("[data-submit-course]").isDisabled(), true);
    assert.equal(await page.evaluate(() => window.fixture.contextCalls), 0);
  });
});

for (const operation of ["add", "remove", "module"]) {
  test(`existing glossary only: ${operation} enables submission and sends only the changed associations`, async () => {
    const initialLinks = operation === "add" ? [] : [{ id: "dhcp", moduleIndex: -1 }];
    await openFixture({ mode: "edit", glossaryOnly: true, initialLinks }, async (page) => {
      await page.locator("[data-builder-section=submit]").click();
      assert.equal(await page.locator("[data-submit-course]").isDisabled(), true);
      await page.locator("[data-builder-section=glossary]").click();
      if (operation !== "add") await page.locator("[data-struct-action=glossary-unlink]").click();
      if (operation !== "remove") {
        await page.locator("[data-existing-term-input]").fill("DHCP");
        await page.locator("[data-existing-term-module]").selectOption(operation === "module" ? "0" : "-1");
        await page.locator("[data-struct-action=glossary-link]").click();
      }
      const expected = operation === "remove" ? [] : [{ id: "dhcp", moduleIndex: operation === "module" ? 0 : -1 }];
      await page.locator("[data-builder-section=submit]").click();
      assert.equal(await page.locator("[data-submit-course]").isDisabled(), false);
      assert.match(await page.locator(".tssr-editor-diff").textContent(), /Associations de termes existants/);
      await page.waitForFunction((expected) => JSON.stringify(JSON.parse(localStorage.getItem(window.fixture.key)).draft.existingGlossary) === JSON.stringify(expected), expected);
      // Autosave clears storage-dirty, not the semantic change against the base.
      assert.equal(await page.locator("[data-submit-course]").isDisabled(), false);
      await page.locator("[data-submit-course]").click();
      await page.locator("dialog [data-confirm=true]").click();
      await page.waitForFunction(() => window.fixture.submissions.length === 1);
      const { originalDraft, submissions } = await page.evaluate(() => window.fixture);
      const submitted = submissions[0].course_editor.draft;
      assert.deepEqual(submitted.existingGlossary, expected);
      delete submitted.existingGlossary;
      delete originalDraft.existingGlossary;
      assert.deepEqual(submitted, originalDraft);
    });
  });
}

test("existing glossary only: automatic cleanup stays non-dirty and cannot be submitted", async () => {
  await openFixture({ mode: "edit", glossaryOnly: true, savedLinks: [{}, { id: null }, { id: "obsolete", moduleIndex: -1 }] }, async (page) => {
    await page.locator("[data-builder-section=submit]").click();
    assert.equal(await page.locator("[data-submit-course]").isDisabled(), true);
    assert.equal(await page.locator("[data-fixture-toast]").count(), 1);
    assert.equal(await page.evaluate(() => !window.dispatchEvent(new Event("beforeunload", { cancelable: true }))), false);
    await page.locator("[data-save-draft]").click();
    assert.deepEqual(await page.evaluate(() => JSON.parse(localStorage.getItem(window.fixture.key)).draft.existingGlossary), []);
    assert.equal(await page.locator("[data-submit-course]").isDisabled(), true);
    assert.deepEqual(await page.evaluate(() => window.fixture.submissions), []);
  });
});

test("existing glossary only: withdrawing the sole pending association restores a non-submittable draft", async () => {
  await openFixture({ mode: "edit", glossaryOnly: true, savedLinks: [{ id: "dhcp", moduleIndex: -1 }] }, async (page) => {
    await page.locator("[data-builder-section=submit]").click();
    assert.equal(await page.locator("[data-submit-course]").isDisabled(), false);
    await page.locator("[data-builder-section=glossary]").click();
    await page.locator("[data-struct-action=glossary-unlink]").click();
    await page.locator("[data-builder-section=submit]").click();
    assert.equal(await page.locator("[data-submit-course]").isDisabled(), true);
  });
});

test("existing glossary only: reordered and duplicate pairs never enable submission", async () => {
  const initialLinks = [{ id: "dhcp", moduleIndex: -1 }, { id: "dns", moduleIndex: 0 }];
  await openFixture({ mode: "edit", glossaryOnly: true, initialLinks, savedLinks: [initialLinks[1], initialLinks[0], initialLinks[0]] }, async (page) => {
    await page.locator("[data-builder-section=submit]").click();
    assert.equal(await page.locator("[data-submit-course]").isDisabled(), true);
    assert.equal(await page.locator("[data-fixture-toast]").count(), 0);
  });
});
