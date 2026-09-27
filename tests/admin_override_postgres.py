"""Admin override integration tests; isolated PostgreSQL 16, never production.

Runs the existing guard suite too, against the extended schema.
"""
import concurrent.futures
import json
import unittest

import maintenance_postgres as maintenance
from maintenance_postgres import MIGRATIONS, PROFILE, SHA


class AdminOverridePostgres(maintenance.MaintenancePostgres):
    def setUp(self):
        super().setUp()
        migrations = list(MIGRATIONS.glob('*_admin_validation_override.sql'))
        self.assertEqual(len(migrations), 1, 'Exactly one override migration must be tested')
        self.sql(migrations[0].read_text(), self.db)

    def actors(self):
        self.admin = '33333333-3333-4333-8333-333333333333'
        self.author = '44444444-4444-4444-8444-444444444444'
        self.other = '55555555-5555-4555-8555-555555555555'
        self.sql(f"update public.profiles set can_edit=false where id='{PROFILE}';", self.db)
        for uid in (self.admin, self.author, self.other):
            self.sql(f"insert into auth.users(id,email) values ('{uid}','{uid}@example.invalid');"
                     f"update public.profiles set can_edit=true,must_change_password=false where auth_user_id='{uid}';", self.db)
        self.sql(f"update public.profiles set role='admin' where auth_user_id='{self.admin}';", self.db)
        self.actor = self.sql(f"select id from public.profiles where auth_user_id='{self.admin}';", self.db).stdout.strip()
        self.new_proposal()

    def new_proposal(self):
        author = self.sql(f"select id from public.profiles where auth_user_id='{self.author}';", self.db).stdout.strip()
        self.req = self.sql(f"set role service_role; set request.jwt.claim.role='service_role';"
            f"select (public.create_change_request('Synthetic override test','','{SHA}',"
            f"'[{{\"file_path\":\"docs/test.md\",\"new_content\":\"# Test\",\"change_type\":\"create\"}}]',"
            f"null,'content_change','{{\"_actor_profile_id\":\"{author}\"}}')).id;", self.db).stdout.strip()

    def session(self, uid):
        return f"set role authenticated; set request.jwt.claim.role='authenticated'; set request.jwt.claim.sub='{uid}';"

    def override(self, uid=None, ok=True):
        return self.sql(self.session(uid or self.admin) +
                        f"select (public.admin_override_approval('{self.req}','Exceptional review')).status;", self.db, ok)

    def grant_override(self):
        self.sql(f"update public.profiles set can_override_validation=true where id='{self.actor}';", self.db)

    def test_override_nominal_no_fabricated_votes(self):
        self.actors()
        self.grant_override()
        before = self.sql(f"select jsonb_agg(to_jsonb(a) order by id) from public.change_approvals a where change_request_id='{self.req}';", self.db).stdout
        self.assertEqual(self.override().stdout.strip(), 'approved')
        self.assertEqual(before, self.sql(f"select jsonb_agg(to_jsonb(a) order by id) from public.change_approvals a where change_request_id='{self.req}';", self.db).stdout)
        event = json.loads(self.sql(f"select metadata from public.audit_logs where target_id='{self.req}' and action='change_approval_overridden';", self.db).stdout)
        self.assertEqual(event['status_before'], 'pending')
        self.assertEqual(event['status_after'], 'approved')
        self.assertEqual(len(event['actual_approvals']), 1)
        self.assertEqual(len(event['missing_approvers']), 2)
        self.assertEqual(event['guard_generation'], 2)  # fixture opens generation 1 -> 2
        self.assertEqual(self.sql(f"select actor_id from public.audit_logs where target_id='{self.req}' and action='change_approval_overridden';", self.db).stdout.strip(), self.actor)

    def test_override_permissions_and_no_self_grant(self):
        self.actors()
        for uid in (self.author, self.admin):
            result = self.override(uid, ok=False)
            self.assertNotEqual(result.returncode, 0)
            self.assertIn('Permission', result.stderr)
        for role in ('anon', 'authenticated', 'service_role'):
            result = self.sql(f"set role {role}; update public.profiles set can_override_validation=true where id='{self.actor}';", self.db, ok=False)
            self.assertNotEqual(result.returncode, 0)
        self.grant_override()
        # Preserve the existing last-active-admin invariant while testing suspension.
        self.sql(f"update public.profiles set role='admin' where auth_user_id='{self.other}';", self.db)
        for changes in ("status='suspended'", "can_edit=false", "must_change_password=true"):
            self.sql(f"update public.profiles set {changes} where id='{self.actor}';", self.db)
            self.assertNotEqual(self.override(ok=False).returncode, 0)
            self.sql(f"update public.profiles set status='active',can_edit=true,must_change_password=false where id='{self.actor}';", self.db)
        for role in ('anon', 'service_role'):
            result = self.sql(f"set role {role}; select public.admin_override_approval('{self.req}','Reviewed');", self.db, ok=False)
            self.assertIn('permission denied', result.stderr)

        self.sql(f"update public.profiles set can_override_validation=true where auth_user_id='{self.author}';", self.db)
        self.assertNotEqual(self.override(self.author, ok=False).returncode, 0)  # member, even with flag

    def test_author_admin_automatic_vote_is_not_an_override(self):
        self.actors()
        self.sql(f"update public.profiles set role='admin',can_override_validation=true where auth_user_id='{self.author}';", self.db)
        self.new_proposal()
        self.assertEqual(self.sql(f"select status from public.change_requests where id='{self.req}';", self.db).stdout.strip(), 'pending')
        self.assertEqual(self.sql("select count(*) from public.change_approval_overrides;", self.db).stdout.strip(), '0')
        self.assertEqual(self.sql(f"select count(*) from public.change_approvals where change_request_id='{self.req}';", self.db).stdout.strip(), '1')
        self.override(self.author)
        self.assertEqual(self.sql(f"select count(*) from public.change_approvals where change_request_id='{self.req}';", self.db).stdout.strip(), '1')
        self.assertEqual(self.sql(f"select count(*) from public.change_approval_overrides where change_request_id='{self.req}' and actor_id=(select id from public.profiles where auth_user_id='{self.author}');", self.db).stdout.strip(), '1')

    def test_normal_votes_including_admin_and_author_are_not_override(self):
        self.actors()
        self.grant_override()
        vote = self.session(self.admin) + f"select (public.cast_change_vote('{self.req}','approved',null)).status;"
        self.assertEqual(self.sql(vote, self.db).stdout.strip(), 'pending')
        self.assertEqual(self.sql(f"select count(*) from public.change_approval_overrides;", self.db).stdout.strip(), '0')
        vote = self.session(self.other) + f"select (public.cast_change_vote('{self.req}','approved',null)).status;"
        self.assertEqual(self.sql(vote, self.db).stdout.strip(), 'approved')
        self.assertEqual(self.sql(f"select count(*) from public.change_approval_overrides;", self.db).stdout.strip(), '0')
        # Losing override is a no-op, not retroactive attribution of consensus.
        self.override()
        self.assertEqual(self.sql(f"select count(*) from public.change_approval_overrides;", self.db).stdout.strip(), '0')

    def test_override_rejects_terminal_and_incompatible_states(self):
        self.actors()
        self.grant_override()
        for status in ('failed', 'published', 'cancelled', 'rejected', 'conflict', 'publishing'):
            self.sql(f"update public.change_requests set status='{status}' where id='{self.req}';", self.db)
            self.assertNotEqual(self.override(ok=False).returncode, 0)
        self.sql(f"update public.change_requests set status='pending',published_commit_sha='{SHA}' where id='{self.req}';", self.db)
        self.assertNotEqual(self.override(ok=False).returncode, 0)
        self.assertEqual(self.sql("select count(*) from public.change_approval_overrides;", self.db).stdout.strip(), '0')

    def test_override_closed_existing_session_and_missing_flag(self):
        self.actors()
        self.grant_override()
        self.close()
        self.assertIn('COLLABORATION_MAINTENANCE', self.override(ok=False).stderr)
        self.sql("select private.set_collaboration_mode('maintenance',3,true);", self.db)
        self.assertIn('COLLABORATION_MAINTENANCE', self.override(ok=False).stderr)
        self.sql("delete from private.collaboration_gate;", self.db)
        self.assertIn('COLLABORATION_MAINTENANCE', self.override(ok=False).stderr)
        self.assertEqual(self.sql("select count(*) from public.change_approval_overrides;", self.db).stdout.strip(), '0')

    def test_override_history_immutable_and_replay_no_writes(self):
        self.actors()
        self.grant_override()
        self.override()
        query = f"select jsonb_build_object('request',(select to_jsonb(r) from public.change_requests r where id='{self.req}'),'audit',(select jsonb_agg(to_jsonb(a) order by id) from public.audit_logs a),'votes',(select jsonb_agg(to_jsonb(a) order by id) from public.change_approvals a));"
        before = self.sql(query, self.db).stdout
        self.override()
        self.assertEqual(before, self.sql(query, self.db).stdout)
        for command in ("update public.change_approval_overrides set reason='Forged'", "delete from public.change_approval_overrides",
                        "delete from public.audit_logs where action='change_approval_overridden'",
                        "update public.audit_logs set metadata='{}' where action='change_approval_overridden'"):
            self.assertNotEqual(self.sql(command, self.db, ok=False).returncode, 0)
        for role in ('anon', 'authenticated', 'service_role'):
            self.assertNotEqual(self.sql(f"set role {role}; delete from public.change_approval_overrides;", self.db, ok=False).returncode, 0)

    def test_override_pipeline_requires_permit_intent_and_bound_callback(self):
        self.actors()
        self.grant_override()
        self.override()
        self.sql(f"set role service_role; select public.service_claim_change_for_publication('{self.req}');", self.db)
        self.sql(f"set role service_role; select public.service_begin_collaboration_operation('publication','{self.req}');", self.db)
        self.assertNotEqual(self.sql(f"update public.change_requests set status='published' where id='{self.req}';", self.db, ok=False).returncode, 0)
        self.sql(f"set role service_role; set request.jwt.claim.role='service_role'; select public.service_record_publication_intent('{self.req}','{SHA}','direct');", self.db)
        self.close()
        receipt = self.receipt(change_request_id=self.req)
        self.sql(f"set role service_role; set request.jwt.claim.role='service_role'; select public.service_complete_guarded_publication('{self.req}','{receipt}');", self.db)
        self.assertEqual(self.sql(f"select status from public.change_requests where id='{self.req}';", self.db).stdout.strip(), 'published')
        self.assertEqual(self.sql(f"select count(*) from public.change_approvals where change_request_id='{self.req}';", self.db).stdout.strip(), '1')

    def test_override_concurrent_twice_then_claim_once(self):
        self.actors()
        self.grant_override()
        with self.transaction_session() as first:
            self.session_barrier(first, self.session(self.admin) + f"select public.admin_override_approval('{self.req}','Exceptional review');")
            with concurrent.futures.ThreadPoolExecutor() as pool:
                future = pool.submit(self.sql, "set application_name='override_second';" + self.session(self.admin) +
                                     f"select public.admin_override_approval('{self.req}','Exceptional review');", self.db)
                self.wait_for_lock('override_second')
                self.session_barrier(first, 'commit;')
                self.assertEqual(future.result().returncode, 0)
        self.assertEqual(self.sql(f"select count(*) from public.audit_logs where target_id='{self.req}' and action='change_approval_overridden';", self.db).stdout.strip(), '1')
        with concurrent.futures.ThreadPoolExecutor() as pool:
            results = list(pool.map(lambda _: self.sql(f"set role service_role; select public.service_claim_change_for_publication('{self.req}');", self.db, ok=False), range(2)))
        self.assertEqual(sum(r.returncode == 0 for r in results), 1)
        self.sql(f"set role service_role; select public.service_begin_collaboration_operation('publication','{self.req}');", self.db)
        self.assertNotEqual(self.sql(f"set role service_role; select public.service_begin_collaboration_operation('publication','{self.req}');", self.db, ok=False).returncode, 0)
        self.assertEqual(self.sql(f"select count(*) from private.collaboration_operations where change_id='{self.req}';", self.db).stdout.strip(), '1')

    def test_override_vs_last_vote_both_lock_orders(self):
        self.actors()
        self.grant_override()
        self.sql(self.session(self.admin) + f"select public.cast_change_vote('{self.req}','approved',null);", self.db)
        for overrides, votes in ((0, 3), (1, 2)):
            if overrides:
                self.new_proposal()
                self.sql(self.session(self.admin) + f"select public.cast_change_vote('{self.req}','approved',null);", self.db)
            vote = self.session(self.other) + f"select public.cast_change_vote('{self.req}','approved',null);"
            override = self.session(self.admin) + f"select public.admin_override_approval('{self.req}','Exceptional review');"
            first_query, second_query = (override, vote) if overrides else (vote, override)
            with self.transaction_session() as first:
                self.session_barrier(first, first_query)
                with concurrent.futures.ThreadPoolExecutor() as pool:
                    future = pool.submit(self.sql, "set application_name='vote_race';" + second_query, self.db, False)
                    self.wait_for_lock('vote_race')
                    self.session_barrier(first, 'commit;')
                    result = future.result()
                    self.assertEqual(result.returncode == 0, overrides == 0)
            self.assertEqual(self.sql(f"select count(*) from public.change_approval_overrides where change_request_id='{self.req}';", self.db).stdout.strip(), str(overrides))
            self.assertEqual(self.sql(f"select count(*) from public.change_approvals where change_request_id='{self.req}';", self.db).stdout.strip(), str(votes))
            with concurrent.futures.ThreadPoolExecutor() as pool:
                results = list(pool.map(lambda _: self.sql(f"set role service_role; select public.service_claim_change_for_publication('{self.req}');", self.db, ok=False), range(2)))
            self.assertEqual(sum(r.returncode == 0 for r in results), 1)
            self.sql(f"set role service_role; select public.service_begin_collaboration_operation('publication','{self.req}');", self.db)
            self.assertNotEqual(self.sql(f"set role service_role; select public.service_begin_collaboration_operation('publication','{self.req}');", self.db, ok=False).returncode, 0)

    def test_override_permission_revocation_cannot_use_stale_repeatable_read(self):
        self.actors()
        self.grant_override()
        with self.transaction_session('repeatable read') as stale:
            self.session_barrier(stale, self.session(self.admin) + "select count(*) from public.profiles;")
            self.sql(f"update public.profiles set can_override_validation=false where id='{self.actor}';", self.db)
            _, error = stale.communicate(f"select public.admin_override_approval('{self.req}','Exceptional review'); commit;".encode(), timeout=10)
            self.assertNotEqual(stale.returncode, 0)
            self.assertIn('could not serialize', error.decode())
        self.assertEqual(self.sql("select count(*) from public.change_approval_overrides;", self.db).stdout.strip(), '0')


if __name__ == '__main__':
    unittest.main(verbosity=2)
