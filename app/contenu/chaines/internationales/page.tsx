import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import Flag, { flagCode } from "@/components/Flag";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { CHAINES_BY_TYPE } from "@/lib/chaines";

export const metadata = buildMetadata({
  title: "Chaînes internationales IPTV : monde entier en direct",
  description:
    "Chaînes internationales en IPTV : Royaume-Uni, Espagne, Italie, Allemagne, Maghreb, chaînes arabes, États-Unis et bien plus. Bouquets multilingues en direct.",
  path: "/contenu/chaines/internationales",
  keywords: ["chaines internationales iptv", "iptv chaines arabes", "iptv chaines belges", "iptv chaines anglaises", "iptv international"],
});

const REGIONS: { title: string; items: string[] }[] = [
  { title: "Europe francophone", items: ["Belgique", "Suisse romande", "Luxembourg", "Monaco"] },
  { title: "Royaume-Uni & Irlande", items: ["Chaînes UK généralistes", "Sport britannique", "Irlande"] },
  { title: "Europe du Sud", items: ["Espagne", "Italie", "Portugal", "Grèce"] },
  { title: "Europe du Nord & Centrale", items: ["Allemagne", "Pays-Bas", "Scandinavie", "Pologne"] },
  { title: "Maghreb & Moyen-Orient", items: ["Maroc", "Algérie", "Tunisie", "Chaînes arabes", "Turquie"] },
  { title: "Amérique", items: ["États-Unis", "Canada", "Amérique latine", "Brésil"] },
];

export default function ChainesInternationalesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Chaînes · International"
        title={<>Les <span className="accent">chaînes internationales</span></>}
        lead="Au-delà des chaînes françaises, 4kiptvfr.com donne accès à des bouquets du monde entier — idéal pour retrouver les chaînes de votre pays d'origine ou suivre l'actualité internationale."
        breadcrumb={[{ label: "Contenu", href: "/contenu" }, { label: "Chaînes", href: "/contenu/chaines" }, { label: "Internationales" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Par région" title="Un tour du monde des bouquets" lead="Aperçu indicatif des bouquets internationaux disponibles selon l'offre." />
        <div className="grid grid--3">
          {REGIONS.map((r) => (
            <article key={r.title} className="card">
              <h3 style={{ fontSize: "1.1rem" }}>{r.title}</h3>
              <ul style={{ marginTop: "var(--space-4)", display: "grid", gap: "8px" }}>
                {r.items.map((it) => (
                  <li key={it} style={{ color: "var(--text-secondary)", fontSize: "0.975rem", display: "flex", gap: "10px", alignItems: "center" }}>
                    {flagCode(it) ? (
                      <Flag country={it} size={24} />
                    ) : (
                      <span aria-hidden="true" style={{ color: "var(--accent)", width: 24, textAlign: "center" }}>·</span>
                    )}
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section variant="soft">
        <SectionHeading
          eyebrow="Par pays"
          title="Les chaînes de chaque pays"
          lead="Des pages dédiées avec les grandes chaînes disponibles, pays par pays."
        />
        <div className="grid grid--3">
          {CHAINES_BY_TYPE("pays").map((c) => (
            <LinkCard key={c.slug} href={`/contenu/chaines/${c.slug}`} kicker="International" title={c.name} description={c.lead} meta="Voir les chaînes" />
          ))}
        </div>
      </Section>

      <Section narrow variant="secondary">
        <div className="prose">
          <h2>Multilingue et sous-titres</h2>
          <p>
            De nombreuses chaînes proposent plusieurs pistes audio et des sous-titres. Vous préférez les chaînes hexagonales ?
            Voir les <Link href="/contenu/chaines/francaises" className="link">chaînes françaises</Link>.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
