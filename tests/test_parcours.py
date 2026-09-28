import hashlib
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

import yaml

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from parcours import PlanningError, canonical_title, load_planning, period_kind, status_at
from parcours_catalog import catalog, model, load_msp, resolve, reorder_courses, doc_path
from parcours_render import render_parcours, render_msp


class PlanningTests(unittest.TestCase):
    def parse(self, value):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "planning.yaml"
            path.write_text(value, encoding="utf-8")
            return load_planning(path)

    def test_snapshot_is_only_authorized_syntax_repair(self):
        raw = (ROOT / "tests/fixtures/planning-drive-original.txt").read_bytes()
        self.assertEqual(hashlib.sha256(raw).hexdigest(), "0b8ad75dbb9a7155d7990b512d8ddff2c607713503946b1523080fdb6a7b6324")
        lines = raw.decode().splitlines(keepends=True)
        fixed = "".join(
            "- " + json.dumps(line[2:].rstrip("\n"), ensure_ascii=False) + "\n"
            if line.startswith('- "non renseigné" signifie') else
            line.replace("    cours:", "  - cours:", 1) if line.startswith("    cours:") else line
            for line in lines)
        self.assertEqual((ROOT / "data/parcours_tssr.yaml").read_text(), fixed)
        # Fixed count is a fidelity assertion for this immutable fixture, not a portal limit.
        self.assertEqual(len(load_planning()), 28)

    def test_source_provenance_hashes_match_exact_bytes(self):
        provenance = json.loads((ROOT / "data/parcours-source.json").read_text())
        self.assertEqual(provenance["policy"], "GOOGLE_DRIVE_READ_ONLY")
        for key, path in [("originalSha256", "tests/fixtures/planning-drive-original.txt"), ("snapshotSha256", "data/parcours_tssr.yaml")]:
            self.assertEqual(provenance[key], hashlib.sha256((ROOT / path).read_bytes()).hexdigest())

    def test_external_text_is_escaped_in_rendered_html(self):
        periods = model()
        attack = '<img src=x onerror="alert(1)">'
        periods[0].update(cours=attack, modalite_lieu=attack, formateurs=[attack])
        with patch("parcours_render.model", return_value=periods):
            rendered = render_parcours()
        self.assertNotIn("<img", rendered)
        self.assertEqual(rendered.count("&lt;img"), 3)

    def test_sorted_without_mutation_or_course_duplication(self):
        periods = load_planning()
        self.assertEqual(periods[0]["cours"], "Microsoft 365 - Outils collaboratifs")
        self.assertEqual(periods[-1]["date_fin"], "2027-02-19")
        windows = [p for p in periods if p["cours"].startswith("Systèmes clients")]
        self.assertEqual(len(windows), 2)
        self.assertEqual(len({canonical_title(p["cours"]) for p in windows}), 1)
        self.assertEqual(len({p["id"] for p in windows}), 2)
        self.assertFalse(any("status" in p for p in periods))

    def test_status_inclusive_boundaries(self):
        p = load_planning()[0]
        for day, expected in [("2026-06-07", "a_venir"), ("2026-06-08", "en_cours"), ("2026-06-12", "en_cours"), ("2026-06-13", "passe")]:
            self.assertEqual(status_at(p, day), expected)

    def test_types(self):
        for title, expected in [("Mise en situation professionnelle : services réseau", "MSP"), ("Stage en entreprise", "STAGE"), ("Interruption", "INTERRUPTION"), ("Evaluations Finales RENNES", "EVALUATION"), ("Bases des réseaux", "COURSE")]:
            self.assertEqual(period_kind(title), expected)

    def test_mapping_never_resolves_ambiguities(self):
        periods = model()
        self.assertEqual(periods[0]["mapping"]["state"], "MATCH_EXACT")
        self.assertEqual(periods[2]["mapping"]["path"], periods[3]["mapping"]["path"])
        self.assertEqual(periods[5]["mapping"]["state"], "MATCH_PROBABLE")
        self.assertIsNone(periods[5]["mapping"]["path"])
        duplicate = resolve(periods[0], catalog() * 2, [], [])
        self.assertEqual(duplicate["state"], "MATCH_PROBABLE")
        self.assertIsNone(duplicate["path"])
        self.assertEqual(periods[10]["mapping"]["state"], "MISSING")

    def test_msp_relations_proven_and_paths_safe(self):
        msps = load_msp()
        self.assertEqual(len(msps), 2)
        self.assertTrue(msps[0]["relations"])
        self.assertFalse(msps[1]["relations"])
        for bad in ["../README.md", "javascript:alert.md", "modules/absent.md"]:
            with self.assertRaises(PlanningError):
                doc_path(bad)

    def test_render_pages_no_fixed_status_and_valid_links(self):
        from html.parser import HTMLParser
        class Links(HTMLParser):
            def handle_starttag(self, tag, attrs):
                for key, value in attrs:
                    if key == "href":
                        target = value.removeprefix("../").rstrip("/")
                        self_test.assertTrue((ROOT / "docs" / (target + ".md")).is_file() or (ROOT / "docs" / target / "index.md").is_file(), value)
        self_test = self
        rendered = render_parcours()
        self.assertEqual(rendered.count('data-period-start='), len(load_planning()))
        self.assertNotIn('>Passé<', rendered)
        self.assertIn('Correspondance à confirmer', rendered)
        Links().feed(rendered)
        Links().feed(render_msp())

    def test_navigation_preserves_every_existing_group(self):
        groups = [{c["title"]: [{"Présentation": c["path"]}]} for c in catalog()]
        nav = [{"Accueil": "index.md"}, {"Cours": groups.copy()}]
        reorder_courses(nav, model())
        self.assertCountEqual(nav[1]["Cours"], groups)
        self.assertIn("Microsoft 365", next(iter(nav[1]["Cours"][0])))
        self.assertEqual(nav[0], {"Accueil": "index.md"})

    def test_reject_invalid_source_and_duplicates(self):
        with self.assertRaises(PlanningError):
            load_planning(ROOT / "tests/fixtures/planning-drive-original.txt")
        for raw in ["planning: []\nplanning: []", "a: &a [*a]", "!!python/object:os.system {}"]:
            with self.assertRaises(PlanningError):
                self.parse(raw)

    def test_schema_dates_status_and_future_period(self):
        data = yaml.safe_load((ROOT / "data/parcours_tssr.yaml").read_text())
        data["planning"].append({**data["planning"][0], "formateurs": ["Test"], "cours": "Nouveau cours", "date_debut": "2028-01-01", "date_fin": "2028-01-02"})
        self.assertEqual(len(self.parse(yaml.safe_dump(data))), 29)
        for key, value in [("date_fin", "2020-01-01"), ("date_debut", "2028-02-30"), ("status", "passe"), ("formateurs", "invalide")]:
            bad = {**data, "planning": [{**data["planning"][-1], key: value}]}
            with self.assertRaises(PlanningError):
                self.parse(yaml.safe_dump(bad))


if __name__ == "__main__":
    unittest.main()
