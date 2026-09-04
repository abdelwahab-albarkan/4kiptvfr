import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import LinkCard from "@/components/LinkCard";
import JsonLd from "@/components/JsonLd";
import Icon, { type IconName } from "@/components/Icon";
import { buildMetadata, faqSchema, howToSchema } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { APPLICATIONS, APP_SLUGS, APP_ICONS } from "@/lib/applications";
import { APP_CROSS_LINKS } from "@/lib/internal-links";

export function generateStaticParams() {
  return APP_SLUGS.map((app) => ({ app }));
}

export async function generateMetadata({ params }: { params: Promise<{ app: string }> }) {
  const { app } = await params;
  const guide = APPLICATIONS[app];
  if (!guide) return {};
  return buildMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/applications/${guide.slug}`,
    keywords: guide.keywords,
  });
}

export default async function ApplicationPage({ params }: { params: Promise<{ app: string }> }) {
  const { app } = await params;
  const guide = APPLICATIONS[app];
  if (!guide) notFound();

  const crossLinks = APP_CROSS_LINKS[guide.slug];

  return (
    <>
      <JsonLd
        data={[howToSchema(`Configurer ${guide.name}`, guide.steps), faqSchema(guide.problems)]}
      />

      <PageHeader
        eyebrow={guide.eyebrow}
        title={guide.h1}
        lead={guide.lead}
        breadcrumb={[{ label: "Applications", href: "/applications" }, { label: guide.name }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <div className="home-split">
          <div className="prose" style={{ maxWidth: "none" }}>
            <p><strong>Plateformes :</strong> {guide.platforms} · <strong>Prix :</strong> {guide.free ? "Gratuit" : "Payant"}</p>
            {guide.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="app-tile" aria-hidden="true">
            <span className="app-tile__icon">
              <Icon name={(APP_ICONS[guide.slug] as IconName) ?? "play"} size={40} />
            </span>
            <span className="app-tile__name">{guide.name}</span>
            <span className="app-tile__meta">{guide.free ? "Application gratuite" : "Application payante"}</span>
          </div>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Configuration" title={`Configurer ${guide.name}`} lead="La même logique partout : ajoutez vos accès via API Xtream ou lien M3U." />
        <Steps items={guide.steps} />
      </Section>

      <Section>
        <div className="home-split">
          <div className="card">
            <span className="badge">Points forts</span>
            <ul style={{ marginTop: "var(--space-4)", display: "grid", gap: "10px" }}>
              {guide.pros.map((p) => (
                <li key={p} style={{ display: "flex", gap: "10px", color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--success)", fontWeight: 700 }} aria-hidden="true">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <span className="badge badge--neutral">À savoir</span>
            <ul style={{ marginTop: "var(--space-4)", display: "grid", gap: "10px" }}>
              {guide.cons.map((c) => (
                <li key={c} style={{ display: "flex", gap: "10px", color: "var(--text-secondary)" }}>
                  <span style={{ color: "var(--text-muted)", fontWeight: 700 }} aria-hidden="true">–</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="soft">
        <SectionHeading eyebrow="Sur quel appareil" title={`${guide.name} selon votre matériel`} />
        <div className="grid grid--3">
          {guide.devices.map((d) => (
            <LinkCard key={d.href} href={d.href} kicker="Appareil" title={d.label} meta="Guide d'installation" />
          ))}
        </div>
      </Section>

      {crossLinks && (
        <Section>
          <SectionHeading eyebrow="Formats & Protocoles" title="Méthodes de connexion et dépannage" />
          <div className="grid grid--3">
            {crossLinks.formats.map((f) => (
              <LinkCard key={f.href} href={f.href} kicker="Format" title={f.label} description="Guide technique et intégration." meta="Comprendre le format" />
            ))}
            {crossLinks.troubleshooting.map((t) => (
              <LinkCard key={t.href} href={t.href} kicker="Dépannage" title={t.label} description={t.description} meta="Résoudre l'erreur" />
            ))}
          </div>
        </Section>
      )}

      <Section variant="secondary">
        <SectionHeading eyebrow="Dépannage" title="Questions fréquentes" center />
        <FAQ items={guide.problems} />
        <p style={{ textAlign: "center", marginTop: "var(--space-6)" }}>
          Besoin d'aide ? Voir le <Link href="/problemes" className="link">guide de dépannage complet</Link>.
        </p>
      </Section>

      <CTA />
    </>
  );
}
