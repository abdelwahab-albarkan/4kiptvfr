import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import LinkCard from "@/components/LinkCard";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA, CLUSTERS } from "@/lib/site";

const FAQ_PILLAR = [
  { q: "Comment reconnaître un bon service IPTV ?", a: "Un service fiable se distingue par sa stabilité lors des pics d'audience, une vraie qualité 4K, un guide des programmes complet, une large compatibilité et un support réactif — plutôt que par le seul prix." },
  { q: "L'IPTV est-elle légale en France ?", a: "La technologie IPTV est parfaitement légale : elle désigne la diffusion de télévision via internet, utilisée par de nombreux opérateurs. La légalité dépend des droits de diffusion des contenus proposés. Renseignez-vous toujours sur l'origine des flux." },
  { q: "Quel débit internet faut-il pour l'IPTV 4K ?", a: "Comptez environ 25 Mb/s pour un flux 4K stable, et 10 à 15 Mb/s pour du Full HD. Une connexion filaire est recommandée pour la 4K." },
  { q: "Quelle durée d'abonnement choisir ?", a: "Pour découvrir ou tester, la formule 3 mois permet de démarrer sans engagement long. Pour le meilleur rapport qualité-prix, la formule 12 mois à 5,92 €/mois offre une économie de 50% avec la même garantie satisfait ou remboursé de 30 jours." },
];

export const metadata = buildMetadata({
  title: "Meilleur IPTV 2026 : comparatif et guide pour bien choisir",
  description:
    "Quel est le meilleur IPTV en France ? Notre comparatif détaille les critères d'un bon service : stabilité, qualité 4K, compatibilité, applications et prix. Quel IPTV choisir, sans langue de bois.",
  path: "/meilleur-iptv",
  keywords: ["meilleur iptv", "meilleurs iptv", "meilleure iptv", "meilleur iptv france", "meilleure iptv 2026", "top iptv", "comparatif iptv", "meilleur fournisseur iptv", "quel iptv choisir", "quelle iptv choisir"],
});

export default function MeilleurIptvPage() {
  return (
    <>
      <JsonLd data={faqSchema(FAQ_PILLAR)} />

      <PageHeader
        eyebrow="Guide de référence"
        title={<>Meilleur IPTV en France : comment <span className="accent">bien choisir</span></>}
        lead="Le marché de l'IPTV compte des services de qualité très inégale. Ce guide détaille les critères objectifs qui distinguent un bon service — pour choisir en connaissance de cause."
        breadcrumb={[{ label: "Meilleur IPTV" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <h2>Qu'est-ce qu'un service IPTV, concrètement ?</h2>
          <p>
            L'IPTV (Internet Protocol Television) désigne la diffusion de chaînes de télévision et de contenus à la demande
            via internet, plutôt que par l'antenne, le câble ou le satellite. C'est la même technologie que celle utilisée
            par les box des grands opérateurs. Un service IPTV premium se distingue par l'étendue de son catalogue, la
            qualité de sa diffusion et sa stabilité.
          </p>
          <p>
            Choisir un service ne devrait pas se résumer à comparer des prix. Un abonnement bon marché mais instable, sans
            guide des programmes ni support, coûte finalement plus cher en frustration. Voici les critères qui comptent vraiment.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Critères" title="Les 6 critères d'un bon service" />
        <div className="prose" style={{ maxWidth: "none" }}>
          <h3>1. La stabilité</h3>
          <p>C'est le critère décisif. Un bon service reste fluide même lors des grands événements sportifs, quand les serveurs sont les plus sollicités. Un réseau de serveurs performant et une disponibilité élevée font toute la différence.</p>
          <h3>2. La qualité d'image réelle</h3>
          <p>Beaucoup de services annoncent la 4K sans la proposer réellement. Vérifiez la présence d'un encodage moderne (H.265) et du HDR, gages d'une image nette sans surconsommer de bande passante.</p>
          <h3>3. Le guide des programmes (EPG)</h3>
          <p>Un EPG complet et bien synchronisé transforme l'expérience : vous naviguez comme sur une box classique, avec le programme en cours et à venir pour chaque chaîne.</p>
          <h3>4. La compatibilité</h3>
          <p>Le service doit fonctionner sur vos appareils : <Link href="/appareils/samsung" className="link">Samsung</Link>, <Link href="/appareils/lg" className="link">LG</Link>, <Link href="/appareils/android-tv" className="link">Android TV</Link>, <Link href="/appareils/firestick" className="link">Fire TV Stick</Link> ou <Link href="/appareils/apple-tv" className="link">Apple TV</Link>, avec les applications adaptées.</p>
          <h3>5. Les applications prises en charge</h3>
          <p>Les meilleurs lecteurs — <Link href="/applications/tivimate" className="link">TiviMate</Link>, <Link href="/applications/smarters" className="link">IPTV Smarters</Link> — apportent confort et fonctionnalités. Un bon service est compatible avec l'API Xtream et les listes M3U.</p>
          <h3>6. Le prix et les garanties</h3>
          <p>Un tarif juste, sans engagement, assorti d'une garantie satisfait ou remboursé, est un signe de sérieux. Méfiez-vous des offres « à vie » anormalement basses.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Grille de sélection"
          title="Ce qu'il faut vérifier avant de s'abonner"
          lead="Utilisez cette grille pour comparer objectivement n'importe quel service."
        />
        <ComparisonTable
          columns={["Critère", "À rechercher", "Signal d'alerte"]}
          rows={[
            { label: "Stabilité", cells: ["Fluide en pic d'audience", "Coupures fréquentes le soir"] },
            { label: "Qualité", cells: ["4K réel + HDR (H.265)", "« 4K » sans preuve visible"] },
            { label: "EPG", cells: ["Guide complet et synchronisé", "Aucun programme affiché"] },
            { label: "Compatibilité", cells: ["Xtream + M3U, multi-appareils", "Une seule application imposée"] },
            { label: "Support", cells: ["Réponse rapide en français", "Aucun contact identifiable"] },
            { label: "Garantie", cells: ["Remboursement 30 jours", "Aucune garantie, offre « à vie »"] },
          ]}
        />
      </Section>

      <Section variant="soft">
        <SectionHeading eyebrow="Aller plus loin" title="Explorer par thème" center />
        <div className="grid grid--3">
          {CLUSTERS.map((c) => (
            <LinkCard key={c.href} href={c.href} title={c.label} description={c.description} />
          ))}
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Notre offre" title="4kiptvfr.com en pratique" center />
        <Pricing />
      </Section>

      <Section>
        <SectionHeading eyebrow="Questions fréquentes" title="Bien choisir son IPTV" center />
        <FAQ items={FAQ_PILLAR} />
      </Section>

      <CTA />
    </>
  );
}
