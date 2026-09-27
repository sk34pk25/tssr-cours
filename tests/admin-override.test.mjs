import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const context = { module: { exports: {} } };
vm.runInNewContext(fs.readFileSync(new URL("../docs/assets/javascripts/collaboration-utils.js", import.meta.url), "utf8"), context);
const { canOverrideValidation } = context.module.exports;
const admin = { role: "admin", status: "active", can_edit: true, can_override_validation: true, must_change_password: false };

test("override button requires explicit permission, not just admin or authorship", () => {
  assert.equal(canOverrideValidation(admin, { status: "pending" }), true);
  for (const delta of [{ role: "member" }, { status: "suspended" }, { can_edit: false },
    { can_override_validation: false }, { can_override_validation: undefined }, { must_change_password: true }]) {
    assert.equal(canOverrideValidation({ ...admin, ...delta }, { status: "pending" }), false);
  }
  assert.equal(canOverrideValidation(null, { status: "pending" }), false);
});

test("override button is absent for every non-pending lifecycle state", () => {
  for (const status of ["approved", "publishing", "published", "failed", "conflict", "rejected", "cancelled"]) {
    assert.equal(canOverrideValidation(admin, { status }), false);
  }
});
