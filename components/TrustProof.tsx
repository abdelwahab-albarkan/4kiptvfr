import Link from "next/link";
import Icon, { type IconName } from "./Icon";
import PaymentBadges from "./PaymentBadges";
import { SITE, waLink } from "@/lib/site";
import styles from "./TrustProof.module.css";

/**
 * Preuves & garanties — honest, verifiable trust signals only.
 *
 * Every claim is a real, documented product fact:
 *  • 30-day money-back guarantee (confirmed in PLAN_FEATURES + FAQ)
 *  • No commitment / no auto-renewal (confirmed in PLAN_FEATURES + FAQ)
 *  • French-language WhatsApp + email support (SITE.whatsappNumber / supportEmail)
 *  • <60 s activation (confirmed in PLAN_FEATURES + FAQ)
 *  • Multi-device compatibility (confirmed in PLAN_FEATURES)
 *  • Secure payment, multiple methods (confirmed in PAYMENTS list)
 *
 * Deliberately NO fabricated star ratings, no fake review counts.
 */
const SIGNALS: {
  icon: IconName;
  title: string;
  description: string;
  highlight?: boolean;
}[] = [
  {
    icon: "shield",
    title: "Satisfait ou remboursé — 30 jours",
    description:
      "Testez le service sans risque. Si vous n'êtes pas satisfait dans les 30 jours, nous vous remboursons intégralement, sans question.",
    highlight: true,
  },
  {
    icon: "check",
    title: "Sans engagement",
    description:
      "Aucun contrat, aucune reconduction automatique. Votre abonnement prend fin à son terme, vous choisissez librement de renouveler.",
  },
  {
    icon: "chat",
    title: "Support en français",
    description:
      "Une vraie équipe francophone disponible par WhatsApp et par e-mail, avant et après votre commande.",
  },
  {
    icon: "bolt",
    title: "Activation en moins de 60 s",
    description:
      "Vos identifiants sont générés automatiquement et envoyés par e-mail quelques secondes après la commande.",
  },
  {
    icon: "screens",
    title: "Compatible tous appareils",
    description:
      "Smart TV, Android TV, Fire TV Stick, Apple TV, box Android, mobiles et PC — et 100% compatible VPN.",
  },
  {
    icon: "lock",
    title: "Paiement 100% sécurisé",
    description:
      "Visa, Mastercard, PayPal, Apple Pay, Google Pay et crypto acceptés. Vos données de paiement ne transitent jamais par nos serveurs.",
  },
];

export default function TrustProof() {
  return (
    <div className={styles.wrap}>
      {/* ── Signal cards ── */}
      <div className={`grid grid--3 ${styles.grid}`}>
        {SIGNALS.map((s) => (
          <article
            key={s.title}
            className={`card ${styles.card} ${s.highlight ? styles.cardHighlight : ""}`}
          >
            <span
              className={`icon-chip ${s.highlight ? styles.chipAccent : ""}`}
              aria-hidden="true"
            >
              <Icon name={s.icon} size={22} />
            </span>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.description}</p>
          </article>
        ))}
      </div>

      {/* ── Payment + contact reassurance band ── */}
      <div className={styles.footer}>
        {/* Payment column */}
        <div className={styles.paymentCol}>
          <span className={styles.colLabel}>Paiement 100% sécurisé</span>
          <PaymentBadges align="start" size="sm" />
        </div>

        {/* Divider (desktop) */}
        <div className={styles.vDivider} aria-hidden="true" />

        {/* Contact column */}
        <div className={styles.contactCol}>
          <span className={styles.colLabel}>Besoin d&apos;aide ?</span>
          <div className={styles.contactLinks}>
            <Link
              href={waLink(
                "Bonjour, j'ai une question avant de commander sur 4kiptvfr.com."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waLink}
            >
              {/* Inline WhatsApp icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </Link>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className={styles.mailLink}
            >
              {SITE.supportEmail}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
