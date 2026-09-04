import Image from "next/image";
import Icon from "../Icon";
import type { MediaItem } from "@/lib/tmdb/types";
import styles from "./tmdb.module.css";

/**
 * Poster card (server component). Non-interactive by design: it is editorial
 * discovery, not a claim that the title is streamable — the row-level CTA
 * points to the real offer. Falls back to an icon when no artwork exists.
 */
export default function MovieCard({ item }: { item: MediaItem }) {
  return (
    <article className={styles.card}>
      <div className={styles.poster}>
        {item.poster ? (
          <Image
            src={item.poster}
            alt={`Affiche : ${item.title}`}
            fill
            sizes="(max-width: 560px) 45vw, (max-width: 1024px) 22vw, 190px"
            loading="lazy"
          />
        ) : (
          <span className={styles.posterFallback} aria-hidden="true">
            <Icon name={item.type === "tv" ? "tv" : "film"} size={34} />
          </span>
        )}
        {item.rating > 0 && (
          <span className={styles.cardRating}>
            <Icon name="star" size={13} />
            {item.rating.toFixed(1)}
          </span>
        )}
      </div>
      <h3 className={styles.cardTitle}>{item.title}</h3>
      {item.year && <p className={styles.cardYear}>{item.year}</p>}
    </article>
  );
}
