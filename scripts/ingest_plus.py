#!/usr/bin/env python3
"""NO_API by construction: connector snapshot -> work package -> local preview."""
import argparse
import json
import os
from pathlib import Path
from ingestion.plus import connector_metadata, prepare, finalize, private_json
from ingestion.registry import Registry


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("action", choices=("prepare", "validate"))
    parser.add_argument("--state-dir", type=Path, required=True)
    parser.add_argument("--snapshot", type=Path)
    parser.add_argument("--evidence", type=Path)
    parser.add_argument("--target", type=Path)
    parser.add_argument("--kind", default="TP")
    parser.add_argument("--pages", type=int, nargs="+")
    parser.add_argument("--package", type=Path)
    parser.add_argument("--result", type=Path)
    args = parser.parse_args()
    repo = Path(__file__).resolve().parents[1]
    if args.state_dir.resolve().is_relative_to(repo):
        parser.error("Private artifacts must stay outside repository")
    reg = Registry(args.state_dir)
    try:
        if args.action == "prepare":
            if not all((args.snapshot, args.evidence, args.target)):
                parser.error("prepare needs snapshot, evidence and target")
            raw = args.snapshot.read_bytes()
            meta = connector_metadata(json.loads(args.evidence.read_text()), raw)
            work, metrics = prepare(reg, repo, meta, raw, json.loads(args.target.read_text()),
                                    args.kind, args.pages, os.environ.get("PDFTOTEXT_BIN"))
            private_json(reg.root / "work-package.json", work)
            private_json(reg.root / "metrics.json", metrics)
            print(json.dumps(metrics))
        else:
            if not args.package or not args.result:
                parser.error("validate needs package and result")
            work, result = json.loads(args.package.read_text()), json.loads(args.result.read_text())
            preview = finalize(reg, repo, work, result)
            private_json(reg.root / "preview.json", preview)
            for name, text in (("preview.md", preview["generatedMarkdown"]), ("preview.diff", preview["diff"])):
                path = reg.root / name
                if path.is_symlink():
                    raise ValueError("Symlink refused")
                path.write_text(text)
                os.chmod(path, 0o600)
            print(json.dumps({"status":preview["status"],"questions":len(preview["questions"]),
                              "apiCalls":0,"submissions":0}))
    finally:
        reg.close()


if __name__ == "__main__":
    main()
