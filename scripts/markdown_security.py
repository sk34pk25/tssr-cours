"""Enforce the portal's inert attribute policy in the actual MkDocs renderer.

The source validators are an early rejection layer. This extension uses the
installed Python-Markdown and SuperFences parsers at their assignment boundaries,
then inspects the final HTML (including HTML stashed by fenced-code formatters).
It does not rewrite Markdown or silently remove unsupported attributes.
"""

from __future__ import annotations

from collections import Counter
from html import unescape
from html.parser import HTMLParser
import re

from markdown.extensions import Extension
from markdown.extensions.attr_list import AttrListTreeprocessor, get_attrs_and_remainder
from markdown.postprocessors import Postprocessor
from markdown.preprocessors import Preprocessor
from pymdownx.superfences import SuperFencesBlockPreprocessor, SuperFencesException


class MarkdownSecurityError(SuperFencesException):
    """Fatal rejection, deliberately not swallowed by SuperFences validators."""


def validate_attribute(name: str, raw_value: str, *, fenced: bool = False) -> None:
    """ATTR_POLICY_V1; parity fixtures also exercise the TS and browser copies."""
    key = "class" if name == "." else name.lower()
    value = unescape(raw_value)
    tokens = [token for token in value.split(" ") if token]
    plain = not re.search(r'[\x00-\x1f\x7f<>"]', value) and ("'" not in value or key in {"title", "alt", "aria-label"})
    valid = plain and (
        key == "class" and bool(tokens) and all(re.fullmatch(r"[a-zA-Z_][a-zA-Z0-9_-]*", token) for token in tokens)
        or key == "id" and re.fullmatch(r"[a-zA-Z0-9_][a-zA-Z0-9_.:-]*", value)
        or key in {"title", "alt", "aria-label"}
        or key in {"width", "height"} and re.fullmatch(r"[1-9][0-9]{0,3}%?", value)
        or key == "target" and value in {"_blank", "_self", "_parent", "_top"}
        or key == "rel" and bool(tokens) and all(re.fullmatch(r"(?:noopener|noreferrer|nofollow|external|author|help|license|prev|next|search|bookmark|tag|sponsored|ugc)", token) for token in tokens)
        or key == "loading" and value in {"lazy", "eager"}
        or key == "download" and value == "download"
        or fenced and key == "linenums" and re.fullmatch(r"[0-9]+(?: +[0-9]+){0,2}", value)
        or fenced and key == "hl_lines" and re.fullmatch(r"[0-9 ,.-]+", value)
    )
    if not valid:
        raise MarkdownSecurityError("Attribut Markdown actif ou non autorisé.")


class SafeAttrListTreeprocessor(AttrListTreeprocessor):
    def assign_attrs(self, elem, attrs_string: str, *, strict: bool = False) -> str:
        attrs, remainder = get_attrs_and_remainder(attrs_string)
        if strict and remainder:
            return remainder
        for key, value in attrs:
            # Test the real resulting name too; never rely on our own decoding
            # to guess how native XML-name sanitization will transform it.
            validate_attribute(key, value)
            validate_attribute("." if key == "." else self.sanitize_name(key), value)
        return super().assign_attrs(elem, attrs_string, strict=strict)


class SafeSuperFencesBlockPreprocessor(SuperFencesBlockPreprocessor):
    def handle_attrs(self, match):
        attrs, _ = get_attrs_and_remainder(match.group("attrs").replace("\t", " " * self.tab_len))
        for key, value in attrs:
            validate_attribute(key, value, fenced=True)
        return super().handle_attrs(match)


class _StyleCollector(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.styles = Counter()

    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key == "style":
                self.styles[(tag, value)] += 1

    handle_startendtag = handle_starttag


class _SourceStyles(Preprocessor):
    def run(self, lines):
        parser = _StyleCollector()
        parser.feed("\n".join(lines))
        self.md.tssr_raw_styles = parser.styles
        return lines


class _RenderedAttributes(HTMLParser):
    def __init__(self, raw_styles):
        super().__init__(convert_charrefs=True)
        self.raw_styles = Counter(raw_styles)

    def handle_starttag(self, tag, attrs):
        for key, value in attrs:
            if key.startswith("on") or key in {"srcdoc", "ping", "contenteditable", "autofocus", "formaction"}:
                raise MarkdownSecurityError("Attribut HTML actif dans le rendu Markdown.")
            if key == "style":
                # The native tables extension emits these exact alignment
                # declarations for | :--- | ---: | :---: | syntax.
                if tag in {"th", "td"} and value in {"text-align: left;", "text-align: right;", "text-align: center;"}:
                    continue
                # Legacy raw-HTML styles remain source-owned. The proposal
                # transition validator requires those tags byte-identical to
                # trusted Git source; attribute-list styles NEVER reach here.
                signature = (tag, value)
                if self.raw_styles[signature] < 1:
                    raise MarkdownSecurityError("Style ajouté par le rendu Markdown.")
                self.raw_styles[signature] -= 1
            if key in {"href", "src", "xlink:href", "action", "poster", "background"}:
                probe = re.sub(r"[\x00-\x20\x7f]+", "", unescape(value or ""))
                if re.match(r"(?:javascript|vbscript|data):", probe, re.I):
                    raise MarkdownSecurityError("URL active dans le rendu Markdown.")

    handle_startendtag = handle_starttag


class _RenderedSecurity(Postprocessor):
    def run(self, text):
        parser = _RenderedAttributes(getattr(self.md, "tssr_raw_styles", {}))
        parser.feed(text)
        parser.close()
        return text


class MarkdownSecurityExtension(Extension):
    def extendMarkdown(self, md):
        if "attr_list" not in md.treeprocessors:
            raise MarkdownSecurityError("Le garde-fou nécessite le processeur attr_list natif.")
        md.treeprocessors.register(SafeAttrListTreeprocessor(md), "attr_list", 8)
        if "fenced_code_block" in md.preprocessors:
            original = md.preprocessors["fenced_code_block"]
            if isinstance(original, SuperFencesBlockPreprocessor):
                checked = SafeSuperFencesBlockPreprocessor(md)
                checked.config = original.config
                checked.extension = original.extension
                # The default formatter is bound to its preprocessor instance.
                if checked.extension.superfences[0]["name"] == "superfences":
                    checked.extension.superfences[0]["formatter"] = checked.highlight
                md.preprocessors.register(checked, "fenced_code_block", 25)
        md.preprocessors.register(_SourceStyles(md), "tssr_source_styles", 35)
        md.postprocessors.register(_RenderedSecurity(md), "tssr_rendered_security", -100)
        md.registerExtension(self)
