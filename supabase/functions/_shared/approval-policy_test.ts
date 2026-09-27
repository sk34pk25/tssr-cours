import { assertEquals, assertRejects } from "jsr:@std/assert@1.0.18";
import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";
import type { Profile } from "./auth.ts";
import { canOverrideValidation, recordAdminOverride, assertPublicationApproval } from "./approval-policy.ts";

const id = "11111111-1111-4111-8111-111111111111";
const profile: Profile = { id, auth_user_id: id, display_name: "Synthetic", email: "test@example.invalid",
  role: "admin", status: "active", can_edit: true, can_override_validation: true, must_change_password: false };

Deno.test("override permission is explicit, live and never based on display identity", async () => {
  for (const delta of [{ role: "member" }, { status: "suspended" }, { can_edit: false },
    { must_change_password: true }, { can_override_validation: false }, { can_override_validation: undefined }]) {
    const actor = { ...profile, ...delta } as Profile;
    assertEquals(canOverrideValidation(actor), false);
    await assertRejects(() => recordAdminOverride({} as SupabaseClient, actor, id, "Reviewed"), Error, "Permission");
  }
  assertEquals(canOverrideValidation({ ...profile, display_name: "Another name", email: "other@example.invalid" }), true);
});

Deno.test("override uses authenticated RPC without actor/votes from the payload", async () => {
  const client = { rpc(name: string, args: unknown) {
    assertEquals(name, "admin_override_approval");
    assertEquals(args, { p_change_request_id: id, p_reason: "Reviewed" });
    return Promise.resolve({ data: { id, status: "approved" }, error: null });
  } } as unknown as SupabaseClient;
  assertEquals((await recordAdminOverride(client, profile, id, " Reviewed ")).status, "approved");
});

Deno.test("override rejects malformed input before any RPC and propagates SQL denial", async () => {
  for (const reason of [null, {}, "", "ab", "x".repeat(1001), "line\nbreak", "x\u0000y"]) {
    await assertRejects(() => recordAdminOverride({} as SupabaseClient, profile, id, reason));
  }
  await assertRejects(() => recordAdminOverride({} as SupabaseClient, profile, "bad-id", "Reviewed"));
  await assertRejects(() => recordAdminOverride({} as SupabaseClient, profile, "AAAAAAAA-AAAA-4AAA-8AAA-AAAAAAAAAAAA", "Reviewed"));
  const client = { rpc: () => Promise.resolve({ data: null, error: { message: "COLLABORATION_MAINTENANCE" } }) } as unknown as SupabaseClient;
  await assertRejects(() => recordAdminOverride(client, profile, id, "Reviewed"), Error, "COLLABORATION_MAINTENANCE");
});

Deno.test("publication keeps unanimous consensus path without requiring an override", async () => {
  await assertPublicationApproval({} as SupabaseClient, id, ["a", "b"], ["a", "b"]);
});

Deno.test("publication accepts only a persisted override for this request, fails closed on DB errors", async () => {
  for (const result of [{ data: null, error: null }, { data: { change_request_id: "other" }, error: null },
    { data: { change_request_id: id }, error: { message: "unavailable" } }, { data: { change_request_id: id }, error: null }]) {
    const client = { from(table: string) {
      assertEquals(table, "change_approval_overrides");
      return { select: () => ({ eq(column: string, value: string) {
        assertEquals(column, "change_request_id"); assertEquals(value, id);
        return { maybeSingle: () => Promise.resolve(result) };
      } }) };
    } } as unknown as SupabaseClient;
    if (!result.error && result.data?.change_request_id === id) await assertPublicationApproval(client, id, ["a", "b"], ["a"]);
    else await assertRejects(() => assertPublicationApproval(client, id, ["a", "b"], ["a"]));
  }
});
