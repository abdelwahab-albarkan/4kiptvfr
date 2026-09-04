import { waLink } from "@/lib/site";
import WhatsAppIcon from "./WhatsAppIcon";
import styles from "./WhatsAppFab.module.css";

/** Subtle fixed WhatsApp contact button, bottom-right, on every page. */
export default function WhatsAppFab() {
  return (
    <a
      href={waLink("Bonjour, je vous contacte depuis 4kiptvfr.com.")}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Nous contacter sur WhatsApp"
    >
      <WhatsAppIcon size={28} className={styles.icon} />
      <span className={styles.tooltip} aria-hidden="true">Nous contacter sur WhatsApp</span>
    </a>
  );
}
