"""Offline integration of the common policy with an existing local broker.

The broker is not versioned on main yet. Load it explicitly, keeping its source
and Keychain module unchanged; use this checkout's candidate ingestion policy.
Only synthetic payloads and --dry-run are exercised. All Auth/network seams fail.
"""
import argparse
import contextlib
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import sys
import tempfile
from unittest.mock import patch

from test_granularity import bundle, manifest, MODULE9, ROOT
from ingestion import granularity  # Pin candidate policy before loading broker.


def run(broker_path):
    source = Path(broker_path).resolve()
    before = hashlib.sha256(source.read_bytes()).hexdigest()
    sys.path.append(str(source.parent))
    spec = importlib.util.spec_from_file_location("existing_broker", source)
    broker = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(broker)
    assert broker.assert_object_granularity is granularity.assert_payload_granularity
    env = {"SUPABASE_URL": "https://abcdefghijklmnopqrst.supabase.co",
           "SUPABASE_PUBLISHABLE_KEY": "sb_publishable_synthetic"}
    def forbidden(*args, **kwargs):
        raise AssertionError("Auth/credential/network forbidden in this test")
    class NoCredentials:
        get_password = forbidden
    results = []
    with tempfile.TemporaryDirectory(prefix="tssr-granularity-test-") as directory:
        payload = bundle()
        for cross_module in (False, True):
            if cross_module:
                manifest(payload)["components"][1]["moduleId"] = MODULE9
            path = Path(directory) / "synthetic.json"
            path.write_text(json.dumps(payload), encoding="utf-8")
            stdout, stderr = io.StringIO(), io.StringIO()
            with patch("socket.create_connection", forbidden), patch("urllib.request.urlopen", forbidden), \
                    contextlib.redirect_stdout(stdout), contextlib.redirect_stderr(stderr):
                code = broker.main(["propose", "--payload", str(path), "--agent-email", "fixture@example.invalid",
                    "--credential-source", "keychain", "--dry-run"], env=env,
                    password_reader=forbidden, transport_factory=forbidden, keychain=NoCredentials())
            if cross_module:
                assert code == 1 and json.loads(stderr.getvalue()) == {"error": "PAYLOAD_GRANULARITY_VIOLATION"}
                results.append("M08_PLUS_M09_REJECTED")
            else:
                assert code == 0 and json.loads(stdout.getvalue())["status"] == "DRY_RUN_READY"
                results.append("M08_ECOSYSTEM_DRY_RUN_READY")
    assert hashlib.sha256(source.read_bytes()).hexdigest() == before
    return {"results": results, "broker_source_sha256": before, "broker_source_changed": False,
            "remote_validation": "NOT_PERFORMED", "authentication": False, "submission": False}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--broker", required=True)
    print(json.dumps(run(parser.parse_args().broker)))
