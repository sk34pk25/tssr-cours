"""Offline approval-unit policy: never authenticates or submits proposals."""
import copy
import json
from pathlib import Path
import subprocess
import sys
import unittest
from unittest.mock import patch
from urllib.parse import quote

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from ingestion.granularity import (GranularityError, assert_payload_granularity,
    shared_delta, glossary_delta, review_description)
from ingestion.proposals import ProposalClient
from ingestion.drive import SourceError

COURSE = "modules/05-administration-debian-gnu-linux/index.md"
MODULE = "modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md"
MODULE9 = "modules/05-administration-debian-gnu-linux/module-09-gestion-des-espaces-de-stockage-file-system.md"
MODULE12 = "modules/05-administration-debian-gnu-linux/module-12-maintenance-d-un-systeme-en-production.md"


def bundle():
    paths = ["docs/tp/administration-linux/module-08/" + name + ".md"
             for name in ("index", "enonces", "corrections")]
    paths += ["docs/revision/administration-linux/" + MODULE.rsplit("/", 1)[1]]
    components = [{"filePath": path, "courseId": COURSE, "moduleId": MODULE,
                   "component": kind, "provenance": "C — fixture synthétique",
                   "summary": "Contrôle local, sans soumission."}
                  for path, kind in zip(paths, ("TP", "TP", "TP", "REVISION"))]
    payload = {"action": "create", "title": "Fixture Debian M08 ECOSYSTEM",
            "description": "Fixture sans publication.",
            "base_commit_sha": subprocess.check_output(
                ["git", "rev-parse", "HEAD"], cwd=ROOT, text=True).strip(),
            "payload_summary": {"granularity": {"schemaVersion": 1,
                "bundleType": "ECOSYSTEM", "courseId": COURSE, "moduleId": MODULE,
                "components": components}},
            "files": [{"file_path": path, "change_type": "create",
                       "new_content": "# Fixture\n", "content_encoding": "utf-8"}
                      for path in paths]}
    for file in payload["files"]:
        result = subprocess.run(["git", "rev-parse", payload["base_commit_sha"] + ":" + file["file_path"]],
                                cwd=ROOT, capture_output=True, text=True)
        if result.returncode == 0:
            file.update(change_type="update", base_file_sha=result.stdout.strip())
    payload["description"] = review_description(payload["payload_summary"]["granularity"])
    return payload


def manifest(payload):
    return payload["payload_summary"]["granularity"]


def append_file(payload, path, kind, content="# Fixture\n"):
    file = {"file_path": path, "change_type": "create", "new_content": content}
    result = subprocess.run(["git", "rev-parse", payload["base_commit_sha"] + ":" + path],
                            cwd=ROOT, capture_output=True, text=True)
    if result.returncode == 0:
        file.update(change_type="update", base_file_sha=result.stdout.strip())
    payload["files"].append(file)
    manifest(payload)["components"].append({"filePath": path, "component": kind,
        "courseId": manifest(payload)["courseId"], "moduleId": manifest(payload)["moduleId"],
        "summary": "Delta synthétique", "provenance": "C — fixture"})
    payload["description"] = review_description(manifest(payload))


def scope(text, module=MODULE):
    metadata = {"courseId": COURSE, "moduleId": module}
    return "<!-- TSSR-MODULE-SCOPE-V1:" + quote(json.dumps(metadata), safe="") + " -->\n" + text + "\n<!-- /TSSR-MODULE-SCOPE-V1 -->"


def select(payload, positions):
    payload["files"] = [payload["files"][i] for i in positions]
    manifest(payload)["components"] = [manifest(payload)["components"][i] for i in positions]
    payload["description"] = review_description(manifest(payload))
    return payload


class GranularityTests(unittest.TestCase):
    def test_m08_ecosystem(self):
        assert_payload_granularity(bundle())

    def test_cross_module_rejected(self):
        payload = bundle()
        payload["files"][1]["file_path"] = "docs/tp/administration-linux/module-09/enonces.md"
        payload["payload_summary"]["granularity"]["components"][1]["filePath"] = payload["files"][1]["file_path"]
        with self.assertRaises(GranularityError):
            assert_payload_granularity(payload)

    def test_legacy_unitary(self):
        for path in ("docs/memo/fixture.md", "docs/fiche/fixture.md", "docs/x.md", "docs/" + MODULE):
            with self.subTest(path=path):
                assert_payload_granularity({"files": [{"file_path": path,
                    "change_type": "create", "new_content": "# Fixture"}]})

    def test_tp_presentation_statement_solution_and_tp_solution_revision(self):
        for positions in ([0, 1, 2], [0, 2, 3]):
            assert_payload_granularity(select(bundle(), positions))

    def test_revision_and_module_specific_memo(self):
        payload = select(bundle(), [3])
        append_file(payload, "docs/memo/lvm-fixture.md", "MEMO", scope("# Mémo fixture"))
        assert_payload_granularity(payload)

    def test_tp_and_module_commands_delta_at_git_base(self):
        payload = select(bundle(), [0])
        path = "docs/commandes/linux.md"
        before = subprocess.check_output(["git", "show", payload["base_commit_sha"] + ":" + path], cwd=ROOT).decode()
        append_file(payload, path, "COMMANDS", before + scope("\n## Commandes M08 fixture\n"))
        assert_payload_granularity(payload)
        payload["files"][-1]["new_content"] = "global change\n" + payload["files"][-1]["new_content"]
        with self.assertRaises(GranularityError):
            assert_payload_granularity(payload)

    def test_m12_three_distinct_tps_and_revision(self):
        payload = bundle()
        payload["files"] = []
        manifest(payload).update(moduleId=MODULE12, components=[])
        for tp in ("tp01", "tp02", "tp03"):
            for part in ("index", "enonces", "corrections"):
                append_file(payload, f"docs/tp/administration-linux/module-12/{tp}/{part}.md", "TP")
        append_file(payload, "docs/revision/administration-linux/" + MODULE12.rsplit("/", 1)[1], "REVISION")
        assert_payload_granularity(payload)
        self.assertEqual(len(payload["files"]), 10)

    def test_course_page_needs_own_approval_even_with_matching_kahoot(self):
        payload = select(bundle(), [0])
        append_file(payload, "docs/" + MODULE, "COURSE_PAGE")
        with self.assertRaises(GranularityError):
            assert_payload_granularity(payload)
        # The old grouping of course + its Kahoot is deliberately retired.
        quiz = "<!-- TSSR-KAHOOT-V1:" + quote(json.dumps({"courseId": COURSE, "moduleId": MODULE})) + " -->"
        append_file(payload, "docs/kahoot/synthetic.md", "KAHOOT", quiz)
        select(payload, [1, 2])
        for with_manifest in (True, False):
            candidate = copy.deepcopy(payload)
            if not with_manifest:
                candidate.pop("payload_summary")
            with self.assertRaises(GranularityError):
                assert_payload_granularity(candidate)

    def test_course_page_alone_with_explicit_identity(self):
        payload = bundle()
        payload["files"] = []
        manifest(payload).update(bundleType="COURSE_PAGE", components=[])
        append_file(payload, "docs/" + MODULE, "COURSE_PAGE")
        self.assertEqual(assert_payload_granularity(payload)["bundleType"], "COURSE_PAGE")

    def test_course_index_msp_global_resource_and_technical_mix_refused(self):
        for path, kind in [("docs/" + COURSE, "LINKS"), ("docs/msp/independent.md", "RESOURCE"),
                ("docs/tp/administration-linux/index.md", "TP"),
                ("docs/ressources/global.md", "RESOURCE"),
                ("docs/assets/javascripts/kahoot.js", "LINKS"),
                ("scripts/technical.md", "LINKS")]:
            with self.subTest(path=path):
                payload = bundle()
                append_file(payload, path, kind)
                with self.assertRaises(GranularityError):
                    assert_payload_granularity(payload)

    def test_same_number_other_course_and_two_different_modules_refused(self):
        for course, module in [("modules/02-systemes-clients-microsoft/index.md",
                               "modules/02-systemes-clients-microsoft/module-08-le-partage-de-ressources.md"),
                              (COURSE, MODULE9)]:
            payload = bundle()
            manifest(payload)["components"][1].update(courseId=course, moduleId=module)
            with self.assertRaises(GranularityError):
                assert_payload_granularity(payload)
        payload = bundle()
        manifest(payload)["components"][1]["filePath"] = "docs/tp/systemes-clients/module-08/enonces.md"
        payload["files"][1]["file_path"] = manifest(payload)["components"][1]["filePath"]
        with self.assertRaises(GranularityError):
            assert_payload_granularity(payload)

    def test_missing_contradictory_ambiguous_or_duplicate_manifest_refused(self):
        for mutate in (
            lambda p: p.pop("payload_summary"),
            lambda p: manifest(p)["components"][1].pop("moduleId"),
            lambda p: manifest(p)["components"][1].update(moduleId=MODULE9),
            lambda p: manifest(p).update(bundleType="UNKNOWN"),
            lambda p: manifest(p).update(bundleType="TRANSVERSAL"),
            lambda p: manifest(p)["components"][1].update(provenance=""),
            lambda p: p["files"][1].update(moduleId=MODULE9, courseId=COURSE),
            lambda p: p["files"].append(copy.deepcopy(p["files"][0])),
            lambda p: p["files"][1].update(new_file_path="docs/other.md"),
            lambda p: p["files"][1].update(content_encoding="base64"),
        ):
            with self.subTest(mutation=mutate):
                payload = bundle()
                mutate(payload)
                with self.assertRaises(GranularityError):
                    assert_payload_granularity(payload)

    def test_frontmatter_and_kahoot_cannot_contradict_manifest(self):
        payload = bundle()
        payload["files"][0]["new_content"] = "---\ncourseId: " + COURSE + "\nmoduleId: " + MODULE9 + "\n---\n# Fixture"
        with self.assertRaises(GranularityError):
            assert_payload_granularity(payload)
        for identity in ({"courseId": COURSE, "moduleId": MODULE9}, {"moduleId": MODULE}):
            payload = bundle()
            append_file(payload, "docs/kahoot/synthetic.md", "KAHOOT", "<!-- TSSR-KAHOOT-V1:" + quote(json.dumps(identity)) + " -->")
            with self.assertRaises(GranularityError):
                assert_payload_granularity(payload)

    def test_same_module_kahoot_component(self):
        payload = bundle()
        append_file(payload, "docs/kahoot/synthetic.md", "KAHOOT", "<!-- TSSR-KAHOOT-V1:" + quote(json.dumps({"courseId": COURSE, "moduleId": MODULE})) + " -->")
        assert_payload_granularity(payload)

    def test_shared_delta_keeps_other_module_blocks_intact(self):
        other = scope("M09 intact", MODULE9)
        before = "# Shared\n" + other + scope("Old M08")
        after = "# Shared\n" + other + scope("New M08")
        shared_delta(before, after, (COURSE, MODULE))
        for bad in (after.replace("M09 intact", "M09 changed"), after + scope("M09 new", MODULE9),
                    after.replace("# Shared", "# Global changed"), scope(before)):
            with self.assertRaises(GranularityError):
                shared_delta(before, bad, (COURSE, MODULE))

    def test_shared_two_modules_and_malformed_scope_refused(self):
        for content in (scope("M08") + scope("M09", MODULE9), "# Global", "<!-- TSSR-MODULE-SCOPE-V1:broken -->"):
            payload = bundle()
            append_file(payload, "docs/memo/shared-fixture.md", "MEMO", content)
            with self.assertRaises(GranularityError):
                assert_payload_granularity(payload)

    def test_foreign_formation_path_cannot_borrow_module_scope(self):
        payload = bundle()
        append_file(payload, "docs/memo/02-systemes-clients-microsoft/global.md", "MEMO", scope("M08"))
        with self.assertRaises(GranularityError):
            assert_payload_granularity(payload)

    def test_stale_git_base_or_blob_is_refused(self):
        for mutate in (lambda p: p.update(base_commit_sha="0" * 40),
                       lambda p: p["files"][3].update(base_file_sha="0" * 40)):
            payload = bundle()
            mutate(payload)
            with self.assertRaises(GranularityError):
                assert_payload_granularity(payload)
        payload = bundle()
        payload["base_commit_sha"] = subprocess.check_output(["git", "rev-parse", "HEAD^{tree}"], cwd=ROOT, text=True).strip()
        with self.assertRaises(GranularityError):
            assert_payload_granularity(payload)

    def test_review_description_required_for_bundle(self):
        payload = bundle()
        payload["description"] = "Summary without reviewable component details"
        with self.assertRaises(GranularityError):
            assert_payload_granularity(payload)

    def test_no_duplicate_or_malformed_embedded_identity(self):
        for content in (
            "---\nmoduleId: " + MODULE9 + "\nmoduleId: " + MODULE + "\ncourseId: " + COURSE + "\n---\n# Test",
            "<!-- TSSR-KAHOOT-V1:broken",
            scope(scope("nested")),
            "---\nmoduleId: " + MODULE + "\n---broken\n# Test",
        ):
            payload = bundle()
            payload["files"][0]["new_content"] = content
            with self.assertRaises(GranularityError):
                assert_payload_granularity(payload)

    def test_transversal_is_separate_and_never_accepts_multiple_objects(self):
        payload = {"payload_summary": {"granularity": {"schemaVersion": 1, "bundleType": "TRANSVERSAL"}},
            "files": [{"file_path": "docs/commandes/linux.md", "change_type": "update", "new_content": "# Global"}]}
        self.assertEqual(assert_payload_granularity(payload)["bundleType"], "TRANSVERSAL")
        payload["files"].append({"file_path": "docs/memo/global.md", "change_type": "create", "new_content": "# Global"})
        with self.assertRaises(GranularityError):
            assert_payload_granularity(payload)

    def test_missing_base_malformed_paths_and_unknown_modules_fail_closed(self):
        for mutate in (
            lambda p: p.pop("base_commit_sha"),
            lambda p: manifest(p).update(moduleId="M08"),
            lambda p: manifest(p).update(moduleId=MODULE.replace("module-08", "module-99")),
            lambda p: p["files"][0].update(file_path="docs/tp/../assets/x.md"),
            lambda p: p["files"][0].update(file_path="/tmp/page.md"),
            lambda p: manifest(p).update(schemaVersion=True),
        ):
            payload = bundle()
            mutate(payload)
            with self.assertRaises(GranularityError):
                assert_payload_granularity(payload)

    def test_glossary_delta_human_only_and_single_module_references(self):
        payload = bundle()
        old = subprocess.check_output(["git", "show", payload["base_commit_sha"] + ":data/glossaire.json"], cwd=ROOT).decode()
        new = json.loads(old)
        new["entries"].append({"id": "synthetic-granularity", "term": "Fixture", "refs": ["debian:d08"]})
        append_file(payload, "data/glossaire.json", "GLOSSARY", json.dumps(new))
        assert_payload_granularity(payload, agent=False)
        with self.assertRaises(GranularityError):
            assert_payload_granularity(payload)
        for refs in (["debian:d09"], ["debian:d08", "debian:d09"], []):
            new["entries"][-1]["refs"] = refs
            with self.assertRaises(GranularityError):
                glossary_delta(old, json.dumps(new), (COURSE, MODULE))

    def test_glossary_shared_term_allows_only_target_association_delta(self):
        old = json.loads((ROOT / "data/glossaire.json").read_text())
        new = copy.deepcopy(old)
        entry = next(row for row in new["entries"] if row["term"] == "ACL")
        entry["refs"].append("debian:d08")
        glossary_delta(json.dumps(old), json.dumps(new), (COURSE, MODULE))
        entry["definition"] = "Global rewrite"
        with self.assertRaises(GranularityError):
            glossary_delta(json.dumps(old), json.dumps(new), (COURSE, MODULE))
        entry["definition"] = next(row["definition"] for row in old["entries"] if row["term"] == "ACL")
        entry["refs"].append("debian:d09")
        with self.assertRaises(GranularityError):
            glossary_delta(json.dumps(old), json.dumps(new), (COURSE, MODULE))

    def test_adapter_preserves_human_manifest_in_description_without_new_authority(self):
        payload = bundle()
        preview = {"status": "READY_FOR_REVIEW", "files": payload["files"],
            "granularity": manifest(payload), "source": {"fileId": "synthetic"},
            "idempotencyKey": "a" * 64, "proposalFingerprint": "b" * 64,
            "base_commit_sha": payload["base_commit_sha"]}
        client = ProposalClient("https://" + "x" * 20 + ".supabase.co", "fixture", "fixture", enabled=True)
        request_body = {}
        class Response:
            def __enter__(self): return self
            def __exit__(self, *args): pass
            def read(self, *args):
                return b'{"change_request":{"id":"11111111-1111-4111-8111-111111111111","status":"pending"}}'
        class Opener:
            def open(self, request, **kwargs):
                request_body.update(json.loads(request.data))
                return Response()
        with patch("ingestion.proposals.urllib.request.build_opener", return_value=Opener()):
            self.assertEqual(client.submit(preview)["status"], "pending")
        self.assertEqual(request_body["payload_summary"]["idempotencyKey"], "a" * 64)
        self.assertEqual(request_body["files"], preview["files"])
        for component in manifest(payload)["components"]:
            self.assertIn(component["filePath"], request_body["description"])
            self.assertIn(component["provenance"], request_body["description"])
        self.assertIn("ECOSYSTEM", request_body["description"])
        self.assertNotIn("author_id", request_body)
        manifest(payload)["components"][1]["moduleId"] = MODULE9
        with patch("ingestion.proposals.urllib.request.build_opener", side_effect=AssertionError("network")):
            with self.assertRaises(SourceError):
                client.submit(preview)


if __name__ == "__main__":
    unittest.main()
