"""Interactive work packages: local files only, no provider/network/submission.

Connector evidence is operator-supplied, not an OAuth credential or an
authorization proof for the server. Every result remains a private dry-run.
"""
import difflib
import copy
import hashlib
import json
import os
import re
import subprocess
import time
from pathlib import Path

from import_contract import KINDS, prepare_analysis
from markdown_security import MarkdownSecurityError
from .drive import TSSR_ROOT, FOLDER, SHORTCUT, SourceError, file_id
from .extract import extract, segments, PARSER_VERSION
from .pipeline import safe_text, target_path, validate_markdown, checked_units, git_blob
from .registry import fingerprint

VERSION = "tssr-plus-1"
MAX_PACKAGE_BYTES = 30000


def private_json(path, value):
    path = Path(path)
    if path.is_symlink():
        raise SourceError("Artifact symlink refused")
    raw = json.dumps(value, ensure_ascii=False, indent=2)
    with path.open("w", encoding="utf-8") as stream:
        os.chmod(path, 0o600)
        stream.write(raw)


def connector_metadata(evidence, raw):
    """Validate observed ancestry and before/after metadata, never fetch URLs."""
    if set(evidence) != {"before", "after", "ancestors"}:
        raise SourceError("Connector metadata evidence required")
    before, after = evidence["before"], evidence["after"]
    if before != after:
        raise SourceError("Drive metadata changed during download")
    nodes = [before] + evidence["ancestors"]
    seen = set()
    for index, node in enumerate(nodes):
        identity = file_id(node["id"])
        if identity in seen or node.get("mimeType") == SHORTCUT or node.get("trashed"):
            raise SourceError("Invalid ancestry")
        seen.add(identity)
        if index:
            if nodes[index-1].get("parents") != [identity] or node.get("mimeType") != FOLDER:
                raise SourceError("Ancestry mismatch")
    if not 2 <= len(nodes) <= 64 or nodes[-1]["id"] != TSSR_ROOT:
        raise SourceError("Source outside TSSR")
    if before["mimeType"] == FOLDER or int(before["size"]) != len(raw):
        raise SourceError("Source size/type mismatch")
    if before.get("md5Checksum") and hashlib.md5(raw).hexdigest() != before["md5Checksum"]:
        raise SourceError("Checksum mismatch")
    return {**before, "logicalPath": [n["name"] for n in reversed(nodes[:-1])]}


def validate_target(repo, target):
    if set(target) != {"courseId", "moduleId", "targetPath"}:
        raise SourceError("Explicit course/module/target required")
    course, module = target["courseId"], target["moduleId"]
    if (not course.endswith("/index.md") or module == course or
            course.rsplit("/", 1)[0] != module.rsplit("/", 1)[0] or
            target["targetPath"] != "docs/" + module):
        raise SourceError("Target must be the existing module of this course")
    for path in (course, module):
        if not target_path(repo, "docs/" + path).is_file():
            raise SourceError("Unknown course/module")


def result_key(package, segment):
    # Same source identity + target + prompt + content. Positions may move.
    return fingerprint([VERSION, package["source"]["fileId"], package["target"],
                        package["classification"], segment["hash"]])


def simulate_segment(registry, repo, work, segment_hash, replacement):
    """Copy a LOCAL package, never alter the Drive snapshot or call the network."""
    if not re.fullmatch(r"[a-f0-9]{64}", str(work.get("packageId", ""))):
        raise SourceError("Invalid package ID")
    with registry.lock():
        original = json.loads((registry.root / (work["packageId"] + ".package.json")).read_text())
        if fingerprint(original) != work["packageId"]:
            raise SourceError("Package changed")
        validate_target(Path(repo), original["target"])
        package = copy.deepcopy(original)
        matches = [s for s in package["segments"] if s["hash"] == segment_hash]
        if len(matches) != 1 or replacement == matches[0]["text"] or len(replacement) > 1500:
            raise SourceError("Expected one small, actually changed segment")
        safe_text(replacement)
        matches[0]["text"] = replacement
        matches[0]["hash"] = hashlib.sha256(replacement.encode()).hexdigest()
        raw = json.dumps(package["segments"], ensure_ascii=False).encode()
        package["source"].update(type="LOCAL_SIMULATION", originalDriveSha256=original["source"]["sha256"],
                                 sha256=hashlib.sha256(raw).hexdigest(), mimeType="application/json",
                                 name="LOCAL_SIMULATION-segments.json", size=len(raw))
        meta = {"id":package["source"]["fileId"],"name":"LOCAL_SIMULATION.json",
                "mimeType":"application/json","size":len(raw),"parents":[TSSR_ROOT]}
        package["importId"] = registry.snapshot(meta, raw)
        package["warnings"] = list(package["warnings"]) + ["LOCAL_SIMULATION_NOT_DRIVE"]
        identity = fingerprint(package)
        pending = [s for s in package["segments"] if registry.cache(result_key(package,s)) is None]
        private_json(registry.root / (identity + ".package.json"), package)
        return {**package, "packageId":identity, "segments":pending,
                "cachedSegmentHashes":[s["hash"] for s in package["segments"] if s not in pending]}


def prepare(registry, repo, metadata, raw, target, kind, pages=None, pdftotext=None):
    started = time.monotonic()
    repo = Path(repo).resolve()
    validate_target(repo, target)
    if kind not in KINDS or kind == "UNKNOWN":
        raise SourceError("Unambiguous proposed classification required")
    with registry.lock():
        imported = registry.snapshot(metadata, raw)
        old = registry.get(imported)
        reused = old.get("plusExtraction", {}).get("parserVersion") == PARSER_VERSION
        extraction = old["plusExtraction"] if reused else extract(raw, metadata["mimeType"], pdftotext=pdftotext)
        fragments = extraction["fragments"]
        selected = [f for f in fragments if pages is None or f["position"].get("page") in pages]
        if pages is not None and set(pages) != {f["position"].get("page") for f in selected}:
            raise SourceError("Requested page missing")
        # Original extraction remains intact. Compact only the work-package copy.
        compact = []
        for fragment in selected:
            lines = [re.sub(r"[ \t]+", " ", line).strip() for line in fragment["text"].splitlines()
                     if line.strip() and not re.match(r"^\s*(Page \d+/\d+|©)", line)]
            compact.append({**fragment, "text": "\n".join(lines)})
        chunks = segments(compact)
        if not chunks:
            raise SourceError("No usable segments")
        for chunk in chunks:
            safe_text(chunk["text"])
        package = {"schemaVersion": VERSION, "mode": "NO_API",
            "importId": imported, "source": {"fileId": metadata["id"], "sha256": hashlib.sha256(raw).hexdigest(),
                "name": metadata["name"], "mimeType": metadata["mimeType"], "size": len(raw), "rootId": TSSR_ROOT},
            "target": target, "classification": kind,
            "selection": {"pages": pages, "selectedFragments": len(selected), "totalFragments": len(fragments)},
            "constraints": {"generatedProvenance": ["B", "C"], "noExternalUpdates": True,
                "maxQuestions": 20, "noURLs": True, "noSubmission": True, "noDocsWrites": True},
            "outputContract": {"packageId": "exact supplied ID", "classification": kind, "target": target,
                "responses": "one per missing segment: segmentHash, units[], questions[]; B/C only",
                "unit": ["content", "provenance", "source"],
                "question": ["question", "answers", "correctAnswer", "explanation", "provenance", "source"]},
            "segments": chunks, "warnings": extraction["warnings"]}
        package_id = fingerprint(package)
        needed = [s for s in chunks if registry.cache(result_key(package, s)) is None]
        work = {**package, "packageId": package_id, "segments": needed,
                "cachedSegmentHashes": [s["hash"] for s in chunks if s not in needed]}
        if len(json.dumps(work, ensure_ascii=False).encode()) > MAX_PACKAGE_BYTES:
            raise SourceError("Work package too large; select fewer pages")
        registry.state(imported, "EXTRACTED", plusExtraction=extraction)
        # Private authoritative package; response cannot redefine targets/sources.
        private_json(registry.root / (package_id + ".package.json"), package)
        return work, {"packageId": package_id, "extractionCacheHit": reused,
            "segments": len(chunks), "pendingSegments": len(needed), "cacheHits": len(chunks)-len(needed),
            "sourceCharactersInPackage": sum(len(s["text"]) for s in needed),
            "workPackageBytes": len(json.dumps(work, ensure_ascii=False).encode()),
            "duration": time.monotonic()-started, "apiCalls": 0, "apiCost": 0}


def validate_response(response, segment, package, repo):
    if not isinstance(response, dict) or set(response) != {"segmentHash", "units", "questions"}:
        raise SourceError("Invalid segment result")
    if response["segmentHash"] != segment["hash"] or not response["units"]:
        raise SourceError("Missing/wrong segment result")
    units = checked_units(response, [segment])
    for unit in units:
        validate_markdown(unit["content"], repo, package["target"]["targetPath"])
        if re.search(r"https?://", unit["content"]):
            raise SourceError("URLs not needed in this work package")
    questions = response["questions"]
    if questions:
        for question in questions:
            if (not isinstance(question, dict) or set(question) !=
                    {"question", "answers", "correctAnswer", "explanation", "provenance", "source"} or
                    question["source"] != segment["hash"] or question["provenance"] not in {"B", "C"}):
                raise SourceError("Question provenance/source invalid")
            for text in [question["question"], question["explanation"]] + question["answers"]:
                validate_markdown(text, repo, package["target"]["targetPath"])
                if re.search(r"https?://", text):
                    raise SourceError("Question URL refused")
        prepare_analysis(file_id=package["source"]["fileId"], content_sha256=package["source"]["sha256"],
            # import_contract's text fields are single-line metadata, not Markdown.
            # Validate that contract without altering the stored/rendered units.
            kind="KAHOOT_SOURCE", units=[{**u,"content":re.sub(r"\s+", " ", u["content"])} for u in response["units"]],
            questions=[{k:v for k,v in q.items() if k != "explanation"} for q in questions],
            course_id=package["target"]["courseId"], module_id=package["target"]["moduleId"])
    return units, questions


def finalize(registry, repo, work, output):
    """Validate ALL results before caching; repeat has no model/network calls."""
    repo = Path(repo).resolve()
    with registry.lock():
        if not re.fullmatch(r"[a-f0-9]{64}", str(work.get("packageId", ""))):
            raise SourceError("Package ID invalid")
        package = json.loads((registry.root / (work["packageId"] + ".package.json")).read_text())
        if fingerprint(package) != work["packageId"]:
            raise SourceError("Authoritative package changed")
        imported = package["importId"]
        try:
            return _finalize(registry, repo, work, package, output)
        except (ValueError, KeyError, TypeError, MarkdownSecurityError):
            registry.state(imported, "NEEDS_REVIEW", plusValidation="rejected")
            raise SourceError("Invalid interactive result; NEEDS_REVIEW, no retry") from None


def _finalize(registry, repo, work, package, output):
    if len(json.dumps(output, ensure_ascii=False).encode()) > 200000:
        raise SourceError("Oversized interactive result")
    if (not isinstance(output, dict) or set(output) != {"packageId", "classification", "target", "responses"} or
            output["packageId"] != work["packageId"] or output["classification"] != package["classification"] or
            output["target"] != package["target"] or not isinstance(output["responses"], list)):
        raise SourceError("Output identity mismatch")
    validate_target(repo, package["target"])
    incoming = {r["segmentHash"]: r for r in output["responses"]}
    expected = {s["hash"] for s in package["segments"]}
    if len(incoming) != len(output["responses"]) or set(incoming) - expected:
        raise SourceError("Duplicate/invented segment")
    units, questions, staged = [], [], []
    for segment in package["segments"]:
        key = result_key(package, segment)
        cached = registry.cache(key)
        response = incoming.get(segment["hash"], cached)
        if cached is not None and response != cached:
            raise SourceError("Conflicting replay; explicit revision required")
        checked, quiz = validate_response(response, segment, package, repo)
        units.extend(checked)
        questions.extend(quiz)
        staged.append((key, response))
    if len(questions) > 20 or len({q["question"] for q in questions}) != len(questions):
        raise SourceError("Quiz overflow/duplicates")
    if len({u["content"] for u in units}) != len(units):
        raise SourceError("Duplicate sections")
    relative = package["target"]["targetPath"]
    if subprocess.check_output(["git","status","--porcelain","--",relative],cwd=repo,text=True).strip():
        raise SourceError("Dirty target refused")
    path = target_path(repo, relative)
    previous = path.read_text()
    generated = "\n\n".join(u["content"] + "\n\n*Provenance " + u["provenance"] +
                " — segment " + u["source"][:12] + "*" for u in units) + "\n"
    marker = fingerprint([VERSION, package["source"]["fileId"]])
    start, end = "<!-- TSSR-PLUS:" + marker + " -->", "<!-- /TSSR-PLUS:" + marker + " -->"
    if previous.count(start) != previous.count(end) or previous.count(start) > 1:
        raise SourceError("Ambiguous existing source block")
    block = start + "\n" + generated + end + "\n"
    if start in previous:
        left, right = previous.index(start), previous.index(end) + len(end)
        if right < left:
            raise SourceError("Reversed block")
        updated = previous[:left] + block.rstrip("\n") + previous[right:]
    else:
        updated = previous + "\n\n" + block
    preview = {"mode":"NO_API", "status":"READY_FOR_HUMAN_REVIEW", "submissionAllowed":False,
        "packageId":work["packageId"], "source":package["source"], "target":package["target"],
        "classification":package["classification"], "units":units, "questions":questions,
        "warnings":package["warnings"], "selection":package["selection"],
        "base_commit_sha":subprocess.check_output(["git","rev-parse","HEAD"],cwd=repo,text=True).strip(),
        "files":[{"file_path":relative,"change_type":"update","base_file_sha":git_blob(previous.encode()),
                  "new_content":updated,"content_encoding":"utf-8"}],
        "diff":"".join(difflib.unified_diff(previous.splitlines(True),updated.splitlines(True),fromfile=relative,tofile=relative)),
        "generatedMarkdown":generated, "apiCalls":0, "apiCost":0}
    for key, response in staged:
        registry.cache(key, response)
    registry.state(package["importId"], "VALIDATED", plusPreviewFingerprint=fingerprint(preview))
    return preview
