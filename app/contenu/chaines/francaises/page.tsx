import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Chaînes françaises IPTV : TF1, France TV, M6, Canal+…",
  description:
    "Toutes les chaînes françaises en IPTV : TF1, France 2/3/5, M6, Canal+, Arte, la TNT, l'info en continu et le sport. En direct, avec guide des programmes.",
  path: "/contenu/chaines/francaises",
  keywords: ["chaines francaises iptv", "iptv chaines francaises", "iptv tf1", "iptv france 2", "iptv m6", "iptv tnt"],
});

const GROUPS: { title: string; channels: string[] }[] = [
  { title: "Généralistes", channels: ["TF1", "France 2", "France 3", "France 5", "M6", "Canal+", "Arte", "C8", "W9", "TMC", "TFX"] },
  { title: "Information", channels: ["BFM TV", "CNews", "LCI", "franceinfo"] },
  { title: "Sport", channels: ["beIN Sports", "RMC Sport", "Canal+ Sport", "Eurosport", "L'Équipe"] },
  { title: "Cinéma & séries", channels: ["Canal+ Cinéma", "OCS", "TF1 Séries Films", "6ter", "Chérie 25"] },
  { title: "Jeunesse", channels: ["Gulli", "TiJi", "Canal J", "France 4"] },
  { title: "Découverte", channels: ["RMC Découverte", "Science & Vie TV", "Ushuaïa TV", "Histoire TV"] },
];

export default function ChainesFrancaisesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Chaînes · France"
        title={<>Toutes les <span className="accent">chaînes françaises</span></>}
        lead="Les généralistes, la TNT, l'information en continu, le sport et les thématiques françaises, en direct et avec leur guide des programmes."
        breadcrumb={[{ label: "Contenu", href: "/contenu" }, { label: "Chaînes", href: "/contenu/chaines" }, { label: "Françaises" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            4kiptvfr.com rassemble l'essentiel du paysage audiovisuel français : les grandes chaînes généralistes, l'intégralité
            de la TNT, les chaînes d'information en continu, le sport premium et de nombreuses thématiques. Chaque chaîne est
            accompagnée de son guide des programmes.
          </p>
          <p>Les exemples ci-dessous sont indicatifs et non exhaustifs ; le catalogue évolue régulièrement.</p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Bouquet français" title="Un aperçu des chaînes" />
        <div className="grid grid--3">
          {GROUPS.map((g) => (
            <article key={g.title} className="card">
              <h3 style={{ fontSize: "1.1rem" }}>{g.title}</h3>
              <p style={{ marginTop: "var(--space-3)", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
                {g.channels.join(" · ")}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section narrow>
        <div className="prose">
          <h2>Chaînes françaises et sport</h2>
          <p>
            Pour le sport, retrouvez les grandes compétitions sur les chaînes dédiées — voir la page{" "}
            <Link href="/contenu/sport" className="link">sport en direct</Link>. Vous cherchez aussi des chaînes étrangères ?
            Découvrez les <Link href="/contenu/chaines/internationales" className="link">chaînes internationales</Link>.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
