import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Formats IPTV : M3U, Xtream Codes et EPG expliqués",
  description:
    "Comprendre les formats techniques de l'IPTV : playlist M3U, API Xtream Codes et guide des programmes EPG. Explications claires et guides de configuration.",
  path: "/formats",
  keywords: ["iptv m3u", "xtream codes", "iptv epg", "playlist m3u", "format iptv"],
});

const ITEMS = [
  { href: "/formats/m3u", title: "Playlist M3U", description: "Le format de liste de lecture universel : ce que c'est et comment l'utiliser." },
  { href: "/formats/xtream-codes", title: "Xtream Codes API", description: "La méthode de connexion la plus pratique, avec catégories et EPG automatiques." },
  { href: "/formats/epg", title: "Guide des programmes (EPG)", description: "Afficher le programme TV en cours et à venir sur chaque chaîne." },
];

export default function TechniqueHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Formats techniques"
        title={<>M3U, Xtream, EPG : <span className="accent">tout comprendre</span></>}
        lead="Trois notions reviennent sans cesse dans la configuration IPTV. Voici des explications claires, sans jargon, pour chacune."
        breadcrumb={[{ label: "Technique" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />
      <Section>
        <SectionHeading eyebrow="Notions" title="Choisissez un sujet" />
        <div className="grid grid--3">
          {ITEMS.map((i) => (
            <LinkCard key={i.href} href={i.href} title={i.title} description={i.description} />
          ))}
        </div>
      </Section>
      <CTA />
    </>
  );
}
