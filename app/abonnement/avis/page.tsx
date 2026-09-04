import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import ComparisonTable from "@/components/ComparisonTable";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Avis IPTV & fiabilité : notre méthode d'évaluation",
  description:
    "Avis IPTV : comment reconnaître un service fiable et stable. Notre méthode transparente d'évaluation — stabilité, qualité 4K, guide des programmes, compatibilité et support — pour juger objectivement, sans faux avis.",
  path: "/abonnement/avis",
  keywords: ["iptv avis", "avis iptv", "iptv france avis", "iptv avis client", "iptv fiable", "iptv stable", "test iptv"],
});

export default function AvisPage() {
  return (
    <>
      <PageHeader
        eyebrow="Avis & tests"
        title={<>Notre méthode pour <span className="accent">évaluer</span> un service IPTV</>}
        lead="Plutôt que des avis invérifiables, nous préférons expliquer comment juger objectivement un service. Voici les critères que nous testons et pourquoi ils comptent."
        breadcrumb={[{ label: "Abonnement", href: "/abonnement" }, { label: "Avis & tests" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            Les avis en ligne sur l'IPTV sont difficiles à vérifier : faux témoignages, notes gonflées, forums contradictoires.
            Nous avons choisi une approche différente — vous donner une grille de lecture claire pour évaluer n'importe quel
            service par vous-même, y compris le nôtre.
          </p>
          <h2>Les cinq axes d'un test sérieux</h2>
          <p>
            Un test utile ne se résume pas à « ça marche ou pas ». Il mesure la performance dans le temps et dans les
            conditions réelles d'usage — notamment lors des grands rendez-vous sportifs, quand la charge est maximale.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Grille de test" title="Ce que nous mesurons" />
        <ComparisonTable
          columns={["Axe testé", "Méthode", "Ce qui compte"]}
          rows={[
            { label: "Stabilité", cells: ["Visionnage prolongé en soirée", "Aucune coupure sur la durée"] },
            { label: "Qualité d'image", cells: ["Comparaison HD vs 4K/HDR", "Netteté réelle, pas seulement annoncée"] },
            { label: "EPG", cells: ["Vérification du guide sur 100 chaînes", "Programmes justes et synchronisés"] },
            { label: "Compatibilité", cells: ["Test multi-appareils", "Fonctionne sur Xtream et M3U"] },
            { label: "Support", cells: ["Question test au support", "Réponse rapide et utile en français"] },
          ]}
        />
      </Section>

      <Section narrow>
        <div className="prose">
          <h2>Notre engagement de transparence</h2>
          <p>
            Nous ne publions pas de fausses notes ni de faux témoignages. La meilleure preuve reste l'essai : c'est pourquoi
            4kiptvfr.com propose une <strong>garantie satisfait ou remboursé de 30 jours</strong>, sans engagement. Vous
            jugez sur pièces.
          </p>
          <p>
            Pour aller plus loin, consultez le guide <Link href="/meilleur-iptv" className="link">Meilleur IPTV</Link> et nos{" "}
            <Link href="/comparatifs" className="link">comparatifs</Link> face aux offres traditionnelles.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
