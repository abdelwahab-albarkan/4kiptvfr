import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import { buildMetadata } from "@/lib/seo";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Politique relative aux cookies",
  description:
    "Politique cookies d'IPTVExpert.fr : le site ne dépose aucun cookie et n'utilise aucun traceur. Détail du stockage local utilisé et de vos options.",
  path: "/cookies",
  noindex: true,
});

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Informations légales"
        title="Politique relative aux cookies"
        breadcrumb={[{ label: "Cookies" }]}
      />
      <Section narrow>
        <div className="prose">
          <p>
            Cette page explique l&apos;usage réel des cookies et technologies similaires sur {SITE.name}. Elle reflète
            l&apos;implémentation technique actuelle du site.
          </p>

          <h2>1. Le site ne dépose aucun cookie</h2>
          <p>
            {SITE.name} <strong>n&apos;utilise aucun cookie</strong>, ni de première partie, ni tiers. Il ne comporte
            aucun outil de mesure d&apos;audience (type Google Analytics), aucun pixel publicitaire, aucun bouton de
            réseau social traçant et aucun script de suivi.
          </p>

          <h2>2. Le seul stockage utilisé : votre préférence de thème</h2>
          <p>
            Le site enregistre une seule information dans le <strong>stockage local</strong> (<code>localStorage</code>)
            de votre navigateur, afin de mémoriser votre choix d&apos;affichage&nbsp;:
          </p>
          <ul>
            <li><strong>Clé&nbsp;:</strong> <code>theme</code></li>
            <li><strong>Valeur&nbsp;:</strong> <code>light</code> ou <code>dark</code></li>
            <li><strong>Finalité&nbsp;:</strong> conserver votre préférence de thème clair/sombre entre les visites.</li>
            <li><strong>Portée&nbsp;:</strong> reste sur votre appareil, n&apos;est transmise à aucun serveur ni à aucun tiers.</li>
            <li><strong>Durée&nbsp;:</strong> jusqu&apos;à ce que vous l&apos;effaciez (données de site de votre navigateur).</li>
          </ul>
          <p>
            Ce stockage relève d&apos;une fonctionnalité que vous déclenchez vous-même. Il est donc considéré comme
            <strong> strictement nécessaire</strong> et exempté de consentement au sens des recommandations de la CNIL.
          </p>

          <h2>3. Cookies nécessaires vs. cookies de mesure/marketing</h2>
          <ul>
            <li><strong>Cookies strictement nécessaires&nbsp;:</strong> aucun cookie n&apos;est déposé ; seul le stockage local de préférence décrit ci-dessus est utilisé.</li>
            <li><strong>Cookies de mesure d&apos;audience&nbsp;:</strong> aucun.</li>
            <li><strong>Cookies marketing / publicitaires&nbsp;:</strong> aucun.</li>
          </ul>

          <h2>4. Comment gérer le stockage local</h2>
          <p>
            Vous pouvez à tout moment effacer cette préférence en supprimant les données de site de votre navigateur, ou
            en utilisant une navigation privée. Le site fonctionnera normalement&nbsp;; il retrouvera simplement son
            thème par défaut.
          </p>

          <h2>5. Services tiers</h2>
          <p>
            Les données d&apos;illustration (affiches de films et séries) proviennent de TMDB et sont récupérées{" "}
            <em>côté serveur</em> puis servies par le site&nbsp;: votre navigateur ne contacte pas TMDB et aucun cookie
            tiers n&apos;est déposé de ce fait. Si vous cliquez sur un lien externe (par exemple WhatsApp), le service
            de destination applique sa propre politique de cookies.
          </p>

          <div className="legal-note">
            <p>Absence de bandeau de consentement — et quand il deviendra obligatoire</p>
            <p>
              En l&apos;état, le site n&apos;affiche <strong>aucun bandeau de consentement aux cookies</strong>, et ce
              n&apos;est pas requis puisqu&apos;aucun cookie ni traceur non essentiel n&apos;est utilisé. Si, à
              l&apos;avenir, un outil de mesure d&apos;audience, une régie publicitaire ou tout traceur tiers est ajouté,
              la mise en place d&apos;un mécanisme de consentement conforme (CNIL/RGPD) deviendra{" "}
              <strong>obligatoire avant tout dépôt</strong>. Cette page devra alors être mise à jour en conséquence.
            </p>
          </div>

          <h2>Documents liés</h2>
          <ul>
            <li><a href="/politique-confidentialite">Politique de confidentialité</a></li>
            <li><a href="/mentions-legales">Mentions légales</a></li>
          </ul>
        </div>
      </Section>
    </>
  );
}
