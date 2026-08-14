#!/usr/bin/env python3
"""Validate the repository relations used by structured course creation."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

import yaml


ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
COURSES = DOCS / "modules"


class MkDocsLoader(yaml.SafeLoader):
    """Safe loader that keeps MkDocs callable references as inert strings."""


MkDocsLoader.add_multi_constructor(
    "tag:yaml.org,2002:python/name:",
    lambda _loader, suffix, _node: suffix,
)


def collect_nav_targets(node: object, targets: list[str]) -> None:
    if isinstance(node, list):
        for child in node:
            collect_nav_targets(child, targets)
        return
    if not isinstance(node, dict):
        raise ValueError("La navigation MkDocs contient une structure invalide.")
    for target in node.values():
        if isinstance(target, str):
            if not re.match(r"^https://", target):
                targets.append(target.split("#", 1)[0])
        else:
            collect_nav_targets(target, targets)


def validate() -> list[str]:
    errors: list[str] = []
    course_slugs: set[str] = set()
    for directory in sorted(path for path in COURSES.iterdir() if path.is_dir()):
        match = re.fullmatch(r"\d{2,3}-([a-z0-9]+(?:-[a-z0-9]+)*)", directory.name)
        if not match:
            errors.append(f"Cours sans slug normalisé : {directory.relative_to(ROOT)}")
            continue
        slug = match.group(1)
        if slug in course_slugs:
            errors.append(f"Slug de cours dupliqué : {slug}")
        course_slugs.add(slug)
        if not (directory / "index.md").is_file():
            errors.append(f"Présentation de cours absente : {directory.relative_to(ROOT)}/index.md")

    config = yaml.load((ROOT / "mkdocs.yml").read_text(encoding="utf-8"), Loader=MkDocsLoader)
    targets: list[str] = []
    collect_nav_targets(config.get("nav", []), targets)
    for target in targets:
        if target and not (DOCS / target).is_file():
            errors.append(f"Entrée de navigation absente : docs/{target}")

    glossary = json.loads((ROOT / "data" / "glossaire.json").read_text(encoding="utf-8"))
    courses = {item["id"]: item for item in glossary.get("courses", [])}
    modules = {item["id"]: item for item in glossary.get("modules", [])}
    if len(courses) != len(glossary.get("courses", [])):
        errors.append("Identifiant de cours dupliqué dans le glossaire.")
    if len(modules) != len(glossary.get("modules", [])):
        errors.append("Identifiant de module dupliqué dans le glossaire.")
    for course_id, course in courses.items():
        if not (DOCS / course.get("path", "")).is_file():
            errors.append(f"Cours du glossaire absent : {course_id} → {course.get('path')}")
    for module_id, module in modules.items():
        if module.get("courseId") not in courses:
            errors.append(f"Module orphelin : {module_id} → {module.get('courseId')}")
        if not (DOCS / module.get("path", "")).is_file():
            errors.append(f"Page de module absente : {module_id} → {module.get('path')}")
    referenced_courses: set[str] = set()
    for entry in glossary.get("entries", []):
        for reference in entry.get("refs", []):
            if ":" not in reference:
                errors.append(f"Référence de glossaire invalide : {entry.get('term')} → {reference}")
                continue
            course_id, module_id = reference.split(":", 1)
            referenced_courses.add(course_id)
            if course_id not in courses or module_id not in modules:
                errors.append(f"Référence de glossaire orpheline : {entry.get('term')} → {reference}")
            elif modules[module_id].get("courseId") != course_id:
                errors.append(f"Relation cours/module incohérente : {reference}")
    for course_id in courses.keys() - referenced_courses:
        errors.append(f"Cours du glossaire sans aucun terme : {course_id}")

    pdf_pattern = re.compile(r'data-tssr-pdf-src="([^"]+\.pdf)"')
    for markdown_file in DOCS.rglob("*.md"):
        content = markdown_file.read_text(encoding="utf-8")
        for relative in pdf_pattern.findall(content):
            target = (markdown_file.parent / relative).resolve()
            if DOCS.resolve() not in target.parents or not target.is_file():
                errors.append(f"PDF intégré absent ou hors docs : {markdown_file.relative_to(ROOT)} → {relative}")
    return errors


def main() -> int:
    errors = validate()
    if errors:
        print("Validation structurelle échouée :", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1
    print("Structure des cours, navigation et relations du glossaire : valide")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
