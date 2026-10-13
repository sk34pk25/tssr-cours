import { assertEquals, assertRejects } from "jsr:@std/assert@1.0.18";
import { githubFetch } from "./github-transport.ts";
Deno.test("GitHub reads retry only bounded transient failures, never writes or permanent errors", async () => {
  const original = globalThis.fetch;
  try {
    for (const method of ["GET", "HEAD", "POST", "PATCH", "DELETE"]) {
      let calls = 0; const delays: number[] = [];
      globalThis.fetch = () => { calls++; throw new TypeError("HTTP2 REFUSED_STREAM"); };
      await assertRejects(() => githubFetch("https://fixture.invalid", {method}, ms => {delays.push(ms);return Promise.resolve();}));
      assertEquals(calls, ["GET", "HEAD"].includes(method) ? 3 : 1);
      assertEquals(delays, ["GET", "HEAD"].includes(method) ? [250,500] : []);
    }
    for (const status of [400,401,403,404,409,422,429,500,502,503,504]) {
      let calls = 0;
      globalThis.fetch = () => Promise.resolve(new Response("error", {status: ++calls === 1 ? status : 200}));
      const response = await githubFetch("https://fixture.invalid", {}, () => Promise.resolve());
      assertEquals(calls, [502,503,504].includes(status) ? 2 : 1);
      await response.body?.cancel();
    }
    for (const message of ["Bad credentials", "invalid URL", "certificate expired", "content validation failed"]) {
      let calls=0; globalThis.fetch=()=>{calls++;throw new TypeError(message);};
      await assertRejects(()=>githubFetch("https://fixture.invalid",{},()=>Promise.resolve()));
      assertEquals(calls,1);
    }
  } finally { globalThis.fetch = original; }
});
