import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "À propos de 4kiptvfr.com",
  description:
    "Découvrez 4kiptvfr.com : notre mission, nos valeurs et notre engagement pour une IPTV premium, stable et transparente en France.",
  path: "/a-propos",
  keywords: ["iptv france a propos", "francestreamtv", "qui sommes nous iptv"],
});

const VALUES = [
  { title: "La qualité avant tout", description: "Nous privilégions une infrastructure solide et une vraie qualité 4K, plutôt que la quantité au rabais. Un service qui fonctionne, tout simplement." },
  { title: "La transparence", description: "Des offres claires, sans engagement caché ni reconduction automatique. Vous savez exactement ce que vous payez et ce que vous obtenez." },
  { title: "Un support humain", description: "Une équipe francophone réellement disponible, qui vous accompagne de l'installation jusqu'à votre premier direct et au-delà." },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title={<>Une IPTV pensée pour <span className="accent">durer</span></>}
        lead="4kiptvfr.com est né d'une conviction simple : le streaming premium doit être fiable, transparent et accessible, sans compromis sur la qualité."
        breadcrumb={[{ label: "À propos" }]}
      />

      <Section narrow>
        <div className="prose">
          <p>
            Notre objectif est de proposer une expérience de télévision moderne qui rivalise avec les meilleurs services de
            streaming, tout en donnant accès à l'ensemble des chaînes et contenus qui comptent pour le public français.
          </p>
          <p>
            Nous investissons dans un réseau de serveurs performants, une technologie anti-coupure et une vidéothèque
            constamment mise à jour. Mais un bon service ne se résume pas à la technique : il repose aussi sur la confiance, la
            clarté et un accompagnement humain de qualité.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <Stats />
      </Section>

      <Section>
        <SectionHeading eyebrow="Nos valeurs" title="Ce qui nous guide" />
        <div className="grid grid--3">
          {VALUES.map((v) => (
            <article key={v.title} className="card">
              <h3 style={{ fontSize: "1.2rem" }}>{v.title}</h3>
              <p style={{ marginTop: "var(--space-3)", fontSize: "0.975rem" }}>{v.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <CTA
        title="Envie d'en savoir plus ?"
        lead="Notre équipe se fera un plaisir de répondre à toutes vos questions sur le service."
        primary={SECONDARY_CTA}
        secondary={null}
      />
    </>
  );
}
