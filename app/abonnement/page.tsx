import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Pricing from "@/components/Pricing";
import TrustProof from "@/components/TrustProof";
import ConnectionExplainer from "@/components/ConnectionExplainer";
import SubscriptionComparison from "@/components/SubscriptionComparison";
import IncludedList from "@/components/IncludedList";
import Steps from "@/components/Steps";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import PaymentBadges from "@/components/PaymentBadges";
import { buildMetadata, faqSchema, subscriptionOffersSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { PRIMARY_CTA, SECONDARY_CTA, FAQ_ITEMS, PRICING_PLANS } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Abonnement IPTV France : offres, formules et prix",
  description:
    "Nos abonnements IPTV : une offre claire de 1 à 5 connexions simultanées en 4K Ultra HD, 50 000+ chaînes, 180 000+ films et séries, activation en 60 s, garantie 30 jours. Choisissez votre formule.",
  path: "/abonnement",
  keywords: [
    "abonnements iptv",
    "abonnement iptv",
    "offre iptv",
    "offres iptv",
    "forfait iptv",
    "abonnement iptv france",
    "iptv multi ecrans",
  ],
});

export default function AbonnementHubPage() {
  return (
    <>
      <JsonLd data={[subscriptionOffersSchema(PRICING_PLANS), faqSchema(FAQ_ITEMS)]} />
      <PageHeader
        eyebrow="Tarifs & abonnements"
        title={<>Des formules adaptées à <span className="accent">votre foyer</span></>}
        lead="Choisissez le nombre d'écrans simultanés (1, 2, 3 ou 5 connexions) et votre durée. Plus la durée est longue, plus le tarif mensuel est avantageux. Sans engagement, sans reconduction automatique."
        breadcrumb={[{ label: "Abonnement" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      {/* Main Interactive Pricing Section */}
      <Section id="offres">
        <SectionHeading
          eyebrow="Nos formules"
          title={<>Choisissez vos <span className="accent">écrans & durée</span></>}
          lead="Sélectionnez le nombre d'appareils actifs en simultané, puis choisissez votre formule."
          center
        />
        <Pricing />
      </Section>

      {/* Trust & guarantees — honest, verifiable proof */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Preuves & garanties"
          title={<>Pourquoi nous faire <span className="accent">confiance</span></>}
          lead="Des engagements concrets et vérifiables, avant comme après votre commande."
          center
        />
        <TrustProof />
      </Section>

      {/* Connections Explainer */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Comprendre les accès"
          title={<>Qu&apos;est-ce qu&apos;une <span className="accent">connexion</span> ?</>}
          lead="Comprenez facilement la différence entre 1, 2, 3 et 5 écrans simultanés pour choisir l'offre idéale."
          center
        />
        <ConnectionExplainer />
      </Section>

      {/* Offer Comparison Table */}
      <Section>
        <SectionHeading
          eyebrow="Comparatif"
          title={<>Tableau comparatif des <span className="accent">formules</span></>}
          lead="Comparez en un coup d'œil les caractéristiques, contenus et tarifs selon le nombre de connexions."
          center
        />
        <SubscriptionComparison />
      </Section>

      {/* What's included in every plan */}
      <Section variant="secondary">
        <SectionHeading
          eyebrow="Inclus dans chaque offre"
          title={<>Le même service premium, <span className="accent">quelle que soit</span> la formule</>}
          lead="Aucune option payante cachée : toutes les fonctionnalités sont incluses dans chaque abonnement."
        />
        <IncludedList />
      </Section>

      {/* Activation Steps */}
      <Section>
        <SectionHeading
          eyebrow="Mise en route"
          title="Prêt à regarder en 3 étapes simples"
          lead="Recevez vos identifiants par e-mail immédiatement après votre commande."
          center
        />
        <Steps />
      </Section>

      {/* Stats */}
      <Section variant="secondary">
        <Stats />
      </Section>

      {/* Secure Payment Methods */}
      <Section variant="soft">
        <SectionHeading
          eyebrow="Paiement"
          title="Des paiements sécurisés & vérifiés"
          lead="Réglez votre abonnement en toute sérénité par carte bancaire, PayPal, portefeuille mobile ou cryptomonnaie."
          center
        />
        <div style={{ marginTop: "var(--space-6)" }}>
          <PaymentBadges align="center" size="md" />
        </div>
        <p style={{ textAlign: "center", marginTop: "var(--space-6)", color: "var(--text-secondary)", fontSize: "0.95rem" }}>
          Vous hésitez encore ? Lisez nos <Link href="/abonnement/avis" className="link">avis et tests clients</Link> ou consultez nos{" "}
          <Link href="/comparatifs" className="link">comparatifs détaillés</Link>.
        </p>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeading eyebrow="Questions fréquentes" title="Avant de vous abonner" center />
        <FAQ />
      </Section>

      <CTA />
    </>
  );
}
