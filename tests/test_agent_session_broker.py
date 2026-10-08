import json
import contextlib
import io
from pathlib import Path
import sys
import tempfile
import unittest
import warnings
from unittest.mock import patch
import urllib.error

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))
import agent_session_broker as broker

ENV = {"SUPABASE_URL": "https://abcdefghijklmnopqrst.supabase.co", "SUPABASE_PUBLISHABLE_KEY": "sb_publishable_test"}
PAYLOAD = {"action": "create", "title": "Synthetic", "files": [{"file_path": "docs/x.md", "new_content": "# x", "change_type": "create"}]}

class Transport:
    def __init__(self, *_): self.calls = []
    def call(self, path, body, bearer=None):
        self.calls.append((path, body, bearer))
        if path.startswith("/auth/v1/token"): return 200, {"access_token": "short-token", "refresh_token": "never-written"}
        if path == "/functions/v1/change-requests": return 201, {"change_request": {"id": "11111111-1111-4111-8111-111111111111", "status": "pending"}}
        return 204, {}


class Keychain:
    def __init__(self, password="keychain-password", error=None):
        self.password = password
        self.error = error
        self.reads = []
        self.stored = []
    def get_password(self, email):
        self.reads.append(email)
        if self.error:
            raise self.error
        return self.password
    def store_password(self, email, password):
        self.stored.append((email, password))
        if self.error:
            raise self.error

class BrokerTests(unittest.TestCase):
    def assert_diagnostic(self, error, code, endpoint, emitted, received, status=None):
        self.assertIsInstance(error, broker.BrokerDiagnosticError)
        self.assertEqual(error.diagnostic, {
            "technical_code": code,
            "phase": "transport" if code.startswith("BROKER_TRANSPORT") else "response",
            "exception_class": "BrokerDiagnosticError",
            "endpoint": endpoint,
            "request_emitted": emitted,
            "response_received": received,
            "http_status": status,
        })

    def test_transport_connection_refused_is_before_send_and_redacted(self):
        failure = urllib.error.URLError(ConnectionRefusedError("private-password"))
        with patch.object(broker.urllib.request, "urlopen", side_effect=failure):
            with self.assertRaises(broker.BrokerDiagnosticError) as caught:
                broker.HttpTransport(ENV['SUPABASE_URL'], ENV['SUPABASE_PUBLISHABLE_KEY']).call(
                    '/functions/v1/change-requests', {"private": "private-password"}, 'private-token')
        self.assert_diagnostic(caught.exception, "BROKER_TRANSPORT_BEFORE_SEND", "change_requests", False, False)
        self.assertNotIn("private-password", json.dumps(caught.exception.diagnostic))
        self.assertNotIn("private-token", json.dumps(caught.exception.diagnostic))

    def test_transport_dns_error_is_before_send_and_redacted(self):
        failure = urllib.error.URLError(__import__('socket').gaierror("private-dns"))
        with patch.object(broker.urllib.request, "urlopen", side_effect=failure):
            with self.assertRaises(broker.BrokerDiagnosticError) as caught:
                broker.HttpTransport(ENV['SUPABASE_URL'], ENV['SUPABASE_PUBLISHABLE_KEY']).call(
                    '/functions/v1/change-requests', {}, 'private-token')
        self.assert_diagnostic(caught.exception, "BROKER_TRANSPORT_BEFORE_SEND", "change_requests", False, False)

    def test_transport_timeout_is_after_send_without_response(self):
        with patch.object(broker.urllib.request, "urlopen", side_effect=TimeoutError("private-timeout")):
            with self.assertRaises(broker.BrokerDiagnosticError) as caught:
                broker.HttpTransport(ENV['SUPABASE_URL'], ENV['SUPABASE_PUBLISHABLE_KEY']).call(
                    '/functions/v1/change-requests', {}, 'private-token')
        self.assert_diagnostic(caught.exception, "BROKER_TRANSPORT_AFTER_SEND", "change_requests", True, False)

    def test_transport_http_errors_keep_only_status(self):
        for status in (400, 401, 500):
            with self.subTest(status=status):
                failure = urllib.error.HTTPError('https://example.test', status, 'private-detail', {}, io.BytesIO(b'{"token":"private"}'))
                with patch.object(broker.urllib.request, "urlopen", side_effect=failure):
                    with self.assertRaises(broker.BrokerDiagnosticError) as caught:
                        broker.HttpTransport(ENV['SUPABASE_URL'], ENV['SUPABASE_PUBLISHABLE_KEY']).call(
                            '/functions/v1/change-requests', {}, 'private-token')
                self.assert_diagnostic(caught.exception, "BROKER_HTTP_STATUS", "change_requests", True, True, status)
                self.assertNotIn("private", json.dumps(caught.exception.diagnostic))

    def test_transport_non_json_response_is_decode_error(self):
        response = unittest.mock.MagicMock()
        response.__enter__.return_value = response
        response.status = 201
        response.read.return_value = b'not-json-private-token'
        with patch.object(broker.urllib.request, "urlopen", return_value=response):
            with self.assertRaises(broker.BrokerDiagnosticError) as caught:
                broker.HttpTransport(ENV['SUPABASE_URL'], ENV['SUPABASE_PUBLISHABLE_KEY']).call(
                    '/functions/v1/change-requests', {}, 'private-token')
        self.assert_diagnostic(caught.exception, "BROKER_RESPONSE_DECODE", "change_requests", True, True)
        self.assertNotIn("private-token", json.dumps(caught.exception.diagnostic))

    def test_real_transport_accepts_empty_logout_204(self):
        response = unittest.mock.MagicMock()
        response.__enter__.return_value = response
        response.status = 204
        response.read.return_value = b""
        with patch.object(broker.urllib.request, "urlopen", return_value=response):
            self.assertEqual(broker.HttpTransport(ENV['SUPABASE_URL'], ENV['SUPABASE_PUBLISHABLE_KEY']).call('/auth/v1/logout', {}, 'synthetic-token'), (204, {}))

    def test_auth_check_only_signs_in_and_out_without_getpass(self):
        transport, output = Transport(), io.StringIO()
        with contextlib.redirect_stdout(output):
            code = broker.main(['auth-check', '--agent-email', 'agent@example.test', '--credential-source', 'keychain'], ENV,
                password_reader=lambda *_: self.fail('getpass forbidden'), keychain=Keychain(), transport_factory=lambda *_: transport)
        self.assertEqual(code, 0)
        self.assertEqual(json.loads(output.getvalue()), {'credential_status': 'KEYCHAIN_READ_OK', 'status': 'AUTH_OK', 'http_status': 200, 'logout_http_status': 204, 'logout_performed': True})
        self.assertEqual([c[0] for c in transport.calls], ['/auth/v1/token?grant_type=password', '/auth/v1/logout'])

    def test_auth_check_reports_only_allowlisted_http_error(self):
        class Denied(Transport):
            def call(self, path, body, bearer=None):
                self.calls.append((path, body, bearer))
                cause = urllib.error.HTTPError('https://example.test', 400, 'private-detail', {}, io.BytesIO(b'{"error_code":"invalid_credentials","msg":"sensitive-password"}'))
                raise broker.BrokerError('private-detail') from cause
        transport, output = Denied(), io.StringIO()
        with contextlib.redirect_stdout(output):
            code = broker.main(['auth-check', '--agent-email', 'agent@example.test', '--credential-source', 'keychain'], ENV, keychain=Keychain(), transport_factory=lambda *_: transport)
        self.assertEqual(code, 1)
        result = json.loads(output.getvalue())
        self.assertEqual(result['status'], 'AUTH_FAILED')
        self.assertEqual(result['http_status'], 400)
        self.assertEqual(result['error_code'], 'AUTH_INVALID_CREDENTIALS')
        self.assertFalse(result['logout_performed'])
        self.assertEqual(len(transport.calls), 1)
        self.assertNotIn('sensitive-password', output.getvalue())
        self.assertNotIn('private-detail', output.getvalue())

    def test_auth_check_unknown_errors_never_echo_remote_text(self):
        class Denied(Transport):
            def call(self, *args):
                raise broker.BrokerError('never-display') from urllib.error.HTTPError('https://example.test', 401, 'private', {}, io.BytesIO(b'{"error_code":"secret-value"}'))
        result = broker.auth_check('agent@example.test', 'synthetic', Denied())
        self.assertEqual(result['error_code'], 'HTTP_ERROR')
        self.assertNotIn('secret-value', json.dumps(result))

    def test_auth_check_logout_failure_is_not_success(self):
        class LogoutFails(Transport):
            def call(self, path, body, bearer=None):
                if path == '/auth/v1/logout':
                    raise broker.BrokerError('private') from urllib.error.URLError('private')
                return super().call(path, body, bearer)
        result = broker.auth_check('agent@example.test', 'synthetic', LogoutFails())
        self.assertEqual(result['status'], 'AUTH_LOGOUT_FAILED')
        self.assertFalse(result['logout_performed'])

    def payload_file(self, payload=PAYLOAD):
        handle = tempfile.NamedTemporaryFile("w", suffix=".json", delete=False, encoding="utf-8")
        json.dump(payload, handle); handle.close(); self.addCleanup(Path(handle.name).unlink)
        return handle.name
    def test_safe_payload_dry_run_never_authenticates(self):
        self.assertEqual(broker.main(["propose", "--payload", self.payload_file(), "--agent-email", "agent@example.test", "--dry-run"], ENV, transport_factory=lambda *_: self.fail("network")), 0)
    def test_credential_payload_is_rejected(self):
        payload = {**PAYLOAD, "description": "token=ghp_" + "x" * 36}
        self.assertEqual(broker.main(["propose", "--payload", self.payload_file(payload), "--agent-email", "agent@example.test", "--dry-run"], ENV), 1)

    def test_module_and_its_kahoot_are_rejected_without_a_manifest(self):
        module = "docs/modules/05-administration-debian-gnu-linux/module-01-presentation.md"
        kahoot = "docs/kahoot/05-administration-debian-gnu-linux-module-01-presentation.md"
        marker = "<!-- TSSR-KAHOOT-V1:%7B%22moduleId%22%3A%22modules%2F05%2Dadministration%2Ddebian%2Dgnu%2Dlinux%2Fmodule%2D01%2Dpresentation.md%22%7D -->"
        payload = {**PAYLOAD, "files": [
            {"file_path": module, "new_content": "# M01", "change_type": "update"},
            {"file_path": kahoot, "new_content": marker, "change_type": "create"},
        ]}
        self.assertEqual(broker.main(["propose", "--payload", self.payload_file(payload), "--agent-email", "agent@example.test", "--dry-run"], ENV), 1)

    def test_multiple_modules_are_rejected_before_authentication(self):
        payload = {**PAYLOAD, "files": [
            {"file_path": "docs/modules/05-administration-debian-gnu-linux/module-01-presentation.md", "new_content": "# M01", "change_type": "update"},
            {"file_path": "docs/modules/05-administration-debian-gnu-linux/module-02-installation.md", "new_content": "# M02", "change_type": "update"},
        ]}
        errors, transport = io.StringIO(), Transport()
        with contextlib.redirect_stderr(errors):
            code = broker.main(["propose", "--payload", self.payload_file(payload), "--agent-email", "agent@example.test", "--credential-source", "keychain"], ENV, keychain=Keychain(error=AssertionError("credential read forbidden")), transport_factory=lambda *_: transport)
        self.assertEqual(code, 1)
        self.assertEqual(json.loads(errors.getvalue()), {"error": "PAYLOAD_GRANULARITY_VIOLATION"})
        self.assertEqual(transport.calls, [])

    def test_independent_non_module_objects_are_rejected_together(self):
        payload = {**PAYLOAD, "files": [
            {"file_path": "docs/tp/reseaux/module-01/tp-a.md", "new_content": "# TP", "change_type": "create"},
            {"file_path": "docs/exercices/exercice-a.md", "new_content": "# Exercice", "change_type": "create"},
        ]}
        with self.assertRaisesRegex(broker.BrokerError, "PAYLOAD_GRANULARITY_VIOLATION"):
            broker.load_payload(self.payload_file(payload))

    def test_course_and_module_cannot_share_one_proposal(self):
        payload = {**PAYLOAD, "files": [
            {"file_path": "docs/modules/05-administration-debian-gnu-linux/index.md", "new_content": "# Debian", "change_type": "update"},
            {"file_path": "docs/modules/05-administration-debian-gnu-linux/module-01-presentation.md", "new_content": "# M01", "change_type": "update"},
        ]}
        with self.assertRaisesRegex(broker.BrokerError, "PAYLOAD_GRANULARITY_VIOLATION"):
            broker.load_payload(self.payload_file(payload))
    def test_success_returns_only_receipt_and_logs_out(self):
        transport = Transport()
        output = io.StringIO()
        with contextlib.redirect_stdout(output):
            self.assertEqual(broker.main(["propose", "--payload", self.payload_file(), "--agent-email", "agent@example.test"], ENV, password_reader=lambda _: "password", transport_factory=lambda *_: transport), 0)
        self.assertEqual(json.loads(output.getvalue()), {"http_status": 201, "change_request_id": "11111111-1111-4111-8111-111111111111", "status": "pending"})
        self.assertNotIn("short-token", output.getvalue())
        self.assertNotIn("password", output.getvalue())
        self.assertNotIn("refresh_token", output.getvalue())
        self.assertEqual([item[0] for item in transport.calls], ["/auth/v1/token?grant_type=password", "/functions/v1/change-requests", "/auth/v1/logout"])
    def test_keychain_credential_source_returns_only_receipt_and_logs_out(self):
        transport, keychain, output = Transport(), Keychain(), io.StringIO()
        with contextlib.redirect_stdout(output):
            self.assertEqual(broker.main(["propose", "--payload", self.payload_file(), "--agent-email", "agent@example.test", "--credential-source", "keychain"], ENV, keychain=keychain, transport_factory=lambda *_: transport), 0)
        self.assertEqual(keychain.reads, ["agent@example.test"])
        self.assertEqual(json.loads(output.getvalue()), {"http_status": 201, "change_request_id": "11111111-1111-4111-8111-111111111111", "status": "pending"})
        self.assertNotIn("keychain-password", output.getvalue())
        self.assertEqual([item[0] for item in transport.calls], ["/auth/v1/token?grant_type=password", "/functions/v1/change-requests", "/auth/v1/logout"])
    def test_keychain_absence_or_error_is_sanitized_without_authentication(self):
        expected = {
            broker.KeychainNotFound: {"error": "KEYCHAIN_ITEM_NOT_FOUND"},
            broker.KeychainError: {"error": "KEYCHAIN_UNAVAILABLE"},
            broker.KeychainAccessDenied: {"error": "KEYCHAIN_ACCESS_DENIED"},
            broker.KeychainEmptySecret: {"error": "KEYCHAIN_EMPTY_SECRET"},
        }
        for error in (error_type("private-detail") for error_type in expected):
            with self.subTest(error=type(error).__name__):
                errors, transport = io.StringIO(), Transport()
                with contextlib.redirect_stderr(errors):
                    self.assertEqual(broker.main(["propose", "--payload", self.payload_file(), "--agent-email", "agent@example.test", "--credential-source", "keychain"], ENV, keychain=Keychain(error=error), transport_factory=lambda *_: transport), 1)
                self.assertEqual(json.loads(errors.getvalue()), expected[type(error)])
                self.assertEqual(transport.calls, [])
                self.assertNotIn("missing", errors.getvalue())
                self.assertNotIn("unavailable", errors.getvalue())
    def test_credential_store_uses_getpass_and_never_renders_secret(self):
        keychain, output = Keychain(), io.StringIO()
        with contextlib.redirect_stdout(output):
            self.assertEqual(broker.main(["credential-store", "--agent-email", "agent@example.test"], ENV, password_reader=lambda _: "stored-password", keychain=keychain), 0)
        self.assertEqual(keychain.stored, [("agent@example.test", "stored-password")])
        self.assertEqual(json.loads(output.getvalue()), {"status": "CREDENTIAL_STORED", "credential_source": "keychain"})
        self.assertNotIn("stored-password", output.getvalue())
    def test_dry_run_with_keychain_never_reads_a_credential(self):
        keychain = Keychain(error=AssertionError("credential read forbidden"))
        self.assertEqual(broker.main(["propose", "--payload", self.payload_file(), "--agent-email", "agent@example.test", "--credential-source", "keychain", "--dry-run"], ENV, keychain=keychain, transport_factory=lambda *_: self.fail("network")), 0)
        self.assertEqual(keychain.reads, [])
    def test_credential_check_is_offline_without_config_or_getpass(self):
        output = io.StringIO()
        with contextlib.redirect_stdout(output):
            code = broker.main(['credential-check', '--agent-email', 'agent@example.test'], {}, keychain=Keychain(),
                password_reader=lambda *_: self.fail('prompt'), transport_factory=lambda *_: self.fail('network'))
        self.assertEqual(code, 0)
        self.assertEqual(json.loads(output.getvalue()), {'status': 'KEYCHAIN_READ_OK', 'secret_nonempty': True})

    def test_store_calls_getpass_once_no_child_process(self):
        calls = []
        def reader(prompt):
            calls.append(prompt)
            return 'synthetic-only'
        with patch('subprocess.run', side_effect=AssertionError('child forbidden')), contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(broker.main(['credential-store', '--agent-email', 'agent@example.test'], {}, password_reader=reader, keychain=Keychain()), 0)
        self.assertEqual(len(calls), 1)

    def test_store_refuses_getpass_echo_fallback(self):
        def reader(_):
            warnings.warn('private-detail', broker.getpass.GetPassWarning)
            self.fail('must stop before unmasked input')
        errors, keychain = io.StringIO(), Keychain()
        with contextlib.redirect_stderr(errors):
            code = broker.main(['credential-store', '--agent-email', 'agent@example.test'], {},
                password_reader=reader, keychain=keychain, transport_factory=lambda *_: self.fail('network'))
        self.assertEqual(code, 1)
        self.assertEqual(json.loads(errors.getvalue()), {'error': 'PASSWORD_INPUT_UNAVAILABLE'})
        self.assertEqual(keychain.stored, [])

    def test_missing_public_config_is_not_reported_as_auth_failure(self):
        for env, code in [({}, 'SUPABASE_URL_MISSING'), ({'SUPABASE_URL': ENV['SUPABASE_URL']}, 'SUPABASE_PUBLISHABLE_KEY_MISSING')]:
            errors = io.StringIO()
            with contextlib.redirect_stderr(errors):
                self.assertEqual(broker.main(['auth-check','--agent-email','agent@example.test','--credential-source','keychain'], env, keychain=Keychain(error=AssertionError('no credential read')), transport_factory=lambda *_: self.fail('network')), 1)
            self.assertEqual(json.loads(errors.getvalue()), {'error': code})

    def test_network_error_normalized(self):
        error = broker.BrokerError('private')
        error.__cause__ = urllib.error.URLError('private')
        self.assertEqual(broker.safe_auth_error(error), {'error_code': 'AUTH_NETWORK_ERROR', 'http_status': None})
        for cause in (TimeoutError('private-detail'), ConnectionError('private-detail')):
            self.assertEqual(broker.safe_auth_error(cause), {'error_code': 'AUTH_NETWORK_ERROR', 'http_status': None})
    def test_http_failures_are_sanitized_and_still_log_out(self):
        for status in (400, 403, 503):
            class Fail(Transport):
                def call(self, path, body, bearer=None):
                    if path == "/functions/v1/change-requests":
                        self.calls.append((path, body, bearer))
                        return status, {"access_token": "short-token", "detail": "password"}
                    return super().call(path, body, bearer)
            transport = Fail()
            errors = io.StringIO()
            with contextlib.redirect_stderr(errors):
                self.assertEqual(broker.main(["propose", "--payload", self.payload_file(), "--agent-email", "agent@example.test"], ENV, password_reader=lambda _: "password", transport_factory=lambda *_: transport), 1)
            self.assertEqual(json.loads(errors.getvalue()), {
                "error": "Operation refused or unavailable.",
                "diagnostic": {
                    "technical_code": "BROKER_HTTP_STATUS", "phase": "response",
                    "exception_class": "BrokerDiagnosticError", "endpoint": "change_requests",
                    "request_emitted": True, "response_received": True, "http_status": status,
                },
            })
            self.assertNotIn("short-token", errors.getvalue())
            self.assertNotIn("password", errors.getvalue())
            self.assertEqual(transport.calls[-1][0], "/auth/v1/logout")
    def test_broker_has_no_token_persistence_or_openai_api(self):
        source = (ROOT / "scripts" / "agent_session_broker.py").read_text(encoding="utf-8").lower()
        self.assertNotIn("openai", source)
        self.assertNotIn("write_text", source)
        self.assertNotIn("write_bytes", source)
        self.assertNotIn("cookie", source)
        self.assertNotIn("service_role", source)
    def test_transport_exception_still_logs_out(self):
        class Fail(Transport):
            def call(self, path, body, bearer=None):
                if path == "/functions/v1/change-requests": raise broker.BrokerError("blocked")
                return super().call(path, body, bearer)
        transport = Fail()
        self.assertEqual(broker.main(["propose", "--payload", self.payload_file(), "--agent-email", "agent@example.test"], ENV, password_reader=lambda _: "password", transport_factory=lambda *_: transport), 1)
        self.assertEqual(transport.calls[-1][0], "/auth/v1/logout")

if __name__ == "__main__": unittest.main()
