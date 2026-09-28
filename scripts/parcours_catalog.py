"""Resolve documentary identities without guessing ambiguous relationships."""
import json
from pathlib import PurePosixPath
import re

from parcours import ROOT, PlanningError, canonical_title, load_planning, text

SECTION_NAMES = {"presentation", "contexte", "situation", "objectifs", "competences", "prerequis", "missions", "livrables", "criteres", "tests", "depannage", "synthese", "correction"}


def doc_path(value, root=ROOT):
    if not isinstance(value, str) or not re.fullmatch(r"[a-z0-9][a-z0-9/_.-]*\.md", value):
        raise PlanningError("Chemin documentaire invalide")
    path = PurePosixPath(value)
    target = (root / "docs" / value).resolve()
    if ".." in path.parts or not target.is_relative_to((root / "docs").resolve()) or not target.is_file():
        raise PlanningError(f"Document absent ou hors docs : {value}")
    return value


def catalog(root=ROOT):
    result = []
    for page in sorted((root / "docs/modules").glob("*/index.md")):
        match = re.search(r"^# (.+)$", page.read_text(), re.M)
        if not match:
            raise PlanningError(f"Titre absent : {page.name}")
        title = re.sub(r":[a-z0-9_-]+:\s*", "", match[1])
        result.append({"title": title, "path": page.relative_to(root / "docs").as_posix()})
    return result


def load_msp(root=ROOT):
    data = json.loads((root / "data/msp.json").read_text())
    if data.get("schemaVersion") != 1 or not isinstance(data.get("items"), list):
        raise PlanningError("Schéma MSP invalide")
    seen = set()
    courses = {c["path"] for c in catalog(root)}
    for item in data["items"]:
        if not re.fullmatch(r"[a-z0-9-]+", item["id"]) or item["id"] in seen:
            raise PlanningError("ID MSP invalide ou dupliqué")
        seen.add(item["id"])
        text(item["title"], "titre MSP")
        if item["path"] is not None:
            doc_path(item["path"], root)
        if not isinstance(item["sections"], dict) or set(item["sections"]) - SECTION_NAMES:
            raise PlanningError("Section MSP inconnue")
        for name, content in item["sections"].items():
            text(content, name)
        for path in item["resources"]:
            doc_path(path, root)
        for relation in item["relations"]:
            if relation["coursePath"] not in courses:
                raise PlanningError("Cours lié à la MSP inconnu")
            evidence = doc_path(relation["evidencePath"], root)
            quote = text(relation["evidenceQuote"], "preuve")
            if quote not in (root / "docs" / evidence).read_text():
                raise PlanningError("Preuve de relation MSP absente")
            if relation.get("modulePath"):
                module = doc_path(relation["modulePath"], root)
                if PurePosixPath(module).parent != PurePosixPath(relation["coursePath"]).parent:
                    raise PlanningError("Module non rattaché au cours")
    return data["items"]


def resolve(period, courses, probable, msps):
    title = canonical_title(period["cours"])
    if period["kind"] not in {"MSP", "COURSE"}:
        return {"state": "NON_COURSE", "path": None, "candidates": []}
    if period["kind"] == "MSP":
        matches = [m for m in msps if canonical_title(m["title"]) == title]
        return {"state": "MSP", "path": matches[0]["path"] if len(matches) == 1 else None, "candidates": []}
    matches = [c["path"] for c in courses if canonical_title(c["title"]) == title]
    if len(matches) == 1:
        return {"state": "MATCH_EXACT", "path": matches[0], "candidates": matches}
    hints = [p for p in probable if canonical_title(p["title"]) == title]
    candidates = matches or list(dict.fromkeys(c for h in hints for c in h["candidates"]))
    return {"state": "MATCH_PROBABLE" if candidates else "MISSING", "path": None, "candidates": candidates}


def model(root=ROOT):
    courses, msps = catalog(root), load_msp(root)
    mapping = json.loads((root / "data/course-mapping.json").read_text())
    if mapping.get("schemaVersion") != 1 or not isinstance(mapping.get("probable"), list):
        raise PlanningError("Schéma correspondances invalide")
    for hint in mapping["probable"]:
        text(hint["title"], "titre candidat")
        for path in hint["candidates"]:
            if path not in {c["path"] for c in courses}:
                raise PlanningError("Candidat inconnu")
    periods = load_planning(root / "data/parcours_tssr.yaml")
    return [{**p, "mapping": resolve(p, courses, mapping["probable"], msps)} for p in periods]


def reorder_courses(nav, periods):
    """Only reorder existing groups, never drop or duplicate a nav item."""
    ranking = {}
    for index, period in enumerate(periods):
        if period["mapping"]["path"]:
            ranking.setdefault(period["mapping"]["path"], index)

    def paths(node):
        if isinstance(node, str):
            return [node]
        if isinstance(node, dict):
            return [p for value in node.values() for p in paths(value)]
        return [p for value in node for p in paths(value)]

    for group in nav:
        if "Cours" in group:
            group["Cours"] = sorted(group["Cours"], key=lambda item: min((ranking.get(p, len(periods)) for p in paths(item)), default=len(periods)))
    return nav
