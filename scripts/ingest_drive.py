#!/usr/bin/env python3
"""Explicit, unscheduled Phase3 runner. --dry-run is mandatory; no submission."""
import argparse
import json
import os
from pathlib import Path

from ingestion.ai import Engine, FakeAIProvider
from ingestion.drive import BoundedReader, FixtureDrive, GoogleDriveReadOnly, TSSR_ROOT, FOLDER
from ingestion.pipeline import Pipeline
from ingestion.registry import Registry


def main():
    parser=argparse.ArgumentParser(description=__doc__)
    source=parser.add_mutually_exclusive_group(required=True)
    source.add_argument("--fixture",type=Path)
    source.add_argument("--drive",action="store_true",help="GET-only; requires drive.readonly token")
    parser.add_argument("--dry-run",action="store_true",required=True)
    parser.add_argument("--state-dir",type=Path,required=True,help="Private local state, outside repository")
    parser.add_argument("--file-id",default=None)
    parser.add_argument("--provider",choices=("no_api","fake"),default="no_api")
    args=parser.parse_args()
    repo=Path(__file__).resolve().parents[1]
    if args.state_dir.resolve().is_relative_to(repo):
        parser.error("State/preview must be outside the Git repository")
    bindings=json.loads((repo/"data/ingestion-bindings.json").read_text())["bindings"]
    if args.provider=="no_api":
        parser.error("NO_API: prepare a connector snapshot with scripts/ingest_plus.py; fake is test-only")
    if args.fixture:
        data=json.loads(args.fixture.read_text())
        entries={TSSR_ROOT:{"id":TSSR_ROOT,"name":"TSSR","mimeType":FOLDER}}
        contents={}
        for item in data["files"]:
            identity=item["metadata"]["id"]
            raw=item["text"].encode()
            entries[identity]={**item["metadata"],"size":str(len(raw))}
            contents[identity]=raw
        transport=FixtureDrive(entries,contents)
        bindings=data.get("bindings",{})
    else:
        transport=GoogleDriveReadOnly(os.environ.get("GOOGLE_DRIVE_ACCESS_TOKEN"))
    registry=Registry(args.state_dir)
    try:
        reader=BoundedReader(transport)
        listing=reader.scan()
        registry.mark_missing({item["id"] for item in listing})
        outputs=[]
        for item in listing:
            if args.file_id and item["id"]!=args.file_id:
                continue
            provider=FakeAIProvider(bindings.get(item["id"],{}).get("kind","UNKNOWN"))
            engine=Engine(registry,provider)
            pipeline=Pipeline(reader,registry,engine,repo,bindings,pdftotext=os.environ.get("PDFTOTEXT_BIN"))
            preview=pipeline.run(item["id"],dry_run=True)
            # Local private report only; no generated content sent to stdout/log.
            report=registry.root/(preview["importId"]+".preview.json")
            if report.is_symlink():
                raise ValueError("Preview symlink refused")
            report.write_text(json.dumps(preview,ensure_ascii=False,indent=2))
            os.chmod(report,0o600)
            outputs.append({"fileId":item["id"],"status":preview.get("status",preview.get("state")),
                            "preview":str(report)})
        print(json.dumps({"provider":args.provider,"paidCalls":"none" if args.provider=="fake" else "see private metrics",
                          "submissions":0,"results":outputs},indent=2))
    finally:
        registry.close()


if __name__=="__main__":
    main()
