import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Conditions générales de vente (CGV)",
  description:
    "Conditions générales de vente d'IPTVExpert.fr : offre, commande, prix, paiement, activation, rétractation, garanties et support.",
  path: "/cgv",
  noindex: true,
});

export default function CGVPage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        title="Conditions générales de vente (CGV)"
        breadcrumb={[{ label: "CGV" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            Les présentes conditions générales de vente (CGV) régissent la vente des abonnements proposés par{" "}
            {SITE.name}. Toute commande implique l&apos;acceptation sans réserve des présentes CGV. Elles complètent les{" "}
            <a href="/conditions-utilisation">conditions générales d&apos;utilisation</a>.
          </p>

          <h2>1. Vendeur</h2>
          <p>
            Les abonnements sont vendus par <span className="ph">[RAISON SOCIALE]</span>,{" "}
            <span className="ph">[ADRESSE]</span> (voir les <a href="/mentions-legales">mentions légales</a>). Contact&nbsp;:{" "}
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
          </p>

          <h2>2. Objet et description du service</h2>
          <p>
            {SITE.name} propose un service technique donnant accès, via des applications compatibles, à des flux de
            chaînes et à une vidéothèque. Le service est fourni « en l&apos;état »&nbsp;; l&apos;éditeur ne revendique
            aucune licence de diffusion, aucune autorisation officielle ni aucune affiliation avec des diffuseurs ou des
            détenteurs de droits. Le détail des formules figure sur la page <a href="/abonnement">Abonnement</a>.
          </p>

          <h2>3. Formules et durées</h2>
          <ul>
            <li>Les abonnements sont proposés pour des durées de 3, 6 ou 12 mois, et selon le nombre de connexions simultanées choisi.</li>
            <li>Les abonnements sont <strong>sans engagement</strong> et <strong>sans reconduction automatique</strong>&nbsp;: aucun prélèvement récurrent n&apos;est effectué.</li>
          </ul>

          <h2>4. Prix</h2>
          <p>
            Les prix applicables sont ceux affichés sur la page <a href="/abonnement">Abonnement</a> au moment de la
            commande, exprimés en euros. La mention de TVA applicable dépend du statut du vendeur&nbsp;:{" "}
            <span className="ph">[MENTION TVA — ex. « TVA non applicable, art. 293 B du CGI » ou taux applicable]</span>.
          </p>

          <h2>5. Commande</h2>
          <p>
            La commande s&apos;effectue en prenant contact avec le vendeur, notamment via WhatsApp depuis la page{" "}
            <a href="/abonnement">Abonnement</a>, en indiquant la formule souhaitée. Le contrat est formé après
            confirmation de la commande et du paiement par le vendeur. Le site ne comporte pas de tunnel de paiement en
            ligne intégré.
          </p>

          <h2>6. Paiement</h2>
          <p>
            Le paiement s&apos;effectue en une seule fois, à la commande, par les moyens indiqués lors de celle-ci. Le
            prestataire de paiement effectivement utilisé est <span className="ph">[PRESTATAIRE DE PAIEMENT]</span>&nbsp;;
            {" "}{SITE.name} ne collecte ni ne conserve vos données bancaires, traitées le cas échéant par ce
            prestataire selon ses propres conditions.
          </p>

          <h2>7. Livraison et activation</h2>
          <p>
            Après confirmation du paiement, les identifiants d&apos;accès sont transmis par e-mail, généralement en
            quelques minutes. Il vous appartient de fournir une adresse e-mail valide et de vérifier vos courriers
            indésirables le cas échéant.
          </p>

          <h2>8. Droit de rétractation</h2>
          <p>
            Conformément au Code de la consommation, vous disposez en principe d&apos;un délai de rétractation de 14
            jours pour un achat à distance. Toutefois, pour un contenu ou un service numérique dont l&apos;exécution
            commence immédiatement, ce droit peut être perdu si vous avez expressément demandé cette exécution immédiate
            et reconnu renoncer à votre droit de rétractation (art. L221-28 du Code de la consommation). Les modalités
            détaillées figurent sur la page <a href="/remboursement">Rétractation et remboursement</a>.
          </p>

          <h2>9. Garanties légales</h2>
          <p>
            Le consommateur bénéficie des garanties légales de conformité et des vices cachés dans les conditions
            prévues par le Code de la consommation et le Code civil, indépendamment de toute garantie commerciale.
          </p>

          <h2>10. Garantie commerciale « satisfait ou remboursé »</h2>
          <p>
            En complément des garanties légales, {SITE.name} propose une garantie commerciale de 30 jours. Ses conditions
            précises d&apos;application (périmètre, délais, modalités de remboursement) sont détaillées sur la page{" "}
            <a href="/remboursement">Rétractation et remboursement</a> et à préciser&nbsp;:{" "}
            <span className="ph">[CONDITIONS DE LA GARANTIE]</span>.
          </p>

          <h2>11. Utilisation et obligations</h2>
          <p>
            Le service est réservé à un usage personnel et licite. Le partage ou la revente des identifiants n&apos;est
            pas autorisé. En cas d&apos;utilisation frauduleuse ou contraire aux présentes CGV, l&apos;accès peut être
            suspendu.
          </p>

          <h2>12. Responsabilité</h2>
          <p>
            Le vendeur est tenu à une obligation de moyens quant à la disponibilité et la qualité du service. Sa
            responsabilité ne saurait être engagée en cas d&apos;interruption imputable à votre connexion, à votre
            matériel, à un cas de force majeure ou à un tiers.
          </p>

          <h2>13. Support</h2>
          <p>
            Le support est joignable à <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> et via la page{" "}
            <a href="/contact">Contact</a>.
          </p>

          <h2>14. Droit applicable et litiges</h2>
          <p>
            Les présentes CGV sont soumises au droit français. En cas de litige, vous pouvez recourir gratuitement à un
            médiateur de la consommation&nbsp;: <span className="ph">[MÉDIATEUR DE LA CONSOMMATION — nom et coordonnées]</span>.
            Vous pouvez également utiliser la plateforme européenne de règlement en ligne des litiges&nbsp;:{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer">
              ec.europa.eu/consumers/odr
            </a>.
          </p>

          <h2>Documents liés</h2>
          <ul>
            <li><a href="/remboursement">Rétractation et remboursement</a></li>
            <li><a href="/conditions-utilisation">Conditions générales d&apos;utilisation</a></li>
            <li><a href="/mentions-legales">Mentions légales</a></li>
          </ul>

          <div className="legal-note">
            <p>Revue juridique recommandée</p>
            <p>
              Ces CGV constituent un modèle reflétant le fonctionnement réel du site (vente d&apos;abonnements, commande
              par messagerie, paiement en une fois, sans reconduction). L&apos;identité du vendeur, la mention de TVA, le
              prestataire de paiement, les conditions de la garantie et le médiateur de la consommation restent à
              compléter. La clause de rétractation applicable aux contenus numériques doit être validée par un
              professionnel du droit de la consommation français.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
