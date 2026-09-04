import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import MovieRow from "@/components/tmdb/MovieRow";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { getPopularTv, getFrenchTv } from "@/lib/tmdb/queries";

export const metadata = buildMetadata({
  title: "Séries IPTV : saisons complètes à la demande",
  description:
    "Des milliers de séries en IPTV : saisons complètes des séries françaises, américaines et internationales, ajoutées et mises à jour régulièrement, en VF et VOST.",
  path: "/contenu/divertissement/series",
  keywords: ["iptv series", "series iptv france", "iptv serie vod", "iptv saisons completes"],
});

const CATEGORIES = ["Séries françaises", "Séries américaines", "Séries britanniques", "Drames & thrillers", "Comédies", "Science-fiction", "Séries jeunesse"];

export default async function SeriesPage() {
  const [popular, french] = await Promise.all([getPopularTv(), getFrenchTv()]);
  return (
    <>
      <PageHeader
        eyebrow="Divertissement · Séries"
        title={<>Les <span className="accent">séries</span>, saisons complètes</>}
        lead="Des saisons complètes de séries françaises et internationales, à regarder à votre rythme, en version française et en version originale sous-titrée."
        breadcrumb={[{ label: "Contenu", href: "/contenu" }, { label: "Films & séries", href: "/contenu/divertissement" }, { label: "Séries" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            La vidéothèque de séries donne accès à de nombreuses saisons complètes, régulièrement enrichies. De quoi enchaîner les
            épisodes sans dépendre du calendrier de diffusion.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Catégories" title="Pour tous les goûts" />
        <div className="chip-grid">
          {CATEGORIES.map((c) => (
            <span key={c} className="badge badge--neutral" style={{ fontSize: "0.9rem", padding: "10px 16px" }}>
              {c}
            </span>
          ))}
        </div>
      </Section>

      {popular.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="À l'affiche"
            title="Les séries du moment"
            lead="Une sélection éditoriale des séries populaires, à titre indicatif (données TMDB)."
          />
          <div style={{ display: "grid", gap: "var(--space-8)" }}>
            <MovieRow title="Séries populaires" items={popular} />
            {french.length > 0 && <MovieRow title="Séries françaises" items={french} />}
          </div>
        </Section>
      )}

      <Section narrow>
        <div className="prose">
          <h2>Séries et cinéma réunis</h2>
          <p>
            Complétez votre visionnage avec notre catalogue de{" "}
            <Link href="/contenu/divertissement/films" className="link">films</Link> et découvrez toute l'
            <Link href="/contenu/divertissement" className="link">offre divertissement</Link>.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
