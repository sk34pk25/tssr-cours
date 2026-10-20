import importlib.util
import json
import sys
import tempfile
import unittest
from pathlib import Path
from urllib.parse import urljoin

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'))
from source_catalog import asset_url, load_catalog, project_page, mark_ai_diagrams


class OriginalSourcesTests(unittest.TestCase):
    def test_raw_html_asset_urls_resolve_at_module_and_index_depths(self):
        for page,url in [('modules/course/module-01.md','/modules/course/module-01/'),
                         ('tp/course/module-01/index.md','/tp/course/module-01/')]:
            target='assets/course-sources/abcdef/original.pdf'
            self.assertEqual(urljoin(url,asset_url(target,page)),'/'+target)

    def test_catalog_rejects_missing_original_without_silently_dropping_it(self):
        with tempfile.TemporaryDirectory() as d:
            root=Path(d);(root/'data').mkdir()
            doc=dict(id='original',role='support',sha256='a'*64,original='assets/course-sources/a/original.pdf',transcript='assets/course-sources/a/texte.html',strips=[],pageCount=0)
            (root/'data/course-sources.json').write_text(json.dumps(dict(schemaVersion=1,documents={'original':doc},pages={})),encoding='utf8')
            with self.assertRaisesRegex(ValueError,'absent'):load_catalog(root)

    def test_source_and_ai_help_are_in_separate_labelled_tabs(self):
        page='modules/course/module-01.md'
        data=dict(documents={},pages={page:[]})
        text=project_page('# Titre\n\n## Texte\n\nContenu validé.\n',page,data)
        self.assertIn('=== "Support original du Drive"',text)
        self.assertIn('=== "Aide pédagogique — IA / externe"',text)
        self.assertIn('Complément IA / externe au cours',text)
        self.assertIn('Contenu validé.',text)

    def test_diagrams_in_help_receive_an_explicit_ai_label(self):
        text=mark_ai_diagrams('```mermaid\ngraph LR\nA-->B\n```')
        self.assertIn('Illustration IA / externe au cours',text)
        self.assertIn('```mermaid',text)

    def test_untargeted_content_is_preserved(self):
        value='# Titre\n\nTexte initial.'
        self.assertEqual(project_page(value,'modules/other/module-01.md',{'pages':{}}),value)

    def test_actual_catalog_preserves_every_original_file_and_page(self):
        data=load_catalog()
        self.assertTrue(data['documents'])
        self.assertTrue(data['pages'])
        for doc in data['documents'].values():
            covered=[n for s in doc['strips'] for n in range(s['first'],s['last']+1)]
            self.assertEqual(covered,list(range(1,doc['pageCount']+1)))

    def test_available_tp_is_not_incorrectly_reported_as_missing(self):
        data=load_catalog()
        for page in data['pages']:
            self.assertNotIn('Aucun document original correspondant',data.get('pageNotices',{}).get(page,''),page)

    def test_misfiled_linux_tp_follows_its_internal_module_title(self):
        data=load_catalog()
        page='modules/04-utilisation-gnu-linux/module-06-recherches-et-expressions-regulieres.md'
        for identity in ['1UxNuienstNgVxtr1UyNDEU4GdedUSzJP','1xGFJoYQKMrxSvb9Ksus3MoEavJ-d_aDa']:
            self.assertIn(identity,data['pages'][page])
            self.assertIn('TP du Module 06',data['documents'][identity]['sourceNotice'])

if __name__=='__main__':unittest.main()
