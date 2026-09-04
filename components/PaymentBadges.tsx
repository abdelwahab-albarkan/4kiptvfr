import Image from "next/image";
import { PAYMENTS } from "@/lib/site";
import styles from "./PaymentBadges.module.css";

/**
 * Payment-method strip using the real brand logo assets in
 * /public/images/payments/. Logos are decorative (alt="") since the label
 * text names each method — avoids duplicate screen-reader announcements.
 */
export default function PaymentBadges({
  align = "center",
  size = "md",
}: {
  align?: "center" | "start";
  size?: "md" | "sm";
}) {
  return (
    <ul
      className={[styles.strip, align === "start" ? styles.stripStart : "", size === "sm" ? styles.sm : ""]
        .filter(Boolean)
        .join(" ")}
    >
      {PAYMENTS.map((p) => (
        <li key={p.name} className={styles.badge}>
          <span className={styles.logoWrap}>
            <Image
              src={`/images/payments/${p.file}`}
              alt=""
              fill
              sizes="44px"
              className={styles.logo}
              style={{ objectFit: "contain" }}
            />
          </span>
          <span className={styles.name}>{p.name}</span>
        </li>
      ))}
    </ul>
  );
}
