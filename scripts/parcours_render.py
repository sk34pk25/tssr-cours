"""Build-time HTML rendering; no writes to source documents and no network."""
from html import escape

from parcours_catalog import ROOT, catalog, load_msp, model

LABELS = {"COURSE": "Cours", "MSP": "MSP", "STAGE": "Stage", "INTERRUPTION": "Interruption", "EVALUATION": "Évaluation finale"}


def href(path):
    # Both generated libraries live one level beneath the site root.
    return "../" + (path[:-8] if path.endswith("index.md") else path[:-3] + "/")


def link(path, title):
    return f'<a href="{escape(href(path), quote=True)}">{escape(title)}</a>'


def render_parcours(root=ROOT):
    periods = model(root)
    parts = ["# Parcours TSSR", "", "Le planning ordonné par date de début. Plusieurs périodes peuvent renvoyer au même cours, sans dupliquer son contenu.", "", "Les états sont recalculés à la date du jour, fuseau Europe/Paris. Sans JavaScript, les dates restent consultables.", "", '<div class="tssr-timeline tssr-planning">']
    for index, p in enumerate(periods, 1):
        relation = p["mapping"]
        access = link(relation["path"], "Ouvrir le contenu") if relation["path"] else "Correspondance à confirmer" if relation["state"] == "MATCH_PROBABLE" else "Contenu non encore disponible" if relation["state"] in {"MISSING", "MSP"} else "Période sans cours associé"
        parts.append(f'''<article class="tssr-timeline__card" id="{p['id']}">
<span class="tssr-timeline__number">{index:02d}</span>
<div class="tssr-timeline__body">
<p class="tssr-timeline__date">{LABELS[p['kind']]} · <time datetime="{p['date_debut']}">{p['date_debut']}</time> → <time datetime="{p['date_fin']}">{p['date_fin']}</time></p>
<h2>{escape(p['cours'])}</h2>
<dl><div><dt>Formateur(s)</dt><dd>{escape(', '.join(p['formateurs']))}</dd></div><div><dt>Modalité / lieu</dt><dd>{escape(p['modalite_lieu'])}</dd></div></dl>
<p class="tssr-period-status" data-period-start="{p['date_debut']}" data-period-end="{p['date_fin']}">État calculé à l’ouverture avec JavaScript</p>
<p>{access}</p></div></article>''')
    parts.extend(['</div>', '', 'Les modalités sont reproduites telles que fournies, y compris pour les stages. Les intervalles non décrits ne sont pas complétés artificiellement.', '', '[Consulter les anciennes étapes éditoriales](../parcours/index.md).'])
    return "\n".join(parts)


def render_msp(root=ROOT):
    names = {c["path"]: c["title"] for c in catalog(root)}
    parts = ["# MSP — Mises en Situation Professionnelle", "", "Des activités transversales qui mobilisent plusieurs cours et compétences. Les supports historiques restent à leur emplacement ; aucune copie de cours n’est créée.", ""]
    for m in load_msp(root):
        parts.append(f'<section class="tssr-path-intro" id="{m["id"]}"><h2>{escape(m["title"])}</h2>')
        parts.append(f'<p>{link(m["path"], "Ouvrir la MSP") if m["path"] else "Support identifié dans la source ; intégration pédagogique à préparer et à valider."}</p>')
        if m["relations"]:
            parts.append('<h3>Cours mobilisés — preuves documentaires</h3><ul>')
            for r in m["relations"]:
                parts.append(f'<li>{link(r["coursePath"], names[r["coursePath"]])} — {escape(r["evidenceQuote"])} ({link(r["evidencePath"], "preuve")})</li>')
            parts.append('</ul>')
        else:
            parts.append('<p>Relations avec les cours et modules : à établir à partir des supports.</p>')
        if m["resources"]:
            parts.append('<h3>Ressources associées</h3><ul>')
            for path in m["resources"]:
                parts.append(f'<li>{link(path, "Travaux pratiques" if path.startswith("tp/") else "Révisions")}</li>')
            parts.append('</ul>')
        for section, value in m["sections"].items():
            parts.append(f'<h3>{escape(section.capitalize())}</h3><p>{escape(value)}</p>')
        parts.append('</section>')
    return "\n".join(parts)
