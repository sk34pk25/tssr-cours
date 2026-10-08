"""No real credential or network; opt-in native test uses a disposable item."""
import contextlib
import io
import os
from pathlib import Path
import subprocess
import sys
import unittest
from unittest.mock import patch
import uuid
import select
import time

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
import macos_keychain as keychain


class NativeKeychainTests(unittest.TestCase):
    def test_statuses_are_typed_without_raw_errors(self):
        for status, error in [(-25300, keychain.KeychainNotFound),
                              (-25293, keychain.KeychainAccessDenied),
                              (-25308, keychain.KeychainAccessDenied),
                              (-128, keychain.KeychainAccessDenied),
                              (-999, keychain.KeychainError)]:
            with self.subTest(status=status), self.assertRaises(error):
                keychain.check_status(status)

    @unittest.skipUnless(sys.platform == 'darwin' and os.environ.get('TSSR_TEST_NATIVE_KEYCHAIN') == '1', 'opt-in disposable macOS item')
    def test_real_roundtrip_no_child_process_no_stdio_no_network(self):
        service = 'TSSR_BROKER_TEST_' + uuid.uuid4().hex
        account = 'synthetic@example.invalid'
        adapter = keychain.MacOSKeychain(service=service)
        output, errors = io.StringIO(), io.StringIO()
        try:
            with patch('subprocess.run', side_effect=AssertionError('child forbidden')), \
                 patch('subprocess.Popen', side_effect=AssertionError('child forbidden')), \
                 patch('builtins.input', side_effect=AssertionError('prompt forbidden')), \
                 patch('getpass.getpass', side_effect=AssertionError('prompt forbidden')), \
                 patch('socket.socket', side_effect=AssertionError('network forbidden')), \
                 contextlib.redirect_stdout(output), contextlib.redirect_stderr(errors):
                with self.assertRaises(keychain.KeychainNotFound):
                    adapter.get_password(account)
                for value in ['synthetic-only', '  fictif-é-漢字\n\n']:
                    adapter.store_password(account, value)
                    self.assertEqual(adapter.get_password(account), value)
            self.assertEqual(output.getvalue(), '')
            self.assertEqual(errors.getvalue(), '')
        finally:
            # Only this UUID-qualified disposable fixture, never the AGENT item.
            result = subprocess.run(['/usr/bin/security', 'delete-generic-password', '-s', service, '-a', account], capture_output=True)
            self.assertIn(result.returncode, (0, 44))

    @unittest.skipUnless(sys.platform == 'darwin' and os.environ.get('TSSR_TEST_NATIVE_KEYCHAIN') == '1', 'opt-in disposable macOS item')
    def test_real_credential_store_terminal_has_one_prompt(self):
        import pty
        account = 'broker-test-' + uuid.uuid4().hex + '@example.invalid'
        adapter = keychain.MacOSKeychain()
        with self.assertRaises(keychain.KeychainNotFound):
            adapter.get_password(account)
        script = str(Path(__file__).resolve().parents[1] / 'scripts' / 'agent_session_broker.py')
        pid, fd = pty.fork()
        if pid == 0:
            os.execv(sys.executable, [sys.executable, script, 'credential-store', '--agent-email', account])
        received, sent, finished = b'', False, False
        deadline = time.monotonic() + 10
        try:
            while time.monotonic() < deadline:
                if select.select([fd], [], [], 0.1)[0]:
                    try:
                        chunk = os.read(fd, 4096)
                    except OSError:
                        break
                    if not chunk:
                        break
                    received += chunk
                    if b'(saisie masqu' in received and not sent:
                        os.write(fd, b'synthetic-only-pty\n')
                        sent = True
                done, status = os.waitpid(pid, os.WNOHANG)
                if done:
                    finished = True
                    self.assertEqual(os.waitstatus_to_exitcode(status), 0)
                    break
            self.assertTrue(sent)
            self.assertEqual(received.count(b'Mot de passe AGENT'), 1)
            self.assertNotIn(b'password data for new item', received)
            self.assertNotIn(b'retype password', received)
            self.assertNotIn(b'synthetic-only-pty', received)
            self.assertIn(b'"status": "CREDENTIAL_STORED"', received)
            self.assertEqual(adapter.get_password(account), 'synthetic-only-pty')
        finally:
            if not finished:
                done, _ = os.waitpid(pid, os.WNOHANG)
                if not done:
                    os.kill(pid, 15)
                    os.waitpid(pid, 0)
            os.close(fd)
            result = subprocess.run(['/usr/bin/security', 'delete-generic-password', '-s', keychain.KEYCHAIN_SERVICE, '-a', account], capture_output=True)
            self.assertIn(result.returncode, (0, 44))

    @unittest.skipUnless(sys.platform == 'darwin' and os.environ.get('TSSR_TEST_NATIVE_KEYCHAIN') == '1', 'opt-in disposable macOS item')
    def test_replace_disposable_item_created_by_old_cli(self):
        service = 'TSSR_BROKER_OLD_CLI_' + uuid.uuid4().hex
        account = 'synthetic@example.invalid'
        try:
            result = subprocess.run(['/usr/bin/security', 'add-generic-password', '-U', '-s', service, '-a', account, '-w'],
                input='synthetic-old\nsynthetic-old\n', text=True, capture_output=True, start_new_session=True, timeout=5)
            self.assertEqual(result.returncode, 0)
            adapter = keychain.MacOSKeychain(service=service)
            adapter.store_password(account, 'synthetic-replacement')
            self.assertEqual(adapter.get_password(account), 'synthetic-replacement')
        finally:
            result = subprocess.run(['/usr/bin/security', 'delete-generic-password', '-s', service, '-a', account], capture_output=True)
            self.assertIn(result.returncode, (0, 44))


if __name__ == '__main__':
    unittest.main()
