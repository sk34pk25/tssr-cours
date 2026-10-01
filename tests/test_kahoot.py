import json
from pathlib import Path
import sys
import tempfile
import unittest
import markdown
from urllib.parse import quote

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "scripts"))
from kahoot_catalog import catalog, card, render_library, href
from markdown_security import MarkdownSecurityExtension


class KahootTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.root = Path(self.tmp.name)
        for path in ["modules/test/index.md", "modules/test/module.md", "modules/test/other.md", "kahoot/bibliotheque.md"]:
            target = self.root / "docs" / path
            target.parent.mkdir(parents=True, exist_ok=True)
            target.write_text("# Test\n", encoding="utf-8")
        self.identity = "12345678-1234-1234-1234-123456789abc"
        self.item = dict(schemaVersion=1, courseId="modules/test/index.md", moduleId="modules/test/module.md", title="Quiz <test>", questionCount=1, url=f"https://create.kahoot.it/share/test/{self.identity}", soloAvailable=True, liveAvailable=True, provenance="A", state="linked", questions=[])

    def configure(self, patch=None):
        config = {"joinUrl": "https://kahoot.it/", "editorUrls": {"kahoot/test.md": f"https://create.kahoot.it/creator/{self.identity}"}}
        config.update(patch or {})
        (self.root / "data").mkdir(exist_ok=True)
        (self.root / "data/kahoot-actions.json").write_text(json.dumps(config), encoding="utf-8")

    def save(self, item=None, name="test"):
        (self.root / f"docs/kahoot/{name}.md").write_text("<!-- TSSR-KAHOOT-V1:" + quote(json.dumps(item or self.item), safe="") + " -->\n# Test\n", encoding="utf-8")

    def test_counts_and_no_empty(self):
        for count in [1, 20]:
            self.save({**self.item, "questionCount": count})
            self.assertEqual(catalog(self.root)[0]["questionCount"], count)
        for count in [0, 21, 30, 40, True]:
            self.save({**self.item, "questionCount": count})
            with self.assertRaises(ValueError):
                catalog(self.root)
        self.save({**self.item, "url": None, "soloAvailable": False, "liveAvailable": False, "state": "prepared"})
        with self.assertRaises(ValueError):
            catalog(self.root)

    def test_reciprocal_links_and_auth_default(self):
        self.save()
        self.configure()
        item = catalog(self.root)[0]
        self.assertIn('Rejoindre un groupe', render_library([item]))
        self.assertIn('Jouer en solo', render_library([item]))
        self.assertIn('&lt;test&gt;', render_library([item]))
        self.assertNotIn('<iframe', render_library([item]))
        self.assertNotIn('provenance', render_library([item]))
        rendered = markdown.Markdown(extensions=['attr_list', MarkdownSecurityExtension()]).convert(render_library([item]))
        self.assertIn('data-kahoot-host=', rendered)
        self.assertIn('hidden', rendered)

    def test_module_title_is_text_not_html(self):
        self.save()
        (self.root / "docs/modules/test/module.md").write_text("# <em>test</em>\n", encoding="utf-8")
        rendered = card(catalog(self.root)[0], "kahoot/test.md")
        self.assertIn('&lt;em&gt;test&lt;/em&gt;', rendered)
        self.assertNotIn('<em>test</em>', rendered)
        html = markdown.Markdown(extensions=['attr_list', MarkdownSecurityExtension()]).convert(rendered)
        self.assertIn('&lt;em&gt;test&lt;/em&gt;', html)
        self.assertNotIn('<em>test</em>', html)

    def test_build_projection_preserves_v1_source(self):
        self.save()
        self.configure()
        source = self.root / "docs/kahoot/test.md"
        before = source.read_bytes()
        item = catalog(self.root)[0]
        self.assertEqual(item["schemaVersion"], 1)
        self.assertEqual(item["url"], self.item["url"])
        self.assertEqual(item["joinUrl"], "https://kahoot.it/")
        self.assertEqual(item["editorUrl"], f"https://create.kahoot.it/creator/{self.identity}")
        self.assertEqual(source.read_bytes(), before)
        rendered = card(item, "kahoot/test.md")
        self.assertIn(f'href="{self.item["url"]}"', rendered)
        self.assertIn('href="https://kahoot.it/"', rendered)
        self.assertIn(f'data-kahoot-host="{item["editorUrl"]}" hidden', rendered)

    def test_invalid_or_duplicate_config_fields(self):
        self.save()
        self.configure()
        for text in ['[]', '{"joinUrl":"https://kahoot.it/","editorUrls":{},"editorUrls":{}}']:
            (self.root / "data/kahoot-actions.json").write_text(text, encoding="utf-8")
            with self.assertRaises(ValueError):
                catalog(self.root)

    def test_v1_without_config_preserves_official_host_link(self):
        self.save()
        self.assertIn(f'data-kahoot-host="{self.item["url"]}" hidden', card(catalog(self.root)[0], "kahoot/test.md"))

    def test_actions_configuration_fails_closed(self):
        self.save()
        bad = [
            {"joinUrl": "https://kahoot.it/?pin=123"},
            {"secret": "not-a-secret"},
            {"editorUrls": []},
            {"editorUrls": {"kahoot/missing.md": f"https://create.kahoot.it/creator/{self.identity}"}},
            {"editorUrls": {"kahoot/test.md": "https://example.org/creator/" + self.identity}},
            {"editorUrls": {"kahoot/test.md": "https://create.kahoot.it/creator/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa"}},
            {"editorUrls": {"kahoot/test.md": f"https://create.kahoot.it/creator/{self.identity}?token=no"}},
            {"editorUrls": {"kahoot/test.md": None}},
        ]
        for patch in bad:
            with self.subTest(patch=patch):
                self.configure(patch)
                with self.assertRaises(ValueError):
                    catalog(self.root)

    def test_actions_do_not_override_v1_availability(self):
        self.save({**self.item, "soloAvailable": False, "liveAvailable": False})
        self.configure()
        rendered = card(catalog(self.root)[0], "kahoot/test.md")
        self.assertIn('aria-disabled="true">Jouer en solo', rendered)
        self.assertNotIn('data-kahoot-host="https://', rendered)

    def test_v2_and_extra_metadata_are_rejected(self):
        for patch in [{"schemaVersion": 2}, {"editorUrl": "https://create.kahoot.it/creator/" + self.identity}]:
            self.save({**self.item, **patch})
            with self.assertRaises(ValueError):
                catalog(self.root)

    def test_no_duplicates_or_unknown_modules_or_pin(self):
        self.save()
        self.save(name="duplicate")
        with self.assertRaises(ValueError):
            catalog(self.root)
        self.save({**self.item, "moduleId": "modules/test/other.md"}, name="duplicate")
        with self.assertRaises(ValueError):
            catalog(self.root)  # same remote quiz ID, even with another module

    def test_urls_and_unknown_fields_fail_closed(self):
        for patch in [dict(url="https://kahoot.it/?pin=123"), dict(pin="123"), dict(moduleId="modules/test/missing.md"), dict(soloAvailable="true")]:
            self.save({**self.item, **patch})
            with self.assertRaises(ValueError):
                catalog(self.root)

    def test_legacy_and_no_quiz(self):
        self.assertEqual(catalog(self.root), [])
        (self.root / "docs/kahoot/old.md").write_text("# Historique\n", encoding="utf-8")
        item = catalog(self.root)[0]
        self.assertTrue(item["legacy"])
        self.assertNotIn("Jouer en solo", card(item, "kahoot/bibliotheque.md"))
        self.assertNotIn("Lancer une session", card(item, "kahoot/bibliotheque.md"))

    def test_duplicate_of_legacy_quiz_is_rejected(self):
        self.save()
        (self.root / "docs/kahoot/old.md").write_text(f"# Historique\n[Jouer](https://create.kahoot.it/share/ancien-titre/{self.identity})\n", encoding="utf-8")
        with self.assertRaises(ValueError):
            catalog(self.root)
