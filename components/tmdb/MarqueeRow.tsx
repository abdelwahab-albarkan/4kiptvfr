"use client";

import { useEffect, useRef } from "react";
import MovieCard from "./MovieCard";
import type { MediaItem } from "@/lib/tmdb/types";
import styles from "./tmdb.module.css";

/**
 * A continuously auto-scrolling poster row (right → left).
 *
 * Technique: a NATIVE horizontal scroll container (so touch swipe / drag keep
 * working for free) whose scrollLeft is advanced every frame by
 * requestAnimationFrame. The list is duplicated ONCE so the loop is seamless —
 * position X and X + loopWidth show identical posters, so wrapping never jumps.
 *
 * Two correctness details that make it smooth and reliable:
 *  1. We keep our own float accumulator (`posRef`) instead of reading scrollLeft
 *     back each frame — browsers may round the stored scrollLeft, which would
 *     otherwise swallow sub-pixel (slow, cinematic) increments and freeze the row.
 *  2. The loop distance is measured from the real DOM offset of the first
 *     duplicated card, so the reset is pixel-exact regardless of card width/gap
 *     or breakpoint.
 *
 * Each instance runs its own rAF loop → rows move independently, not in sync.
 * Pauses on hover (desktop), during touch (then resumes), and when off-screen.
 * Respects prefers-reduced-motion: no auto-movement, just a normal scroller.
 * No React state is touched in the loop, so there are no re-renders.
 */
export default function MarqueeRow({
  title,
  subtitle,
  items,
  speed = 0.45,
}: {
  title: string;
  subtitle?: string;
  items: MediaItem[];
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0); // authoritative float scroll position
  const loopRef = useRef(0); // width of one set of posters (incl. its trailing gap)
  const pausedRef = useRef(false);
  const reducedRef = useRef(false);
  const visibleRef = useRef(true);
  const resumeTimer = useRef<number | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Distance from the first card to its duplicate = exactly one loop.
    const measure = () => {
      const first = el.children[0] as HTMLElement | undefined;
      const dup = el.children[items.length] as HTMLElement | undefined;
      if (first && dup) {
        const w = dup.offsetLeft - first.offsetLeft;
        if (w > 0) {
          loopRef.current = w;
          posRef.current = ((posRef.current % w) + w) % w; // stay in range on resize
        }
      }
    };
    measure();

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedRef.current = mq.matches;
    const onMq = () => {
      reducedRef.current = mq.matches;
    };
    mq.addEventListener("change", onMq);

    // Pause work while the row is off-screen.
    const io = new IntersectionObserver((entries) => (visibleRef.current = entries[0].isIntersecting), {
      threshold: 0.02,
    });
    io.observe(el);

    // Re-measure when layout changes (breakpoint, resize).
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    let raf = 0;
    const step = () => {
      if (loopRef.current === 0) measure();
      const w = loopRef.current;
      if (w > 0 && !pausedRef.current && !reducedRef.current && visibleRef.current) {
        let p = posRef.current + speed;
        if (p >= w) p -= w; // seamless wrap (identical duplicate)
        posRef.current = p;
        el.scrollLeft = p;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      mq.removeEventListener("change", onMq);
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    };
  }, [speed, items.length]);

  if (items.length === 0) return null;

  // Duplicate once — the minimum needed for a seamless native-scroll loop.
  const loop = [...items, ...items];

  // Sync our accumulator with wherever the user left the native scroll, then
  // continue. Because the duplicate is identical, normalising into [0, loop)
  // is visually seamless.
  const syncFromScroll = () => {
    const el = trackRef.current;
    const w = loopRef.current;
    if (el && w > 0) posRef.current = ((el.scrollLeft % w) + w) % w;
  };

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    syncFromScroll();
    pausedRef.current = false;
  };
  const onTouchStart = () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    pausedRef.current = true;
  };
  const onTouchEnd = () => {
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    // let inertial scrolling settle before resuming
    resumeTimer.current = window.setTimeout(resume, 1600);
  };

  return (
    <section className={styles.cineRow} aria-label={title}>
      <h3 className={styles.cineTitle}>{title}</h3>
      {subtitle && <p className={styles.cineSub}>{subtitle}</p>}
      <div
        ref={trackRef}
        className={styles.marqueeTrack}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {loop.map((item, i) => (
          <div
            key={`${item.type}-${item.id}-${i}`}
            className={styles.marqueeItem}
            aria-hidden={i >= items.length}
          >
            <MovieCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
