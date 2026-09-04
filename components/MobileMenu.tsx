"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NAV, PRIMARY_CTA, NAV_CTA } from "@/lib/site";
import Button from "./Button";
import styles from "./MobileMenu.module.css";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function MobileMenu({
  open,
  pathname,
  onClose,
}: {
  open: boolean;
  pathname: string;
  onClose: () => void;
}) {
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.overlay} id="mobile-menu">
      <div className={styles.panel}>
        {NAV.map((item) =>
          item.children ? (
            <div key={item.label} className={styles.section}>
              <p className={styles.groupLabel}>{item.label}</p>
              {item.children.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  onClick={onClose}
                  className={`${styles.sublink} ${isActive(pathname, c.href) ? styles.linkActive : ""}`}
                >
                  {c.label}
                </Link>
              ))}
            </div>
          ) : (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className={`${styles.link} ${isActive(pathname, item.href) ? styles.linkActive : ""}`}
            >
              {item.label}
            </Link>
          )
        )}

        <Button href={NAV_CTA.href} block size="lg" className={styles.cta} onClick={onClose}>
          {NAV_CTA.label}
        </Button>
        <Button href={PRIMARY_CTA.href} block size="lg" variant="secondary" onClick={onClose} style={{ marginTop: "var(--space-3)" }}>
          {PRIMARY_CTA.label}
        </Button>
      </div>
    </div>
  );
}
