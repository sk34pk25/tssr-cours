"""Offline preparation contract, not an agent, RPC client or publisher."""
import hashlib
import json
import re
from parcours import PlanningError, text

KINDS = {"COURSE", "MSP", "TP", "EXERCISE", "REVISION", "KAHOOT_SOURCE", "RESOURCE", "UNKNOWN"}
PROVENANCE = {"A": "Original", "B": "Reformulation", "C": "Complément pédagogique", "D": "Mise à jour externe"}


def prepare_analysis(*, file_id, content_sha256, kind, units, questions=None, course_id=None, module_id=None):
    """No authority-bearing fields accepted; output remains pending human review."""
    if not re.fullmatch(r"[a-zA-Z0-9_-]{1,200}", file_id):
        raise PlanningError("ID de source invalide")
    if not re.fullmatch(r"[a-f0-9]{64}", content_sha256) or kind not in KINDS:
        raise PlanningError("Empreinte ou classification invalide")
    if not isinstance(units, list) or not 1 <= len(units) <= 1000:
        raise PlanningError("Unités de provenance requises")
    checked = []
    for unit in units:
        if not isinstance(unit, dict) or set(unit) != {"provenance", "source", "content"} or unit["provenance"] not in PROVENANCE:
            raise PlanningError("Provenance invalide")
        checked.append({"provenance": unit["provenance"], "source": text(unit["source"], "source"), "content": text(unit["content"], "contenu")})
    if kind == "KAHOOT_SOURCE":
        if not isinstance(questions, list) or not 1 <= len(questions) <= 20:
            raise PlanningError("Kahoot : 1 à 20 questions par module, jamais vide")
        if not all(isinstance(v, str) and re.fullmatch(r"modules/[a-z0-9/-]+\.md", v) and ".." not in v for v in [course_id, module_id]):
            raise PlanningError("Références stables cours/module requises")
        if not course_id.endswith('/index.md') or course_id == module_id or course_id.rsplit('/', 1)[0] != module_id.rsplit('/', 1)[0]:
            raise PlanningError("Le module doit appartenir au cours")
        checked_questions = []
        for question in questions:
            if not isinstance(question, dict) or set(question) != {"question", "answers", "correctAnswer", "provenance", "source"} or question["provenance"] not in PROVENANCE:
                raise PlanningError("Question structurée avec provenance requise")
            answers = question["answers"]
            if not isinstance(answers, list) or not 2 <= len(answers) <= 4:
                raise PlanningError("Deux à quatre réponses requises")
            answers = [text(a, "réponse") for a in answers]
            if len(set(answers)) != len(answers) or question["correctAnswer"] not in answers:
                raise PlanningError("Réponse correcte invalide")
            checked_questions.append({**question, "question": text(question["question"], "question"), "answers": answers, "source": text(question["source"], "source")})
        questions = checked_questions
    elif questions is not None:
        raise PlanningError("Questions réservées à KAHOOT_SOURCE")
    identity = json.dumps([file_id, content_sha256, kind, course_id, module_id], ensure_ascii=False, separators=(",", ":"))
    result = {"schemaVersion": 2, "source": {"type": "google_drive_read_only", "fileId": file_id, "sha256": content_sha256}, "idempotencyKey": hashlib.sha256(identity.encode()).hexdigest(), "kind": kind, "units": checked, "questions": questions, "courseId": course_id, "moduleId": module_id, "requiresHumanReview": True}
    result["proposalFingerprint"] = hashlib.sha256(json.dumps(result, sort_keys=True, ensure_ascii=False).encode()).hexdigest()
    return result
