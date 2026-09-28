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
        self.item = dict(schemaVersion=1, courseId="modules/test/index.md", moduleId="modules/test/module.md", title="Quiz <test>", questionCount=1, url="https://create.kahoot.it/share/test/123", soloAvailable=True, liveAvailable=True, provenance="A", state="linked", questions=[])

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
        self.save({**self.item, "url": None, "state": "prepared"})
        with self.assertRaises(ValueError):
            catalog(self.root)

    def test_reciprocal_links_and_auth_default(self):
        self.save()
        item = catalog(self.root)[0]
        self.assertIn('href="../../../kahoot/test/"', card(item, item["moduleId"]))
        self.assertIn('href="../../modules/test/module/"', card(item, item["path"]))
        self.assertIn('hidden>Lancer une session de groupe', render_library([item]))
        self.assertIn('Jouer en solo', render_library([item]))
        self.assertIn('&lt;test&gt;', render_library([item]))
        self.assertNotIn('<iframe', render_library([item]))
        self.assertIn('Ouvrir la fiche officielle Kahoot', render_library([item]))
        rendered = markdown.Markdown(extensions=['attr_list', MarkdownSecurityExtension()]).convert(render_library([item]))
        self.assertIn('data-kahoot-live=', rendered)
        self.assertIn('hidden', rendered)

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
        (self.root / "docs/kahoot/old.md").write_text("# Historique\n[Jouer](https://create.kahoot.it/share/ancien-titre/123)\n", encoding="utf-8")
        with self.assertRaises(ValueError):
            catalog(self.root)
