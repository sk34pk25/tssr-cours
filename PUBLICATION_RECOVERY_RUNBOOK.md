# Recovery of an attested failed deployment

## Contract

This is not retry-publication, reconciliation of a pending callback, a vote,
or an override. A failed **direct** deployment with a recorded terminal receipt
may acquire separate success evidence after a later attested deployment.
`change_requests.status`, its original callback, failure reason, timestamps and
Git SHA remain unchanged. `publication_recoveries` plus one
`publication_recovered` audit event represent the effective recovered state.
The UI displays both this state and the original failure.

Only UTF-8 Markdown create/update manifests are supported. Recovery requires:

- the initial failed run and its exact commit manifest;
- at least three distinct required, active HUMAN editors with approved votes,
  no rejection and no override;
- a finished publication operation matching the immutable failed snapshot;
- identical approved bytes in the initial commit, later deployed commit and
  observed main, with proven ancestry;
- the existing build/deploy job attestation and a successful GitHub Pages run;
- unchanged observed main/gh-pages refs before recording evidence.

The service-only RPC rechecks state, consensus and SHA-256 proofs under locks
(profiles in UUID order, request, publication operation). The request lock and
recovery primary key serialize competing recoveries. Identical replay writes
nothing; contradictory evidence is rejected. Ordinary authenticated users,
including AGENTs, cannot execute the RPC or mutate the recovery table. Database
owners and the authorized service remain explicit trust boundaries.

## Independent admission

The broker builds an archive of the immutable base commit plus **only** the
current payload, before credentials or submission. Unpublished sibling payloads
and dirty worktree files cannot satisfy its links. It uses the broker's Python
runtime, which must have the repository's requirements installed. A missing
runtime or strict-build failure refuses submission with INDEPENDENT_BUILD_FAILED.

This isolates proposal files and inherited environment, not operating-system
access: committed build hooks remain trusted repository code. The server also
checks relative Markdown destinations against base/current Git plus this CR,
both during admission and before Git writes. This additional invariant is not
a replacement for a complete Python-Markdown/MkDocs render and does not claim
to parse every Markdown extension.

COURSE_PAGE then ECOSYSTEM remains the default. A COURSE_PAGE referencing an
unpublished ECOSYSTEM must be refused, not built with that sibling locally.
Existing operational broker checkouts must adopt the reviewed broker and
independent_build module before claiming this new local guarantee.

## Rollout order (mandatory)

1. Green local tests and PR CI; review the exact diff and fresh main.
2. Capture deployed Edge sources and their verify_jwt settings for rollback.
3. Apply only `20261016222437_publication_recovery.sql`; verify empty table,
   RLS, ACLs, RPC and unchanged target request. No status backfill.
4. Merge the technical PR normally, then await MkDocs and Pages success.
   **Migration must precede this frontend:** it queries publication_recoveries.
5. Deploy only change-requests and publication-status, preserving respectively
   verify_jwt=true and false. Independently compare their returned sources.
6. Recheck the target and run `Recover one attested failed publication` on main,
   with exact CR UUID and dry_run=true. Verify eligibility without mutation.
7. Run once with dry_run=false, then read DB/audit independently. Do not retry an
   ambiguous network result; inspect the immutable recovery record first.
8. Verify the UI distinguishes recovery and original failure. No new vote or
   pedagogical commit should exist.

This rollout is additive and does not close/reopen the maintenance gate or
reconcile unrelated historical operations. Do not operate on another CR.

## Rollback

Before a recovery is recorded, restore only the two captured Edge source bundles
if needed, keeping their original JWT settings; revert the technical Git change
through the normal human PR flow. The additive empty table/RPC may remain in place.
Do not drop the table while the new frontend depends on it.

After recovery, retain its row and audit permanently. Restoring old Edge code must
not erase the evidence or modify the original failed receipt. Any correction of
historical evidence requires a separate reviewed operation, not a fabricated
successful callback. No rollback rewrites approved pedagogical Git commits.

## Local evidence and limits

The M07 regression uses the exact module/TP/revision paths with synthetic source
bytes: base + COURSE_PAGE fails while unpublished local targets exist; committed
targets pass. Recovery tests cover changed/deleted/renamed content, wrong hashes,
wrong commit operation, extra files, missing/failed runs, unproved Pages, invalid
ancestry, missing callback, pre-write failure, pending/publishing/published states,
insufficient/rejected/nonhuman consensus, unauthorized callers, contradictory
replay and concurrent identical requests. Chromium tests use intercepted synthetic
Auth/REST only and verify recovered status, retained failure and read-only actions.

An attestation is a fact about its immutable commit and observation time. A later
ordinary edit on main does not rewrite that history. Current GitHub refs may move
after the final check: no cross-service transaction with Git exists.

### Qualification on 2026-10-17

- Exact approved M07 bytes (SHA-256 fd278c33a700cb2f0b99caf2f4b97c8e62f669ce44ccfafcf62f80ccce4dc66f):
  isolated initial base refused; base 4dfaf77293112f06577ea89ee7bebc2dea2f0c65 accepted.
- JavaScript: 172 passed. Python discovery: 187 run, 3 explicitly skipped.
- Deno: 185 passed; all three Edge entrypoints type-checked.
- Separate AGENT PostgreSQL suite: 10 passed; PDF extraction: 1 passed with Poppler.
- Full maintenance/publication PostgreSQL 16.15 suite: 74 passed, including
  concurrent recovery serialization and original failure/vote preservation.
- Chromium: 6 passed using intercepted synthetic REST, including recovered state.
- Structure, glossary check, strict MkDocs and whitespace validation passed.
- No changed pedagogical files, granularity policy, Drive sources or credentials.

These are local validation results, not evidence of production recovery. The
production verdict requires the separately observed migration, CI, Edge source
comparison, dry-run, single recovery and independent DB/audit readback.
