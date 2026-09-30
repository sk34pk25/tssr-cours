import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from ingestion.pipeline import safe_text
from ingestion.drive import SourceError


class CredentialsTests(unittest.TestCase):
    def test_shared_cases_through_ingestion_boundary(self):
        cases = json.loads((ROOT / "tests/fixtures/credentials.json").read_text())
        for case in cases:
            with self.subTest(case["name"]):
                text = "".join(case["parts"])
                if case["allowed"]:
                    self.assertEqual(safe_text(text), text)
                else:
                    with self.assertRaises(SourceError) as failure:
                        safe_text(text)
                    self.assertNotIn(text, str(failure.exception))
