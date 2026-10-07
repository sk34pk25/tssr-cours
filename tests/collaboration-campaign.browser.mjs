// Isolated Chromium + actual pinned Supabase SDK. All HTTP intercepted, GET only.
// TSSR_TEST_SUPABASE_BUNDLE points to the SDK version declared in mkdocs.yml.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { before, after, test } from "node:test";
const { chromium } = createRequire(import.meta.url)("playwright");
const origin = "http://127.0.0.1:41759";
const sdk = readFileSync(process.env.TSSR_TEST_SUPABASE_BUNDLE, "utf8");
let browser;
before(async () => { browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || undefined }); });
after(async () => { await browser?.close(); });

function setup() {
  const createClient = window.supabase.createClient;
  window.TSSR_COLLABORATION_CONFIG = { supabaseUrl: "https://fixture.supabase.co", supabasePublishableKey: "sb_publishable_fixture" };
  window.supabase = { createClient: (...args) => {
    const client = createClient(...args);
    client.auth.getSession = async () => ({ data: { session: { user: { id: "fixture" } } } });
    client.auth.onAuthStateChange = () => {};
    return client;
  } };
}

async function fixture(options, run) {
  const context = await browser.newContext({ viewport: { width: options.width || 1024, height: 900 }, serviceWorkers: "block" });
  const page = await context.newPage(), errors = [], unexpected = [], queries = [];
  const profile = { id: "admin", role: "admin", status: "active", can_edit: true, can_override_validation: true, must_change_password: false, display_name: "Admin factice" };
  const base = { author_id: "admin", author_display_name: "Auteur factice", created_at: "2026-10-05T00:00:00Z",
    required_approvers: ["admin"], required_approver_labels: [{ id: "admin", display_name: "Admin factice" }],
    change_request_files: [{ file_path: "docs/fixture.md", content_encoding: "utf-8", old_content: "", new_content: "# Fixture" }],
    change_approvals: [], change_approval_overrides: null };
  const policySource = readFileSync(new URL("../docs/assets/javascripts/collaboration-campaign.js", import.meta.url), "utf8");
  const ids = Array.from(policySource.matchAll(/"([0-9a-f-]{36})"/g), m => m[1]);
  const statuses = ["pending", "publishing", "failed", "conflict", "cancelled", "published", "approved", "rejected"];
  const rows = ids.map((id, i) => ({ ...base, id, title: "Ancienne Debian " + i, status: statuses[i % statuses.length] }));
  rows.push({ ...base, id: "11111111-1111-4111-8111-111111111111", title: "Nouvelle Debian M01", status: "pending" });
  rows.push({ ...base, id: "22222222-2222-4222-8222-222222222222", title: "Technique hors campagne", status: "published" });
  const before = JSON.stringify(rows);
  page.on("pageerror", e => errors.push(e.message));
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  await context.route("**/*", async route => {
    const req = route.request(), url = new URL(req.url());
    if (req.method() !== "GET") { unexpected.push(req.method() + " " + url.pathname); return route.abort(); }
    if (url.origin === "https://fixture.supabase.co") {
      if (url.pathname === "/rest/v1/profiles") return route.fulfill({ contentType: "application/json", body: JSON.stringify(profile) });
      if (url.pathname === "/rest/v1/change_requests") {
        const filter = url.searchParams.get("id");
        queries.push(Object.fromEntries(url.searchParams));
        assert.ok(filter, "No unfiltered change_requests request may escape");
        const history = filter.startsWith("in.");
        assert.equal(filter, (history ? "in.(" : "not.in.(") + ids.join(",") + ")");
        let selected = rows.filter(r => history === ids.includes(r.id));
        if (url.searchParams.has("status")) selected = selected.filter(r => r.status === url.searchParams.get("status").slice(3));
        return route.fulfill({ contentType: "application/json", body: JSON.stringify(selected) });
      }
      unexpected.push(url.pathname); return route.abort();
    }
    if (url.origin !== origin) { unexpected.push(url.origin); return route.abort(); }
    if (url.pathname === "/supabase.js") return route.fulfill({ contentType: "text/javascript", body: sdk });
    if (url.pathname === "/") return route.fulfill({ contentType: "text/html; charset=utf-8", body: `<!doctype html><html lang="fr"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Campagne fixture</title><link rel="stylesheet" href="/collaboration.css"><body><header class="md-header__inner"></header><main class="md-container"><h1>Propositions</h1><div id="tssr-collaboration-page"></div></main><script src="/supabase.js"></script><script>(${setup.toString()})()</script><script src="/collaboration-utils.js"></script>${options.missing ? "" : '<script src="/collaboration-campaign.js"></script>'}<script src="/password-recovery.js"></script><script src="/collaboration.js"></script></body></html>` });
    if (["/collaboration.js", "/collaboration-utils.js", "/collaboration-campaign.js", "/password-recovery.js", "/collaboration.css"].includes(url.pathname)) {
      const css = url.pathname.endsWith(".css");
      return route.fulfill({ contentType: css ? "text/css" : "text/javascript", body: readFileSync(new URL("../docs/assets/" + (css ? "stylesheets" : "javascripts") + url.pathname, import.meta.url), "utf8") });
    }
    unexpected.push(url.pathname); return route.abort();
  });
  try {
    await page.goto(origin);
    await run(page, queries);
    assert.deepEqual(errors, []); assert.deepEqual(unexpected, []);
    assert.equal(JSON.stringify(rows), before);
  } finally { await context.close(); }
}

for (const width of [320, 768, 1024, 1440]) test(`active views exclude legacy; dedicated history read-only at ${width}px`, async () => {
  await fixture({ width }, async (page, queries) => {
    await page.getByRole("heading", { name: "Nouvelle Debian M01" }).waitFor();
    assert.equal(await page.locator(".tssr-change-card").count(), 1);
    await page.getByText("1 modification en attente de votre validation", { exact: false }).waitFor();
    assert.equal(await page.locator("[data-pending-badge]").textContent(), "(1)");
    assert.equal(await page.locator("[data-change-action=admin-override]").count(), 1);
    await page.locator("[data-dashboard-tab=history]").click();
    await page.getByRole("heading", { name: "Technique hors campagne" }).waitFor();
    assert.equal(await page.locator(".tssr-change-card").count(), 1);
    await page.locator("[data-dashboard-tab=mine]").click();
    await page.getByRole("heading", { name: "Nouvelle Debian M01" }).waitFor();
    assert.equal(await page.locator(".tssr-change-card").count(), 2);
    await page.locator("[data-dashboard-tab=legacy]").focus();
    await page.keyboard.press("Enter");
    await page.getByRole("heading", { name: "Ancienne Debian 0", exact: true }).waitFor();
    assert.equal(await page.locator(".tssr-change-card").count(), 64);
    assert.equal(await page.locator('[data-change-action]:not([data-change-action="diff"])').count(), 0);
    await page.locator("[data-change-action=diff]").first().click();
    await page.locator("dialog[open]").waitFor();
    assert.ok(queries.some(q => q.id.startsWith("in.")));
    assert.ok(queries.some(q => q.status === "eq.pending" && q.id.startsWith("not.in.")));
    if (process.env.TSSR_LEGACY_SCREENSHOT && width === 320) await page.screenshot({ path: process.env.TSSR_LEGACY_SCREENSHOT });
  });
});

test("missing campaign asset never falls back to an unfiltered query", async () => {
  await fixture({ missing: true }, async (page, queries) => {
    await page.getByText("Le filtre de campagne est indisponible. Rechargez la page.").waitFor();
    assert.deepEqual(queries, []);
    assert.equal(await page.locator(".tssr-change-card").count(), 0);
  });
});
