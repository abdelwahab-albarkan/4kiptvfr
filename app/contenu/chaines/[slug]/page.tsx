import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import Flag, { flagCode } from "@/components/Flag";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { CHAINES, CHAINES_SLUGS } from "@/lib/chaines";

export function generateStaticParams() {
  return CHAINES_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = CHAINES[slug];
  if (!e) return {};
  return buildMetadata({
    title: e.metaTitle,
    description: e.metaDescription,
    path: `/contenu/chaines/${e.slug}`,
    keywords: e.keywords,
  });
}

export default async function ChaineEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = CHAINES[slug];
  if (!e) notFound();

  const showFlag = e.country && flagCode(e.country);
  const breadcrumb = [
    { label: "Contenu", href: "/contenu" },
    { label: "Chaînes", href: "/contenu/chaines" },
    { label: e.name },
  ];

  return (
    <>
      <JsonLd data={faqSchema(e.faq)} />

      <PageHeader
        eyebrow={e.eyebrow}
        title={
          showFlag ? (
            <span style={{ display: "inline-flex", alignItems: "center", gap: "14px", flexWrap: "wrap" }}>
              <Flag country={e.country as string} size={40} />
              {e.h1}
            </span>
          ) : (
            e.h1
          )
        }
        lead={e.lead}
        breadcrumb={breadcrumb}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          {e.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading
          eyebrow="Chaînes"
          title={`${e.name} : un aperçu`}
          lead="Sélection indicative et non exhaustive des chaînes disponibles — le catalogue évolue régulièrement."
        />
        <div className="chip-grid">
          {e.channels.map((c) => (
            <span key={c} className="badge badge--neutral" style={{ fontSize: "0.92rem", padding: "10px 16px" }}>
              {c}
            </span>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Programmes" title="Ce que vous y trouvez" />
        <div className="grid grid--3">
          {e.categories.map((c) => (
            <div key={c} className="card" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" fill="var(--accent-soft)" />
                <path d="M8 12.5l2.5 2.5L16 9" stroke="var(--accent-hover)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span style={{ color: "var(--text-secondary)", fontSize: "0.97rem" }}>{c}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section narrow variant="soft">
        <div className="prose">
          <h2>Sans parabole, sur tous vos appareils</h2>
          <p>
            Toutes les chaînes passent par votre connexion internet : aucun matériel de réception n&apos;est nécessaire.
            Retrouvez-les sur votre <Link href="/appareils" className="link">Smart TV, box Android, Fire TV Stick ou mobile</Link>,
            avec un lecteur comme <Link href="/applications/smarters" className="link">IPTV Smarters</Link>. Voir aussi toutes les{" "}
            <Link href="/contenu/chaines" className="link">chaînes disponibles</Link>.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="FAQ" title={`Questions fréquentes — ${e.name}`} center />
        <FAQ items={e.faq} />
      </Section>

      <Section variant="soft">
        <SectionHeading eyebrow="Pour aller plus loin" title="Pages associées" />
        <div className="grid grid--3">
          {e.related.map((r) => (
            <LinkCard key={r.href} href={r.href} kicker="À découvrir" title={r.label} meta="Voir la page" />
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
