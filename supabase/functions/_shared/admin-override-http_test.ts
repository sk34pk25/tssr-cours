// Exercise the actual Edge HTTP handler. Only external Supabase transport is
// stubbed; no listening socket, real account, GitHub or production connection.
import { assertEquals, assert } from "jsr:@std/assert@1.0.18";

let handler: (req: Request) => Promise<Response>;
const serve = Deno.serve;
try {
  Deno.serve = ((callback: typeof handler) => { handler = callback; return {}; }) as typeof Deno.serve;
  await import("../change-requests/index.ts");
} finally { Deno.serve = serve; }

async function runCase({ permission = false, role = "admin", mode = "open", sqlError = false, authenticated = true } = {}) {
  const savedFetch = globalThis.fetch;
  const env = { SUPABASE_URL: "https://fixture.supabase.co", SUPABASE_PUBLISHABLE_KEY: "fixture-public", SUPABASE_SECRET_KEY: "fixture-server" };
  const saved = Object.fromEntries(Object.keys(env).map(key => [key, Deno.env.get(key)]));
  const calls: string[] = [];
  try {
    for (const [key, value] of Object.entries(env)) Deno.env.set(key, value);
    globalThis.fetch = ((input: Request | URL | string) => {
      const url = new URL(input instanceof Request ? input.url : String(input));
      if (url.origin !== env.SUPABASE_URL) throw new Error("Unexpected external request");
      calls.push(url.pathname);
      let status = 200, data: unknown;
      if (url.pathname === "/rest/v1/rpc/service_collaboration_state") data = { protocol: "tssr-maintenance-v1", mode, generation: 2 };
      else if (url.pathname === "/auth/v1/user") {
        status = authenticated ? 200 : 401;
        data = authenticated ? { id: "11111111-1111-4111-8111-111111111111", aud: "authenticated" } : { message: "Unauthenticated" };
      } else if (url.pathname === "/rest/v1/profiles") data = {
        id: "22222222-2222-4222-8222-222222222222", role, status: "active", can_edit: true,
        can_override_validation: permission, must_change_password: false,
      };
      else if (url.pathname === "/rest/v1/rpc/admin_override_approval" && sqlError) {
        status = 400; data = { message: "Cette proposition n’accepte pas de validation administrative." };
      } else throw new Error("Unexpected mutation in denial test");
      return Promise.resolve(new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json" } }));
    }) as typeof fetch;
    const response = await handler(new Request("https://fixture.supabase.co/functions/v1/change-requests", {
      method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer synthetic-test-session" },
      body: JSON.stringify({ action: "admin_override_approval", change_request_id: "11111111-1111-4111-8111-111111111111", reason: "Exceptional review" }),
    }));
    return { status: response.status, body: await response.json(), calls };
  } finally {
    globalThis.fetch = savedFetch;
    for (const [key, value] of Object.entries(saved)) { if (value === undefined) Deno.env.delete(key); else Deno.env.set(key, value); }
  }
}

Deno.test("actual Edge override API refuses missing permission, member and missing session with 403", async () => {
  for (const options of [{}, { permission: true, role: "member" }, { authenticated: false }]) {
    const result = await runCase(options);
    assertEquals(result.status, 403);
    assert(!result.calls.includes("/rest/v1/rpc/admin_override_approval"));
  }
});

Deno.test("actual Edge override API fails closed with 503 during maintenance or draining", async () => {
  for (const mode of ["maintenance", "draining"]) {
    const result = await runCase({ permission: true, mode });
    assertEquals(result.status, 503);
    assertEquals(result.body.code, "COLLABORATION_MAINTENANCE");
    assert(!result.calls.includes("/rest/v1/rpc/admin_override_approval"));
  }
});

Deno.test("actual Edge override API propagates SQL lifecycle rejection without claiming publication", async () => {
  const result = await runCase({ permission: true, sqlError: true });
  assertEquals(result.status, 400);
  assert(result.calls.includes("/rest/v1/rpc/admin_override_approval"));
  assert(!result.calls.includes("/rest/v1/rpc/service_claim_change_for_publication"));
});
