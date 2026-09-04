import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Films & séries IPTV : la vidéothèque à la demande",
  description:
    "180 000+ films, séries et documentaires à la demande avec 4kiptvfr.com, en VF et VOST, mis à jour quotidiennement. Une alternative complète au streaming classique.",
  path: "/contenu/divertissement",
  keywords: ["iptv france vod", "iptv films series", "iptv france films", "iptv documentaires"],
});

const CATEGORIES = [
  { title: "Films", description: "Nouveautés, grands classiques et cinéma international, en VF et version originale sous-titrée." },
  { title: "Séries", description: "Saisons complètes des séries les plus populaires, ajoutées et mises à jour régulièrement." },
  { title: "Documentaires", description: "Nature, histoire, sciences, société : une large sélection de documentaires." },
  { title: "Jeunesse", description: "Dessins animés et programmes pour enfants, avec contrôle parental." },
];

export default function DivertissementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Films & séries"
        title={<>Une <span className="accent">vidéothèque</span> qui ne s'épuise jamais</>}
        lead="Plus de 180 000 films, séries et documentaires à la demande, mis à jour quotidiennement, en version française et en version originale sous-titrée."
        breadcrumb={[{ label: "Contenu", href: "/contenu" }, { label: "Films & séries" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Catégories" title="Ce que contient la vidéothèque" />
        <div className="grid grid--2">
          {CATEGORIES.map((c) => (
            <article key={c.title} className="card">
              <h3 style={{ fontSize: "1.15rem" }}>{c.title}</h3>
              <p style={{ marginTop: "var(--space-3)", fontSize: "0.95rem" }}>{c.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section narrow variant="secondary">
        <div className="prose">
          <h2>Le direct et la VOD au même endroit</h2>
          <p>
            La vidéothèque complète l'accès au direct : vous passez du <Link href="/contenu/sport" className="link">sport en direct</Link>{" "}
            à un film sans changer d'application. Découvrez aussi toutes les{" "}
            <Link href="/contenu/chaines" className="link">chaînes disponibles</Link>.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
