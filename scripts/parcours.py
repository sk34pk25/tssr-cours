"""Offline, read-only planning loader. Drive is never a write destination."""
from __future__ import annotations

from datetime import date
import hashlib
from pathlib import Path
import re
import unicodedata

import yaml

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "data/parcours_tssr.yaml"


class PlanningError(ValueError):
    pass


class UniqueLoader(yaml.SafeLoader):
    def construct_mapping(self, node, deep=False):
        keys = [self.construct_object(key, deep=deep) for key, _ in node.value]
        if any(not isinstance(key, str) for key in keys) or len(set(keys)) != len(keys):
            raise PlanningError("Clé YAML non textuelle ou dupliquée")
        return super().construct_mapping(node, deep)


def text(value, name):
    if not isinstance(value, str) or not value.strip() or len(value) > 2000:
        raise PlanningError(f"Texte invalide : {name}")
    if re.search(r"[\x00-\x1f\x7f]", value):
        raise PlanningError(f"Caractère de contrôle : {name}")
    return value


def iso_date(value):
    if type(value) is date:
        return value.isoformat()
    if not isinstance(value, str) or not re.fullmatch(r"\d{4}-\d{2}-\d{2}", value):
        raise PlanningError("Date ISO requise")
    try:
        return date.fromisoformat(value).isoformat()
    except ValueError as error:
        raise PlanningError("Date impossible") from error


def canonical_title(title):
    title = re.sub(r"\s*\(\d+/\d+\)\s*$", "", title)
    title = unicodedata.normalize("NFKD", title).casefold()
    return re.sub(r"[^a-z0-9]+", " ", "".join(c for c in title if not unicodedata.combining(c))).strip()


def period_kind(title):
    value = canonical_title(title)
    if value.startswith("mise en situation professionnelle"):
        return "MSP"
    if value.startswith("stage "):
        return "STAGE"
    if value == "interruption":
        return "INTERRUPTION"
    if value.startswith("evaluations finales"):
        return "EVALUATION"
    return "COURSE"


def status_at(period, today):
    current = iso_date(today)
    return "a_venir" if current < period["date_debut"] else "passe" if current > period["date_fin"] else "en_cours"


def load_planning(source=SOURCE):
    raw = Path(source).read_bytes()
    if len(raw) > 256_000:
        raise PlanningError("Planning trop volumineux")
    try:
        if any(isinstance(t, (yaml.AliasToken, yaml.AnchorToken)) for t in yaml.scan(raw)):
            raise PlanningError("Alias et ancres YAML interdits")
        data = yaml.load(raw, Loader=UniqueLoader)
    except yaml.YAMLError as error:
        raise PlanningError(f"YAML invalide : {error}") from error
    if not isinstance(data, dict) or set(data) != {"Objectif", "Contexte", "planning"}:
        raise PlanningError("Objectif, Contexte et planning requis, sans autre clé")
    if not isinstance(data["planning"], list) or not 1 <= len(data["planning"]) <= 1000:
        raise PlanningError("planning doit être une liste non vide")
    periods, ids = [], set()
    for entry in data["planning"]:
        if not isinstance(entry, dict) or set(entry) != {"cours", "date_debut", "date_fin", "modalite_lieu", "formateurs"}:
            raise PlanningError("Champs de période inattendus (statut persistant interdit)")
        period = {**entry, "cours": text(entry["cours"], "cours"), "modalite_lieu": text(entry["modalite_lieu"], "modalité")}
        for key in ("date_debut", "date_fin"):
            period[key] = iso_date(entry[key])
        if period["date_fin"] < period["date_debut"]:
            raise PlanningError("Fin antérieure au début")
        if not isinstance(entry["formateurs"], list) or not entry["formateurs"]:
            raise PlanningError("Liste de formateurs requise")
        period["formateurs"] = [text(v, "formateur") for v in entry["formateurs"]]
        identity = "\n".join(period[key] for key in ("cours", "date_debut", "date_fin"))
        period["id"] = "p-" + hashlib.sha256(identity.encode()).hexdigest()[:16]
        if period["id"] in ids:
            raise PlanningError("Période dupliquée")
        ids.add(period["id"])
        period["kind"] = period_kind(period["cours"])
        periods.append(period)
    return sorted(periods, key=lambda p: p["date_debut"])
