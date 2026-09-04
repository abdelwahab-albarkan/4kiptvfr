import Image from "next/image";
import Flag, { flagCode } from "./Flag";
import StarRating from "./StarRating";
import type { Review } from "@/lib/reviews";
import styles from "./ReviewCard.module.css";

function initials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ReviewCard({ review }: { review: Review }) {
  const { name, country, rating, comment, date, verified, avatar } = review;
  return (
    <article className={`card ${styles.card}`}>
      <StarRating rating={rating} />
      <p className={styles.comment}>{comment}</p>
      <div className={styles.foot}>
        {avatar ? (
          // Portrait avatar in a fixed 44×44 circular wrapper (always reserves
          // space → no CLS/collapse). Decorative (name shown alongside) → alt="".
          // Lazy (below the fold); next/image downsizes the large source to a
          // 44px (×2) avif/webp.
          <span className={styles.avatarWrap}>
            <Image src={avatar} alt="" fill className={styles.avatarImage} sizes="44px" />
          </span>
        ) : (
          <span className={styles.avatar} aria-hidden="true">
            {initials(name)}
          </span>
        )}
        <div className={styles.who}>
          <span className={styles.name}>{name}</span>
          <span className={styles.meta}>
            {flagCode(country) ? <Flag country={country} size={16} /> : null}
            {country}
          </span>
        </div>
        {verified ? (
          <span className={styles.verified}>Client vérifié</span>
        ) : (
          <span className={styles.date}>{date}</span>
        )}
      </div>
    </article>
  );
}
