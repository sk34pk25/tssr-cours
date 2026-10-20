"""Project verified Drive originals beside explicitly labelled portal study aids."""
from __future__ import annotations
import hashlib
import json
import posixpath
import re
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / 'data/course-sources.json'
ROLES = {'support': 'Support', 'notes': 'Notes du Drive', 'synthese-drive': 'Synthèse du Drive',
         'enonce': 'Énoncé', 'correction': 'Correction', 'demonstration': 'Démonstration'}


def load_catalog(root=ROOT):
    path = root / 'data/course-sources.json'
    if not path.exists():
        return {'schemaVersion': 1, 'documents': {}, 'pages': {}}
    data = json.loads(path.read_text(encoding='utf-8'))
    if data.get('schemaVersion') != 1 or not isinstance(data.get('documents'), dict) or not isinstance(data.get('pages'), dict):
        raise ValueError('Catalogue des supports originaux invalide')
    for identity, doc in data['documents'].items():
        if identity != doc['id'] or not re.fullmatch(r'[a-zA-Z0-9_-]+', identity):
            raise ValueError('Identité source invalide')
        if doc['role'] not in ROLES or not re.fullmatch(r'[a-f0-9]{64}', doc['sha256']):
            raise ValueError('Provenance source invalide')
        for asset in [doc['original'], doc['transcript'], *[s['path'] for s in doc['strips']]]:
            target = (root / 'docs' / asset).resolve()
            if not asset.startswith('assets/course-sources/') or not target.is_relative_to((root / 'docs/assets/course-sources').resolve()) or not target.is_file():
                raise ValueError(f'Fichier source absent : {asset}')
        if hashlib.sha256((root / 'docs' / doc['original']).read_bytes()).hexdigest() != doc['sha256']:
            raise ValueError('Le fichier publié diffère de la source Drive')
        for strip in doc['strips']:
            if hashlib.sha256((root / 'docs' / strip['path']).read_bytes()).hexdigest() != strip['sha256']:
                raise ValueError('Une capture du support a été altérée')
        pages = [n for strip in doc['strips'] for n in range(strip['first'], strip['last'] + 1)]
        if pages != list(range(1, doc['pageCount'] + 1)):
            raise ValueError('Une page originale manque ou est dupliquée')
    for page, refs in data['pages'].items():
        if not re.fullmatch(r'(?:modules|tp)/[a-z0-9_/-]+\.md', page) or not (root / 'docs' / page).is_file():
            raise ValueError('Page associée au support invalide')
        if not refs or len(refs) != len(set(refs)) or any(ref not in data['documents'] for ref in refs):
            raise ValueError('Association aux sources invalide')
        if page.startswith('modules/') and 'Contenu pédagogique à venir via proposition gouvernée.' in (root / 'docs' / page).read_text(encoding='utf-8'):
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
    return data


def asset_url(asset, page):
    # These are raw HTML URLs, resolved by the browser from the output directory.
    directory = page[:-8] if page.endswith('/index.md') else page[:-3]
    return posixpath.relpath(asset, directory)


def render_originals(refs, page, data):
    out = ['<div class="tssr-original-reader">',
           '<p class="tssr-origin-badge">SOURCE DRIVE · DOCUMENT ORIGINAL</p>',
           '<p>Les pages ci-dessous reproduisent les documents du dossier TSSR, dans leur ordre original, '
           'avec leurs schémas, captures et exemples. Les liens donnent aussi accès au fichier complet. '
           'Les versions et les consignes sont celles du support de formation.</p>']
    for i, ref in enumerate(refs):
        d = data['documents'][ref]
        name, role = escape(d['title']), ROLES[d['role']]
        original, transcript = (escape(asset_url(d[key], page), quote=True) for key in ['original', 'transcript'])
        is_correction = d['role'] == 'correction'
        extent = f'{d["pageCount"]} pages' if d['pageCount'] else 'document texte'
        out += [f'<details class="tssr-original-document"{ " open" if i == 0 and not is_correction else ""}>',
                f'<summary>{role} · {name} · {extent}</summary>',
                '<div class="tssr-original-document__body">',
                f'<p class="tssr-original-links"><a href="{original}" target="_blank" rel="noopener noreferrer">Ouvrir le document intégral</a> '
                f'<a href="{transcript}" target="_blank" rel="noopener noreferrer">Texte accessible</a> '
                f'<a href="https://drive.google.com/file/d/{escape(ref, quote=True)}/view" target="_blank" rel="noopener noreferrer">Source dans le Drive</a></p>']
        if d.get('sourceNotice'):
            out.append(f'<p class="tssr-original-note">{escape(d["sourceNotice"])}</p>')
        if is_correction:
            out.append('<p class="tssr-original-note">Correction originale : à consulter après avoir tenté l’exercice.</p>')
        if d.get('inlineText'):
            out.append('<div class="tssr-original-text"><pre>' + escape(d['inlineText']) + '</pre></div>')
        for strip in d['strips']:
            image = escape(asset_url(strip['path'], page), quote=True)
            interval = str(strip['first']) if strip['first'] == strip['last'] else f'{strip["first"]} à {strip["last"]}'
            caption = f'Source Drive — {d["title"]} — pages {interval}. Capture du document original, sans génération IA.'
            out.append(f'<figure class="tssr-original-figure"><a href="{image}" target="_blank" rel="noopener noreferrer">'
                       f'<img src="{image}" alt="{escape(caption, quote=True)}" loading="lazy" width="{strip["width"]}" height="{strip["height"]}"></a>'
                       f'<figcaption>{escape(caption)}</figcaption></figure>')
        out += [f'<p class="tssr-original-proof">Référence du document : {escape(ref)} · '
                f'<span title="Empreinte SHA-256 du fichier source">SHA-256 {d["sha256"][:16]}…</span></p>', '</div>', '</details>']
    out.append('</div>')
    return '\n'.join(out)


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
                banner = ('\n\n!!! info "Aide IA / externe au cours — provenance"\n'
                          '    ' + notice + '\n\n')
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
             'Elle est distincte des documents originaux du Drive et ne les remplace pas. '
             'Les schémas de synthèse de cette fiche sont des illustrations IA / externes au cours, '
             'sauf les captures explicitement attribuées à un document source.\n\n' + mark_ai_diagrams(body))
    def indent(value):
        return '\n'.join('    ' + line if line else '' for line in value.splitlines())
    return (title + '\n\n'
            'Le document original et l’aide pédagogique sont séparés pour rendre leur provenance explicite.\n\n'
            '=== "Support original du Drive"\n\n' + indent(original) + '\n\n'
            '=== "Aide pédagogique — IA / externe"\n\n' + indent(guide) + '\n')


def label_auxiliary(markdown, page):
    """Keep study aids from being mistaken for original course documents."""
    if not page.startswith(('revision/', 'memo/', 'commandes/', 'exercices/',
                            'tutoriels/', 'troubleshooting/', 'glossaire/')):
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
