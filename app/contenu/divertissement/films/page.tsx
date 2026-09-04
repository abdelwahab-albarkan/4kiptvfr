import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import MovieRow from "@/components/tmdb/MovieRow";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { getPopularMovies, getTopRatedMovies } from "@/lib/tmdb/queries";

export const metadata = buildMetadata({
  title: "Films IPTV : la vidéothèque cinéma à la demande",
  description:
    "Des milliers de films à la demande en IPTV : nouveautés, grands classiques et cinéma international, en VF et VOST, en qualité pouvant aller jusqu'à la 4K.",
  path: "/contenu/divertissement/films",
  keywords: ["iptv films", "iptv cinema", "iptv vod", "films iptv france", "iptv film 4k"],
});

const GENRES = ["Action & aventure", "Comédie", "Drame", "Science-fiction & fantastique", "Thriller & policier", "Animation", "Horreur", "Cinéma français"];

export default async function FilmsPage() {
  const [popular, topRated] = await Promise.all([getPopularMovies(), getTopRatedMovies()]);
  return (
    <>
      <PageHeader
        eyebrow="Divertissement · Films"
        title={<>Le <span className="accent">cinéma</span> à la demande</>}
        lead="Une vidéothèque de films mise à jour régulièrement : nouveautés, classiques et cinéma du monde entier, en version française et en version originale sous-titrée."
        breadcrumb={[{ label: "Contenu", href: "/contenu" }, { label: "Films & séries", href: "/contenu/divertissement" }, { label: "Films" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            La vidéothèque de films complète l'accès au direct : vous passez d'un match à un film sans changer d'application. Les
            titres récents côtoient les grands classiques, avec des pistes VF et VOST selon les films.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Genres" title="Un catalogue pour toutes les envies" />
        <div className="chip-grid">
          {GENRES.map((g) => (
            <span key={g} className="badge badge--neutral" style={{ fontSize: "0.9rem", padding: "10px 16px" }}>
              {g}
            </span>
          ))}
        </div>
      </Section>

      {popular.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="À l'affiche"
            title="Films populaires du moment"
            lead="Une sélection éditoriale des films qui font l'actualité, à titre indicatif (données TMDB)."
          />
          <div style={{ display: "grid", gap: "var(--space-8)" }}>
            <MovieRow title="Populaires" items={popular} />
            {topRated.length > 0 && <MovieRow title="Les mieux notés" items={topRated} />}
          </div>
        </Section>
      )}

      <Section narrow>
        <div className="prose">
          <h2>Qualité et compatibilité</h2>
          <p>
            De nombreux films sont proposés en HD et 4K selon la source. Découvrez aussi les{" "}
            <Link href="/contenu/divertissement/series" className="link">séries</Link> et l'ensemble de notre{" "}
            <Link href="/contenu/divertissement" className="link">offre divertissement</Link>.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
