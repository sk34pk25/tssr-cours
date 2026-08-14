"""Small build hooks for generated, single-source editorial indexes."""

from __future__ import annotations

from build_glossary import OUTPUT, load_data, render_page, validate


def on_pre_build(*, config) -> None:  # noqa: ARG001 - MkDocs hook signature
    """Regenerate the static glossary before MkDocs discovers and indexes pages."""

    course_map, module_map, entries = validate(load_data())
    rendered = render_page(course_map, module_map, entries)
    if not OUTPUT.exists() or OUTPUT.read_text(encoding="utf-8") != rendered:
        OUTPUT.parent.mkdir(parents=True, exist_ok=True)
        OUTPUT.write_text(rendered, encoding="utf-8")
