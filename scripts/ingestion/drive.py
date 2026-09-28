"""Google Drive v3 GET-only adapter; root enforcement is independent of OAuth.

Sources: developers.google.com/workspace/drive/api/guides/api-specific-auth
and /guides/manage-downloads. No remote write operation exists in this module.
"""
import hashlib
import json
import re
import urllib.parse
import urllib.request

TSSR_ROOT = "1N73OtTF2TKxYUEO9X0_4NObnmEAugzZ1"
READ_SCOPE = "https://www.googleapis.com/auth/drive.readonly"
FOLDER = "application/vnd.google-apps.folder"
SHORTCUT = "application/vnd.google-apps.shortcut"
FIELDS = "id,name,mimeType,parents,size,modifiedTime,md5Checksum,sha256Checksum,version,trashed"
EXPORTS = {"application/vnd.google-apps.document": "text/plain",
           "application/vnd.google-apps.presentation": "application/pdf"}
MAX_BYTES = 25_000_000


class SourceError(ValueError):
    pass


def file_id(value):
    if not isinstance(value, str) or not re.fullmatch(r"[A-Za-z0-9_-]{1,200}", value):
        raise SourceError("Invalid Drive file ID; URLs and paths are forbidden")
    return value


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, *args, **kwargs):
        raise SourceError("Redirect refused")


def bounded_get(url, token=None, maximum=MAX_BYTES):
    headers = {"Authorization": "Bearer " + token} if token else {}
    request = urllib.request.Request(url, headers=headers, method="GET")
    try:
        with urllib.request.build_opener(NoRedirect).open(request, timeout=30) as response:
            value = response.read(maximum + 1)
    except Exception:
        # Never include credentials, signed URL or HTTP body in errors.
        raise SourceError("Read failed; no source state changed") from None
    if len(value) > maximum:
        raise SourceError("Source exceeds size limit")
    return value


class GoogleDriveReadOnly:
    def __init__(self, token):
        if not token:
            raise SourceError("Read-only Google access token required")
        # Verify actual token grant, not a user-provided claim about its scopes.
        # This URL is neither logged nor retained.
        info = json.loads(bounded_get("https://oauth2.googleapis.com/tokeninfo?" +
                          urllib.parse.urlencode({"access_token": token}), maximum=16000))
        if set(info.get("scope", "").split()) != {READ_SCOPE}:
            raise SourceError("Only the drive.readonly OAuth grant is accepted")
        self._token = token

    def _get(self, suffix, params):
        url = "https://www.googleapis.com/drive/v3/files" + suffix
        return bounded_get(url + "?" + urllib.parse.urlencode(params), self._token)

    def metadata(self, identity):
        return json.loads(self._get("/" + file_id(identity), {"fields": FIELDS, "supportsAllDrives": "true"}))

    def children(self, parent):
        token = None
        seen = set()
        while True:
            params = {"q": "'" + file_id(parent) + "' in parents and trashed=false",
                      "fields": "nextPageToken,incompleteSearch,files(" + FIELDS + ")",
                      "pageSize": 100, "supportsAllDrives": "true", "includeItemsFromAllDrives": "true"}
            if token:
                params["pageToken"] = token
            result = json.loads(self._get("", params))
            if result.get("incompleteSearch"):
                raise SourceError("Incomplete listing; SOURCE_MISSING not inferred")
            yield from result.get("files", [])
            token = result.get("nextPageToken")
            if not token:
                break
            if token in seen:
                raise SourceError("Repeated pagination token")
            seen.add(token)

    def content(self, metadata):
        identity = file_id(metadata["id"])
        mime = metadata["mimeType"]
        if mime in EXPORTS:
            return self._get("/" + identity + "/export", {"mimeType": EXPORTS[mime]})
        return self._get("/" + identity, {"alt": "media", "supportsAllDrives": "true"})


class BoundedReader:
    """Only IDs proved by current ancestry under the fixed TSSR root are read."""
    def __init__(self, transport):
        self.transport = transport

    def authorize(self, identity):
        identity = file_id(identity)
        current, seen = identity, set()
        first, names = None, []
        for _ in range(64):
            if current in seen:
                raise SourceError("Cyclic ancestry")
            seen.add(current)
            meta = self.transport.metadata(current)
            if meta.get("id") != current or meta.get("trashed") or meta.get("mimeType") == SHORTCUT:
                raise SourceError("Missing, trashed or shortcut source refused")
            first = first or meta
            if current == TSSR_ROOT:
                if meta.get("mimeType") != FOLDER:
                    raise SourceError("Invalid root")
                return {**first, "logicalPath": list(reversed(names))}
            names.append(meta.get("name", current))
            parents = meta.get("parents", [])
            if len(parents) != 1:
                raise SourceError("Source outside TSSR or ambiguous ancestry")
            current = file_id(parents[0])
        raise SourceError("Ancestry depth exceeded")

    def scan(self):
        queue, result, seen = [(TSSR_ROOT, [])], [], set()
        while queue:
            parent, path = queue.pop(0)
            if parent in seen:
                raise SourceError("Duplicate folder")
            seen.add(parent)
            self.authorize(parent)
            for meta in self.transport.children(parent):
                identity = file_id(meta["id"])
                if meta.get("parents") != [parent]:
                    raise SourceError("Listing parent mismatch")
                name = meta.get("name", "")
                if not name or name in {".", ".."} or any(ord(c) < 32 for c in name) or "\\" in name:
                    raise SourceError("Unsafe source name")
                components = path + [name]
                if meta["mimeType"] == FOLDER:
                    queue.append((identity, components))
                else:
                    result.append({**meta, "logicalPath": components})
                if len(result) + len(seen) + len(queue) > 10000:
                    raise SourceError("Inventory limit")
        return result

    def snapshot(self, identity):
        before = self.authorize(identity)
        if before["mimeType"] == FOLDER or int(before.get("size", 0)) > MAX_BYTES:
            raise SourceError("Not a bounded file")
        raw = self.transport.content(before)
        if len(raw) > MAX_BYTES:
            raise SourceError("Source too large")
        after = self.authorize(identity)
        if before != after:
            raise SourceError("Source changed during snapshot; retry explicitly")
        if before.get("md5Checksum") and hashlib.md5(raw).hexdigest() != before["md5Checksum"]:
            raise SourceError("Content checksum mismatch")
        return before, raw


class FixtureDrive:
    """Same interface, local immutable dictionary; no network credentials."""
    def __init__(self, entries, contents):
        self.entries, self.contents = entries, contents
        self.reads = 0

    def metadata(self, identity):
        if identity not in self.entries:
            raise SourceError("Unknown fixture ID")
        return dict(self.entries[identity])

    def children(self, parent):
        return [dict(m) for m in self.entries.values() if m.get("parents") == [parent]]

    def content(self, metadata):
        self.reads += 1
        return self.contents[metadata["id"]]
