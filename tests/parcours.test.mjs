import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";
import test from "node:test";

const source = readFileSync(new URL("../docs/assets/javascripts/parcours.js", import.meta.url), "utf8");
const sandbox = { Intl, Date };
vm.runInNewContext(source, sandbox);
const { parisDay, status } = sandbox.TSSRParcours;

test("planning date badges wrap and narrow cards use the full width without changing historical cards", () => {
  const css = readFileSync(new URL("../docs/assets/stylesheets/parcours.css", import.meta.url), "utf8");
  assert.match(css, /\.tssr-planning \.tssr-timeline__date\s*\{\s*display: inline-block;\s*max-width: 100%/);
  assert.match(css, /\.tssr-planning time\s*\{\s*white-space: nowrap/);
  assert.match(css, /@media \(max-width: 30em\)/);
  assert.match(css, /\.tssr-planning \.tssr-timeline__card\s*\{\s*grid-template-columns: minmax\(0, 1fr\)/);
});

test("period state is inclusive and never stored", () => {
  for (const [today, expected] of [["2026-06-07", "a_venir"], ["2026-06-08", "en_cours"], ["2026-06-12", "en_cours"], ["2026-06-13", "passe"]]) {
    assert.equal(status("2026-06-08", "2026-06-12", today), expected);
  }
  assert.doesNotMatch(source, /localStorage|sessionStorage|fetch\(/);
});

test("Paris civil day is correct across UTC midnight and DST", () => {
  for (const [instant, expected] of [["2026-06-07T22:01:00Z", "2026-06-08"], ["2026-12-31T23:01:00Z", "2027-01-01"], ["2026-10-25T01:30:00Z", "2026-10-25"]]) {
    assert.equal(parisDay(new Date(instant)), expected);
  }
});

test("instant navigation, visibility return and elapsed time recompute states", () => {
  const events = {}, nodes = [{ dataset: { periodStart: "2000-01-01", periodEnd: "2000-01-02" }, textContent: "" }];
  let tick, subscription;
  const window = { document: { querySelectorAll: () => nodes, addEventListener: (key, fn) => { events[key] = fn; } }, addEventListener: (key, fn) => { events[key] = fn; }, setInterval: (fn) => { tick = fn; }, document$: { subscribe: (fn) => { subscription = fn; } } };
  vm.runInNewContext(source, { window, Intl, Date });
  assert.equal(nodes[0].textContent, "Passé");
  for (const refresh of [tick, subscription, events.visibilitychange, events.pageshow, events.DOMContentLoaded]) {
    nodes[0].textContent = "stale";
    refresh();
    assert.equal(nodes[0].textContent, "Passé");
  }
});
