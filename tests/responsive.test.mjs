import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const stylesheetUrls = [
  new URL("../docs/assets/stylesheets/collaboration.css", import.meta.url),
  new URL("../docs/assets/stylesheets/course-creator.css", import.meta.url),
  new URL("../docs/assets/stylesheets/responsive.css", import.meta.url)
];
const courseRendererSource = fs.readFileSync(
  new URL("../supabase/functions/_shared/course.ts", import.meta.url),
  "utf8"
);

function findClosingBrace(source, openingBrace) {
  let depth = 1;
  let quote = "";

  for (let index = openingBrace + 1; index < source.length; index += 1) {
    const character = source[index];
    if (quote) {
      if (character === "\\") index += 1;
      else if (character === quote) quote = "";
      continue;
    }
    if (character === '"' || character === "'") quote = character;
    else if (character === "{") depth += 1;
    else if (character === "}" && --depth === 0) return index;
  }

  throw new Error("Unbalanced CSS block in responsive contract test.");
}

function declarationsFrom(body) {
  return Object.fromEntries(body.split(";").flatMap((entry) => {
    const separator = entry.indexOf(":");
    if (separator < 0) return [];
    const property = entry.slice(0, separator).trim().toLowerCase();
    const value = entry.slice(separator + 1).trim().replace(/\s+/g, " ");
    return property ? [[property, value]] : [];
  }));
}

function parseRules(source, media = [], output = []) {
  const css = source.replace(/\/\*[\s\S]*?\*\//g, "");
  let cursor = 0;

  while (cursor < css.length) {
    const openingBrace = css.indexOf("{", cursor);
    if (openingBrace < 0) break;
    const prelude = css.slice(cursor, openingBrace).trim();
    const closingBrace = findClosingBrace(css, openingBrace);
    const body = css.slice(openingBrace + 1, closingBrace);

    if (prelude.startsWith("@media")) parseRules(body, [...media, prelude], output);
    else if (prelude && !prelude.startsWith("@")) {
      output.push({
        selectors: prelude.split(",").map((selector) => selector.trim().replace(/\s+/g, " ")),
        declarations: declarationsFrom(body),
        media
      });
    }
    cursor = closingBrace + 1;
  }

  return output;
}

const rules = stylesheetUrls.flatMap((url) => parseRules(fs.readFileSync(url, "utf8")));

function targets(rule, selector) {
  return rule.selectors.includes(selector);
}

function isMobile(rule) {
  return rule.media.some((query) => {
    const match = query.match(/max-width\s*:\s*([\d.]+)(px|r?em)/i);
    if (!match) return false;
    const widthInPixels = Number(match[1]) * (match[2].toLowerCase() === "px" ? 1 : 16);
    return widthInPixels >= 375;
  });
}

function lastDeclaration(selector, property, predicate = () => true) {
  return rules.reduce((value, rule) => {
    if (!targets(rule, selector) || !predicate(rule)) return value;
    return rule.declarations[property] ?? value;
  }, undefined);
}

test("mobile rich-editor layout controls remain available", () => {
  const display = lastDeclaration(
    ".tssr-rich-editor__layouts",
    "display",
    isMobile
  );
  assert.equal(display, "flex", "mobile users must retain the Edit, Preview and Split layout controls");
});

test("fullscreen rich editors use the dynamic viewport and a flexible workspace", () => {
  assert.equal(lastDeclaration(".tssr-rich-editor.is-fullscreen", "display"), "flex");
  assert.equal(lastDeclaration(".tssr-rich-editor.is-fullscreen", "flex-direction"), "column");

  const viewportHeight = lastDeclaration(".tssr-rich-editor.is-fullscreen", "height") ||
    lastDeclaration(".tssr-rich-editor.is-fullscreen", "max-height");
  assert.match(viewportHeight || "", /(^|\s)100dvh($|\s)/, "fullscreen height must follow the dynamic mobile viewport");

  const legacyHeight = rules
    .filter((rule) => rule.selectors.some((selector) => selector.startsWith(".tssr-rich-editor.is-fullscreen")))
    .flatMap((rule) => Object.values(rule.declarations))
    .find((value) => /calc\(\s*100vh\s*-\s*8rem\s*\)/.test(value));
  assert.equal(legacyHeight, undefined, "wrapped toolbars must not be sized with the former fixed 8rem subtraction");

  const workspaceFlex = lastDeclaration(
    ".tssr-rich-editor.is-fullscreen .tssr-rich-editor__workspace",
    "flex"
  );
  assert.match(workspaceFlex || "", /^1(?:\s|$)/, "the fullscreen workspace must consume the remaining height");

  const mobileWorkspaceDisplay = lastDeclaration(
    ".tssr-rich-editor.is-fullscreen .tssr-rich-editor__workspace",
    "display",
    isMobile
  );
  assert.equal(mobileWorkspaceDisplay, "grid", "the mobile fullscreen workspace must stretch its visible pane");

  const mobileSplitRows = lastDeclaration(
    '.tssr-rich-editor.is-fullscreen[data-layout="split"] .tssr-rich-editor__workspace',
    "grid-template-rows",
    isMobile
  );
  assert.equal(
    mobileSplitRows,
    "repeat(2, minmax(0, 1fr))",
    "mobile fullscreen split mode must share the available height between both panes"
  );
});

test("mobile collaboration dialogs do not use the scrollbar-sensitive 100vw width", () => {
  const width = lastDeclaration(".tssr-collab-dialog", "width", isMobile);
  assert.ok(width, "the mobile dialog width must be explicit");
  assert.notEqual(width, "100vw");
  assert.equal(width, "100%", "mobile dialogs should fit their containing viewport without horizontal overflow");
});

test("collaboration dialogs protect mobile safe areas and expose disabled states", () => {
  const footerPadding = lastDeclaration(
    ".tssr-collab-dialog > .tssr-dialog__footer",
    "padding-bottom",
    isMobile
  );
  assert.match(
    footerPadding || "",
    /env\(safe-area-inset-bottom/,
    "confirmation actions must stay above the mobile home indicator"
  );
  assert.equal(
    lastDeclaration(".tssr-collab-dialog .md-button:disabled", "cursor"),
    "not-allowed",
    "busy dialog buttons must look unavailable"
  );
});

test("mobile form controls keep a readable 0.8rem font size", () => {
  for (const selector of [".tssr-field input", ".tssr-field textarea", ".tssr-field select"]) {
    assert.equal(
      lastDeclaration(selector, "font-size", isMobile),
      "0.8rem",
      `${selector} must remain legible and avoid iOS focus zoom`
    );
  }
});

test("PDF open and download actions stay outside the conditionally hidden fallback message", () => {
  const renderPdf = courseRendererSource.match(
    /function renderPdf\([\s\S]*?\n\}/
  )?.[0] || "";
  const openLink = renderPdf.indexOf("[Ouvrir le PDF]");
  const downloadLink = renderPdf.indexOf("[Télécharger]");
  const fallbackMessage = renderPdf.indexOf('class="tssr-pdf-embed__fallback"');

  assert.ok(openLink >= 0, "published PDFs must expose an open action");
  assert.ok(downloadLink >= 0, "published PDFs must expose a download action");
  assert.ok(openLink < fallbackMessage && downloadLink < fallbackMessage,
    "PDF actions must remain visible when the unsupported-viewer message is hidden");
});
