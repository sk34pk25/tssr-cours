"""Kahoot build projection from existing Markdown pages. No network or source writes."""
import json
import posixpath
import re
from html import escape
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
MARKER = re.compile(r"<!-- TSSR-KAHOOT-V1:([^\n]*?) -->\n?")


def official_url(value):
    url = urlsplit(value)
    if (url.scheme != "https" or url.hostname not in {"create.kahoot.it", "create.kahoot.com", "kahoot.it", "kahoot.com"}
            or url.username or url.password or url.port or url.query or url.fragment
            or not re.fullmatch(r"/(share|details)/[a-zA-Z0-9_/-]+", url.path)):
        raise ValueError("Lien de partage Kahoot invalide (pas de PIN/session)")
    return value


def doc_path(root, path):
    if not isinstance(path, str) or not re.fullmatch(r"modules/[a-z0-9/-]+\.md", path):
        raise ValueError("Référence cours/module invalide")
    target = (root / "docs" / path).resolve()
    if not target.is_relative_to((root / "docs").resolve()) or not target.is_file():
        raise ValueError("Référence cours/module introuvable")
    return path


def catalog(root=ROOT):
    result, modules, urls = [], set(), set()
    for path in sorted((root / "docs/kahoot").rglob("*.md")):
        if path.name == "bibliotheque.md":
            continue
        content = path.read_text(encoding="utf-8")
        matches = MARKER.findall(content)
        relative = path.relative_to(root / "docs").as_posix()
        if not matches:
            if "TSSR-KAHOOT-V1:" in content:
                raise ValueError("Marqueur Kahoot mal formé")
            # No inferred module/availability/count from an old filename or URL.
            title = re.search(r"^# (.+)$", content, re.M)
            identities = {url.rstrip('/').split('/')[-1] for url in re.findall(r"https://(?:create\.)?kahoot\.(?:it|com)/(?:share|details)/[a-zA-Z0-9_/-]+", content)}
            if identities & urls:
                raise ValueError("Kahoot dupliqué, y compris parmi les pages historiques")
            urls.update(identities)
            result.append(dict(path=relative, title=title[1] if title else path.stem, legacy=True))
            continue
        if len(matches) != 1:
            raise ValueError("Identité Kahoot multiple")
        item = json.loads(unquote(matches[0]))
        fields = {"schemaVersion", "courseId", "moduleId", "title", "questionCount", "url", "soloAvailable", "liveAvailable", "provenance", "state", "questions"}
        if not isinstance(item, dict) or set(item) != fields or item["schemaVersion"] != 1:
            raise ValueError("Métadonnées Kahoot invalides")
        course = doc_path(root, item["courseId"])
        module = doc_path(root, item["moduleId"])
        if not course.endswith("/index.md") or posixpath.dirname(course) != posixpath.dirname(module) or course == module:
            raise ValueError("Le module ne correspond pas au cours")
        if type(item["questionCount"]) is not int or not 1 <= item["questionCount"] <= 20:
            raise ValueError("Kahoot : 1 à 20 questions par module")
        if item["provenance"] not in {"A", "B", "C", "D"} or not isinstance(item["title"], str) or not item["title"].strip():
            raise ValueError("Titre/provenance Kahoot requis")
        if any(type(item[k]) is not bool for k in ["soloAvailable", "liveAvailable"]):
            raise ValueError("Disponibilités Kahoot invalides")
        questions = item["questions"]
        if not isinstance(questions, list) or len(questions) > 20 or (questions and len(questions) != item["questionCount"]):
            raise ValueError("Questions Kahoot incohérentes")
        for q in questions:
            if not isinstance(q, dict) or q.get("provenance") not in {"A", "B", "C", "D"} or not isinstance(q.get("source"), str) or not q["source"].strip() or not isinstance(q.get("question"), str) or not q["question"].strip():
                raise ValueError("Question sourcée requise")
            answers = q.get("answers")
            if not isinstance(answers, list) or not 2 <= len(answers) <= 4 or not all(isinstance(a, str) and a.strip() for a in answers) or len(set(answers)) != len(answers) or q.get("correctAnswer") not in answers:
                raise ValueError("Réponses Kahoot invalides")
        if not item["url"] and not questions:
            raise ValueError("Kahoot vide")
        if item["state"] != ("linked" if item["url"] else "prepared") or (not item["url"] and (item["soloAvailable"] or item["liveAvailable"])):
            raise ValueError("État Kahoot incohérent")
        if module in modules:
            raise ValueError("Un seul Kahoot canonique par module")
        modules.add(module)
        if item["url"]:
            identity = official_url(item["url"]).rstrip('/').split("/")[-1]
            if identity in urls:
                raise ValueError("Kahoot dupliqué")
            urls.add(identity)
        def title_of(target):
            match = re.search(r"^# (.+)$", (root / "docs" / target).read_text(encoding="utf-8"), re.M)
            return match[1] if match else target
        result.append({**item, "path": relative, "legacy": False, "courseTitle": title_of(course), "moduleTitle": title_of(module)})
    return result


def href(target, current):
    def output(path):
        return path[:-8] if path.endswith("index.md") else path[:-3] + "/"
    return posixpath.relpath(output(target), output(current)) + "/"


def link(target, current, label):
    return f'<a href="{escape(href(target, current), quote=True)}">{escape(label)}</a>'


def card(item, current):
    title = escape(item["title"])
    if item["legacy"]:
        return f'<section class="tssr-path-intro tssr-kahoot"><h3>{title}</h3><p>Quiz historique · association au module et modes à renseigner.</p><p>{link(item["path"], current, "Ouvrir le quiz historique")}</p></section>'
    url = escape(item["url"] or "", quote=True)
    solo = f'<a class="md-button md-button--primary" href="{url}" target="_blank" rel="noopener noreferrer">Jouer en solo</a>' if item["soloAvailable"] else '<span>Solo non renseigné ou indisponible.</span>'
    live = f'<button type="button" class="md-button" data-kahoot-live="{url}" hidden>Lancer une session de groupe</button><span data-kahoot-login>Connectez-vous à TSSR pour accéder à l’action groupe.</span>' if item["liveAvailable"] else ''
    fallback = f'<a href="{url}" target="_blank" rel="noopener noreferrer">Ouvrir la fiche officielle Kahoot</a>' if url else 'Questions préparées ; lien officiel à ajouter après création humaine sur Kahoot.'
    return f'''<section class="tssr-path-intro tssr-kahoot"><h3>Kahoot — {title}</h3>
<p>{item['questionCount']} questions · provenance {item['provenance']}</p>
<p>{link(item['courseId'], current, item.get('courseTitle', 'Cours'))} → {link(item['moduleId'], current, item.get('moduleTitle', 'Module'))} → {link(item['path'], current, 'Kahoot')}</p>
<div class="tssr-kahoot-actions">{solo}{live}</div><p>{fallback}</p>
<small>Ouverture sur Kahoot. Les autorisations du compte Kahoot restent applicables ; TSSR ne lance pas automatiquement une partie.</small></section>'''


def render_library(items):
    parts = ['# Kahoot', '', 'Les quiz associés aux cours et modules. Maximum 20 questions pertinentes par module.', '']
    courses = sorted({item.get("courseId", "") for item in items})
    for course in courses:
        course_title = next(item.get("courseTitle", course) for item in items if item.get("courseId", "") == course)
        parts.append(f'<h2>{escape(course_title) if course else "Quiz historiques — associations à compléter"}</h2>')
        parts.extend(card(item, "kahoot/bibliotheque.md") for item in items if item.get("courseId", "") == course)
    if not items:
        parts.append("Aucun Kahoot configuré. Aucun quiz vide ne sera créé.")
    return '\n\n'.join(parts)
