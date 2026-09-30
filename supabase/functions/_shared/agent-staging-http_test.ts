// Phase 3D: actual Edge handlers, synthetic transports only. Deno task test:edge
// has no --allow-net. No GoTrue token or production credential is used here.
import { assert, assertEquals } from "jsr:@std/assert@1.0.18";
import credentialCases from "../../../tests/fixtures/credentials.json" with { type: "json" };

type Handler = (req: Request) => Promise<Response>;
async function capture(load: () => Promise<unknown>): Promise<Handler> {
  const serve = Deno.serve;
  let handler: Handler | undefined;
  try {
    Deno.serve = ((fn: Handler) => { handler = fn; return {}; }) as typeof Deno.serve;
    await load();
  } finally { Deno.serve = serve; }
  assert(handler);
  return handler;
}
const changeHandler = await capture(() => import("../change-requests/index.ts"));
const adminHandler = await capture(() => import("../admin-users/index.ts"));
const sha = "a".repeat(40), blob = "b".repeat(40);
const id = "66666666-6666-4666-8666-666666666666";
const file = { file_path: "docs/fixture.md", change_type: "create", new_content: "# Fixture", content_encoding: "utf-8" };
const summary = { source: { type: "google_drive_read_only", rootId: "1N73OtTF2TKxYUEO9X0_4NObnmEAugzZ1", fileId: "synthetic-file", sha256: "c".repeat(64) }, idempotencyKey: "d".repeat(64) };

async function run(body: Record<string, unknown> = {}, options: { mode?: string; admin?: boolean; replay?: boolean; human?: boolean; oldContent?: string } = {}) {
  const env = { SUPABASE_URL: "https://fixture.supabase.co", SUPABASE_PUBLISHABLE_KEY: "fixture-public",
    SUPABASE_SECRET_KEY: "fixture-server", GITHUB_TOKEN: "fixture-server-only", GITHUB_OWNER: "fixture",
    GITHUB_REPO: "fixture", GITHUB_BRANCH: "main", GITHUB_PUBLISH_MODE: "auto" };
  const saved = Object.fromEntries(Object.keys(env).map(key => [key, Deno.env.get(key)]));
  const originalFetch = globalThis.fetch;
  const calls: string[] = [], proposals: Record<string, unknown>[] = [];
  const unexpected: string[] = [];
  try {
    Object.entries(env).forEach(([key,value]) => Deno.env.set(key,value));
    globalThis.fetch = (async (input: Request | URL | string, init?: RequestInit) => {
      const request = input instanceof Request ? input : new Request(input, init);
      const url = new URL(request.url), path = url.pathname;
      calls.push(`${request.method} ${path}`);
      let data: unknown;
      if (url.origin === env.SUPABASE_URL) {
        if (path === "/rest/v1/rpc/service_collaboration_state") data = { protocol: "tssr-maintenance-v1", mode: options.mode || "open", generation: 2 };
        else if (path === "/auth/v1/user") data = { id, aud: "authenticated" };
        else if (path === "/rest/v1/profiles") data = { id, actor_kind: options.human ? "HUMAN" : "AGENT", can_propose: !options.human,
          role: "member", status: "active", can_edit: !!options.human, can_override_validation: false, must_change_password: false };
        else if (path === "/rest/v1/rpc/create_change_request") {
          proposals.push(await request.json());
          data = { id, status: options.replay ? "approved" : "pending" };
        } else if (path === "/rest/v1/change_requests" && request.method === "GET") data = { id, status: options.replay ? "approved" : "pending" };
      } else if (url.origin === "https://api.github.com" && request.method === "GET") {
        if (path.endsWith("/git/ref/heads/main")) data = { object: { sha } };
        else if (path.endsWith(`/git/commits/${sha}`)) data = { tree: { sha: blob } };
        else if (path.endsWith(`/git/trees/${blob}`)) data = { truncated: false,
          tree: ["mkdocs.yml", "docs/index.md", "docs/existing.md"].map(path => ({ path, type: "blob", sha: blob })) };
        else if (path.endsWith("/contents/mkdocs.yml")) data = { type: "file", encoding: "base64", sha: blob,
          content: btoa("site_name: Fixture\nnav:\n  - Home: index.md\n") };
        else if (path.endsWith("/contents/docs/existing.md")) data = { type: "file", encoding: "base64", sha: blob, content: btoa(options.oldContent ?? "# Existing") };
      }
      if (data === undefined) { unexpected.push(`${request.method} ${path}`); throw new Error("Unexpected fixture transport"); }
      return new Response(JSON.stringify(data), { headers: { "Content-Type": "application/json" } });
    }) as typeof fetch;
    const response = await (options.admin ? adminHandler : changeHandler)(new Request(`${env.SUPABASE_URL}/functions/v1/fixture`, {
      method: "POST", headers: { "Content-Type": "application/json", Authorization: "Bearer synthetic-agent-session" },
      body: JSON.stringify({ action: "create", title: "Isolated agent proposal", base_commit_sha: sha,
        proposal_kind: "content_change", files: [file], payload_summary: summary, ...body }),
    }));
    const result = { status: response.status, body: await response.json(), calls, proposals };
    assertEquals(unexpected, [], "A stub error must never masquerade as an authorization denial");
    return result;
  } finally {
    globalThis.fetch = originalFetch;
    Object.entries(saved).forEach(([key,value]) => value === undefined ? Deno.env.delete(key) : Deno.env.set(key,value));
  }
}

Deno.test("agent staging HTTP: real create accepts Markdown create/update, server-owned identity and fingerprint", async () => {
  for (const input of [file, { ...file, file_path: "docs/existing.md", change_type: "update", base_file_sha: blob }]) {
    const result = await run({ files: [input], role: "admin", actor_kind: "HUMAN" });
    assertEquals(result.status, 201);
    assertEquals(result.proposals.length, 1);
    const payload = result.proposals[0].p_payload_summary as Record<string, unknown>;
    assertEquals(payload.actorKind, "AGENT");
    assertEquals(payload._actor_profile_id, id);
    assert(/^[a-f0-9]{64}$/.test(String(payload.proposalFingerprint)));
    assert(!result.calls.some(call => /claim|begin_collaboration|publication/.test(call)));
  }
});

Deno.test("agent staging HTTP: vote approve/reject, cancel, override, course and navigation actions denied", async () => {
  for (const body of [{ action: "vote", decision: "approved" }, { action: "vote", decision: "rejected" },
    { action: "cancel" }, { action: "admin_override_approval", reason: "spoof", can_override_validation: true },
    { action: "create_course" }, { action: "modify_course" }, { action: "navigation" }]) {
    const result = await run({ change_request_id: id, ...body });
    assert(result.status >= 400 && result.status < 500);
    assertEquals(result.proposals.length, 0);
    assert(!result.calls.some(call => /claim|begin_collaboration|publication/.test(call)));
  }
});

Deno.test("agent staging HTTP: user administration denied by actual admin-users handler", async () => {
  for (const action of ["list", "create", "update", "reset_password"]) {
    const result = await run({ action }, { admin: true });
    assertEquals(result.status, 403);
    assertEquals(result.proposals.length, 0);
  }
});

Deno.test("agent staging HTTP: binary, rename, delete, migrations, workflows and outside docs denied", async () => {
  const forbidden = [
    { ...file, file_path: "docs/existing.md", change_type: "rename", base_file_sha: blob, new_file_path: "docs/renamed.md" },
    { ...file, file_path: "docs/existing.md", change_type: "delete", base_file_sha: blob, new_content: null },
    { ...file, file_path: "supabase/migrations/fixture.sql" }, { ...file, file_path: ".github/workflows/fixture.yml" },
    { ...file, file_path: "scripts/fixture.md" },
    { ...file, file_path: "docs/assets/fixture.png", content_encoding: "base64", media_type: "image/png",
      new_content: btoa(String.fromCharCode(137,80,78,71,13,10,26,10,0,0,0,0)) },
    { ...file, new_content: "# Bad\n\n[link](javascript:alert(1))" },
  ];
  for (const input of forbidden) {
    const result = await run({ files: [input] });
    assert(result.status >= 400 && result.status < 500, `${input.file_path}: ${result.status}`);
    assertEquals(result.proposals.length, 0);
  }
  const navigation = await run({ proposal_kind: "navigation_change" });
  assertEquals(navigation.status, 403);
});

Deno.test("agent staging HTTP: closed guard denies existing session without proposal RPC", async () => {
  for (const mode of ["maintenance", "draining"]) {
    const result = await run({}, { mode });
    assertEquals(result.status, 503);
    assertEquals(result.body.code, "COLLABORATION_MAINTENANCE");
    assertEquals(result.proposals.length, 0);
  }
});

Deno.test("agent staging HTTP: approved idempotent response cannot trigger publication", async () => {
  const result = await run({}, { replay: true });
  assertEquals(result.status, 201);
  assert(!result.calls.some(call => /claim|begin_collaboration|publication/.test(call)));
});

Deno.test("agent staging HTTP: invalid provenance denied before proposal RPC", async () => {
  const result = await run({ payload_summary: { ...summary, source: { ...summary.source, rootId: "outside" } } });
  assertEquals(result.status, 400);
  assertEquals(result.proposals.length, 0);
});

Deno.test("agent staging HTTP: recognizable synthetic secret in Markdown must be denied server-side", async () => {
  // Not a credential: assemble a recognisable synthetic canary only at runtime.
  const canary = ["gh", "p_", "X".repeat(36)].join("");
  const result = await run({ files: [{ ...file, new_content: `# Fixture\n\nGITHUB_TOKEN=${canary}\n` }] });
  assert(result.status >= 400 && result.status < 500, `Expected secret rejection, received ${result.status}`);
  assertEquals(result.proposals.length, 0);
});

Deno.test("agent staging HTTP: shared credential cases reject safely or preserve pedagogical placeholders", async () => {
  for (const fixture of credentialCases) {
    const text = fixture.parts.join("");
    const result = await run({ files: [{ ...file, new_content: text }] });
    assertEquals(result.status, fixture.allowed ? 201 : 400, fixture.name);
    assertEquals(result.proposals.length, fixture.allowed ? 1 : 0, fixture.name);
    if (!fixture.allowed) {
      assertEquals(result.body.error, "Proposition refusée : credential ou secret reconnaissable. Utilisez un placeholder explicite.");
      assertEquals(result.calls.filter(call => call.includes("/rpc/")), ["POST /rest/v1/rpc/service_collaboration_state"]);
    }
  }
});

Deno.test("agent staging HTTP: secrets in every submitted field and trusted copy are refused before persistence", async () => {
  const secret = ["gh", "p_", "0".repeat(36)].join("");
  for (const body of [{ title: secret }, { description: secret }, { supersedes_id: secret }, { base_commit_sha: secret },
    { files: [{ ...file, file_path: `docs/${secret}.md` }] },
    { payload_summary: { ...summary, source: { ...summary.source, fileId: secret } } },
    { payload_summary: { ...summary, nested: { password: "synthetic-secret" } } },
    { payload_summary: { ...summary, session_token: 123456789 } }]) {
    const result = await run(body);
    assertEquals(result.status, 400);
    assertEquals(result.proposals.length, 0);
    assert(!JSON.stringify(result.body).includes(secret));
    assertEquals(result.calls.filter(call => call.includes("/rpc/")), ["POST /rest/v1/rpc/service_collaboration_state"]);
  }
  const old = await run({ files: [{ ...file, file_path: "docs/existing.md", change_type: "update", base_file_sha: blob }] }, { oldContent: secret });
  assertEquals(old.status, 400);
  assertEquals(old.proposals.length, 0);
});

Deno.test("agent staging HTTP: existing HUMAN creation semantics are unchanged", async () => {
  const result = await run({ files: [{ ...file, new_content: "# Lesson\n\npassword=example-for-human-review" }] }, { human: true });
  assertEquals(result.status, 201);
  assertEquals(result.proposals.length, 1);
});
