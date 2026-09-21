import { assertEquals, assertThrows } from "jsr:@std/assert@1.0.18";
import attributeFixtures from "../../../tests/fixtures/markdown-attributes.json" with { type: "json" };
import type { ProposedFile } from "./validation.ts";
import {
  assertEditablePath,
  buildNavigationEdit,
  validateMarkdown,
  validateMarkdownTransition,
  validateMkDocsEdit,
  validateProposedFiles,
} from "./validation.ts";

for (const fixture of attributeFixtures) {
  Deno.test(`server attribute policy: ${fixture.name}`, () => {
    if (fixture.allowed) {
      validateMarkdown(fixture.markdown);
      validateMarkdownTransition(fixture.markdown, fixture.markdown + "\n\nAjout passif.");
    }
    else assertThrows(() => validateMarkdown(fixture.markdown));
  });
}

const sourceResource = "docs/assets/resources/cours/test/support.txt";
const baseSha = "a".repeat(40);
const glossary = JSON.stringify({ schemaVersion: 1, courses: [], modules: [], entries: [] });
function rename(destination: string, content: string): ProposedFile {
  return { file_path: sourceResource, new_file_path: destination, change_type: "rename",
    base_file_sha: baseSha, old_content: "Ancienne ressource", new_content: content, content_encoding: "utf-8" };
}

Deno.test("rename validates Markdown destination without inheriting text-resource trust", () => {
  for (const content of [
    '<script>void(0)</script>', '![x](x.png){onerror="void(0)"}',
    '[x](javascript:void(0))', '![x](data:image/svg+xml;base64,PHN2Zz4=)',
  ]) {
    assertThrows(() => validateProposedFiles([rename("docs/page.md", content)]));
    assertThrows(() => validateProposedFiles([{ ...rename("docs/page.md", content), old_content: content }]));
  }
  assertEquals(validateProposedFiles([rename("docs/page.md", "# Page valide")]).length, 1);
  assertEquals(validateProposedFiles([{ ...rename("docs/renamed.md", "# Page"),
    file_path: "docs/page.md", old_content: "# Ancien" }]).length, 1);
});

Deno.test("rename applies glossary JSON and schema validation at destination", () => {
  for (const content of ["invalid JSON", "{}", '{"schemaVersion":2,"courses":[],"modules":[],"entries":[]}']) {
    assertThrows(() => validateProposedFiles([rename("data/glossaire.json", content)]));
  }
  assertEquals(validateProposedFiles([rename("data/glossaire.json", glossary)]).length, 1);
});

Deno.test("new_file_path cannot alias a create update or delete operation", () => {
  for (const change_type of ["create", "update", "delete"] as const) {
    assertThrows(() => validateProposedFiles([{ ...rename("docs/other.md", "# Page"),
      file_path: "docs/page.md", change_type }]));
  }
});

Deno.test("structural files cannot disappear through delete or rename", () => {
  for (const file_path of ["mkdocs.yml", "data/glossaire.json"]) {
    for (const change_type of ["delete", "rename"] as const) {
      assertThrows(() => validateProposedFiles([{ ...rename("docs/other.md", "# Page"),
        file_path, change_type, ...(change_type === "delete" ? { new_file_path: undefined } : {}) }]));
    }
  }
  assertThrows(() => validateProposedFiles([rename("mkdocs.yml", "site_name: TSSR")]));
});

Deno.test("structural files retain permitted editorial updates", () => {
  const yaml = "site_name: TSSR\nnav:\n  - Accueil: index.md\n";
  const next = yaml.replace("TSSR", "TSSR formation");
  for (const [file_path, new_content] of [["mkdocs.yml", next], ["data/glossaire.json", glossary]]) {
    assertEquals(validateProposedFiles([{ file_path, change_type: "update",
      base_file_sha: baseSha, old_content: file_path === "mkdocs.yml" ? yaml : glossary, new_content }]).length, 1);
  }
  validateMkDocsEdit(yaml, next, new Set(["mkdocs.yml", "docs/index.md"]));
  assertThrows(() => validateMkDocsEdit(yaml, next + "hooks:\n  - malicious.py\n", new Set(["docs/index.md"])));
});

Deno.test("editable paths allow content but reject executable project files", () => {
  assertEquals(assertEditablePath("docs/modules/reseau.md"), "docs/modules/reseau.md");
  assertEquals(assertEditablePath("mkdocs.yml"), "mkdocs.yml");
  assertThrows(() => assertEditablePath("docs/assets/javascripts/auth.js"));
  assertThrows(() => assertEditablePath("supabase/functions/admin/index.ts"));
  assertThrows(() => assertEditablePath("../secret.env"));
});

Deno.test("navigation editing preserves trusted MkDocs Python tags", () => {
  const oldConfig = `site_name: TSSR\nsite_description: Portail\nmarkdown_extensions:\n  - pymdownx.emoji:\n      emoji_index: !!python/name:material.extensions.emoji.twemoji\n      emoji_generator: !!python/name:material.extensions.emoji.to_svg\n  - pymdownx.superfences:\n      custom_fences:\n        - name: mermaid\n          class: mermaid\n          format: !!python/name:pymdownx.superfences.fence_div_format\nnav:\n  - Accueil: index.md\n`;
  const next = buildNavigationEdit(oldConfig, "TSSR · PAK", "Portail", [{ Accueil: "index.md" }]);
  assertEquals(next.includes("emoji_index: !!python/name:material.extensions.emoji.twemoji"), true);
  assertEquals(next.includes("emoji_generator: !!python/name:material.extensions.emoji.to_svg"), true);
  assertEquals(next.includes("format: !!python/name:pymdownx.superfences.fence_div_format"), true);
  assertEquals(next.includes('emoji_index: ""'), false);
  const validated = validateMkDocsEdit(oldConfig, next, new Set(["docs/index.md", "mkdocs.yml"]));
  assertEquals(validated.content.includes("!!python/name:pymdownx.superfences.fence_div_format"), true);
});

Deno.test("Markdown active content is rejected", () => {
  validateMarkdown("# Cours\n\nUn contenu pédagogique normal.");
  assertThrows(() => validateMarkdown("<script>alert(1)</script>"));
  assertThrows(() => validateMarkdown("[Piège](javascript:alert(1))"));
  assertThrows(() => validateMarkdown("<img src=x onerror=alert(1)>") );
  assertThrows(() => validateMarkdown('<svg><script>alert(1)</script></svg>'));
  assertThrows(() => validateMarkdown('<span style="position:fixed">Piège</span>'));
  assertThrows(() => validateMarkdown('![Piège](data:image/svg+xml;base64,PHN2Zz4=)'));
  assertThrows(() => validateMarkdown('<a href="java&#x73;cript:alert(1)">Piège</a>'));
  assertThrows(() => validateMarkdown('<a href="jav&#97;script:alert(1)">Piège</a>'));
  assertThrows(() => validateMarkdown('<a href="java&#x09;script:alert(1)">Piège</a>'));
  assertThrows(() => validateMarkdown('<a href="data&#58;text/html,attaque">Piège</a>'));
  assertThrows(() => validateMarkdown('<img title=">" onerror="alert(1)">'));
  assertThrows(() => validateMarkdown('<div title=">" style="position:fixed">Piège</div>'));
  assertThrows(() => validateMarkdown('<style>body { display: none }</style>'));
  assertThrows(() => validateMarkdown('<plaintext>suite'));
  validateMarkdown('```javascript\nconst exemple = "javascript:alert(1)";\n```');
  validateMarkdown('Utilisez `javascript:alert(1)` uniquement comme exemple de chaîne neutralisée.');
  validateMarkdown('Utilisez `` `<script>` `` uniquement comme exemple neutralisé.');
  validateMarkdown('Paramètre only=true dans un fichier de configuration.');
  assertThrows(() => validateMarkdown('\\`<script>alert(1)</script>\\`'));
  assertThrows(() => validateMarkdown('`<script>alert(1)</script>``'));
  assertThrows(() => validateMarkdown('```lang`invalide\n<script>alert(1)</script>\n```\n'));
  assertThrows(() => validateMarkdown('<div>\n```html\n<script>alert(1)</script>\n```\n</div>\n'));
});

Deno.test("legacy visual HTML is retained only when its sensitive tag is byte-identical", () => {
  const oldContent = '# OSI\n\n<div class="layer" style="--layer-color:#3978c5">Réseau</div>\n';
  validateMarkdownTransition(oldContent, oldContent.replace("# OSI", "# Modèle OSI"));
  assertThrows(() => validateMarkdownTransition(oldContent, oldContent.replace("#3978c5", "url(javascript:alert(1))")));
  assertThrows(() => validateMarkdownTransition(oldContent, `${oldContent}\n<button onclick="alert(1)">Piège</button>`));
  assertThrows(() => validateMarkdownTransition(oldContent, `${oldContent}\n<div class="layer" style="--layer-color:#3978c5">Copie</div>`));
  const quoted = '<div class="layer" title=">" style="--layer-color:#3978c5">Réseau</div>\n';
  validateMarkdownTransition(quoted, quoted.replace("Réseau", "Couche réseau"));
  assertThrows(() => validateMarkdownTransition(quoted, quoted.replace("#3978c5", "red")));
});

Deno.test("active examples cannot be moved from a code fence into rendered Markdown", () => {
  const oldContent = '# Sécurité\n\n```html\n<script>alert(1)</script>\n```\n';
  validateMarkdownTransition(oldContent, oldContent.replace("# Sécurité", "# Sécurité Web"));
  assertThrows(() => validateMarkdownTransition(oldContent, '# Sécurité\n\n<script>alert(1)</script>\n'));
});

Deno.test("file proposals require trusted hashes for existing files", () => {
  const sha = "a".repeat(40);
  assertEquals(validateProposedFiles([{
    file_path: "docs/page.md",
    base_file_sha: sha,
    old_content: "avant",
    new_content: "après",
    content_encoding: "utf-8",
    change_type: "update",
  }]).length, 1);
  assertThrows(() => validateProposedFiles([{
    file_path: "docs/page.md",
    new_content: "après",
    content_encoding: "utf-8",
    change_type: "update",
  }]));
});

Deno.test("binary resources require a compatible MIME type and signature", () => {
  const zip = btoa("PK\u0003\u0004archive");
  assertEquals(validateProposedFiles([{
    file_path: "docs/assets/resources/cours/test/support.zip",
    new_content: zip,
    content_encoding: "base64",
    media_type: "application/zip",
    change_type: "create",
  }]).length, 1);
  assertThrows(() => validateProposedFiles([{
    file_path: "docs/assets/resources/cours/test/support.zip",
    new_content: zip,
    content_encoding: "base64",
    media_type: "text/html",
    change_type: "create",
  }]));
});

Deno.test("mkdocs editing permits editorial fields only", () => {
  const oldConfig = `site_name: TSSR\nsite_description: Portail\ntheme:\n  name: material\nnav:\n  - Accueil: index.md\n`;
  const goodConfig = `site_name: TSSR collaboratif\nsite_description: Portail\ntheme:\n  name: material\nnav:\n  - Accueil: index.md\n`;
  const files = new Set(["docs/index.md", "mkdocs.yml"]);
  validateMkDocsEdit(oldConfig, goodConfig, files);
  const unsafeConfig = goodConfig.replace("name: material", "name: dangereux");
  assertThrows(() => validateMkDocsEdit(oldConfig, unsafeConfig, files));
  const brokenNav = goodConfig.replace("index.md", "absent.md");
  assertThrows(() => validateMkDocsEdit(oldConfig, brokenNav, files));
});
