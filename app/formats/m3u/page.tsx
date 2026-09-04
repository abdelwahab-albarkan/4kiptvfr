import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Playlist M3U : comprendre et utiliser le format",
  description:
    "Qu'est-ce qu'une playlist M3U en IPTV ? À quoi sert le lien M3U, comment l'utiliser avec VLC ou un lecteur dédié, et bonnes pratiques avec 4kiptvfr.com.",
  path: "/formats/m3u",
  keywords: ["iptv m3u", "playlist m3u", "lien m3u iptv", "fichier m3u"],
});

export default function M3uPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technique · M3U"
        title={<>La playlist <span className="accent">M3U</span>, expliquée simplement</>}
        lead="Le M3U est le format de liste de lecture le plus répandu en IPTV. Voici ce qu'il contient et comment l'utiliser."
        breadcrumb={[{ label: "Technique", href: "/formats" }, { label: "M3U" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />
      <Section narrow>
        <div className="prose">
          <p>
            Un fichier M3U (ou lien M3U) est une simple liste de lecture : il indique à votre lecteur où trouver chaque chaîne
            et comment l'afficher. C'est un format universel, lisible par la plupart des applications et par VLC.
          </p>
          <h2>À quoi ressemble un lien M3U ?</h2>
          <p>
            Il s'agit d'une adresse internet se terminant généralement par <code>.m3u</code> ou <code>.m3u8</code>. Avec
            4kiptvfr.com, ce lien vous est fourni par e-mail après la commande, avec vos identifiants.
          </p>
          <h2>Comment l'utiliser ?</h2>
          <p>
            Deux options : le coller dans un lecteur simple comme <Link href="/applications/vlc" className="link">VLC</Link>, ou
            l'importer dans une application IPTV dédiée. Pour un usage sur téléviseur, l'
            <Link href="/formats/xtream-codes" className="link">API Xtream</Link> est souvent plus pratique car elle charge
            aussi les catégories et le <Link href="/formats/epg" className="link">guide des programmes</Link>.
          </p>
          <h2>Bonnes pratiques</h2>
          <p>
            Ne partagez pas votre lien M3U : il est personnel et lié à votre abonnement. En cas de lien qui « ne charge plus »,
            vérifiez qu'il a été copié en entier, sans espace, et que votre abonnement est actif.
          </p>
        </div>
      </Section>
      <CTA />
    </>
  );
}
