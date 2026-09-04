import Link from "next/link";
import Container from "./Container";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import styles from "./CTA.module.css";

export default function CTA({
  title = "Prêt à passer à la vitesse supérieure ?",
  lead = "Rejoignez 4kiptvfr.com et profitez de milliers de chaînes et de films en 4K, sur tous vos appareils. Activation en moins de 60 secondes.",
  primary = PRIMARY_CTA,
  secondary = SECONDARY_CTA,
}: {
  title?: string;
  lead?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="section">
      <Container>
        <div className={styles.panel}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.lead}>{lead}</p>
          <div className={styles.actions}>
            <Link href={primary.href} className={`btn btn-lg ${styles.btnLight}`}>
              {primary.label}
            </Link>
            {secondary && (
              <Link href={secondary.href} className={`btn btn-lg ${styles.btnOutline}`}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
