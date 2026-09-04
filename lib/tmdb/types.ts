/** TMDB API types (only the fields we actually use). */

export type MediaType = "movie" | "tv";

export interface TmdbMovie {
  id: number;
  title: string;
  original_title?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
  vote_average: number;
  genre_ids?: number[];
}

export interface TmdbTv {
  id: number;
  name: string;
  original_name?: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  first_air_date?: string;
  vote_average: number;
  genre_ids?: number[];
}

export interface TmdbGenre {
  id: number;
  name: string;
}

export interface TmdbPaginated<T> {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
}

export interface TmdbGenreList {
  genres: TmdbGenre[];
}

/** Normalised item used across all cinematic components (movie or TV). */
export interface MediaItem {
  id: number;
  type: MediaType;
  title: string;
  overview: string;
  poster: string | null; // full URL or null
  backdrop: string | null; // full URL or null
  year: string | null;
  rating: number; // 0..10, rounded to 1 decimal
  genres: string[];
}
