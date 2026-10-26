"""Project verified Drive transcriptions beside explicitly labelled study aids."""
from __future__ import annotations
import hashlib
import json
import posixpath
import re
from html import escape
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data/course-sources.json'
ROLES = {'support': 'Support', 'notes': 'Notes du Drive', 'synthese-drive': 'Synthèse du Drive',
         'enonce': 'Énoncé', 'correction': 'Correction', 'demonstration': 'Démonstration'}
PENDING_CONTENT = 'Contenu pédagogique à venir via proposition gouvernée.'


def load_catalog(root=ROOT, *, staged=False):
    path = root / ('data/staged-course-sources.json' if staged else 'data/course-sources.json')
    if not path.exists():
        return {'schemaVersion': 2, 'documents': {}, 'pages': {}}
    data = json.loads(path.read_text(encoding='utf-8'))
    if data.get('schemaVersion') != 2 or not isinstance(data.get('documents'), dict) or not isinstance(data.get('pages'), dict):
        raise ValueError('Catalogue des supports originaux invalide')
    for identity, doc in data['documents'].items():
        if identity != doc['id'] or not re.fullmatch(r'[a-zA-Z0-9_-]+', identity):
            raise ValueError('Identité source invalide')
        if doc['role'] not in ROLES or not re.fullmatch(r'[a-f0-9]{64}', doc['sha256']):
            raise ValueError('Provenance source invalide')
        if not re.fullmatch(r'[a-f0-9]{64}', doc['transcriptionSha256']):
            raise ValueError('Empreinte de transcription invalide')
        images = [*doc['figures'], *doc.get('glyphs', [])]
        for figure in doc['figures']:
            crop, size = figure.get('sourceCrop', []), figure.get('sourcePageSize', [])
            if (figure.get('reviewedIsolation') is not True or figure.get('kind') not in {'croquis', 'illustration', 'capture-ui'}
                    or not figure['path'].startswith('assets/course-sources/isolated/')
                    or len(crop) != 4 or len(size) != 2
                    or not (0 <= crop[0] < crop[2] <= size[0] and 0 <= crop[1] < crop[3] <= size[1])
                    or (crop[2]-crop[0])*(crop[3]-crop[1]) > .35*size[0]*size[1]):
                raise ValueError('Reproduction de page interdite : seul un visuel isolé vérifié est admis')
        for asset in [doc['transcript'], *[s['path'] for s in images]]:
            target = (root / 'docs' / asset).resolve()
            if not asset.startswith('assets/course-sources/') or Path(asset).suffix not in {'.html', '.webp', '.png'} or not target.is_relative_to((root / 'docs/assets/course-sources').resolve()) or not target.is_file():
                raise ValueError(f'Fichier source absent : {asset}')
        transcript = root / 'docs' / doc['transcript']
        if hashlib.sha256(transcript.read_bytes()).hexdigest() != doc['transcriptionSha256']:
            raise ValueError('La transcription publiée a été altérée')
        for figure in images:
            if hashlib.sha256((root / 'docs' / figure['path']).read_bytes()).hexdigest() != figure['sha256']:
                raise ValueError('Une illustration du support a été altérée')
        illustrations = [i['index'] for figure in doc['figures'] for i in figure.get('sourceIllustrations', [])]
        if illustrations != list(range(doc.get('illustrationCount', 0))):
            raise ValueError('Une illustration source manque ou est dupliquée')
        expected = list(range(1, (doc['pageCount'] or 1) + 1))
        if [p['number'] for p in doc['pages']] != expected:
            raise ValueError('Une page transcrite manque ou est dupliquée')
        html = transcript.read_text(encoding='utf8')
        doc['_contentHtml'] = html
        if [int(n) for n in re.findall(r'<section class="tssr-transcribed-page" id="page-(\d+)">', html)] != expected:
            raise ValueError('La transcription HTML ne couvre pas toutes les pages')
        if any(not p.get('nativeCoverage', True) for p in doc['pages']):
            raise ValueError('Couverture du texte source incomplète')
    for page, refs in data['pages'].items():
        if not re.fullmatch(r'(?:modules|tp)/[a-z0-9_/-]+\.md', page) or not (root / 'docs' / page).is_file():
            raise ValueError('Page associée au support invalide')
        if not refs or len(refs) != len(set(refs)) or any(ref not in data['documents'] for ref in refs):
            raise ValueError('Association aux sources invalide')
        if not staged and page.startswith('modules/') and PENDING_CONTENT in (root / 'docs' / page).read_text(encoding='utf-8'):
            raise ValueError('Un module non publié ne peut pas recevoir ces sources')
    proof = data.get('verification')
    if proof:
        actual = {'modules': sum(p.startswith('modules/') for p in data['pages']),
                  'documents': len(data['documents']),
                  'originalPages': sum(d['pageCount'] for d in data['documents'].values())}
        if any(proof.get(key) != count for key, count in actual.items()):
            raise ValueError('Le périmètre publié diffère du relevé de vérification')
        if {ref for refs in data['pages'].values() for ref in refs} != set(data['documents']):
            raise ValueError('Un document original ne possède plus de page de consultation')
    if not staged:
        prepared = load_catalog(root, staged=True)
        for page, refs in prepared['pages'].items():
            if PENDING_CONTENT in (root / 'docs' / page).read_text(encoding='utf-8'):
                continue
            if page in data['pages']:
                raise ValueError('Association publiée et préparée en doublon')
            data['pages'][page] = refs
            for ref in refs:
                doc = prepared['documents'][ref]
                if ref in data['documents'] and data['documents'][ref] != doc:
                    raise ValueError('Source préparée en conflit avec le catalogue publié')
                data['documents'][ref] = doc
            notice = prepared.get('pageNotices', {}).get(page)
            if notice:
                data.setdefault('pageNotices', {})[page] = notice
    return data


def asset_url(asset, page):
    directory = page[:-8] if page.endswith('/index.md') else page[:-3]
    return posixpath.relpath(asset, directory)


class LiteralSourceHTML(HTMLParser):
    """Protect literal source text from Markdown lists, emphasis and operators."""
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.parts = []

    def handle_starttag(self, tag, attrs):
        self.parts.append(self.get_starttag_text())

    def handle_startendtag(self, tag, attrs):
        self.parts.append(self.get_starttag_text())

    def handle_endtag(self, tag):
        self.parts.append(f'</{tag}>')

    def handle_data(self, value):
        self.parts.append(''.join(c if c.isalnum() or c == ' ' else f'&#{ord(c)};' for c in value))


def render_originals(refs, page, data):
    out = ['<div class="tssr-original-reader">',
           '<p class="tssr-origin-badge">SOURCE DRIVE · TRANSCRIPTION DU SUPPORT</p>',
           '<p>Le contenu des documents du dossier TSSR est transcrit ci-dessous, page par page. '
           'Les textes et tableaux sont intégrés à la page Web. Aucun PDF ENI, diapositive ou reproduction de page n’est affiché. '
           'Seuls des croquis ou visuels isolés et vérifiés peuvent accompagner la transcription. '
           'Les versions et les consignes restent celles des supports de formation. '
           'Les compléments IA sont conservés dans leur onglet distinct.</p>']
    for i, ref in enumerate(refs):
        d = data['documents'][ref]
        name, role = escape(d['title'].removesuffix('.pdf')), ROLES[d['role']]
        extent = f'{d["pageCount"]} pages transcrites' if d['pageCount'] else 'document texte'
        out += [f'<details class="tssr-original-document"{" open" if i == 0 and d["role"] != "correction" else ""}>',
                f'<summary>{role} · {name} · {extent}</summary>',
                '<div class="tssr-original-document__body">']
        if d.get('sourceNotice'):
            out.append(f'<p class="tssr-original-note">{escape(d["sourceNotice"])}</p>')
        if d['role'] == 'correction':
            out.append('<p class="tssr-original-note">Correction originale : à consulter après avoir tenté l’exercice.</p>')
        html = d.get('_contentHtml') or (ROOT / 'docs' / d['transcript']).read_text(encoding='utf8')
        start, end = '<!-- SOURCE-CONTENT:START -->', '<!-- SOURCE-CONTENT:END -->'
        if html.count(start) != 1 or html.count(end) != 1:
            raise ValueError('Corps de transcription invalide')
        literal = LiteralSourceHTML()
        literal.feed(html.split(start, 1)[1].split(end, 1)[0])
        html = ''.join(literal.parts)
        html = re.sub(r'id="page-(\d+)"', lambda m: f'id="source-{ref}-page-{m[1]}"', html)
        def local_link(match):
            attr, url = match[1], match[2]
            if url.startswith('#page-'):
                url = '#source-' + ref + '-' + url[1:]
            elif not urlsplit(url).scheme and not url.startswith(('/', '#')):
                target = posixpath.normpath(posixpath.join(posixpath.dirname(d['transcript']), url))
                url = asset_url(target, page)
            return attr + '="' + escape(url, quote=True) + '"'
        html = re.sub(r'(href|src)="([^"]+)"', local_link, html)
        out.append(html)
        out += [f'<p class="tssr-original-proof">Référence du document : {escape(ref)} · '
                f'<span title="Empreinte SHA-256 du fichier source">SHA-256 {d["sha256"][:16]}…</span></p>', '</div>', '</details>']
    out.append('</div>')
    return '\n'.join(out)


def rewrite_source_links(markdown, page, data):
    documents = data['documents']
    old = {d.get('legacyOriginal'): d for d in documents.values() if d.get('legacyOriginal')}
    def replace(match):
        prefix, url = match[1], match[2]
        parsed = urlsplit(url)
        target = None
        if parsed.hostname in {'drive.google.com', 'docs.google.com'}:
            identity = re.search(r'/d/([\w-]+)', parsed.path)
            if identity and identity[1] in documents:
                target = documents[identity[1]]
        elif not parsed.scheme and not parsed.netloc:
            path = posixpath.normpath(posixpath.join(posixpath.dirname(page), unquote(parsed.path)))
            target = old.get(path)
        if target is None:
            return match[0]
        dest = (posixpath.relpath(target['transcript'], posixpath.dirname(page))
                if prefix.startswith(']') else asset_url(target['transcript'], page))
        return prefix + dest
    return re.sub(r'(\]\(\s*|(?:href|src)\s*=\s*["\'])([^"\'\s)]+)', replace, markdown)


def mark_ai_diagrams(markdown):
    pattern = r'(?m)(?P<label>^\*\*Illustration IA / externe[^\n]*\*\*\n\n)?^(?P<fence>```mermaid[ \t]*$)'
    def label(match):
        if match['label']:
            return match[0]
        return '**Illustration IA / externe au cours — schéma pédagogique de synthèse.**\n\n' + match['fence']
    result = re.sub(pattern, label, markdown)
    return result.replace('<div class="tssr-service-grid"',
                          '<p><strong>Illustration IA / externe au cours — tableau visuel de synthèse.</strong></p>\n<div class="tssr-service-grid"')


def project_page(markdown, page, data):
    if page not in data['pages']:
        notice = data.get('pageNotices', {}).get(page)
        if notice:
            match = re.match(r'^(# [^\n]+)\n', markdown)
            if match:
                banner = ('\n\n!!! info "Aide IA / externe au cours — provenance"\n    ' + notice + '\n\n')
                return match[0] + banner + mark_ai_diagrams(markdown[match.end():])
        return markdown
    match = re.match(r'^(# [^\n]+)\n', markdown)
    if not match:
        raise ValueError('Titre du module attendu avant la projection des sources')
    title, body = match[1], markdown[match.end():].lstrip()
    notice = data.get('pageNotices', {}).get(page)
    original = (f'<p class="tssr-original-note">{escape(notice)}</p>\n' if notice else '') + render_originals(data['pages'][page], page, data)
    guide = ('!!! info "Complément IA / externe au cours — fiche pédagogique du portail"\n'
             '    Cette fiche contient une reformulation et des aides d’apprentissage rédigées par IA. '
             'Elle est distincte de la transcription des documents du Drive et ne la remplace pas. '
             'Les schémas de synthèse de cette fiche sont des illustrations IA / externes au cours, '
             'sauf les captures explicitement attribuées à un document source.\n\n' + mark_ai_diagrams(body))
    def indent(value):
        return '\n'.join('    ' + line if line else '' for line in value.splitlines())
    return (title + '\n\nLa transcription du support Drive et l’aide pédagogique sont séparées pour rendre leur provenance explicite.\n\n'
            '=== "Support original du Drive"\n\n' + indent(original) + '\n\n'
            '=== "Aide pédagogique — IA / externe"\n\n' + indent(guide) + '\n')


def label_auxiliary(markdown, page):
    if not page.startswith(('revision/', 'memo/', 'commandes/', 'exercices/', 'tutoriels/', 'troubleshooting/', 'glossaire/')):
        return markdown
    match = re.match(r'^(# [^\n]+)\n', markdown)
    if not match:
        return markdown
    banner = ('\n\n!!! info "Complément IA / externe au cours"\n'
              '    Cette fiche du portail est une aide pédagogique de synthèse produite avec une IA. '
              'Ses explications et schémas sont distincts des documents originaux. '
              'Pour suivre les consignes exactes et retrouver les captures de formation, '
              'consultez l’onglet **Support original du Drive** du module correspondant.\n\n')
    return match[0] + banner + mark_ai_diagrams(markdown[match.end():])
