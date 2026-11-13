import { assert, assertEquals, assertRejects } from "jsr:@std/assert@1.0.18";
import { createAtomicCommit, type GitHubConfig } from "./github.ts";
import type { ProposedFile } from "./validation.ts";

const SHA = "a".repeat(40);
const TREE = "b".repeat(40);
const COMMIT = "c".repeat(40);
const MKDOCS = "site_name: TSSR\nsite_description: Portail\ntheme:\n  name: material\nnav:\n  - Accueil: index.md\n";
const PNG = btoa(String.fromCharCode(0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a));

function config(): GitHubConfig {
  return { token: "test-only", owner: "example", repo: "tssr", branch: "main", publishMode: "direct", beforeWrite: async () => {} };
}

function files(count: number): ProposedFile[] {
  const pages = Array.from({ length: 61 }, (_, index) => ({
    file_path: `docs/modules/17-reseau-et-securite/page-${index}.md`,
    change_type: "create" as const,
    new_content: "# Page\n",
    content_encoding: "utf-8" as const,
  }));
  const images = Array.from({ length: count - pages.length }, (_, index) => ({
    file_path: `docs/assets/images/reseau-et-securite/p${index}.png`,
    change_type: "create" as const,
    new_content: PNG,
    content_encoding: "base64" as const,
    media_type: "image/png",
  }));
  return [...pages, ...images];
}

function mock(options: { failAt?: number; delayMs?: number; failDelayMs?: number }) {
  const calls: string[] = [];
  let blobs = 0;
  let inFlight = 0;
  let maxInFlight = 0;
  const io = async <T>(_: GitHubConfig, path: string, init: RequestInit = {}): Promise<T> => {
    const method = (init.method || "GET").toUpperCase();
    calls.push(`${method} ${path.split("?")[0]}`);
    if (path.startsWith("/git/ref/")) return { object: { sha: SHA } } as T;
    if (path.startsWith("/git/commits/") && method === "GET") return { tree: { sha: TREE } } as T;
    if (path.startsWith("/git/trees/") && method === "GET") {
      return { truncated: false, tree: [{ path: "docs/index.md", mode: "100644", type: "blob", sha: SHA }, { path: "mkdocs.yml", mode: "100644", type: "blob", sha: SHA }] } as T;
    }
    if (path.startsWith("/contents/mkdocs.yml")) return { type: "file", encoding: "base64", content: btoa(MKDOCS), sha: SHA } as T;
    if (path === "/git/blobs" && method === "POST") {
      inFlight += 1;
      maxInFlight = Math.max(maxInFlight, inFlight);
      blobs += 1;
      const current = blobs;
      const delay = options.failAt === current ? (options.failDelayMs ?? options.delayMs ?? 0) : (options.delayMs ?? 0);
      await new Promise((resolve) => setTimeout(resolve, delay));
      inFlight -= 1;
      if (options.failAt && current === options.failAt) throw new Error("blob refused");
      return { sha: SHA } as T;
    }
    if (path === "/git/trees" && method === "POST") return { sha: TREE } as T;
    if (path === "/git/commits" && method === "POST") return { sha: COMMIT } as T;
    throw new Error(`unexpected ${method} ${path}`);
  };
  return { io, calls, maxInFlight: () => maxInFlight };
}

Deno.test("254 course files upload with bounded concurrency and one commit", async () => {
  const github = mock({ delayMs: 15 });
  const started = Date.now();
  const result = await createAtomicCommit(config(), {
    id: "11111111-1111-4111-8111-111111111111",
    title: "Cours",
    author_display_name: "Patrik",
    base_commit_sha: SHA,
  }, files(254), ["Patrik"], github.io);
  const elapsed = Date.now() - started;
  assertEquals(result.commitSha, COMMIT);
  assertEquals(result.currentSha, SHA);
  assertEquals(github.calls.filter((call) => call === "POST /git/blobs").length, 254);
  assertEquals(github.calls.filter((call) => call === "POST /git/trees").length, 1);
  assertEquals(github.calls.filter((call) => call === "POST /git/commits").length, 1);
  assert(!github.calls.some((call) => call.startsWith("PATCH ")));
  assert(github.maxInFlight() <= 6);
  assert(github.maxInFlight() > 1);
  assert(elapsed < 254 * 15, `elapsed ${elapsed}ms`);
  const treeAt = github.calls.indexOf("POST /git/trees");
  const commitAt = github.calls.indexOf("POST /git/commits");
  assert(treeAt > github.calls.lastIndexOf("POST /git/blobs"));
  assert(commitAt === treeAt + 1);
});

Deno.test("a blob failure publishes nothing", async () => {
  const github = mock({ failAt: 20, delayMs: 1 });
  await assertRejects(() => createAtomicCommit(config(), {
    id: "11111111-1111-4111-8111-111111111111",
    title: "Cours",
    author_display_name: "Patrik",
    base_commit_sha: SHA,
  }, files(40), ["Patrik"], github.io), Error, "blob refused");
  assert(!github.calls.some((call) => call === "POST /git/trees" || call === "POST /git/commits" || call.startsWith("PATCH ")));
});

Deno.test("one blob failure stops the pool from starting further uploads", async () => {
  const github = mock({ failAt: 1, delayMs: 30, failDelayMs: 0 });
  await assertRejects(() => createAtomicCommit(config(), {
    id: "11111111-1111-4111-8111-111111111111",
    title: "Cours",
    author_display_name: "Patrik",
    base_commit_sha: SHA,
  }, files(80), ["Patrik"], github.io), Error, "blob refused");
  const blobs = github.calls.filter((call) => call === "POST /git/blobs").length;
  assertEquals(blobs, 6);
  assertEquals(github.maxInFlight(), 6);
  assert(!github.calls.some((call) => call === "POST /git/trees" || call === "POST /git/commits" || call.startsWith("PATCH ")));
});

Deno.test("text-only uploads stay sequential and stop at the first failure", async () => {
  const pages: ProposedFile[] = Array.from({ length: 5 }, (_, index) => ({
    file_path: `docs/note-${index}.md`,
    change_type: "create",
    new_content: "# Note\n",
    content_encoding: "utf-8",
  }));
  const github = mock({ failAt: 3, delayMs: 0 });
  await assertRejects(() => createAtomicCommit(config(), {
    id: "11111111-1111-4111-8111-111111111111",
    title: "Notes",
    author_display_name: "Patrik",
    base_commit_sha: SHA,
  }, pages, ["Patrik"], github.io), Error, "blob refused");
  assertEquals(github.calls.filter((call) => call === "POST /git/blobs").length, 3);
  assertEquals(github.maxInFlight(), 1);
  assert(!github.calls.some((call) => call === "POST /git/trees" || call === "POST /git/commits" || call.startsWith("PATCH ")));
});
