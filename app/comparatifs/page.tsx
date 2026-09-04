import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { COMPARATIF_LIST } from "@/lib/comparatifs";

export const metadata = buildMetadata({
  title: "Comparatifs IPTV : face à Canal+, Molotov, Netflix…",
  description:
    "IPTV premium face aux offres traditionnelles : Canal+, Molotov, Netflix, Freebox, TNT. Des comparaisons honnêtes pour choisir la meilleure solution TV.",
  path: "/comparatifs",
  keywords: ["iptv vs canal plus", "iptv vs molotov", "iptv vs netflix", "iptv vs freebox", "iptv ou cable", "iptv ou satellite", "alternative tv"],
});

export default function ComparatifsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Comparatifs"
        title={<>IPTV face aux <span className="accent">offres classiques</span></>}
        lead="Comment un service IPTV premium se compare-t-il à Canal+, Molotov, Netflix ou à la Freebox ? Des comparaisons honnêtes, critère par critère."
        breadcrumb={[{ label: "Comparatifs" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Face à face" title="Choisissez une comparaison" />
        <div className="grid grid--3">
          {COMPARATIF_LIST.map((c) => (
            <LinkCard key={c.slug} href={`/comparatifs/${c.slug}`} kicker="Comparatif" title={`vs ${c.competitor}`} description={c.lead} meta="Voir la comparaison" />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
