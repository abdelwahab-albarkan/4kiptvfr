"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { STATS } from "@/lib/site";

/* Parse "50 000+", "99,9%", "4K" into number + decimals + suffix. */
function parseValue(value: string): { target: number; decimals: number; suffix: string } {
  const m = value.match(/^([\d\s.,  ]+)(.*)$/);
  const numeric = (m ? m[1] : value).trim();
  const suffix = m ? m[2] : "";
  const decimals = numeric.includes(",") ? numeric.split(",")[1].replace(/\D/g, "").length : 0;
  const target = parseFloat(numeric.replace(/[\s  ]/g, "").replace(",", ".")) || 0;
  return { target, decimals, suffix };
}

/* French formatting: regular-space thousands + comma decimal — matches source. */
function formatFr(n: number, decimals: number): string {
  const [intPart, dec] = n.toFixed(decimals).split(".");
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return decimals > 0 ? `${grouped},${dec}` : grouped;
}

const DURATION = 1600;

/** Animates its number by writing textContent directly (no per-frame re-render). */
function Counter({ value, run, delayMs }: { value: string; run: boolean; delayMs: number }) {
  const { target, decimals, suffix } = parseValue(value);
  const final = `${formatFr(target, decimals)}${suffix}`;
  const elRef = useRef<HTMLSpanElement>(null);
  const reducedRef = useRef(false);

  // Before paint: if motion is allowed, reset to 0 so the count-up starts there.
  useLayoutEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (elRef.current && !reducedRef.current) {
      elRef.current.textContent = `${formatFr(0, decimals)}${suffix}`;
    }
  }, [decimals, suffix]);

  useEffect(() => {
    if (!run) return;
    const el = elRef.current;
    if (!el) return;
    if (reducedRef.current) {
      el.textContent = final;
      return;
    }
    let raf = 0;
    let startTs: number | undefined;
    const tick = (ts: number) => {
      if (startTs === undefined) startTs = ts;
      const elapsed = ts - startTs - delayMs;
      if (elapsed >= 0) {
        const t = Math.min(elapsed / DURATION, 1);
        const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
        el.textContent = t < 1 ? `${formatFr(target * eased, decimals)}${suffix}` : final;
        if (t >= 1) return;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [run, target, decimals, suffix, delayMs, final]);

  // SSR + first render show the final value (no layout shift / hydration mismatch).
  return <span ref={elRef}>{final}</span>;
}

export default function Stats({
  items = STATS,
}: {
  items?: { value: string; label: string }[];
}) {
  const ref = useRef<HTMLDListElement>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    // Reduced motion: leave run=false — Counters keep their final values, no animation.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRun(true); // fires once per page view
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <dl className="stats" ref={ref}>
      {items.map((s, i) => (
        <div key={s.label} className={`animate-up delay-${Math.min(i, 3)}`}>
          <dt className="stat-value">
            <Counter value={s.value} run={run} delayMs={i * 120} />
          </dt>
          <dd className="stat-label">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}
