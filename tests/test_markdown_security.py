"""Native renderer regressions: run python -m unittest discover -s tests -p 'test_*.py'."""

import json
from pathlib import Path
import sys
import unittest
import tempfile

import markdown
from mkdocs.config import load_config

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
from markdown_security import MarkdownSecurityError, MarkdownSecurityExtension  # noqa: E402
from mkdocs_hooks import on_config  # noqa: E402


def discover_pages(directory):
    return sorted(directory.rglob("*.md"))


class MarkdownSecurityTests(unittest.TestCase):
    def renderer(self, secure=True):
        config = load_config(str(ROOT / "mkdocs.yml"))
        if secure:
            on_config(config)
        return markdown.Markdown(extensions=config.markdown_extensions, extension_configs=config.mdx_configs)

    def test_shared_attribute_fixtures(self):
        fixtures = json.loads((ROOT / "tests/fixtures/markdown-attributes.json").read_text())
        for fixture in fixtures:
            with self.subTest(fixture["name"]):
                if fixture["allowed"]:
                    self.renderer().convert(fixture["markdown"])
                else:
                    with self.assertRaises(MarkdownSecurityError):
                        self.renderer().convert(fixture["markdown"])

    def test_original_attack_really_reaches_native_attribute_assignment(self):
        source = '![image](image.png){onerror="void(0)"}'
        self.assertIn('onerror="void(0)"', self.renderer(secure=False).convert(source))
        with self.assertRaises(MarkdownSecurityError):
            self.renderer().convert(source)

    def test_rendered_html_checks_raw_attributes_and_encoded_urls(self):
        for source in ['<img src="x" onerror="void(0)">', '<a href="java&#x09;script&#58;void(0)">x</a>', '<div contenteditable>x</div>']:
            with self.subTest(source), self.assertRaises(MarkdownSecurityError):
                self.renderer().convert(source)

    def test_native_table_alignment_and_raw_legacy_styles_are_preserved(self):
        source = '<div style="--steps:5">Avant</div>\n\n| A |\n| ---: |\n| B |'
        self.assertEqual(self.renderer().convert(source), self.renderer(secure=False).convert(source))

    def test_every_existing_page_has_byte_identical_native_output(self):
        files = discover_pages(ROOT / "docs")
        self.assertTrue(files, "docs must contain Markdown pages")
        plain, secure = self.renderer(secure=False), self.renderer()
        for path in files:
            source = path.read_text(encoding="utf-8")
            with self.subTest(str(path.relative_to(ROOT))):
                self.assertEqual(secure.reset().convert(source), plain.reset().convert(source))

    def test_discovery_includes_new_nested_page(self):
        with tempfile.TemporaryDirectory(prefix="tssr-page-discovery-") as directory:
            root = Path(directory)
            (root / "index.md").write_text("# Accueil", encoding="utf-8")
            initial = discover_pages(root)
            (root / "modules").mkdir()
            added = root / "modules/new.md"
            added.write_text("# Nouveau module", encoding="utf-8")
            (root / "ignored.txt").write_text("Ressource", encoding="utf-8")
            self.assertEqual(discover_pages(root), sorted([*initial, added]))
            for page in discover_pages(root):
                self.renderer().convert(page.read_text(encoding="utf-8"))


if __name__ == "__main__":
    unittest.main()
