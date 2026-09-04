/** TMDB image URL helper. Sizes chosen per context to avoid huge downloads. */

const BASE = "https://image.tmdb.org/t/p";

export type PosterSize = "w185" | "w342" | "w500" | "w780";
export type BackdropSize = "w780" | "w1280" | "original";

/** Returns a full TMDB image URL, or null when the path is missing. */
export function getTmdbImage(
  path: string | null | undefined,
  size: PosterSize | BackdropSize
): string | null {
  if (!path) return null;
  return `${BASE}/${size}${path}`;
}

/** Local fallback artwork (already in /public/images) when TMDB has none. */
export const FALLBACK_POSTER = "/images/iptv-heimkino.jpg";
export const FALLBACK_BACKDROP = "/images/home-hero.jpg";
