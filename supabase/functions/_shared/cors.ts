const defaultOrigins = [
  "https://sk34pk25.github.io",
  "http://127.0.0.1:8000",
  "http://127.0.0.1:8765",
  "http://localhost:8000",
  "http://localhost:8765",
];

function configuredOrigins(): Set<string> {
  const configured = (Deno.env.get("ALLOWED_ORIGINS") || "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);
  return new Set([...defaultOrigins, ...configured]);
}

export function corsHeaders(req: Request): HeadersInit {
  const origin = req.headers.get("origin") || "";
  const allowed = configuredOrigins();
  return {
    "Access-Control-Allow-Origin": allowed.has(origin) ? origin : defaultOrigins[0],
    "Access-Control-Allow-Headers": "authorization, apikey, content-type, x-client-info, x-publication-secret",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin",
  };
}

export function isAllowedOrigin(req: Request): boolean {
  const origin = req.headers.get("origin");
  return !origin || configuredOrigins().has(origin);
}

export function jsonResponse(req: Request, body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(req),
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}

export function handlePreflight(req: Request): Response | null {
  if (req.method !== "OPTIONS") return null;
  return new Response(null, { status: 204, headers: corsHeaders(req) });
}

export function errorResponse(req: Request, error: unknown, status = 400): Response {
  const message = error instanceof Error ? error.message : String(error);
  return jsonResponse(req, { error: message }, status);
}
