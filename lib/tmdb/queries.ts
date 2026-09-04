import { tmdbFetch } from "./client";
import { getTmdbImage } from "./images";
import type {
  TmdbMovie,
  TmdbTv,
  TmdbPaginated,
  TmdbGenreList,
  MediaItem,
} from "./types";

/* --------------------------------------------------------------- genres */

let genreCache: Record<number, string> | null = null;

async function getGenreMap(): Promise<Record<number, string>> {
  if (genreCache) return genreCache;
  const [movie, tv] = await Promise.all([
    tmdbFetch<TmdbGenreList>("/genre/movie/list", {}, 60 * 60 * 24),
    tmdbFetch<TmdbGenreList>("/genre/tv/list", {}, 60 * 60 * 24),
  ]);
  const map: Record<number, string> = {};
  for (const g of [...(movie?.genres ?? []), ...(tv?.genres ?? [])]) map[g.id] = g.name;
  if (Object.keys(map).length) genreCache = map;
  return map;
}

/* ------------------------------------------------------------ normalise */

function yearOf(date?: string): string | null {
  return date && date.length >= 4 ? date.slice(0, 4) : null;
}

function normalizeMovie(m: TmdbMovie, genres: Record<number, string>): MediaItem {
  return {
    id: m.id,
    type: "movie",
    title: m.title || m.original_title || "Titre inconnu",
    overview: m.overview || "",
    poster: getTmdbImage(m.poster_path, "w500"),
    backdrop: getTmdbImage(m.backdrop_path, "w1280"),
    year: yearOf(m.release_date),
    rating: Math.round((m.vote_average || 0) * 10) / 10,
    genres: (m.genre_ids ?? []).map((id) => genres[id]).filter(Boolean).slice(0, 3),
  };
}

function normalizeTv(t: TmdbTv, genres: Record<number, string>): MediaItem {
  return {
    id: t.id,
    type: "tv",
    title: t.name || t.original_name || "Titre inconnu",
    overview: t.overview || "",
    poster: getTmdbImage(t.poster_path, "w500"),
    backdrop: getTmdbImage(t.backdrop_path, "w1280"),
    year: yearOf(t.first_air_date),
    rating: Math.round((t.vote_average || 0) * 10) / 10,
    genres: (t.genre_ids ?? []).map((id) => genres[id]).filter(Boolean).slice(0, 3),
  };
}

/* -------------------------------------------------------------- queries */

async function movieList(path: string, params: Record<string, string | number> = {}): Promise<MediaItem[]> {
  const [data, genres] = await Promise.all([
    tmdbFetch<TmdbPaginated<TmdbMovie>>(path, params),
    getGenreMap(),
  ]);
  return (data?.results ?? []).map((m) => normalizeMovie(m, genres));
}

async function tvList(path: string, params: Record<string, string | number> = {}): Promise<MediaItem[]> {
  const [data, genres] = await Promise.all([
    tmdbFetch<TmdbPaginated<TmdbTv>>(path, params),
    getGenreMap(),
  ]);
  return (data?.results ?? []).map((t) => normalizeTv(t, genres));
}

export const getPopularMovies = () => movieList("/movie/popular", { region: "FR", page: 1 });
export const getTopRatedMovies = () => movieList("/movie/top_rated", { region: "FR", page: 1 });
export const getNowPlaying = () => movieList("/movie/now_playing", { region: "FR", page: 1 });
export const getUpcoming = () => movieList("/movie/upcoming", { region: "FR", page: 1 });
export const getPopularTv = () => tvList("/tv/popular", { page: 1 });

export const getMoviesByGenre = (genreId: number) =>
  movieList("/discover/movie", {
    with_genres: genreId,
    sort_by: "popularity.desc",
    region: "FR",
    "vote_count.gte": 100,
    page: 1,
  });

export const getFrenchMovies = () =>
  movieList("/discover/movie", {
    with_original_language: "fr",
    sort_by: "popularity.desc",
    region: "FR",
    "vote_count.gte": 50,
    page: 1,
  });

export const getFrenchTv = () =>
  tvList("/discover/tv", {
    with_original_language: "fr",
    sort_by: "popularity.desc",
    "vote_count.gte": 30,
    page: 1,
  });

/** Curated hero items: trending, only those with a usable backdrop + overview. */
export async function getHeroItems(limit = 6): Promise<MediaItem[]> {
  const [data, genres] = await Promise.all([
    tmdbFetch<TmdbPaginated<TmdbMovie & TmdbTv & { media_type?: string }>>(
      "/trending/all/week",
      { page: 1 }
    ),
    getGenreMap(),
  ]);
  const items = (data?.results ?? [])
    .map((r) =>
      r.media_type === "tv" || (!r.title && r.name)
        ? normalizeTv(r as TmdbTv, genres)
        : normalizeMovie(r as TmdbMovie, genres)
    )
    .filter((m) => m.backdrop && m.overview && m.title !== "Titre inconnu");
  return items.slice(0, limit);
}

/** Genre ids used for the homepage themed rows (TMDB canonical ids). */
export const GENRES = {
  action: 28,
  comedy: 35,
  sciFi: 878,
  animation: 16,
  drama: 18,
} as const;
