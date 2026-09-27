import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";
import type { Profile } from "./auth.ts";

export function canOverrideValidation(profile: Profile): boolean {
  return profile.status === "active" && profile.role === "admin" && profile.can_edit === true &&
    profile.can_override_validation === true && profile.must_change_password === false;
}

/** The user JWT reaches SQL: no caller-supplied actor and no service-role impersonation. */
export async function recordAdminOverride(client: SupabaseClient, profile: Profile, id: unknown, reason: unknown) {
  if (!canOverrideValidation(profile)) throw new Error("Permission de validation administrative requise.");
  if (typeof id !== "string" || !/^[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}$/.test(id)) {
    throw new Error("Identifiant de proposition invalide.");
  }
  if (typeof reason !== "string" || reason.trim().length < 3 || reason.trim().length > 1000 || /\p{Cc}/u.test(reason)) {
    throw new Error("Motif administratif invalide (3 à 1000 caractères, une ligne).");
  }
  const { data, error } = await client.rpc("admin_override_approval", { p_change_request_id: id, p_reason: reason.trim() });
  const row = Array.isArray(data) ? data[0] : data;
  if (error || !row || row.id !== id || row.status !== "approved") {
    throw new Error(error?.message || "Validation administrative impossible.");
  }
  return row;
}

/** Only the consensus condition is relaxed. A read failure is never authorization. */
export async function assertPublicationApproval(client: SupabaseClient, requestId: string, required: string[], actual: string[]) {
  if (required.every((id) => actual.includes(id))) return;
  const { data, error } = await client.from("change_approval_overrides")
    .select("change_request_id").eq("change_request_id", requestId).maybeSingle();
  if (error || !data || data.change_request_id !== requestId) throw new Error("Le consensus n’est plus complet et aucun override administratif n’existe.");
}
