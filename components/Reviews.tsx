import Link from "next/link";
import ReviewCard from "./ReviewCard";
import Icon from "./Icon";
import { REVIEWS, REVIEWS_ARE_PLACEHOLDER } from "@/lib/reviews";
import styles from "./Reviews.module.css";

/**
 * Reviews / testimonials grid. Data comes from lib/reviews.ts so entries can be
 * swapped for a real source without touching this component. While the data is
 * placeholder, a small honest note marks the cards as display examples.
 */
export default function Reviews() {
  return (
    <div className={styles.wrap}>
      <ul className={styles.grid}>
        {REVIEWS.map((r) => (
          <li key={r.id} className={styles.item}>
            <ReviewCard review={r} />
          </li>
        ))}
      </ul>

      <div className={styles.footer}>
        {REVIEWS_ARE_PLACEHOLDER && (
          <p className={styles.note}>
            Exemples d&apos;affichage — cette section est prête à accueillir vos avis clients.
          </p>
        )}
        <Link href="/abonnement/avis" className={styles.cta}>
          Notre méthode d&apos;évaluation
          <Icon name="arrow-right" size={17} />
        </Link>
      </div>
    </div>
  );
}
