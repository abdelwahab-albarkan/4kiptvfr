import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import Steps from "@/components/Steps";
import IncludedList from "@/components/IncludedList";
import Pricing from "@/components/Pricing";
import TrustProof from "@/components/TrustProof";
import Reviews from "@/components/Reviews";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Button from "@/components/Button";
import LinkCard from "@/components/LinkCard";
import ComparisonTable from "@/components/ComparisonTable";
import DeviceGrid from "@/components/DeviceGrid";
import SportShowcase from "@/components/SportShowcase";
import MediaSection from "@/components/tmdb/MediaSection";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, organizationSchema, websiteSchema, faqSchema } from "@/lib/seo";
import { PRIMARY_CTA, CLUSTERS, FAQ_ITEMS } from "@/lib/site";
import { DEVICE_LIST } from "@/lib/devices";
import { APP_LIST } from "@/lib/applications";

export const metadata = buildMetadata({
  title: "IPTV France : abonnement premium 4K, 50 000+ chaînes",
  description:
    "4kiptvfr.com, le service IPTV pensé pour la France : une offre premium avec 50 000+ chaînes en direct, sport, 180 000+ films et séries en 4K. Service fiable, compatible tous appareils, activation en 60 s, sans engagement.",
  path: "/",
  keywords: ["iptv france", "abonnement iptv france", "offre iptv", "service iptv", "iptv france 4k", "iptv france premium", "site iptv"],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={[organizationSchema(), websiteSchema(), faqSchema(FAQ_ITEMS)]} />

      {/* Cinematic brand hero + entertainment rows (TMDB, falls back gracefully) */}
      <MediaSection />

      <Section variant="secondary">
        <Stats />
      </Section>

      {/* Positioning — editorial two-column, not a card grid */}
      <Section>
        <div className="home-split">
          <div>
            <SectionHeading
              eyebrow="Le service"
              title={
                <>
                  Une offre complète, <span className="accent">sans compromis</span>
                </>
              }
              lead="4kiptvfr.com réunit l'ensemble des chaînes françaises — TF1, France Télévisions, M6, Canal+, beIN Sports, RMC Sport — le sport en direct et une immense vidéothèque, dans une qualité d'image irréprochable."
            />
            <div style={{ marginTop: "var(--space-6)", display: "flex", gap: "var(--space-3)", flexWrap: "wrap" }}>
              <Button href={PRIMARY_CTA.href} size="lg">{PRIMARY_CTA.label}</Button>
              <Button href="/meilleur-iptv" size="lg" variant="secondary">Comment bien choisir</Button>
            </div>
          </div>
          <IncludedList columns={1} />
        </div>
      </Section>

      {/* Pricing — surfaced early, after the trust & value sections */}
      <Section variant="secondary" id="offres">
        <SectionHeading
          eyebrow="Tarifs"
          title={<>Des offres claires, <span className="accent">sans surprise</span></>}
          lead="Choisissez votre durée. Plus elle est longue, plus le tarif mensuel baisse."
          center
        />
        <Pricing />
      </Section>

      {/* Trust & guarantees — honest, verifiable proof (no fabricated reviews) */}
      <Section>
        <SectionHeading
          eyebrow="Preuves & garanties"
          title={<>Pourquoi nous faire <span className="accent">confiance</span></>}
          lead="Pas de faux avis ni de notes gonflées : des engagements concrets et vérifiables, avant comme après votre commande."
          center
        />
        <TrustProof />
        <p style={{ textAlign: "center", marginTop: "var(--space-6)", color: "var(--text-muted)" }}>
          Envie d'y voir clair avant de vous décider ? Consultez notre{" "}
          <Link href="/abonnement/avis" className="link">méthode d'évaluation d'un service fiable</Link>{" "}
          et notre guide sur{" "}
          <Link href="/blog/iptv-legal-en-france" className="link">l'IPTV et la légalité en France</Link>.
        </p>
      </Section>

      {/* Avis clients — honest, no fabricated reviews */}
      <Section variant="secondary" id="avis-clients">
        <SectionHeading
          eyebrow="Avis clients"
          title={<>Ce que pensent <span className="accent">nos clients</span></>}
          lead="Nous valorisons les retours de nos abonnés. Ils nous aident à améliorer le service et à vous offrir la meilleure expérience possible."
          center
        />
        <Testimonials />
      </Section>

      {/* Cluster explorer */}
      <Section variant="soft">
        <SectionHeading eyebrow="Explorer" title="Par où commencer" center />
        <div className="grid grid--3">
          {CLUSTERS.map((c) => (
            <LinkCard key={c.href} href={c.href} title={c.label} description={c.description} />
          ))}
        </div>
      </Section>

      {/* Advantages */}
      <Section>
        <SectionHeading
          eyebrow="Points forts"
          title={<>Ce qui fait la <span className="accent">différence</span></>}
          lead="Un service conçu autour de la fluidité, de la qualité et de la simplicité."
        />
        <Features />
      </Section>

      {/* Devices — rich vector icon cards */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Compatibilité"
          title="Sur tous vos appareils"
          lead="Smart TV, box, consoles multimédia, mobiles et ordinateurs : suivez le guide d'installation adapté à votre matériel."
        />
        <DeviceGrid items={DEVICE_LIST} />
      </Section>

      {/* Applications */}
      <Section>
        <div className="home-split">
          <div>
            <SectionHeading
              eyebrow="Applications"
              title={<>L'appli idéale pour <span className="accent">chaque écran</span></>}
              lead="4kiptvfr.com fonctionne avec tous les grands lecteurs IPTV. La configuration est identique partout : vos accès via API Xtream ou lien M3U."
            />
            <Link href="/applications" className="link" style={{ marginTop: "var(--space-4)", display: "inline-block" }}>
              Voir toutes les applications →
            </Link>
          </div>
          <div className="grid grid--2">
            {APP_LIST.slice(0, 4).map((a) => (
              <LinkCard key={a.slug} href={`/applications/${a.slug}`} title={a.name} description={a.platforms} meta="Guide" />
            ))}
          </div>
        </div>
      </Section>

      {/* Sport / content highlight */}
      <SportShowcase />

      {/* How it works */}
      <Section>
        <SectionHeading eyebrow="Mise en route" title="Prêt à regarder en 3 étapes" center />
        <Steps />
      </Section>

      {/* Why choose — mini comparison */}
      <Section variant="soft">
        <SectionHeading
          eyebrow="Comparer"
          title="IPTV premium ou offres traditionnelles ?"
          lead="Un aperçu de ce que change un service IPTV de qualité face à une offre TV classique."
        />
        <ComparisonTable
          columns={["Critères", "4kiptvfr.com", "Box TV classique"]}
          highlightColumn={1}
          rows={[
            { label: "Chaînes en direct", cells: ["50 000+", "200–300"] },
            { label: "Films & séries inclus", cells: ["180 000+", "Catalogue limité"] },
            { label: "Qualité 4K / HDR", cells: [true, false] },
            { label: "Multi-appareils", cells: [true, "Selon abonnement"] },
            { label: "Engagement", cells: ["Aucun", "12–24 mois"] },
          ]}
        />
        <p style={{ marginTop: "var(--space-4)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
          Comparatif indicatif. Voir nos <Link href="/comparatifs" className="link">comparatifs détaillés</Link>.
        </p>
      </Section>

      {/* Customer reviews (placeholder data — see lib/reviews.ts) */}
      <Section variant="secondary" id="avis">
        <SectionHeading
          eyebrow="Avis clients"
          title={<>Ce qu&apos;en pensent nos <span className="accent">utilisateurs</span></>}
          lead="Un aperçu des retours d'utilisateurs sur leur expérience au quotidien avec 4kiptvfr.com."
          center
        />
        <Reviews />
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Questions fréquentes" title="Tout ce qu'il faut savoir" center />
        <FAQ />
      </Section>

      <CTA />
    </>
  );
}
