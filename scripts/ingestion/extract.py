"""Bounded deterministic extraction. Never interprets or executes source code."""
import io
import json
from pathlib import Path
import re
import shutil
import subprocess
import tempfile
import xml.etree.ElementTree as ET
import zipfile

import yaml
from .drive import SourceError, EXPORTS, MAX_BYTES

PARSER_VERSION = "tssr-extract-1"
TEXT_MIMES = {"text/plain", "text/markdown", "text/x-markdown", "application/json",
              "application/x-yaml", "application/yaml", "text/yaml"}
DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
PPTX = "application/vnd.openxmlformats-officedocument.presentationml.presentation"


def extract(raw, mime, *, pdftotext=None):
    if not raw or len(raw) > MAX_BYTES:
        raise SourceError("Empty or oversized source")
    mime = EXPORTS.get(mime, mime)
    warnings, fragments = [], []
    if mime in TEXT_MIMES:
        value = raw.decode("utf-8-sig", errors="strict")
        if mime == "application/json":
            json.loads(value)
        if mime in {"application/x-yaml", "application/yaml", "text/yaml"}:
            if any(isinstance(t, (yaml.AnchorToken, yaml.AliasToken)) for t in yaml.scan(value)):
                raise SourceError("YAML aliases refused")
            yaml.safe_load(value)
        # Preserve line boundaries, including blank lines; no silent source rewrite.
        fragments = [{"position": {"line": i}, "text": line, "type": "text"}
                     for i, line in enumerate(value.splitlines(), 1) if line.strip()]
    elif mime in {DOCX, PPTX}:
        with zipfile.ZipFile(io.BytesIO(raw)) as archive:
            infos = archive.infolist()
            if len(infos) > 2000 or sum(i.file_size for i in infos) > 64_000_000:
                raise SourceError("Office archive expansion limit")
            names = [i.filename for i in infos]
            if len(set(names)) != len(names) or any(n.startswith("/") or ".." in n.split("/") for n in names):
                raise SourceError("Unsafe Office archive paths")
            selected = (["word/document.xml"] if mime == DOCX else
                        sorted((n for n in names if re.fullmatch(r"ppt/slides/slide\d+\.xml", n)),
                               key=lambda n: int(re.search(r"(\d+)\.xml", n)[1])))
            for page, name in enumerate(selected, 1):
                content = archive.read(name)
                if b"<!DOCTYPE" in content.upper() or b"<!ENTITY" in content.upper():
                    raise SourceError("XML entities refused")
                tree = ET.fromstring(content)
                value = "\n".join(n.text for n in tree.iter() if n.tag.endswith("}t") and n.text)
                fragments.append({"position": {"slide" if mime == PPTX else "section": page},
                                  "text": value, "type": "text"})
            # References only; images are neither copied en masse nor sent to AI.
            for name in names:
                if re.fullmatch(r"(word|ppt)/media/[A-Za-z0-9_.-]+", name):
                    warnings.append("IMAGE_REVIEW_REQUIRED:" + name)
    elif mime == "application/pdf":
        if not raw.startswith(b"%PDF-"):
            raise SourceError("PDF MIME/magic mismatch")
        executable = pdftotext or shutil.which("pdftotext")
        if not executable:
            raise SourceError("PDF extractor unavailable: configure PDFTOTEXT_BIN")
        with tempfile.TemporaryDirectory(prefix="tssr-pdf-") as temp:
            source = Path(temp) / "source.pdf"
            target = Path(temp) / "text.txt"
            source.write_bytes(raw)
            result = subprocess.run([str(executable), "-layout", "-enc", "UTF-8", str(source), str(target)],
                                    capture_output=True, timeout=30)
            if result.returncode or not target.exists() or target.stat().st_size > 2_000_000:
                raise SourceError("PDF extraction failed or exceeded limit")
            pages = target.read_text().split("\f")
            fragments = [{"position":{"page":i},"text":page.strip(),"type":"text"}
                         for i,page in enumerate(pages,1) if page.strip()]
            warnings.append("PDF_VISUAL_REVIEW_REQUIRED")  # diagrams/scans not OCR'd or inferred
    elif mime.startswith("image/"):
        return {"parserVersion":PARSER_VERSION, "fragments":[], "complete":False,
                "warnings":["IMAGE_REVIEW_REQUIRED"], "imageReferences":[{"sourceImage":True}]}
    else:
        raise SourceError("Unsupported source format; manual review required")
    if sum(len(f["text"]) for f in fragments) > 500_000:
        raise SourceError("Extraction text limit exceeded; no silent truncation")
    return {"parserVersion":PARSER_VERSION, "fragments":fragments,
            "complete":bool(fragments) and not warnings, "warnings":warnings}


def segments(fragments, max_bytes=6000):
    """Deduplicate exact paragraphs, keep every source position, stable hashes."""
    import hashlib
    grouped = {}
    for fragment in fragments:
        value = fragment["text"].strip()
        if not value:
            continue
        # Character slices bound UTF-8 bytes conservatively (4 bytes/codepoint).
        for offset in range(0, len(value), max_bytes // 4):
            chunk = value[offset:offset + max_bytes // 4]
            key = hashlib.sha256(chunk.encode()).hexdigest()
            grouped.setdefault(key, {"hash":key,"text":chunk,"positions":[]})
            grouped[key]["positions"].append({**fragment["position"],"offset":offset})
    return list(grouped.values())
