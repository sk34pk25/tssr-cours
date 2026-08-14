import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";
import { handlePreflight, isAllowedOrigin, jsonResponse, errorResponse } from "../_shared/cors.ts";
import { readJsonBody, requireProfile, type Profile } from "../_shared/auth.ts";
import { publishApprovedChange } from "../_shared/github.ts";

interface AdminRequest {
  action: string;
  profile_id?: string;
  display_name?: string;
  email?: string;
  password?: string;
  current_password?: string;
  role?: "admin" | "member";
  can_edit?: boolean;
}

const profileColumns = "id, auth_user_id, display_name, email, role, can_edit, status, must_change_password, created_at, updated_at";

function validatePassword(password: string): void {
  if (password.length < 12) throw new Error("Le mot de passe doit contenir au moins 12 caractères.");
}

function validateEmail(email: string): string {
  const normalized = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized)) throw new Error("Adresse e-mail invalide.");
  return normalized;
}

function validateName(name: string): string {
  const normalized = name.trim();
  if (normalized.length < 1 || normalized.length > 100) throw new Error("Le nom doit contenir entre 1 et 100 caractères.");
  return normalized;
}

async function getTarget(adminClient: SupabaseClient, profileId: string): Promise<Profile> {
  const { data, error } = await adminClient.from("profiles").select(profileColumns).eq("id", profileId).single();
  if (error || !data) throw new Error("Utilisateur introuvable.");
  return data as Profile;
}

async function ensureAnotherAdmin(adminClient: SupabaseClient, target: Profile, nextRole?: string, nextStatus?: string): Promise<void> {
  const losesAdmin = target.role === "admin" && target.status === "active" &&
    ((nextRole && nextRole !== "admin") || (nextStatus && nextStatus !== "active"));
  if (!losesAdmin) return;
  const { count, error } = await adminClient
    .from("profiles")
    .select("id", { count: "exact", head: true })
    .eq("role", "admin")
    .eq("status", "active")
    .neq("id", target.id);
  if (error) throw new Error(error.message);
  if (!count) throw new Error("Le dernier administrateur actif ne peut pas perdre ses privilèges.");
}

async function audit(
  adminClient: SupabaseClient,
  actor: Profile,
  action: string,
  target: Profile,
  metadata: Record<string, unknown> = {},
): Promise<void> {
  const { error } = await adminClient.from("audit_logs").insert({
    actor_id: actor.id,
    actor_display_name: actor.display_name,
    action,
    target_type: "profile",
    target_id: target.id,
    metadata,
  });
  if (error) throw new Error(error.message);
}

async function reconcileApprover(adminClient: SupabaseClient, actor: Profile, target: Profile): Promise<void> {
  const { data, error } = await adminClient.rpc("service_reconcile_required_approver", {
    p_actor_id: actor.id,
    p_inactive_profile_id: target.id,
  });
  if (error) throw new Error(error.message);
  for (const value of data || []) {
    const changeId = typeof value === "string"
      ? value
      : (value as Record<string, string>).service_reconcile_required_approver;
    if (changeId) await publishApprovedChange(adminClient, changeId);
  }
}

Deno.serve(async (req: Request) => {
  const preflight = handlePreflight(req);
  if (preflight) return preflight;
  if (!isAllowedOrigin(req)) return errorResponse(req, "Origine non autorisée.", 403);
  if (req.method !== "POST") return errorResponse(req, "Méthode non autorisée.", 405);

  try {
    const body = await readJsonBody<AdminRequest>(req, 100_000);

    if (body.action === "change-own-password") {
      const context = await requireProfile(req, { allowTemporaryPassword: true });
      const currentPassword = body.current_password || "";
      const newPassword = body.password || "";
      if (!currentPassword) throw new Error("Le mot de passe actuel est requis.");
      validatePassword(newPassword);
      const { error: verificationError } = await context.userClient.auth.signInWithPassword({
        email: context.profile.email,
        password: currentPassword,
      });
      if (verificationError) throw new Error("Le mot de passe actuel est incorrect.");
      const { error: passwordError } = await context.adminClient.auth.admin.updateUserById(
        context.user.id,
        { password: newPassword },
      );
      if (passwordError) throw new Error(passwordError.message);
      const { error: profileError } = await context.adminClient.from("profiles")
        .update({ must_change_password: false })
        .eq("id", context.profile.id);
      if (profileError) throw new Error(profileError.message);
      await audit(context.adminClient, context.profile, "own_password_changed", context.profile);
      return jsonResponse(req, { ok: true });
    }

    if (body.action === "update-own-profile") {
      const context = await requireProfile(req);
      const displayName = validateName(body.display_name || "");
      const { data, error } = await context.adminClient.from("profiles")
        .update({ display_name: displayName })
        .eq("id", context.profile.id)
        .select(profileColumns)
        .single();
      if (error) throw new Error(error.message);
      await audit(context.adminClient, context.profile, "own_profile_updated", data as Profile);
      return jsonResponse(req, { profile: data });
    }

    const context = await requireProfile(req, { admin: true });
    const { adminClient, profile: actor } = context;

    if (body.action === "list") {
      const { data, error } = await adminClient.from("profiles").select(profileColumns).order("created_at");
      if (error) throw new Error(error.message);
      return jsonResponse(req, { profiles: data });
    }

    if (body.action === "create") {
      const displayName = validateName(body.display_name || "");
      const email = validateEmail(body.email || "");
      const password = body.password || "";
      validatePassword(password);
      const role = body.role === "admin" ? "admin" : "member";
      const canEdit = Boolean(body.can_edit);
      const { data: created, error: createError } = await adminClient.auth.admin.createUser({
        email,
        password,
        email_confirm: true,
        user_metadata: { display_name: displayName },
      });
      if (createError || !created.user) throw new Error(createError?.message || "Création Auth impossible.");
      const { data: profile, error: profileError } = await adminClient.from("profiles")
        .update({ display_name: displayName, email, role, can_edit: canEdit, status: "active", must_change_password: true })
        .eq("auth_user_id", created.user.id)
        .select(profileColumns)
        .single();
      if (profileError || !profile) {
        await adminClient.auth.admin.deleteUser(created.user.id, true);
        throw new Error(profileError?.message || "Création du profil impossible.");
      }
      await audit(adminClient, actor, "user_created", profile as Profile, { role, can_edit: canEdit });
      return jsonResponse(req, { profile }, 201);
    }

    if (!body.profile_id) throw new Error("Identifiant de profil manquant.");
    const target = await getTarget(adminClient, body.profile_id);

    if (body.action === "update") {
      const nextRole = body.role === "admin" ? "admin" : "member";
      await ensureAnotherAdmin(adminClient, target, nextRole, target.status);
      const changes: Record<string, unknown> = {
        display_name: validateName(body.display_name ?? target.display_name),
        role: nextRole,
        can_edit: Boolean(body.can_edit),
      };
      if (body.email && body.email !== target.email) {
        if (!target.auth_user_id) throw new Error("Le compte Auth de cet utilisateur n’existe plus.");
        const email = validateEmail(body.email);
        const { error } = await adminClient.auth.admin.updateUserById(target.auth_user_id, { email, email_confirm: true });
        if (error) throw new Error(error.message);
        changes.email = email;
      }
      const { data, error } = await adminClient.from("profiles").update(changes).eq("id", target.id).select(profileColumns).single();
      if (error) throw new Error(error.message);
      await audit(adminClient, actor, "user_updated", data as Profile, changes);
      if (target.can_edit && !body.can_edit) await reconcileApprover(adminClient, actor, data as Profile);
      return jsonResponse(req, { profile: data });
    }

    if (body.action === "suspend") {
      await ensureAnotherAdmin(adminClient, target, target.role, "suspended");
      const { data, error } = await adminClient.from("profiles").update({ status: "suspended" }).eq("id", target.id).select(profileColumns).single();
      if (error) throw new Error(error.message);
      if (target.auth_user_id) {
        const { error: authError } = await adminClient.auth.admin.updateUserById(target.auth_user_id, { ban_duration: "876000h" });
        if (authError) {
          await adminClient.from("profiles").update({ status: target.status }).eq("id", target.id);
          throw new Error(authError.message);
        }
      }
      await audit(adminClient, actor, "user_suspended", data as Profile);
      await reconcileApprover(adminClient, actor, data as Profile);
      return jsonResponse(req, { profile: data });
    }

    if (body.action === "reactivate") {
      if (!target.auth_user_id) throw new Error("Un utilisateur supprimé ne peut pas être réactivé.");
      const { error: authError } = await adminClient.auth.admin.updateUserById(target.auth_user_id, { ban_duration: "none" });
      if (authError) throw new Error(authError.message);
      const { data, error } = await adminClient.from("profiles").update({ status: "active" }).eq("id", target.id).select(profileColumns).single();
      if (error) throw new Error(error.message);
      await audit(adminClient, actor, "user_reactivated", data as Profile);
      return jsonResponse(req, { profile: data });
    }

    if (body.action === "reset-password") {
      if (!target.auth_user_id) throw new Error("Le compte Auth de cet utilisateur n’existe plus.");
      const password = body.password || "";
      validatePassword(password);
      const { error: authError } = await adminClient.auth.admin.updateUserById(target.auth_user_id, { password });
      if (authError) throw new Error(authError.message);
      const { data, error } = await adminClient.from("profiles").update({ must_change_password: true }).eq("id", target.id).select(profileColumns).single();
      if (error) throw new Error(error.message);
      await audit(adminClient, actor, "user_password_reset", data as Profile);
      return jsonResponse(req, { profile: data });
    }

    if (body.action === "delete") {
      await ensureAnotherAdmin(adminClient, target, target.role, "deleted");
      const { data, error } = await adminClient.from("profiles").update({ status: "deleted", can_edit: false }).eq("id", target.id).select(profileColumns).single();
      if (error) throw new Error(error.message);
      if (target.auth_user_id) {
        const { error: authError } = await adminClient.auth.admin.deleteUser(target.auth_user_id, true);
        if (authError) {
          await adminClient.from("profiles").update({ status: target.status, can_edit: target.can_edit }).eq("id", target.id);
          throw new Error(authError.message);
        }
      }
      await audit(adminClient, actor, "user_deleted", data as Profile);
      await reconcileApprover(adminClient, actor, data as Profile);
      return jsonResponse(req, { profile: data });
    }

    throw new Error("Action administrateur inconnue.");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const status = /Session|Accès|Permission|suspendu/i.test(message) ? 403 : 400;
    return errorResponse(req, error, status);
  }
});
