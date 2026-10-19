import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const context = { module: { exports: {} } };
vm.runInNewContext(fs.readFileSync(new URL("../docs/assets/javascripts/collaboration-utils.js", import.meta.url), "utf8"), context);
const utils = context.module.exports;
const admin = { role: "admin", status: "active", can_edit: true, must_change_password: false };
function approvedFailure() {
  return { id: "synthetic-change", status: "failed", failure_reason: "Missing target before Git write",
    published_commit_sha: null, published_at: null, github_pr_number: null, publication_expected_sha: null,
    publication_mode: null, publication_callback: null, change_approval_overrides: null, publication_recoveries: null,
    required_approvers: ["one", "two", "three"],
    change_approvals: ["one", "two", "three"].map(user_id => ({ user_id, decision: "approved" })) };
}

test("retry requires a human-admin-compatible profile and intact votes, without override permission", () => {
  assert.equal(utils.canRetryPublication(admin, approvedFailure()), true);
  for (const delta of [{ role: "member" }, { status: "suspended" }, { can_edit: false }, { must_change_password: true }]) {
    assert.equal(utils.canRetryPublication({ ...admin, ...delta }, approvedFailure()), false);
  }
  assert.equal(utils.canRetryPublication(null, approvedFailure()), false);
  for (const delta of [{ change_approvals: [] }, { required_approvers: [] }, { required_approvers: ["one", "one", "two"] },
    { change_approvals: [...approvedFailure().change_approvals, { user_id: "other", decision: "rejected" }] }]) {
    assert.equal(utils.canRetryPublication(admin, { ...approvedFailure(), ...delta }), false);
  }
});

test("retry fails closed on any Git effect, recovery, override, missing field or non-failed state", () => {
  for (const key of ["published_commit_sha", "published_at", "github_pr_number", "publication_expected_sha", "publication_mode", "publication_callback"]) {
    assert.equal(utils.canRetryPublication(admin, { ...approvedFailure(), [key]: "effect" }), false);
    const incomplete = approvedFailure(); delete incomplete[key];
    assert.equal(utils.canRetryPublication(admin, incomplete), false);
  }
  for (const key of ["publication_recoveries", "change_approval_overrides"]) {
    for (const relation of [{ id: "existing" }, [{ id: "existing" }], undefined]) {
      assert.equal(utils.canRetryPublication(admin, { ...approvedFailure(), [key]: relation }), false);
    }
  }
  for (const status of ["pending", "approved", "publishing", "published", "conflict", "cancelled", "rejected"]) {
    assert.equal(utils.canRetryPublication(admin, { ...approvedFailure(), status }), false);
  }
});

const ui = fs.readFileSync(new URL("../docs/assets/javascripts/collaboration.js", import.meta.url), "utf8");
const handler = ui.slice(ui.indexOf("  async function handleChangeAction("), ui.indexOf("  async function adminList("));
async function attempt({ profile = admin, request = approvedFailure(), archived = false, confirmed = true, disabled = false, failure = false } = {}) {
  const calls = [], notices = [];
  const button = { disabled, dataset: { changeAction: "retry-publication" }, closest: () => ({ dataset: { changeId: request.id } }) };
  const sandbox = { utils, state: { profile }, campaign: { contains: () => archived },
    window: { confirm: () => confirmed }, setBusy: (b, busy) => { b.disabled = busy; },
    invoke: async (endpoint, body) => { calls.push({ endpoint, ...body }); if (failure) throw new Error("Retry refused"); },
    toast: text => notices.push(text), renderCollaborationPage: () => {},
  };
  vm.runInNewContext(handler + "\nthis.handle = handleChangeAction;", sandbox);
  await sandbox.handle({ target: { closest: () => button } }, [request]);
  return { calls, notices, button };
}

test("actual UI handler invokes only governed retry, once, with the original CR ID", async () => {
  const result = await attempt();
  assert.deepEqual(result.calls, [{ endpoint: "change-requests", action: "retry-publication", change_request_id: "synthetic-change" }]);
  assert.equal(result.button.disabled, false);
});

test("delegated clicks cannot retry archived, unapproved, non-admin or already busy cards", async () => {
  for (const options of [{ archived: true }, { confirmed: false }, { disabled: true },
    { profile: { ...admin, role: "member" } }, { request: { ...approvedFailure(), change_approvals: [] } }]) {
    assert.equal((await attempt(options)).calls.length, 0);
  }
  const result = await attempt({ failure: true });
  assert.deepEqual(result.notices, ["Retry refused"]);
  assert.equal(result.button.disabled, false);
});
