"use client";

import Link from "next/link";
import Image from "next/image";
import { useLayoutEffect, useRef, type CSSProperties } from "react";
import styles from "./DeviceGrid.module.css";

export interface DeviceItem {
  slug: string;
  name: string;
  os?: string;
  lead?: string;
}

/* Real device photos already present in /public/images/ (transparent PNG
   cutouts). One appropriate asset per platform — no generated art, no logos. */
const DEVICE_META: Record<string, { fullName: string; sub: string; image: string }> = {
  samsung:         { fullName: "Samsung Smart TV", sub: "Tizen OS",             image: "/images/samsungsmarttv.png" },
  lg:              { fullName: "LG Smart TV",       sub: "webOS · OLED & 4K",   image: "/images/LG TV (webOS).png" },
  "android-tv":    { fullName: "Android TV",        sub: "Google TV",            image: "/images/Android TV.png" },
  firestick:       { fullName: "Fire TV Stick",     sub: "Amazon · Fire OS",     image: "/images/firestick.png" },
  "apple-tv":      { fullName: "Apple TV",          sub: "tvOS 4K",              image: "/images/appletv.png" },
  xiaomi:          { fullName: "Xiaomi",            sub: "Mi Box S & TV Stick",  image: "/images/device-xiaomi.png" },
  "iphone-ipad":   { fullName: "iPhone & iPad",     sub: "iOS & iPadOS",         image: "/images/device-iphone-ipad.png" },
  "nvidia-shield": { fullName: "Nvidia Shield",     sub: "Shield TV Pro 4K",     image: "/images/nvidiashield.png" },
  mag:             { fullName: "MAG Box",           sub: "Infomir · Linux",      image: "/images/mag.png" },
  windows:         { fullName: "Windows",           sub: "Windows 10 / 11",      image: "/images/windowspc.png" },
  mac:             { fullName: "Mac",               sub: "macOS · MacBook & iMac", image: "/images/macos.png" },
};

export default function DeviceGrid({ items }: { items: DeviceItem[] }) {
  const rootRef = useRef<HTMLDivElement>(null);

  // Staggered reveal on scroll-into-view. SSR/no-JS/reduced-motion show it
  // immediately; otherwise hide before paint, then animate in once.
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
    <div className={styles.grid} ref={rootRef}>
      {items.map((d, i) => {
        const meta = DEVICE_META[d.slug];
        if (!meta) return null;

        return (
          <div key={d.slug} className={styles.cardWrap} style={{ "--i": i } as CSSProperties}>
            <Link
              href={`/appareils/${d.slug}`}
              className={styles.card}
              aria-label={`Guide d'installation IPTV sur ${meta.fullName}`}
            >
              <span className={styles.iconWrap}>
                <Image src={meta.image} alt="" fill sizes="56px" style={{ objectFit: "contain" }} />
              </span>
              <div className={styles.content}>
                <h3 className={styles.title}>{meta.fullName}</h3>
                <p className={styles.sub}>{meta.sub}</p>
              </div>
              <span className={styles.arrowWrap} aria-hidden="true">
                <svg
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor"
                  strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"
                  className={styles.arrow}
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
