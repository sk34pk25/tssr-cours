import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";

const root = path.resolve(import.meta.dirname, "..");

function read(relative) {
  return fs.readFileSync(path.join(root, relative), "utf8");
}

test("the public configuration contains only the configured Supabase public credential", () => {
  const config = read("docs/assets/javascripts/collaboration-config.js");
  assert.doesNotMatch(config, /sb_secret_|service_role|github_pat_|ghp_/i);
  assert.match(config, /"?supabaseUrl"?:\s*"https:\/\/ygjnszbdqgmmkwhvifao\.supabase\.co"/);
  assert.match(config, /"?supabasePublishableKey"?:\s*"sb_publishable_[^"]+"/);
});

test("the login UI has no public sign-up action", () => {
  const frontend = read("docs/assets/javascripts/collaboration.js");
  assert.match(frontend, /signInWithPassword/);
  assert.doesNotMatch(frontend, /\.auth\.signUp\s*\(/);
  assert.doesNotMatch(frontend, /Créer un compte/);
});

test("server secrets occur only in server code, workflows or documentation", () => {
  const publicFiles = [
    "docs/assets/javascripts/collaboration.js",
    "docs/assets/javascripts/collaboration-utils.js",
    "docs/assets/javascripts/collaboration-config.js",
    "docs/assets/javascripts/course-creator.js",
    "docs/assets/javascripts/course-creator-utils.js",
    "docs/assets/javascripts/course-editor.js",
    "docs/assets/javascripts/course-editor-ui.js",
    "overrides/main.html"
  ];
  for (const file of publicFiles) {
    const content = read(file);
    assert.doesNotMatch(content, /SUPABASE_(SERVICE_ROLE|SECRET)_KEY|GITHUB_TOKEN|github_pat_|ghp_/i, file);
  }
});

test("structured course creation uses the authenticated change endpoint and never accepts an author field", () => {
  const frontend = read("docs/assets/javascripts/course-creator.js");
  const endpoint = read("supabase/functions/change-requests/index.ts");
  assert.match(frontend, /action:\s*"create-course"/);
  assert.match(endpoint, /body\.action === "create-course"[\s\S]+requireProfile\(req, \{ canEdit: true \}\)/);
  assert.doesNotMatch(frontend, /\bauthor(?:_id|_display_name)?\s*:/i);
  assert.match(endpoint, /buildCourseProposal\(body\.course, snapshot\)/);
});

test("change request creation is server-only after files and identity are validated", () => {
  const endpoint = read("supabase/functions/change-requests/index.ts");
  const migration = read("supabase/migrations/20260821120000_secure_change_request_rpc.sql");
  assert.match(endpoint, /context\.adminClient\.rpc\(\s*["']create_change_request["']/);
  assert.match(endpoint, /_actor_profile_id:\s*context\.profile\.id/);
  assert.match(migration, /auth\.role\(\)[\s\S]+service_role/);
  assert.match(migration, /revoke all[\s\S]+from public, anon, authenticated/i);
  assert.match(migration, /grant execute[\s\S]+to service_role/i);
  assert.doesNotMatch(migration, /grant execute[\s\S]+to authenticated/i);
});

test("complete course editing is server-loaded, identity-checked and submitted through consensus", () => {
  const frontend = read("docs/assets/javascripts/course-creator.js");
  const collaboration = read("docs/assets/javascripts/collaboration.js");
  const endpoint = read("supabase/functions/change-requests/index.ts");
  const migration = read("supabase/migrations/20260815190000_course_editing.sql");
  assert.match(frontend, /action:\s*"get-course-editor"/);
  assert.match(frontend, /action:\s*"modify-course"/);
  assert.match(collaboration, /completeCourseEditorUrl/);
  assert.match(endpoint, /body\.action === "modify-course"[\s\S]+requireProfile\(req, \{ canEdit: true \}\)/);
  assert.match(endpoint, /buildCourseModification\(\s*editorPayload,\s*loaded\.plan,\s*loaded\.snapshot,?\s*\)/);
  assert.match(endpoint, /"modify_course"/);
  assert.match(migration, /proposal_kind in \('content_change', 'navigation_change', 'create_course', 'modify_course'\)/);
  assert.match(migration, /course_modification_submitted/);
  assert.doesNotMatch(frontend, /\bauthor(?:_id|_display_name)?\s*:/i);
});

test("legacy active Markdown can only survive an update as an identical trusted fragment", () => {
  const validation = read("supabase/functions/_shared/validation.ts");
  assert.match(validation, /validateMarkdownTransition/);
  assert.match(validation, /removeOnceOutsideCode\(candidate, fragment\)/);
  assert.match(validation, /isMaskedCodeSpan/);
  assert.match(validation, /file\.change_type === "create"/);
});

test("course attachments are allowlisted, signature checked and staged outside the public repository", () => {
  const validation = read("supabase/functions/_shared/validation.ts");
  const migration = read("supabase/migrations/20260815120000_course_creation.sql");
  assert.match(validation, /SAFE_RESOURCE/);
  assert.match(validation, /0x25, 0x50, 0x44, 0x46, 0x2d/);
  assert.match(validation, /totalBinarySize > 12_000_000/);
  assert.match(validation, /html\?|svg\|js\|mjs\|exe/);
  assert.match(migration, /cleanup_staged_binary_files/);
  assert.match(migration, /status in \('rejected', 'cancelled', 'published'\)/);
});

test("course proposals share consensus, rate limiting, audit and publication tables", () => {
  const migration = read("supabase/migrations/20260815120000_course_creation.sql");
  assert.match(migration, /proposal_kind in \('content_change', 'navigation_change', 'create_course'\)/);
  assert.match(migration, /created_at > now\(\) - interval '10 minutes'/);
  assert.match(migration, /course_creation_submitted/);
  assert.match(migration, /insert into public\.change_approvals/);
  assert.doesNotMatch(migration, /create table public\.course_/i);
});

test("the Add action is derived from the active editable profile and the page has a login fallback", () => {
  const frontend = read("docs/assets/javascripts/course-creator.js");
  const page = read("docs/ajouter/index.md");
  assert.match(frontend, /if \(!current\?\.can_edit\) return/);
  assert.match(frontend, /tssr:auth-changed/);
  assert.match(frontend, /Connexion requise/);
  assert.match(page, /id="tssr-course-creator"/);
});

test("RLS is enabled on every collaboration table and anon receives no data grant", () => {
  const migration = read("supabase/migrations/20260814130000_collaboration.sql");
  for (const table of ["profiles", "change_requests", "change_request_files", "change_approvals", "audit_logs"]) {
    assert.match(migration, new RegExp(`alter table public\\.${table} enable row level security`, "i"));
  }
  assert.match(migration, /revoke all[\s\S]+from anon, authenticated/i);
});

test("GitHub deployment never force-pushes", () => {
  for (const workflow of [".github/workflows/deploy-docs.yml", ".github/workflows/publish-collaboration-pr.yml"]) {
    const content = read(workflow);
    assert.doesNotMatch(content, /push[^\n]*(--force|-f\b)|force:\s*true/i, workflow);
  }
});

test("every editorial endpoint rechecks an active profile and the requested permission", () => {
  const auth = read("supabase/functions/_shared/auth.ts");
  const changes = read("supabase/functions/change-requests/index.ts");
  const admin = read("supabase/functions/admin-users/index.ts");
  assert.match(auth, /profile\.status !== "active"/);
  assert.match(auth, /requirements\.canEdit && !profile\.can_edit/);
  assert.match(changes, /requireProfile\(req, \{ canEdit: true \}\)/);
  assert.match(admin, /requireProfile\(req, \{ admin: true \}\)/);
});

test("admin lifecycle covers creation, update, suspension, reactivation, reset and deletion", () => {
  const admin = read("supabase/functions/admin-users/index.ts");
  for (const action of ["create", "update", "suspend", "reactivate", "reset-password", "delete"]) {
    assert.match(admin, new RegExp(`body\\.action === "${action}"`), action);
  }
  assert.match(admin, /must_change_password: true/);
  assert.match(admin, /ensureAnotherAdmin/);
});

test("consensus snapshots active editors, auto-approves the author and requires unanimity", () => {
  const migration = read("supabase/migrations/20260814130000_collaboration.sql");
  assert.match(migration, /where status = 'active' and can_edit = true/i);
  assert.match(migration, /request_row\.id, actor\.id, actor\.display_name, 'approved'/i);
  assert.match(migration, /approval_count = cardinality\(request_row\.required_approvers\)/i);
  assert.match(migration, /if p_decision = 'rejected'[\s\S]+set status = 'rejected'/i);
  assert.match(migration, /where id = p_change_request_id and status = 'approved'/i);
});

test("publication detects stale file hashes before creating a Git commit", () => {
  const github = read("supabase/functions/_shared/github.ts");
  const comparison = github.indexOf("current.sha !== file.base_file_sha");
  const commit = github.indexOf('const created = await github<{ sha: string }>(config, "/git/commits"');
  assert.ok(comparison >= 0, "missing file conflict comparison");
  assert.ok(commit > comparison, "the conflict comparison must precede commit creation");
  assert.match(github, /markFailure\([\s\S]+conflict \? "conflict" : "failed"/);
});

test("session changes and logout are handled without exposing a sign-up path", () => {
  const frontend = read("docs/assets/javascripts/collaboration.js");
  assert.match(frontend, /onAuthStateChange/);
  assert.match(frontend, /auth\.signOut\(\)/);
  assert.match(frontend, /signInWithPassword/);
  assert.doesNotMatch(frontend, /auth\.signUp\(/);
});
