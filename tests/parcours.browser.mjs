// Offline browser checks against a strict build. No credentials or production API.
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve, sep } from "node:path";
import { after, before, test } from "node:test";

const { chromium } = createRequire(import.meta.url)("playwright");
const site = resolve(process.env.TSSR_TEST_SITE_DIR || "__missing_build__");
const origin = "http://127.0.0.1:41748";
let browser;
before(async () => { browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || undefined }); });
after(async () => { await browser?.close(); });

for (const width of [320, 768, 1024, 1440]) {
  test(`Parcours/MSP links, dynamic dates, navigation and layout at ${width}px`, async () => {
    const context = await browser.newContext({ viewport: { width, height: 900 }, serviceWorkers: "block" });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    await context.route("**/*", async (route) => {
      const url = new URL(route.request().url());
      if (url.origin !== origin) return route.fulfill({ status: 200, contentType: "text/plain", body: "" });
      if (/\/collaboration(?:-config)?\.js$/.test(url.pathname)) return route.fulfill({ contentType: "text/javascript", body: "/* no production client */" });
      const path = resolve(site, "." + decodeURIComponent(url.pathname) + (url.pathname.endsWith("/") ? "index.html" : ""));
      if (!path.startsWith(site + sep)) return route.abort();
      try {
        const types = { css: "text/css", js: "text/javascript", json: "application/json", html: "text/html" };
        return route.fulfill({ body: readFileSync(path), contentType: types[path.split(".").at(-1)] || "application/octet-stream" });
      } catch { return route.fulfill({ status: 404, body: "" }); }
    });
    const noOverflow = async () => {
      const sizes = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
      assert.ok(sizes[0] <= sizes[1], JSON.stringify(sizes));
    };
    const linksExist = async () => {
      for (const target of await page.locator(".md-content__inner a[href]").evaluateAll((links) => links.map((a) => a.href))) {
        const url = new URL(target);
        if (url.origin !== origin) continue;
        const file = resolve(site, "." + decodeURIComponent(url.pathname), url.pathname.endsWith("/") ? "index.html" : "");
        assert.ok(file.startsWith(site + sep) && existsSync(file), url.pathname);
      }
    };
    try {
      // Establish a deterministic Paris civil day, not a hard-coded production status.
      await page.clock.install({ time: new Date("2026-06-08T12:00:00Z") });
      await page.goto(origin + "/parcours-tssr/", { waitUntil: "networkidle" });
      const periods = page.locator("[data-period-start]");
      assert.ok(await periods.count() > 0);
      assert.equal(await periods.first().textContent(), "En cours");
      await page.clock.setSystemTime(new Date("2028-01-01T12:00:00Z"));
      await page.clock.runFor(30_001);
      assert.ok((await periods.allTextContents()).every((value) => value === "Passé"));
      await noOverflow();
      await linksExist();
      if (process.env.TSSR_TEST_SCREENSHOTS) await page.screenshot({ path: resolve(process.env.TSSR_TEST_SCREENSHOTS, `parcours-${width}.png`) });
      const course = page.locator(".tssr-planning a").first();
      const courseURL = await course.getAttribute("href");
      await course.focus();
      await page.keyboard.press("Enter");
      await page.waitForURL(new URL(courseURL, origin + "/parcours-tssr/").href);
      await page.goBack({ waitUntil: "networkidle" });
      assert.ok((await periods.allTextContents()).every((value) => value === "Passé"));
      if (width < 1220) {
        await page.locator(".md-header label[for=__drawer]").click();
        assert.equal(await page.locator("#__drawer").isChecked(), true);
      }
      // Material navigation.indexes exposes the landing page as the section link.
      const msp = page.locator(".md-nav--primary a[href]").filter({ hasText: /^\s*MSP\s*$/ }).first();
      await msp.click();
      await page.waitForURL(origin + "/msp/");
      assert.equal(await page.locator(".md-content__inner section").count(), 2);
      await noOverflow();
      await linksExist();
      if (process.env.TSSR_TEST_SCREENSHOTS) await page.screenshot({ path: resolve(process.env.TSSR_TEST_SCREENSHOTS, `msp-${width}.png`) });
      assert.deepEqual(errors, []);
    } finally { await context.close(); }
  });
}
