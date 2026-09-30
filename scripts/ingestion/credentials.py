"""Same recognition policy as Edge, no network and no credential logging."""
import json
from pathlib import Path
import re
import unicodedata

_POLICY = json.loads((Path(__file__).resolve().parents[2] /
    "supabase/functions/_shared/credential-policy.json").read_text(encoding="utf-8"))
_SIGNATURES = [re.compile(pattern, re.I | re.ASCII) for pattern in _POLICY["signatures"]]
_VALUES = [re.compile(pattern, re.I | re.ASCII) for pattern in _POLICY["values"]]
_PLACEHOLDER = re.compile(_POLICY["placeholder"], re.I)


def contains_credential(text):
    normalized = unicodedata.normalize("NFKC", text)
    for _ in range(2):
        normalized = re.sub(r"&#(x[0-9a-f]+|[0-9]+);", lambda m:
            chr(min(int(m[1][1:], 16) if m[1].lower().startswith("x") else int(m[1]), 0x10ffff)),
            normalized, flags=re.I)
        normalized = re.sub(r"&([a-z]+);", lambda m: _POLICY["entities"].get(m[1].lower(), m[0]),
                            normalized, flags=re.I)
        normalized = re.sub(r"%([0-7][0-9a-f])", lambda m: chr(int(m[1], 16)), normalized, flags=re.I)
    if any(pattern.search(normalized) for pattern in _SIGNATURES):
        return True
    for pattern in _VALUES:
        for match in pattern.finditer(normalized):
            value = next((part for part in match.groups() if part is not None), "").strip()
            if value and not _PLACEHOLDER.fullmatch(value):
                return True
    return False
