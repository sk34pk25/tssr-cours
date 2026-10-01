"""Kahoot build projection from existing Markdown pages. No network or source writes."""
import json
import posixpath
import re
from html import escape
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parents[1]
MARKER = re.compile(r"<!-- TSSR-KAHOOT-V1:([^\n]*?) -->\n?")


JOIN_URL = "https://kahoot.it/"


def official_share_url(value):
    url = urlsplit(value)
    if (url.scheme != "https" or url.hostname not in {"create.kahoot.it", "create.kahoot.com", "kahoot.it", "kahoot.com"}
            or url.username or url.password or url.port or url.query or url.fragment
            or not re.fullmatch(r"/(share|details)/[a-zA-Z0-9_/-]+", url.path)):
        raise ValueError("Lien de partage Kahoot invalide (pas de PIN/session)")
    return value


def official_editor_url(value):
    if not isinstance(value, str):
        raise ValueError("Lien éditeur Kahoot invalide")
    url = urlsplit(value)
    if (url.scheme != "https" or url.hostname not in {"create.kahoot.it", "create.kahoot.com"}
            or url.username or url.password or url.port or url.query or url.fragment
            or not re.fullmatch(r"/creator/[0-9a-f]{8}(?:-[0-9a-f]{4}){3}-[0-9a-f]{12}", url.path)):
        raise ValueError("Lien éditeur Kahoot invalide")
    return value


def action_config(root):
    """Build-only links: never stored in the V1 marker or sent to Supabase."""
    path = root / "data/kahoot-actions.json"
    if not path.exists():
        return {"joinUrl": JOIN_URL, "editorUrls": {}}
    def unique_fields(pairs):
        result = {}
        for key, value in pairs:
            if key in result:
                raise ValueError("Clé de configuration Kahoot dupliquée")
            result[key] = value
        return result
    config = json.loads(path.read_text(encoding="utf-8"), object_pairs_hook=unique_fields)
    if (not isinstance(config, dict) or set(config) != {"joinUrl", "editorUrls"}
            or config["joinUrl"] != JOIN_URL or not isinstance(config["editorUrls"], dict)):
        raise ValueError("Configuration des actions Kahoot invalide")
    for page, editor_url in config["editorUrls"].items():
        if not re.fullmatch(r"kahoot/[a-z0-9_/-]+\.md", page) or "//" in page:
            raise ValueError("Page des actions Kahoot invalide")
        official_editor_url(editor_url)
    return config


def doc_path(root, path):
    if not isinstance(path, str) or not re.fullmatch(r"modules/[a-z0-9/-]+\.md", path):
        raise ValueError("Référence cours/module invalide")
    target = (root / "docs" / path).resolve()
    if not target.is_relative_to((root / "docs").resolve()) or not target.is_file():
        raise ValueError("Référence cours/module introuvable")
    return path


def catalog(root=ROOT):
    actions = action_config(root)
    configured_pages = set()
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
        if not isinstance(item, dict) or set(item) != fields or type(item["schemaVersion"]) is not int or item["schemaVersion"] != 1:
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
            identity = official_share_url(item["url"]).rstrip('/').split("/")[-1]
            if identity in urls:
                raise ValueError("Kahoot dupliqué")
            urls.add(identity)
        editor_url = actions["editorUrls"].get(relative)
        if editor_url is not None:
            if not item["url"] or editor_url.rsplit("/", 1)[-1] != identity:
                raise ValueError("Le lien éditeur ne correspond pas à l’identité du Kahoot")
            configured_pages.add(relative)
        def title_of(target):
            match = re.search(r"^# (.+)$", (root / "docs" / target).read_text(encoding="utf-8"), re.M)
            return match[1] if match else target
        result.append({**item, "path": relative, "legacy": False, "courseTitle": title_of(course), "moduleTitle": title_of(module),
                       "joinUrl": actions["joinUrl"], "editorUrl": editor_url})
    if configured_pages != set(actions["editorUrls"]):
        raise ValueError("Une action Kahoot cible une page absente ou non structurée")
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
    module_title = escape(re.sub(r"^Module ([0-9]{2})\s*—\s*", r"M\1 — ", item.get("moduleTitle", item["title"])))
    share = escape(item["url"] or "", quote=True)
    # Keep V1 availability semantics and its official-link fallback for other quizzes.
    editor = escape((item.get("editorUrl") or item["url"] or "") if item["liveAvailable"] else "", quote=True)
    join = escape(item.get("joinUrl", JOIN_URL), quote=True)
    solo = f'<a class="md-button md-button--primary" href="{share}" target="_blank" rel="noopener noreferrer">Jouer en solo</a>' if share and item["soloAvailable"] else '<span class="md-button tssr-kahoot-action--unavailable" aria-disabled="true">Jouer en solo</span>'
    host = f'<button type="button" class="md-button" data-kahoot-host="{editor}" hidden>Créer une partie</button>'
    return f'''<section class="tssr-kahoot" aria-label="Kahoot : {title}"><div class="tssr-kahoot__label">KAHOOT</div>
<h3 class="tssr-kahoot__title">{module_title}</h3><p class="tssr-kahoot__count">{item['questionCount']} questions</p>
<p class="tssr-kahoot__description">Teste tes connaissances sur ce module.</p>
<div class="tssr-kahoot-actions">{solo}<a class="md-button" href="{join}" target="_blank" rel="noopener noreferrer">Rejoindre un groupe</a>{host}</div></section>'''


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
