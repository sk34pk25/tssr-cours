/** DB-owned identity, never JWT user_metadata or caller-supplied role. */
export interface ActorPolicy {
  actor_kind?: "HUMAN" | "AGENT";
  can_propose?: boolean;
  can_edit: boolean;
  role: "admin" | "member";
  status: string;
  must_change_password: boolean;
}

export function assertActorAction(profile: ActorPolicy, action: string): void {
  if (profile.actor_kind !== "AGENT") return;
  if (profile.status !== "active" || profile.must_change_password ||
    profile.role !== "member" || profile.can_edit || !profile.can_propose ||
    action !== "create") {
    throw new Error("Permission refusée : agent propose-only.");
  }
}

export async function agentSummary(
  summary: Record<string, unknown>, files: unknown, base: string,
): Promise<Record<string, unknown>> {
  const source = summary.source as Record<string, unknown> | undefined;
  if (!source || source.type !== "google_drive_read_only" ||
    source.rootId !== "1N73OtTF2TKxYUEO9X0_4NObnmEAugzZ1" ||
    typeof source.fileId !== "string" || !/^[\w-]{1,200}$/.test(source.fileId) ||
    typeof source.sha256 !== "string" || !/^[a-f0-9]{64}$/.test(source.sha256) ||
    typeof summary.idempotencyKey !== "string" || !/^[a-f0-9]{64}$/.test(summary.idempotencyKey)) {
    throw new Error("Provenance agent invalide.");
  }
  // Hash actual server-validated files, not the model's claimed fingerprint.
  const digest = await crypto.subtle.digest("SHA-256",
    new TextEncoder().encode(JSON.stringify([base, files])));
  const fingerprint = [...new Uint8Array(digest)].map(v => v.toString(16).padStart(2, "0")).join("");
  return { source: { type: source.type, rootId: source.rootId, fileId: source.fileId, sha256: source.sha256 },
    idempotencyKey: summary.idempotencyKey, proposalFingerprint: fingerprint,
    actorKind: "AGENT", requiresHumanReview: true };
}
