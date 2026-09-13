#!/usr/bin/env python3
"""Resolve publication identity from one exact Git commit, never a first match.

Run this script from the trusted workflow checkout. ``source_sha`` is inspected
as data; no file or program from that revision is executed here. A trailer is
only a candidate identifier: the workflow must still attest it with Supabase.
"""

from __future__ import annotations

import os
import re
import subprocess
from pathlib import Path


UUID_PATTERN = r"[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}"
SHA_PATTERN = r"[0-9a-f]{40}"
TRAILER_NAME = "Change-Request-ID"


def canonical_uuid(value: str) -> str:
    if not isinstance(value, str) or not re.fullmatch(UUID_PATTERN, value):
        raise ValueError("Change request identifier must be a canonical lowercase UUID.")
    return value


def canonical_sha(value: str) -> str:
    if not isinstance(value, str) or not re.fullmatch(SHA_PATTERN, value):
        raise ValueError("Commit must be a full lowercase SHA-1.")
    return value


def change_id_from_branch(branch: str) -> str:
    match = re.fullmatch(rf"collaboration/change-({UUID_PATTERN})", branch)
    if not match:
        raise ValueError("Not an exact collaborative publication branch.")
    return match.group(1)


def extract_change_request_id(message: str) -> str:
    # Count ambiguous spellings too, so an injected earlier occurrence cannot
    # silently be ignored in favour of the final canonical trailer.
    candidates = re.findall(r"^[ \t]*Change-Request-ID[ \t]*:", message, re.MULTILINE | re.IGNORECASE)
    if not candidates:
        return ""
    if len(candidates) != 1:
        raise ValueError("Expected exactly one Change-Request-ID trailer.")
    if any(character in message for character in ("\r", "\0", "\v", "\f", "\x85", "\u2028", "\u2029")):
        raise ValueError("Ambiguous control character in publication commit message.")
    final_line = message.rstrip("\n").split("\n")[-1]
    match = re.fullmatch(rf"Change-Request-ID: ({UUID_PATTERN})", final_line)
    if not match:
        raise ValueError("Change-Request-ID must be the single canonical final trailer.")
    return canonical_uuid(match.group(1))


def resolve_metadata(message: str, actual_sha: str, requested_sha: str = "", change_id: str = "") -> dict[str, str]:
    commit_sha = canonical_sha(actual_sha)
    if requested_sha and canonical_sha(requested_sha) != commit_sha:
        raise ValueError("Requested commit does not match the inspected source commit.")
    trailer_id = extract_change_request_id(message)
    if change_id and canonical_uuid(change_id) != trailer_id:
        raise ValueError("Explicit change request does not match the final commit trailer.")
    return {"change_id": trailer_id, "commit_sha": commit_sha}


def git(*arguments: str) -> str:
    return subprocess.check_output(["git", *arguments], text=True, encoding="utf-8")


def main() -> None:
    requested_sha = os.environ.get("INPUT_COMMIT_SHA", "")
    source_sha = canonical_sha(requested_sha or os.environ["GITHUB_SHA"])
    # Full history is fetched from the same repository by the trusted checkout.
    # Manual dispatch cannot build an arbitrary branch or a detached attack SHA.
    actual_sha = git("rev-parse", "--verify", f"{source_sha}^{{commit}}").strip()
    subprocess.run(["git", "merge-base", "--is-ancestor", actual_sha, "refs/remotes/origin/main"], check=True)
    message = git("show", "--no-patch", "--format=%B", actual_sha)
    metadata = resolve_metadata(message, actual_sha, requested_sha, os.environ.get("INPUT_CHANGE_ID", ""))
    with Path(os.environ["GITHUB_OUTPUT"]).open("a", encoding="utf-8") as output:
        for key, value in metadata.items():
            output.write(f"{key}={value}\n")


if __name__ == "__main__":
    main()
