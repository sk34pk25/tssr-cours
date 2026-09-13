import { assertEquals, assertRejects } from "jsr:@std/assert@1.0.18";
import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";
import { assertAdmissionOpen, assertPublicationDrain, beginOperation, guardEditorAction, MaintenanceError, publicationWriteGuard } from "./maintenance.ts";
import { errorResponse } from "./cors.ts";
import { handlePublication } from "./publication.ts";
import { createAdminClient } from "./auth.ts";

const ID = "11111111-1111-4111-8111-111111111111";
const SHA = "a".repeat(40);
const protocol = "tssr-maintenance-v1";
function client(rpc: (name: string, args: unknown) => unknown): SupabaseClient {
  return { rpc } as unknown as SupabaseClient;
}
function state(data: unknown) { return client(() => Promise.resolve({ data, error: null })); }

Deno.test("open admission preserves editor mutation paths", async () => {
  for (const action of ["create", "create-course", "modify-course", "create-navigation-change", "vote", "cancel"]) {
    await guardEditorAction(state({ protocol, mode: "open", generation: 1 }), action);
  }
});

for (const action of ["create", "vote", "cancel", "modify-course", "unknown-action"]) {
  Deno.test(`closed admission refuses ${action}`, async () => {
    for (const mode of ["draining", "maintenance"]) {
      await assertRejects(() => guardEditorAction(state({ protocol, mode, generation: 2 }), action), MaintenanceError);
    }
  });
}

Deno.test("reads do not depend on maintenance service availability", async () => {
  const broken = client(() => { throw new Error("unavailable"); });
  for (const action of ["get-source", "get-navigation", "get-course-context", "get-course-editor"]) await guardEditorAction(broken, action);
});

Deno.test("missing, invalid and unreadable state all fail closed with stable 503", async () => {
  for (const data of [null, [], {}, { mode: "open", generation: 1 },
    { protocol, mode: "other", generation: 1 }, { protocol, mode: "open", generation: 0 },
    { protocol, mode: "open", generation: "1" }, { protocol, mode: "open", generation: 1.5 }]) {
    await assertRejects(() => assertAdmissionOpen(state(data)), MaintenanceError);
  }
  await assertRejects(() => assertAdmissionOpen(client(() => { throw new Error("database unavailable"); })), MaintenanceError);
  await assertRejects(() => beginOperation(state(null), "admin"), MaintenanceError);
  const response = errorResponse(new Request("http://localhost"), new Error("COLLABORATION_MAINTENANCE"));
  assertEquals(response.status, 503);
  assertEquals((await response.json()).code, "COLLABORATION_MAINTENANCE");
});

Deno.test("admin admission requires a valid durable operation, not just a boolean flag", async () => {
  for (const data of [null, { protocol, operation_id: "bad" }, { protocol, admitted: true }]) {
    await assertRejects(() => beginOperation(state(data), "admin"), MaintenanceError);
  }
  assertEquals(await beginOperation(state({ protocol, operation_id: ID }), "admin"), ID);
});

Deno.test("first Git effect denied after closure; already admitted operation drains explicitly", async () => {
  let open = false, admissions = 0, effects = 0;
  const db = client((name) => {
    if (name === "service_begin_collaboration_operation") {
      admissions++;
      return Promise.resolve(open ? { data: { protocol, operation_id: ID }, error: null } : { error: {}, data: null });
    }
    return Promise.resolve({ data: { protocol, admitted: true, change_request_id: ID, finished: true }, error: null });
  });
  const guard = publicationWriteGuard(db, ID);
  const write = async () => { await guard.beforeWrite(); effects++; };
  await assertRejects(write, MaintenanceError);
  assertEquals(effects, 0);
  assertEquals(guard.engaged(), false);
  open = true;
  await write();
  open = false;
  await write(); // Same admitted publication, not a new admission.
  assertEquals({ effects, admissions }, { effects: 2, admissions: 2 });
  await guard.finish();
});

Deno.test("drain rejects absent evidence and contradictory identity", async () => {
  for (const data of [null, { protocol, admitted: false, change_request_id: ID },
    { protocol, admitted: true, change_request_id: "other" }]) {
    await assertRejects(() => assertPublicationDrain(state(data), ID), MaintenanceError);
  }
});

Deno.test("verified callback replay during maintenance needs no new admission or write", async () => {
  const receipt = { change_request_id: ID, expected_sha: SHA, commit_sha: SHA, status: "published", phase: "deploy",
    run_id: "123", run_attempt: 1, pr_number: null, failure_reason: null };
  const row = { id: ID, status: "published", publication_expected_sha: SHA, publication_mode: "direct",
    published_commit_sha: SHA, publication_callback: receipt, github_pr_number: null,
    published_at: "2026-09-12T10:00:00Z", failure_reason: null };
  const db = { rpc: (name: string) => {
      assertEquals(name, "service_complete_guarded_publication");
      return Promise.resolve({ data: { id: ID, status: "published", replayed: true }, error: null });
    },
    from: () => ({ select: () => ({ eq: () => ({ single: () => Promise.resolve({ data: row, error: null }) }) }) }),
  } as unknown as SupabaseClient;
  const config = { token: "test-only", owner: "example", repo: "tssr", branch: "main", publishMode: "direct" as const };
  const result = await handlePublication(db, receipt, () => { throw new Error("No network"); }, config);
  assertEquals(result.replayed, true);
});

Deno.test("real Supabase client marks both Auth and PostgREST mutations before HTTP", async () => {
  const names = ["SUPABASE_URL", "SUPABASE_SECRET_KEY"];
  const previous = names.map((name) => Deno.env.get(name));
  const previousFetch = globalThis.fetch;
  const events: string[] = [];
  Deno.env.set(names[0], "https://database.example.invalid");
  Deno.env.set(names[1], "test-only");
  globalThis.fetch = (input, init) => {
    assertEquals(new Headers(init?.headers).get("x-tssr-operation"), ID);
    const pathname = new URL(String(input)).pathname;
    events.push(`http:${init?.method || "GET"}`);
    return Promise.resolve(new Response(JSON.stringify(pathname.startsWith("/auth/") ? { user: { id: ID } } : []), {
      status: 200, headers: { "Content-Type": "application/json" },
    }));
  };
  try {
    const db = createAdminClient(ID, () => { events.push("mutation"); });
    await db.auth.admin.updateUserById(ID, { ban_duration: "none" });
    await db.from("profiles").update({ can_edit: false }).eq("id", ID);
    await db.from("profiles").select("id");
    assertEquals(events, ["mutation", "http:PUT", "mutation", "http:PATCH", "http:GET"]);
  } finally {
    globalThis.fetch = previousFetch;
    names.forEach((name, index) => previous[index] === undefined ? Deno.env.delete(name) : Deno.env.set(name, previous[index]!));
  }
});

Deno.test("actual new Edge handlers safely replace historical mutation entrypoints before G or H", async () => {
  const originalServe = Deno.serve;
  const originalFetch = globalThis.fetch;
  type Handler = (req: Request) => Promise<Response>;
  const handlers: Handler[] = [];
  Deno.serve = ((handler: Handler) => { handlers.push(handler); return {}; }) as unknown as typeof Deno.serve;
  const env = { SUPABASE_URL: "https://db.example.invalid", SUPABASE_SECRET_KEY: "test-only",
    SUPABASE_PUBLISHABLE_KEY: "test-only", GITHUB_TOKEN: "test-only", GITHUB_OWNER: "example", GITHUB_REPO: "tssr" };
  const previous = Object.keys(env).map((key) => Deno.env.get(key));
  for (const [key, value] of Object.entries(env)) Deno.env.set(key, value);
  const effects: string[] = [];
  let installed = false;
  globalThis.fetch = async (input, init) => {
    const url = new URL(String(input));
    const method = init?.method || "GET";
    if (url.pathname.includes("/rpc/")) {
      assertEquals(["service_collaboration_state", "service_begin_collaboration_operation"].includes(url.pathname.split("/").pop()!), true);
      return new Response(JSON.stringify(installed && url.pathname.endsWith("service_collaboration_state")
        ? { protocol, mode: "draining", generation: 1 } : { message: "COLLABORATION_MAINTENANCE" }),
        { status: installed && url.pathname.endsWith("service_collaboration_state") ? 200 : 404,
          headers: { "content-type": "application/json" } });
    }
    if (method !== "GET") { effects.push(method + url.pathname); throw new Error("Unexpected external mutation"); }
    let result: unknown;
    if (url.pathname === "/auth/v1/user") result = { id: ID };
    else if (url.pathname === "/rest/v1/profiles") {
      const profile = { id: ID, auth_user_id: ID, role: "admin", status: "active", can_edit: true, must_change_password: false };
      result = url.searchParams.has("auth_user_id") ? profile : [profile];
    } else if (url.pathname.includes("/git/ref/heads/")) result = { object: { sha: SHA } };
    else if (url.pathname.includes("/contents/")) result = { type: "file", encoding: "base64", content: btoa("# Test"), sha: SHA };
    else throw new Error("Unexpected read boundary " + url.pathname);
    return new Response(JSON.stringify(result), { headers: { "content-type": "application/json" } });
  };
  const request = (body: Record<string, unknown>) => new Request("http://localhost", {
    method: "POST", headers: { "content-type": "application/json", Authorization: "Bearer test-only" }, body: JSON.stringify(body),
  });
  try {
    await import("../change-requests/index.ts");
    await import("../admin-users/index.ts");
    assertEquals(handlers.length, 2);
    for (installed of [false, true]) {
      for (const action of ["create", "vote", "cancel", "create-course", "modify-course", "create-navigation-change"]) {
        assertEquals((await handlers[0](request({ action }))).status, 503);
      }
      for (const action of ["create", "update", "suspend", "reactivate", "delete", "reset-password", "change-own-password", "update-own-profile"]) {
        assertEquals((await handlers[1](request({ action }))).status, 503);
      }
      assertEquals((await handlers[1](request({ action: "list" }))).status, 200);
      assertEquals((await handlers[0](request({ action: "get-source", file_path: "docs/test.md" }))).status, 200);
    }
    assertEquals(effects, []);
  } finally {
    Deno.serve = originalServe; globalThis.fetch = originalFetch;
    Object.keys(env).forEach((key, i) => previous[i] === undefined ? Deno.env.delete(key) : Deno.env.set(key, previous[i]!));
  }
});
