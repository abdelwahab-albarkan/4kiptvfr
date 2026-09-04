"use client";

import { useSyncExternalStore } from "react";
import Icon from "./Icon";
import styles from "./ThemeToggle.module.css";

type Theme = "dark" | "light";

/**
 * Light/dark switch. Dark is the default (bare :root), so the server snapshot
 * is always "dark"; on the client the real value is read straight from the
 * <html data-theme> the no-flash inline script already applied — via
 * useSyncExternalStore, so there's no setState-in-effect and any number of
 * toggles stay in sync through the "themechange" event.
 */
function subscribe(onChange: () => void) {
  window.addEventListener("themechange", onChange);
  return () => window.removeEventListener("themechange", onChange);
}
function getSnapshot(): Theme {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}
function getServerSnapshot(): Theme {
  return "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next: Theme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* private mode / storage blocked — the choice just won't persist */
    }
    window.dispatchEvent(new Event("themechange"));
  }

  const goingToLight = theme === "dark";

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggle}
      aria-label={goingToLight ? "Activer le thème clair" : "Activer le thème sombre"}
      title={goingToLight ? "Thème clair" : "Thème sombre"}
    >
      <Icon name={goingToLight ? "sun" : "moon"} size={20} className={styles.icon} />
    </button>
  );
}
