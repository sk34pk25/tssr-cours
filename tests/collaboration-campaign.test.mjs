import assert from "node:assert/strict";
import fs from "node:fs";
import vm from "node:vm";
import test from "node:test";
const read = (path) => fs.readFileSync(new URL("../" + path, import.meta.url), "utf8");
const context = { module: { exports: {} } };
vm.runInNewContext(read("docs/assets/javascripts/collaboration-campaign.js"), context);
const campaign = context.module.exports;
const ids = Array.from(campaign.ids);

test("frozen exact membership, no future title/status/date classification", () => {
  assert.equal(ids.length, 64);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.every(id => /^[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$/.test(id)));
  assert.ok(Object.isFrozen(campaign.ids));
  for (const id of ids) assert.equal(campaign.contains(id), true);
  for (const id of ["new-debian-campaign", "c53a7fcf-e6d4-470d-a651-c90cce729413",
    "154e25e2-8487-40d3-9d05-6cdac80efef5", "bb7837f6-2281-44d1-bfb7-439e25f940e4"]) {
    assert.equal(campaign.contains(id), false);
  }
});

test("active filter excludes UUIDs server-side; history selects the same exact set", () => {
  const calls = [], query = {
    not(...args) { calls.push(["not", ...args]); return this; },
    in(...args) { calls.push(["in", ...args]); return this; }
  };
  assert.equal(campaign.scope(query), query);
  assert.deepEqual(calls.shift(), ["not", "id", "in", "(" + ids.join(",") + ")"]);
  assert.equal(campaign.scope(query, true), query);
  const history = calls.shift();
  assert.equal(history[0], "in"); assert.equal(history[1], "id");
  assert.deepEqual(Array.from(history[2]), ids);
});

test("every historical status is excluded; new CRs and unrelated history stay visible", () => {
  const statuses = ["pending", "approved", "publishing", "failed", "conflict", "cancelled", "published", "rejected"];
  const rows = ids.flatMap(id => statuses.map(status => ({ id, status })));
  rows.push(...statuses.map(status => ({ id: "new-" + status, status, title: "Debian M01" })));
  const before = JSON.stringify(rows);
  function query() {
    return {
      not(_field, _op, values) { const denied = new Set(values.slice(1, -1).split(",")); return rows.filter(r => !denied.has(r.id)); },
      in(_field, values) { return rows.filter(r => values.includes(r.id)); }
    };
  }
  assert.equal(campaign.scope(query()).length, statuses.length);
  assert.equal(campaign.scope(query(), true).length, ids.length * statuses.length);
  assert.equal(JSON.stringify(rows), before);
});

test("both CR queries use official scope; missing policy fails closed; history is read-only", () => {
  const source = read("docs/assets/javascripts/collaboration.js");
  assert.equal((source.match(/from\("change_requests"\)/g) || []).length, 2);
  assert.equal((source.match(/campaign.scope\(state.client.from\("change_requests"\)/g) || []).length, 2);
  assert.match(source, /if \(!campaign\) throw new Error/);
  assert.match(source, /if \(!campaign\) \{ bar.hidden = true; return; \}/);
  for (const name of ["canVote", "canCancel", "canRevise"]) assert.ok(source.includes("const " + name + " = !archived &&"));
  assert.ok(source.includes("!archived && utils.canOverrideValidation"));
  assert.match(source, /if \(action === "diff"\) return showDiff\(request\);\s*\/\/[^\n]+\s*if \(campaign.contains\(request.id\)\) return;/);
  const config = read("mkdocs.yml");
  assert.ok(config.indexOf("collaboration-campaign.js") < config.indexOf("  - assets/javascripts/collaboration.js"));
});
