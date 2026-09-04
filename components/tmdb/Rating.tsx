import Icon from "../Icon";
import styles from "./tmdb.module.css";

/** TMDB vote average (0–10) shown as a star + one-decimal number. */
export default function Rating({ value, size = 16 }: { value: number; size?: number }) {
  if (!value) return null;
  return (
    <span className={styles.rating}>
      <Icon name="star" size={size} />
      {value.toFixed(1)}
    </span>
  );
}
