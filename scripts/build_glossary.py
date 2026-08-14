#!/usr/bin/env python3
"""Validate the TSSR glossary data and render its static MkDocs page."""

from __future__ import annotations

import argparse
import html
import json
import re
import sys
import unicodedata
from collections import Counter
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data" / "glossaire.json"
OUTPUT = ROOT / "docs" / "glossaire" / "index.md"
EXPECTED_LEGACY_TERMS = {
    "ACL",
    "ARP",
    "CIDR",
    "CMDB",
    "DHCP",
    "DNS",
    "GLPI",
    "GPO / LGPO",
    "IPv4",
    "IPv6",
    "ITIL",
    "LVM",
    "PDU",
    "SLA",
    "SMB",
    "UAC",
    "WIM",
}


class GlossaryError(ValueError):
    """Raised when source data cannot safely be rendered."""


def normalize(value: str) -> str:
    decomposed = unicodedata.normalize("NFKD", value)
    return "".join(char for char in decomposed if not unicodedata.combining(char)).casefold()


def slugify(value: str) -> str:
    normalized = normalize(value)
    normalized = normalized.replace("+", " plus ").replace("#", " sharp ")
    slug = re.sub(r"[^a-z0-9]+", "-", normalized).strip("-")
    return slug or "terme"


def alphabetic_key(value: str) -> str:
    return re.sub(r"^[^a-z0-9]+", "", normalize(value))


def escaped(value: object, *, quote: bool = True) -> str:
    return html.escape(str(value), quote=quote)


def load_data() -> dict:
    try:
        return json.loads(SOURCE.read_text(encoding="utf-8"))
    except FileNotFoundError as error:
        raise GlossaryError(f"Source introuvable : {SOURCE}") from error
    except json.JSONDecodeError as error:
        raise GlossaryError(f"JSON invalide ({error.lineno}:{error.colno}) : {error.msg}") from error


def validate(data: dict) -> tuple[dict[str, dict], dict[str, dict], list[dict]]:
    if data.get("schemaVersion") != 1:
        raise GlossaryError("schemaVersion doit valoir 1")

    courses = data.get("courses")
    modules = data.get("modules")
    entries = data.get("entries")
    if not isinstance(courses, list) or not isinstance(modules, list) or not isinstance(entries, list):
        raise GlossaryError("courses, modules et entries doivent être des listes")
    if not 300 <= len(entries) <= 2_000:
        raise GlossaryError(f"Le glossaire doit contenir entre 300 et 2 000 termes (actuel : {len(entries)})")

    course_map: dict[str, dict] = {}
    for course in courses:
        if not isinstance(course, dict):
            raise GlossaryError("Chaque cours doit être un objet")
        course_id = course.get("id")
        if not isinstance(course_id, str) or not re.fullmatch(r"[a-z0-9-]+", course_id):
            raise GlossaryError(f"Identifiant de cours invalide : {course_id!r}")
        if course_id in course_map:
            raise GlossaryError(f"Cours dupliqué : {course_id}")
        if not all(isinstance(course.get(key), str) and course[key].strip() for key in ("name", "shortName", "path")):
            raise GlossaryError(f"Cours incomplet : {course_id}")
        if not (ROOT / "docs" / course["path"]).is_file():
            raise GlossaryError(f"Page de cours introuvable : docs/{course['path']}")
        course_map[course_id] = course

    module_map: dict[str, dict] = {}
    module_order: dict[str, int] = {}
    for position, module in enumerate(modules):
        if not isinstance(module, dict):
            raise GlossaryError("Chaque module doit être un objet")
        module_id = module.get("id")
        course_id = module.get("courseId")
        if not isinstance(module_id, str) or not re.fullmatch(r"[a-z][a-z0-9-]+", module_id):
            raise GlossaryError(f"Identifiant de module invalide : {module_id!r}")
        if module_id in module_map:
            raise GlossaryError(f"Module dupliqué : {module_id}")
        if course_id not in course_map:
            raise GlossaryError(f"Cours inconnu pour {module_id} : {course_id}")
        if not all(isinstance(module.get(key), str) and module[key].strip() for key in ("name", "shortName", "path")):
            raise GlossaryError(f"Module incomplet : {module_id}")
        if not (ROOT / "docs" / module["path"]).is_file():
            raise GlossaryError(f"Page de module introuvable : docs/{module['path']}")
        module_map[module_id] = module
        module_order[module_id] = position

    normalized_terms: dict[str, str] = {}
    entry_ids: dict[str, str] = {}
    validated_entries: list[dict] = []
    reference_counts: Counter[str] = Counter()

    for position, raw_entry in enumerate(entries, start=1):
        if not isinstance(raw_entry, dict):
            raise GlossaryError(f"Entrée {position} : objet attendu")
        entry = dict(raw_entry)
        term = entry.get("term")
        definition = entry.get("definition")
        references = entry.get("refs")
        if not isinstance(term, str) or not term.strip():
            raise GlossaryError(f"Entrée {position} : terme manquant")
        if not isinstance(definition, str) or not 35 <= len(definition.strip()) <= 420:
            raise GlossaryError(f"{term} : définition attendue entre 35 et 420 caractères")
        if not isinstance(references, list) or not references:
            raise GlossaryError(f"{term} : au moins une référence pédagogique est requise")
        for list_key in ("aliases", "keywords"):
            values = entry.get(list_key, [])
            if not isinstance(values, list) or not all(isinstance(value, str) and value.strip() for value in values):
                raise GlossaryError(f"{term} : {list_key} doit être une liste de chaînes non vides")
            entry[list_key] = values
        full_name = entry.get("fullName", "")
        if not isinstance(full_name, str):
            raise GlossaryError(f"{term} : fullName doit être une chaîne")

        normalized_term = normalize(term).strip()
        if normalized_term in normalized_terms:
            raise GlossaryError(f"Terme dupliqué : {term} / {normalized_terms[normalized_term]}")
        normalized_terms[normalized_term] = term

        entry_id = entry.get("id", slugify(term))
        if not isinstance(entry_id, str) or not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", entry_id):
            raise GlossaryError(f"{term} : ancre invalide {entry_id!r}")
        if entry_id in entry_ids:
            raise GlossaryError(f"Ancre dupliquée : {entry_id} ({term} / {entry_ids[entry_id]})")
        entry_ids[entry_id] = term

        resolved_references = []
        seen_references = set()
        for reference in references:
            if not isinstance(reference, str) or ":" not in reference:
                raise GlossaryError(f"{term} : référence invalide {reference!r}")
            course_id, module_id = reference.split(":", 1)
            if course_id not in course_map or module_id not in module_map:
                raise GlossaryError(f"{term} : référence inconnue {reference}")
            if module_map[module_id]["courseId"] != course_id:
                raise GlossaryError(f"{term} : le module {module_id} n’appartient pas au cours {course_id}")
            if reference in seen_references:
                raise GlossaryError(f"{term} : référence dupliquée {reference}")
            seen_references.add(reference)
            reference_counts[course_id] += 1
            resolved_references.append((course_id, module_id))

        entry["id"] = entry_id
        entry["fullName"] = full_name.strip()
        entry["definition"] = definition.strip()
        entry["resolvedRefs"] = resolved_references
        entry["sourceOrder"] = position
        validated_entries.append(entry)

    missing_legacy = EXPECTED_LEGACY_TERMS - {entry["term"] for entry in validated_entries}
    if missing_legacy:
        raise GlossaryError(f"Termes historiques manquants : {', '.join(sorted(missing_legacy))}")
    unreferenced_courses = set(course_map) - set(reference_counts)
    if unreferenced_courses:
        raise GlossaryError(f"Cours sans terme : {', '.join(sorted(unreferenced_courses))}")

    validated_entries.sort(key=lambda entry: (alphabetic_key(entry["term"]), entry["sourceOrder"]))
    for entry in validated_entries:
        entry["moduleOrder"] = min(module_order[module_id] for _, module_id in entry["resolvedRefs"])
    return course_map, module_map, validated_entries


def render_reference(reference: tuple[str, str], course_map: dict[str, dict], module_map: dict[str, dict]) -> str:
    course_id, module_id = reference
    course = course_map[course_id]
    module = module_map[module_id]
    path = module["path"]
    href = "../" + (path.removesuffix("index.md") if path.endswith("index.md") else path.removesuffix(".md") + "/")
    label = f"{course['shortName']} · {module['shortName']}"
    title = f"{course['name']} — {module['name']}"
    return (
        '<li><a class="tssr-glossary-card__context" '
        f'href="{escaped(href)}" title="{escaped(title)}">{escaped(label)}</a></li>'
    )


def render_card(entry: dict, course_map: dict[str, dict], module_map: dict[str, dict]) -> str:
    term = entry["term"]
    full_name = entry["fullName"]
    aliases = entry["aliases"]
    keywords = entry["keywords"]
    references = entry["resolvedRefs"]
    course_ids = list(dict.fromkeys(course_id for course_id, _ in references))
    module_ids = list(dict.fromkeys(module_id for _, module_id in references))
    first_letter_match = re.search(r"[a-z]", normalize(term))
    letter = first_letter_match.group(0).upper() if first_letter_match else ""
    attributes = {
        "data-glossary-card": "",
        "data-term": term,
        "data-full-name": full_name,
        "data-aliases": " | ".join(aliases),
        "data-keywords": " | ".join(keywords),
        "data-definition": entry["definition"],
        "data-courses": " ".join(course_ids),
        "data-modules": " ".join(module_ids),
        "data-letter": letter,
        "data-course-sort": normalize(course_map[course_ids[0]]["name"]),
        "data-module-sort": f"{entry['moduleOrder']:03d}",
        "data-source-order": str(entry["sourceOrder"]),
    }
    attribute_text = " ".join(
        name if value == "" else f'{name}="{escaped(value)}"'
        for name, value in attributes.items()
    )
    heading_id = f"{entry['id']}-titre"
    parts = [
        f'<article class="tssr-glossary-card" id="{entry["id"]}" {attribute_text} aria-labelledby="{heading_id}">',
        '  <header class="tssr-glossary-card__header">',
        f'    <h2 id="{heading_id}"><a href="#{entry["id"]}" class="tssr-glossary-card__anchor" aria-label="{escaped(term)}">{escaped(term)}</a></h2>',
    ]
    if full_name:
        parts.append(f'    <p class="tssr-glossary-card__full-name">{escaped(full_name)}</p>')
    parts.extend([
        "  </header>",
        f'  <p class="tssr-glossary-card__definition">{escaped(entry["definition"])}</p>',
    ])
    if aliases:
        alias_label = "Alias" if len(aliases) == 1 else "Alias"
        parts.append(
            f'  <p class="tssr-glossary-card__aliases"><span>{alias_label}</span> {escaped(" · ".join(aliases))}</p>'
        )
    parts.append('  <ul class="tssr-glossary-card__contexts" aria-label="Cours et modules associés">')
    parts.extend(f"    {render_reference(reference, course_map, module_map)}" for reference in references)
    parts.extend(["  </ul>", "</article>"])
    return "\n".join(parts)


def render_page(course_map: dict[str, dict], module_map: dict[str, dict], entries: list[dict]) -> str:
    letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    course_options = "\n".join(
        f'        <option value="{course_id}">{escaped(course["name"])}</option>'
        for course_id, course in course_map.items()
    )
    module_options = "\n".join(
        (
            f'        <option value="{module_id}" data-course="{module["courseId"]}">'
            f'{escaped(course_map[module["courseId"]]["shortName"])} · {escaped(module["shortName"])}</option>'
        )
        for module_id, module in module_map.items()
    )
    letter_buttons = "\n".join(
        f'      <button type="button" class="tssr-glossary-letter" data-glossary-letter="{letter}" aria-pressed="false">{letter}</button>'
        for letter in letters
    )
    cards = "\n\n".join(render_card(entry, course_map, module_map) for entry in entries)
    return f'''---
hide:
  - toc
---

<!-- Fichier généré par scripts/build_glossary.py depuis data/glossaire.json. Ne pas modifier à la main. -->

# Glossaire TSSR

Retrouvez ici les termes, acronymes, commandes et concepts essentiels rencontrés dans les cours, travaux pratiques et fiches de révision de la formation.

<div class="tssr-glossary" data-glossary-root data-total="{len(entries)}">
  <form class="tssr-glossary-controls" data-glossary-controls hidden aria-label="Filtrer le glossaire">
    <div class="tssr-glossary-controls__primary">
      <label class="tssr-glossary-field tssr-glossary-field--search" for="glossaire-recherche">
        <span>Rechercher</span>
        <input id="glossaire-recherche" type="search" data-glossary-search autocomplete="off" spellcheck="false" placeholder="Terme, acronyme, définition…">
      </label>
      <label class="tssr-glossary-field" for="glossaire-cours">
        <span>Cours</span>
        <select id="glossaire-cours" data-glossary-course>
          <option value="">Tous les cours</option>
{course_options}
        </select>
      </label>
      <label class="tssr-glossary-field" for="glossaire-module">
        <span>Module</span>
        <select id="glossaire-module" data-glossary-module>
          <option value="">Tous les modules</option>
{module_options}
        </select>
      </label>
      <label class="tssr-glossary-field" for="glossaire-tri">
        <span>Trier par</span>
        <select id="glossaire-tri" data-glossary-sort>
          <option value="az">A → Z</option>
          <option value="za">Z → A</option>
          <option value="course">Cours</option>
          <option value="module">Module</option>
          <option value="relevance">Pertinence</option>
        </select>
      </label>
    </div>
    <fieldset class="tssr-glossary-alphabet" data-glossary-alphabet>
      <legend>Initiale</legend>
      <button type="button" class="tssr-glossary-letter is-active" data-glossary-letter="" aria-pressed="true">Toutes</button>
{letter_buttons}
    </fieldset>
    <div class="tssr-glossary-controls__status">
      <p data-glossary-status role="status" aria-live="polite"><strong data-glossary-count>{len(entries)}</strong> termes affichés <span data-glossary-summary>Tous les termes</span></p>
      <button type="reset" class="tssr-glossary-reset" data-glossary-reset>Réinitialiser</button>
    </div>
  </form>

  <noscript><p class="tssr-glossary-noscript">JavaScript est désactivé : toutes les définitions restent disponibles ci-dessous et la recherche générale du site reste utilisable.</p></noscript>

  <div class="tssr-glossary-empty" data-glossary-empty hidden>
    <strong>Aucun terme ne correspond à ces filtres.</strong>
    <span>Essayez une recherche plus courte ou réinitialisez les filtres.</span>
  </div>

  <div class="tssr-glossary-list" data-glossary-list>
{cards}
  </div>
</div>
'''


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="échoue si la page générée n’est pas à jour")
    args = parser.parse_args()
    try:
        course_map, module_map, entries = validate(load_data())
        rendered = render_page(course_map, module_map, entries)
    except GlossaryError as error:
        print(f"Erreur glossaire : {error}", file=sys.stderr)
        return 1

    if args.check:
        if not OUTPUT.exists() or OUTPUT.read_text(encoding="utf-8") != rendered:
            print("Le glossaire généré n’est pas à jour. Exécutez : python scripts/build_glossary.py", file=sys.stderr)
            return 1
        print(f"Glossaire valide et à jour : {len(entries)} termes, {len(course_map)} cours, {len(module_map)} modules")
        return 0

    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(rendered, encoding="utf-8")
    print(f"Glossaire généré : {len(entries)} termes dans {OUTPUT.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
