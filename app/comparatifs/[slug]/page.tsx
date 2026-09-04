import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import ComparisonTable from "@/components/ComparisonTable";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { COMPARATIFS, COMPARATIF_SLUGS } from "@/lib/comparatifs";

export function generateStaticParams() {
  return COMPARATIF_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = COMPARATIFS[slug];
  if (!c) return {};
  return buildMetadata({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/comparatifs/${c.slug}`,
    keywords: c.keywords,
  });
}

export default async function ComparatifPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = COMPARATIFS[slug];
  if (!c) notFound();

  return (
    <>
      <PageHeader
        eyebrow="Comparatif"
        title={c.h1}
        lead={c.lead}
        breadcrumb={[{ label: "Comparatifs", href: "/comparatifs" }, { label: c.competitor }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          {c.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Face à face" title={`4kiptvfr.com vs ${c.competitor}`} />
        <ComparisonTable
          columns={["Critère", "4kiptvfr.com", c.competitor]}
          highlightColumn={1}
          rows={c.rows.map((r) => ({ label: r.label, cells: [r.ours, r.theirs] }))}
        />
      </Section>

      <Section narrow>
        <div className="prose">
          <h2>Notre verdict</h2>
          <p>{c.verdict}</p>
          <p>
            Voir aussi le guide <Link href="/meilleur-iptv" className="link">Meilleur IPTV</Link> et nos autres{" "}
            <Link href="/comparatifs" className="link">comparatifs</Link>.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
