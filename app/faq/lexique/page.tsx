import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Lexique IPTV : tous les termes expliqués",
  description:
    "Le lexique de l'IPTV : IPTV, M3U, Xtream Codes, EPG, VOD, 4K, HDR, H.265, buffering, VPN… Toutes les définitions claires pour bien comprendre le vocabulaire.",
  path: "/faq/lexique",
  keywords: ["c'est quoi iptv", "iptv definition", "m3u c'est quoi", "xtream codes definition", "lexique iptv", "epg c'est quoi"],
});

const TERMS: { term: string; def: React.ReactNode }[] = [
  { term: "IPTV", def: <>Diffusion de télévision via internet (Internet Protocol Television), plutôt que par antenne, câble ou satellite.</> },
  { term: "M3U", def: <>Format de liste de lecture qui indique au lecteur où trouver chaque chaîne. Voir la page <Link href="/formats/m3u" className="link">M3U</Link>.</> },
  { term: "Xtream Codes", def: <>Méthode de connexion à trois champs (URL, identifiant, mot de passe) qui charge automatiquement catégories et guide. Voir <Link href="/formats/xtream-codes" className="link">Xtream Codes</Link>.</> },
  { term: "EPG", def: <>Guide électronique des programmes : affiche le programme en cours et à venir. Voir <Link href="/formats/epg" className="link">EPG</Link>.</> },
  { term: "VOD", def: <>Vidéo à la demande : films et séries que l'on lance quand on veut, indépendamment du direct.</> },
  { term: "Replay / Catch-up", def: <>Fonction permettant de revoir un programme déjà diffusé pendant une période donnée.</> },
  { term: "4K / UHD", def: <>Ultra Haute Définition, quatre fois plus de pixels que le Full HD, pour une image plus nette.</> },
  { term: "HDR", def: <>High Dynamic Range : plage de couleurs et de contraste étendue, pour une image plus riche.</> },
  { term: "H.265 (HEVC)", def: <>Codec vidéo moderne offrant une qualité élevée pour une bande passante réduite.</> },
  { term: "Buffering", def: <>Mise en mémoire tampon : l'image se fige le temps de charger. Souvent lié au réseau. Voir <Link href="/problemes/buffering-coupure" className="link">buffering & coupures</Link>.</> },
  { term: "VPN", def: <>Réseau privé virtuel qui chiffre la connexion et masque l'adresse IP. 4kiptvfr.com est compatible VPN.</> },
  { term: "APK", def: <>Fichier d'installation d'une application Android, parfois utilisé pour installer un lecteur hors magasin.</> },
  { term: "Portail (MAG)", def: <>Adresse de configuration utilisée par les décodeurs MAG, à la place d'une application. Voir <Link href="/appareils/mag" className="link">MAG Box</Link>.</> },
  { term: "Multi-écran", def: <>Possibilité de regarder sur plusieurs appareils, selon la formule choisie.</> },
];

export default function LexiquePage() {
  return (
    <>
      <PageHeader
        eyebrow="Aide · Lexique"
        title={<>Le <span className="accent">lexique</span> de l'IPTV</>}
        lead="Tous les termes techniques de l'IPTV, expliqués simplement. Une référence rapide pour comprendre le vocabulaire du streaming."
        breadcrumb={[{ label: "FAQ", href: "/faq" }, { label: "Lexique" }]}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <dl style={{ display: "grid", gap: "var(--space-4)" }}>
          {TERMS.map((t) => (
            <div key={t.term} className="card">
              <dt style={{ fontWeight: 750, fontSize: "1.1rem", color: "var(--text)" }}>{t.term}</dt>
              <dd style={{ marginTop: "var(--space-2)", color: "var(--text-secondary)", lineHeight: 1.6 }}>{t.def}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <CTA />
    </>
  );
}
