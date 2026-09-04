"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, NAV_CTA } from "@/lib/site";
import Container from "./Container";
import Logo from "./Logo";
import Icon from "./Icon";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";
import styles from "./Header.module.css";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Header() {
  const pathname = usePathname() || "/";
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container className={styles.inner} as="div">
        <Logo />

        <nav className={styles.nav} aria-label="Navigation principale">
          {NAV.map((item) => {
            const active = isActive(pathname, item.href);

            if (!item.children) {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`${styles.link} ${active ? styles.linkActive : ""}`}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </Link>
              );
            }

            const childActive = active || item.children.some((c) => isActive(pathname, c.href));

            return (
              // Hover (and keyboard focus-within) reveals the submenu — desktop only.
              <div key={item.label} className={styles.group}>
                <Link
                  href={item.href}
                  className={`${styles.link} ${styles.groupBtn} ${childActive ? styles.linkActive : ""}`}
                  aria-current={childActive ? "page" : undefined}
                >
                  {item.label}
                  <Icon name="chevron-down" size={14} strokeWidth={1.6} className={styles.chevron} />
                </Link>

                {/* wrapper bridges the visual gap so hover never drops */}
                <div className={styles.menuWrap}>
                  <div className={styles.menu}>
                    {item.children.map((c) => {
                      const cActive = isActive(pathname, c.href);
                      return (
                        <Link
                          key={c.label}
                          href={c.href}
                          className={`${styles.menuItem} ${cActive ? styles.menuItemActive : ""}`}
                          aria-current={cActive ? "page" : undefined}
                        >
                          <span>{c.label}</span>
                          <Icon name="arrow-right" size={16} className={styles.menuArrow} />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <Link
            href={NAV_CTA.href}
            className={`${styles.cta} ${isActive(pathname, NAV_CTA.href) ? styles.ctaActive : ""}`}
            aria-current={isActive(pathname, NAV_CTA.href) ? "page" : undefined}
          >
            {NAV_CTA.label}
          </Link>
          <button
            type="button"
            className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ""}`}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </Container>

      <MobileMenu open={mobileOpen} pathname={pathname} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
