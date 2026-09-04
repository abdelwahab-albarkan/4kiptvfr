import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Rétractation et remboursement",
  description:
    "Politique de rétractation et de remboursement d'IPTVExpert.fr : droit de rétractation, exception pour les contenus numériques et garantie satisfait ou remboursé.",
  path: "/remboursement",
  noindex: true,
});

export default function RemboursementPage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        title="Rétractation et remboursement"
        breadcrumb={[{ label: "Remboursement" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            Cette page précise votre droit de rétractation légal et la garantie commerciale proposée par {SITE.name}.
            Elle complète les <a href="/cgv">conditions générales de vente</a>.
          </p>

          <h2>1. Droit de rétractation légal (14 jours)</h2>
          <p>
            Pour un achat à distance, le Code de la consommation prévoit un délai de rétractation de 14 jours, sans avoir
            à justifier de motif.
          </p>

          <h2>2. Exception applicable aux contenus et services numériques</h2>
          <p>
            L&apos;abonnement est un service numérique dont l&apos;exécution peut commencer immédiatement après la
            commande (activation rapide des accès). Conformément à l&apos;article L221-28 du Code de la consommation, le
            droit de rétractation ne peut plus être exercé une fois l&apos;exécution commencée si vous avez&nbsp;:
          </p>
          <ul>
            <li>expressément demandé le démarrage immédiat de la fourniture du service&nbsp;;</li>
            <li>et reconnu que vous perdez ainsi votre droit de rétractation.</li>
          </ul>
          <p>
            Tant que l&apos;exécution n&apos;a pas commencé, ou en l&apos;absence d&apos;un tel accord exprès, le délai
            de 14 jours reste applicable.
          </p>

          <h2>3. Garantie commerciale « satisfait ou remboursé » (30 jours)</h2>
          <p>
            Indépendamment du droit de rétractation, {SITE.name} propose une garantie commerciale de 30 jours&nbsp;: si
            le service ne vous convient pas, vous pouvez demander un remboursement selon les conditions ci-dessous.
          </p>
          <ul>
            <li>Périmètre et cas éligibles&nbsp;: <span className="ph">[CONDITIONS DE LA GARANTIE]</span></li>
            <li>Délai pour en faire la demande&nbsp;: 30 jours à compter de la commande.</li>
            <li>Modalités de remboursement (délai, moyen)&nbsp;: <span className="ph">[MODALITÉS DE REMBOURSEMENT]</span></li>
          </ul>

          <h2>4. Comment demander un remboursement</h2>
          <p>
            Adressez votre demande à <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> en précisant la
            date et la référence de votre commande, ainsi que le motif. Vous pouvez aussi passer par la page{" "}
            <a href="/contact">Contact</a>. Le remboursement, lorsqu&apos;il est dû, est effectué par le même moyen de
            paiement que celui utilisé lors de la commande, sauf accord contraire.
          </p>

          <h2>5. Garanties légales</h2>
          <p>
            Cette garantie commerciale s&apos;ajoute, sans les remplacer, aux garanties légales de conformité et des
            vices cachés dont vous bénéficiez en tout état de cause.
          </p>

          <h2>Documents liés</h2>
          <ul>
            <li><a href="/cgv">Conditions générales de vente</a></li>
            <li><a href="/conditions-utilisation">Conditions générales d&apos;utilisation</a></li>
            <li><a href="/contact">Contact &amp; support</a></li>
          </ul>

          <div className="legal-note">
            <p>Revue juridique recommandée</p>
            <p>
              Les conditions précises de la garantie et les modalités de remboursement doivent être renseignées et
              validées par un professionnel du droit de la consommation français. La formulation de l&apos;exception de
              rétractation applicable aux services numériques doit correspondre au processus de commande réellement mis
              en place (recueil de l&apos;accord exprès du client).
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
