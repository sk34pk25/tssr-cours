"""Dry-run diagnostics never authenticate, submit, or render payload contents."""
import contextlib
import io
import json
from pathlib import Path
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
import agent_session_broker_dry_run as dry


class DryRunTests(unittest.TestCase):
    VALID_PAYLOAD = json.dumps({
        'action': 'create', 'title': 'Synthetic',
        'files': [{'file_path': 'docs/x.md', 'new_content': '# x', 'change_type': 'create'}],
    })

    def run_case(self, text, env=None, missing=False):
        with tempfile.TemporaryDirectory() as directory:
            payload = Path(directory) / 'payload.json'
            if not missing:
                payload.write_text(text, encoding='utf-8')
            out, err = io.StringIO(), io.StringIO()
            with patch.object(dry.broker, 'HttpTransport', side_effect=AssertionError('transport forbidden')), \
                 patch.object(dry.broker, 'submit', side_effect=AssertionError('submit forbidden')), \
                 patch.object(dry.broker.getpass, 'getpass', side_effect=AssertionError('password forbidden')), \
                 patch.object(dry.broker.urllib.request, 'urlopen', side_effect=AssertionError('network forbidden')), \
                 contextlib.redirect_stdout(out), contextlib.redirect_stderr(err):
                code = dry.main(['--payload', str(payload)], env={} if env is None else env)
            return code, json.loads(out.getvalue() or err.getvalue())

    def test_missing_config_regression_local_validation_succeeds(self):
        code, result = self.run_case(self.VALID_PAYLOAD)
        self.assertEqual(code, 0)
        self.assertEqual(result['status'], 'DRY_RUN_READY')
        self.assertEqual(result['public_config'], 'NOT_CONFIGURED_NOT_REQUIRED')
        self.assertEqual(result['missing_public_config'], ['SUPABASE_URL', 'SUPABASE_PUBLISHABLE_KEY'])

    def test_valid_config_checked_locally(self):
        code, result = self.run_case(self.VALID_PAYLOAD, {
            'SUPABASE_URL': 'https://abcdefghijklmnopqrst.supabase.co',
            'SUPABASE_PUBLISHABLE_KEY': 'sb_publishable_synthetic'})
        self.assertEqual(code, 0)
        self.assertEqual(result['public_config'], 'VALID_LOCAL_SYNTAX')
        self.assertNotIn('sb_publishable_synthetic', json.dumps(result))

    def test_missing_key_named_without_url_value(self):
        code, result = self.run_case(self.VALID_PAYLOAD, {'SUPABASE_URL':'https://abcdefghijklmnopqrst.supabase.co'})
        self.assertEqual(code, 0)
        self.assertEqual(result['missing_public_config'], ['SUPABASE_PUBLISHABLE_KEY'])

    def test_invalid_config_no_value_reflected(self):
        code, result = self.run_case(self.VALID_PAYLOAD, {
            'SUPABASE_URL':'SYNTHETIC_PRIVATE', 'SUPABASE_PUBLISHABLE_KEY':'SYNTHETIC_PRIVATE'})
        self.assertEqual(code, 1)
        self.assertEqual(result['code'], 'SUPABASE_URL_INVALID')
        self.assertNotIn('SYNTHETIC_PRIVATE', json.dumps(result))

    def test_credential_payload_rejected_without_reflection(self):
        secret = 'ghp_' + 'x' * 36
        code, result = self.run_case(json.dumps({'action':'create', 'description':secret}))
        self.assertEqual(code, 1)
        self.assertEqual(result['code'], 'PAYLOAD_CREDENTIAL_DETECTED')
        self.assertNotIn(secret, json.dumps(result))

    def test_multiple_modules_are_rejected_without_network_or_authentication(self):
        payload = {'action':'create', 'files':[
            {'file_path':'docs/modules/05-administration-debian-gnu-linux/module-01-presentation.md','new_content':'# M01','change_type':'update'},
            {'file_path':'docs/modules/05-administration-debian-gnu-linux/module-02-installation.md','new_content':'# M02','change_type':'update'},
        ]}
        code, result = self.run_case(json.dumps(payload))
        self.assertEqual(code, 1)
        self.assertEqual(result['code'], 'PAYLOAD_GRANULARITY_VIOLATION')

    def test_invalid_json(self):
        code, result = self.run_case('SYNTHETIC_PRIVATE')
        self.assertEqual(code, 1)
        self.assertEqual(result['code'], 'PAYLOAD_JSON_INVALID')
        self.assertNotIn('SYNTHETIC_PRIVATE', json.dumps(result))

    def test_wrong_action(self):
        code, result = self.run_case('{"action":"publish"}')
        self.assertEqual(code, 1)
        self.assertEqual(result['code'], 'PAYLOAD_ACTION_CREATE_REQUIRED')

    def test_missing_file(self):
        code, result = self.run_case('', missing=True)
        self.assertEqual(code, 1)
        self.assertEqual(result['code'], 'PAYLOAD_MISSING_OR_TOO_LARGE')

    def test_unexpected_error_message_not_reflected(self):
        with patch.object(dry.broker, 'load_payload', side_effect=dry.broker.BrokerError('SYNTHETIC_PRIVATE')):
            code, result = self.run_case('{}')
        self.assertEqual(code, 1)
        self.assertEqual(result['code'], 'LOCAL_VALIDATION_UNAVAILABLE')
        self.assertNotIn('SYNTHETIC_PRIVATE', json.dumps(result))


if __name__ == '__main__':
    unittest.main()
