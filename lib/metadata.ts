import { SITE } from "./site";

/**
 * Metadata formatting and helper utilities.
 */

export function getFullTitle(pageTitle?: string): string {
  if (!pageTitle) return `${SITE.name} — Télévision Premium en France`;
  return `${pageTitle} | ${SITE.name}`;
}

export function formatMetaDescription(desc: string, maxLen = 160): string {
  if (desc.length <= maxLen) return desc;
  return desc.slice(0, maxLen - 1).trim() + "…";
}

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.domain}${cleanPath}`;
}
