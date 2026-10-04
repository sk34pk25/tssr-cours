"""Local approval units, not server authorization. No network or source writes.

Unitary legacy proposals remain valid. Multi-file ecosystems require an explicit
manifest and evidence at the immutable Git base; shared files require a bounded
module delta. The main module page always needs its own approval.
"""
import hashlib
import json
from pathlib import Path
import posixpath
import re
import subprocess
from urllib.parse import unquote

import yaml
from build_glossary import slugify

ROOT = Path(__file__).resolve().parents[2]
MODULE = re.compile(r"modules/([a-z0-9]+(?:-[a-z0-9]+)*)/(module-[a-z0-9]+(?:-[a-z0-9]+)*\.md)")
PEDAGOGICAL = {"modules", "tp", "revision", "exercices", "memo", "commandes",
               "troubleshooting", "tutoriels", "ressources", "kahoot", "msp"}
KINDS = {"TP", "REVISION", "EXERCISE", "MEMO", "COMMANDS", "TROUBLESHOOTING",
         "TUTORIAL", "RESOURCE", "KAHOOT", "GLOSSARY", "LINKS", "COURSE_PAGE"}
FOLDERS = {"TP": "tp", "REVISION": "revision", "EXERCISE": "exercices",
           "MEMO": "memo", "COMMANDS": "commandes", "TROUBLESHOOTING": "troubleshooting",
           "TUTORIAL": "tutoriels", "RESOURCE": "ressources", "KAHOOT": "kahoot",
           "COURSE_PAGE": "modules"}
SCOPE = re.compile(r"<!-- TSSR-MODULE-SCOPE-V1:([^\n]+?) -->.*?<!-- /TSSR-MODULE-SCOPE-V1 -->", re.S)
KAHOOT = re.compile(r"<!-- TSSR-KAHOOT-V1:([^\n]+?) -->")


class GranularityError(ValueError):
    def __init__(self):
        super().__init__("PAYLOAD_GRANULARITY_VIOLATION")


def require(condition):
    if not condition:
        raise GranularityError()


def unique_object(pairs):
    result = {}
    for key, value in pairs:
        require(key not in result)
        result[key] = value
    return result


def decode(raw):
    try:
        return json.loads(raw, object_pairs_hook=unique_object)
    except (ValueError, TypeError):
        raise GranularityError() from None


def git_text(repo, base, path, *, optional=False):
    tree = subprocess.run(["git", "ls-tree", "-z", base, "--", path], cwd=repo,
                          capture_output=True, timeout=15)
    require(tree.returncode == 0)
    if not tree.stdout:
        require(optional)
        return None
    # Reject symlinks/submodules/directories instead of interpreting them as text.
    require(tree.stdout.startswith((b"100644 blob ", b"100755 blob ")) and
            tree.stdout.count(b"\0") == 1)
    result = subprocess.run(["git", "show", f"{base}:{path}"], cwd=repo,
                            capture_output=True, timeout=15)
    require(result.returncode == 0)
    try:
        return result.stdout.decode("utf-8")
    except UnicodeError:
        raise GranularityError() from None


def identity(metadata):
    require(isinstance(metadata, dict))
    course, module = metadata.get("courseId"), metadata.get("moduleId")
    require(isinstance(module, str) and MODULE.fullmatch(module))
    require(course == module.rsplit("/", 1)[0] + "/index.md")
    return course, module


def scoped_remainder(content, target):
    """Remove only target-owned blocks; everything else must stay byte-identical."""
    count = 0
    def remove(match):
        nonlocal count
        require("TSSR-MODULE-SCOPE-V1" not in match[0].split(" -->", 1)[1].rsplit("<!--", 1)[0])
        # Other module blocks must remain byte-for-byte unchanged in the diff.
        if identity(decode(unquote(match[1]))) != target:
            return match[0]
        count += 1
        return ""
    remainder = SCOPE.sub(remove, content)
    require("TSSR-MODULE-SCOPE-V1" not in SCOPE.sub("", content))
    return remainder, count


def shared_delta(old, new, target):
    before, before_count = scoped_remainder(old, target)
    after, after_count = scoped_remainder(new, target)
    require(before == after and before_count + after_count > 0 and old != new)


def glossary_delta(old, new, target):
    before, after = decode(old), decode(new)
    require(isinstance(before, dict) and isinstance(after, dict))
    require({k: v for k, v in before.items() if k != "entries"} ==
            {k: v for k, v in after.items() if k != "entries"})
    courses = [c["id"] for c in before.get("courses", []) if c.get("path") == target[0]]
    modules = [m for m in before.get("modules", []) if m.get("path") == target[1]]
    require(len(courses) == len(modules) == 1 and modules[0].get("courseId") == courses[0])
    reference = courses[0] + ":" + modules[0]["id"]
    def entries(doc):
        rows = doc.get("entries")
        require(isinstance(rows, list))
        result = {}
        for row in rows:
            require(isinstance(row, dict) and isinstance(row.get("term"), str))
            key = row.get("id", slugify(row["term"]))
            require(isinstance(key, str) and key not in result)
            result[key] = row
        return result
    left, right = entries(before), entries(after)
    changed = [key for key in left.keys() | right.keys() if left.get(key) != right.get(key)]
    require(bool(changed))
    for key in changed:
        if key in left and key in right:
            # Linking a shared term to this module is a module-scoped delta;
            # rewriting its shared definition or somebody else's refs is not.
            a, b = left[key], right[key]
            if {k: v for k, v in a.items() if k != "refs"} == {k: v for k, v in b.items() if k != "refs"}:
                require(isinstance(a.get("refs"), list) and isinstance(b.get("refs"), list))
                require(len(b["refs"]) == len(set(b["refs"])))
                require([r for r in a["refs"] if r != reference] == [r for r in b["refs"] if r != reference])
                continue
        for version in (left, right):
            if key in version:
                require(version[key].get("refs") == [reference])


def module_path(path, target, course_text):
    """Ownership uses canonical identity AND the course's committed associations."""
    course, module = target
    folder, filename = MODULE.fullmatch(module).groups()
    roots = {"docs/" + kind + "/" + folder for kind in PEDAGOGICAL - {"modules", "msp"}}
    for link in re.findall(r"\]\(([^\s)#]+)\)", course_text):
        linked = posixpath.normpath(posixpath.join("docs", posixpath.dirname(course), link))
        if linked.startswith("docs/") and linked.endswith("/index.md") and linked.split("/")[1] in {"tp", "revision", "exercices"}:
            root = linked.rsplit("/", 1)[0]
            if len(root.split("/")) == 3:
                roots.add(root)
    short = re.match(r"module-[^-\.]+", filename)[0]
    return any(path == root + "/" + filename or path.startswith(root + "/" + short + "/")
               for root in roots)


def embedded_identity(content, target):
    """Existing explicit metadata cannot contradict the component manifest."""
    if content.startswith("---\n"):
        frontmatter = re.match(r"\A---\n(.*?)\n---(?:\n|$)", content, re.S)
        require(frontmatter is not None)
        class IdentityLoader(yaml.SafeLoader):
            pass
        def mapping(loader, node):
            loader.flatten_mapping(node)
            return unique_object(loader.construct_pairs(node))
        IdentityLoader.add_constructor(yaml.resolver.BaseResolver.DEFAULT_MAPPING_TAG, mapping)
        try:
            metadata = yaml.load(frontmatter[1], Loader=IdentityLoader)
        except yaml.YAMLError:
            raise GranularityError() from None
        if isinstance(metadata, dict) and ("courseId" in metadata or "moduleId" in metadata):
            require(identity(metadata) == target)


def review_description(manifest):
    """Visible even when the server strips unknown payload_summary fields."""
    lines = [f"{manifest['bundleType']} — {manifest['moduleId']}", f"Formation : {manifest['courseId']}"]
    for item in manifest["components"]:
        lines.append(f"- {item['filePath']} | {item['component']} | {item['provenance']} | {item['summary']}")
    return "\n".join(lines)


def assert_payload_granularity(payload, *, repo=ROOT, agent=True):
    """Validate only; never mutate payload/idempotency key or create a request.

    agent=False is for local human tooling only, not an authority sent to a server.
    It permits the existing structured glossary, not arbitrary technical files.
    """
    try:
        return _validate(payload, Path(repo), agent)
    except (KeyError, IndexError, TypeError, AttributeError, OSError, subprocess.SubprocessError):
        raise GranularityError() from None


def _validate(payload, repo, agent):
    require(isinstance(payload, dict))
    files = payload.get("files")
    require(isinstance(files, list) and 1 <= len(files) <= 100)
    paths = []
    for file in files:
        require(isinstance(file, dict))
        path = file.get("file_path")
        require(isinstance(path, str) and re.fullmatch(r"[a-z0-9_-]+(?:/[a-z0-9_-]+)*\.(md|json)", path))
        parts = path.split("/")
        require((len(parts) >= 2 and parts[0] == "docs" and
                 parts[1] not in {"assets", "overrides"} and path.endswith(".md"))
                or (not agent and path == "data/glossaire.json"))
        require(path not in paths and not file.get("new_file_path"))
        require(file.get("change_type") in {"create", "update"} and file.get("content_encoding", "utf-8") == "utf-8")
        require(isinstance(file.get("new_content"), str))
        paths.append(path)
    manifest = payload.get("payload_summary", {}).get("granularity")
    if manifest is None:
        require(len(files) == 1)
        # Existing unitary inputs do not acquire new metadata obligations.
        path = paths[0]
        for marker in KAHOOT.findall(files[0]["new_content"]):
            metadata = decode(unquote(marker))
            module = metadata.get("moduleId") if isinstance(metadata, dict) else None
            require(isinstance(module, str) and MODULE.fullmatch(module))
        return {"bundleType": "COURSE_PAGE" if MODULE.fullmatch(path.removeprefix("docs/")) else "TRANSVERSAL"}
    require(isinstance(manifest, dict) and type(manifest.get("schemaVersion")) is int and manifest["schemaVersion"] == 1)
    kind = manifest.get("bundleType")
    require(kind in {"COURSE_PAGE", "ECOSYSTEM", "TRANSVERSAL"})
    if kind == "TRANSVERSAL":
        require(len(files) == 1 and not manifest.get("moduleId") and not manifest.get("courseId"))
        require(not MODULE.fullmatch(paths[0].removeprefix("docs/")))
        return {"bundleType": kind}
    target = identity(manifest)
    components = manifest.get("components")
    require(isinstance(components, list) and len(components) == len(files))
    require(all(isinstance(c, dict) for c in components))
    require([c.get("filePath") for c in components] == paths)
    base = payload.get("base_commit_sha")
    require(isinstance(base, str) and re.fullmatch(r"[0-9a-f]{40}", base))
    base_type = subprocess.run(["git", "cat-file", "-t", base], cwd=repo,
                               capture_output=True, timeout=15)
    require(base_type.returncode == 0 and base_type.stdout == b"commit\n")
    course_text = git_text(repo, base, "docs/" + target[0])
    git_text(repo, base, "docs/" + target[1])
    if kind == "COURSE_PAGE":
        require(paths == ["docs/" + target[1]])
        require(components[0].get("component") == "COURSE_PAGE")
    else:
        require(all(not p.startswith(("docs/modules/", "docs/msp/")) for p in paths))
    for file, component in zip(files, components):
        path, new = file["file_path"], file["new_content"]
        require(path == "data/glossaire.json" or path.split("/")[1] in PEDAGOGICAL)
        require(identity(component) == target and component.get("component") in KINDS)
        if "moduleId" in file or "courseId" in file:
            require(identity(file) == target)
        for field in ("summary", "provenance"):
            require(isinstance(component.get(field), str) and 0 < len(component[field].strip()) <= 1000)
            require(not any(ord(char) < 32 for char in component[field]))
        component_kind = component["component"]
        require(component_kind != "COURSE_PAGE" or kind == "COURSE_PAGE")
        if component_kind in FOLDERS:
            require(path.startswith("docs/" + FOLDERS[component_kind] + "/"))
        if component_kind == "GLOSSARY":
            require(path == "data/glossaire.json")
        old = git_text(repo, base, path, optional=True)
        require((old is None) == (file["change_type"] == "create"))
        if old is not None:
            raw = old.encode("utf-8")
            require(file.get("base_file_sha") == hashlib.sha1(b"blob " + str(len(raw)).encode() + b"\0" + raw).hexdigest())
        for content in (old or "", new):
            embedded_identity(content, target)
            require("TSSR-KAHOOT-V1:" not in KAHOOT.sub("", content))
        # Both old and new V1 associations must agree; moving a quiz is not a bundle.
        markers = KAHOOT.findall(new)
        for marker in markers + KAHOOT.findall(old or ""):
            require(identity(decode(unquote(marker))) == target)
        require(len(markers) <= 1)
        if path.startswith("docs/kahoot/"):
            require(len(markers) == 1)
        elif path == "data/glossaire.json":
            require(component_kind == "GLOSSARY" and old is not None)
            glossary_delta(old, new, target)
        elif kind != "COURSE_PAGE":
            path_parts = path.split("/")
            if len(path_parts) > 3 and re.match(r"\d{2,3}-", path_parts[2]):
                require(path_parts[2] == MODULE.fullmatch(target[1])[1])
            # A path advertising another module must not use scoped blocks to bypass identity.
            numbers = re.findall(r"(?:^|/)module-([^/.-]+)", path)
            number = re.match(r"module-([^.-]+)", MODULE.fullmatch(target[1])[2])[1]
            require(not numbers or (set(numbers) == {number} and module_path(path, target, course_text)))
            if not module_path(path, target, course_text):
                require(not path.endswith("/index.md"))
                shared_delta(old or "", new, target)
        # Explicit scope markers are checked even in module-dedicated files.
        if "TSSR-MODULE-SCOPE-V1" in new:
            scoped_remainder(new, target)
            if module_path(path, target, course_text):
                require(all(identity(decode(unquote(m))) == target for m in SCOPE.findall(new)))
    # The server intentionally filters arbitrary summary metadata. Require the
    # review manifest in the persisted human-readable description as well.
    require(isinstance(payload.get("title"), str) and bool(payload["title"].strip()))
    require(isinstance(payload.get("description"), str) and
            review_description(manifest) in payload["description"])
    return manifest
