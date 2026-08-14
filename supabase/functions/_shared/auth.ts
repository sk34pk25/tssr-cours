import { createClient, SupabaseClient, User } from "npm:@supabase/supabase-js@2.112.3";

export interface Profile {
  id: string;
  auth_user_id: string | null;
  display_name: string;
  email: string;
  role: "admin" | "member";
  can_edit: boolean;
  status: "active" | "suspended" | "deleted";
  must_change_password: boolean;
}

export interface RequestContext {
  user: User;
  profile: Profile;
  userClient: SupabaseClient;
  adminClient: SupabaseClient;
}

function requiredEnv(...names: string[]): string {
  for (const name of names) {
    const value = Deno.env.get(name);
    if (value) return value;
  }
  throw new Error(`Secret serveur manquant : ${names.join(" ou ")}`);
}

export function createAdminClient(): SupabaseClient {
  const url = requiredEnv("SUPABASE_URL");
  const key = requiredEnv("SUPABASE_SECRET_KEY", "SUPABASE_SERVICE_ROLE_KEY");
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false },
  });
}

function createUserClient(req: Request): SupabaseClient {
  const url = requiredEnv("SUPABASE_URL");
  const key = requiredEnv("SUPABASE_PUBLISHABLE_KEY", "SUPABASE_ANON_KEY");
  const authorization = req.headers.get("Authorization") || "";
  return createClient(url, key, {
    global: { headers: { Authorization: authorization } },
    auth: { autoRefreshToken: false, persistSession: false, detectSessionInUrl: false },
  });
}

export async function requireProfile(
  req: Request,
  requirements: { admin?: boolean; canEdit?: boolean; allowTemporaryPassword?: boolean } = {},
): Promise<RequestContext> {
  const userClient = createUserClient(req);
  const adminClient = createAdminClient();
  const { data: userData, error: userError } = await userClient.auth.getUser();
  if (userError || !userData.user) throw new Error("Session invalide ou expirée.");

  const { data: profile, error: profileError } = await adminClient
    .from("profiles")
    .select("id, auth_user_id, display_name, email, role, can_edit, status, must_change_password")
    .eq("auth_user_id", userData.user.id)
    .single();

  if (profileError || !profile) throw new Error("Profil collaborateur introuvable.");
  if (profile.status !== "active") throw new Error("Ce compte est suspendu ou supprimé.");
  if (profile.must_change_password && !requirements.allowTemporaryPassword) {
    throw new Error("Vous devez remplacer votre mot de passe temporaire avant de continuer.");
  }
  if (requirements.admin && profile.role !== "admin") throw new Error("Accès administrateur requis.");
  if (requirements.canEdit && !profile.can_edit) throw new Error("Permission de modification requise.");

  return { user: userData.user, profile: profile as Profile, userClient, adminClient };
}

export async function readJsonBody<T>(req: Request, maxBytes = 8_000_000): Promise<T> {
  if (!req.headers.get("content-type")?.toLowerCase().includes("application/json")) {
    throw new Error("Le corps de la requête doit être au format JSON.");
  }
  const declared = Number(req.headers.get("content-length") || 0);
  if (declared > maxBytes) throw new Error("La requête dépasse la taille autorisée.");
  const text = await req.text();
  if (new TextEncoder().encode(text).byteLength > maxBytes) {
    throw new Error("La requête dépasse la taille autorisée.");
  }
  return JSON.parse(text) as T;
}
