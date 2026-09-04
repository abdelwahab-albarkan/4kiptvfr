/**
 * Server-side TMDB client. Imported only by server components (never by a
 * "use client" module), so the Bearer token stays on the server. Uses the v4
 * read access token which stays
 * on the server — never exposed to the browser. Every call is cached by Next
 * (ISR) and fails soft: on any error it returns null so callers can fall back.
 */

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.TMDB_ACCESS_TOKEN;
const API_KEY = process.env.TMDB_API_KEY;

const DEFAULT_REVALIDATE = 60 * 60 * 6; // 6 hours
const TIMEOUT_MS = 6000;

export async function tmdbFetch<T>(
  path: string,
  params: Record<string, string | number> = {},
  revalidate: number = DEFAULT_REVALIDATE
): Promise<T | null> {
  if (!TOKEN && !API_KEY) return null;

  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("language", "fr-FR");
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, String(v));
  // Fallback auth if only the v3 key is available.
  if (!TOKEN && API_KEY) url.searchParams.set("api_key", API_KEY);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

  try {
    const res = await fetch(url.toString(), {
      headers: TOKEN
        ? { Authorization: `Bearer ${TOKEN}`, Accept: "application/json" }
        : { Accept: "application/json" },
      next: { revalidate },
      signal: controller.signal,
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}
