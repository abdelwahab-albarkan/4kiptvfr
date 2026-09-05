import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Conditions générales d'utilisation (CGU)",
  description:
    "Conditions générales d'utilisation de 4kiptvfr.com : accès au service, usage responsable, comptes, propriété intellectuelle et responsabilité.",
  path: "/conditions-utilisation",
  noindex: true,
});

export default function ConditionsUtilisationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        title="Conditions générales d'utilisation (CGU)"
        breadcrumb={[{ label: "Conditions d'utilisation" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            Les présentes conditions générales d&apos;utilisation (CGU) encadrent l&apos;accès et l&apos;utilisation du
            site et du service {SITE.name}. En utilisant le site ou en souscrivant un abonnement, l&apos;utilisateur
            accepte ces conditions. Les modalités de vente (prix, paiement, rétractation) figurent dans les{" "}
            <a href="/cgv">conditions générales de vente</a>.
          </p>

          <h2>1. Objet du service</h2>
          <p>
            {SITE.name} fournit un service technique permettant l&apos;accès, via des applications compatibles, à des
            flux de chaînes et à une vidéothèque. L&apos;éditeur ne revendique aucune licence de diffusion ni aucune
            affiliation avec des chaînes, diffuseurs ou détenteurs de droits.
          </p>

          <h2>2. Accès au service</h2>
          <ul>
            <li>Une connexion internet suffisante et un appareil compatible sont nécessaires.</li>
            <li>Les identifiants d&apos;accès sont transmis par e-mail après confirmation de la commande.</li>
            <li>L&apos;utilisateur est responsable de la confidentialité de ses identifiants.</li>
          </ul>

          <h2>3. Usage responsable</h2>
          <p>
            L&apos;utilisateur s&apos;engage à utiliser le service à des fins personnelles et dans le respect de la
            législation en vigueur. Sont notamment interdits&nbsp;: le partage ou la revente des identifiants, toute
            tentative de contournement des protections techniques, et tout usage portant atteinte aux droits de tiers.
          </p>

          <h2>4. Compte et identifiants</h2>
          <p>
            Les accès sont strictement personnels. En cas d&apos;utilisation frauduleuse, de partage non autorisé ou de
            manquement aux présentes CGU, l&apos;accès peut être suspendu ou résilié.
          </p>

          <h2>5. Propriété intellectuelle</h2>
          <p>
            Les éléments du site (textes, éléments graphiques, logo, structure) sont protégés par le droit de la
            propriété intellectuelle. Toute reproduction non autorisée est interdite. Les marques de tiers éventuellement
            citées appartiennent à leurs titulaires respectifs&nbsp;; leur mention n&apos;implique aucun partenariat.
          </p>

          <h2>6. Disponibilité et responsabilité</h2>
          <p>
            {SITE.name} met en œuvre des moyens raisonnables pour assurer la disponibilité du service, sans garantie
            d&apos;une continuité absolue. La responsabilité de l&apos;éditeur ne saurait être engagée pour une
            interruption liée à la connexion de l&apos;utilisateur, à son matériel, à un cas de force majeure ou à un
            tiers.
          </p>

          <h2>7. Données personnelles</h2>
          <p>
            Le traitement de vos données est décrit dans la{" "}
            <a href="/politique-confidentialite">politique de confidentialité</a> et la{" "}
            <a href="/cookies">politique relative aux cookies</a>.
          </p>

          <h2>8. Modification des CGU</h2>
          <p>
            L&apos;éditeur peut faire évoluer les présentes CGU. La version applicable est celle en ligne au moment de
            l&apos;utilisation du service.
          </p>

          <h2>9. Support</h2>
          <p>
            Le support est joignable à <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> et via la page{" "}
            <a href="/contact">Contact</a>.
          </p>

          <h2>Documents liés</h2>
          <ul>
            <li><a href="/cgv">Conditions générales de vente</a></li>
            <li><a href="/remboursement">Rétractation et remboursement</a></li>
            <li><a href="/mentions-legales">Mentions légales</a></li>
          </ul>

          <div className="legal-note">
            <p>Revue juridique recommandée</p>
            <p>
              Ce document est un modèle reflétant le fonctionnement réel du service. Il ne constitue pas un conseil
              juridique et doit être vérifié par un professionnel du droit français avant publication définitive.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
