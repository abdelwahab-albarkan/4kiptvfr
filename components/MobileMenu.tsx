"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV, PRIMARY_CTA, NAV_CTA } from "@/lib/site";
import Icon from "./Icon";
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
  // The category that contains the current page — expanded by default so the
  // user immediately sees where they are.
  const activeGroup =
    NAV.find((i) => i.children?.some((c) => isActive(pathname, c.href)))?.label ?? null;

  // Single-open accordion: only one category is expanded at a time.
  const [expanded, setExpanded] = useState<string | null>(activeGroup);

  useEffect(() => {
    if (open) setExpanded(activeGroup);
  }, [open, activeGroup]);

  // Lock body scroll + close on Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className={styles.overlay} id="mobile-menu">
      <nav className={styles.panel} aria-label="Menu mobile">
        {NAV.map((item) => {
          // Direct link (no children)
          if (!item.children) {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`${styles.row} ${styles.link} ${active ? styles.active : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          }

          // Collapsible category
          const groupActive =
            isActive(pathname, item.href) || item.children.some((c) => isActive(pathname, c.href));
          const isOpen = expanded === item.label;

          return (
            <div key={item.label} className={styles.group}>
              <button
                type="button"
                className={`${styles.row} ${styles.groupBtn} ${groupActive ? styles.active : ""}`}
                aria-expanded={isOpen}
                onClick={() => setExpanded(isOpen ? null : item.label)}
              >
                <span>{item.label}</span>
                <Icon
                  name="chevron-down"
                  size={18}
                  className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                />
              </button>

              {isOpen && (
                <div className={styles.subInner}>
                  {item.children.map((c) => {
                    const cActive = isActive(pathname, c.href);
                    return (
                      <Link
                        key={c.label}
                        href={c.href}
                        onClick={onClose}
                        className={`${styles.sublink} ${cActive ? styles.active : ""}`}
                        aria-current={cActive ? "page" : undefined}
                      >
                        {c.label}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}

        <Button href={NAV_CTA.href} block size="lg" className={styles.cta} onClick={onClose}>
          {NAV_CTA.label}
        </Button>
        <Button
          href={PRIMARY_CTA.href}
          block
          size="lg"
          variant="secondary"
          onClick={onClose}
          style={{ marginTop: "var(--space-3)" }}
        >
          {PRIMARY_CTA.label}
        </Button>
      </nav>
    </div>
  );
}
