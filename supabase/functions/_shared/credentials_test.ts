import { assertEquals, assertThrows } from "jsr:@std/assert@1.0.18";
import { assertNoCredentials, containsCredential } from "./credentials.ts";

Deno.test("CLI credentials require an argument boundary, not a slash within pedagogical prose", () => {
  const prose = "Validation du login/Password avec Outlook online";
  assertEquals(containsCredential(prose), false);
  assertNoCredentials({ old_content: prose });
  for (const prefix of ["", "\n", "\t", "`", "(", ":", ";", '"', "'"]) {
    for (const option of ["/password", "--password", "-password", "-p", "--token"]) {
      const text = `${prefix}${option} secret123`;
      assertEquals(containsCredential(text), true);
      assertThrows(() => assertNoCredentials({ old_content: text }));
    }
  }
});
