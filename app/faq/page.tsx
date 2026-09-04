import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import LinkCard from "@/components/LinkCard";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, faqSchema } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA, FAQ_ITEMS } from "@/lib/site";

const TOP = FAQ_ITEMS.slice(0, 4);

export const metadata = buildMetadata({
  title: "Aide & FAQ IPTV",
  description:
    "Centre d'aide 4kiptvfr.com : questions fréquentes, lexique des termes IPTV et dépannage. Trouvez rapidement une réponse claire à votre question.",
  path: "/faq",
  keywords: ["iptv faq", "aide iptv", "iptv france aide", "questions iptv"],
});

export default function FaqHubPage() {
  return (
    <>
      <JsonLd data={faqSchema(TOP)} />
      <PageHeader
        eyebrow="Centre d'aide"
        title={<>Comment pouvons-nous <span className="accent">vous aider</span> ?</>}
        lead="Retrouvez les réponses à vos questions, le vocabulaire de l'IPTV expliqué simplement et nos guides de dépannage."
        breadcrumb={[{ label: "FAQ" }]}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Explorer l'aide" title="Trois façons de trouver une réponse" />
        <div className="grid grid--3">
          <LinkCard href="/faq/questions-frequentes" title="Questions fréquentes" description="Compatibilité, activation, paiement, engagement, légalité…" meta="Voir les questions" />
          <LinkCard href="/faq/lexique" title="Lexique IPTV" description="Tous les termes techniques expliqués : M3U, Xtream, EPG, VOD…" meta="Voir le lexique" />
          <LinkCard href="/problemes" title="Dépannage" description="Coupures, erreurs, écran noir : les solutions pas à pas." meta="Résoudre un problème" />
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="En bref" title="Les questions les plus posées" center />
        <FAQ items={TOP} />
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
