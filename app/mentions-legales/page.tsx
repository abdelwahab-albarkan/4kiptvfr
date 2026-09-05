import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales du site 4kiptvfr.com : éditeur, directeur de la publication, hébergeur et informations légales obligatoires.",
  path: "/mentions-legales",
  noindex: true,
});

export default function MentionsLegalesPage() {
  const domain = SITE.domain.replace("https://", "");
  return (
    <>
      <PageHeader eyebrow="Informations légales" title="Mentions légales" breadcrumb={[{ label: "Mentions légales" }]} />
      <Section narrow>
        <div className="prose">
          <p>
            Les présentes mentions légales s&apos;appliquent au site {SITE.name}, accessible à l&apos;adresse{" "}
            <a href={SITE.domain}>{domain}</a>. Elles sont établies conformément à la loi n° 2004-575 du 21 juin 2004
            pour la confiance dans l&apos;économie numérique (LCEN).
          </p>

          <div className="legal-note">
            <p>Informations à compléter par l&apos;exploitant</p>
            <p>
              Les champs entre crochets ci-dessous doivent être renseignés avec les informations légales réelles de la
              structure qui édite et exploite le site. Ces informations sont obligatoires : leur absence est passible de
              sanctions. Une vérification par un professionnel du droit français est recommandée.
            </p>
          </div>

          <h2>1. Éditeur du site</h2>
          <ul>
            <li>Raison sociale : <span className="ph">[RAISON SOCIALE]</span></li>
            <li>Forme juridique : <span className="ph">[FORME JURIDIQUE]</span></li>
            <li>Capital social : <span className="ph">[CAPITAL SOCIAL]</span></li>
            <li>Siège social : <span className="ph">[ADRESSE COMPLÈTE]</span></li>
            <li>Numéro SIREN / SIRET : <span className="ph">[SIREN / SIRET]</span></li>
            <li>Immatriculation RCS : <span className="ph">[VILLE ET N° RCS]</span></li>
            <li>Numéro de TVA intracommunautaire : <span className="ph">[N° TVA]</span></li>
            <li>Adresse e-mail : <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a></li>
            <li>Téléphone : <span className="ph">[TÉLÉPHONE]</span></li>
          </ul>

          <h2>2. Directeur de la publication</h2>
          <p>
            Le directeur de la publication est <span className="ph">[NOM DU DIRECTEUR DE LA PUBLICATION]</span>, en sa
            qualité de représentant légal de l&apos;éditeur.
          </p>

          <h2>3. Hébergement</h2>
          <p>Le site est hébergé par&nbsp;:</p>
          <ul>
            <li>Hébergeur : <span className="ph">[NOM DE L&apos;HÉBERGEUR]</span></li>
            <li>Adresse : <span className="ph">[ADRESSE DE L&apos;HÉBERGEUR]</span></li>
            <li>Téléphone : <span className="ph">[TÉLÉPHONE DE L&apos;HÉBERGEUR]</span></li>
          </ul>

          <h2>4. Propriété intellectuelle</h2>
          <p>
            L&apos;ensemble des éléments composant le site {SITE.name} (textes, mise en page, éléments graphiques, logo,
            structure) est protégé par le droit de la propriété intellectuelle et demeure la propriété de l&apos;éditeur
            ou de ses ayants droit. Toute reproduction, représentation ou réutilisation, totale ou partielle, sans
            autorisation écrite préalable, est interdite.
          </p>
          <p>
            Les marques, logos et noms de chaînes, d&apos;applications ou de services tiers éventuellement cités sur le
            site le sont à titre purement informatif&nbsp;: {SITE.name} n&apos;est ni affilié, ni partenaire, ni
            sponsorisé par ces tiers, et ne revendique aucun droit sur leurs marques respectives.
          </p>

          <h2>5. Nature du service et responsabilité</h2>
          <p>
            {SITE.name} propose un service technique permettant l&apos;accès à des flux via des applications
            compatibles. L&apos;éditeur ne prétend disposer d&apos;aucune licence de diffusion ni d&apos;aucune
            autorisation officielle d&apos;un quelconque diffuseur, et n&apos;affirme aucune affiliation avec des chaînes
            ou des détenteurs de droits. L&apos;utilisateur est seul responsable de l&apos;usage qu&apos;il fait du
            service, dans le respect de la législation applicable.
          </p>
          <p>
            L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur le site, sans
            pouvoir en garantir l&apos;exhaustivité ni l&apos;absence totale d&apos;erreur. Les liens vers des sites
            tiers sont fournis à titre de commodité et n&apos;engagent pas la responsabilité de l&apos;éditeur quant à
            leur contenu.
          </p>

          <h2>6. Contact</h2>
          <p>
            Pour toute question relative aux présentes mentions légales, vous pouvez écrire à{" "}
            <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a> ou via la page{" "}
            <a href="/contact">Contact</a>.
          </p>

          <h2>Documents liés</h2>
          <ul>
            <li><a href="/conditions-utilisation">Conditions générales d&apos;utilisation (CGU)</a></li>
            <li><a href="/cgv">Conditions générales de vente (CGV)</a></li>
            <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
            <li><a href="/cookies">Politique relative aux cookies</a></li>
            <li><a href="/remboursement">Rétractation et remboursement</a></li>
          </ul>

          <div className="legal-note">
            <p>Revue juridique recommandée</p>
            <p>
              Ce document est un modèle technique généré à partir de la structure réelle du site. Il ne constitue pas un
              conseil juridique et doit être vérifié et complété par un professionnel du droit français avant mise en
              ligne définitive.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
