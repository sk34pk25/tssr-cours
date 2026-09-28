"""Agent integration: existing guard + actual SQL, PostgreSQL16 network=none."""
import concurrent.futures
import json
import unittest
import maintenance_postgres as m


class AgentPostgres(m.MaintenancePostgres):
    def setUp(self):
        super().setUp()
        self.sql(next(m.MIGRATIONS.glob("*_admin_validation_override.sql")).read_text(), self.db)
        self.sql(next(m.MIGRATIONS.glob("*_agent_propose_only.sql")).read_text(), self.db)
        self.agent = "66666666-6666-4666-8666-666666666666"
        self.uid = "77777777-7777-4777-8777-777777777777"
        # Distinct synthetic auth identity; no existing human account repurposed.
        self.sql(f"insert into auth.users(id,email) values ('{self.uid}','agent@example.invalid');"
                 f"update public.profiles set id='{self.agent}',display_name='Fixture Agent',"
                 f"actor_kind='AGENT',can_propose=true,must_change_password=false where auth_user_id='{self.uid}';", self.db)

    def propose(self, fingerprint="b"*64, ok=True, content="# Fixture"):
        summary = json.dumps({"_actor_profile_id":self.agent, "actorKind":"AGENT",
                              "idempotencyKey":"a"*64, "proposalFingerprint":fingerprint})
        files = json.dumps([{"file_path":"docs/fixture.md","new_content":content,"change_type":"create"}])
        return self.sql("set role service_role; set request.jwt.claim.role='service_role';"
            f"select row_to_json(r) from public.create_change_request('Agent fixture','','{m.SHA}',"
            f"'{files}',"
            f"null,'content_change','{summary}') r;", self.db, ok)

    def session(self):
        return f"set role authenticated;set request.jwt.claim.role='authenticated';set request.jwt.claim.sub='{self.uid}';"

    def test_agent_pending_no_auto_vote_and_human_consensus(self):
        row = json.loads(self.propose().stdout)
        self.assertEqual(row["status"], "pending")
        self.assertEqual(row["required_approvers"], [m.PROFILE])
        self.assertEqual(self.sql(f"select count(*) from public.change_approvals where change_request_id='{row['id']}';",self.db).stdout.strip(),"0")
        # Agent never holds service credentials; direct service RPCs denied.
        for command in [f"select public.cast_change_vote('{row['id']}','approved',null);",
                        f"select public.admin_override_approval('{row['id']}','No');",
                        f"select public.cancel_change_request('{row['id']}');",
                        f"select public.service_claim_change_for_publication('{row['id']}');",
                        "update public.profiles set role='admin';",
                        f"select public.create_change_request('Fake','','{m.SHA}','[]',null,'content_change','{{}}');"]:
            self.assertNotEqual(self.sql(self.session()+command,self.db,False).returncode,0,command)

    def test_agent_idempotency_and_conflicting_replay(self):
        first=json.loads(self.propose().stdout)
        again=json.loads(self.propose().stdout)
        self.assertEqual(first,again)
        self.assertNotEqual(self.propose("c"*64,False).returncode,0)
        self.assertNotEqual(self.propose(ok=False,content="# Different bytes").returncode,0)
        self.assertEqual(self.sql(f"select count(*) from public.audit_logs where target_id='{first['id']}';",self.db).stdout.strip(),"1")

    def test_agent_concurrent_proposals(self):
        with concurrent.futures.ThreadPoolExecutor(2) as pool:
            rows=list(pool.map(lambda _: json.loads(self.propose().stdout),range(2)))
        self.assertEqual(rows[0]["id"],rows[1]["id"])

    def test_agent_no_humans_and_maintenance_fail_closed(self):
        self.sql(f"update public.profiles set can_edit=false where id='{m.PROFILE}';",self.db)
        self.assertNotEqual(self.propose(ok=False).returncode,0)
        self.sql(f"update public.profiles set can_edit=true where id='{m.PROFILE}';",self.db)
        self.close()
        self.assertNotEqual(self.propose(ok=False).returncode,0)

    def test_agent_profile_no_escalation(self):
        for role in ["authenticated","service_role"]:
            for fields in ["can_edit=true","role='admin'","can_override_validation=true","actor_kind='HUMAN'"]:
                self.assertNotEqual(self.sql(f"set role {role};set request.jwt.claim.role='{role}';"
                    f"update public.profiles set {fields} where id='{self.agent}';",self.db,False).returncode,0)

    def test_agent_human_behavior_and_final_human_vote(self):
        # The historical one-human author auto-approval remains unchanged.
        files=json.dumps([{"file_path":"docs/human.md","new_content":"# Human","change_type":"create"}])
        human=self.sql("set role service_role;set request.jwt.claim.role='service_role';"
            f"select (public.create_change_request('Human fixture','','{m.SHA}','{files}',null,"
            f"'content_change','{{\"_actor_profile_id\":\"{m.PROFILE}\"}}')).status;",self.db)
        self.assertEqual(human.stdout.strip(),"approved")
        row=json.loads(self.propose().stdout)
        human_uid="88888888-8888-4888-8888-888888888888"
        self.sql(f"insert into auth.users(id,email) values('{human_uid}','human@example.invalid');"
                 f"delete from public.profiles where auth_user_id='{human_uid}';"
                 f"update public.profiles set auth_user_id='{human_uid}' where id='{m.PROFILE}';",self.db)
        vote=self.sql("set role authenticated;set request.jwt.claim.role='authenticated';"
            f"set request.jwt.claim.sub='{human_uid}';select (public.cast_change_vote('{row['id']}','approved',null)).status;",self.db)
        self.assertEqual(vote.stdout.strip(),"approved")


if __name__ == "__main__":
    # The original suite is run separately; run only new cases here.
    suite=unittest.TestSuite(AgentPostgres(name) for name in dir(AgentPostgres) if name.startswith("test_agent_"))
    raise SystemExit(not unittest.TextTestRunner(verbosity=2).run(suite).wasSuccessful())
