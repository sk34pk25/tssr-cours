import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const read = (p) => fs.readFileSync(new URL(`../${p}`, import.meta.url), "utf8");
test("editor mutations use centralized admission while reads retain their paths", () => {
  const endpoint = read("supabase/functions/change-requests/index.ts");
  assert.match(endpoint, /await guardEditorAction\(createAdminClient\(\), body.action\)/);
  assert.ok(endpoint.indexOf("await guardEditorAction") < endpoint.indexOf('body.action === "create"'));
  const auth = read("supabase/functions/_shared/auth.ts");
  assert.match(auth, /"x-tssr-operation": operationId/);
  assert.doesNotMatch(auth, /req.headers.get\(["']x-tssr-operation/);
  const admin = read("supabase/functions/admin-users/index.ts");
  assert.match(admin, /if \(body.action !== "list"\) await admit\(context\)/);
  assert.ok(admin.indexOf('await admit(context)') < admin.indexOf('.auth.admin.updateUserById'));
});

test("all GitHub HTTP mutations require the centralized write guard", () => {
  const source = read("supabase/functions/_shared/github.ts");
  assert.ok(source.indexOf("await config.beforeWrite()") < source.indexOf("const response = await fetch"));
  assert.match(source, /if \(!config.beforeWrite\) throw new MaintenanceError/);
  assert.match(source, /config.beforeWrite = guard.beforeWrite/);
  assert.match(source, /externallyPublished \|\| guard.engaged\(\)/);
});

test("collaborative workflow requires maintenance-aware attestation twice and pinned merge", () => {
  const source = read(".github/workflows/publish-collaboration-pr.yml");
  assert.equal(source.match(/result.get\("maintenance_protocol"\) != "tssr-maintenance-v1"/g)?.length, 2);
  assert.match(source, /--match-head-commit/);
  assert.match(source, /github.event.pull_request.head.repo.full_name == github.repository/);
  assert.match(source, /persist-credentials: false/);
  assert.match(source, /"action": "verify-pr"/);
});

test("deploy rechecks admission after build; ordinary main deployment remains possible", () => {
  const source = read(".github/workflows/deploy-docs.yml");
  assert.equal(source.match(/result.get\("maintenance_protocol"\) != "tssr-maintenance-v1"/g)?.length, 2);
  assert.ok(source.indexOf("Recheck admitted publication") < source.indexOf("- name: Publish gh-pages"));
  assert.match(source, /if: needs.attest.outputs.change_id != ''/);
  assert.match(source, /if: steps.metadata.outputs.change_id != ''/);
});

test("every PR including forks retains validation and real PostgreSQL maintenance tests", () => {
  const source = read(".github/workflows/validate-pr.yml");
  assert.match(source, /pull_request:\s+branches: \[main\]/);
  assert.doesNotMatch(source, /collaboration\/change-|pull_request_target/);
  assert.match(source, /python tests\/maintenance_postgres.py/);
});
