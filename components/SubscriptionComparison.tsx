import Link from "next/link";
import Icon from "./Icon";
import styles from "./SubscriptionComparison.module.css";
import { CONNECTION_LIST } from "@/lib/site";

export default function SubscriptionComparison() {
  return (
    <div className={styles.wrapper}>
      {/* Desktop Table */}
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thFeature}>Critères & Fonctionnalités</th>
              {CONNECTION_LIST.map((tier) => (
                <th
                  key={tier.connections}
                  className={`${styles.thTier} ${tier.popular ? styles.thPopular : ""}`}
                >
                  {tier.popular && <span className={styles.headerBadge}>Recommandé</span>}
                  <div className={styles.tierName}>{tier.label}</div>
                  <div className={styles.tierTagline}>{tier.tagline}</div>
                  <div className={styles.tierPrice}>
                    dès <strong>{tier.plans[2].perMonth.toFixed(2).replace(".", ",")} €</strong>
                    <span className={styles.perMonth}>/mois</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className={styles.tdLabel}>Écrans en direct simultanés</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <strong className={styles.highlightVal}>{tier.connections} écran{tier.connections > 1 ? "s" : ""}</strong>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Qualité vidéo 4K UHD & HDR10+</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Inclus</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>50 000+ Chaînes en direct</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Inclus</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>180 000+ Films & Séries VOD</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Inclus</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Tout le sport en direct (Ligue 1, C1...)</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Inclus</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Replay 7 jours & Guide EPG</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Inclus</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>100% Compatible VPN & Anti-coupure</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Inclus</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Sans blocage d&apos;adresse IP</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}><Icon name="check" size={16} /> Partout</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Support WhatsApp & E-mail 7j/7</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.check}>
                    <Icon name="check" size={16} />
                    {tier.connections === 5 ? " Prioritaire" : " Inclus"}
                  </span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Idéal pour</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.idealText}>{tier.idealFor}</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Tarif 12 mois (Meilleur rapport)</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <span className={styles.totalPriceText}>{tier.plans[2].price.toFixed(2).replace(".", ",")} €</span>
                </td>
              ))}
            </tr>
            <tr>
              <td className={styles.tdLabel}>Accéder à l&apos;offre</td>
              {CONNECTION_LIST.map((tier) => (
                <td key={tier.connections} className={`${styles.tdVal} ${tier.popular ? styles.tdPopular : ""}`}>
                  <Link
                    href={`/abonnement/${tier.slug}`}
                    className={`${styles.btnSelect} ${tier.popular ? styles.btnSelectPopular : ""}`}
                  >
                    <span>Voir {tier.label}</span>
                    <Icon name="arrow-right" size={14} />
                  </Link>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Stacked Cards */}
      <div className={styles.mobileCards}>
        {CONNECTION_LIST.map((tier) => (
          <div
            key={tier.connections}
            className={`${styles.mobileCard} ${tier.popular ? styles.mobileCardPopular : ""}`}
          >
            {tier.popular && <span className={styles.mobilePopularBadge}>Recommandé</span>}
            <div className={styles.mobileCardHead}>
              <div>
                <h4 className={styles.mobileTierName}>{tier.label}</h4>
                <p className={styles.mobileTierTagline}>{tier.tagline}</p>
              </div>
              <div className={styles.mobilePrice}>
                <strong>{tier.plans[2].perMonth.toFixed(2).replace(".", ",")} €</strong>
                <span>/mois</span>
              </div>
            </div>

            <div className={styles.mobileFeatures}>
              <div className={styles.mobileFeatureRow}>
                <span>Écrans simultanés :</span>
                <strong>{tier.connections} écran{tier.connections > 1 ? "s" : ""}</strong>
              </div>
              <div className={styles.mobileFeatureRow}>
                <span>Idéal pour :</span>
                <span>{tier.idealFor}</span>
              </div>
              <div className={styles.mobileFeatureRow}>
                <span>Tarif 12 mois :</span>
                <strong>{tier.plans[2].price.toFixed(2).replace(".", ",")} €</strong>
              </div>
              <div className={styles.mobileFeatureRow}>
                <span>Contenu & Qualité :</span>
                <span>4K UHD · 50 000+ Chaînes · 180k VOD</span>
              </div>
            </div>

            <Link
              href={`/abonnement/${tier.slug}`}
              className={`${styles.mobileBtn} ${tier.popular ? styles.mobileBtnPopular : ""}`}
            >
              <span>Choisir l&apos;offre {tier.label}</span>
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
