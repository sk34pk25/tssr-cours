"""Small build hooks for generated, single-source editorial indexes."""

from __future__ import annotations

from build_glossary import OUTPUT, load_data, render_page, validate
from markdown_security import MarkdownSecurityExtension
from parcours_catalog import model, reorder_courses
from parcours_render import render_parcours, render_msp
from kahoot_catalog import catalog as kahoot_catalog, card as kahoot_card, render_library, MARKER

KAHOOTS = []


def on_config(config):
    """Install security after the configured native Markdown extensions."""
    if not any(isinstance(extension, MarkdownSecurityExtension) for extension in config.markdown_extensions):
        config.markdown_extensions.append(MarkdownSecurityExtension())
    config.nav = reorder_courses(config.nav, model())
    return config


def on_page_markdown(markdown, *, page, config, files):
    """Render libraries without overwriting the editable historical curriculum."""
    if page.file.src_uri == "kahoot/bibliotheque.md":
        return render_library(KAHOOTS)
    if page.file.src_uri.startswith(("modules/", "kahoot/")):
        for item in KAHOOTS:
            if not item["legacy"] and page.file.src_uri in {item["moduleId"], item["path"]}:
                markdown = MARKER.sub("", markdown) + '\n\n' + kahoot_card(item, page.file.src_uri)
    if page.file.src_uri == "parcours-tssr/index.md":
        return render_parcours()
    if page.file.src_uri == "msp/index.md":
        return render_msp()
    if page.file.src_uri.startswith("parcours/"):
        return ('!!! info "Étape éditoriale historique"\n'
                '    Le planning complet et ses états actualisés sont disponibles dans '
                '[Parcours TSSR](../parcours-tssr/index.md).\n\n' + markdown)
    return markdown


def on_pre_build(*, config) -> None:  # noqa: ARG001 - MkDocs hook signature
    """Regenerate the static glossary before MkDocs discovers and indexes pages."""

    global KAHOOTS
    KAHOOTS = kahoot_catalog()  # Revalidate each build, including live reload.
    course_map, module_map, entries = validate(load_data())
    rendered = render_page(course_map, module_map, entries)
    if not OUTPUT.exists() or OUTPUT.read_text(encoding="utf-8") != rendered:
        OUTPUT.parent.mkdir(parents=True, exist_ok=True)
        OUTPUT.write_text(rendered, encoding="utf-8")
