import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Steps from "@/components/Steps";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import LinkCard from "@/components/LinkCard";
import IncludedList from "@/components/IncludedList";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema, howToSchema } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { DEVICES, DEVICE_SLUGS, DEVICE_IMAGES } from "@/lib/devices";
import { DEVICE_CROSS_LINKS } from "@/lib/internal-links";

export function generateStaticParams() {
  return DEVICE_SLUGS.map((device) => ({ device }));
}

export async function generateMetadata({ params }: { params: Promise<{ device: string }> }) {
  const { device } = await params;
  const guide = DEVICES[device];
  if (!guide) return {};
  return buildMetadata({
    title: guide.metaTitle,
    description: guide.metaDescription,
    path: `/appareils/${guide.slug}`,
    keywords: guide.keywords,
  });
}

export default async function DevicePage({ params }: { params: Promise<{ device: string }> }) {
  const { device } = await params;
  const guide = DEVICES[device];
  if (!guide) notFound();

  const crossLinks = DEVICE_CROSS_LINKS[guide.slug];

  return (
    <>
      <JsonLd
        data={[
          howToSchema(`Installer 4kiptvfr.com sur ${guide.name}`, guide.steps),
          faqSchema(guide.faq),
        ]}
      />

      <PageHeader
        eyebrow={guide.eyebrow}
        title={guide.h1}
        lead={guide.lead}
        breadcrumb={[{ label: "Appareils", href: "/appareils" }, { label: guide.name }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <div className="home-split">
          <div className="prose" style={{ maxWidth: "none" }}>
            {guide.os ? <p><strong>Système :</strong> {guide.os}</p> : null}
            {guide.intro.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {DEVICE_IMAGES[guide.slug] ? (
            <Image
              src={DEVICE_IMAGES[guide.slug].src}
              alt={DEVICE_IMAGES[guide.slug].alt}
              width={720}
              height={540}
              priority
              className="rounded-media"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
              sizes="(max-width: 900px) 100vw, 50vw"
            />
          ) : null}
        </div>
      </Section>

      <Section variant="secondary">
        <div className="home-split">
          <div>
            <SectionHeading eyebrow="Compatibilité" title={`4kiptvfr.com sur ${guide.name}`} />
            <ul style={{ display: "grid", gap: "10px" }}>
              {guide.compatibility.map((c) => (
                <li key={c} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="12" cy="12" r="10" fill="var(--accent-soft)" />
                    <path d="M8 12.5l2.5 2.5L16 9" stroke="var(--accent-hover)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ color: "var(--text-secondary)" }}>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card">
            <span className="badge">Inclus</span>
            <h3 style={{ marginTop: "var(--space-4)", fontSize: "1.2rem" }}>Avec votre abonnement</h3>
            <div style={{ marginTop: "var(--space-4)" }}>
              <IncludedList items={["50 000+ chaînes en direct", "180 000+ films & séries", "Guide des programmes (EPG)", "Activation en moins de 60 s"]} columns={1} />
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="En bref" title={`L'essentiel sur ${guide.name}`} lead="Les caractéristiques clés pour configurer votre appareil en toute sérénité." />
        <div className="table-scroll" style={{ maxWidth: 760 }}>
          <table className="dtable dtable--wrap">
            <tbody>
              {guide.quickFacts.map((f) => (
                <tr key={f.label}>
                  <td>{f.label}</td>
                  <td>{f.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading
          eyebrow="Installation"
          title={`Comment installer l'IPTV sur ${guide.name} en ${guide.steps.length} étapes`}
          lead={`La marche à suivre pour configurer 4kiptvfr.com sur ${guide.name}.`}
        />
        <Steps items={guide.steps} />
      </Section>

      <Section variant="soft">
        <SectionHeading eyebrow="Applications" title="Lecteurs recommandés" lead={`Les applications les mieux adaptées à ${guide.name}.`} />
        <div className="grid grid--3">
          {guide.apps.map((app) => (
            <LinkCard key={app.name} href={app.href} kicker="Compatible" title={app.name} description={app.note} meta="Guide de l'appli" />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Dépannage"
          title={`Problèmes fréquents sur ${guide.name}`}
          lead="Un tableau clair : le problème, sa cause probable et la solution à appliquer."
        />
        <div className="table-scroll">
          <table className="dtable">
            <thead>
              <tr>
                <th>Problème</th>
                <th>Cause possible</th>
                <th>Solution</th>
              </tr>
            </thead>
            <tbody>
              {guide.troubleshoot.map((t) => (
                <tr key={t.problem}>
                  <td>{t.problem}</td>
                  <td>{t.cause}</td>
                  <td>{t.solution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: "var(--space-5)" }}>
          Besoin d&apos;aide supplémentaire ? Consultez le{" "}
          <Link href="/problemes" className="link">centre de dépannage complet</Link>.
        </p>
      </Section>

      {crossLinks && (
        <Section variant="soft">
          <SectionHeading eyebrow="Pour aller plus loin" title="Pages associées" lead="Applications, formats et guides utiles pour tirer le meilleur de votre appareil." />
          <div className="grid grid--3">
            {crossLinks.apps.slice(0, 2).map((a) => (
              <LinkCard key={a.href} href={a.href} kicker="Application" title={a.label} description={a.description ?? "Lecteur IPTV compatible et recommandé."} meta="Voir l'application" />
            ))}
            {crossLinks.relatedGuides.slice(0, 2).map((g) => (
              <LinkCard key={g.href} href={g.href} kicker="Guide pratique" title={g.label} description="Tutoriel détaillé et bonnes pratiques." meta="Lire le guide" />
            ))}
            {crossLinks.relatedDevices.slice(0, 2).map((d) => (
              <LinkCard key={d.href} href={d.href} kicker="Autre appareil" title={`IPTV sur ${d.label}`} description="Consulter le guide d'installation dédié." meta="Voir le guide" />
            ))}
          </div>
          <p style={{ marginTop: "var(--space-6)", maxWidth: 720 }}>
            Pour choisir la bonne offre, consultez notre guide du{" "}
            <Link href="/meilleur-iptv" className="link">meilleur IPTV</Link> et les{" "}
            <Link href="/abonnement" className="link">formules d&apos;abonnement</Link>. Découvrez aussi les{" "}
            <Link href="/formats/xtream-codes" className="link">codes Xtream</Link> et le format{" "}
            <Link href="/formats/m3u" className="link">M3U</Link> pour la configuration.
          </p>
        </Section>
      )}

      <Section variant="secondary">
        <SectionHeading eyebrow="FAQ" title={`Questions fréquentes — IPTV sur ${guide.name}`} center />
        <FAQ items={guide.faq} />
        <p style={{ textAlign: "center", marginTop: "var(--space-6)" }}>
          Un autre souci ? Consultez notre <Link href="/problemes" className="link">guide de dépannage complet</Link>.
        </p>
      </Section>

      <CTA />
    </>
  );
}
