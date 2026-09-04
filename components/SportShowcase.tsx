"use client";

import { useLayoutEffect, useRef, type CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import Section from "./Section";
import Button from "./Button";
import Icon from "./Icon";
import styles from "./SportShowcase.module.css";

type Sport = {
  name: string;
  tag: string;
  href: string;
  image: string;
};

/* Data-driven — one card component mapped over the six competitions.
   Uses the real competition assets already in /public/images/.
   Links point only to existing pages: football competitions → the football
   page; the others → the sport hub (where those disciplines live). */
const SPORTS: Sport[] = [
  { name: "Ligue 1", tag: "Football", href: "/contenu/sport/football", image: "/images/Logo_Ligue_1_2024.svg.webp" },
  { name: "Champions League", tag: "Football", href: "/contenu/sport/football", image: "/images/UEFA_Champions_League_logo.png" },
  { name: "Formule 1", tag: "Sport auto", href: "/contenu/sport", image: "/images/Formula_1_Logo_1.png" },
  { name: "Roland-Garros", tag: "Tennis", href: "/contenu/sport", image: "/images/Roland-Garros_idhlvZUj6c_0.png" },
  { name: "Top 14", tag: "Rugby", href: "/contenu/sport", image: "/images/Top_14.svg.webp" },
  { name: "NBA", tag: "Basketball", href: "/contenu/sport", image: "/images/NBA_Logo.svg.webp" },
];

export default function SportShowcase() {
  const rootRef = useRef<HTMLDivElement>(null);

  // Staggered reveal on scroll-into-view. SSR/no-JS/reduced-motion show it
  // immediately; otherwise hide before paint, then animate in once.
  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add(styles.reveal);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add(styles.shown);
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Section variant="soft">
      <div ref={rootRef} className={styles.wrap}>
        <div className={styles.left}>
          <span className="eyebrow eyebrow--chip">Sport &amp; contenu</span>
          <h2 className={styles.title}>
            Tout le <span className="accent">sport</span> en direct
          </h2>
          <p className={`lead ${styles.lead}`}>
            Ligue 1, Champions League, Formule 1, tennis, rugby, NBA : suivez les grandes
            compétitions en direct et en 4K, sans coupure.
          </p>
          <div className={styles.ctas}>
            <Button href="/contenu/sport" variant="secondary">
              Sport en direct
            </Button>
            <Button href="/contenu/chaines" variant="ghost">
              Chaînes françaises
            </Button>
          </div>
        </div>

        <ul className={styles.grid}>
          {SPORTS.map((s, i) => (
            <li key={s.name} className={styles.cardWrap} style={{ "--i": i } as CSSProperties}>
              <Link href={s.href} className={styles.card} aria-label={`${s.name} — ${s.tag}, en direct`}>
                <span className={styles.logoWrap} aria-hidden="true">
                  <Image src={s.image} alt="" fill sizes="64px" style={{ objectFit: "contain" }} />
                </span>
                <span className={styles.body}>
                  <span className={styles.name}>{s.name}</span>
                  <span className={styles.tag}>{s.tag}</span>
                </span>
                <span className={styles.arrow} aria-hidden="true">
                  <Icon name="arrow-right" size={16} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
