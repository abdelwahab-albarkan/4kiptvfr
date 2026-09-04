import Link from "next/link";
import { SITE, LEGAL_LINKS, waLink } from "@/lib/site";
import Container from "./Container";
import Logo from "./Logo";
import Icon from "./Icon";
import WhatsAppIcon from "./WhatsAppIcon";
import PaymentBadges from "./PaymentBadges";
import SocialLinks from "./SocialLinks";
import styles from "./Footer.module.css";

/* Footer navigation — pillars → clusters → supporting content.
   Every href is an existing canonical route. `seeAll` surfaces a hub that
   isn't already listed in its column (no duplicate links). */
const COLUMNS: {
  title: string;
  links: { label: string; href: string }[];
  seeAll?: { label: string; href: string };
}[] = [
  {
    title: "Abonnement",
    links: [
      { label: "Meilleur IPTV", href: "/meilleur-iptv" },
      { label: "Abonnement IPTV", href: "/abonnement" },
      { label: "Prix", href: "/abonnement/prix" },
      { label: "Annuel", href: "/abonnement/annuel" },
      { label: "Premium", href: "/abonnement/premium" },
      { label: "4K Ultra HD", href: "/abonnement/4k" },
      { label: "Pas cher", href: "/abonnement/pas-cher" },
      { label: "Essai gratuit", href: "/abonnement/essai-gratuit" },
      { label: "Comparatif des offres", href: "/abonnement/comparatif" },
      { label: "Avis & tests", href: "/abonnement/avis" },
    ],
    seeAll: { label: "Devenir revendeur", href: "/abonnement/revendeur" },
  },
  {
    title: "Appareils",
    links: [
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "LG Smart TV", href: "/appareils/lg" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Fire TV Stick", href: "/appareils/firestick" },
      { label: "Apple TV", href: "/appareils/apple-tv" },
      { label: "Xiaomi", href: "/appareils/xiaomi" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
      { label: "Nvidia Shield", href: "/appareils/nvidia-shield" },
      { label: "MAG Box", href: "/appareils/mag" },
      { label: "Windows", href: "/appareils/windows" },
      { label: "Mac", href: "/appareils/mac" },
    ],
    seeAll: { label: "Tous les appareils", href: "/appareils" },
  },
  {
    title: "Applications & installation",
    links: [
      { label: "IPTV Smarters", href: "/applications/smarters" },
      { label: "TiviMate", href: "/applications/tivimate" },
      { label: "VLC", href: "/applications/vlc" },
      { label: "Kodi", href: "/applications/kodi" },
      { label: "GSE Smart IPTV", href: "/applications/gse-smart-iptv" },
      { label: "OTT Navigator", href: "/applications/ott-navigator" },
      { label: "XCIPTV", href: "/applications/xciptv" },
      { label: "Guide d'installation", href: "/appareils" },
      { label: "Formats IPTV", href: "/formats" },
      { label: "Playlist M3U", href: "/formats/m3u" },
      { label: "Xtream Codes", href: "/formats/xtream-codes" },
      { label: "Guide EPG", href: "/formats/epg" },
    ],
    seeAll: { label: "Toutes les applications", href: "/applications" },
  },
  {
    title: "Contenu & sport",
    links: [
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
      { label: "Toutes les chaînes", href: "/contenu/chaines" },
      { label: "Chaînes arabes", href: "/contenu/chaines/arabes" },
      { label: "Chaînes marocaines", href: "/contenu/chaines/marocaines" },
      { label: "Sport en direct", href: "/contenu/sport" },
      { label: "Regarder la Ligue 1", href: "/contenu/sport/ligue-1" },
      { label: "Champions League", href: "/contenu/sport/champions-league" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
      { label: "Films", href: "/contenu/divertissement/films" },
      { label: "Séries", href: "/contenu/divertissement/series" },
      { label: "Comparatifs IPTV", href: "/comparatifs" },
    ],
    seeAll: { label: "Films & séries", href: "/contenu/divertissement" },
  },
  {
    title: "Guides & aide",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Questions fréquentes", href: "/faq/questions-frequentes" },
      { label: "Lexique IPTV", href: "/faq/lexique" },
      { label: "Problèmes IPTV", href: "/problemes" },
      { label: "IPTV ne fonctionne pas", href: "/problemes/iptv-ne-fonctionne-pas" },
      { label: "Buffering & coupures", href: "/problemes/buffering-coupure" },
      { label: "Écran noir", href: "/problemes/ecran-noir" },
      { label: "Bloqué par l'opérateur", href: "/problemes/iptv-bloque-operateur" },
      { label: "Qu'est-ce que l'IPTV ?", href: "/blog/quest-ce-que-liptv" },
      { label: "Comment installer l'IPTV", href: "/blog/comment-installer-iptv" },
      { label: "Blog & guides", href: "/blog" },
      { label: "À propos", href: "/a-propos" },
    ],
    seeAll: { label: "Nous contacter", href: "/contact" },
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        {/* Knowledge directory panel */}
        <div className={styles.panel}>
          <div className={styles.panelHead}>
            <p className={styles.dirEyebrow}>Guide complet 4kiptvfr.com</p>
            <p className={styles.dirSub}>
              Accès rapide aux guides d&apos;installation, aux chaînes, aux appareils, aux comparatifs
              et à nos tutoriels.
            </p>
          </div>

          <div className={styles.grid}>
            {COLUMNS.map((col, i) => (
              <nav key={col.title} aria-labelledby={`footer-h-${i}`} className={styles.navCol}>
                <h2 id={`footer-h-${i}`} className={styles.colTitle}>
                  {col.title}
                </h2>
                <ul className={styles.list}>
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href}>{l.label}</Link>
                    </li>
                  ))}
                </ul>
                {col.seeAll && (
                  <Link href={col.seeAll.href} className={styles.seeAll}>
                    {col.seeAll.label} →
                  </Link>
                )}
              </nav>
            ))}
          </div>
        </div>

        {/* Brand / contact + payments */}
        <div className={styles.foot}>
          <div className={styles.brandArea}>
            <Logo tone="light" />
            <p className={styles.tagline}>{SITE.tagline}</p>
            <div className={styles.contact}>
              <a href={`mailto:${SITE.supportEmail}`}>
                <Icon name="mail" size={17} /> {SITE.supportEmail}
              </a>
              <Link href="/contact">
                <Icon name="chat" size={17} /> Support &amp; contact
              </Link>
              <a
                href={waLink("Bonjour, je vous contacte depuis 4kiptvfr.com.")}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous contacter sur WhatsApp"
              >
                <WhatsAppIcon size={17} style={{ color: "#25d366" }} /> WhatsApp
              </a>
            </div>
          </div>

          <SocialLinks title="Suivez-nous" className={styles.socialArea} />

          <div className={styles.payArea}>
            <p className={styles.payLabel}>Paiement 100% sécurisé</p>
            <PaymentBadges align="start" size="sm" />
          </div>
        </div>

        {/* Legal bar */}
        <div className={styles.legal}>
          <p className={styles.copy}>
            © {year} {SITE.name}. Tous droits réservés.
          </p>
          <nav className={styles.legalRow} aria-label="Liens légaux">
            {LEGAL_LINKS.map((l) => (
              <Link key={l.href} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
