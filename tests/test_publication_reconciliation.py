"""No network: execute the secret-bearing workflow client against canned replies."""
import contextlib
import io
import json
import os
from pathlib import Path
import re
import textwrap
import unittest
from unittest import mock

ROOT = Path(__file__).resolve().parents[1]
WORKFLOW = (ROOT / ".github/workflows/reconcile-publications.yml").read_text()
SCRIPT = textwrap.dedent(re.search(r"python - <<'PY'\n([\s\S]*?)          PY", WORKFLOW)[1])
ID = "11111111-1111-4111-8111-111111111111"


class ReconciliationWorkflowTests(unittest.TestCase):
    def run_client(self, results, dry_run="true", error=None):
        calls = []
        def urlopen(request, timeout):
            calls.append(json.loads(request.data))
            self.assertEqual(request.method, "POST")
            self.assertEqual(timeout, 60)
            if error:
                raise error
            return io.BytesIO(json.dumps(results[len(calls) - 1]).encode())
        output = io.StringIO()
        with mock.patch.dict(os.environ, {"WEBHOOK_URL": "https://example.invalid/status", "WEBHOOK_SECRET": "synthetic-only",
                                          "DRY_RUN": dry_run, "AFTER_ID": ""}, clear=True), \
                mock.patch("urllib.request.urlopen", side_effect=urlopen), contextlib.redirect_stdout(output):
            exec(compile(SCRIPT, "reconciliation-workflow", "exec"), {})
        self.assertNotIn("synthetic-only", output.getvalue())
        return calls, output.getvalue()

    def test_disabled_until_reviewed_cutover_and_no_untrusted_code(self):
        self.assertIn("vars.PUBLICATION_RECONCILIATION_ENABLED == 'true'", WORKFLOW)
        self.assertIn("github.ref == 'refs/heads/main'", WORKFLOW)
        self.assertIn("schedule:", WORKFLOW)
        self.assertIn("workflow_run:", WORKFLOW)
        self.assertIn("cancel-in-progress: false", WORKFLOW)
        for forbidden in ["uses:", "contents: write", "actions: write", "pull_request_target:", "git push", "workflow run"]:
            self.assertNotIn(forbidden, WORKFLOW)

    def test_paginated_sweep_and_safe_default_manual_dry_run(self):
        calls, _ = self.run_client([
            {"ok": True, "results": [{"id": ID, "result": "SKIPPED", "reason": "INCOMPLETE"}], "next_cursor": ID},
            {"ok": True, "results": [], "next_cursor": None},
        ])
        self.assertEqual(calls, [
            {"action": "reconcile", "dry_run": True, "after_id": None},
            {"action": "reconcile", "dry_run": True, "after_id": ID},
        ])

    def test_automatic_sweep_can_finalize_only_via_authenticated_handler(self):
        calls, _ = self.run_client([{"ok": True, "results": [], "next_cursor": None}], dry_run="false")
        self.assertFalse(calls[0]["dry_run"])

    def test_http_failure_never_prints_body_or_retries(self):
        with self.assertRaisesRegex(SystemExit, "RECONCILIATION_CHECK_FAILED_NO_RETRY"):
            self.run_client([], error=RuntimeError("sensitive body must not be echoed"))

    def test_duplicate_cursor_stops(self):
        with self.assertRaisesRegex(SystemExit, "INVALID_CONTINUATION"):
            self.run_client([{"ok": True, "next_cursor": ID}, {"ok": True, "next_cursor": ID}])

    def test_new_entrypoint_keeps_webhook_auth_before_dispatch(self):
        code = (ROOT / "supabase/functions/publication-status/index.ts").read_text()
        self.assertLess(code.index("constantTimeEqual(expected, provided)"), code.index('body.action === "reconcile"'))
        self.assertIn("Signature de publication invalide.", code)


if __name__ == "__main__":
    unittest.main()
