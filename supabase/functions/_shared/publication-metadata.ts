/** Untrusted display metadata must never become a second Git header/trailer. */
const CONTROLS = /[\u0000-\u001f\u007f-\u009f\u200b-\u200f\u2028-\u202e\u2060-\u206f\ufeff]/u;
export const CHANGE_ID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
export const COMMIT_SHA = /^[0-9a-f]{40}$/;

export function singleLine(value: unknown, label: string, maximum: number, minimum = 1): string {
  if (typeof value !== "string" || CONTROLS.test(value)) {
    throw new Error(`${label} : caractères de contrôle interdits.`);
  }
  const result = value.trim();
  if (result.length < minimum || result.length > maximum) {
    throw new Error(`${label} doit contenir entre ${minimum} et ${maximum} caractères.`);
  }
  return result;
}

export function changeRequestId(value: unknown): string {
  if (typeof value !== "string" || !CHANGE_ID.test(value)) throw new Error("Identifiant de proposition invalide.");
  return value;
}

export function commitSha(value: unknown): string {
  if (typeof value !== "string" || !COMMIT_SHA.test(value)) throw new Error("SHA de publication invalide.");
  return value;
}

export function buildCommitMessage(
  request: { id: string; title: string; author_display_name: string },
  approvers: string[],
): string {
  const id = changeRequestId(request.id);
  const title = singleLine(request.title, "Le titre", 160, 3);
  const author = singleLine(request.author_display_name, "Le nom", 100);
  const names = approvers.map((name) => singleLine(name, "Le nom du validateur", 100));
  return [
    `docs: apply approved change #${id.slice(0, 8)}`, "",
    `Approved change: ${title}`, `Author: ${author}`, `Approved by: ${names.join(", ")}`,
    "", `Change-Request-ID: ${id}`,
  ].join("\n");
}
