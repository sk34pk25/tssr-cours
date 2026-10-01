// Isolated Chromium: actual built styles/scripts, synthetic quiz and auth bridge.
// Requires an existing Playwright runtime (NODE_PATH), Python, and a strict build.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { resolve, sep } from "node:path";
import { spawnSync } from "node:child_process";
import { after, before, test } from "node:test";
const { chromium } = createRequire(import.meta.url)("playwright");
const site = resolve(process.env.TSSR_TEST_SITE_DIR || "__missing_build__");
const origin = "http://127.0.0.1:41749";
function fixtureFor(current) {
const generated = spawnSync(process.env.TSSR_TEST_PYTHON || "python3", ["-c", `
import sys
sys.path.insert(0, 'scripts')
from kahoot_catalog import card
print(card(dict(legacy=False, title='Quiz de test aux intitulés volontairement longs', questionCount=20,
courseId='modules/01-bases-reseaux/index.md', moduleId='modules/01-bases-reseaux/module-01-le-modele-osi.md', path='kahoot/test.md',
url='https://create.kahoot.it/share/test/12345678-1234-1234-1234-123456789abc', soloAvailable=True, liveAvailable=True,
joinUrl='https://kahoot.it/', editorUrl='https://create.kahoot.it/creator/12345678-1234-1234-1234-123456789abc', provenance='A'), sys.argv[1]))
`, current], { encoding: "utf8", env: { ...process.env, PYTHONDONTWRITEBYTECODE: "1" } });
assert.equal(generated.status, 0, generated.stderr);
return `<section id="kahoot-fixture"><h2>Scénario local isolé</h2>
<button id="fixture-login">Connexion factice</button><button id="fixture-logout">Déconnexion factice</button>
${generated.stdout}<p id="fixture-opened"></p></section>
<script>
window.fixtureProfile = null;
window.TSSRCollaboration = { getProfile: () => window.fixtureProfile };
document.getElementById('fixture-login').onclick = () => { window.fixtureProfile = {id:'fixture',status:'active'}; document.dispatchEvent(new Event('tssr:auth-changed')); };
document.getElementById('fixture-logout').onclick = () => { window.fixtureProfile = null; document.dispatchEvent(new Event('tssr:auth-changed')); };
window.open = (url) => { document.getElementById('fixture-opened').textContent = url; };
</script>`;
}
let browser;
before(async () => { browser = await chromium.launch({ headless: true, channel: process.env.PLAYWRIGHT_CHANNEL || undefined }); });
after(async () => { await browser?.close(); });

for (const [view, current] of [["library", "kahoot/bibliotheque.md"], ["module", "modules/01-bases-reseaux/module-01-le-modele-osi.md"]]) {
const pathname = "/" + current.replace(/\.md$/, "/");
const template = readFileSync(resolve(site, "." + pathname, "index.html"), "utf8");
const fixture = fixtureFor(current);
for (const width of [320, 768, 1024, 1440]) {
  test(`Kahoot ${view}: anonymous/authenticated, keyboard and no overflow at ${width}px`, async () => {
    const context = await browser.newContext({ viewport: { width, height: 900 }, serviceWorkers: "block" });
    const errors = [];
    const page = await context.newPage();
    page.on("pageerror", (error) => errors.push(error.message));
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    await context.route("**/*", async (route) => {
      const url = new URL(route.request().url());
      if (url.origin !== origin) return route.fulfill({ status: 200, contentType: "text/plain", body: "" });
      if (url.pathname.endsWith("/collaboration.js") || url.pathname.endsWith("/collaboration-config.js")) return route.fulfill({ contentType: "text/javascript", body: "/* isolated: no remote client */" });
      if (url.pathname === pathname) return route.fulfill({ contentType: "text/html", body: template.replace("</article>", `${fixture}</article>`) });
      const path = resolve(site, "." + decodeURIComponent(url.pathname));
      if (!path.startsWith(site + sep)) return route.abort();
      try {
        const type = path.endsWith(".css") ? "text/css" : path.endsWith(".js") ? "text/javascript" : path.endsWith(".json") ? "application/json" : undefined;
        return route.fulfill({ body: readFileSync(path), ...(type ? { contentType: type } : {}) });
      } catch { return route.fulfill({ status: 404, body: "" }); }
    });
    try {
      await page.goto(origin + pathname, { waitUntil: "networkidle" });
      const solo = page.locator("#kahoot-fixture a").filter({ hasText: "Jouer en solo" });
      const join = page.locator("#kahoot-fixture a").filter({ hasText: "Rejoindre un groupe" });
      const host = page.locator("#kahoot-fixture [data-kahoot-host]");
      assert.equal(await solo.isVisible(), true);
      assert.equal(await join.isVisible(), true);
      assert.equal(await solo.getAttribute("href"), "https://create.kahoot.it/share/test/12345678-1234-1234-1234-123456789abc");
      assert.equal(await join.getAttribute("href"), "https://kahoot.it/");
      assert.equal(await host.isVisible(), false);
      await page.locator("#fixture-login").click();
      assert.equal(await host.isVisible(), true);
      const connectedDimensions = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, width: document.documentElement.clientWidth }));
      assert.ok(connectedDimensions.scroll <= connectedDimensions.width, JSON.stringify(connectedDimensions));
      if (process.env.TSSR_TEST_SCREENSHOTS) {
        await page.locator("#kahoot-fixture").scrollIntoViewIfNeeded();
        await page.screenshot({ path: resolve(process.env.TSSR_TEST_SCREENSHOTS, `kahoot-${view}-${width}-authenticated.png`) });
      }
      await solo.focus();
      await page.keyboard.press("Tab");
      assert.equal(await join.evaluate((node) => node === document.activeElement), true);
      await page.keyboard.press("Tab");
      assert.equal(await host.evaluate((node) => node === document.activeElement), true);
      await page.keyboard.press("Enter");
      assert.equal(await page.locator("#fixture-opened").textContent(), "https://create.kahoot.it/creator/12345678-1234-1234-1234-123456789abc");
      await page.locator("#fixture-logout").click();
      assert.equal(await host.isVisible(), false);
      assert.equal(await solo.isVisible(), true);
      assert.equal(await join.isVisible(), true);
      assert.equal(await page.locator("iframe").count(), 0);
      const dimensions = await page.evaluate(() => ({ scroll: document.documentElement.scrollWidth, width: document.documentElement.clientWidth }));
      assert.ok(dimensions.scroll <= dimensions.width, JSON.stringify(dimensions));
      assert.deepEqual(errors, []);
      if (process.env.TSSR_TEST_SCREENSHOTS) {
        await page.locator("#kahoot-fixture").scrollIntoViewIfNeeded();
        await page.screenshot({ path: resolve(process.env.TSSR_TEST_SCREENSHOTS, `kahoot-${view}-${width}.png`) });
      }
    } finally { await context.close(); }
  });
}
}
