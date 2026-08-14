import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";
import vm from "node:vm";

const context = { module: { exports: {} }, exports: {} };
vm.runInNewContext(
  fs.readFileSync(new URL("../docs/assets/javascripts/glossaire.js", import.meta.url), "utf8"),
  context
);
const glossary = context.module.exports;

function entry(term, overrides = {}) {
  return glossary.createEntry({
    term,
    fullName: "",
    definition: "Définition pédagogique suffisamment précise pour le test.",
    aliases: [],
    keywords: [],
    courses: ["reseaux"],
    modules: ["r03"],
    letter: glossary.normalizeText(term).replace(/[^a-z]/g, "").slice(0, 1).toUpperCase(),
    courseSort: "bases des reseaux",
    moduleSort: "003",
    sourceOrder: 1,
    ...overrides
  });
}

const fixtures = [
  entry("IPv4", { aliases: ["IP version 4"], keywords: ["adressage"], sourceOrder: 1 }),
  entry("Adresse réseau", { definition: "Première adresse d’un sous-réseau IPv4, réservée à son identification.", sourceOrder: 2 }),
  entry("SLA", {
    fullName: "Service Level Agreement",
    definition: "Accord documenté qui précise les niveaux de service attendus.",
    aliases: ["accord de niveau de service"],
    keywords: ["disponibilité", "délai"],
    courses: ["itil", "glpi"], modules: ["i03", "g04"], letter: "S",
    courseSort: "sensibilisation itil", moduleSort: "043", sourceOrder: 3
  }),
  entry("GLPI", {
    definition: "Application libre de gestion de parc et de services informatiques.",
    keywords: ["ticket", "inventaire"],
    courses: ["glpi"], modules: ["g01"], letter: "G",
    courseSort: "administration glpi", moduleSort: "049", sourceOrder: 4
  })
];

test("01 — normalization ignores accents, apostrophes and case", () => {
  assert.equal(glossary.normalizeText("RÉSEAU d’Entreprise"), "reseau d entreprise");
});

test("02 — query tokenization is stable with repeated spaces", () => {
  assert.deepEqual(Array.from(glossary.tokenizeQuery("  Adresse   IPv4 ")), ["adresse", "ipv4"]);
});

test("03 — exact term search receives the strongest score", () => {
  assert.ok(glossary.scoreEntry(fixtures[0], "IPv4") > glossary.scoreEntry(fixtures[1], "IPv4"));
});

test("04 — aliases are searchable", () => {
  assert.ok(glossary.scoreEntry(fixtures[2], "accord de niveau") >= 0);
});

test("05 — full names, definitions and keywords are searchable", () => {
  assert.ok(glossary.scoreEntry(fixtures[2], "Service Agreement") >= 0);
  assert.ok(glossary.scoreEntry(fixtures[2], "disponibilite") >= 0);
  assert.ok(glossary.scoreEntry(fixtures[3], "parc") >= 0);
});

test("06 — multiword search applies AND semantics", () => {
  assert.ok(glossary.scoreEntry(fixtures[1], "adresse sous-reseau") >= 0);
  assert.equal(glossary.scoreEntry(fixtures[1], "adresse ticket"), -1);
});

test("07 — a query with no match returns an empty result", () => {
  assert.equal(glossary.filterAndSort(fixtures, { query: "zoologie", letter: "", course: "", module: "", sort: "az" }).length, 0);
});

test("08 — the alphabetical filter keeps only the requested initial", () => {
  const result = glossary.filterAndSort(fixtures, { query: "", letter: "S", course: "", module: "", sort: "az" });
  assert.deepEqual(result.map((item) => item.term), ["SLA"]);
});

test("09 — the course filter includes transversal entries", () => {
  const result = glossary.filterAndSort(fixtures, { query: "", letter: "", course: "itil", module: "", sort: "az" });
  assert.deepEqual(result.map((item) => item.term), ["SLA"]);
});

test("10 — the module filter targets one exact pedagogical context", () => {
  const result = glossary.filterAndSort(fixtures, { query: "", letter: "", course: "", module: "g04", sort: "az" });
  assert.deepEqual(result.map((item) => item.term), ["SLA"]);
});

test("11 — search, initial, course and module combine with AND semantics", () => {
  const result = glossary.filterAndSort(fixtures, { query: "niveau service", letter: "S", course: "glpi", module: "g04", sort: "az" });
  assert.deepEqual(result.map((item) => item.term), ["SLA"]);
});

test("12 — A to Z sorting is accent insensitive", () => {
  const result = glossary.filterAndSort(fixtures, { query: "", letter: "", course: "", module: "", sort: "az" });
  assert.deepEqual(result.map((item) => item.term), ["Adresse réseau", "GLPI", "IPv4", "SLA"]);
});

test("13 — Z to A sorting reverses alphabetical order", () => {
  const result = glossary.filterAndSort(fixtures, { query: "", letter: "", course: "", module: "", sort: "za" });
  assert.deepEqual(result.map((item) => item.term), ["SLA", "IPv4", "GLPI", "Adresse réseau"]);
});

test("14 — course sorting groups on the generated course key", () => {
  const result = glossary.filterAndSort(fixtures, { query: "", letter: "", course: "", module: "", sort: "course" });
  assert.deepEqual(result.map((item) => item.term), ["GLPI", "Adresse réseau", "IPv4", "SLA"]);
});

test("15 — module sorting uses the real curriculum order", () => {
  const result = glossary.filterAndSort(fixtures, { query: "", letter: "", course: "", module: "", sort: "module" });
  assert.deepEqual(result.map((item) => item.term), ["Adresse réseau", "IPv4", "SLA", "GLPI"]);
});

test("16 — relevance sorting favors the exact term", () => {
  const result = glossary.filterAndSort(fixtures, { query: "ipv4", letter: "", course: "", module: "", sort: "relevance" });
  assert.equal(result[0].term, "IPv4");
});

test("17 — contextual module availability follows the selected course and query", () => {
  const modules = glossary.availableModules(fixtures, { query: "niveau", letter: "", course: "glpi", module: "", sort: "az" });
  assert.deepEqual(Array.from(modules), ["i03", "g04"]);
});

test("18 — contextual letter availability follows all nonletter filters", () => {
  const letters = glossary.availableLetters(fixtures, { query: "service", letter: "", course: "glpi", module: "g04", sort: "az" });
  assert.deepEqual(Array.from(letters), ["S"]);
});

test("the generated source contains hundreds of unique, referenced terms", () => {
  const data = JSON.parse(fs.readFileSync(new URL("../data/glossaire.json", import.meta.url), "utf8"));
  const normalizedTerms = data.entries.map((item) => glossary.normalizeText(item.term));
  assert.ok(data.entries.length >= 300 && data.entries.length <= 2_000);
  assert.equal(new Set(normalizedTerms).size, data.entries.length);
  assert.ok(data.entries.every((item) => item.refs.length > 0));
  assert.equal(data.courses.length, 8);
});

test("the generated Markdown exposes every term as static indexable content", () => {
  const data = JSON.parse(fs.readFileSync(new URL("../data/glossaire.json", import.meta.url), "utf8"));
  const page = fs.readFileSync(new URL("../docs/glossaire/index.md", import.meta.url), "utf8");
  assert.equal((page.match(/data-glossary-card/g) || []).length, data.entries.length);
  assert.match(page, /data-glossary-controls hidden/);
  assert.match(page, new RegExp(`data-total="${data.entries.length}"`));
});
