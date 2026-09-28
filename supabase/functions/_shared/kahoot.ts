/** Editorial metadata only. No Kahoot API, credentials, sessions or publication authority. */
type RecordValue = Record<string, unknown>;
export const MAX_KAHOOT_QUESTIONS = 20;
const marker = /<!-- TSSR-KAHOOT-V1:([^\n]*?) -->\n?/g;

export function readKahoot(content: string): RecordValue | null {
  const matches = [...content.matchAll(marker)];
  if (!matches.length) {
    if (content.includes("TSSR-KAHOOT-V1:")) throw new Error("Marqueur Kahoot mal formé.");
    return null;
  }
  if (matches.length !== 1) throw new Error("Une page Kahoot doit avoir une seule identité.");
  const item = JSON.parse(decodeURIComponent(matches[0][1]));
  const fields = ["schemaVersion", "courseId", "moduleId", "title", "questionCount", "url", "soloAvailable", "liveAvailable", "provenance", "state", "questions"];
  if (!item || typeof item !== "object" || Array.isArray(item) || Object.keys(item).length !== fields.length || fields.some((f) => !(f in item)) || item.schemaVersion !== 1) throw new Error("Métadonnées Kahoot invalides.");
  if (!/^modules\/[a-z0-9/-]+\/index\.md$/.test(item.courseId) ||
    !/^modules\/[a-z0-9/-]+\.md$/.test(item.moduleId) || item.courseId === item.moduleId ||
    item.courseId.slice(0, item.courseId.lastIndexOf("/")) !== item.moduleId.slice(0, item.moduleId.lastIndexOf("/"))) throw new Error("Relations Kahoot invalides.");
  if (typeof item.questionCount !== "number" || typeof item.soloAvailable !== "boolean" || typeof item.liveAvailable !== "boolean" || !Array.isArray(item.questions) ||
    item.state !== (item.url ? "linked" : "prepared") || (!item.url && (item.soloAvailable || item.liveAvailable))) throw new Error("État Kahoot incohérent.");
  validateKahoot({ ...item, kind: "kahoot", moduleIndex: 0 });
  return item;
}

export function officialKahootUrl(value: unknown): string {
  const url = new URL(String(value));
  if (url.protocol !== "https:" || url.username || url.password || url.port ||
    !/^(?:create\.)?kahoot\.(?:it|com)$/.test(url.hostname) ||
    !/^\/(?:share|details)\/[a-zA-Z0-9_/-]+$/.test(url.pathname) || url.search || url.hash) {
    throw new Error("Utilisez un lien officiel de partage du quiz, sans PIN ni lien de session.");
  }
  return url.href;
}

export function validateKahoot(item: RecordValue, legacy = false): void {
  const questions = Array.isArray(item.questions) ? item.questions as RecordValue[] : [];
  if (questions.length > MAX_KAHOOT_QUESTIONS) throw new Error("Maximum 20 questions par module.");
  if (item.kind !== "kahoot") return;
  // Legacy pages remain byte-preserving until deliberately enriched. A URL alone
  // is not evidence of an empty quiz or of an available solo/live mode.
  if (legacy && !item.kahootVersion) return;
  if (typeof item.questionCount === "boolean") throw new Error("Nombre de questions invalide.");
  const count = item.questionCount === "" || item.questionCount == null
    ? questions.length : Number(item.questionCount);
  if (!Number.isInteger(count) || count < 1 || count > MAX_KAHOOT_QUESTIONS ||
    (questions.length && count !== questions.length)) throw new Error("Kahoot : 1 à 20 questions, nombre déclaré cohérent requis.");
  if (!Number.isInteger(Number(item.moduleIndex)) || Number(item.moduleIndex) < 0) throw new Error("Associez le Kahoot à un module.");
  if (!String(item.title || "").trim()) throw new Error("Titre Kahoot requis.");
  if (item.url) officialKahootUrl(item.url);
  if (!item.url && !questions.length) throw new Error("Un Kahoot nécessite un lien officiel ou des questions préparées.");
  if (!/^[ABCD]$/.test(String(item.provenance))) throw new Error("Provenance Kahoot A/B/C/D requise.");
  for (const question of questions) {
    if (!String(question.question || "").trim() || !String(question.source || "").trim() ||
      !/^[ABCD]$/.test(String(question.provenance))) throw new Error("Question et provenance sourcée requises.");
    const answers = question.answers;
    if (!Array.isArray(answers) || answers.length < 2 || answers.length > 4 ||
      answers.some((a) => typeof a !== "string" || !a.trim()) || new Set(answers).size !== answers.length || !answers.includes(question.correctAnswer)) {
      throw new Error("Question Kahoot : 2 à 4 réponses distinctes et réponse correcte requises.");
    }
    for (const value of [question.question, question.source, question.explanation || "", ...answers]) {
      if (typeof value !== "string" || value.length > 2_000) throw new Error("Champ de question Kahoot invalide.");
    }
  }
}

export function validateKahootSet(items: RecordValue[], moduleCount: number, legacyIds = new Set<string>()): void {
  const modules = new Set<number>();
  const urls = new Set<string>();
  for (const item of items) {
    const legacy = legacyIds.has(String(item.clientId)) && !item.kahootVersion;
    validateKahoot(item, legacy);
    if (item.kind !== "kahoot" || legacy) continue;
    const index = Number(item.moduleIndex);
    if (index >= moduleCount) throw new Error("Module du Kahoot introuvable.");
    if (modules.has(index)) throw new Error("Un seul Kahoot canonique par module (maximum 20 questions).");
    modules.add(index);
    if (item.url) {
      const identity = officialKahootUrl(item.url).replace(/\/$/, "").split("/").at(-1)!;
      if (urls.has(identity)) throw new Error("Kahoot dupliqué.");
      urls.add(identity);
    }
  }
}

export function writeKahoot(content: string, item: RecordValue, coursePath: string, modulePath: string): string {
  validateKahoot(item);
  const questionCount = Number(item.questionCount || (item.questions as unknown[])?.length);
  const meta = {
    schemaVersion: 1, courseId: coursePath.replace(/^docs\//, ""), moduleId: modulePath.replace(/^docs\//, ""),
    title: item.title, questionCount, url: item.url ? officialKahootUrl(item.url) : null,
    soloAvailable: item.soloAvailable === true && !!item.url,
    liveAvailable: item.liveAvailable === true && !!item.url,
    provenance: item.provenance, state: item.url ? "linked" : "prepared",
    questions: ((item.questions || []) as RecordValue[]).map((q) => ({
      question: q.question, answers: q.answers, correctAnswer: q.correctAnswer,
      explanation: q.explanation || "", source: q.source, provenance: q.provenance,
    })),
  };
  // Escape comment terminators and HTML; data is never executable markup.
  const json = encodeURIComponent(JSON.stringify(meta)).replaceAll("-", "%2D");
  return `<!-- TSSR-KAHOOT-V1:${json} -->\n${content.replace(marker, "")}`;
}
