import { createAdminClient, readJsonBody } from "../_shared/auth.ts";
import { handlePreflight, isAllowedOrigin, jsonResponse, errorResponse } from "../_shared/cors.ts";
import { handlePublication } from "../_shared/publication.ts";

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
    const body = await readJsonBody<Record<string, unknown>>(req, 50_000);
    return jsonResponse(req, await handlePublication(createAdminClient(), body));
  } catch (error) {
    return errorResponse(req, error, 400);
  }
});
