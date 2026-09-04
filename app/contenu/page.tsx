import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Contenu IPTV : sport, chaînes et divertissement",
  description:
    "Découvrez le contenu 4kiptvfr.com : sport en direct, chaînes françaises et internationales, films, séries et documentaires en 4K.",
  path: "/contenu",
  keywords: ["iptv france chaines", "iptv france sport", "iptv france contenu", "iptv france vod"],
});

const ITEMS = [
  { href: "/contenu/sport", title: "Sport en direct", description: "Ligue 1, Champions League, Formule 1, tennis, rugby, NBA et plus." },
  { href: "/contenu/chaines", title: "Chaînes", description: "Toutes les chaînes françaises, la TNT et les bouquets internationaux." },
  { href: "/contenu/divertissement", title: "Films & séries", description: "Une vidéothèque de 180 000+ films, séries et documentaires." },
];

export default function ContenuHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contenu"
        title={<>Tout ce que vous pouvez <span className="accent">regarder</span></>}
        lead="Du sport en direct aux plus grandes séries, en passant par toutes les chaînes françaises : un aperçu de ce que propose 4kiptvfr.com."
        breadcrumb={[{ label: "Contenu" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />
      <Section>
        <SectionHeading eyebrow="Explorer" title="Par catégorie" />
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
