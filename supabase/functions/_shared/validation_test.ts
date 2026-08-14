import { assertEquals, assertThrows } from "jsr:@std/assert@1.0.18";
import {
  assertEditablePath,
  validateMarkdown,
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

Deno.test("Markdown active content is rejected", () => {
  validateMarkdown("# Cours\n\nUn contenu pédagogique normal.");
  assertThrows(() => validateMarkdown("<script>alert(1)</script>"));
  assertThrows(() => validateMarkdown("[Piège](javascript:alert(1))"));
  assertThrows(() => validateMarkdown("<img src=x onerror=alert(1)>") );
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
