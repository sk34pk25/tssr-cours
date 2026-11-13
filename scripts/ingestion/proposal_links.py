"""Same page-link rule as supabase/functions/_shared/proposal-links.ts.

Relative Markdown links and absolute links to the public site must name a page
that is already on the proposal base or included in the same proposal. External
URLs and non-page assets are ignored. This is local admission, not publication.
"""
import posixpath
import re
from urllib.parse import unquote

SITE_ORIGIN = "https://sk34pk25.github.io/tssr-cours"
_IMAGE = re.compile(r"\.(png|jpe?g|webp|gif)$", re.I)
_FENCE = re.compile(r"```.*?```", re.S)
_INLINE = re.compile(r"`[^`\n]+`")
_COMMENT = re.compile(r"<!--.*?-->", re.S)
_LINKS = (
    re.compile(r"\]\(\s*(?:<([^>\n]+)>|([^\s)]+))"),
    re.compile(r"(?m)^ {0,3}\[[^\]\n]+\]:\s*(?:<([^>\n]+)>|(\S+))"),
    re.compile(r"(?i)\b(?:href|src)\s*=\s*(?:\"([^\"]+)\"|'([^']+)')"),
)


class ProposalLinkError(ValueError):
    pass


def mask_markdown(text):
    return _COMMENT.sub("", _INLINE.sub("", _FENCE.sub("", text or "")))


def site_page_candidates(rest):
    rest = rest.strip("/")
    if not rest:
        return ["docs/index.md"]
    if rest.endswith(".md"):
        return ["docs/" + rest.lstrip("/")]
    return ["docs/" + rest + ".md", "docs/" + rest + "/index.md"]


def _join_relative(from_path, bare):
    parts = from_path.split("/")[:-1]
    for part in bare.split("/"):
        if part == "..":
            if parts:
                parts.pop()
        elif part and part != ".":
            parts.append(part)
    return posixpath.normpath("/".join(parts))


def resolve_proposal_link(from_path, link):
    bare = link.split("?", 1)[0].split("#", 1)[0]
    if not bare or bare.startswith("#"):
        return None
    if re.match(r"^[a-z][a-z0-9+.-]*:", bare, re.I):
        if bare != SITE_ORIGIN and not bare.startswith(SITE_ORIGIN + "/"):
            return None
        return site_page_candidates(bare[len(SITE_ORIGIN):].lstrip("/"))
    if bare.startswith("/"):
        return None
    if _IMAGE.search(bare):
        return [_join_relative(from_path, bare)]
    if not bare.endswith(".md") and not bare.endswith("/") and re.search(r"\.[a-z0-9]+$", bare, re.I):
        return None
    parts = from_path.split("/")[:-1]
    relative = bare[:-1] if bare.endswith("/") else bare
    if not relative:
        return site_page_candidates("")
    for part in relative.split("/"):
        if part == "..":
            if parts:
                parts.pop()
        elif part and part != ".":
            parts.append(part)
    joined = posixpath.normpath("/".join(parts))
    if bare.endswith(".md"):
        return [joined]
    rest = joined[5:] if joined.startswith("docs/") else joined
    return site_page_candidates(rest)


def assert_proposal_links(files, available):
    """Raise ProposalLinkError when a page link leaves the base and this set."""
    present = set(available)
    for file in files:
        if not isinstance(file, dict):
            continue
        path = file.get("new_file_path") or file.get("file_path") or ""
        if file.get("change_type") == "delete":
            present.discard(file.get("file_path"))
            continue
        if file.get("change_type") != "delete":
            present.add(path)
    for file in files:
        path = file.get("new_file_path") or file.get("file_path") or ""
        if file.get("change_type") == "delete" or not str(path).endswith(".md"):
            continue
        if file.get("content_encoding") == "base64":
            continue
        source = mask_markdown(file.get("new_content") or "")
        for pattern in _LINKS:
            for match in pattern.finditer(source):
                link = unquote(next((group for group in match.groups() if group), ""))
                targets = resolve_proposal_link(path, link)
                if not targets:
                    continue
                if all(_IMAGE.search(target) for target in targets) and not any(target in present for target in targets):
                    continue
                if not any(target in present for target in targets):
                    raise ProposalLinkError("UNRESOLVED_CROSS_CR_DEPENDENCY: local Markdown target absent")
