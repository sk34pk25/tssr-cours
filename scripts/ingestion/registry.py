"""Single local SQLite file, not an added database service. Private workspace."""
from contextlib import contextmanager
from datetime import datetime, timezone
import fcntl
import hashlib
import json
import os
from pathlib import Path
import sqlite3

STATES = {"DISCOVERED","SNAPSHOTTED","EXTRACTED","CLASSIFIED","GENERATED","VALIDATED",
          "READY_FOR_REVIEW","PROPOSED","FAILED","NEEDS_REVIEW","BUDGET_EXCEEDED","SOURCE_MISSING"}


def fingerprint(value):
    return hashlib.sha256(json.dumps(value,sort_keys=True,ensure_ascii=False,separators=(",",":")).encode()).hexdigest()


class Registry:
    def __init__(self, directory):
        original = Path(directory)
        if original.is_symlink():
            raise ValueError("State directory symlink refused")
        self.root = Path(directory).resolve()
        if self.root.exists() and any(self.root.iterdir()) and not (self.root/".tssr-ingestion").is_file():
            raise ValueError("Use an empty dedicated ingestion directory")
        self.root.mkdir(parents=True,exist_ok=True,mode=0o700)
        os.chmod(self.root,0o700)
        (self.root/".tssr-ingestion").touch(mode=0o600,exist_ok=True)
        if (self.root/"registry.sqlite3").is_symlink() or (self.root/"worker.lock").is_symlink():
            raise ValueError("Registry symlink refused")
        self.db = sqlite3.connect(self.root / "registry.sqlite3")
        self.db.executescript("""
        create table if not exists sources(file_id text primary key, metadata text not null, missing integer not null default 0);
        create table if not exists imports(id text primary key, file_id text not null, hash text not null,
          state text not null, data text not null, unique(file_id,hash));
        create table if not exists cache(key text primary key, result text not null);
        create table if not exists metrics(id integer primary key, import_id text not null, data text not null);
        """)
        os.chmod(self.root / "registry.sqlite3",0o600)
        self.db.commit()

    @contextmanager
    def lock(self):
        # Prevent overlapping analyses from overspending a per-source budget.
        with (self.root / "worker.lock").open("a") as handle:
            fcntl.flock(handle,fcntl.LOCK_EX | fcntl.LOCK_NB)
            try:
                yield
            finally:
                fcntl.flock(handle,fcntl.LOCK_UN)

    def snapshot(self, meta, raw):
        sha=hashlib.sha256(raw).hexdigest()
        identity=fingerprint([meta["id"],sha])
        self.db.execute("insert into sources(file_id,metadata,missing) values(?,?,0) "
                        "on conflict(file_id) do update set metadata=excluded.metadata,missing=0",
                        (meta["id"],json.dumps(meta)))
        existing=self.get(identity)
        if not existing:
            # Storage paths are content hashes, NEVER remote names or model paths.
            path=self.root / (sha + ".source")
            if path.is_symlink():
                raise ValueError("Snapshot symlink refused")
            if path.exists() and hashlib.sha256(path.read_bytes()).hexdigest()!=sha:
                raise ValueError("Snapshot corruption")
            if not path.exists():
                with path.open("xb") as handle:
                    os.chmod(path,0o600)
                    handle.write(raw)
            self.db.execute("insert into imports values(?,?,?,?,?)",
                (identity,meta["id"],sha,"SNAPSHOTTED",json.dumps({
                    "metadata":meta,"sourceHash":sha,"importedAt":datetime.now(timezone.utc).isoformat(),
                    "states":["DISCOVERED","SNAPSHOTTED"]})))
        self.db.commit()
        return identity

    def get(self, identity):
        row=self.db.execute("select state,data from imports where id=?",(identity,)).fetchone()
        return {"state":row[0],**json.loads(row[1])} if row else None

    def state(self, identity, state, **values):
        if state not in STATES:
            raise ValueError("Unknown pipeline state")
        data=self.get(identity)
        data.pop("state")
        data.update(values)
        if not data["states"] or data["states"][-1]!=state:
            data["states"].append(state)
        self.db.execute("update imports set state=?,data=? where id=?",(state,json.dumps(data),identity))
        self.db.commit()

    def cache(self,key,result=None):
        if result is not None:
            self.db.execute("insert or replace into cache values(?,?)",(key,json.dumps(result)))
            self.db.commit()
        row=self.db.execute("select result from cache where key=?",(key,)).fetchone()
        return json.loads(row[0]) if row else None

    def metric(self, identity, value):
        # Caller supplies only allowlisted technical metrics, never prompt/body.
        allowed={"fileId","sourceHash","stage","status","duration","model","inputTokens","outputTokens",
                 "estimatedCost","promptVersion","cacheHit","reservedTokens","reservedCost","attempt"}
        if set(value)-allowed:
            raise ValueError("Unexpected metric fields")
        imported=self.get(identity)
        if imported:
            value={**value,"fileId":imported["metadata"]["id"],"sourceHash":imported["sourceHash"]}
        self.db.execute("insert into metrics(import_id,data) values(?,?)",(identity,json.dumps(value)))
        self.db.commit()

    def metrics(self,identity):
        return [json.loads(r[0]) for r in self.db.execute("select data from metrics where import_id=?",(identity,))]

    def mark_missing(self, complete_scan_ids):
        # Caller must finish the entire scan successfully before invoking.
        for (identity,) in self.db.execute("select file_id from sources").fetchall():
            if identity not in complete_scan_ids:
                self.db.execute("update sources set missing=1 where file_id=?",(identity,))
                for import_id, data in self.db.execute("select id,data from imports where file_id=?",(identity,)).fetchall():
                    payload=json.loads(data)
                    payload["sourceState"]="SOURCE_MISSING"
                    self.db.execute("update imports set data=? where id=?",(json.dumps(payload),import_id))
        self.db.commit()

    def close(self):
        self.db.close()

    def record_proposed(self, identity, preview, receipt):
        current=self.get(identity)
        if current["state"]=="PROPOSED":
            if current.get("receipt")!=receipt or current["preview"]["proposalFingerprint"]!=preview["proposalFingerprint"]:
                raise ValueError("Contradictory proposal receipt")
            return
        if current["state"]!="READY_FOR_REVIEW" or current["preview"]["proposalFingerprint"]!=preview["proposalFingerprint"]:
            raise ValueError("Validated preview changed")
        self.state(identity,"PROPOSED",receipt=receipt)
