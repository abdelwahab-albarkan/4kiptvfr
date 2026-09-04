import HomeHero from "./HomeHero";
import MarqueeRow from "./MarqueeRow";
import { getHeroItems, getFrenchMovies, getMoviesByGenre, getTopRatedMovies, GENRES } from "@/lib/tmdb/queries";
import styles from "./tmdb.module.css";

/**
 * Homepage cinematic block: a large brand hero (rotating TMDB backdrop) with a
 * compact, premium entertainment section of exactly THREE auto-scrolling rows.
 * All data is fetched server-side (cached/ISR). If TMDB is unavailable the hero
 * falls back to a local backdrop and the rows disappear — the page never breaks.
 */
export default async function MediaSection() {
  const [hero, french, sciFi, topRated] = await Promise.all([
    getHeroItems(6),
    getFrenchMovies(),
    getMoviesByGenre(GENRES.sciFi),
    getTopRatedMovies(),
  ]);

  const rows: { title: string; subtitle: string; items: typeof french; speed: number }[] = [
    { title: "Films français", subtitle: "Une sélection de films français à découvrir.", items: french, speed: 0.4 },
    { title: "Science-fiction", subtitle: "Explorez une sélection de films de science-fiction.", items: sciFi, speed: 0.5 },
    { title: "Les mieux notés", subtitle: "Les titres les mieux notés disponibles dans notre sélection.", items: topRated, speed: 0.45 },
  ].filter((r) => r.items.length > 0);

  return (
    <>
      <HomeHero items={hero} />

      {rows.length > 0 && (
        <section className={styles.cine} aria-label="Films et séries à découvrir">
          <div className="container">
            <div className={styles.cineIntro}>
              <span className={styles.sectionLabel}>Divertissement</span>
              <h2 className={styles.sectionTitle}>À découvrir</h2>
              <p className={styles.sectionText}>
                Une sélection cinématographique à titre indicatif. Retrouvez des milliers de films
                et de séries dans votre abonnement.
              </p>
            </div>

            {rows.map((r) => (
              <MarqueeRow key={r.title} title={r.title} subtitle={r.subtitle} items={r.items} speed={r.speed} />
            ))}

            <p className={styles.cineAttribution}>
              Données et affiches fournies par{" "}
              <a href="https://www.themoviedb.org" target="_blank" rel="noopener noreferrer">
                The Movie Database (TMDB)
              </a>
              . Ce produit utilise l&apos;API de TMDB mais n&apos;est ni approuvé ni certifié par TMDB.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
