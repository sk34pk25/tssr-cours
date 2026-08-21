import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const context = { module: { exports: {} }, exports: {}, URL };
vm.runInNewContext(
  fs.readFileSync(new URL("../docs/assets/javascripts/course-editor.js", import.meta.url), "utf8"),
  context
);
const editor = context.module.exports;
const uiContext = {
  module: { exports: {} },
  exports: {},
  TSSRAdvancedEditor: editor,
  TSSRCourseCreatorUtils: {}
};
vm.runInNewContext(
  fs.readFileSync(new URL("../docs/assets/javascripts/course-editor-ui.js", import.meta.url), "utf8"),
  uiContext
);
const editorUi = uiContext.module.exports;

function markdownFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = new URL(`${entry.name}${entry.isDirectory() ? "/" : ""}`, directory);
    if (entry.isDirectory()) return markdownFiles(target);
    return entry.isFile() && entry.name.endsWith(".md") ? [target] : [];
  });
}

const COMPLEX_MARKDOWN = `---
title: Parcours sans perte
---

# Diagnostic réseau

Paragraphe **simple** avec [un lien](https://example.com).

!!! warning "Attention"
    Ne jamais perdre cet encadré.

???+ success "Validation"
    Le bloc est ouvert.

=== "Windows"

    \`\`\`powershell title="Diagnostic" linenums="1" hl_lines="2"
    Get-NetIPConfiguration
    Test-NetConnection example.com
    \`\`\`

=== "Linux"

    \`\`\`bash
    ip address
    \`\`\`

\`\`\`mermaid
sequenceDiagram
    Client->>Serveur: Requête
\`\`\`

| Système | Commande |
| :--- | ---: |
| Linux | \`ip a\` |

- [ ] À faire
- [x] Terminé

<div class="grid cards" markdown>

-   Carte contrôlée

</div>

Note[^1]

[^1]: Explication exacte.
`;

test("advanced blocks are protected and restored byte-for-byte", () => {
  for (const source of [COMPLEX_MARKDOWN, COMPLEX_MARKDOWN.replaceAll("\n", "\r\n"), "", "Texte sans saut final"]) {
    const protectedDocument = editor.protectAdvancedMarkdown(source);
    assert.equal(editor.restoreAdvancedMarkdown(protectedDocument.markdown, protectedDocument.blocks), source);
  }
});

test("the lossless document serializes every untouched block exactly", () => {
  const documentModel = editor.parseLosslessDocument(COMPLEX_MARKDOWN);
  assert.equal(editor.serializeLosslessDocument(documentModel), COMPLEX_MARKDOWN);
  assert.ok(documentModel.blocks.some((block) => block.label === "Diagramme Mermaid"));
  assert.ok(documentModel.blocks.some((block) => block.label === "Admonition"));
  assert.ok(documentModel.blocks.some((block) => block.editable));
});

test("every real documentation page round-trips byte-for-byte", () => {
  const files = markdownFiles(new URL("../docs/", import.meta.url));
  assert.ok(files.length >= 250, `corpus unexpectedly small: ${files.length} files`);
  for (const file of files) {
    const source = fs.readFileSync(file, "utf8");
    const model = editor.parseLosslessDocument(source);
    assert.equal(editor.serializeLosslessDocument(model), source, file.pathname);
  }
});

test("editing one basic block does not normalize its protected neighbours", () => {
  const source = `Avant exact.\n\n!!! info "Bloc"\n    Ligne 1.\n\n    Ligne 2.\n\nAprès exact.\n`;
  const documentModel = editor.parseLosslessDocument(source);
  const rawBlock = documentModel.blocks.find((block) => block.label === "Admonition");
  const originalRaw = rawBlock.raw;
  const firstBasic = documentModel.blocks.find((block) => block.editable);
  firstBasic.body = "Avant modifié.";
  firstBasic.raw = `${firstBasic.body}${firstBasic.suffix}`;
  const result = editor.serializeLosslessDocument(documentModel);
  assert.match(result, /^Avant modifié\./);
  assert.ok(result.includes(originalRaw));
  assert.equal(rawBlock.raw, originalRaw);
});

test("nested controlled HTML remains one atomic raw block", () => {
  const columns = editor.buildCommandMarkdown("columns", {
    columns: 3,
    contents: ["Windows", "Linux", "Réseau"]
  });
  const source = `${columns}\n\nAprès.`;
  const model = editor.parseLosslessDocument(source);
  const htmlBlocks = model.blocks.filter((block) => block.kind === "raw" && block.raw.includes("tssr-content-columns"));
  assert.equal(htmlBlocks.length, 1);
  assert.equal(htmlBlocks[0].raw.trimEnd(), columns);
  assert.ok(model.blocks.some((block) => block.editable && block.raw.includes("Après.")));

  const nested = '<div class="grid" data-title="> test"><!-- </div> --><div><div>Intérieur</div></div></div>\n';
  const nestedModel = editor.parseLosslessDocument(nested);
  assert.equal(nestedModel.blocks.filter((block) => block.kind === "raw").length, 1);
  assert.equal(editor.serializeLosslessDocument(nestedModel), nested);
});

test("duplicating a final raw block always inserts a real block separator", () => {
  for (const source of [
    `!!! note "Fin"\n    Contenu`,
    `<div class="grid cards" markdown>\n\n- Carte\n\n</div>`
  ]) {
    const duplicated = `${source}${editorUi.duplicateRawValue(source)}`;
    const model = editor.parseLosslessDocument(duplicated);
    assert.equal(model.blocks.filter((block) => block.kind === "raw").length, 2, duplicated);
    assert.equal(editor.serializeLosslessDocument(model), duplicated);
  }
});

test("every generated editor menu owns unique accessible group identifiers", () => {
  const markup = `${editorUi.markup({ value: "A" })}${editorUi.markup({ value: "B" })}`;
  const ids = [...markup.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const reference of markup.matchAll(/aria-labelledby="([^"]+)"/g)) assert.ok(ids.includes(reference[1]));
});

test("legacy active attributes remain immutable while passive content can change", () => {
  const original = '<div class="layer" title=">" style="--layer-color:#3978c5">Réseau</div>\n';
  assert.equal(
    editor.validateMarkdownTransition(original, original.replace("Réseau", "Couche réseau")),
    original.replace("Réseau", "Couche réseau")
  );
  assert.throws(() => editor.validateMarkdownTransition(original, original.replace("#3978c5", "red")), /interdit|actif/i);
  assert.throws(() => editor.validateMarkdownTransition(original, `${original}${original}`), /interdit|actif/i);
  const codeExample = '```html\n<script>alert(1)</script>\n```\n';
  assert.throws(() => editor.validateMarkdownTransition(codeExample, '<script>alert(1)</script>\n'), /interdit|actif/i);
});

test("document imports use the 2 MB limit without weakening dialog snippets", () => {
  const content = "a".repeat(600_000);
  assert.equal(editor.validateMarkdownSecurity(content, 2_000_000), content);
  assert.throws(() => editor.validateUserMarkdown(content), /dépasse/i);
});

test("security masking recognizes only real Markdown code delimiters", () => {
  for (const safe of [
    "Utilisez `<script>alert(1)</script>` comme exemple.",
    "Utilisez `` `<script>` `` comme exemple.",
    "```html\n<script>alert(1)</script>\n```\n"
  ]) assert.equal(editor.validateMarkdownSecurity(safe), safe);
  for (const active of [
    "\\`<script>alert(1)</script>\\`",
    "`<script>alert(1)</script>``",
    "```lang`invalide\n<script>alert(1)</script>\n```\n",
    "<div>\n```html\n<script>alert(1)</script>\n```\n</div>\n"
  ]) assert.throws(() => editor.validateMarkdownSecurity(active), /interdit|actif/i, active);
});

test("unsafe, obfuscated and credential-bearing URLs are rejected", () => {
  for (const value of [
    "javascript:alert(1)", "java&#x73;cript:alert(1)", "java&Tab;script:alert(1)",
    "data:text/html,alert(1)", "vbscript:msgbox(1)", "file:///etc/passwd", "//evil.example",
    "https://user:password@example.com/", "http&colon;//evil.example", "http&#58;//evil.example",
    "ftp&colon;//evil.example", "https&colon;//user:password@evil.example", "&sol;&sol;evil.example",
    "x){href=https://evil.example}"
  ]) assert.throws(() => editor.safeUrl(value), /interdit|invalid|HTTPS|identifiants/i, value);
  assert.equal(editor.safeUrl("../module/page.md"), "../module/page.md");
  assert.equal(editor.safeUrl("#Titre de section"), "#titre-de-section");
  assert.equal(editor.safeUrl("https://example.com/support.pdf"), "https://example.com/support.pdf");
});

test("raw Markdown validation blocks active HTML without false positives in prose", () => {
  for (const payload of [
    "<script>alert(1)</script>", '<img src=x onerror="alert(1)">',
    '<a href="java&#x73;cript:alert(1)">X</a>', '<div style="position:fixed">X</div>',
    '<iframe srcdoc="attaque"></iframe>', "[attaque](data:text/html,x)",
    '<style>body{display:none}</style>', '<img title=">" onerror="alert(1)">',
    '<div title=">" style="position:fixed">X</div>', '<plaintext>reste de la page'
  ]) assert.throws(() => editor.validateUserMarkdown(payload), /interdit|autoris/i, payload);
  assert.equal(editor.validateUserMarkdown("Paramètre only=true dans un fichier de configuration."), "Paramètre only=true dans un fichier de configuration.");
  assert.equal(editor.validateUserMarkdown('```javascript\nconst payload = "javascript:alert(1)";\n```'), '```javascript\nconst payload = "javascript:alert(1)";\n```');
});

test("commands generate only supported MkDocs or controlled HTML syntax", () => {
  assert.equal(editor.buildCommandMarkdown("heading", { level: 6, text: "Détail" }), "###### Détail");
  assert.equal(editor.buildCommandMarkdown("strike", { text: "obsolète" }), "~~obsolète~~");
  assert.match(editor.buildCommandMarkdown("code-block", { language: "powershell", content: "Get-Service", title: "Services", linenums: true }), /^```powershell title="Services" linenums="1"/);
  assert.match(editor.buildCommandMarkdown("admonition", { type: "warning", title: "Attention", content: "Texte" }), /^!!! warning "Attention"/);
  assert.match(editor.buildCommandMarkdown("details", { type: "note", open: true, content: "Texte" }), /^\?\?\?\+ note/);
  assert.match(editor.buildCommandMarkdown("mermaid", { template: "vlan" }), /```mermaid[\s\S]+VLAN 10/);
  assert.match(editor.buildCommandMarkdown("button", { label: "Documentation", url: "https://example.com" }), /rel="noopener noreferrer"/);
  assert.equal(editor.buildCommandMarkdown("path", { path: "`a`" }), "`` `a` ``");
  assert.doesNotMatch(editor.templateMarkdown("course", { title: "<script>alert(1)</script>" }), /<script>/i);
});

test("long fences close safely and leave the following paragraph editable", () => {
  const source = "```text\nligne avec ```\n````\n\nParagraphe après.";
  const model = editor.parseLosslessDocument(source);
  assert.equal(editor.serializeLosslessDocument(model), source);
  assert.ok(model.blocks.some((block) => block.editable && block.raw.includes("Paragraphe après")));
  const generated = editor.buildCommandMarkdown("code-block", { language: "text", content: "avant\n```\naprès" });
  assert.match(generated, /^````text\n/);
  assert.match(generated, /\n````$/);
});

test("outline, statistics, search and replace remain deterministic", () => {
  assert.deepEqual(JSON.parse(JSON.stringify(editor.documentOutline("# Un\n\n### Trois { #id }"))), [
    { level: 1, title: "Un", line: 1 }, { level: 3, title: "Trois", line: 3 }
  ]);
  assert.equal(editor.documentStats("Un deux trois").words, 3);
  assert.deepEqual(JSON.parse(JSON.stringify(editor.findReplace("DNS dns", "dns", "DHCP", { all: true }))), { value: "DHCP DHCP", count: 2 });
  assert.ok(editor.commandSearch("diagramme").some((command) => command.id === "mermaid"));
});
