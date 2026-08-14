import { createAdminClient, readJsonBody } from "../_shared/auth.ts";
import { handlePreflight, isAllowedOrigin, jsonResponse, errorResponse } from "../_shared/cors.ts";

interface PublicationStatusBody {
  change_request_id: string;
  status: "published" | "failed";
  commit_sha?: string;
  failure_reason?: string;
}

function constantTimeEqual(left: string, right: string): boolean {
  const encoder = new TextEncoder();
  const a = encoder.encode(left);
  const b = encoder.encode(right);
  let mismatch = a.length ^ b.length;
  const length = Math.max(a.length, b.length);
  for (let index = 0; index < length; index += 1) mismatch |= (a[index] || 0) ^ (b[index] || 0);
  return mismatch === 0;
}

Deno.serve(async (req: Request) => {
  const preflight = handlePreflight(req);
  if (preflight) return preflight;
  if (!isAllowedOrigin(req)) return errorResponse(req, "Origine non autorisée.", 403);
  if (req.method !== "POST") return errorResponse(req, "Méthode non autorisée.", 405);

  try {
    const expected = Deno.env.get("PUBLICATION_WEBHOOK_SECRET") || "";
    const provided = req.headers.get("x-publication-secret") || "";
    if (!expected || !provided || !constantTimeEqual(expected, provided)) {
      return errorResponse(req, "Signature de publication invalide.", 401);
    }
    const body = await readJsonBody<PublicationStatusBody>(req, 50_000);
    if (!body.change_request_id || !["published", "failed"].includes(body.status)) {
      throw new Error("Retour de publication invalide.");
    }
    const adminClient = createAdminClient();
    const update = body.status === "published"
      ? {
        status: "published",
        published_at: new Date().toISOString(),
        published_commit_sha: body.commit_sha || null,
        failure_reason: null,
      }
      : {
        status: "failed",
        failure_reason: (body.failure_reason || "Le build ou le déploiement GitHub Pages a échoué.").slice(0, 2000),
      };
    const { data, error } = await adminClient.from("change_requests")
      .update(update)
      .eq("id", body.change_request_id)
      .eq("status", "publishing")
      .select("id, status, published_commit_sha")
      .single();
    if (error || !data) throw new Error(error?.message || "Proposition en publication introuvable.");
    await adminClient.from("audit_logs").insert({
      action: body.status === "published" ? "publication_succeeded" : "publication_failed",
      target_type: "change_request",
      target_id: body.change_request_id,
      metadata: { commit_sha: body.commit_sha || null, reason: body.failure_reason || null },
    });
    return jsonResponse(req, { ok: true, change_request: data });
  } catch (error) {
    return errorResponse(req, error, 400);
  }
});
