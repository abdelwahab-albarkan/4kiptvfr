import { SITE } from "./site";

/**
 * Hreflang utilities for SEO alternates.
 * 4kiptvfr.com serves French content targeting France and francophone audiences.
 */

export function getHreflangAlternates(path: string): Record<string, string> {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const fullUrl = `${SITE.domain}${cleanPath}`;

  return {
    "fr-FR": fullUrl,
    "fr": fullUrl,
    "x-default": fullUrl,
  };
}
