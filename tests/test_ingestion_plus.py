import copy
import contextlib
import io
import json
import os
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]/"scripts"))
from ingestion.plus import prepare, finalize, connector_metadata, simulate_segment, MAX_PACKAGE_BYTES
from ingestion.registry import Registry
from ingestion.drive import TSSR_ROOT, FOLDER, SourceError
from ingest_plus import main as plus_main
from ingestion.plus import private_json

ROOT = Path(__file__).resolve().parents[1]
TARGET = {"courseId":"modules/01-bases-reseaux/index.md",
          "moduleId":"modules/01-bases-reseaux/module-03-l-adressage-ipv4.md",
          "targetPath":"docs/modules/01-bases-reseaux/module-03-l-adressage-ipv4.md"}


class PlusTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.reg = Registry(self.tmp.name)
        self.addCleanup(self.reg.close)
        self.raw = b"Subnet exercise.\nSecond exercise."
        self.meta = {"id":"fixture-plus","name":"test.txt","mimeType":"text/plain",
                     "size":len(self.raw),"parents":[TSSR_ROOT]}
        self.before = (ROOT/TARGET["targetPath"]).read_bytes()
        self.addCleanup(lambda: self.assertEqual((ROOT/TARGET["targetPath"]).read_bytes(),self.before))

    def prepare(self, raw=None):
        return prepare(self.reg,ROOT,self.meta,raw or self.raw,TARGET,"TP")

    def output(self, work):
        return {"packageId":work["packageId"],"classification":"TP","target":TARGET,
            "responses":[{"segmentHash":s["hash"],"units":[{"source":s["hash"],
                "provenance":"B","content":"## Exercice\n"+s["text"]}],"questions":[]} for s in work["segments"]]}

    def test_no_api_even_with_key_and_network_traps(self):
        with patch.dict(os.environ,{"OPENAI_API_KEY":"fixture-do-not-use"}), \
             patch("urllib.request.OpenerDirector.open",side_effect=AssertionError("network forbidden")), \
             patch("ingestion.ai.OpenAIProvider",side_effect=AssertionError("provider forbidden")), \
             patch("ingestion.proposals.ProposalClient.submit",side_effect=AssertionError("submission forbidden")):
            work, metrics = self.prepare()
            preview = finalize(self.reg,ROOT,work,self.output(work))
        self.assertEqual(metrics["apiCalls"],0)
        self.assertEqual(preview["status"],"READY_FOR_HUMAN_REVIEW")
        self.assertFalse(preview["submissionAllowed"])
        self.assertTrue(preview["diff"])
        self.assertLess(len(json.dumps(work).encode()),MAX_PACKAGE_BYTES)

    def test_cache_and_delta(self):
        work, _ = self.prepare()
        first = finalize(self.reg,ROOT,work,self.output(work))
        replay, metrics = self.prepare()
        self.assertEqual(metrics["cacheHits"],2)
        self.assertTrue(metrics["extractionCacheHit"])
        self.assertEqual(replay["segments"],[])
        self.assertEqual(first,finalize(self.reg,ROOT,replay,self.output(replay)))
        changed, metrics = self.prepare(b"Subnet exercise.\nChanged exercise.")
        self.assertNotEqual(changed["source"]["sha256"],work["source"]["sha256"])
        self.assertEqual(metrics["cacheHits"],1)
        self.assertEqual(metrics["pendingSegments"],1)
        preview = finalize(self.reg,ROOT,changed,self.output(changed))
        self.assertIn("Changed exercise.",preview["generatedMarkdown"])

    def test_local_simulation_is_labeled_and_only_one_segment_changes(self):
        work, _ = self.prepare()
        original = finalize(self.reg,ROOT,work,self.output(work))
        changed = simulate_segment(self.reg,ROOT,work,work["segments"][1]["hash"],"Revised locally.")
        self.assertEqual(changed["source"]["type"],"LOCAL_SIMULATION")
        self.assertEqual(changed["source"]["originalDriveSha256"],work["source"]["sha256"])
        self.assertEqual(len(changed["segments"]),1)
        self.assertEqual(len(changed["cachedSegmentHashes"]),1)
        preview = finalize(self.reg,ROOT,changed,self.output(changed))
        self.assertEqual(preview["units"][0],original["units"][0])
        self.assertNotEqual(preview["units"][1],original["units"][1])

    def test_invalid_result_does_not_poison_cache(self):
        for defect in ("A","D","unknown-source","unsafe","target","duplicate"):
            work, _ = self.prepare()
            result = self.output(work)
            unit = result["responses"][0]["units"][0]
            if defect in ("A","D"): unit["provenance"] = defect
            elif defect == "unknown-source": unit["source"] = "0"*64
            elif defect == "unsafe": unit["content"] = "Bad\n{: onclick=evil}"
            elif defect == "target": result["target"] = {**TARGET,"targetPath":"docs/elsewhere.md"}
            else: result["responses"].append(result["responses"][0])
            with self.assertRaises(SourceError):
                finalize(self.reg,ROOT,work,result)
            self.assertEqual(self.reg.db.execute("select count(*) from cache").fetchone()[0],0)
            self.assertEqual(self.reg.get(work["importId"])["state"],"NEEDS_REVIEW")

    def test_quiz_cap_sources_and_empty_answers(self):
        work, _ = self.prepare()
        result = self.output(work)
        segment = result["responses"][0]
        q = {"question":"Quel masque ?","answers":["/24","/25"],"correctAnswer":"/24",
             "explanation":"Exemple pédagogique.","provenance":"C","source":segment["segmentHash"]}
        for count in (21,):
            segment["questions"] = [{**q,"question":str(i)+" masque ?"} for i in range(count)]
            with self.assertRaises(SourceError): finalize(self.reg,ROOT,work,result)
        segment["questions"] = [{**q,"answers":[]}]
        with self.assertRaises(SourceError): finalize(self.reg,ROOT,work,result)
        segment["questions"] = [q]
        self.assertEqual(len(finalize(self.reg,ROOT,work,result)["questions"]),1)

    def test_connector_evidence_root_and_change(self):
        evidence = {"before":self.meta,"after":self.meta,
                    "ancestors":[{"id":TSSR_ROOT,"name":"TSSR","mimeType":FOLDER}]}
        self.assertEqual(connector_metadata(evidence,self.raw)["id"],self.meta["id"])
        for defect in ("root","size","change","shortcut"):
            bad = copy.deepcopy(evidence)
            if defect=="root": bad["ancestors"][0]["id"]="outside"
            elif defect=="size": bad["before"]["size"]=0
            elif defect=="change": bad["after"]={**self.meta,"name":"changed"}
            else:
                bad["before"]["mimeType"]="application/vnd.google-apps.shortcut"
                bad["after"]=bad["before"]
            with self.assertRaises(SourceError): connector_metadata(bad,self.raw)

    def test_cli_has_no_api_switch_and_default_refuses_network(self):
        env = {**os.environ,"OPENAI_API_KEY":"fixture-present-but-ignored","PYTHONDONTWRITEBYTECODE":"1"}
        base = [sys.executable,str(ROOT/"scripts/ingest_drive.py"),"--fixture",
                str(ROOT/"tests/fixtures/ingestion/simple-course.json"),"--dry-run","--state-dir",self.tmp.name]
        for extra in ([],["--provider","openai"],["--allow-paid-calls"]):
            run = subprocess.run(base+extra,env=env,capture_output=True,text=True)
            self.assertNotEqual(run.returncode,0)
            self.assertNotIn("fixture-present-but-ignored",run.stderr)

    def test_wrong_package_and_conflicting_replay(self):
        work, _ = self.prepare()
        result = self.output(work)
        finalize(self.reg,ROOT,work,result)
        result["responses"][0]["units"][0]["content"]="Contradictory revision"
        with self.assertRaises(SourceError): finalize(self.reg,ROOT,work,result)
        work["packageId"]="../outside"
        with self.assertRaises(SourceError): finalize(self.reg,ROOT,work,result)

    def test_interactive_cli_fixture_prepare_validate_and_replay(self):
        # Exercise the actual entry point with synthetic input, never the real PDF.
        with tempfile.TemporaryDirectory() as inputs:
            folder = Path(inputs)
            snapshot = folder / "fixture.txt"
            snapshot.write_bytes(self.raw)
            private_json(folder / "evidence.json", {"before": self.meta, "after": self.meta,
                "ancestors": [{"id": TSSR_ROOT, "name": "TSSR", "mimeType": FOLDER}]})
            private_json(folder / "target.json", TARGET)
            base = ["ingest_plus.py", "prepare", "--state-dir", self.tmp.name,
                    "--snapshot", str(snapshot), "--evidence", str(folder / "evidence.json"),
                    "--target", str(folder / "target.json")]
            def run(args):
                with patch.object(sys, "argv", args), contextlib.redirect_stdout(io.StringIO()):
                    plus_main()
            with patch.dict(os.environ, {"OPENAI_API_KEY": "fixture-unused"}), \
                 patch("urllib.request.OpenerDirector.open", side_effect=AssertionError("network forbidden")), \
                 patch("ingestion.ai.OpenAIProvider", side_effect=AssertionError("API forbidden")), \
                 patch("ingestion.proposals.ProposalClient.submit", side_effect=AssertionError("submission forbidden")):
                run(base)
                work_path = self.reg.root / "work-package.json"
                work = json.loads(work_path.read_text())
                result_path = folder / "result.json"
                private_json(result_path, self.output(work))
                validate = ["ingest_plus.py", "validate", "--state-dir", self.tmp.name,
                            "--package", str(work_path), "--result", str(result_path)]
                run(validate)
                preview_path = self.reg.root / "preview.json"
                before = preview_path.read_bytes()
                run(base)
                replay = json.loads(work_path.read_text())
                self.assertEqual(replay["segments"], [])
                private_json(result_path, self.output(replay))
                run(validate)
                self.assertEqual(preview_path.read_bytes(), before)
                self.assertEqual(snapshot.read_bytes(), self.raw)
                self.assertEqual(json.loads(before)["apiCalls"], 0)
