import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Xtream Codes API : la connexion IPTV la plus pratique",
  description:
    "L'API Xtream Codes en IPTV : ce que sont l'URL, l'identifiant et le mot de passe, et pourquoi cette méthode charge automatiquement les catégories et l'EPG.",
  path: "/formats/xtream-codes",
  keywords: ["xtream codes", "xtream codes api", "iptv xtream", "url xtream"],
});

export default function XtreamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technique · Xtream"
        title={<>L'API <span className="accent">Xtream Codes</span>, la méthode recommandée</>}
        lead="Plutôt qu'un simple lien, l'API Xtream utilise trois informations — URL, identifiant, mot de passe — et charge tout automatiquement."
        breadcrumb={[{ label: "Technique", href: "/formats" }, { label: "Xtream Codes" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />
      <Section narrow>
        <div className="prose">
          <p>
            L'API Xtream Codes est la façon la plus confortable de se connecter à un service IPTV. Au lieu d'un lien unique, elle
            repose sur trois champs distincts : l'URL du serveur, votre identifiant et votre mot de passe.
          </p>
          <h2>Pourquoi la préférer au M3U ?</h2>
          <p>
            Contrairement au <Link href="/formats/m3u" className="link">M3U</Link>, l'API Xtream organise automatiquement les
            chaînes en catégories, sépare le direct de la vidéothèque, et récupère le
            <Link href="/formats/epg" className="link"> guide des programmes</Link>. L'expérience se rapproche de celle d'une box.
          </p>
          <h2>Où trouver ces informations ?</h2>
          <p>
            Avec 4kiptvfr.com, l'URL, l'identifiant et le mot de passe vous sont envoyés par e-mail après la commande. Dans
            votre application — <Link href="/applications/smarters" className="link">IPTV Smarters</Link> ou{" "}
            <Link href="/applications/tivimate" className="link">TiviMate</Link> — choisissez « Xtream Codes API » et renseignez ces trois champs.
          </p>
          <h2>En cas d'erreur de connexion</h2>
          <p>
            Vérifiez chaque champ sans espace superflu. Une erreur fréquente vient d'un caractère manquant dans l'URL. Si le
            problème persiste, consultez notre <Link href="/problemes" className="link">guide de dépannage</Link>.
          </p>
        </div>
      </Section>
      <CTA />
    </>
  );
}
