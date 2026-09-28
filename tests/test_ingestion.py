import hashlib
import io
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch
import zipfile

sys.path.insert(0,str(Path(__file__).resolve().parents[1]/"scripts"))
from ingestion.drive import BoundedReader, FixtureDrive, TSSR_ROOT, FOLDER, SHORTCUT, SourceError, GoogleDriveReadOnly, READ_SCOPE
from ingestion.extract import extract, segments, DOCX, PPTX
from ingestion.registry import Registry
from ingestion.ai import Engine, FakeAIProvider, OpenAIProvider, Limits, BudgetExceeded
from ingestion.pipeline import Pipeline, validate_markdown, checked_units, context_for
from ingestion.proposals import ProposalClient

ROOT=Path(__file__).resolve().parents[1]


def fixture(raw=b"# Module\nIPv4 and subnetting", mime="text/markdown"):
    return FixtureDrive({TSSR_ROOT:{"id":TSSR_ROOT,"name":"TSSR","mimeType":FOLDER},
        "source1":{"id":"source1","name":"Course.md","parents":[TSSR_ROOT],"mimeType":mime,
                   "size":str(len(raw)),"modifiedTime":"2026-09-28T00:00:00Z","version":"1"}},
        {"source1":raw})


class DriveTests(unittest.TestCase):
    def test_read_and_no_write_interface(self):
        reader=BoundedReader(fixture())
        self.assertEqual(len(reader.scan()),1)
        self.assertTrue(reader.snapshot("source1")[1])
        for name in ["write","delete","move","create","update","copy","share"]:
            self.assertFalse(hasattr(reader,name))
            self.assertFalse(hasattr(GoogleDriveReadOnly,name))

    def test_actual_scope_must_be_readonly(self):
        with patch("ingestion.drive.bounded_get",return_value=json.dumps({"scope":READ_SCOPE}).encode()):
            GoogleDriveReadOnly("fixture-not-a-token")
        for scope in ["https://www.googleapis.com/auth/drive",READ_SCOPE+" https://www.googleapis.com/auth/drive.file",""]:
            with patch("ingestion.drive.bounded_get",return_value=json.dumps({"scope":scope}).encode()):
                with self.assertRaises(SourceError):
                    GoogleDriveReadOnly("fixture-not-a-token")

    def test_real_adapter_only_get_and_pagination(self):
        calls=[]
        with patch("ingestion.drive.bounded_get",return_value=json.dumps({"scope":READ_SCOPE}).encode()):
            adapter=GoogleDriveReadOnly("fixture")
        def response(url,token=None,maximum=None):
            calls.append(url)
            if "pageToken" in url:
                return b'{"files":[]}'
            return b'{"files":[],"nextPageToken":"page-two"}'
        with patch("ingestion.drive.bounded_get",side_effect=response):
            self.assertEqual(list(adapter.children(TSSR_ROOT)),[])
        self.assertEqual(len(calls),2)
        self.assertTrue(all(url.startswith("https://www.googleapis.com/drive/v3/files?") for url in calls))
        with patch("ingestion.drive.bounded_get",return_value=b'{"incompleteSearch":true}'):
            with self.assertRaises(SourceError):
                list(adapter.children(TSSR_ROOT))

    def test_outside_shortcuts_traversal_refused_before_content(self):
        for identity in ["../source1","https://example.invalid/x","absent"]:
            transport=fixture()
            with self.assertRaises(SourceError):
                BoundedReader(transport).snapshot(identity)
            self.assertEqual(transport.reads,0)
        for changes in [{"parents":["outside"]},{"mimeType":SHORTCUT},{"trashed":True}]:
            transport=fixture()
            transport.entries["source1"].update(changes)
            with self.assertRaises(SourceError):
                BoundedReader(transport).snapshot("source1")
            self.assertEqual(transport.reads,0)

    def test_changing_source_and_bad_checksum(self):
        transport=fixture()
        transport.entries["source1"]["md5Checksum"]="0"*32
        with self.assertRaises(SourceError):
            BoundedReader(transport).snapshot("source1")
        transport=fixture()
        original=transport.content
        def moving(meta):
            transport.entries["source1"]["version"]="2"
            return original(meta)
        transport.content=moving
        with self.assertRaises(SourceError):
            BoundedReader(transport).snapshot("source1")


class ExtractionTests(unittest.TestCase):
    def test_original_positions_and_dedup(self):
        result=extract(b"Alpha\nAlpha\nBeta","text/plain")
        self.assertTrue(result["complete"])
        self.assertEqual(len(result["fragments"]),3)
        chunks=segments(result["fragments"])
        self.assertEqual(len(chunks),2)
        self.assertEqual(len(chunks[0]["positions"]),2)

    def test_json_yaml_images_and_binary(self):
        for raw,mime in [(b'{"a":1}',"application/json"),(b"a: 1","application/x-yaml")]:
            self.assertTrue(extract(raw,mime)["complete"])
        self.assertFalse(extract(b"image-fixture","image/png")["complete"])
        for raw,mime in [(b"MZ binary","application/x-msdownload"),(b"x: [","application/x-yaml"),
                         (b"x: &a [1]\ny: *a","application/x-yaml")]:
            with self.assertRaises(Exception):
                extract(raw,mime)

    def test_office_xml_and_zip_traversal(self):
        for mime,name in [(DOCX,"word/document.xml"),(PPTX,"ppt/slides/slide1.xml")]:
            stream=io.BytesIO()
            with zipfile.ZipFile(stream,"w") as archive:
                archive.writestr(name,'<p xmlns="urn:test"><t>Fixture paragraph</t></p>')
            self.assertEqual(extract(stream.getvalue(),mime)["fragments"][0]["text"],"Fixture paragraph")
        stream=io.BytesIO()
        with zipfile.ZipFile(stream,"w") as archive:
            archive.writestr("../escape","x")
        with self.assertRaises(SourceError):
            extract(stream.getvalue(),DOCX)

    def test_bounded_segmentation_no_truncation(self):
        value="é"*10000
        chunks=segments([{"text":value,"position":{"page":1}}])
        self.assertTrue(all(len(c["text"].encode())<=6000 for c in chunks))
        self.assertEqual(sum(len(c["positions"]) for c in chunks),7)

    def test_registry_idempotence_rename_new_version_missing(self):
        with tempfile.TemporaryDirectory() as tmp:
            reg=Registry(tmp)
            transport=fixture()
            meta,raw=BoundedReader(transport).snapshot("source1")
            first=reg.snapshot(meta,raw)
            reg.state(first,"EXTRACTED")
            self.assertEqual(reg.snapshot({**meta,"name":"Renamed.md"},raw),first)
            self.assertEqual(reg.get(first)["state"],"EXTRACTED")
            second=reg.snapshot(meta,raw+b"\nChanged")
            self.assertNotEqual(first,second)
            reg.mark_missing([])
            self.assertEqual(reg.db.execute("select missing from sources").fetchone()[0],1)
            self.assertTrue((Path(tmp)/(hashlib.sha256(raw).hexdigest()+".source")).exists())
            reg.close()

    def test_registry_refuses_unowned_and_symlink_directories(self):
        with tempfile.TemporaryDirectory() as tmp:
            Path(tmp,"unrelated.txt").write_text("Do not modify")
            with self.assertRaises(ValueError):
                Registry(tmp)
            target=Path(tmp,"link")
            target.symlink_to(Path(tmp),target_is_directory=True)
            with self.assertRaises(ValueError):
                Registry(target)


class EngineTests(unittest.TestCase):
    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.reg=Registry(self.tmp.name)
        self.addCleanup(self.reg.close)
        self.provider=FakeAIProvider()
        self.engine=Engine(self.reg,self.provider)
        self.payload={"segments":[{"hash":"a"*64,"text":"IPv4 test","positions":[{"page":1}]}],"context":{}}

    def test_cache_prompt_model_and_changed_section(self):
        self.engine.call("fixture","course",self.payload)
        self.engine.call("fixture","course",self.payload)
        self.assertEqual(self.provider.calls,1)
        self.payload["segments"][0]["text"]="Changed"
        self.engine.call("fixture","course",self.payload)
        self.assertEqual(self.provider.calls,2)
        self.engine.models["STANDARD"]="other-fixture"
        self.engine.prices["other-fixture"]=(0,0)
        self.engine.call("fixture","course",self.payload)
        self.assertEqual(self.provider.calls,3)

    def test_token_cost_call_limits_and_restart(self):
        for limits in [Limits(max_input_tokens=1),Limits(max_support_tokens=1),Limits(max_cost=0)]:
            engine=Engine(self.reg,self.provider,prices={"fixture-standard":(1,1)},limits=limits)
            with self.assertRaises(BudgetExceeded):
                engine.call("bounded","course",self.payload)
        self.assertEqual(self.provider.calls,0)
        engine=Engine(self.reg,self.provider,limits=Limits(max_calls=1))
        engine.call("bounded","course",self.payload)
        new=Engine(self.reg,self.provider,limits=Limits(max_calls=1))
        with self.assertRaises(BudgetExceeded):
            new.call("bounded","revision",self.payload)

    def test_retry_bounded_no_secret_log(self):
        class Broken(FakeAIProvider):
            def respond(self,**kwargs):
                self.calls+=1
                raise SourceError("private error that must not be logged")
        provider=Broken()
        engine=Engine(self.reg,provider,limits=Limits(max_retry=1))
        with self.assertRaises(SourceError):
            engine.call("bad","course",self.payload)
        self.assertEqual(provider.calls,2)
        self.assertNotIn("private error",json.dumps(self.reg.metrics("bad")))

    def test_live_provider_disabled_and_complex_explicit(self):
        with self.assertRaises(SourceError):
            OpenAIProvider("fake")
        self.engine.call("fixture","course",self.payload)
        self.assertEqual(self.reg.metrics("fixture")[-1]["model"],"fixture-standard")
        with self.assertRaises(SourceError):
            self.engine.call("fixture","course",self.payload,complex_reason="always")

    def test_provenance_unknown_source_and_original_rejected(self):
        for provenance,source in [("A","a"*64),("D","a"*64),("B","unknown"),("", "a"*64)]:
            with self.assertRaises(SourceError):
                checked_units({"units":[{"content":"Test","provenance":provenance,"source":source}],"questions":[]},
                              self.payload["segments"])

    def test_openai_wire_contract_and_refusal_without_network(self):
        captured=[]
        output={"kind":"COURSE","units":[],"questions":[]}
        response={"status":"completed","output":[{"type":"message","content":[
            {"type":"output_text","text":json.dumps(output)}]}],"usage":{"input_tokens":2,"output_tokens":3}}
        class Response:
            def __enter__(self): return self
            def __exit__(self,*args): pass
            def read(self,*args): return json.dumps(response).encode()
        class Opener:
            def open(self,request,**kwargs):
                captured.append((request.full_url,json.loads(request.data),kwargs))
                return Response()
        with patch("ingestion.ai.urllib.request.build_opener",return_value=Opener()):
            provider=OpenAIProvider("fixture",paid_calls_authorized=True)
            provider.respond(stage="course",model="configured-model",payload=self.payload,max_output_tokens=50,timeout=4)
            response["status"]="incomplete"
            with self.assertRaises(SourceError):
                provider.respond(stage="course",model="configured-model",payload=self.payload,max_output_tokens=50,timeout=4)
        url,body,options=captured[0]
        self.assertEqual(url,"https://api.openai.com/v1/responses")
        self.assertFalse(body["store"])
        self.assertNotIn("tools",body)
        self.assertTrue(body["text"]["format"]["strict"])
        self.assertEqual(options["timeout"],4)


class PipelineTests(unittest.TestCase):
    def test_multi_module_msp_tp_fixture_keeps_targets_separate(self):
        data=json.loads((ROOT/"tests/fixtures/ingestion/multi-module-msp-tp.json").read_text())
        entries={TSSR_ROOT:{"id":TSSR_ROOT,"name":"TSSR","mimeType":FOLDER}}
        contents={}
        for item in data["files"]:
            identity=item["metadata"]["id"]
            entries[identity]=item["metadata"]
            contents[identity]=item["text"].encode()
        reader=BoundedReader(FixtureDrive(entries,contents))
        results=[]
        for identity,binding in data["bindings"].items():
            pipeline=Pipeline(reader,self.reg,Engine(self.reg,FakeAIProvider(binding["kind"])),ROOT,data["bindings"])
            result=pipeline.run(identity)
            self.assertEqual(result["status"],"READY_FOR_REVIEW",result)
            self.assertEqual(result["kind"],binding["kind"])
            self.assertEqual(result["files"][0]["file_path"],binding["targetPath"])
            self.assertFalse((ROOT/binding["targetPath"]).exists())
            results.append(result)
        self.assertEqual(len({r["files"][0]["file_path"] for r in results}),4)
        self.assertEqual(results[0]["context"]["courseId"],results[1]["context"]["courseId"])
        self.assertNotEqual(results[0]["context"]["moduleId"],results[1]["context"]["moduleId"])

    def setUp(self):
        self.tmp=tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.reg=Registry(self.tmp.name)
        self.addCleanup(self.reg.close)
        self.transport=fixture()
        self.provider=FakeAIProvider()
        self.binding={"source1":{"humanValidated":True,"kind":"COURSE",
            "targetPath":"docs/modules/01-bases-reseaux/phase3-fixture.md",
            "courseId":"modules/01-bases-reseaux/index.md",
            "moduleId":"modules/01-bases-reseaux/phase3-fixture.md"}}
        self.pipeline=Pipeline(BoundedReader(self.transport),self.reg,Engine(self.reg,self.provider),ROOT,self.binding)

    def test_dry_run_complete_no_repo_write_and_unchanged_reimport(self):
        result=self.pipeline.run("source1")
        self.assertEqual(result["status"],"READY_FOR_REVIEW",result)
        self.assertTrue(result["diff"])
        self.assertFalse((ROOT/self.binding["source1"]["targetPath"]).exists())
        before=self.provider.calls
        second=self.pipeline.run("source1")
        self.assertEqual(self.provider.calls,before)
        self.assertEqual(result["proposalFingerprint"],second["proposalFingerprint"])
        self.transport.entries["source1"]["name"]="Renamed.md"
        self.pipeline.run("source1")
        self.assertEqual(self.provider.calls,before)
        with self.assertRaises(SourceError):
            self.pipeline.run("source1",dry_run=False)
        with self.assertRaises(SourceError):
            ProposalClient("https://invalid","fake","fake")

    def test_modified_version_only_changed_segment_generates(self):
        self.pipeline.run("source1")
        before=self.provider.calls
        self.transport.contents["source1"]+=b"\nNew paragraph"
        self.transport.entries["source1"]["version"]="2"
        result=self.pipeline.run("source1")
        self.assertEqual(result["status"],"READY_FOR_REVIEW")
        self.assertEqual(self.provider.calls,before+1)

    def test_multiline_markdown_remains_intact_in_preview(self):
        original = self.provider.respond
        def multiline(**kwargs):
            result, usage = original(**kwargs)
            for unit in result["units"]:
                unit["content"] = "## Reformulation\n\n" + unit["content"]
            return result, usage
        with patch.object(self.provider, "respond", side_effect=multiline):
            result = self.pipeline.run("source1")
        self.assertEqual(result.get("status"), "READY_FOR_REVIEW", result.get("errorType"))
        self.assertIn("## Reformulation\n\n", result["files"][0]["new_content"])

    def test_unknown_and_probable_never_auto_associate(self):
        self.pipeline.bindings={}
        result=self.pipeline.run("source1")
        self.assertEqual(result["status"],"NEEDS_REVIEW")
        self.transport.entries["source1"]["name"]="Administration d'une distribution GNU/Linux.pdf"
        ctx=context_for(self.transport.entries["source1"],ROOT,{})
        self.assertEqual(ctx["confidence"],"MATCH_PROBABLE")
        self.assertNotIn("targetPath",ctx)

    def test_msp_and_tp_remain_distinct(self):
        for kind in ["MSP","TP","EXERCISE","REVISION","RESOURCE"]:
            self.binding["source1"]["kind"]=kind
            self.provider.kind=kind
            result=self.pipeline.run("source1")
            self.assertEqual(result["kind"],kind)
            self.assertEqual(result["status"],"READY_FOR_REVIEW")
            self.assertNotIn("courseRelations",result["context"])

    def test_empty_quiz_and_over20_and_incomplete_image(self):
        self.binding["source1"]["kind"]="KAHOOT_SOURCE"
        self.provider.kind="KAHOOT_SOURCE"
        result=self.pipeline.run("source1")
        self.assertEqual(result["state"],"NEEDS_REVIEW")
        class Overflow(FakeAIProvider):
            namespace="overflow"
            def respond(self,**kwargs):
                result,usage=super().respond(**kwargs)
                result["questions"]=[{"question":"Test","answers":["Yes","No"],"correctAnswer":"Yes",
                    "explanation":"Because","provenance":"B","source":kwargs["payload"]["segments"][0]["hash"]}]*21
                return result,usage
        self.pipeline.engine=Engine(self.reg,Overflow())
        self.assertEqual(self.pipeline.run("source1")["state"],"NEEDS_REVIEW")
        self.transport.entries["source1"]["mimeType"]="image/png"
        self.transport.contents["source1"]=b"new image content"
        self.assertEqual(self.pipeline.run("source1")["state"],"NEEDS_REVIEW")

    def test_budget_state_and_traversal_binding(self):
        self.pipeline.engine=Engine(self.reg,self.provider,limits=Limits(max_input_tokens=1))
        self.assertEqual(self.pipeline.run("source1")["state"],"BUDGET_EXCEEDED")
        self.binding["source1"]["targetPath"]="docs/../../escape.md"
        self.assertEqual(self.pipeline.run("source1")["state"],"NEEDS_REVIEW")

    def test_markdown_security_internal_links_and_secrets(self):
        for content in ["x\n{: onclick=evil}",'<script>alert(1)</script>',
                        "[bad](javascript:alert)", "[bad](missing.md)", "[bad](../../../../outside)",
                        "[drive](https://drive.google.com/file/d/outside)", "api_key=pretend-sensitive",
                        "PIN: 123456"]:
            with self.assertRaises(Exception,msg=content):
                validate_markdown(content,ROOT,"docs/modules/01-bases-reseaux/phase3-fixture.md")
        validate_markdown("# Valid\n\nText **bold**.",ROOT,"docs/modules/01-bases-reseaux/phase3-fixture.md")

    def test_valid_kahoot_and_existing_module(self):
        class Quiz(FakeAIProvider):
            namespace="quiz-fixture"
            def respond(self,**kwargs):
                result,usage=super().respond(**kwargs)
                if kwargs["stage"]!="classify":
                    result["questions"]=[{"question":"Quel protocole est cité ?","answers":["IPv4","Autre"],
                        "correctAnswer":"IPv4","explanation":"Le support cite IPv4.","source":kwargs["payload"]["segments"][0]["hash"],
                        "provenance":"B"}]
                return result,usage
        self.binding["source1"].update(kind="KAHOOT_SOURCE",targetPath="docs/kahoot/phase3-fixture.md",
            moduleId="modules/01-bases-reseaux/module-03-l-adressage-ipv4.md")
        self.pipeline.engine=Engine(self.reg,Quiz("KAHOOT_SOURCE"))
        self.transport.contents["source1"]=b"IPv4"
        result=self.pipeline.run("source1")
        self.assertEqual(result["status"],"READY_FOR_REVIEW",result)
        self.assertEqual(len(result["questions"]),1)
        self.assertIn("TSSR-KAHOOT-V1:",result["files"][0]["new_content"])
        self.assertFalse(result["files"][0]["new_content"].find("https://kahoot")>=0)

    def test_proposal_adapter_reuses_existing_endpoint_only_with_explicit_enable(self):
        result=self.pipeline.run("source1")
        client=ProposalClient("https://"+"x"*20+".supabase.co","fixture-public","fixture-session",enabled=True)
        request_body={}
        class Response:
            def __enter__(self): return self
            def __exit__(self,*args): pass
            def read(self,*args):
                return json.dumps({"change_request":{"id":"11111111-1111-4111-8111-111111111111","status":"pending"}}).encode()
        class Opener:
            def open(self,request,**kwargs):
                request_body.update(json.loads(request.data))
                self_url=request.full_url
                if not self_url.endswith("/functions/v1/change-requests"):
                    raise AssertionError(self_url)
                return Response()
        with patch("ingestion.proposals.urllib.request.build_opener",return_value=Opener()):
            self.assertEqual(client.submit_registered(self.reg,result)["status"],"pending")
        # Retry after restart returns recorded receipt, no second network request.
        with patch("ingestion.proposals.urllib.request.build_opener",side_effect=AssertionError("unexpected network")):
            self.assertEqual(client.submit_registered(self.reg,result)["status"],"pending")
        self.assertEqual(self.reg.get(result["importId"])["state"],"PROPOSED")
        self.assertEqual(request_body["action"],"create")
        self.assertNotIn("can_override",request_body)
        self.assertNotIn("author_id",request_body)
        self.assertEqual(request_body["payload_summary"]["idempotencyKey"],result["idempotencyKey"])
