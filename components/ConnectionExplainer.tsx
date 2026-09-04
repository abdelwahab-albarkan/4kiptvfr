import Link from "next/link";
import Icon from "./Icon";
import styles from "./ConnectionExplainer.module.css";
import { CONNECTION_LIST } from "@/lib/site";

export default function ConnectionExplainer() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.introBox}>
        <div className={styles.introIcon}>
          <Icon name="screens" size={28} />
        </div>
        <div>
          <h3 className={styles.introTitle}>Qu&apos;est-ce qu&apos;une connexion simultanée ?</h3>
          <p className={styles.introText}>
            Une <strong>connexion</strong> correspond au nombre d&apos;écrans qui peuvent diffuser un flux vidéo en même
            temps avec votre abonnement. Vous pouvez installer vos accès sur tous vos appareils, mais le nombre d&apos;écrans
            allumés simultanément dépend de la formule choisie.
          </p>
        </div>
      </div>

      <div className={styles.grid}>
        {CONNECTION_LIST.map((tier) => (
          <div key={tier.connections} className={`${styles.card} ${tier.popular ? styles.cardPopular : ""}`}>
            {tier.popular && <span className={styles.popularBadge}>Le plus choisi par les foyers</span>}
            <div className={styles.cardHeader}>
              <span className={styles.screenCount}>{tier.connections}</span>
              <div>
                <h4 className={styles.tierTitle}>{tier.label}</h4>
                <p className={styles.tierTagline}>{tier.tagline}</p>
              </div>
            </div>

            <div className={styles.idealBox}>
              <span className={styles.idealLabel}>Idéal pour :</span>
              <p className={styles.idealText}>{tier.idealFor}</p>
            </div>

            <div className={styles.slotList}>
              <span className={styles.slotListTitle}>Écrans utilisables en même temps :</span>
              <ul>
                {tier.slots.map((slot, i) => (
                  <li key={i}>
                    <span className={styles.checkIcon}>
                      <Icon name="check" size={14} />
                    </span>
                    <span>{slot}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link href={`/abonnement/${tier.slug}`} className={styles.cardLink}>
              <span>Voir le détail de l&apos;offre {tier.label}</span>
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.summaryFootnote}>
        <Icon name="info" size={18} />
        <span>
          <strong>Pas de blocage d&apos;adresse IP :</strong> vos connexions peuvent être utilisées dans des pièces
          différentes à domicile, ou par un membre du foyer en déplacement sur mobile en 4G/5G.
        </span>
      </div>
    </div>
  );
}
