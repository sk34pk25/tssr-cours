import policy from "./credential-policy.json" with { type: "json" };

// Recognition, not proof that an arbitrary string is or is not a secret.
// Shared policy also consumed by the local Python ingestion validator.
const signatures = policy.signatures.map(pattern => new RegExp(pattern, "i"));
const values = policy.values.map(pattern => new RegExp(pattern, "gi"));
const placeholder = new RegExp(policy.placeholder, "i");
const entities: Record<string, string> = policy.entities;
const rejection = "Proposition refusée : credential ou secret reconnaissable. Utilisez un placeholder explicite.";

export function containsCredential(text: string): boolean {
  let normalized = text.normalize("NFKC");
  // Bounded decoding of common rendered/link representations, never evaluation.
  for (let pass = 0; pass < 2; pass++) {
    normalized = normalized
      .replace(/&#(x[0-9a-f]+|[0-9]+);/gi, (_, code: string) =>
        String.fromCodePoint(Math.min(parseInt(code.replace(/^x/i, ""), /^x/i.test(code) ? 16 : 10), 0x10ffff)))
      .replace(/&([a-z]+);/gi, (match, name: string) => entities[name.toLowerCase()] ?? match)
      .replace(/%([0-7][0-9a-f])/gi, (_, code: string) => String.fromCharCode(parseInt(code, 16)));
  }
  if (signatures.some(pattern => pattern.test(normalized))) return true;
  for (const pattern of values) {
    for (const match of normalized.matchAll(pattern)) {
      const value = match.slice(1).find(part => part !== undefined)?.trim() ?? "";
      if (value && !placeholder.test(value)) return true;
    }
  }
  return false;
}

/** Scan submitted text and structured credential fields without logging values.
 * Call only for text-only AGENT payloads; binary proposals are rejected first.
 * Iterative traversal avoids recursion on attacker-controlled JSON nesting.
 */
export function assertNoCredentials(payload: unknown): void {
  const pending: Array<[string, unknown]> = [["", payload]];
  let nodes = 0;
  while (pending.length) {
    if (++nodes > 100_000) throw new Error("Proposition trop complexe.");
    const [key, value] = pending.pop()!;
    if (containsCredential(key)) throw new Error(rejection);
    if (typeof value === "string" || typeof value === "number") {
      // Only synthesize an assignment for credential field names. Wrapping
      // arbitrary Markdown in JSON would introduce backslashes and reinterpret
      // legitimate quoted examples such as password="" as secret values.
      const credentialKey = containsCredential(`${key}=credential-field-probe`);
      if (containsCredential(String(value)) || (credentialKey && containsCredential(`${key}=${JSON.stringify(value)}`))) {
        throw new Error(rejection);
      }
    } else if (value && typeof value === "object") {
      for (const entry of Object.entries(value)) pending.push(entry);
    }
  }
}
