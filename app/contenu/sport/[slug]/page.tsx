import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { SPORT, SPORT_SLUGS } from "@/lib/sport";

export function generateStaticParams() {
  return SPORT_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = SPORT[slug];
  if (!e) return {};
  return buildMetadata({
    title: e.metaTitle,
    description: e.metaDescription,
    path: `/contenu/sport/${e.slug}`,
    keywords: e.keywords,
  });
}

export default async function SportEntryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = SPORT[slug];
  if (!e) notFound();

  const breadcrumb = [
    { label: "Contenu", href: "/contenu" },
    { label: "Sport", href: "/contenu/sport" },
    { label: e.name },
  ];
  const coversTitle = e.type === "chaine" ? "Ce que la chaîne diffuse" : "Ce que vous pouvez suivre";

  return (
    <>
      <JsonLd data={faqSchema(e.faq)} />

      <PageHeader
        eyebrow={e.eyebrow}
        title={e.h1}
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

      {e.broadcasters && e.broadcasters.length > 0 && (
        <Section variant="secondary">
          <SectionHeading
            eyebrow="Où regarder"
            title="Diffuseurs en France"
            lead="Un service IPTV réunit ces sources au même endroit — les droits pouvant évoluer d'une saison à l'autre."
          />
          <div className="chip-grid">
            {e.broadcasters.map((b) => (
              <span key={b} className="badge badge--neutral" style={{ fontSize: "0.9rem", padding: "10px 16px" }}>
                {b}
              </span>
            ))}
          </div>
        </Section>
      )}

      {e.covers && e.covers.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Au programme" title={coversTitle} />
          <div className="grid grid--3">
            {e.covers.map((c) => (
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
      )}

      {e.facts && e.facts.length > 0 && (
        <Section variant="soft">
          <SectionHeading eyebrow="En bref" title="L'essentiel à retenir" />
          <div className="table-scroll" style={{ maxWidth: 760 }}>
            <table className="dtable dtable--wrap">
              <tbody>
                {e.facts.map((f) => (
                  <tr key={f.label}>
                    <td>{f.label}</td>
                    <td>{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Section narrow>
        <div className="prose">
          <h2>Regarder {e.name} sans coupure</h2>
          <p>
            Pour un direct fluide lors des grands rendez-vous, privilégiez une connexion filaire (Ethernet) et un lecteur
            réactif comme <Link href="/applications/tivimate" className="link">TiviMate</Link> ou{" "}
            <Link href="/applications/smarters" className="link">IPTV Smarters</Link>. En cas de ralentissement, consultez nos
            conseils sur le <Link href="/problemes/buffering-coupure" className="link">buffering et la stabilité</Link>.
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
