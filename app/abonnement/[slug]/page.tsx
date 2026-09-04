import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import IncludedList from "@/components/IncludedList";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import PaymentBadges from "@/components/PaymentBadges";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { OFFERS, OFFER_SLUGS, OFFER_LIST } from "@/lib/abonnement";

export function generateStaticParams() {
  return OFFER_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const o = OFFERS[slug];
  if (!o) return {};
  return buildMetadata({
    title: o.metaTitle,
    description: o.metaDescription,
    path: `/abonnement/${o.slug}`,
    keywords: o.keywords,
  });
}

export default async function OfferPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const o = OFFERS[slug];
  if (!o) notFound();

  const others = OFFER_LIST.filter((x) => x.slug !== o.slug).slice(0, 4);

  return (
    <>
      <JsonLd data={faqSchema(o.faq)} />
      <PageHeader
        eyebrow={o.eyebrow}
        title={o.h1}
        lead={o.lead}
        breadcrumb={[{ label: "Abonnement", href: "/abonnement" }, { label: o.name }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      {/* Intro Prose */}
      <Section narrow>
        <div className="prose">
          {o.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Section>

      {/* Detailed Offer Sections */}
      {o.sections.map((s, i) => (
        <Section key={s.title} narrow variant={i % 2 === 0 ? "secondary" : undefined}>
          <div className="prose" style={{ maxWidth: "none" }}>
            <h2>{s.title}</h2>
            {s.body.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </Section>
      ))}

      {/* Pricing tailored to this offer */}
      {o.showPricing && (
        <Section variant="secondary" id="tarifs">
          <SectionHeading
            eyebrow="Tarifs & commandes"
            title={<>Choisissez votre durée pour <span className="accent">{o.name}</span></>}
            lead="Sélectionnez votre formule. Activation immédiate en 60 secondes, sans engagement."
            center
          />
          <Pricing initialConnections={o.connections ?? 1} />
        </Section>
      )}

      {/* What's included */}
      {o.showIncluded && (
        <Section>
          <SectionHeading
            eyebrow="Inclus"
            title="Tout est compris sans coût additionnel"
            lead="Toutes les options premium sont activées par défaut sur chaque compte."
          />
          <IncludedList />
        </Section>
      )}

      {/* Steps to get started */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Mise en route"
          title="Comment démarrer en 3 étapes"
          lead="De la commande à votre premier écran en moins de 2 minutes."
          center
        />
        <Steps />
      </Section>

      {/* Payment methods */}
      <Section variant="soft">
        <SectionHeading
          eyebrow="Paiement"
          title="Moyens de paiement acceptés"
          lead="Paiement 100% sécurisé avec confirmation instantanée de votre commande."
          center
        />
        <div style={{ marginTop: "var(--space-5)" }}>
          <PaymentBadges align="center" size="md" />
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Questions fréquentes" title={`Questions sur l'offre ${o.name}`} center />
        <FAQ items={o.faq} />
      </Section>

      {/* Related offers navigation */}
      <Section variant="soft" tight>
        <SectionHeading eyebrow="Explorer" title="Découvrir les autres formules" />
        <div className="grid grid--2">
          {others.map((x) => (
            <Link
              key={x.slug}
              href={`/abonnement/${x.slug}`}
              className="card card--hover"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "var(--space-4) var(--space-5)",
              }}
            >
              <div>
                <span style={{ fontWeight: 750, color: "var(--text)", display: "block", fontSize: "1.05rem" }}>
                  {x.name}
                </span>
                <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>{x.eyebrow}</span>
              </div>
              <span aria-hidden="true" style={{ color: "var(--accent)", fontWeight: 800, fontSize: "1.2rem" }}>
                →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CTA />
    </>
  );
}
