"""Real PostgreSQL 16 tests. Docker --network none, no ports or host mounts.

Run explicitly: PYTHONDONTWRITEBYTECODE=1 .venv/bin/python tests/maintenance_postgres.py
Never reads a database URL, a Supabase config or any credentials.
"""
import concurrent.futures
from contextlib import contextmanager
import json
import os
from pathlib import Path
import select
import subprocess
import time
import unittest
import uuid

ROOT = Path(__file__).resolve().parents[1]
MIGRATIONS = ROOT / "supabase/migrations"
HISTORICAL = ["20260814130000_collaboration.sql", "20260815120000_course_creation.sql",
              "20260815190000_course_editing.sql", "20260821120000_secure_change_request_rpc.sql"]
GUARD = MIGRATIONS / "20260909120000_collaboration_maintenance.sql"
HARDENING = MIGRATIONS / "20260907120000_publication_hardening.sql"
POST_H = MIGRATIONS / "20260912165830_publication_wrapper_only.sql"
ID = "11111111-1111-4111-8111-111111111111"
PROFILE = "22222222-2222-4222-8222-222222222222"
SHA = "a" * 40
READINESS = json.dumps({"protocol": "tssr-cutover-v1", "external_quiescence": True,
                       "components": {name: {"protocol": "tssr-maintenance-v1", "revision": "b" * 40}
                                      for name in ["change-requests", "admin-users", "publication-status",
                                                   "deploy-docs", "publish-collaboration-pr"]}})
BOOTSTRAP = """
create role anon; create role authenticated; create role service_role bypassrls;
create schema auth;
create table auth.users(id uuid primary key, email text, raw_user_meta_data jsonb default '{}');
create function auth.uid() returns uuid language sql as $$
 select nullif(current_setting('request.jwt.claim.sub',true),'')::uuid $$;
create function auth.role() returns text language sql as $$
 select nullif(current_setting('request.jwt.claim.role',true),'') $$;
grant usage on schema auth to anon, authenticated, service_role;
grant execute on all functions in schema auth to anon, authenticated, service_role;
"""


class MaintenancePostgres(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # Unique disposable container; trust is restricted to an isolated local
        # Unix socket in a container with neither network nor host filesystem.
        cls.container = "tssr-maintenance-test-" + uuid.uuid4().hex[:12]
        subprocess.run(["docker", "run", "--detach", "--network", "none", "--name", cls.container,
                        "--tmpfs", "/var/lib/postgresql/data:rw,size=512m",
                        "-e", "POSTGRES_HOST_AUTH_METHOD=trust", "postgres:16"],
                       check=True, capture_output=True, text=True)
        cls.addClassCleanup(lambda: subprocess.run(["docker", "rm", "--force", cls.container],
                                                  check=True, capture_output=True))
        for _ in range(60):
            # The image's init-only server listens on Unix sockets, then stops.
            # Loopback TCP distinguishes the final server; no host port is opened.
            if subprocess.run(["docker", "exec", cls.container, "pg_isready", "-h", "127.0.0.1", "-U", "postgres"],
                              capture_output=True).returncode == 0:
                break
            time.sleep(0.2)
        else:
            raise AssertionError("Isolated PostgreSQL final server did not become ready")
        info = json.loads(subprocess.check_output(["docker", "inspect", cls.container], text=True))[0]
        assert info["HostConfig"]["NetworkMode"] == "none"
        assert not info["HostConfig"]["PortBindings"]
        assert not info["HostConfig"]["Binds"]
        cls.sql("create database historical;", "postgres")
        cls.sql(BOOTSTRAP, "historical")
        for migration in HISTORICAL:
            cls.sql((MIGRATIONS / migration).read_text(), "historical")
        # The existing production RLS/default grants are approximated explicitly;
        # permission tests still SET ROLE to exercise the actual guarded RPCs.
        cls.sql("grant all on all tables in schema public to service_role; "
                "grant usage, select on all sequences in schema public to service_role;", "historical")
        cls.sql("create database guarded template historical;", "postgres")
        cls.sql(GUARD.read_text(), "guarded")
        cls.sql(GUARD.read_text(), "guarded")  # migration replay must not reopen
        cls.sql("create database complete_stack template guarded;", "postgres")
        cls.sql(HARDENING.read_text(), "complete_stack")
        cls.protect_fixture("complete_stack")
        print("ISOLATION: network=none; ports=none; host mounts=none")
        print(cls.sql("select version();", "guarded").stdout.strip())

    @classmethod
    def protect_fixture(cls, database):
        # Empty synthetic template: preserve generation 1 for existing CAS tests.
        # The real operator transition/order is exercised separately below.
        cls.sql("update private.collaboration_gate set mode='maintenance';", database)
        cls.sql(POST_H.read_text(), database)

    @classmethod
    def sql(cls, query, database, ok=True):
        result = subprocess.run(["docker", "exec", "-i", cls.container, "psql", "-X", "-qAt",
                                 "-v", "ON_ERROR_STOP=1", "-U", "postgres", "-d", database],
                                input=query, text=True, capture_output=True)
        if ok and result.returncode:
            raise AssertionError(result.stderr)
        return result

    def setUp(self):
        self.db = "case_" + uuid.uuid4().hex[:10]
        self.sql(f"create database {self.db} template complete_stack;", "postgres")
        # Each synthetic case is disposable; do not fill the bounded tmpfs as
        # the regression matrix grows. Cleanup targets only this generated DB.
        self.addCleanup(self.sql, f'drop database "{self.db}";', "postgres")
        self.ready(1)
        self.sql("select private.set_collaboration_mode('open',1);", self.db)
        self.sql(f"""
          insert into public.profiles(id,display_name,email,can_edit,must_change_password)
          values ('{PROFILE}','Test Operator','operator@example.invalid',true,false);
          insert into public.change_requests(id,title,author_id,author_display_name,status,base_commit_sha,required_approvers)
          values ('{ID}','Test proposal','{PROFILE}','Test Operator','approved','{SHA}',array['{PROFILE}'::uuid]);
        """, self.db)

    def close(self):
        self.sql("select private.set_collaboration_mode('draining',2);", self.db)

    def ready(self, generation, database=None):
        self.sql(f"select private.confirm_collaboration_readiness({generation},'{READINESS}');", database or self.db)

    def intent(self, mode="direct"):
        self.sql(f"set request.jwt.claim.role='service_role'; select public.service_record_publication_intent('{ID}','{SHA}','{mode}');", self.db)

    def receipt(self, **changes):
        return json.dumps({"change_request_id": ID, "expected_sha": SHA, "commit_sha": SHA,
                           "status": "published", "phase": "deploy", "run_id": "123", "run_attempt": 1,
                           "pr_number": None, "failure_reason": None, **changes})

    def complete(self, receipt=None, ok=True):
        return self.sql(f"set request.jwt.claim.role='service_role'; set role service_role; "
                        f"select public.service_complete_guarded_publication('{ID}','{receipt or self.receipt()}');", self.db, ok)

    def denied(self, query):
        result = self.sql(query, self.db, ok=False)
        self.assertNotEqual(result.returncode, 0)
        self.assertIn("COLLABORATION_MAINTENANCE", result.stderr)

    def claim(self):
        return self.sql(f"select (public.service_claim_change_for_publication('{ID}')).status;", self.db)

    def operation(self, kind="publication"):
        return json.loads(self.sql(f"select public.service_begin_collaboration_operation('{kind}',"
                                  + (f"'{ID}'" if kind == "publication" else "null") + ");", self.db).stdout)["operation_id"]

    def test_open_claim_and_closed_direct_rpcs(self):
        self.assertEqual(self.claim().stdout.strip(), "publishing")
        self.close()
        for query in [
            f"select public.create_change_request('Test','','{SHA}','[]',null,'content_change','{{}}');",
            f"select public.cast_change_vote('{ID}','approved',null);",
            f"select public.cancel_change_request('{ID}');",
            f"select public.service_claim_change_for_publication('{ID}');",
            f"select public.service_reconcile_required_approver('{PROFILE}','{PROFILE}');",
            "select public.service_begin_collaboration_operation('admin',null);",
        ]:
            self.denied(query)
        self.assertEqual(self.sql("select count(*) from public.change_requests;", self.db).stdout.strip(), "1")

    def test_open_create_vote_cancel_real_authenticated_rpcs(self):
        # Two actual Auth/profile identities, no real personal data.
        a = "33333333-3333-4333-8333-333333333333"
        b = "44444444-4444-4444-8444-444444444444"
        self.sql(f"insert into auth.users(id,email) values ('{a}','a@example.invalid'),('{b}','b@example.invalid');"
                 f"update public.profiles set can_edit=true,must_change_password=false where auth_user_id in ('{a}','{b}');", self.db)
        actor = self.sql(f"select id from public.profiles where auth_user_id='{a}';", self.db).stdout.strip()
        # Exclude the fixture approver; the proposal must initially be pending.
        self.sql(f"update public.profiles set can_edit=false where id='{PROFILE}';", self.db)
        create = f"""set request.jwt.claim.role='service_role'; set role service_role;
          select (public.create_change_request('Real RPC test','','{SHA}',
          '[{{"file_path":"docs/test.md","new_content":"# Test","change_type":"create"}}]',
          null,'content_change','{{"_actor_profile_id":"{actor}"}}')).id;"""
        proposal = self.sql(create, self.db).stdout.strip()
        self.sql(f"set request.jwt.claim.sub='{b}'; set request.jwt.claim.role='authenticated'; set role authenticated;"
                 f"select public.cast_change_vote('{proposal}','approved',null);", self.db)
        self.assertEqual(self.sql(f"select status from public.change_requests where id='{proposal}';", self.db).stdout.strip(), "approved")
        self.sql(f"set request.jwt.claim.sub='{a}'; set request.jwt.claim.role='authenticated'; set role authenticated;"
                 f"select public.cancel_change_request('{proposal}');", self.db)
        self.assertEqual(self.sql(f"select status from public.change_requests where id='{proposal}';", self.db).stdout.strip(), "cancelled")

    def test_direct_dml_and_user_permissions(self):
        self.close()
        self.denied(f"update public.change_requests set title='Changed' where id='{ID}';")
        self.denied(f"update public.profiles set can_edit=false where id='{PROFILE}';")
        for role in ["anon", "authenticated", "service_role"]:
            result = self.sql(f"set role {role}; select private.set_collaboration_mode('open',3);", self.db, ok=False)
            self.assertNotEqual(result.returncode, 0)
            result = self.sql(f"set role {role}; update private.collaboration_gate set mode='open';", self.db, ok=False)
            self.assertNotEqual(result.returncode, 0)
        self.denied(f"set role authenticated; select public.cast_change_vote('{ID}','approved',null);")
        self.denied(f"set role authenticated; select public.cancel_change_request('{ID}');")
        self.denied(f"set role service_role; select public.service_claim_change_for_publication('{ID}');")

    def test_missing_state_is_closed(self):
        self.sql("delete from private.collaboration_gate;", self.db)
        self.denied(f"select public.service_claim_change_for_publication('{ID}');")
        self.denied("select public.service_collaboration_state();")
        self.denied(f"update public.profiles set can_edit=false where id='{PROFILE}';")

    def test_existing_authenticated_session_keeps_reads_not_writes(self):
        auth_id = "33333333-3333-4333-8333-333333333333"
        self.sql(f"insert into auth.users(id,email) values ('{auth_id}','reader@example.invalid');", self.db)
        session = f"set request.jwt.claim.sub='{auth_id}'; set request.jwt.claim.role='authenticated'; set role authenticated;"
        before = self.sql(session + "select count(*) from public.change_requests;", self.db).stdout
        self.close()
        after = self.sql(session + "select count(*) from public.change_requests;", self.db).stdout
        self.assertEqual(before, after)
        self.assertEqual(after.strip(), "1")
        self.denied(session + f"select public.cancel_change_request('{ID}');")
        self.sql("select private.set_collaboration_mode('maintenance',3,true);", self.db)
        self.assertEqual(self.sql(session + "select count(*) from public.change_requests;", self.db).stdout, before)

    def test_inert_auth_profile_can_drain_but_cannot_gain_consensus_rights(self):
        self.close()
        auth_id = "33333333-3333-4333-8333-333333333333"
        self.sql(f"insert into auth.users(id,email) values ('{auth_id}','new@example.invalid');", self.db)
        self.assertEqual(self.sql(f"select can_edit from public.profiles where auth_user_id='{auth_id}';", self.db).stdout.strip(), "f")
        self.denied(f"update public.profiles set can_edit=true where auth_user_id='{auth_id}';")
        self.sql("select private.set_collaboration_mode('maintenance',3,true);", self.db)
        self.denied("insert into auth.users(id,email) values ('55555555-5555-4555-8555-555555555555','blocked@example.invalid');")

    def test_claim_before_close_cannot_begin_external_effect(self):
        self.claim()
        self.close()
        self.denied(f"select public.service_begin_collaboration_operation('publication','{ID}');")
        self.sql(f"update public.change_requests set status='failed',failure_reason='Maintenance before IO' where id='{ID}';", self.db)
        self.sql("select private.set_collaboration_mode('maintenance',3,true);", self.db)

    def test_admitted_publication_drain_cleanup_and_worker_tracking(self):
        self.sql(f"insert into public.change_request_files(change_request_id,file_path,change_type,content_encoding,new_content)"
                 f" values ('{ID}','docs/assets/test.pdf','create','base64','dGVzdA==');", self.db)
        self.claim()
        operation = self.operation()
        self.intent()
        self.close()
        self.sql(f"select public.service_check_publication_drain('{ID}');", self.db)
        self.denied(f"update public.change_requests set required_approvers='{{}}' where id='{ID}';")
        self.complete()
        self.assertEqual(self.sql("select new_content is null from public.change_request_files;", self.db).stdout.strip(), "t")
        self.assertNotEqual(self.sql("select private.set_collaboration_mode('maintenance',3,true);", self.db, ok=False).returncode, 0)
        self.sql(f"select public.service_finish_collaboration_operation('{operation}');", self.db)
        self.sql("select private.set_collaboration_mode('maintenance',3,true);", self.db)
        self.denied(f"select public.service_check_publication_drain('{ID}');")

    def test_admin_drain_header_requires_server_role(self):
        operation = self.operation("admin")
        self.close()
        header = json.dumps({"x-tssr-operation": operation})
        self.denied(f"set request.jwt.claim.role='authenticated'; set request.headers='{header}';"
                    f"update public.profiles set can_edit=false where id='{PROFILE}';")
        self.sql(f"set role service_role; set request.jwt.claim.role='service_role'; set request.headers='{header}';"
                 f"update public.profiles set can_edit=false where id='{PROFILE}';"
                 f"select public.service_reconcile_required_approver('{PROFILE}','{PROFILE}');", self.db)
        # Even an admitted administrator cannot start a new publication in drain.
        self.denied(f"set request.jwt.claim.role='service_role'; set request.headers='{header}';"
                    f"select public.service_claim_change_for_publication('{ID}');")
        self.assertNotEqual(self.sql("select private.set_collaboration_mode('maintenance',3,true);", self.db, ok=False).returncode, 0)
        self.sql(f"select public.service_finish_collaboration_operation('{operation}');", self.db)
        self.sql("select private.set_collaboration_mode('maintenance',3,true);", self.db)

    def test_hardening_after_guard_and_callback_during_drain(self):
        # complete_stack was built by applying G then H, not by bypassing readiness.
        self.claim()
        operation = self.operation()
        self.intent()
        self.close()
        receipt = json.dumps({"change_request_id": ID, "expected_sha": SHA, "commit_sha": SHA,
                              "status": "published", "phase": "deploy", "run_id": "123", "run_attempt": 1,
                              "pr_number": None, "failure_reason": None})
        call = f"set request.jwt.claim.role='service_role'; select public.service_complete_guarded_publication('{ID}','{receipt}');"
        result = self.sql(call, self.db)
        self.assertFalse(json.loads(result.stdout)["replayed"])
        self.sql(f"select public.service_finish_collaboration_operation('{operation}');", self.db)
        self.sql("select private.set_collaboration_mode('maintenance',3,true);", self.db)
        self.assertTrue(json.loads(self.sql(call, self.db).stdout)["replayed"])
        self.denied(f"select public.service_claim_change_for_publication('{ID}');")

    def test_sql_claim_transaction_holds_admission_until_close(self):
        with concurrent.futures.ThreadPoolExecutor() as pool:
            claim = pool.submit(self.sql, f"begin; select public.service_claim_change_for_publication('{ID}'); select pg_sleep(1.5); commit;", self.db)
            self.wait_for_sleep()
            start = time.monotonic()
            self.close()
            self.assertGreater(time.monotonic() - start, 0.5)
            claim.result()
        self.denied(f"select public.service_claim_change_for_publication('{ID}');")

    def test_close_wins_race_claim_refuses(self):
        with concurrent.futures.ThreadPoolExecutor() as pool:
            close = pool.submit(self.sql, "begin; select private.set_collaboration_mode('draining',2); select pg_sleep(1.5); commit;", self.db)
            self.wait_for_sleep()
            result = self.sql(f"select public.service_claim_change_for_publication('{ID}');", self.db, ok=False)
            close.result()
        self.assertIn("COLLABORATION_MAINTENANCE", result.stderr)
        self.assertEqual(self.sql("select status from public.change_requests;", self.db).stdout.strip(), "approved")

    def wait_for_sleep(self):
        for _ in range(40):
            count = self.sql("select count(*) from pg_stat_activity where pid<>pg_backend_pid() and wait_event='PgSleep';", self.db).stdout.strip()
            if count != "0": return
            time.sleep(0.02)
        self.fail("Concurrent SQL session never reached test barrier")

    @contextmanager
    def transaction_session(self, isolation="read committed"):
        """Separate psql connection, explicit acknowledgement; no timing race."""
        process = subprocess.Popen(
            ["docker", "exec", "-i", self.container, "psql", "-X", "-qAt",
             "-v", "ON_ERROR_STOP=1", "-v", "VERBOSITY=verbose",
             "-U", "postgres", "-d", self.db],
            stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        try:
            self.session_barrier(process, f"begin isolation level {isolation}; "
                                 "set local statement_timeout='8s'; set local lock_timeout='5s'; "
                                 "set local request.jwt.claim.role='service_role'; set local role service_role;")
            yield process
        finally:
            if process.poll() is None:
                process.communicate(b"rollback;\n", timeout=12)
            for stream in (process.stdin, process.stdout, process.stderr):
                if not stream.closed:
                    stream.close()

    def session_barrier(self, process, query):
        marker = "barrier_" + uuid.uuid4().hex
        process.stdin.write((query + "\n\\echo " + marker + "\n").encode())
        process.stdin.flush()
        output = b""
        deadline = time.monotonic() + 10
        while marker.encode() not in output:
            remaining = deadline - time.monotonic()
            self.assertGreater(remaining, 0, "SQL barrier timed out")
            ready, _, _ = select.select([process.stdout], [], [], remaining)
            self.assertTrue(ready, "SQL barrier timed out")
            chunk = os.read(process.stdout.fileno(), 4096)
            self.assertTrue(chunk, "SQL session ended before barrier")
            output += chunk
        return output.decode()

    def test_admission_snapshot_is_safe_at_both_isolation_levels(self):
        first = True
        for isolation in ("read committed", "repeatable read"):
            for bind_intent in (False, True):
                for statuses in (("conflict",), ("published",), ("failed",), ("conflict", "published")):
                    with self.subTest(isolation=isolation, intent=bind_intent, statuses=statuses):
                        if not first:
                            self.setUp()
                        first = False
                        try:
                            self.claim()
                            with self.transaction_session(isolation) as stale:
                                before = self.session_barrier(stale,
                                    f"select status, publication_expected_sha is null from public.change_requests where id='{ID}';")
                                self.assertIn("publishing|t", before)
                                # T1's snapshot exists. T2 commits real admission before T1 writes.
                                self.sql("begin; set local role service_role; "
                                    "set local request.jwt.claim.role='service_role'; "
                                    f"select public.service_begin_collaboration_operation('publication','{ID}'); "
                                    + (f"select public.service_record_publication_intent('{ID}','{SHA}','direct'); " if bind_intent else "")
                                    + "commit;", self.db)
                                self.assertEqual(self.sql('select generation from private.collaboration_gate;', self.db).stdout.strip(), '2')
                                writes = "".join(f"update public.change_requests set status='{status}' where id='{ID}';" for status in statuses)
                                _, error = stale.communicate((writes + "commit;\n").encode(), timeout=12)
                                self.assertNotEqual(stale.returncode, 0, "Stale admission snapshot accepted forbidden transition")
                                self.assertIn(b"40001" if isolation == "repeatable read" else b"bound publication permit", error)
                            self.assertEqual(self.sql('select status from public.change_requests;', self.db).stdout.strip(), 'publishing')
                            self.assertEqual(self.sql('select count(*) from private.collaboration_operations;', self.db).stdout.strip(), '1')
                        finally:
                            self.doCleanups()

    def wait_for_lock(self, application_name):
        deadline = time.monotonic() + 8
        while time.monotonic() < deadline:
            count = self.sql(f"select count(*) from pg_catalog.pg_stat_activity "
                f"where datname=current_database() and application_name='{application_name}' "
                "and wait_event_type='Lock';", self.db).stdout.strip()
            if count == '1':
                return
            time.sleep(0.02)
        self.fail('Concurrent connection did not reach the expected lock barrier')

    def test_two_admissions_serialize_and_keep_one_permit(self):
        for index, isolation in enumerate(('read committed', 'repeatable read')):
            with self.subTest(isolation=isolation):
                if index:
                    self.setUp()
                try:
                    self.claim()
                    with self.transaction_session(isolation) as first:
                        self.session_barrier(first, f"select public.service_begin_collaboration_operation('publication','{ID}');")
                        name = 'admission_' + uuid.uuid4().hex
                        with concurrent.futures.ThreadPoolExecutor() as pool:
                            second = pool.submit(self.sql,
                                f"begin isolation level {isolation}; set local application_name='{name}'; "
                                "set local statement_timeout='8s'; set local role service_role; "
                                f"select status from public.change_requests where id='{ID}'; "
                                f"select public.service_begin_collaboration_operation('publication','{ID}'); commit;", self.db, False)
                            self.wait_for_lock(name)
                            first.communicate(b"commit;\n", timeout=12)
                            self.assertEqual(first.returncode, 0)
                            result = second.result(timeout=12)
                        self.assertNotEqual(result.returncode, 0)
                        self.assertIn('could not serialize' if isolation == 'repeatable read' else 'duplicate key', result.stderr)
                    self.assertEqual(self.sql('select count(*) from private.collaboration_operations;', self.db).stdout.strip(), '1')
                    self.intent()
                    self.assertFalse(json.loads(self.complete().stdout)['replayed'])
                finally:
                    self.doCleanups()

    def test_admission_and_draining_serialize_in_both_orders(self):
        for index, close_first in enumerate((False, True)):
            with self.subTest(close_first=close_first):
                if index:
                    self.setUp()
                try:
                    self.claim()
                    with self.transaction_session() as first:
                        self.session_barrier(first,
                            "reset role; select private.set_collaboration_mode('draining',2);" if close_first else
                            f"select public.service_begin_collaboration_operation('publication','{ID}');")
                        name = 'drain_' + uuid.uuid4().hex
                        with concurrent.futures.ThreadPoolExecutor() as pool:
                            second = pool.submit(self.sql,
                                f"set application_name='{name}'; set statement_timeout='8s'; " +
                                (f"set role service_role; select public.service_begin_collaboration_operation('publication','{ID}');" if close_first
                                 else "select private.set_collaboration_mode('draining',2);"), self.db, False)
                            self.wait_for_lock(name)
                            first.communicate(b"commit;\n", timeout=12)
                            self.assertEqual(first.returncode, 0)
                            result = second.result(timeout=12)
                        if close_first:
                            self.assertNotEqual(result.returncode, 0)
                            self.assertIn('COLLABORATION_MAINTENANCE', result.stderr)
                        else:
                            self.assertEqual(result.returncode, 0, result.stderr)
                            self.intent()
                            self.assertFalse(json.loads(self.complete().stdout)['replayed'])
                    self.assertEqual(self.sql('select count(*) from private.collaboration_operations;', self.db).stdout.strip(), '0' if close_first else '1')
                    self.assertEqual(self.sql('select mode from private.collaboration_gate;', self.db).stdout.strip(), 'draining')
                finally:
                    self.doCleanups()

    def test_repeatable_read_cannot_reuse_stale_open_snapshot(self):
        with concurrent.futures.ThreadPoolExecutor() as pool:
            stale = pool.submit(self.sql, f"begin isolation level repeatable read; select mode from private.collaboration_gate;"
                                f" select pg_sleep(1.5); select public.service_claim_change_for_publication('{ID}'); commit;", self.db, False)
            self.wait_for_sleep()
            self.close()
            result = stale.result()
        self.assertIn("COLLABORATION_MAINTENANCE", result.stderr)
        self.assertEqual(self.sql("select status from public.change_requests;", self.db).stdout.strip(), "approved")

    def test_effective_maintenance_requires_explicit_external_quiescence(self):
        self.close()
        denied = self.sql("select private.set_collaboration_mode('maintenance',3);", self.db, ok=False)
        self.assertIn("External quiescence not confirmed", denied.stderr)
        self.sql("select private.set_collaboration_mode('maintenance',3,true);", self.db)
        self.assertNotEqual(self.sql("select private.set_collaboration_mode('open',3);", self.db, ok=False).returncode, 0)
        self.ready(4)
        self.sql("select private.set_collaboration_mode('open',4);", self.db)
        self.assertEqual(self.claim().stdout.strip(), "publishing")

    def test_normal_migration_order_also_preserves_rpc_guards(self):
        database = "ordered_" + uuid.uuid4().hex[:10]
        self.sql(f"create database {database} template historical;", "postgres")
        self.sql((MIGRATIONS / "20260907120000_publication_hardening.sql").read_text(), database)
        self.sql(GUARD.read_text(), database)
        result = self.sql(f"select public.service_claim_change_for_publication('{ID}');", database, ok=False)
        self.assertIn("COLLABORATION_MAINTENANCE", result.stderr)

    def test_readiness_rejects_historical_partial_missing_and_stale_protocol(self):
        for variant in ('historical','partial','missing_rpc','missing_receipt','bad_protocol','disabled_trigger','missing_grant'):
            db = 'readiness_' + uuid.uuid4().hex[:10]
            self.sql(f'create database {db} template guarded;', 'postgres')
            if variant == 'partial':
                self.sql('alter table public.change_requests add publication_expected_sha text;', db)
            elif variant in ('missing_rpc','missing_receipt','bad_protocol','disabled_trigger','missing_grant'):
                self.sql(HARDENING.read_text(), db)
                self.protect_fixture(db)
                if variant == 'missing_rpc':
                    self.sql('drop function public.service_complete_publication(uuid,jsonb);', db)
                elif variant == 'disabled_trigger':
                    self.sql('alter table public.profiles disable trigger profile_metadata_single_line;',db)
                elif variant == 'missing_grant':
                    self.sql('revoke execute on function public.service_complete_guarded_publication(uuid,jsonb) from service_role;',db)
                elif variant == 'bad_protocol':
                    bad = READINESS.replace('tssr-cutover-v1','unsupported')
                    self.assertNotEqual(self.sql(f"select private.confirm_collaboration_readiness(1,'{bad}');",db,False).returncode,0)
            result = self.sql("select private.set_collaboration_mode('open',1);", db,False)
            self.assertIn('COLLABORATION_PROTOCOL_NOT_READY',result.stderr)
            self.assertIn(self.sql('select mode from private.collaboration_gate;',db).stdout.strip(),('draining','maintenance'))
        self.close()
        self.assertNotEqual(self.sql("select private.set_collaboration_mode('open',3);",self.db,False).returncode,0)
        self.ready(3)
        self.sql("select private.set_collaboration_mode('open',3);",self.db)
        self.sql('drop function public.service_complete_publication(uuid,jsonb);',self.db)
        self.assertIn('COLLABORATION_PROTOCOL_NOT_READY',self.sql(f"select public.service_claim_change_for_publication('{ID}');",self.db,False).stderr)

    def test_missing_gate_forbids_reopening_and_new_mutations(self):
        self.sql('delete from private.collaboration_gate;',self.db)
        self.denied("select private.set_collaboration_mode('open',2);")
        self.denied("select public.service_begin_collaboration_operation('admin',null);")
        self.denied(f"select public.cast_change_vote('{ID}','approved',null);")

    def test_bound_first_callback_without_gate_cleanup_and_exact_replay(self):
        self.sql(f"insert into public.change_request_files(change_request_id,file_path,change_type,content_encoding,new_content) "
                 f"values ('{ID}','docs/assets/test.pdf','create','base64','dGVzdA==');",self.db)
        self.claim()
        op = self.operation()
        self.intent()
        self.sql(f"select public.service_finish_collaboration_operation('{op}');",self.db)
        self.sql('delete from private.collaboration_gate;',self.db)
        self.assertFalse(json.loads(self.complete().stdout)['replayed'])
        snapshot = self.sql("select row_to_json(c) from public.change_requests c; select count(*) from public.audit_logs;",self.db).stdout
        self.assertTrue(json.loads(self.complete().stdout)['replayed'])
        self.assertEqual(snapshot,self.sql("select row_to_json(c) from public.change_requests c; select count(*) from public.audit_logs;",self.db).stdout)
        self.assertEqual(self.sql('select new_content is null from public.change_request_files;',self.db).stdout.strip(),'t')
        self.assertEqual(self.sql('select count(*) from private.collaboration_terminal_context;',self.db).stdout.strip(),'0')
        self.assertNotEqual(self.complete(self.receipt(status='failed'),False).returncode,0)

    def test_callback_no_permit_or_unbound_permit_never_bypasses_gate(self):
        self.claim()
        self.sql('delete from private.collaboration_gate;',self.db)
        self.assertNotEqual(self.complete(ok=False).returncode,0)
        # An operation alone is not an intent binding.
        self.sql(f"insert into private.collaboration_operations(kind,change_id,generation) values ('publication','{ID}',2);",self.db)
        self.assertNotEqual(self.complete(ok=False).returncode,0)
        self.assertEqual(self.sql('select status from public.change_requests;',self.db).stdout.strip(),'publishing')

    def test_permit_cannot_be_downgraded_to_legacy_with_direct_dml(self):
        self.claim(); self.operation()
        self.assertNotEqual(self.sql(f"update public.change_requests set status='published' where id='{ID}';",self.db,False).returncode,0)
        self.intent()
        self.assertNotEqual(self.sql(f"set role service_role; update public.change_requests set publication_expected_sha=null,publication_mode=null where id='{ID}';",self.db,False).returncode,0)
        self.close()
        for assignment in ["publication_expected_sha=null,publication_mode=null", "publication_mode='pull_request'",
                           "publication_expected_sha='"+'c'*40+"'", "status='published'", "status='failed'"]:
            self.assertNotEqual(self.sql(f"set role service_role; update public.change_requests set {assignment} where id='{ID}';",self.db,False).returncode,0)
        self.assertEqual(self.sql('select status from public.change_requests;',self.db).stdout.strip(),'publishing')
        self.assertFalse(json.loads(self.complete().stdout)['replayed'])

    def test_b1_modern_identity_forbids_indirect_terminal_transitions(self):
        self.claim(); self.operation(); self.intent()
        for status in ('pending', 'approved', 'rejected', 'cancelled', 'conflict', 'failed', 'published'):
            with self.subTest(status=status):
                result = self.sql(f"set role service_role; update public.change_requests set status='{status}' where id='{ID}';", self.db, False)
                self.assertNotEqual(result.returncode, 0)
        # Owner-only fault fixture: also defend an intermediate state left by an
        # older bug. This is not an application capability or a recovery path.
        self.sql(f"alter table public.change_requests disable trigger collaboration_maintenance_guard; "
                 f"update public.change_requests set status='conflict' where id='{ID}'; "
                 "alter table public.change_requests enable trigger collaboration_maintenance_guard;", self.db)
        for status in ('published', 'failed', 'publishing', 'approved'):
            self.assertNotEqual(self.sql(f"set role service_role; update public.change_requests set status='{status}' where id='{ID}';", self.db, False).returncode, 0)

    def test_b2_terminal_result_is_immutable_and_replay_is_strict(self):
        self.claim(); self.operation(); self.intent(); self.complete()
        self.assertNotEqual(self.sql(f"set role service_role; update public.change_requests set status='failed' where id='{ID}';", self.db, False).returncode, 0)
        self.sql(f"alter table public.change_requests disable trigger collaboration_maintenance_guard; "
                 f"update public.change_requests set status='failed' where id='{ID}'; "
                 "alter table public.change_requests enable trigger collaboration_maintenance_guard;", self.db)
        self.assertNotEqual(self.complete(ok=False).returncode, 0)

    def test_b1_prepermit_errors_and_unbound_permit(self):
        for terminal in ('conflict', 'failed'):
            self.setUp(); self.claim()
            self.sql(f"set role service_role; update public.change_requests set status='{terminal}',failure_reason='Before IO' where id='{ID}';", self.db)
            self.assertEqual(self.sql('select status from public.change_requests;', self.db).stdout.strip(), terminal)
        self.setUp(); self.claim(); self.operation()  # permit without SHA is modern too
        for status in ('conflict', 'failed', 'published'):
            self.assertNotEqual(self.sql(f"set role service_role; update public.change_requests set status='{status}' where id='{ID}';", self.db, False).returncode, 0)

    def test_b1_identity_insert_delete_and_rekey_are_not_alternate_paths(self):
        self.claim(); self.operation(); self.intent()
        for query in [f"delete from public.change_requests where id='{ID}';",
                      f"update public.change_requests set id='{PROFILE}' where id='{ID}';",
                      "alter table public.change_requests disable trigger collaboration_maintenance_guard;",
                      "update private.collaboration_operations set terminal_state='{}';"]:
            self.assertNotEqual(self.sql('set role service_role; '+query, self.db, False).returncode, 0)
        for column, value in [('publication_expected_sha',f"'{SHA}'"),('publication_mode',"'direct'"),
                              ('publication_callback',f"'{self.receipt()}'")]:
            self.assertNotEqual(self.sql(f"set role service_role; insert into public.change_requests(id,title,author_id,author_display_name,status,base_commit_sha,required_approvers,{column}) "
                f"values ('{PROFILE}','Synthetic','{PROFILE}','Test','published','{SHA}',array['{PROFILE}'::uuid],{value});", self.db, False).returncode, 0)

    def test_b2_all_terminal_fields_frozen_for_success_and_failure(self):
        for final in ('published', 'failed'):
            self.setUp(); self.claim(); self.operation(); self.intent()
            receipt = self.receipt(status=final, failure_reason='Test failure' if final=='failed' else None)
            self.complete(receipt)
            before = self.sql('select row_to_json(c) from public.change_requests c;', self.db).stdout
            for assignment in ["status='publishing'", "status='conflict'", "status='cancelled'",
                               f"status='{'failed' if final=='published' else 'published'}'",
                               "publication_callback=null", "publication_callback='{}'",
                               "publication_expected_sha=null", "publication_mode='pull_request'",
                               f"published_commit_sha='{'c'*40}'", "github_pr_number=9",
                               "published_at=now()+interval '1 hour'", "failure_reason='Tampered'"]:
                with self.subTest(final=final, assignment=assignment):
                    self.assertNotEqual(self.sql(f"set role service_role; update public.change_requests set {assignment} where id='{ID}';", self.db, False).returncode, 0)
            self.assertEqual(before, self.sql('select row_to_json(c) from public.change_requests c;', self.db).stdout)
            self.assertTrue(json.loads(self.complete(receipt).stdout)['replayed'])

    def test_b2_snapshot_rejects_corrupt_fixture_fields_without_writes(self):
        assignments = ["status='failed'",f"published_commit_sha='{'c'*40}'", "github_pr_number=7",
                       "publication_mode='pull_request'",f"publication_expected_sha='{'c'*40}'",
                       "publication_callback=null", "failure_reason='Corrupt fixture'",
                       "published_at=published_at+interval '1 second'"]
        for assignment in assignments:
            with self.subTest(assignment=assignment):
                self.setUp(); self.claim(); self.operation(); self.intent(); self.complete()
                # Superuser fault injection, NEVER a normal application capability.
                self.sql(f"alter table public.change_requests disable trigger collaboration_maintenance_guard; "
                    f"update public.change_requests set {assignment} where id='{ID}'; "
                    "alter table public.change_requests enable trigger collaboration_maintenance_guard;", self.db)
                before = self.sql('select row_to_json(c) from public.change_requests c; select count(*) from public.audit_logs;', self.db).stdout
                self.assertNotEqual(self.complete(ok=False).returncode, 0)
                self.assertEqual(before, self.sql('select row_to_json(c) from public.change_requests c; select count(*) from public.audit_logs;', self.db).stdout)

    def test_b2_pr_outcomes_and_timezone_replay_match_h_semantics(self):
        for final,phase in [('published','deploy'),('failed','deploy'),('failed','pr-validation')]:
            self.setUp(); self.claim(); self.operation(); self.intent('pull_request')
            self.sql(f"set role service_role; update public.change_requests set github_pr_number=7 where id='{ID}';", self.db)
            actual = SHA if phase=='pr-validation' else 'b'*40
            receipt=self.receipt(status=final,phase=phase,commit_sha=actual,pr_number=7,
                                 failure_reason='Test PR failure' if final=='failed' else None)
            self.complete(receipt)
            self.assertEqual(self.sql('select published_commit_sha from public.change_requests;', self.db).stdout.strip(), actual if final=='published' else SHA)
            before=self.sql('select row_to_json(c) from public.change_requests c; select count(*) from public.audit_logs;', self.db).stdout
            self.sql('delete from private.collaboration_gate;', self.db)
            result=self.sql(f"set timezone='Pacific/Auckland'; set request.jwt.claim.role='service_role'; set role service_role; "
                            f"select public.service_complete_guarded_publication('{ID}','{receipt}');", self.db)
            self.assertTrue(json.loads(result.stdout)['replayed'])
            self.assertEqual(before,self.sql('select row_to_json(c) from public.change_requests c; select count(*) from public.audit_logs;', self.db).stdout)

    def test_b2_concurrent_identical_callbacks_write_once(self):
        self.claim(); self.operation(); self.intent()
        with concurrent.futures.ThreadPoolExecutor() as pool:
            results=list(pool.map(lambda _: json.loads(self.complete().stdout)['replayed'],range(2)))
        self.assertEqual(sorted(results),[False,True])
        self.assertEqual(self.sql("select count(*) from public.audit_logs where action='publication_succeeded';",self.db).stdout.strip(),'1')
        self.assertEqual(self.sql('select count(*) from private.collaboration_terminal_context;',self.db).stdout.strip(),'0')

    def test_direct_h_execute_is_unavailable_to_application_roles(self):
        self.claim(); self.operation(); self.intent()
        for role in ('anon', 'authenticated', 'service_role'):
            with self.subTest(role=role):
                permission = self.sql(f"select has_function_privilege('{role}', "
                    "'public.service_complete_publication(uuid,jsonb)', 'EXECUTE');", self.db).stdout.strip()
                self.assertEqual(permission, 'f')
                result = self.sql(f"set role {role}; set request.jwt.claim.role='{role}'; "
                    f"select public.service_complete_publication('{ID}','{self.receipt()}');", self.db, False)
                self.assertIn('permission denied for function service_complete_publication', result.stderr)
        self.assertFalse(json.loads(self.complete().stdout)['replayed'])
        snapshot = self.sql('select row_to_json(c) from public.change_requests c; select count(*) from public.audit_logs;', self.db).stdout
        self.assertTrue(json.loads(self.complete().stdout)['replayed'])
        self.assertEqual(snapshot, self.sql('select row_to_json(c) from public.change_requests c; select count(*) from public.audit_logs;', self.db).stdout)
        # Owner is the explicit trust boundary, used only to create a corrupt fixture.
        self.sql("alter table public.change_requests disable trigger collaboration_maintenance_guard; "
                 "update public.change_requests set status='failed'; "
                 "alter table public.change_requests enable trigger collaboration_maintenance_guard;", self.db)
        self.assertIn('Contradictory terminal', self.complete(ok=False).stderr)
        result = self.sql(f"set role service_role; set request.jwt.claim.role='service_role'; "
            f"select public.service_complete_publication('{ID}','{self.receipt()}');", self.db, False)
        self.assertIn('permission denied for function service_complete_publication', result.stderr)

    def test_post_h_real_order_permissions_replay_and_definition_unchanged(self):
        db = 'post_h_' + uuid.uuid4().hex[:10]
        self.sql(f'create database {db} template guarded;', 'postgres')
        self.addCleanup(self.sql, f'drop database "{db}";', 'postgres')
        # Real closed G -> operator maintenance -> H -> post-H; no generation shortcut.
        self.sql("select private.set_collaboration_mode('maintenance',1,true);", db)
        self.assertNotEqual(self.sql(POST_H.read_text(), db, False).returncode, 0)  # H absent
        self.sql(HARDENING.read_text(), db)
        definition_query = "select pg_get_functiondef('public.service_complete_publication(uuid,jsonb)'::regprocedure);"
        definition_before = self.sql(definition_query, db).stdout
        acl_query = "select r,has_function_privilege(r,'public.service_complete_publication(uuid,jsonb)','EXECUTE') " \
                    "from unnest(array['anon','authenticated','service_role']) r;"
        self.assertEqual(self.sql(acl_query, db).stdout.strip(), 'anon|f\nauthenticated|f\nservice_role|t')
        self.assertIn('COLLABORATION_PROTOCOL_NOT_READY', self.sql(
            f"select private.confirm_collaboration_readiness(2,'{READINESS}');", db, False).stderr)
        self.assertIn('COLLABORATION_PROTOCOL_NOT_READY', self.sql(
            "select private.set_collaboration_mode('open',2);", db, False).stderr)
        self.sql(POST_H.read_text(), db)
        self.assertEqual(self.sql(acl_query, db).stdout.strip(), 'anon|f\nauthenticated|f\nservice_role|f')
        self.assertEqual(self.sql(definition_query, db).stdout, definition_before)
        self.assertEqual(self.sql("select count(*) from pg_proc p, lateral aclexplode(p.proacl) a "
            "where p.oid='public.service_complete_publication(uuid,jsonb)'::regprocedure "
            "and a.grantee=0 and a.privilege_type='EXECUTE';", db).stdout.strip(), '0')
        self.assertEqual(self.sql("select has_function_privilege(proowner, "
            "'public.service_complete_publication(uuid,jsonb)','EXECUTE') from pg_proc "
            "where oid='public.service_complete_guarded_publication(uuid,jsonb)'::regprocedure;", db).stdout.strip(), 't')
        # Reapply only post-H/G, never H: preserve body, ACLs, gate and audit count.
        snapshot_query = 'select row_to_json(g) from private.collaboration_gate g; select count(*) from public.audit_logs;'
        snapshot = self.sql(snapshot_query, db).stdout
        self.sql(POST_H.read_text(), db)
        self.sql(GUARD.read_text(), db)
        self.assertEqual(self.sql(snapshot_query, db).stdout, snapshot)
        self.assertEqual(self.sql(acl_query, db).stdout.strip(), 'anon|f\nauthenticated|f\nservice_role|f')
        self.ready(2, db)
        self.sql("select private.set_collaboration_mode('open',2);", db)

    def test_post_h_requires_maintenance_and_completed_drain(self):
        self.assertIn('requires maintenance', self.sql(POST_H.read_text(), self.db, False).stderr)
        self.claim(); operation = self.operation(); self.intent()
        self.sql("update private.collaboration_gate set mode='maintenance';", self.db)  # Owner fault fixture only.
        self.assertIn('completed drain', self.sql(POST_H.read_text(), self.db, False).stderr)
        self.assertFalse(json.loads(self.complete().stdout)['replayed'])
        # Terminal callback is not proof of worker completion.
        self.assertIn('completed drain', self.sql(POST_H.read_text(), self.db, False).stderr)
        self.sql(f"select public.service_finish_collaboration_operation('{operation}');", self.db)
        self.sql(POST_H.read_text(), self.db)
        self.assertTrue(json.loads(self.complete().stdout)['replayed'])

    def test_readiness_rejects_reintroduced_direct_h_grants(self):
        for role in ('public', 'anon', 'authenticated', 'service_role'):
            with self.subTest(role=role):
                self.sql(f'grant execute on function public.service_complete_publication(uuid,jsonb) to {role};', self.db)
                result = self.sql("set role service_role; select public.service_collaboration_state();", self.db, False)
                self.assertIn('COLLABORATION_PROTOCOL_NOT_READY', result.stderr)
                result = self.sql("set role service_role; select public.service_begin_collaboration_operation('admin',null);", self.db, False)
                self.assertIn('COLLABORATION_PROTOCOL_NOT_READY', result.stderr)
                self.sql(f'revoke execute on function public.service_complete_publication(uuid,jsonb) from {role};', self.db)
        self.assertEqual(self.sql('select count(*) from private.collaboration_operations;', self.db).stdout.strip(), '0')
        # Restoring reviewed ACLs is not an automatic opening: here gate was already open.
        self.sql('select public.service_collaboration_state();', self.db)

    def test_callback_rejects_wrong_identity_and_unwrapped_rpc_in_open(self):
        self.claim(); self.operation(); self.intent()
        for changes in ({'expected_sha':'c'*40},{'commit_sha':'c'*40},{'change_request_id':PROFILE},
                        {'pr_number':42},{'phase':'pr-validation'},{'status':'approved'}):
            self.assertNotEqual(self.complete(self.receipt(**changes),False).returncode,0)
        call=f"set request.jwt.claim.role='service_role'; set role service_role; select public.service_complete_publication('{ID}','{self.receipt()}');"
        self.assertIn('permission denied for function service_complete_publication',self.sql(call,self.db,False).stderr)
        self.assertNotEqual(self.sql(f"set role service_role; insert into private.collaboration_terminal_context values (txid_current(),'{self.receipt()}');",self.db,False).returncode,0)
        self.sql(f"update private.collaboration_operations set publication_mode='pull_request' where change_id='{ID}';",self.db)
        self.assertNotEqual(self.complete(ok=False).returncode,0)
        self.assertEqual(self.sql('select count(*) from private.collaboration_terminal_context;',self.db).stdout.strip(),'0')

    def test_terminal_callback_works_with_gate_reader_throwing_or_maintenance(self):
        self.claim(); self.operation(); self.intent()
        self.sql("create or replace function private.collaboration_state() returns private.collaboration_gate "
                 "language plpgsql as $$ begin raise exception 'state unavailable'; end $$;",self.db)
        self.assertFalse(json.loads(self.complete().stdout)['replayed'])
        self.assertNotEqual(self.sql("select public.service_begin_collaboration_operation('admin',null);",self.db,False).returncode,0)

    def test_first_terminal_callback_in_maintenance_is_not_new_admission(self):
        self.claim(); self.operation(); self.intent()
        # Fault injection only: normal transition refuses maintenance while publishing.
        self.sql("update private.collaboration_gate set mode='maintenance';",self.db)
        self.denied("select public.service_begin_collaboration_operation('admin',null);")
        self.assertFalse(json.loads(self.complete().stdout)['replayed'])

    def test_failed_terminal_callback_without_gate_is_bound_and_idempotent(self):
        self.claim(); self.operation(); self.intent()
        self.sql('delete from private.collaboration_gate;',self.db)
        failed=self.receipt(status='failed',failure_reason='Isolated test failure')
        self.assertFalse(json.loads(self.complete(failed).stdout)['replayed'])
        self.assertTrue(json.loads(self.complete(failed).stdout)['replayed'])
        self.assertNotEqual(self.complete(ok=False).returncode,0)

    def test_historical_rpc_client_drain_after_first_install(self):
        db='legacy_'+uuid.uuid4().hex[:10]
        self.sql(f'create database {db} template historical;','postgres')
        self.sql(f"insert into public.profiles(id,display_name,email,can_edit,must_change_password) "
                 f"values ('{PROFILE}','Test','test@example.invalid',true,false);"
                 f"insert into public.change_requests(id,title,author_id,author_display_name,status,base_commit_sha,required_approvers) "
                 f"values ('{ID}','Test','{PROFILE}','Test','approved','{SHA}',array['{PROFILE}'::uuid]);"
                 f"select public.service_claim_change_for_publication('{ID}');",db)
        self.sql(GUARD.read_text(),db)
        # These are the unchanged RPC names used by historical Edge/browser clients.
        for rpc in [f"service_claim_change_for_publication('{ID}')",f"cancel_change_request('{ID}')",
                    f"cast_change_vote('{ID}','approved',null)",f"service_reconcile_required_approver('{PROFILE}','{PROFILE}')"]:
            self.assertIn('COLLABORATION_MAINTENANCE',self.sql(f'select public.{rpc};',db,False).stderr)
        # The historical callback path remains valid during bootstrap drain;
        # no invented operation or H attestation is required or created.
        self.sql(f"set role service_role; update public.change_requests set status='published',published_commit_sha='{SHA}',published_at=now() "
                 f"where id='{ID}' and status='publishing';",db)
        self.assertEqual(self.sql('select count(*) from private.collaboration_operations;',db).stdout.strip(),'0')
        self.sql("select private.set_collaboration_mode('maintenance',1,true);",db)

    def test_full_readiness_also_opens_hardening_then_guard_order(self):
        db='hg_'+uuid.uuid4().hex[:10]
        self.sql(f'create database {db} template historical;','postgres')
        self.sql(HARDENING.read_text(),db); self.sql(GUARD.read_text(),db)
        self.protect_fixture(db)
        self.ready(1,db)
        self.sql("select private.set_collaboration_mode('open',1);",db)
        self.assertEqual(self.sql('select mode from private.collaboration_gate;',db).stdout.strip(),'open')

    def test_readiness_receipt_is_owner_only_and_every_component_is_required(self):
        self.close()
        for component in json.loads(READINESS)['components']:
            evidence=json.loads(READINESS); del evidence['components'][component]
            self.assertIn('COLLABORATION_PROTOCOL_NOT_READY',self.sql(f"select private.confirm_collaboration_readiness(3,'{json.dumps(evidence)}');",self.db,False).stderr)
        for role in ('anon','authenticated','service_role'):
            self.assertNotEqual(self.sql(f"set role {role}; select private.confirm_collaboration_readiness(3,'{READINESS}');",self.db,False).returncode,0)

    def test_intent_fallback_is_atomic_and_cannot_change_sha_or_reverse_mode(self):
        self.claim(); self.operation(); self.intent()
        self.close(); self.intent('pull_request')
        for sha,mode in [('c'*40,'pull_request'),(SHA,'direct')]:
            self.assertNotEqual(self.sql(f"set request.jwt.claim.role='service_role'; select public.service_record_publication_intent('{ID}','{sha}','{mode}');",self.db,False).returncode,0)
        self.assertEqual(self.sql('select expected_sha||publication_mode from private.collaboration_operations;',self.db).stdout.strip(),SHA+'pull_request')
        self.assertEqual(self.sql('select publication_expected_sha||publication_mode from public.change_requests;',self.db).stdout.strip(),SHA+'pull_request')

    def test_partial_cutover_restart_never_opens_or_adopts_legacy_intents(self):
        db='restart_'+uuid.uuid4().hex[:10]
        self.sql(f'create database {db} template guarded;','postgres')
        self.sql(GUARD.read_text(),db)
        self.assertNotEqual(self.sql("select private.set_collaboration_mode('open',1);",db,False).returncode,0)
        self.sql(HARDENING.read_text(),db)
        self.assertNotEqual(self.sql("select private.set_collaboration_mode('open',1);",db,False).returncode,0)
        self.protect_fixture(db)
        self.ready(1,db)
        self.sql("select private.set_collaboration_mode('open',1);",db)
        self.assertEqual(self.sql('select count(*) from private.collaboration_operations;',db).stdout.strip(),'0')


if __name__ == "__main__":
    unittest.main(verbosity=2)
