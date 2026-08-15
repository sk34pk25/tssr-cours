/** Repository-level lossless loading check. Run with: deno run --allow-read scripts/verify_course_editor.ts */
import {
  buildCourseEditorModel,
  buildCourseModification,
  type CourseEditorSnapshot,
  resolveCourseEditorPlan,
} from "../supabase/functions/_shared/course-editor.ts";

async function filesBelow(directory: string): Promise<string[]> {
  const output: string[] = [];
  for await (const entry of Deno.readDir(directory)) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory) output.push(...await filesBelow(path));
    else if (entry.isFile) output.push(path);
  }
  return output;
}

function sha(index: number): string {
  return index.toString(16).padStart(40, "0").slice(-40);
}

const mkdocsContent = await Deno.readTextFile("mkdocs.yml");
const glossaryContent = await Deno.readTextFile("data/glossaire.json");
const curriculumContent = await Deno.readTextFile("docs/parcours/index.md");
const glossary = JSON.parse(glossaryContent) as {
  courses: Array<{ id: string; name: string; path: string }>;
};
const repositoryPaths = [
  "mkdocs.yml",
  "data/glossaire.json",
  ...await filesBelow("docs"),
];
const files = repositoryPaths.map((path, index) => ({
  path,
  sha: sha(index + 1),
  size: Deno.statSync(path).size,
}));
const fileMap = new Map(files.map((file) => [file.path, file]));

for (const course of glossary.courses) {
  const locator = `docs/${course.path}`;
  const plan = resolveCourseEditorPlan(locator, mkdocsContent, glossaryContent);
  const documents: CourseEditorSnapshot["documents"] = {};
  for (const path of plan.documentPaths) {
    const file = fileMap.get(path);
    if (!file) {
      throw new Error(`${course.name}: fichier déclaré mais absent : ${path}`);
    }
    documents[path] = {
      content: await Deno.readTextFile(path),
      fileSha: file.sha,
    };
  }
  const snapshot: CourseEditorSnapshot = {
    commitSha: "f".repeat(40),
    files,
    mkdocs: { content: mkdocsContent, fileSha: fileMap.get("mkdocs.yml")!.sha },
    glossary: {
      content: glossaryContent,
      fileSha: fileMap.get("data/glossaire.json")!.sha,
    },
    curriculum: {
      content: curriculumContent,
      fileSha: fileMap.get("docs/parcours/index.md")!.sha,
    },
    documents,
  };
  const editor = buildCourseEditorModel(plan, snapshot);
  try {
    const unexpected = buildCourseModification(
      { ...editor, baseCommitSha: snapshot.commitSha },
      plan,
      snapshot,
    );
    const sampleDiff = unexpected.files[0];
    const firstDifference = sampleDiff
      ? [...String(sampleDiff.new_content)].findIndex((character, index) =>
        character !== String(sampleDiff.old_content)[index]
      )
      : -1;
    throw new Error(
      `${course.name}: le round-trip inchangé produit un diff (${
        unexpected.files.map((file) => file.file_path).join(", ")
      }; exemple index ${firstDifference}: ${
        JSON.stringify(
          String(sampleDiff?.old_content).slice(
            Math.max(0, firstDifference - 80),
            firstDifference + 160,
          ),
        )
      } -> ${
        JSON.stringify(
          String(sampleDiff?.new_content).slice(
            Math.max(0, firstDifference - 80),
            firstDifference + 160,
          ),
        )
      }).`,
    );
  } catch (error) {
    if (
      !(error instanceof Error) ||
      !error.message.includes("Aucune modification")
    ) throw error;
  }
  const draft = editor.draft as Record<string, unknown>;
  console.log(JSON.stringify({
    course: course.name,
    documents: plan.documentPaths.length,
    modules: (draft.modules as unknown[]).length,
    exercises: (draft.exercises as unknown[]).length,
    labs: (draft.labs as unknown[]).length,
    quizzes: (draft.quizzes as unknown[]).length,
    glossary: (draft.glossaryEntries as unknown[]).length,
    files: (editor.attachments as unknown[]).length,
  }));
}
