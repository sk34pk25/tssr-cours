import { assertEquals, assertMatch, assertThrows } from "jsr:@std/assert@1.0.18";
import { buildCourseProposal, slugifyCourse } from "./course.ts";
import type { CourseRepositorySnapshot } from "./course.ts";

const sha = "a".repeat(40);

function source(content: string, fileSha = sha) {
  return { content, fileSha };
}

function snapshot(extraPaths: string[] = []): CourseRepositorySnapshot {
  const mkdocs = `site_name: TSSR\nsite_description: Portail\ntheme:\n  name: material\nnav:\n  - Accueil: index.md\n  - Cours:\n      - Existant:\n          - Présentation: modules/01-existant/index.md\n  - Travaux pratiques:\n      - Présentation: tp/index.md\n  - Exercices:\n      - Présentation: exercices/index.md\n  - Kahoot:\n      - Tous: kahoot/bibliotheque.md\n`;
  const glossary = JSON.stringify({
    schemaVersion: 1,
    courses: [{ id: "existant", name: "Existant", shortName: "Existant", path: "modules/01-existant/index.md" }],
    modules: [{ id: "e01", courseId: "existant", name: "Présentation", shortName: "Présentation", path: "modules/01-existant/index.md" }],
    entries: [{ id: "dhcp", term: "DHCP", fullName: "Dynamic Host Configuration Protocol", definition: "Service réseau qui distribue automatiquement une configuration IP aux clients.", aliases: [], keywords: ["réseau"], refs: ["existant:e01"] }],
  }, null, 2) + "\n";
  const paths = [
    "mkdocs.yml", "data/glossaire.json", "docs/index.md", "docs/index-general.md", "docs/parcours/index.md",
    "docs/kahoot/bibliotheque.md", "docs/modules/01-existant/index.md", "docs/tp/index.md", "docs/exercices/index.md",
    ...extraPaths,
  ];
  return {
    commitSha: "b".repeat(40),
    files: paths.map((path, index) => ({ path, sha: index.toString(16).padStart(40, "0") })),
    mkdocs: source(mkdocs, "1".repeat(40)),
    glossary: source(glossary, "2".repeat(40)),
    kahoot: source("# Kahoot\n\nBibliothèque.\n", "3".repeat(40)),
    home: source('<span class="tssr-hero__metric" data-tssr-metric="modules"><strong>1</strong><span>modules et ateliers</span></span>\n', "4".repeat(40)),
    generalIndex: source("# Index général\n", "5".repeat(40)),
    curriculum: source("# Parcours\n", "6".repeat(40)),
  };
}

Deno.test("course slug generation handles accents, punctuation and an empty title", () => {
  assertEquals(slugifyCourse("Administration Windows avancée (N2)"), "administration-windows-avancee-n2");
  assertEquals(slugifyCourse("../../"), "nouveau-cours");
});

Deno.test("a complete course becomes one validated, atomic multi-file proposal", () => {
  const png = btoa(String.fromCharCode(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0));
  const pdf = btoa("%PDF-1.4\n%%EOF\n");
  const result = buildCourseProposal({
    general: {
      title: "Administration Windows avancée",
      shortDescription: "Cours de test complet.",
      description: "## Présentation\n\nUn contenu **Markdown** sécurisé.",
      style: "information",
      icon: "microsoft-windows",
      source: "https://learn.microsoft.com/fr-fr/windows-server/",
      coverAttachmentId: "cover",
      objectives: ["Administrer Windows", "Vérifier les résultats"],
      includeInPath: true,
    },
    modules: [
      { title: "Services Windows", content: "```powershell\nGet-Service\n```", pages: [{ title: "Procédure", type: "procedure", content: "| Étape | Contrôle |\n| --- | --- |\n| 1 | OK |" }] },
      { title: "Sécurité", content: "```mermaid\nflowchart LR\nA --> B\n```", pages: [] },
    ],
    exercises: [{ title: "Contrôle des services", instructions: "Lister les services.", solution: "Utiliser `Get-Service`." }],
    labs: [{ title: "Durcissement", steps: "1. Créer un instantané.\n2. Appliquer la stratégie.", correction: "Vérifier avec `gpresult`." }],
    quizzes: [{ title: "Windows — Administration", kind: "kahoot", url: "https://create.kahoot.it/share/test/123", questions: [{ question: "Quel outil ?", answers: ["PowerShell", "Paint"], correctAnswer: "PowerShell" }] }],
    glossaryEntries: [
      { term: "WinRM", definition: "Service de gestion distante de Windows utilisé pour administrer des machines de façon sécurisée." },
      { term: "GPMC", definition: "Console Microsoft utilisée pour créer, lier et administrer les objets de stratégie de groupe." },
      { term: "JEA", definition: "Mécanisme PowerShell qui limite précisément les commandes accessibles durant une session distante." },
    ],
    existingGlossary: [{ id: "dhcp", moduleIndex: 0 }],
    resources: [{ title: "Documentation Microsoft", url: "https://learn.microsoft.com/fr-fr/windows-server/", moduleIndex: 0 }],
    attachments: [
      { id: "cover", name: "../../couverture.png", mediaType: "image/png", content: png, alt: "Illustration Windows" },
      { id: "support", name: "support.pdf", mediaType: "application/pdf", content: pdf, title: "Support du cours", moduleIndex: 0, pageIndex: 0 },
    ],
  }, snapshot());

  assertEquals(result.summary.modules, 2);
  assertEquals(result.summary.pages, 1);
  assertEquals(result.summary.glossary_entries, 3);
  assertMatch(result.coursePath, /^docs\/modules\/02-administration-windows-avancee\/index\.md$/);
  assertEquals(result.files.some((file) => file.file_path.endsWith("support.pdf") && file.content_encoding === "base64"), true);
  assertEquals(result.files.some((file) => file.file_path.includes("..")), false);
  const course = result.files.find((file) => file.file_path === result.coursePath)?.new_content || "";
  assertMatch(course, /:material-microsoft-windows:/);
  assertMatch(course, /tssr-course-cover/);
  assertMatch(course, /tssr-course-intro--information/);
  assertMatch(course, /ouvrir la source officielle/);
  assertMatch(course, /Exercices associés/);
  const page = result.files.find((file) => file.file_path.includes("page-01-01-procedure.md"))?.new_content || "";
  assertMatch(page, /data-tssr-pdf-src=/);
  const module = result.files.find((file) => file.file_path.includes("module-01-services-windows.md"))?.new_content || "";
  assertMatch(module, /Documentation Microsoft/);
  const navigation = result.files.find((file) => file.file_path === "mkdocs.yml")?.new_content || "";
  assertMatch(navigation, /Administration Windows avancée/);
  const glossary = JSON.parse(result.files.find((file) => file.file_path === "data/glossaire.json")?.new_content || "{}");
  assertEquals(glossary.courses.some((item: { id: string }) => item.id === "administration-windows-avancee"), true);
  assertEquals(glossary.entries.find((item: { id: string }) => item.id === "dhcp").refs.length, 2);
});

Deno.test("an almost empty course receives safe defaults and no invalid optional file", () => {
  const result = buildCourseProposal({}, snapshot());
  assertEquals(result.summary.title, "Nouveau cours");
  assertEquals(result.summary.modules, 0);
  assertEquals(result.files.some((file) => file.file_path === "data/glossaire.json"), false);
  assertEquals(result.files.some((file) => file.file_path === "docs/kahoot/bibliotheque.md"), false);
  assertEquals(result.files.some((file) => file.file_path === result.coursePath), true);
});

Deno.test("active content, unsafe Kahoot URLs and fake PDFs are rejected", () => {
  assertThrows(() => buildCourseProposal({ general: { description: "<script>alert(1)</script>" } }, snapshot()));
  assertThrows(() => buildCourseProposal({ quizzes: [{ kind: "kahoot", url: "https://example.com/faux" }] }, snapshot()));
  assertThrows(() => buildCourseProposal({ attachments: [{ name: "cours.pdf", mediaType: "application/pdf", content: btoa("not a pdf") }] }, snapshot()));
  const pdf = btoa("%PDF-1.4\n%%EOF\n");
  assertThrows(() => buildCourseProposal({
    modules: [{ title: "Sans page", pages: [] }],
    attachments: [{ name: "cours.pdf", mediaType: "application/pdf", content: pdf, moduleIndex: 0, pageIndex: 0 }],
  }, snapshot()));
});

Deno.test("concurrent-looking course names receive collision-resistant generated paths", () => {
  const result = buildCourseProposal({ general: { title: "Nouveau cours" } }, snapshot([
    "docs/modules/02-nouveau-cours/index.md",
  ]));
  assertMatch(result.coursePath, /^docs\/modules\/03-nouveau-cours-2\/index\.md$/);
});
