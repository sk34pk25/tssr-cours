import sys
from pathlib import Path
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from import_contract import KINDS, prepare_analysis
from parcours import PlanningError


class ImportContractTests(unittest.TestCase):
    def kahoot(self, count=1):
        return dict(questions=[dict(question="Question ?", answers=["Oui", "Non"], correctAnswer="Oui", provenance="A", source="Module, page 1")] * count, course_id="modules/test/index.md", module_id="modules/test/module.md")
    def args(self):
        return dict(file_id="source-test", content_sha256="a" * 64, kind="COURSE", units=[dict(provenance="A", source="page 1", content="Extrait factice")])

    def test_types_and_no_agent_authority(self):
        for kind in KINDS:
            result = prepare_analysis(**{**self.args(), "kind": kind}, **(self.kahoot() if kind == "KAHOOT_SOURCE" else {}))
            self.assertTrue(result["requiresHumanReview"])
            self.assertFalse({"vote", "override", "published", "approved"} & result.keys())
        with self.assertRaises(TypeError):
            prepare_analysis(**self.args(), can_override_validation=True)

    def test_idempotency_and_revision(self):
        first = prepare_analysis(**self.args())
        self.assertEqual(first, prepare_analysis(**self.args()))
        self.assertNotEqual(first["idempotencyKey"], prepare_analysis(**{**self.args(), "content_sha256": "b" * 64})["idempotencyKey"])

    def test_kahoot_adaptive_bounded_and_not_empty(self):
        for count in [1, 7, 20]:
            result = prepare_analysis(**{**self.args(), "kind": "KAHOOT_SOURCE"}, **self.kahoot(count))
            self.assertEqual(len(result["questions"]), count)
        for count in [0, 21, 30, 40]:
            with self.assertRaises(PlanningError):
                prepare_analysis(**{**self.args(), "kind": "KAHOOT_SOURCE"}, **self.kahoot(count))

    def test_question_source_and_target_identity(self):
        args = {**self.args(), "kind": "KAHOOT_SOURCE", **self.kahoot()}
        result = prepare_analysis(**args)
        self.assertNotEqual(result["idempotencyKey"], prepare_analysis(**{**args, "module_id": "modules/test/other.md"})["idempotencyKey"])
        args["questions"][0].pop("source")
        with self.assertRaises(PlanningError):
            prepare_analysis(**args)

    def test_provenance_required(self):
        with self.assertRaises(PlanningError):
            prepare_analysis(**{**self.args(), "units": [{"content": "Sans source"}]})
