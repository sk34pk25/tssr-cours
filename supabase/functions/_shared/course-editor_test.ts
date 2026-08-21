import {
  assertEquals,
  assertMatch,
  assertThrows,
} from "jsr:@std/assert@1.0.18";
import {
  buildCourseEditorModel,
  buildCourseModification,
  type CourseEditorSnapshot,
  resolveCourseEditorPlan,
} from "./course-editor.ts";

const sha = (character: string) => character.repeat(40);

function fixture() {
  const mkdocs = `site_name: TSSR
theme:
  name: material
nav:
  - Accueil: index.md
  - Cours:
      - Bases des réseaux:
          - Présentation: modules/01-bases-reseaux/index.md
          - Module 01 — OSI: modules/01-bases-reseaux/module-01-osi.md
  - Travaux pratiques:
      - Présentation: tp/index.md
      - Bases des réseaux:
          - Module 01 — OSI:
              - Présentation: tp/reseaux/module-01/index.md
              - Énoncés: tp/reseaux/module-01/enonces.md
              - Corrections: tp/reseaux/module-01/corrections.md
  - Exercices:
      - Présentation: exercices/index.md
      - Bases des réseaux: exercices/reseaux.md
  - Kahoot:
      - Tous les Kahoots: kahoot/bibliotheque.md
      - Bases des réseaux: kahoot/reseaux.md
`;
  const glossaryObject = {
    schemaVersion: 1,
    courses: [{
      id: "reseaux",
      name: "Bases des réseaux",
      shortName: "Réseaux",
      path: "modules/01-bases-reseaux/index.md",
    }],
    modules: [
      {
        id: "r00",
        courseId: "reseaux",
        name: "Présentation",
        shortName: "Présentation",
        path: "modules/01-bases-reseaux/index.md",
      },
      {
        id: "r01",
        courseId: "reseaux",
        name: "Module 01 — OSI",
        shortName: "M01 · OSI",
        path: "modules/01-bases-reseaux/module-01-osi.md",
      },
    ],
    entries: [{
      id: "osi",
      term: "OSI",
      fullName: "Open Systems Interconnection",
      definition: "Modèle réseau structuré en sept couches complémentaires.",
      aliases: [],
      keywords: ["réseau"],
      refs: ["reseaux:r01"],
    }],
  };
  const glossary = JSON.stringify(glossaryObject, null, 2) + "\n";
  const curriculum =
    '# Parcours\n\n<!-- TSSR-COURSE-CREATOR:bases-reseaux:START -->\n<section class="tssr-path-contribution" markdown>\n\n## Bases des réseaux\n\n**Période à préciser**\n\nRésumé court.\n\n[Ouvrir ce cours](../modules/01-bases-reseaux/){ .md-button }\n\n</section>\n<!-- TSSR-COURSE-CREATOR:bases-reseaux:END -->\n';
  const documents: Record<string, { content: string; fileSha: string }> = {
    "docs/modules/01-bases-reseaux/index.md": {
      content:
        '# :material-lan: Bases des réseaux\n\n![Schéma](../../assets/images/cours/reseaux/osi.png){ .tssr-course-cover }\n\n*Fondamentaux*\n\nRésumé court.\n\n**Catégorie :** Réseaux  \n\n<div class="tssr-course-intro tssr-course-intro--information" markdown="1">\n\nDescription longue.\n\n</div>\n\n## Objectifs\n\n- Comprendre OSI\n',
      fileSha: sha("1"),
    },
    "docs/modules/01-bases-reseaux/module-01-osi.md": {
      content:
        '# Module 01 — OSI\n\n!!! note "Repère"\n    Contenu intact.\n\n![Schéma](../../assets/images/cours/reseaux/osi.png)\n',
      fileSha: sha("2"),
    },
    "docs/tp/reseaux/module-01/index.md": {
      content: "# TP OSI\n\nPrésentation.\n",
      fileSha: sha("3"),
    },
    "docs/tp/reseaux/module-01/enonces.md": {
      content: "# Énoncés OSI\n\n1. Observer.\n",
      fileSha: sha("4"),
    },
    "docs/tp/reseaux/module-01/corrections.md": {
      content: "# Corrections OSI\n\nRésultat.\n",
      fileSha: sha("5"),
    },
    "docs/exercices/reseaux.md": {
      content: "# Exercices réseaux\n\nQuestion.\n",
      fileSha: sha("6"),
    },
    "docs/kahoot/reseaux.md": {
      content:
        "# Kahoot réseaux\n\n[Jouer](https://create.kahoot.it/share/test/123)\n",
      fileSha: sha("7"),
    },
  };
  const files = [
    { path: "mkdocs.yml", sha: sha("a") },
    { path: "data/glossaire.json", sha: sha("b") },
    ...Object.entries(documents).map(([path, source]) => ({
      path,
      sha: source.fileSha,
    })),
    {
      path: "docs/assets/images/cours/reseaux/osi.png",
      sha: sha("c"),
      size: 1024,
    },
    { path: "docs/index.md", sha: sha("d") },
    { path: "docs/tp/index.md", sha: sha("e") },
    { path: "docs/exercices/index.md", sha: sha("f") },
    { path: "docs/kahoot/bibliotheque.md", sha: sha("0") },
    { path: "docs/parcours/index.md", sha: sha("8") },
  ];
  const snapshot: CourseEditorSnapshot = {
    commitSha: sha("9"),
    files,
    mkdocs: { content: mkdocs, fileSha: sha("a") },
    glossary: { content: glossary, fileSha: sha("b") },
    curriculum: { content: curriculum, fileSha: sha("8") },
    documents,
  };
  const plan = resolveCourseEditorPlan(
    "docs/modules/01-bases-reseaux/module-01-osi.md",
    mkdocs,
    glossary,
  );
  const editor = buildCourseEditorModel(plan, snapshot);
  return { plan, snapshot, editor };
}

Deno.test("the complete loader resolves every declared course family and keeps raw Markdown", () => {
  const { plan, editor } = fixture();
  const draft = editor.draft as Record<string, unknown>;
  assertEquals(plan.documentPaths.length, 7);
  assertEquals((draft.modules as unknown[]).length, 1);
  assertEquals((draft.exercises as unknown[]).length, 1);
  assertEquals((draft.labs as unknown[]).length, 1);
  assertEquals((draft.quizzes as unknown[]).length, 1);
  assertEquals((draft.glossaryEntries as unknown[]).length, 1);
  assertEquals((editor.attachments as unknown[]).length, 1);
  assertEquals(
    (draft.general as Record<string, unknown>).shortDescription,
    "Résumé court.",
  );
  assertEquals(
    (draft.general as Record<string, unknown>).coverAttachmentId,
    (editor.attachments as Record<string, unknown>[])[0].id,
  );
  assertEquals(
    (draft.general as Record<string, unknown>).includeInPath,
    true,
  );
  assertMatch(
    String((draft.modules as Record<string, unknown>[])[0].content),
    /!!! note/,
  );
});

Deno.test("an unchanged edit is rejected and advanced Markdown survives a targeted change", () => {
  const { plan, snapshot, editor } = fixture();
  assertThrows(
    () =>
      buildCourseModification(
        { ...(editor as object), baseCommitSha: snapshot.commitSha },
        plan,
        snapshot,
      ),
    Error,
    "Aucune modification",
  );
  const draft = structuredClone(editor.draft) as Record<string, unknown>;
  const module = (draft.modules as Record<string, unknown>[])[0];
  module.content = String(module.content).replace(
    "Contenu intact.",
    "Contenu modifié.",
  );
  const built = buildCourseModification(
    {
      meta: editor.meta,
      baseCommitSha: snapshot.commitSha,
      draft,
      attachments: editor.attachments,
    },
    plan,
    snapshot,
  );
  const changed = built.files.find((file) =>
    file.file_path.endsWith("module-01-osi.md")
  );
  assertMatch(changed?.new_content || "", /!!! note/);
  assertMatch(changed?.new_content || "", /Contenu modifié/);
  assertEquals(
    built.files.some((file) => file.file_path === "mkdocs.yml"),
    false,
  );
});

Deno.test("adding and removing modules creates an explicit navigation and file diff", () => {
  const { plan, snapshot, editor } = fixture();
  const draft = structuredClone(editor.draft) as Record<string, unknown>;
  const current = (draft.modules as Record<string, unknown>[])[0];
  draft.modules = [{
    clientId: "module-new",
    title: "IPv4",
    subtitle: "",
    description: "",
    content: "# IPv4\n\nCIDR.\n",
    pages: [],
  }, current];
  const added = buildCourseModification(
    {
      meta: editor.meta,
      baseCommitSha: snapshot.commitSha,
      draft,
      attachments: editor.attachments,
    },
    plan,
    snapshot,
  );
  assertEquals(
    added.files.some((file) =>
      file.change_type === "create" &&
      /module-01-ipv4\.md$/.test(file.file_path)
    ),
    true,
  );
  assertEquals(
    added.files.some((file) => file.file_path === "mkdocs.yml"),
    true,
  );

  const removedDraft = structuredClone(editor.draft) as Record<string, unknown>;
  removedDraft.modules = [];
  const removed = buildCourseModification(
    {
      meta: editor.meta,
      baseCommitSha: snapshot.commitSha,
      draft: removedDraft,
      attachments: editor.attachments,
    },
    plan,
    snapshot,
  );
  assertEquals(
    removed.files.some((file) =>
      file.change_type === "delete" &&
      file.file_path.endsWith("module-01-osi.md")
    ),
    true,
  );
});

Deno.test("stale editor snapshots and forged course identities are not silently reusable", () => {
  const { plan, snapshot, editor } = fixture();
  const draft = structuredClone(editor.draft) as Record<string, unknown>;
  (draft.general as Record<string, unknown>).title = "Titre modifié";
  assertThrows(
    () =>
      buildCourseModification(
        {
          meta: editor.meta,
          baseCommitSha: sha("8"),
          draft,
          attachments: editor.attachments,
        },
        plan,
        snapshot,
      ),
    Error,
    "évolué",
  );
});

Deno.test("structured general fields and new related activities become reviewable files", () => {
  const { plan, snapshot, editor } = fixture();
  const draft = structuredClone(editor.draft) as Record<string, unknown>;
  (draft.general as Record<string, unknown>).category = "Infrastructure";
  (draft.general as Record<string, unknown>).shortDescription =
    "Résumé court actualisé.";
  (draft.general as Record<string, unknown>).style = "";
  (draft.exercises as Record<string, unknown>[]).push({
    clientId: "exercise-new",
    title: "Diagnostic IPv4",
    instructions: "1. Lancer `ipconfig`.",
    hint: "Observer la passerelle.",
    solution: "La route par défaut doit être présente.",
    difficulty: "debutant",
    duration: "15 min",
    type: "pratique",
    tags: ["ipv4"],
    moduleIndex: 0,
  });
  const built = buildCourseModification(
    {
      meta: editor.meta,
      baseCommitSha: snapshot.commitSha,
      draft,
      attachments: editor.attachments,
    },
    plan,
    snapshot,
  );
  const overview =
    built.files.find((file) => file.file_path === plan.coursePath)
      ?.new_content || "";
  const exercise = built.files.find((file) =>
    file.change_type === "create" &&
    file.file_path.startsWith("docs/exercices/")
  )?.new_content || "";
  const navigation =
    built.files.find((file) => file.file_path === "mkdocs.yml")?.new_content ||
    "";
  const curriculum =
    built.files.find((file) => file.file_path === "docs/parcours/index.md")
      ?.new_content || "";
  assertMatch(overview, /Résumé court actualisé\./);
  assertEquals(overview.includes("Résumé court.\n\n"), false);
  assertMatch(overview, /\*\*Catégorie :\*\* Infrastructure/);
  assertEquals(overview.includes("tssr-course-intro--information"), false);
  assertMatch(overview, /Description longue\./);
  assertMatch(exercise, /Diagnostic IPv4/);
  assertMatch(exercise, /\?\?\? success "Correction"/);
  assertMatch(navigation, /Diagnostic IPv4/);
  assertMatch(curriculum, /Résumé court actualisé\./);
});

Deno.test("removing an existing attachment dissociates its references without deleting a potentially shared blob", () => {
  const { plan, snapshot, editor } = fixture();
  const draft = structuredClone(editor.draft) as Record<string, unknown>;
  (draft.general as Record<string, unknown>).coverAttachmentId = "";
  const built = buildCourseModification(
    {
      meta: editor.meta,
      baseCommitSha: snapshot.commitSha,
      draft,
      attachments: [],
    },
    plan,
    snapshot,
  );
  const module = built.files.find((file) =>
    file.file_path.endsWith("module-01-osi.md")
  );
  assertEquals(module?.change_type, "update");
  assertEquals(String(module?.new_content).includes("osi.png"), false);
  assertEquals(
    built.files.some((file) =>
      file.file_path.endsWith("osi.png") && file.change_type === "delete"
    ),
    false,
  );
});

Deno.test("a PDF added while editing uses the same safe viewer component as course creation", () => {
  const { plan, snapshot, editor } = fixture();
  const attachments = [...editor.attachments as Record<string, unknown>[], {
    id: "pdf-new",
    kind: "new",
    name: "diagnostic-reseau.pdf",
    mediaType: "application/pdf",
    content: btoa("%PDF-1.7\nfixture"),
    title: "Diagnostic réseau",
    alt: "",
    caption: "",
    moduleIndex: 0,
    pageIndex: -1,
  }];
  const built = buildCourseModification(
    {
      meta: editor.meta,
      baseCommitSha: snapshot.commitSha,
      draft: editor.draft,
      attachments,
    },
    plan,
    snapshot,
  );
  const module = built.files.find((file) =>
    file.file_path.endsWith("module-01-osi.md")
  );
  assertMatch(String(module?.new_content), /class="tssr-pdf-embed"/);
  assertMatch(String(module?.new_content), /data-tssr-pdf-src=/);
  assertMatch(String(module?.new_content), /Ouvrir le PDF/);
  assertMatch(String(module?.new_content), /Télécharger/);
  assertEquals(
    built.files.some((file) =>
      file.change_type === "create" && file.file_path.endsWith(".pdf")
    ),
    true,
  );
});

Deno.test("an existing PDF viewer is renamed and removed as one atomic component", () => {
  const { plan, snapshot } = fixture();
  const modulePath = "docs/modules/01-bases-reseaux/module-01-osi.md";
  const pdfPath = "docs/assets/resources/cours/reseaux/diagnostic.pdf";
  const component = `\n<div class="tssr-pdf-embed" data-tssr-pdf-src="../../assets/resources/cours/reseaux/diagnostic.pdf" data-tssr-pdf-title="Diagnostic initial" markdown>\n  <strong>Diagnostic initial</strong>\n\n  [Ouvrir le PDF](../../assets/resources/cours/reseaux/diagnostic.pdf){ target="_blank" rel="noopener noreferrer" } · [Télécharger](../../assets/resources/cours/reseaux/diagnostic.pdf){ download }\n\n  <span class="tssr-pdf-embed__fallback">Utilisez les liens.</span>\n</div>\n`;
  snapshot.documents[modulePath].content += component;
  snapshot.files.push({ path: pdfPath, sha: sha("e"), size: 2048 });
  const editor = buildCourseEditorModel(plan, snapshot);
  const pdf = (editor.attachments as Record<string, unknown>[]).find((item) =>
    item.path === pdfPath
  );
  assertEquals(pdf?.title, "Diagnostic initial");
  assertEquals((pdf?.references as unknown[]).length, 1);

  const renamedAttachments = (editor.attachments as Record<string, unknown>[]).map((item) =>
    item.path === pdfPath ? { ...item, title: "Diagnostic actualisé" } : item
  );
  const renamed = buildCourseModification(
    { meta: editor.meta, baseCommitSha: snapshot.commitSha, draft: editor.draft, attachments: renamedAttachments },
    plan,
    snapshot,
  );
  const renamedModule = String(renamed.files.find((file) => file.file_path === modulePath)?.new_content || "");
  assertMatch(renamedModule, /data-tssr-pdf-title="Diagnostic actualisé"/);
  assertMatch(renamedModule, /<strong>Diagnostic actualisé<\/strong>/);
  assertEquals((renamedModule.match(/class="tssr-pdf-embed"/g) || []).length, 1);

  const withoutPdf = (editor.attachments as Record<string, unknown>[]).filter((item) => item.path !== pdfPath);
  const removed = buildCourseModification(
    { meta: editor.meta, baseCommitSha: snapshot.commitSha, draft: editor.draft, attachments: withoutPdf },
    plan,
    snapshot,
  );
  const removedModule = String(removed.files.find((file) => file.file_path === modulePath)?.new_content || "");
  assertEquals(removedModule.includes("tssr-pdf-embed"), false);
  assertEquals(removedModule.includes("diagnostic.pdf"), false);
});

Deno.test("an existing cover can be removed without reuploading or deleting its image", () => {
  const { plan, snapshot, editor } = fixture();
  const draft = structuredClone(editor.draft) as Record<string, unknown>;
  (draft.general as Record<string, unknown>).coverAttachmentId = "";
  const built = buildCourseModification(
    {
      meta: editor.meta,
      baseCommitSha: snapshot.commitSha,
      draft,
      attachments: editor.attachments,
    },
    plan,
    snapshot,
  );
  const overview = built.files.find((file) =>
    file.file_path === plan.coursePath
  );
  assertEquals(overview?.change_type, "update");
  assertEquals(
    String(overview?.new_content).includes(".tssr-course-cover"),
    false,
  );
  assertMatch(String(overview?.new_content), /osi\.png/);
  assertEquals(
    built.files.some((file) =>
      file.file_path.endsWith("osi.png") && file.change_type === "delete"
    ),
    false,
  );
});

Deno.test("the chronological path relation is loaded and removed only through the reviewed proposal", () => {
  const { plan, snapshot, editor } = fixture();
  const draft = structuredClone(editor.draft) as Record<string, unknown>;
  (draft.general as Record<string, unknown>).includeInPath = false;
  const built = buildCourseModification(
    {
      meta: editor.meta,
      baseCommitSha: snapshot.commitSha,
      draft,
      attachments: editor.attachments,
    },
    plan,
    snapshot,
  );
  const curriculum = built.files.find((file) =>
    file.file_path === "docs/parcours/index.md"
  );
  assertEquals(curriculum?.change_type, "update");
  assertEquals(
    String(curriculum?.new_content).includes(
      "TSSR-COURSE-CREATOR:bases-reseaux",
    ),
    false,
  );
});
