/** Bounded retries ONLY for idempotent reads. Never repeat a Git write. */
export async function githubFetch(url: string, init: RequestInit,
  sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms)),
): Promise<Response> {
  const read = ["GET", "HEAD"].includes((init.method || "GET").toUpperCase());
  for (let attempt = 0; ; attempt++) {
    let response: Response;
    try {
      response = await fetch(url, init);
    } catch (error) {
      // Narrow transport allowlist: not an auth, TLS/certificate, parsing,
      // validation, abort or arbitrary application exception.
      if (!read || attempt >= 2 || !(error instanceof Error) ||
        !/refused[_ ]stream|connection reset|econnreset|temporar(?:y|ily) unavailable/i.test(error.message)) throw error;
      await sleep(250 * 2 ** attempt);
      continue;
    }
    if (!read || attempt >= 2 || ![502, 503, 504].includes(response.status)) return response;
    // Respect Retry-After if small; never ignore a long/unknown server delay.
    const requested = response.headers.get("Retry-After");
    const seconds = requested === null ? 0 : Number(requested);
    if (!Number.isFinite(seconds) || seconds < 0 || seconds > 2) return response;
    await response.body?.cancel();
    await sleep(Math.max(250 * 2 ** attempt, seconds * 1000));
  }
}
