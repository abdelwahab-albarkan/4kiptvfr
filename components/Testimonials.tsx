import Link from "next/link";
import Icon from "./Icon";
import { waLink, SITE } from "@/lib/site";
import styles from "./Testimonials.module.css";

/**
 * Avis clients — "Ce que pensent nos clients"
 *
 * HONEST STANCE: No fabricated reviews, no invented star ratings, no fake
 * customer names. This component is intentionally transparent: it explains
 * that we welcome real feedback and provides genuine channels to reach support.
 *
 * When real, verified testimonials are available, replace the
 * PENDING_REVIEWS array with actual customer quotes and names.
 */

/** Drop real verified testimonials here when available. */
const VERIFIED_REVIEWS: {
  quote: string;
  author: string;
  context?: string;
}[] = [
  // No verified reviews yet — UI ready to receive them.
];

export default function Testimonials() {
  const hasReviews = VERIFIED_REVIEWS.length > 0;

  return (
    <div className={styles.wrap}>
      {hasReviews ? (
        /* ── Verified reviews grid (activate when real data exists) ── */
        <ul className={`grid grid--3 ${styles.grid}`} role="list">
          {VERIFIED_REVIEWS.map((r, i) => (
            <li key={i} className={`card ${styles.card}`}>
              <blockquote className={styles.blockquote}>
                <p className={styles.quote}>&ldquo;{r.quote}&rdquo;</p>
                <footer className={styles.footer}>
                  <span className={styles.author}>{r.author}</span>
                  {r.context && (
                    <span className={styles.context}>{r.context}</span>
                  )}
                </footer>
              </blockquote>
            </li>
          ))}
        </ul>
      ) : (
        /* ── Transparent empty state — honest, conversion-friendly ── */
        <div className={styles.emptyState}>
          <div className={styles.emptyIcon} aria-hidden="true">
            <Icon name="chat" size={32} />
          </div>
          <p className={styles.emptyTitle}>
            Vos retours nous aident à progresser
          </p>
          <p className={styles.emptyText}>
            Nous recueillons activement les retours de nos clients. Si vous
            utilisez déjà 4kiptvfr.com, partagez votre expérience — votre
            avis contribue à améliorer le service pour tous.
          </p>
        </div>
      )}

      {/* ── Genuine contact CTA — always visible ── */}
      <div className={styles.ctaPanel}>
        <div className={styles.ctaLeft}>
          <span className={styles.ctaChip}>
            <Icon name="shield" size={15} />
            Support client
          </span>
          <p className={styles.ctaTitle}>
            Une question ? Notre équipe vous répond en français.
          </p>
          <p className={styles.ctaText}>
            Par WhatsApp ou par e-mail — avant ou après votre commande, nous
            sommes là pour vous aider.
          </p>
        </div>
        <div className={styles.ctaActions}>
          <Link
            href={waLink(
              "Bonjour, j'ai une question concernant 4kiptvfr.com."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.waBtn}
            aria-label="Nous contacter sur WhatsApp"
          >
            {/* WhatsApp icon inline for accessibility */}
            <svg
              width="20"
              height="20"
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
            className={styles.mailBtn}
            aria-label={`Envoyer un e-mail à ${SITE.supportEmail}`}
          >
            <Icon name="mail" size={18} />
            {SITE.supportEmail}
          </a>
        </div>
      </div>
    </div>
  );
}
