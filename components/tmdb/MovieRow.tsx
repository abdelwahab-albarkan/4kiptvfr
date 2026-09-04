"use client";

import { useRef, useState } from "react";
import Icon from "../Icon";
import MovieCard from "./MovieCard";
import type { MediaItem } from "@/lib/tmdb/types";
import styles from "./tmdb.module.css";

export default function MovieRow({
  title,
  items,
}: {
  title: string;
  items: MediaItem[];
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  if (!items || items.length === 0) return null;

  function update() {
    const el = ref.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }

  function scroll(dir: 1 | -1) {
    const el = ref.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.round(el.clientWidth * 0.85), behavior: "smooth" });
  }

  return (
    <section aria-label={title}>
      <div className={styles.rowHead}>
        <h3 className={styles.rowTitle}>{title}</h3>
        <div className={styles.rowNav}>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => scroll(-1)}
            disabled={atStart}
            aria-label="Défiler vers la gauche"
          >
            <Icon name="arrow-left" size={20} />
          </button>
          <button
            type="button"
            className={styles.navBtn}
            onClick={() => scroll(1)}
            disabled={atEnd}
            aria-label="Défiler vers la droite"
          >
            <Icon name="arrow-right" size={20} />
          </button>
        </div>
      </div>
      <div className={styles.scroller} ref={ref} onScroll={update}>
        {items.map((item) => (
          <MovieCard key={`${item.type}-${item.id}`} item={item} />
        ))}
      </div>
    </section>
  );
}
