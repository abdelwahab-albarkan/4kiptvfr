"use client";

import { useState, useLayoutEffect, useRef, type CSSProperties } from "react";
import Link from "next/link";
import { CONNECTION_TIERS, CONNECTION_LIST, waLink } from "@/lib/site";
import Icon from "./Icon";
import WhatsAppIcon from "./WhatsAppIcon";
import PaymentBadges from "./PaymentBadges";
import styles from "./Pricing.module.css";

function formatEuro(num: number): string {
  return num.toFixed(2).replace(".", ",") + " €";
}

const BASE_FEATURES = [
  "50 000+ chaînes en direct HD & 4K",
  "180 000+ films & séries à la demande",
  "1 800+ chaînes sport (Ligue 1, C1, F1)",
  "Qualité 4K Ultra HD & HDR10+",
  "Guide des programmes (EPG) & Replay",
  "100% compatible VPN & Anti-coupure",
  "Activation immédiate en moins de 60 s",
];

export default function Pricing({
  initialConnections = 1,
  note,
  showConnectionTabs = true,
}: {
  initialConnections?: number;
  note?: string;
  showConnectionTabs?: boolean;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [selectedConnections, setSelectedConnections] = useState<number>(initialConnections);

  const currentTier = CONNECTION_TIERS[selectedConnections] ?? CONNECTION_TIERS[1];
  const plans = currentTier.plans;

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.classList.add(styles.reveal);
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          el.classList.add(styles.shown);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className={styles.wrapper} ref={rootRef}>
      {/* Connection Selector Tabs */}
      {showConnectionTabs && (
        <div className={styles.tabContainer}>
          <div className={styles.tabHeader}>
            <span className={styles.tabLabel}>Choisissez le nombre d&apos;écrans simultanés :</span>
          </div>
          <div className={styles.tabList} role="tablist" aria-label="Nombre de connexions">
            {CONNECTION_LIST.map((tier) => {
              const active = tier.connections === selectedConnections;
              return (
                <button
                  key={tier.connections}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`${styles.tabBtn} ${active ? styles.tabBtnActive : ""} ${tier.popular ? styles.tabBtnPopular : ""}`}
                  onClick={() => setSelectedConnections(tier.connections)}
                >
                  <span className={styles.tabBtnMain}>
                    <span className={styles.tabBtnTitle}>{tier.label}</span>
                    <span className={styles.tabBtnSub}>{tier.shortLabel}</span>
                  </span>
                  {tier.popular && <span className={styles.tabBadge}>Recommandé</span>}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Selected Connection Summary Banner */}
      <div className={styles.tierSummary}>
        <div className={styles.tierSummaryLeft}>
          <span className={styles.tierSummaryCount}>{currentTier.connections}</span>
          <div>
            <h3 className={styles.tierSummaryTitle}>{currentTier.label} — {currentTier.tagline}</h3>
            <p className={styles.tierSummaryDesc}>Idéal pour : {currentTier.idealFor}</p>
          </div>
        </div>
        <Link href={`/abonnement/${currentTier.slug}`} className={styles.tierGuideLink}>
          <span>Guide de l&apos;offre {currentTier.label}</span>
          <Icon name="arrow-right" size={14} />
        </Link>
      </div>

      {/* Pricing Cards Grid */}
      <div className={styles.grid}>
        {plans.map((plan, i) => {
          const isPopular = plan.popular;
          const orderMsg = `Bonjour, je souhaite commander la formule ${plan.name} (${currentTier.label}) de 4kiptvfr.com à ${formatEuro(plan.price)}. Merci !`;
          const orderHref = waLink(orderMsg);

          return (
            <div key={plan.id} className={styles.cardWrap} style={{ "--i": i } as CSSProperties}>
              <div className={`${styles.card} ${isPopular ? styles.popularCard : ""}`}>
                {isPopular && (
                  <div className={styles.ribbon}>
                    <Icon name="star" size={13} className={styles.ribbonIcon} />
                    <span>Meilleure offre · 12 mois</span>
                  </div>
                )}

                <div className={styles.header}>
                  <div className={styles.titleRow}>
                    <div>
                      <h4 className={styles.name}>{plan.name}</h4>
                      <p className={styles.subtitle}>{currentTier.label} simultanée{currentTier.connections > 1 ? "s" : ""}</p>
                    </div>
                    {plan.discount && (
                      <span className={`${styles.discountBadge} ${isPopular ? styles.discountBadgePopular : ""}`}>
                        {plan.discount}
                      </span>
                    )}
                  </div>
                </div>

                <div className={styles.pricingBlock}>
                  <div className={styles.monthlyRate}>
                    <span className={styles.priceNum}>{formatEuro(plan.perMonth)}</span>
                    <span className={styles.priceUnit}>/ mois</span>
                  </div>
                  <div className={styles.totalBilled}>
                    <span>Total : <strong>{formatEuro(plan.price)}</strong> pour {plan.months} mois</span>
                    <span className={styles.badgeBilling}>Paiement unique</span>
                  </div>
                </div>

                <div className={styles.cardDivider} />

                {/* Connection Slots Breakdown */}
                <div className={styles.slotBreakdown}>
                  <p className={styles.slotBreakdownTitle}>Écrans inclus dans cette offre :</p>
                  <ul className={styles.slotList}>
                    {currentTier.slots.map((slot, idx) => (
                      <li key={idx} className={styles.slotItem}>
                        <span className={styles.slotCheck} aria-hidden="true">
                          <Icon name="check" size={13} />
                        </span>
                        <span>{slot}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardDivider} />

                {/* Included Features */}
                <div className={styles.featureSection}>
                  <p className={styles.featureTitle}>Fonctionnalités incluses :</p>
                  <ul className={styles.featureList}>
                    {BASE_FEATURES.map((feature) => (
                      <li key={feature} className={styles.featureItem}>
                        <span className={`${styles.checkIcon} ${isPopular ? styles.checkIconPopular : ""}`} aria-hidden="true">
                          <Icon name="check" size={13} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                    {currentTier.connections === 5 && (
                      <li className={styles.featureItem}>
                        <span className={`${styles.checkIcon} ${isPopular ? styles.checkIconPopular : ""}`} aria-hidden="true">
                          <Icon name="check" size={13} />
                        </span>
                        <strong>Support WhatsApp prioritaire 7j/7</strong>
                      </li>
                    )}
                  </ul>
                </div>

                <div className={styles.action}>
                  <a
                    href={orderHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.ctaBtn} ${isPopular ? styles.ctaBtnPopular : styles.ctaBtnStandard}`}
                    aria-label={`Choisir la formule ${plan.name} (${currentTier.label}) et commander sur WhatsApp`}
                  >
                    <span>Choisir {plan.name} ({currentTier.label})</span>
                    <Icon name="arrow-right" size={18} className={styles.ctaArrow} />
                  </a>
                  <p className={styles.guaranteeMicro}>
                    <Icon name="shield" size={13} />
                    <span>Garantie 30 jours · Sans engagement</span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Guarantee Banner */}
      <div className={styles.trustBanner}>
        <div className={styles.trustItem}>
          <div className={styles.trustIconWrap}><Icon name="shield" size={20} /></div>
          <div>
            <h4 className={styles.trustTitle}>Garantie 30 jours</h4>
            <p className={styles.trustDesc}>Satisfait ou remboursé sous 30 jours, sans condition.</p>
          </div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIconWrap}><Icon name="bolt" size={20} /></div>
          <div>
            <h4 className={styles.trustTitle}>Activation en 60 s</h4>
            <p className={styles.trustDesc}>Identifiants générés et envoyés instantanément par e-mail.</p>
          </div>
        </div>
        <div className={styles.trustItem}>
          <div className={styles.trustIconWrap}><Icon name="lock" size={20} /></div>
          <div>
            <h4 className={styles.trustTitle}>Sans engagement</h4>
            <p className={styles.trustDesc}>Aucun renouvellement automatique, vous gardez le contrôle.</p>
          </div>
        </div>
      </div>

      {/* WhatsApp order / question CTA */}
      <div className={styles.waRow}>
        <a
          href={waLink("Bonjour, j'ai une question sur les abonnements et le nombre de connexions 4kiptvfr.com.")}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.waBtn}
        >
          <WhatsAppIcon size={20} />
          <span>Besoin d&apos;aide pour choisir ? Contactez notre équipe sur WhatsApp</span>
        </a>
      </div>

      {/* Payment methods with real brand logos */}
      <div className={styles.paymentRow}>
        <span className={styles.paymentLabel}>Moyens de paiement sécurisés :</span>
        <PaymentBadges />
      </div>

      {note && <p className={styles.customNote}>{note}</p>}
    </div>
  );
}
