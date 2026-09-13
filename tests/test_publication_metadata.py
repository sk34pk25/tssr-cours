"""Offline regression tests for publication identity and trusted workflow jobs."""

from __future__ import annotations

import contextlib
import io
import json
import os
import re
import subprocess
import tempfile
import textwrap
import unittest
from pathlib import Path
from unittest import mock

from scripts import publication_metadata as metadata


ROOT = Path(__file__).resolve().parents[1]
CHANGE_ID = "12345678-1234-4234-8234-123456789abc"
OTHER_ID = "87654321-4321-4321-8321-cba987654321"
HEAD_SHA = "a" * 40
MERGE_SHA = "b" * 40
TRAILER = f"Change-Request-ID: {CHANGE_ID}"


def workflow(name: str) -> str:
    return (ROOT / ".github" / "workflows" / name).read_text(encoding="utf-8")


def jobs(source: str) -> dict[str, str]:
    """Read job boundaries without introducing a YAML dependency to unittest."""
    body = source.split("\njobs:\n", 1)[1]
    boundaries = list(re.finditer(r"(?m)^  ([a-z][a-z-]*):\n", body))
    return {
        match.group(1): body[match.end():boundaries[index + 1].start() if index + 1 < len(boundaries) else len(body)]
        for index, match in enumerate(boundaries)
    }


def inline_python(source: str) -> list[str]:
    return [textwrap.dedent(match.group(1)) for match in re.finditer(
        r"(?m)^          .*python - <<'PY'\n([\s\S]*?)^          PY$", source
    )]


class PublicationMetadataTests(unittest.TestCase):
    def test_legitimate_generated_and_merge_messages(self):
        for message in (
            f"docs: apply approved change\n\nApproved change: Réseaux\nAuthor: Alice\nApproved by: Bob\n{TRAILER}",
            f"docs: publish approved change\n\n{TRAILER}\n",
            f"docs: publish approved change\n\n{TRAILER}\n\n",
        ):
            with self.subTest(message=message):
                self.assertEqual(metadata.extract_change_request_id(message), CHANGE_ID)

    def test_ordinary_commits_have_no_publication_identity(self):
        self.assertEqual(metadata.extract_change_request_id("docs: maintain portal\n\nAn ordinary description."), "")

    def test_first_match_injection_is_rejected_even_when_explicit_id_matches(self):
        message = f"docs: publish\n\nApproved change: title\nChange-Request-ID: {OTHER_ID}\nAuthor: Alice\n{TRAILER}"
        with self.assertRaises(ValueError):
            metadata.resolve_metadata(message, HEAD_SHA, change_id=CHANGE_ID)

    def test_duplicate_of_same_identifier_is_also_rejected(self):
        with self.assertRaises(ValueError):
            metadata.extract_change_request_id(f"{TRAILER}\n\n{TRAILER}\n")

    def test_ambiguous_earlier_trailer_spellings_are_rejected(self):
        for prefix in ("change-request-id: ", "  Change-Request-ID: ", "Change-Request-ID \t: "):
            with self.subTest(prefix=prefix), self.assertRaises(ValueError):
                metadata.extract_change_request_id(f"docs: publish\n{prefix}{OTHER_ID}\n{TRAILER}")

    def test_identifier_must_be_the_final_canonical_trailer(self):
        for message in (
            f"{TRAILER}\nAuthor: Alice",
            TRAILER + " ",
            TRAILER.lower(),
            " " + TRAILER,
            TRAILER.replace(": ", ":\t"),
            TRAILER.replace(CHANGE_ID, CHANGE_ID.upper()),
            TRAILER.replace(CHANGE_ID, "-" * 36),
            TRAILER.replace(CHANGE_ID, "a" * 36),
            TRAILER + "\n ",
        ):
            with self.subTest(message=message), self.assertRaises(ValueError):
                metadata.extract_change_request_id(message)

    def test_control_and_unicode_line_boundaries_fail_closed(self):
        for separator in ("\r", "\0", "\v", "\f", "\x85", "\u2028", "\u2029"):
            with self.subTest(separator=repr(separator)), self.assertRaises(ValueError):
                metadata.extract_change_request_id(f"title{separator}injected\n{TRAILER}")

    def test_full_canonical_uuid_and_branch(self):
        self.assertEqual(metadata.canonical_uuid(CHANGE_ID), CHANGE_ID)
        self.assertEqual(metadata.change_id_from_branch("collaboration/change-" + CHANGE_ID), CHANGE_ID)
        for value in (CHANGE_ID.upper(), CHANGE_ID + "\n", " " + CHANGE_ID, "-" * 36, CHANGE_ID.replace("-", "")):
            with self.subTest(value=value), self.assertRaises(ValueError):
                metadata.canonical_uuid(value)
        for branch in (
            "collaboration/change-", "collaboration/change-" + CHANGE_ID + "/extra",
            "collaboration/change-" + CHANGE_ID + "\n", "fork/collaboration/change-" + CHANGE_ID,
        ):
            with self.subTest(branch=branch), self.assertRaises(ValueError):
                metadata.change_id_from_branch(branch)

    def test_explicit_dispatch_identity_must_match_trailer(self):
        self.assertEqual(metadata.resolve_metadata(TRAILER, HEAD_SHA, HEAD_SHA, CHANGE_ID), {
            "change_id": CHANGE_ID, "commit_sha": HEAD_SHA,
        })
        for message, change_id in ((TRAILER, OTHER_ID), ("ordinary commit", CHANGE_ID), (TRAILER, CHANGE_ID + "\n")):
            with self.subTest(message=message, change_id=change_id), self.assertRaises(ValueError):
                metadata.resolve_metadata(message, HEAD_SHA, change_id=change_id)

    def test_dispatch_sha_must_equal_actual_source_sha(self):
        with self.assertRaises(ValueError):
            metadata.resolve_metadata(TRAILER, HEAD_SHA, requested_sha=MERGE_SHA)

    def test_full_sha_only_not_refs_abbreviations_or_output_injection(self):
        for value in ("main", "a" * 7, "A" * 40, HEAD_SHA + "\nchange_id=" + OTHER_ID, " " + HEAD_SHA):
            with self.subTest(value=value), self.assertRaises(ValueError):
                metadata.resolve_metadata(TRAILER, value)

    def test_main_reads_requested_commit_as_data_and_checks_main_ancestry(self):
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "output"
            env = {"INPUT_COMMIT_SHA": MERGE_SHA, "INPUT_CHANGE_ID": CHANGE_ID,
                   "GITHUB_SHA": HEAD_SHA, "GITHUB_OUTPUT": str(output)}
            with mock.patch.dict(os.environ, env), mock.patch.object(metadata, "git", side_effect=[MERGE_SHA + "\n", TRAILER]) as git:
                with mock.patch.object(metadata.subprocess, "run") as run:
                    metadata.main()
            self.assertEqual(git.call_args_list, [
                mock.call("rev-parse", "--verify", MERGE_SHA + "^{commit}"),
                mock.call("show", "--no-patch", "--format=%B", MERGE_SHA),
            ])
            run.assert_called_once_with(["git", "merge-base", "--is-ancestor", MERGE_SHA, "refs/remotes/origin/main"], check=True)
            self.assertEqual(output.read_text(), f"change_id={CHANGE_ID}\ncommit_sha={MERGE_SHA}\n")

    def test_non_main_source_never_emits_outputs(self):
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "output"
            with mock.patch.dict(os.environ, {"INPUT_COMMIT_SHA": HEAD_SHA, "GITHUB_OUTPUT": str(output)}):
                with mock.patch.object(metadata, "git", return_value=HEAD_SHA):
                    with mock.patch.object(metadata.subprocess, "run", side_effect=subprocess.CalledProcessError(1, "git")):
                        with self.assertRaises(subprocess.CalledProcessError):
                            metadata.main()
            self.assertFalse(output.exists())


class WorkflowBoundaryTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.pr = workflow("publish-collaboration-pr.yml")
        cls.pr_jobs = jobs(cls.pr)
        cls.deploy = workflow("deploy-docs.yml")
        cls.deploy_jobs = jobs(cls.deploy)
        cls.generic = workflow("validate-pr.yml")

    def test_base_trusted_specialized_event_and_internal_candidate_filter(self):
        self.assertIn("\n  pull_request_target:\n", self.pr)
        self.assertNotIn("\n  pull_request:\n", self.pr)
        self.assertIn("head.repo.full_name == github.repository", self.pr_jobs["attest"])
        self.assertIn("base.repo.full_name == github.repository", self.pr_jobs["attest"])
        self.assertIn("base.ref == 'main'", self.pr_jobs["attest"])
        self.assertIn("re.fullmatch(rf\"collaboration/change-({uuid})\"", self.pr_jobs["attest"])
        self.assertIn("permissions: {}", self.pr.split("\njobs:")[0])

    def test_privileged_pr_jobs_never_checkout_or_run_repository_code(self):
        for name in ("attest", "merge", "report-failure"):
            job = self.pr_jobs[name]
            with self.subTest(job=name):
                self.assertNotIn("uses:", job)
                self.assertNotIn("scripts/", job)
                self.assertNotIn("npm ", job)
                self.assertNotIn("pip ", job)
        self.assertIn("permissions: {}", self.pr_jobs["attest"])
        self.assertIn("permissions: {}", self.pr_jobs["report-failure"])

    def test_validation_is_secretless_read_only_and_pinned_without_credentials(self):
        job = self.pr_jobs["validate"]
        self.assertIn("needs: attest", job)
        self.assertIn("contents: read", job)
        self.assertNotIn(": write", job)
        self.assertNotIn("secrets.", job)
        self.assertNotIn("cache:", job)
        self.assertIn("ref: ${{ needs.attest.outputs.expected_sha }}", job)
        self.assertIn("persist-credentials: false", job)
        self.assertIn('test "$(git rev-parse HEAD)" = "$EXPECTED_SHA"', job)

    def test_merge_rechecks_gate_pins_head_and_dispatches_actual_merge(self):
        job = self.pr_jobs["merge"]
        self.assertIn("needs: [attest, validate]", job)
        self.assertIn('"action": "verify-pr"', job)
        self.assertLess(job.index('"action": "verify-pr"'), job.index("gh pr merge"))
        self.assertIn('--match-head-commit "$EXPECTED_SHA"', job)
        self.assertIn('pull.get("merged") is not True', job)
        self.assertIn('pull.get("head", {}).get("sha") != os.environ["EXPECTED_SHA"]', job)
        self.assertIn('pull.get("merge_commit_sha", "")', job)
        self.assertIn('gh workflow run deploy-docs.yml --repo "$GITHUB_REPOSITORY" --ref main', job)
        self.assertIn('-f commit_sha="$merge_sha"', job)
        self.assertIn("actions: write", job)

    def test_generic_validation_covers_main_and_dependent_prs_including_fork_prefix(self):
        self.assertIn("\n  pull_request:\n", self.generic)
        self.assertIn("branches: [main, hardening/pre-agent]", self.generic)
        self.assertNotIn("head_ref", self.generic)
        self.assertNotIn("collaboration/change-", self.generic)
        self.assertNotIn("    if:", jobs(self.generic)["validate"])
        self.assertIn("contents: read", self.generic)
        self.assertIn("persist-credentials: false", self.generic)

    def test_generic_validation_has_only_bounded_pr_events_and_read_authority(self):
        # Exact trigger block: no wildcard base, head/fork exclusion, push,
        # manual dispatch or privileged pull_request_target entrypoint.
        trigger = self.generic.split("\non:\n", 1)[1].split("\npermissions:\n", 1)[0]
        self.assertEqual(trigger.strip(),
                         "pull_request:\n    branches: [main, hardening/pre-agent]\n"
                         "    types: [opened, synchronize, reopened]")
        permissions = self.generic.split("\npermissions:\n", 1)[1].split("\nconcurrency:\n", 1)[0]
        self.assertEqual(permissions.strip(), "contents: read")
        self.assertEqual(set(jobs(self.generic)), {"validate"})
        job = jobs(self.generic)["validate"]
        for forbidden in ("permissions:", "secrets.", "environment:", "write-all",
                          "git push", "gh pr merge", "auto-merge", "workflow run",
                          "x-publication-secret", "supabase.co", "curl ", "wget "):
            with self.subTest(forbidden=forbidden):
                self.assertNotIn(forbidden, job)
        self.assertIn("runs-on: ubuntu-latest", job)
        self.assertIn("persist-credentials: false", job)

    def test_deployment_gate_precedes_pinned_secretless_build(self):
        gate, build = self.deploy_jobs["attest"], self.deploy_jobs["build"]
        self.assertIn("if: github.ref == 'refs/heads/main'", gate)
        self.assertIn("ref: ${{ github.workflow_sha }}", gate)
        self.assertIn("persist-credentials: false", gate)
        self.assertIn("run: python scripts/publication_metadata.py", gate)
        self.assertIn('"action": "verify-deploy"', gate)
        self.assertIn("if: steps.metadata.outputs.change_id != ''", gate)
        self.assertIn("needs: attest", build)
        self.assertIn("ref: ${{ needs.attest.outputs.commit_sha }}", build)
        self.assertIn('test "$(git rev-parse HEAD)" = "$COMMIT_SHA"', build)
        self.assertIn("contents: read", build)
        self.assertNotIn(": write", build)
        self.assertNotIn("secrets.", build)
        self.assertIn("persist-credentials: false", build)

    def test_deploy_privileges_do_not_execute_source_code_and_preserve_proof_names(self):
        deploy = self.deploy_jobs["deploy"]
        self.assertIn("needs: [attest, build, authorize-deploy]", deploy)
        self.assertIn("contents: write", deploy)
        self.assertIn("ref: gh-pages", deploy)
        self.assertIn("persist-credentials: false", deploy)
        self.assertIn("actions/download-artifact@", deploy)
        self.assertNotIn("npm ", deploy)
        self.assertNotIn("scripts/", deploy)
        self.assertNotIn("secrets.", deploy)
        self.assertIn("- name: Validate and build MkDocs\n", self.deploy_jobs["build"])
        self.assertIn("- name: Publish gh-pages without force push\n", deploy)
        self.assertNotIn("continue-on-error", self.deploy)

    def test_callbacks_only_follow_attestation_and_include_complete_binding(self):
        for job, phase in ((self.pr_jobs["report-failure"], "pr-validation"), (self.deploy_jobs["report"], "deploy")):
            with self.subTest(phase=phase):
                self.assertIn("needs.attest.result == 'success'", job)
                self.assertIn("permissions: {}", job)
                self.assertNotIn("uses:", job)
                self.assertNotIn("scripts/", job)
                for field in ("change_request_id", "expected_sha", "commit_sha", "run_id", "run_attempt", "pr_number", "failure_reason"):
                    self.assertIn('"' + field + '":', job)
                self.assertIn('"phase": "' + phase + '"', job)
        self.assertIn('"commit_sha": os.environ["EXPECTED_SHA"]', self.pr_jobs["report-failure"])
        self.assertIn("COMMIT_SHA: ${{ needs.attest.outputs.commit_sha }}", self.deploy_jobs["report"])
        self.assertNotIn("inputs.commit_sha", self.deploy_jobs["report"])

    def test_every_workflow_runs_regression_suite(self):
        for source in (self.pr, self.deploy, self.generic):
            self.assertIn("python -m unittest discover -s tests -p 'test_*.py'", source)

    def test_attempt_job_identity_comes_only_from_trusted_attestation(self):
        for role, jobs_map, sha_field in (
            ("build", self.deploy_jobs, "commit_sha"), ("deploy", self.deploy_jobs, "commit_sha"),
            ("validate", self.pr_jobs, "expected_sha"), ("merge", self.pr_jobs, "expected_sha"),
        ):
            expected = ("name: TSSR-" + role + "-v1|" +
                        "${{ needs.attest.outputs.change_id }}|" +
                        "${{ needs.attest.outputs.expected_sha }}|" +
                        "${{ needs.attest.outputs." + sha_field + " }}")
            self.assertIn(expected, jobs_map[role])

    def test_historical_metadata_is_not_backfilled_or_revalidated_on_status_only_update(self):
        source = (ROOT / "supabase/migrations/20260907120000_publication_hardening.sql").read_text()
        self.assertIn("new.title is not distinct from old.title then return new", source)
        self.assertIn("new.display_name is not distinct from old.display_name then return new", source)
        self.assertNotIn("publication_expected_sha = published_commit_sha", source)
        self.assertIn("request_row.publication_expected_sha is null", source)
        self.assertIn("for update", source)
        self.assertIn("request_row.publication_callback = p_receipt", source)

    def test_all_trusted_inline_python_compiles(self):
        sources = inline_python(self.pr) + inline_python(self.deploy)
        self.assertEqual(len(sources), 7)  # Additional isolated pre-deploy admission check.
        for index, source in enumerate(sources):
            with self.subTest(script=index):
                compile(source, f"workflow-inline-{index}", "exec")

    def test_pre_deploy_gate_keeps_secrets_off_the_deploy_runner(self):
        gate = self.deploy_jobs["authorize-deploy"]
        self.assertIn("needs: [attest, build]", gate)
        self.assertIn("permissions: {}", gate)
        self.assertNotIn("uses:", gate)
        self.assertNotIn("scripts/", gate)
        self.assertIn('"action": "verify-deploy"', gate)
        self.assertIn('result.get("maintenance_protocol") != "tssr-maintenance-v1"', gate)


class WorkflowAttestationExecutionTests(unittest.TestCase):
    """Execute the actual privileged inline programs with a fake HTTP boundary."""

    def run_attestation(self, result: dict, **environment: str) -> tuple[str, mock.Mock]:
        source = inline_python(jobs(workflow("publish-collaboration-pr.yml"))["attest"])[0]
        with tempfile.TemporaryDirectory() as directory:
            output = Path(directory) / "output"
            env = {
                "WEBHOOK_URL": "https://publication.invalid/status", "WEBHOOK_SECRET": "test-only-value",
                "HEAD_BRANCH": "collaboration/change-" + CHANGE_ID, "HEAD_SHA": HEAD_SHA,
                "PR_NUMBER": "42", "GITHUB_OUTPUT": str(output), **environment,
            }
            with mock.patch.dict(os.environ, env), mock.patch("urllib.request.urlopen", return_value=io.StringIO(json.dumps(result))) as request:
                exec(compile(source, "trusted-pr-attestation", "exec"), {})
            return output.read_text(), request

    def valid_result(self) -> dict:
        return {"ok": True, "maintenance_protocol": "tssr-maintenance-v1", "change_request_id": CHANGE_ID, "expected_sha": HEAD_SHA, "pr_number": 42}

    def test_legitimate_binding_calls_gate_and_emits_only_verified_outputs(self):
        output, request = self.run_attestation(self.valid_result())
        self.assertEqual(output, f"change_id={CHANGE_ID}\nexpected_sha={HEAD_SHA}\npr_number=42\n")
        self.assertEqual(json.loads(request.call_args.args[0].data), {
            "action": "verify-pr", "change_request_id": CHANGE_ID, "commit_sha": HEAD_SHA, "pr_number": 42,
        })
        self.assertNotIn("test-only-value", output)

    def test_invalid_or_stale_attestations_never_emit_merge_authority(self):
        for changes in ({"maintenance_protocol": None}, {"maintenance_protocol": "unknown"}, {"ok": False}, {"expected_sha": MERGE_SHA}, {"change_request_id": OTHER_ID}, {"pr_number": 43}, {"pr_number": "42"}):
            with self.subTest(changes=changes), self.assertRaises(SystemExit):
                self.run_attestation({**self.valid_result(), **changes})

    def test_branch_sha_and_pr_injections_are_rejected_before_http(self):
        for changes in (
            {"HEAD_BRANCH": "collaboration/change-" + CHANGE_ID + "-suffix"},
            {"HEAD_BRANCH": "collaboration/change-" + CHANGE_ID + "\nexpected_sha=" + MERGE_SHA},
            {"HEAD_SHA": HEAD_SHA + "\n"}, {"PR_NUMBER": "42\n"}, {"PR_NUMBER": "0"},
        ):
            with self.subTest(changes=changes), mock.patch("urllib.request.urlopen") as request:
                with self.assertRaises(SystemExit):
                    self.run_attestation(self.valid_result(), **changes)
                request.assert_not_called()

    def test_merge_confirmation_rejects_changed_or_unmerged_heads(self):
        source = inline_python(jobs(workflow("publish-collaboration-pr.yml"))["merge"])[1]
        repository = "example/training"
        original = {"merged": True, "number": 42, "merge_commit_sha": MERGE_SHA,
                    "head": {"sha": HEAD_SHA, "ref": "collaboration/change-" + CHANGE_ID, "repo": {"full_name": repository}},
                    "base": {"ref": "main", "repo": {"full_name": repository}}}
        with tempfile.TemporaryDirectory() as directory:
            env = {"RUNNER_TEMP": directory, "GITHUB_REPOSITORY": repository, "EXPECTED_SHA": HEAD_SHA,
                   "PR_NUMBER": "42", "CHANGE_ID": CHANGE_ID}
            path = Path(directory) / "merged-pr.json"
            # This test fixture is data, not a GitHub request or repository mutation.
            path.write_text(json.dumps(original))
            output = io.StringIO()
            with mock.patch.dict(os.environ, env), contextlib.redirect_stdout(output):
                exec(compile(source, "trusted-merge-confirmation", "exec"), {})
            self.assertEqual(output.getvalue(), MERGE_SHA + "\n")
            for changed in ({**original, "merged": False}, {**original, "head": {**original["head"], "sha": MERGE_SHA}},
                            {**original, "base": {**original["base"], "ref": "other"}}, {**original, "merge_commit_sha": "main"}):
                with self.subTest(changed=changed):
                    path.write_text(json.dumps(changed))
                    with mock.patch.dict(os.environ, env), self.assertRaises(SystemExit):
                        exec(compile(source, "trusted-merge-confirmation", "exec"), {})


if __name__ == "__main__":
    unittest.main()
