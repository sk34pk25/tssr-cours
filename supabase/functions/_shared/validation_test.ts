import { assertEquals, assertThrows } from "jsr:@std/assert@1.0.18";
import {
  assertEditablePath,
  buildNavigationEdit,
  validateMarkdown,
  validateMarkdownTransition,
  validateMkDocsEdit,
  validateProposedFiles,
} from "./validation.ts";

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
