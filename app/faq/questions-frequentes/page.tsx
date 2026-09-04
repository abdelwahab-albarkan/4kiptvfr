import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA, FAQ_ITEMS } from "@/lib/site";

const EXTRA_FAQ = [
  { q: "Puis-je regarder sur plusieurs appareils ?", a: "Oui. Selon la formule, vous pouvez utiliser votre abonnement sur un ou plusieurs écrans. Contactez-nous pour une configuration multi-écrans." },
  { q: "Proposez-vous un essai ?", a: "Nous proposons une garantie satisfait ou remboursé de 30 jours, qui vous permet de tester le service sans risque." },
  { q: "L'IPTV est-elle légale en France ?", a: "La technologie IPTV est légale ; elle est utilisée par de nombreux opérateurs. La légalité dépend des droits de diffusion des contenus. Renseignez-vous toujours sur l'origine des flux." },
  { q: "Comment installer l'IPTV sur ma télévision ?", a: "Cela dépend de votre appareil : consultez le guide correspondant (Samsung, LG, Android TV, Fire TV…) dans la rubrique Appareils. L'installation prend en général moins de cinq minutes." },
  { q: "Que faire en cas de coupures ?", a: "Les coupures viennent presque toujours du réseau : privilégiez une connexion filaire et consultez notre guide de dépannage sur le buffering." },
];

const ALL = [...FAQ_ITEMS, ...EXTRA_FAQ];

export const metadata = buildMetadata({
  title: "Questions fréquentes sur l'IPTV",
  description:
    "Toutes les réponses sur 4kiptvfr.com : compatibilité, activation, paiement, engagement, VPN, multi-écrans, installation et légalité. Trouvez rapidement l'information utile.",
  path: "/faq/questions-frequentes",
  keywords: ["iptv questions frequentes", "faq iptv", "iptv france questions", "iptv comment ca marche"],
});

export default function QuestionsFrequentesPage() {
  return (
    <>
      <JsonLd data={faqSchema(ALL)} />
      <PageHeader
        eyebrow="Aide · FAQ"
        title={<>Questions <span className="accent">fréquentes</span></>}
        lead="Les réponses aux questions les plus posées sur 4kiptvfr.com. Vous ne trouvez pas ? Notre support français répond en quelques minutes."
        breadcrumb={[{ label: "FAQ", href: "/faq" }, { label: "Questions fréquentes" }]}
        secondaryCta={SECONDARY_CTA}
      />
      <Section>
        <FAQ items={ALL} />
        <p style={{ textAlign: "center", marginTop: "var(--space-6)" }}>
          Un terme technique vous échappe ? Consultez le <Link href="/faq/lexique" className="link">lexique IPTV</Link>. Un souci
          technique ? Voir le <Link href="/problemes" className="link">guide de dépannage</Link>.
        </p>
      </Section>
      <CTA
        title="Une question sans réponse ?"
        lead="Écrivez-nous : notre équipe vous répond par e-mail ou WhatsApp, en français, tous les jours."
        primary={SECONDARY_CTA}
        secondary={PRIMARY_CTA}
      />
    </>
  );
}
