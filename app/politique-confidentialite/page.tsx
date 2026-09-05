import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité de 4kiptvfr.com : données réellement traitées, finalités, base légale, durées, sous-traitants et vos droits (RGPD).",
  path: "/politique-confidentialite",
  noindex: true,
});

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        title="Politique de confidentialité"
        breadcrumb={[{ label: "Politique de confidentialité" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            {SITE.name} attache de l&apos;importance à la protection de vos données personnelles. Cette politique décrit
            les traitements réellement mis en œuvre par le site, conformément au Règlement général sur la protection des
            données (RGPD) et à la loi Informatique et Libertés.
          </p>
          <p>
            Le site est conçu de façon <strong>minimaliste</strong>&nbsp;: il ne comporte ni compte utilisateur, ni
            système de paiement en ligne, ni outil de mesure d&apos;audience, ni cookie publicitaire. Il ne collecte donc
            aucune donnée à votre insu.
          </p>

          <h2>1. Responsable du traitement</h2>
          <p>
            Le responsable du traitement est l&apos;éditeur du site (voir les{" "}
            <a href="/mentions-legales">mentions légales</a>)&nbsp;: <span className="ph">[RAISON SOCIALE]</span>,{" "}
            <span className="ph">[ADRESSE]</span>. Pour toute question relative à vos données&nbsp;:{" "}
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
          </p>

          <h2>2. Données réellement collectées</h2>
          <ul>
            <li>
              <strong>Formulaire de contact.</strong> Le formulaire de la page <a href="/contact">Contact</a> n&apos;envoie
              rien à un serveur&nbsp;: il ouvre votre logiciel de messagerie avec un message pré-rempli (nom, e-mail,
              message) que <em>vous</em> envoyez à {SITE.supportEmail}. Ces informations ne nous parviennent que si vous
              choisissez d&apos;envoyer l&apos;e-mail, et sont alors traitées comme une correspondance ordinaire.
            </li>
            <li>
              <strong>Commande par messagerie.</strong> Si vous commandez ou nous contactez via WhatsApp, les
              informations que vous transmettez (numéro, message, formule souhaitée) nous parviennent par ce canal.
            </li>
            <li>
              <strong>Données techniques d&apos;hébergement.</strong> Comme tout site, l&apos;hébergeur peut enregistrer
              des journaux techniques (adresse IP, date, pages consultées) à des fins de sécurité et de bon
              fonctionnement.
            </li>
          </ul>
          <p>
            Le site n&apos;utilise <strong>aucun outil d&apos;analyse d&apos;audience</strong> (type Google Analytics),
            aucun pixel publicitaire et aucun traceur tiers.
          </p>

          <h2>3. Finalités et bases légales</h2>
          <ul>
            <li>Répondre à vos demandes de contact — base&nbsp;: votre démarche (mesures précontractuelles) ou l&apos;intérêt légitime à vous répondre.</li>
            <li>Traiter et activer une commande d&apos;abonnement — base&nbsp;: l&apos;exécution du contrat.</li>
            <li>Assurer la sécurité et le fonctionnement du site — base&nbsp;: l&apos;intérêt légitime.</li>
          </ul>

          <h2>4. Paiement</h2>
          <p>
            Le site <strong>ne traite aucun paiement en ligne</strong> et n&apos;héberge pas de page de paiement. La
            commande est finalisée hors du site (notamment via WhatsApp), et le règlement s&apos;effectue par les moyens
            indiqués lors de la commande. Le prestataire de paiement effectivement utilisé est{" "}
            <span className="ph">[PRESTATAIRE DE PAIEMENT]</span>&nbsp;; ses propres conditions et sa politique de
            confidentialité s&apos;appliquent aux données de paiement, que le site ne reçoit ni ne conserve.
          </p>

          <h2>5. Cookies et stockage local</h2>
          <p>
            Le site <strong>ne dépose aucun cookie</strong>. Il utilise uniquement le stockage local de votre navigateur
            (<code>localStorage</code>) pour mémoriser votre préférence de thème clair/sombre. Cette donnée reste sur
            votre appareil, n&apos;est transmise à personne et est exemptée de consentement (fonctionnalité que vous
            déclenchez vous-même). Voir la <a href="/cookies">politique relative aux cookies</a>.
          </p>

          <h2>6. Sous-traitants et services tiers</h2>
          <ul>
            <li>
              <strong>Hébergeur</strong> (<span className="ph">[NOM DE L&apos;HÉBERGEUR]</span>)&nbsp;: héberge le site
              et peut traiter des journaux techniques en qualité de sous-traitant.
            </li>
            <li>
              <strong>WhatsApp (Meta Platforms Ireland Ltd.)</strong>&nbsp;: si vous utilisez le bouton WhatsApp, votre
              échange est traité par WhatsApp selon ses propres conditions.
            </li>
            <li>
              <strong>The Movie Database (TMDB)</strong>&nbsp;: utilisé <em>côté serveur</em> pour illustrer certaines
              pages (affiches de films/séries). Votre navigateur ne contacte pas TMDB et aucune donnée personnelle ne
              lui est transmise.
            </li>
          </ul>

          <h2>7. Durées de conservation</h2>
          <p>
            Les e-mails de contact et de commande sont conservés le temps nécessaire au traitement de votre demande puis
            selon nos obligations légales (notamment comptables). Durées précises à confirmer&nbsp;:{" "}
            <span className="ph">[DURÉE DE CONSERVATION — CONTACT]</span> et{" "}
            <span className="ph">[DURÉE DE CONSERVATION — COMMANDES]</span>. Les journaux techniques de l&apos;hébergeur
            sont conservés selon la politique de ce dernier.
          </p>

          <h2>8. Transferts hors Union européenne</h2>
          <p>
            Certains services tiers (par exemple WhatsApp/Meta) peuvent impliquer un traitement hors de l&apos;Union
            européenne, encadré par les garanties prévues par ces prestataires. Si l&apos;éditeur ou l&apos;hébergeur est
            établi hors UE, les garanties applicables sont à préciser&nbsp;: <span className="ph">[À COMPLÉTER]</span>.
          </p>

          <h2>9. Sécurité</h2>
          <p>
            Le site est statique et n&apos;expose pas de base de données publique. Des mesures techniques raisonnables
            (chiffrement HTTPS, hébergement sécurisé) sont mises en œuvre. Aucune méthode de transmission n&apos;étant
            infaillible, une sécurité absolue ne peut être garantie.
          </p>

          <h2>10. Vos droits (RGPD)</h2>
          <p>
            Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, de limitation,
            d&apos;opposition et de portabilité sur vos données. Pour les exercer, écrivez à{" "}
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>. Vous pouvez également introduire une
            réclamation auprès de la Commission nationale de l&apos;informatique et des libertés (CNIL),{" "}
            <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">www.cnil.fr</a>.
          </p>

          <h2>Documents liés</h2>
          <ul>
            <li><a href="/cookies">Politique relative aux cookies</a></li>
            <li><a href="/mentions-legales">Mentions légales</a></li>
            <li><a href="/conditions-utilisation">Conditions générales d&apos;utilisation</a></li>
          </ul>

          <div className="legal-note">
            <p>Revue juridique recommandée</p>
            <p>
              Cette politique décrit fidèlement l&apos;implémentation technique actuelle du site. Les identités, durées de
              conservation et garanties de transfert restent à compléter. Faites vérifier ce document par un
              professionnel du droit avant publication définitive, en particulier si des outils de mesure d&apos;audience
              ou de paiement en ligne sont ajoutés ultérieurement.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
