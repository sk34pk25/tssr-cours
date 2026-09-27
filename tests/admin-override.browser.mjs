// Isolated Chromium, synthetic accounts only; every network request is intercepted.
// Run with the already installed Playwright runtime via NODE_PATH.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { after, before, test } from "node:test";
const { chromium } = createRequire(import.meta.url)("playwright");
const origin = "http://127.0.0.1:41739";
let browser;
before(async () => { browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || undefined }); });
after(async () => { await browser?.close(); });

function setup(options) {
  const profile = { id: "admin", role: options.member ? "member" : "admin", status: "active", can_edit: true,
    can_override_validation: options.permission !== false, must_change_password: false, display_name: "Admin factice" };
  const request = { id: "11111111-1111-4111-8111-111111111111", title: "Proposition factice", status: "pending",
    author_id: "author", author_display_name: "Auteur factice", created_at: "2026-09-27T00:00:00Z",
    required_approvers: ["author", "admin", "other"], required_approver_labels: [
      { id: "author", display_name: "Auteur factice" }, { id: "admin", display_name: "Admin factice" }, { id: "other", display_name: "Membre factice" }],
    change_request_files: [], change_approvals: [{ user_id: "author", decision: "approved" }] };
  window.fixture = { calls: [] };
  window.TSSR_COLLABORATION_CONFIG = { supabaseUrl: "https://fixture.supabase.co", supabasePublishableKey: "sb_publishable_fixture_not_a_real_key" };
  window.supabase = { createClient: () => ({
    auth: { getSession: async () => ({ data: { session: { user: { id: "fixture" } } } }), onAuthStateChange() {} },
    from(table) {
      if (table === "profiles") return { select: () => ({ eq: () => ({ single: async () => ({ data: profile }) }) }) };
      if (table === "change_requests") return { select: () => ({ order: async () => ({ data: [request] }), eq: async () => ({ data: [request] }) }) };
      throw new Error("Unexpected fixture table");
    },
    functions: { invoke: async (name, { body }) => {
      window.fixture.calls.push(body);
      if (name !== "change-requests") throw new Error("Unexpected fixture function");
      if (options.denied) return { error: { message: "Permission de validation administrative requise." } };
      if (body.action === "vote") request.change_approvals.push({ user_id: "admin", decision: body.decision });
      else if (body.action === "admin_override_approval") {
        request.status = "approved";
        request.change_approval_overrides = { actor_display_name: "Admin factice", created_at: "2026-09-27T00:01:00Z", reason: body.reason };
      } else throw new Error("Unexpected fixture action");
      return { data: { change_request: request } };
    } }
  }) };
}

async function fixture(options, run) {
  const context = await browser.newContext({ viewport: { width: options.width || 1024, height: 900 }, serviceWorkers: "block" });
  const page = await context.newPage();
  const errors = [], unexpected = [];
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  await context.route("**/*", async route => {
    const url = new URL(route.request().url());
    if (url.origin !== origin) { unexpected.push(url.origin); return route.abort(); }
    if (url.pathname === "/") return route.fulfill({ contentType: "text/html; charset=utf-8", body: `<!doctype html><html lang="fr"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Fixture override</title>${["tokens", "base", "components", "collaboration"].map(name => `<link rel="stylesheet" href="/${name}.css">`).join("")}<body data-md-color-scheme="default"><main class="md-typeset"><h1>Modifications — test isolé</h1><div id="tssr-collaboration-page"></div></main><script>(${setup.toString()})(${JSON.stringify(options)})</script><script src="/collaboration-utils.js"></script><script src="/collaboration.js"></script></body></html>` });
    if (["/collaboration.js", "/collaboration-utils.js", "/collaboration.css", "/tokens.css", "/base.css", "/components.css"].includes(url.pathname)) {
      const css = url.pathname.endsWith(".css");
      return route.fulfill({ contentType: css ? "text/css" : "text/javascript", body: readFileSync(new URL(`../docs/assets/${css ? "stylesheets" : "javascripts"}${url.pathname}`, import.meta.url), "utf8") });
    }
    unexpected.push(url.pathname); return route.abort();
  });
  try {
    await page.goto(origin);
    await page.locator("[data-change-action=approve]").waitFor();
    await run(page);
    assert.deepEqual(errors, []); assert.deepEqual(unexpected, []);
  } finally { await context.close(); }
}

test("member and admin without explicit permission cannot see exceptional button", async () => {
  for (const options of [{ member: true }, { permission: false }]) await fixture(options, async page => {
    assert.equal(await page.locator("[data-change-action=admin-override]").count(), 0);
    await page.locator("[data-change-action=approve]").click();
    await page.getByText("Validation enregistrée.", { exact: true }).waitFor();
    assert.equal(await page.evaluate(() => window.fixture.calls[0].action), "vote");
    assert.match(await page.locator(".tssr-approvals").textContent(), /Membre factice : non voté/);
  });
});

test("authorized admin ordinary vote still uses vote, not override", async () => {
  await fixture({}, async page => {
    await page.locator("[data-change-action=approve]").click();
    await page.getByText("Validation enregistrée.", { exact: true }).waitFor();
    assert.deepEqual(await page.evaluate(() => window.fixture.calls.map(c => c.action)), ["vote"]);
    assert.equal(await page.locator("[data-admin-override-summary]").count(), 0);
    assert.equal(await page.locator("[data-change-action=admin-override]").count(), 1);
  });
});

for (const width of [320, 768, 1024, 1440]) test(`override confirmation, real votes and responsive rendering at ${width}px`, async () => {
  await fixture({ width }, async page => {
    const confirmations = [];
    page.on("dialog", async dialog => {
      confirmations.push(dialog.type());
      if (dialog.type() === "confirm") { assert.match(dialog.message(), /contournera les validations restantes/); await dialog.accept(); }
      else await dialog.accept("Revue exceptionnelle <sans faux vote>");
    });
    await page.locator("[data-change-action=admin-override]").focus();
    await page.keyboard.press("Enter");
    await page.locator("[data-admin-override-summary]").waitFor();
    assert.deepEqual(confirmations, ["confirm", "prompt"]);
    assert.deepEqual(await page.evaluate(() => window.fixture.calls.map(c => c.action)), ["admin_override_approval"]);
    assert.match(await page.locator(".tssr-approvals").textContent(), /Admin factice : non voté/);
    assert.match(await page.locator(".tssr-approvals").textContent(), /Membre factice : non voté/);
    assert.match(await page.locator("[data-admin-override-summary]").textContent(), /<sans faux vote>/);
    assert.equal(await page.locator("[data-change-action=admin-override]").count(), 0);
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
    if (process.env.TSSR_OVERRIDE_SCREENSHOT && width === 320) await page.screenshot({ path: process.env.TSSR_OVERRIDE_SCREENSHOT });
  });
});

test("cancelled confirmation performs no request; server denial remains visible", async () => {
  await fixture({}, async page => {
    page.once("dialog", dialog => dialog.dismiss());
    await page.locator("[data-change-action=admin-override]").click();
    assert.deepEqual(await page.evaluate(() => window.fixture.calls), []);
  });
  await fixture({ denied: true }, async page => {
    page.on("dialog", dialog => dialog.accept(dialog.type() === "prompt" ? "Reviewed" : undefined));
    await page.locator("[data-change-action=admin-override]").click();
    await page.getByText("Permission de validation administrative requise.", { exact: true }).waitFor();
    assert.equal(await page.locator("[data-admin-override-summary]").count(), 0);
    assert.equal(await page.locator("[data-change-action=admin-override]").isEnabled(), true);
  });
});
