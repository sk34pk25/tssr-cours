import type { SupabaseClient } from "npm:@supabase/supabase-js@2.112.3";

export const MAINTENANCE_CODE = "COLLABORATION_MAINTENANCE";
export const MAINTENANCE_PROTOCOL = "tssr-maintenance-v1";
export class MaintenanceError extends Error {
  constructor() { super(MAINTENANCE_CODE); }
}

async function checkedRpc(client: SupabaseClient, name: string, args = {}): Promise<Record<string, unknown>> {
  try {
    const { data, error } = await client.rpc(name, args);
    if (error || !data || Array.isArray(data) || data.protocol !== MAINTENANCE_PROTOCOL) throw new MaintenanceError();
    return data;
  } catch { throw new MaintenanceError(); }
}

export async function assertAdmissionOpen(client: SupabaseClient): Promise<void> {
  const state = await checkedRpc(client, "service_collaboration_state");
  if (state.mode !== "open" || !Number.isSafeInteger(state.generation) || Number(state.generation) < 1) throw new MaintenanceError();
}

export async function beginOperation(client: SupabaseClient, kind: "admin" | "publication", changeId: string | null = null): Promise<string> {
  const data = await checkedRpc(client, "service_begin_collaboration_operation", { p_kind: kind, p_change_id: changeId });
  if (typeof data.operation_id !== "string" || !/^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/.test(data.operation_id)) throw new MaintenanceError();
  return data.operation_id;
}

export async function finishOperation(client: SupabaseClient, operationId: string): Promise<void> {
  const data = await checkedRpc(client, "service_finish_collaboration_operation", { p_operation_id: operationId });
  if (data.finished !== true) throw new MaintenanceError();
}

export async function assertPublicationDrain(client: SupabaseClient, changeId: string): Promise<void> {
  const data = await checkedRpc(client, "service_check_publication_drain", { p_change_id: changeId });
  if (data.admitted !== true || data.change_request_id !== changeId) throw new MaintenanceError();
}

/** Every non-read editor action is checked; unknown actions never fail open. */
export async function guardEditorAction(client: SupabaseClient, action: string): Promise<void> {
  if (["get-source", "get-navigation", "get-course-context", "get-course-editor"].includes(action)) return;
  await assertAdmissionOpen(client);
}

/** Acquire once just before the FIRST Git write, recheck drain before each one. */
export function publicationWriteGuard(client: SupabaseClient, changeId: string) {
  let operation: string | null = null;
  return {
    async beforeWrite() {
      operation ??= await beginOperation(client, "publication", changeId);
      await assertPublicationDrain(client, changeId);
    },
    engaged: () => operation !== null,
    async finish() { if (operation) await finishOperation(client, operation); },
  };
}
