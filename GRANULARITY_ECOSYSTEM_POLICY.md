# Pedagogical proposal granularity

## Policy and boundary

One module has two independently reviewable units: `COURSE_PAGE` and
`ECOSYSTEM`. An ecosystem can include TP presentation/statements/solutions,
several distinct TPs, revision, memo, commands, troubleshooting, tutorial,
exercise, resources, links and an editorial Kahoot page for that same module.
The main `docs/modules/<course>/module-*.md` page is never part of the ecosystem.
The previous special case grouping a main page with its Kahoot is retired.

This is **local admission**, not server authorization. No existing request,
role, vote, consensus, maintenance guard or publication mechanism is changed.
Supabase still independently validates files, identity, credentials, hashes and
permissions. Passing this policy/dry-run does not mean a request was submitted,
accepted remotely or published.

Unscoped legacy single-file Markdown proposals remain accepted. They do not
gain permission to bundle unrelated objects. Explicit `TRANSVERSAL` proposals
are also single-file and cannot include a main module page. Multi-file proposals
without an unambiguous manifest fail closed.

## Manifest contract

An endpoint payload carries `payload_summary.granularity`. An ingestion preview
carries the same object as `granularity`; `ProposalClient` forwards it and adds
the review manifest to the description. Example (repeat `components` once for
each file, in the same order):

```json
{
  "schemaVersion": 1,
  "bundleType": "ECOSYSTEM",
  "courseId": "modules/05-administration-debian-gnu-linux/index.md",
  "moduleId": "modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md",
  "components": [
    {
      "filePath": "docs/tp/administration-linux/module-08/enonces.md",
      "courseId": "modules/05-administration-debian-gnu-linux/index.md",
      "moduleId": "modules/05-administration-debian-gnu-linux/module-08-gestion-des-espaces-de-stockage-avancee-lvm.md",
      "component": "TP",
      "provenance": "C — complément pédagogique, référence de source explicite",
      "summary": "Résumé humain du delta proposé"
    }
  ]
}
```

`courseId`/`moduleId` are full canonical repository identities (without `docs/`),
not bare labels such as `M08`. Both must exist at `base_commit_sha`. Therefore,
creation of an entirely new module must first establish that module separately.
Every component must use the exact same pair, and any embedded YAML identity or
existing/new Kahoot V1 marker must agree. A source's semantic relevance still
requires human review; a model-written identity is not proof of content quality.

Admission combines explicit metadata with committed course associations and
canonical module paths. Existing aliases such as `administration-linux` are
read from the course index **at the immutable base**, not guessed from filenames.
Unknown ownership fails closed. Existing file contents are read from Git at that
base, with matching `base_file_sha`; supplied `old_content` is never evidence.

Allowed components: `TP`, `REVISION`, `EXERCISE`, `MEMO`, `COMMANDS`,
`TROUBLESHOOTING`, `TUTORIAL`, `RESOURCE`, `KAHOOT`, `GLOSSARY`, `LINKS`.
`COURSE_PAGE` is reserved for the separate one-file course-page proposal.

For endpoint payloads, append `review_description(manifest)` to `description`
before handing the payload to the broker. The validator requires this readable
manifest: bundle type, course/module, every file, component, provenance and
summary. This preserves human visibility because the existing AGENT server
deliberately strips arbitrary fields from `payload_summary`. No payload content,
idempotency key or existing request is automatically rewritten by the validator.

## Shared Markdown: bounded module deltas

A non-module-specific file requires explicit scope blocks:

```text
<!-- TSSR-MODULE-SCOPE-V1:<URL-encoded JSON with courseId and moduleId> -->
Module-specific contribution
<!-- /TSSR-MODULE-SCOPE-V1 -->
```

Use JSON with the exact canonical pair, encoded with `urllib.parse.quote`.
Only blocks for the target module may change. All other bytes, including blocks
owned by other modules, must remain unchanged relative to the Git base. Missing,
malformed, nested or conflicting markers are refused. Wrapping existing global
text in a new scope block does not pass the unchanged-remainder check. An
unscoped/global change belongs in a separate `TRANSVERSAL` request.

Dedicated module paths may contain multiple TP directories (`tp01`, `tp02`,
`tp03`) under the same module. A course index or independent MSP cannot be hidden
inside an ecosystem by adding a scope marker.

## Glossary: no AGENT permission expansion

`data/glossaire.json` remains **forbidden to AGENT**, including in an ecosystem.
The server's existing Markdown-only rule is unchanged. Only existing authorized
human tooling may call the local classifier with `agent=False` to inspect a
glossary delta. This argument is not sent to Supabase and confers no authority.

For such a human delta, course/module tables must be unchanged. A changed entry
must belong exclusively to the module, or change only that module's association
while preserving the shared definition and all other associations. Entry identity
uses the existing explicit ID / `build_glossary.slugify(term)` convention.
Normal glossary schema/content validation remains separately required.

## Broker integration and rollout boundary

At implementation time, the operational broker and its Keychain adapter exist
only as local untracked files in the broker worktree, not on `origin/main`.
The broker already imports `ingestion.granularity.assert_payload_granularity`.
This PR versions that common policy and integrates it with the tracked proposal
adapter; it does not copy unrelated Auth/Keychain code into the repository.
The original broker worktree is intentionally left untouched.

`tests/granularity_broker.py` loads the existing broker with the candidate policy
already imported. It calls its real `main(... --dry-run)` twice using synthetic
public configuration. Password access, transport construction and network calls
are forbidden. It proves M08's four-component ecosystem passes and M08/M09 fails,
and checks the broker source hash before/after. This is an offline integration
test, not an alternate submission wrapper or a production deployment.

After human PR review/merge, adopting the common policy in the operational
broker checkout is a separate local rollout. Running the untouched old checkout
before that adoption still uses its old policy. Do not claim it already changed.

## Verification

From this checkout (use the project's Python environment):

```sh
PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s tests -p 'test_granularity.py'
PYTHONDONTWRITEBYTECODE=1 python tests/granularity_broker.py --broker /path/to/existing/scripts/agent_session_broker.py
PYTHONDONTWRITEBYTECODE=1 python -m unittest discover -s tests -p 'test_*.py'
npm test
deno task test:edge
deno task check:edge
PYTHONDONTWRITEBYTECODE=1 python tests/maintenance_postgres.py
PYTHONDONTWRITEBYTECODE=1 python tests/agent_postgres.py
PYTHONDONTWRITEBYTECODE=1 python scripts/validate_course_structure.py
PYTHONDONTWRITEBYTECODE=1 python scripts/build_glossary.py --check
mkdocs build --strict --site-dir /path/to/disposable-build-directory
git diff --check
```

The common policy and proposal adapter tests run in the existing Python CI gate.
The explicit broker integration test is local because that broker is not yet
versioned; it must not be reported as a GitHub Actions broker test. Rollback of
this local policy is a normal Git revert; no database rollback is involved.
