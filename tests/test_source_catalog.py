import importlib.util
import hashlib
from html import unescape
import markdown
from html.parser import HTMLParser
from types import SimpleNamespace
from mkdocs.config import load_config
import json
import sys
import tempfile
import unittest
from pathlib import Path
from urllib.parse import urljoin

ROOT=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(ROOT/'scripts'))
from source_catalog import asset_url, load_catalog, project_page, mark_ai_diagrams, rewrite_source_links, LiteralSourceHTML


def transcription_fixture(root):
    asset=root/'docs/assets/course-sources/a'
    asset.mkdir(parents=True)
    html='<!-- SOURCE-CONTENT:START --><section class="tssr-transcribed-page" id="page-1"><h3>Page 1</h3><p>Texte original.</p></section><!-- SOURCE-CONTENT:END -->'
    (asset/'texte.html').write_text(html,encoding='utf8')
    return dict(id='source',role='support',title='Original.pdf',sha256='a'*64,
                transcript='assets/course-sources/a/texte.html',
                legacyOriginal='assets/course-sources/a/original.pdf',
                transcriptionSha256=hashlib.sha256(html.encode()).hexdigest(),
                figures=[],pageCount=1,pages=[dict(number=1,nativeCoverage=True)])


class OriginalSourcesTests(unittest.TestCase):
    def test_source_reader_rejects_unreviewed_page_reproductions(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory);(root/'data').mkdir();doc=transcription_fixture(root)
            image=root/'docs/assets/course-sources/a/slide.png';image.write_bytes(b'example')
            doc['figures']=[dict(path='assets/course-sources/a/slide.png',sha256=hashlib.sha256(b'example').hexdigest())]
            (root/'data/course-sources.json').write_text(json.dumps(dict(schemaVersion=2,documents={'source':doc},pages={})),encoding='utf8')
            with self.assertRaisesRegex(ValueError,'Reproduction de page interdite'):load_catalog(root)

    def test_configured_image_plugin_keeps_inline_source_symbols(self):
        config=load_config(str(ROOT/'mkdocs.yml'))
        plugin=config.plugins['glightbox']
        plugin.on_config(config)
        html='<p><img class="tssr-source-glyph" data-source-codepoint="f071" src="symbol.webp" alt="Symbole">Consigne</p>'
        result=plugin.on_page_content(html,SimpleNamespace(meta={}),config)
        self.assertIn('<img ',result)
        self.assertIn('data-source-codepoint="f071"',result)
        self.assertIn('Consigne',result)

    def test_source_code_and_numbering_survive_markdown_build(self):
        literal='1. Étape\n2. Suite\n__nom__ *valeur*\nGet-ADUser -Filter {Name -eq "A_B"}\n$x &lt; 10'
        protected=LiteralSourceHTML();protected.feed('<pre>'+literal+'</pre>')
        rendered=markdown.markdown(''.join(protected.parts),extensions=['pymdownx.superfences'])
        class Text(HTMLParser):
            def __init__(self):super().__init__();self.values=[]
            def handle_data(self,data):self.values.append(data)
        text=Text();text.feed(rendered)
        self.assertEqual(''.join(text.values),unescape(literal))

    def test_prepared_sources_activate_only_for_each_published_page(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory)
            (root/'data').mkdir()
            doc=transcription_fixture(root)
            course='modules/course/module-01.md'
            tp='tp/course/module-01/index.md'
            for page in [course,tp]:
                target=root/'docs'/page
                target.parent.mkdir(parents=True,exist_ok=True)
                target.write_text('# Titre\n\nContenu pédagogique à venir via proposition gouvernée.\n',encoding='utf8')
            (root/'data/course-sources.json').write_text(json.dumps(dict(schemaVersion=2,documents={},pages={})),encoding='utf8')
            (root/'data/staged-course-sources.json').write_text(json.dumps(dict(schemaVersion=2,documents={'source':doc},pages={course:['source'],tp:['source']})),encoding='utf8')
            self.assertEqual(load_catalog(root)['pages'],{})
            # Approval of the course never implicitly activates the TP.
            (root/'docs'/course).write_text('# Titre\n\nContenu publié.\n',encoding='utf8')
            data=load_catalog(root)
            self.assertEqual(data['pages'],{course:['source']})
            rendered=project_page('# Titre\n\nContenu publié.\n',course,data)
            self.assertIn('Texte original.',unescape(rendered))
            self.assertIn('id="source-source-page-1"',rendered)
            self.assertNotIn('original.pdf',rendered)
            self.assertNotIn('Texte accessible',rendered)
            (root/'docs'/tp).write_text('# TP\n\nAtelier publié.\n',encoding='utf8')
            self.assertEqual(set(load_catalog(root)['pages']),{course,tp})

    def test_raw_html_asset_urls_resolve_at_module_and_index_depths(self):
        for page,url in [('modules/course/module-01.md','/modules/course/module-01/'),
                         ('tp/course/module-01/index.md','/tp/course/module-01/')]:
            target='assets/course-sources/abcdef/texte.html'
            self.assertEqual(urljoin(url,asset_url(target,page)),'/'+target)

    def test_catalog_rejects_missing_transcription_without_silently_dropping_it(self):
        with tempfile.TemporaryDirectory() as d:
            root=Path(d);(root/'data').mkdir()
            doc=transcription_fixture(root)
            (root/'docs'/doc['transcript']).unlink()
            (root/'data/course-sources.json').write_text(json.dumps(dict(schemaVersion=2,documents={'source':doc},pages={})),encoding='utf8')
            with self.assertRaisesRegex(ValueError,'absent'):load_catalog(root)

    def test_transcription_cannot_silently_lose_a_page_or_change_text(self):
        with tempfile.TemporaryDirectory() as directory:
            root=Path(directory);(root/'data').mkdir()
            doc=transcription_fixture(root)
            catalog=root/'data/course-sources.json'
            doc['pageCount']=2
            doc['pages'].append(dict(number=2,nativeCoverage=True))
            catalog.write_text(json.dumps(dict(schemaVersion=2,documents={'source':doc},pages={})),encoding='utf8')
            with self.assertRaisesRegex(ValueError,'toutes les pages'):load_catalog(root)
            doc['pageCount']=1;doc['pages']=doc['pages'][:1]
            catalog.write_text(json.dumps(dict(schemaVersion=2,documents={'source':doc},pages={})),encoding='utf8')
            with (root/'docs'/doc['transcript']).open('a',encoding='utf8') as f:f.write('Texte ajouté')
            with self.assertRaisesRegex(ValueError,'altérée'):load_catalog(root)

    def test_legacy_pdf_links_resolve_to_text_without_changing_vendor_manuals(self):
        data={'documents':{'source':dict(transcript='assets/course-sources/a/texte.html',legacyOriginal='assets/course-sources/a/original.pdf')}}
        value='[Drive](https://drive.google.com/file/d/source/view) [PDF](../../assets/course-sources/a/original.pdf) [Aruba](../../assets/resources/glpi/manuel-aruba-24-ports.pdf)'
        result=rewrite_source_links(value,'modules/course/module-01.md',data)
        self.assertEqual(result.count('../../assets/course-sources/a/texte.html'),2)
        self.assertIn('manuel-aruba-24-ports.pdf',result)
        self.assertNotIn('/file/d/source/',result)

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

    def test_actual_catalog_preserves_every_transcribed_page_without_hosting_eni_pdfs(self):
        data=load_catalog()
        self.assertTrue(data['documents'])
        self.assertTrue(data['pages'])
        for doc in data['documents'].values():
            covered=[p['number'] for p in doc['pages']]
            self.assertEqual(covered,list(range(1,(doc['pageCount'] or 1)+1)))
        self.assertFalse(list((ROOT/'docs/assets/course-sources').rglob('*.pdf')))
        self.assertFalse(list((ROOT/'docs/assets/course-sources').rglob('atlas-*.webp')))

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
