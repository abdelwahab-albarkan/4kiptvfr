import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import LinkCard from "@/components/LinkCard";
import Flag from "@/components/Flag";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { SITE, PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import {
  COUNTRIES,
  COUNTRY_REGIONS,
  CHANNEL_CATEGORIES,
  BOUQUETS,
  CHANNEL_FAQ,
} from "@/lib/channels";
import { CHAINES_BY_TYPE } from "@/lib/chaines";

export const metadata = buildMetadata({
  title: "Liste des chaînes IPTV : françaises, sport et internationales",
  description:
    "La liste des chaînes IPTV 4kiptvfr.com : 50 000+ chaînes en direct — françaises, sport, info, jeunesse et bouquets internationaux de nombreux pays, en 4K.",
  path: "/contenu/chaines",
  keywords: ["iptv france chaines", "liste chaines iptv", "iptv chaines francaises", "iptv chaines internationales", "iptv tnt"],
});

// ItemList schema — only real destination pages carry an `item` URL.
const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Catégories de chaînes IPTV",
  itemListElement: CHANNEL_CATEGORIES.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.title,
    ...(c.href ? { item: `${SITE.domain}${c.href}` } : {}),
  })),
};

export default function ChainesPage() {
  return (
    <>
      <JsonLd data={[itemListSchema, faqSchema(CHANNEL_FAQ)]} />

      <PageHeader
        eyebrow="Chaînes"
        title={<>La liste des <span className="accent">chaînes IPTV</span></>}
        lead="Plus de 50 000 chaînes en direct : toutes les chaînes françaises, le sport, l'information, la jeunesse et un large choix de bouquets internationaux, avec guide des programmes."
        breadcrumb={[{ label: "Contenu", href: "/contenu" }, { label: "Chaînes" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            4kiptvfr.com réunit l'essentiel de la télévision française et une ouverture large sur le monde. Vous retrouvez les
            grandes chaînes généralistes, l'information en continu, le sport en direct et une immense sélection de contenus à la
            demande — le tout dans une qualité pouvant aller jusqu'à la 4K, avec un guide des programmes intégré.
          </p>
          <p>
            Les catégories et exemples présentés ci-dessous sont indicatifs et non exhaustifs : le catalogue évolue régulièrement.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <Stats />
      </Section>

      {/* Thematic categories */}
      <Section>
        <SectionHeading
          eyebrow="Catégories"
          title="Les grandes familles de chaînes"
          lead="Chaque univers a sa place — du direct sportif aux dessins animés."
        />
        <div className="grid grid--3">
          {CHANNEL_CATEGORIES.map((c) =>
            c.href ? (
              <LinkCard key={c.title} href={c.href} title={c.title} description={c.description} meta="Découvrir" />
            ) : (
              <article key={c.title} className="card">
                <h3 style={{ fontSize: "1.15rem" }}>{c.title}</h3>
                <p style={{ marginTop: "var(--space-3)", fontSize: "0.95rem" }}>{c.description}</p>
              </article>
            )
          )}
        </div>
      </Section>

      {/* Countries */}
      <Section variant="soft">
        <SectionHeading
          eyebrow="Couverture"
          title="Des chaînes de nombreux pays"
          lead="Un aperçu des pays dont les bouquets sont proposés. Liste indicative, régulièrement enrichie."
        />
        <div style={{ display: "grid", gap: "var(--space-6)" }}>
          {COUNTRY_REGIONS.map((region) => {
            const countries = COUNTRIES.filter((c) => c.region === region);
            if (countries.length === 0) return null;
            return (
              <div key={region}>
                <h3 style={{ fontSize: "0.95rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "var(--space-4)" }}>
                  {region}
                </h3>
                <div className="flag-grid">
                  {countries.map((c) => (
                    <span key={c.name} className="flag-chip">
                      <Flag country={c.name} size={26} />
                      {c.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Per-country channel pages */}
      <Section>
        <SectionHeading
          eyebrow="Chaînes par pays"
          title="Retrouvez les chaînes de votre pays"
          lead="Des pages dédiées, pays par pays, avec les grandes chaînes disponibles en direct."
        />
        <div className="grid grid--3">
          <LinkCard href="/contenu/chaines/francaises" kicker="France" title="Chaînes françaises" description="TF1, France TV, M6, la TNT et les grandes chaînes hexagonales." meta="Voir les chaînes" />
          {CHAINES_BY_TYPE("pays").map((c) => (
            <LinkCard key={c.slug} href={`/contenu/chaines/${c.slug}`} kicker="International" title={c.name} description={c.lead} meta="Voir les chaînes" />
          ))}
        </div>
        <p style={{ marginTop: "var(--space-6)" }}>
          Voir aussi l&apos;ensemble des <Link href="/contenu/chaines/internationales" className="link">chaînes internationales</Link>.
        </p>
      </Section>

      {/* Per-theme channel pages */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Chaînes par thème"
          title="Explorez par univers"
          lead="Cinéma, jeunesse, documentaires, information et musique — chaque famille a sa page."
        />
        <div className="grid grid--3">
          {CHAINES_BY_TYPE("theme").map((c) => (
            <LinkCard key={c.slug} href={`/contenu/chaines/${c.slug}`} kicker="Thématique" title={c.name} description={c.lead} meta="Voir les chaînes" />
          ))}
        </div>
      </Section>

      {/* Detailed bouquets */}
      <Section>
        <SectionHeading
          eyebrow="Bouquets"
          title="Un aperçu des bouquets disponibles"
          lead="Exemples de catégories accessibles selon les bouquets. Cette liste est donnée à titre indicatif."
        />
        <div className="grid grid--3">
          {BOUQUETS.map((b) => (
            <article key={b.group} className="card">
              <h3 style={{ fontSize: "1.1rem" }}>{b.group}</h3>
              <ul style={{ marginTop: "var(--space-4)", display: "grid", gap: "8px" }}>
                {b.items.map((it) => (
                  <li key={it} style={{ color: "var(--text-secondary)", fontSize: "0.95rem", display: "flex", gap: "10px" }}>
                    <span aria-hidden="true" style={{ color: "var(--accent)" }}>·</span>
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p style={{ marginTop: "var(--space-6)" }}>
          Envie de détails ? Explorez le <Link href="/contenu/sport" className="link">sport en direct</Link> et notre{" "}
          <Link href="/contenu/divertissement" className="link">vidéothèque de films et séries</Link>.
        </p>
      </Section>

      {/* FAQ */}
      <Section variant="secondary">
        <SectionHeading eyebrow="Questions fréquentes" title="À propos des chaînes" center />
        <FAQ items={CHANNEL_FAQ} />
      </Section>

      <CTA />
    </>
  );
}
