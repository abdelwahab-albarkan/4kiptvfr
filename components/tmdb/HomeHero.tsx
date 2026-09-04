"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "../Icon";
import type { MediaItem } from "@/lib/tmdb/types";
import { FALLBACK_BACKDROP } from "@/lib/tmdb/images";
import styles from "./tmdb.module.css";

const ROTATE_MS = 7000;

/**
 * Homepage cinematic hero. The brand headline stays the H1 (SEO/readability);
 * the TMDB backdrop + "À l'affiche" chip rotate for a streaming-platform feel.
 * Falls back to a local backdrop with no rotation when TMDB is unavailable.
 */
export default function HomeHero({ items }: { items: MediaItem[] }) {
  const hasItems = items.length > 0;
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [reduced, setReduced] = useState(false);
  const hovered = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const set = () => setReduced(mq.matches);
    set();
    mq.addEventListener("change", set);
    return () => mq.removeEventListener("change", set);
  }, []);

  const next = useCallback(() => setIndex((i) => (i + 1) % items.length), [items.length]);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  useEffect(() => {
    if (!playing || reduced || items.length < 2) return;
    const id = setInterval(() => {
      if (!hovered.current) next();
    }, ROTATE_MS);
    return () => clearInterval(id);
  }, [playing, reduced, items.length, next]);

  const current = hasItems ? items[index] : null;
  const backdrop = current?.backdrop ?? FALLBACK_BACKDROP;

  const onKeyDown = (e: KeyboardEvent) => {
    if (!hasItems) return;
    if (e.key === "ArrowRight") next();
    else if (e.key === "ArrowLeft") prev();
  };

  return (
    <section
      className={styles.homeHero}
      aria-label="4kiptvfr.com — IPTV premium"
      onMouseEnter={() => (hovered.current = true)}
      onMouseLeave={() => (hovered.current = false)}
      onFocusCapture={() => (hovered.current = true)}
      onBlurCapture={() => (hovered.current = false)}
      onKeyDown={onKeyDown}
    >
      <div className={styles.homeBg}>
        <Image
          key={current?.id ?? "fallback"}
          src={backdrop}
          alt=""
          fill
          priority
          sizes="100vw"
          className={reduced ? undefined : styles.bgFade}
        />
      </div>
      <div className={styles.homeOverlay} />

      <div className={`${styles.homeInner} container`}>
        <div className={styles.homeContent}>
          <span className={styles.homeEyebrow}>
            <span className={styles.homePing} aria-hidden="true" />
            IPTV France
          </span>

          <h1 className={styles.homeTitle}>
            Votre abonnement IPTV simple, <span className="accent">stable</span> et adapté à tous vos appareils
          </h1>

          <p className={styles.homeDesc}>
            50 000+ chaînes en direct, tout le sport et 180 000+ films et séries en 4K, sur votre Smart TV,
            votre box ou votre mobile. Activation en moins de 60 secondes, sans engagement.
          </p>

          {current && (
            <div className={styles.featured} aria-live="polite">
              <span className={styles.fLabel}>À l&apos;affiche</span>
              <span className={styles.fTitle}>{current.title}</span>
              <span className={styles.fMeta}>
                {current.rating > 0 && (
                  <>
                    <Icon name="star" size={15} /> {current.rating.toFixed(1)}
                  </>
                )}
                {current.year && <>· {current.year}</>}
                {current.genres[0] && <>· {current.genres[0]}</>}
              </span>
            </div>
          )}

          <div className={styles.homeCtas}>
            <Link href="/abonnement/essai-gratuit" className="btn btn-lg btn-primary">
              Essai gratuit
            </Link>
            <Link href="/abonnement" className={`btn btn-lg ${styles.btnGlass}`}>
              Voir les abonnements
            </Link>
          </div>

          <div className={styles.homeTrust}>
            <span><Icon name="bolt" size={17} /> Activation en 60 s</span>
            <span><Icon name="check" size={17} /> Sans engagement</span>
            <span><Icon name="shield" size={17} /> Garantie 30 jours</span>
          </div>
        </div>
      </div>

      {hasItems && items.length > 1 && (
        <div className={`${styles.homeControls} container`}>
          <button type="button" className={styles.ctrlBtn} onClick={prev} aria-label="Titre précédent">
            <Icon name="arrow-left" size={20} />
          </button>
          <button
            type="button"
            className={styles.ctrlBtn}
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Mettre en pause le diaporama" : "Lancer le diaporama"}
          >
            <Icon name={playing ? "pause" : "play"} size={18} />
          </button>
          <button type="button" className={styles.ctrlBtn} onClick={next} aria-label="Titre suivant">
            <Icon name="arrow-right" size={20} />
          </button>
          <div className={styles.homeDots} role="tablist" aria-label="Sélectionner un titre à l'affiche">
            {items.map((it, i) => (
              <button
                key={it.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`À l'affiche ${i + 1} : ${it.title}`}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
