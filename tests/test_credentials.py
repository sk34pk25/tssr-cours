import json
from pathlib import Path
import sys
import unittest

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from ingestion.pipeline import safe_text
from ingestion.drive import SourceError
from ingestion.credentials import contains_credential


class CredentialsTests(unittest.TestCase):
    def test_cli_argument_boundary(self):
        self.assertFalse(contains_credential("Validation du login/Password avec Outlook online"))
        for prefix in ("", "\n", "\t", "`", "(", ":", ";", "\"", "'"):
            for option in ("/password", "--password", "-password", "--token", "--secret"):
                with self.subTest(prefix=prefix, option=option):
                    self.assertTrue(contains_credential(f"{prefix}{option} secret123"))

    def test_short_p_has_command_specific_non_secret_meanings(self):
        for text in ("netstat -p : Affiche les processus associés aux connexions",
                     "netstat -p", "netstat -p :", "netstat -p | grep :22",
                     "mkdir -p /tmp/test", "ssh -p 22 host"):
            with self.subTest(text=text):
                self.assertFalse(contains_credential(text))
                self.assertTrue(contains_credential(text + "\npassword=secret123"))

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
