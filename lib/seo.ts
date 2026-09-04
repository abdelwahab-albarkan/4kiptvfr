import type { Metadata } from "next";
import { SITE } from "./site";
import { getHreflangAlternates } from "./hreflang";

/**
 * Centralised metadata builder. Every page passes its SEO spec here so that
 * title/description/canonical/OG/Twitter/robots stay consistent site-wide.
 */
export function buildMetadata(spec: {
  title: string;
  description: string;
  path: string; // e.g. "/abonnement"
  keywords?: string[];
  noindex?: boolean;
  ogType?: "website" | "article";
  image?: string; // absolute-from-root, e.g. "/images/foo.jpg"
}): Metadata {
  const url = `${SITE.domain}${spec.path}`;
  // Social share image: the page-specific image (e.g. a blog hero), otherwise a
  // site default. encodeURI keeps any spaces/accents in filenames URL-safe.
  const ogImage = `${SITE.domain}${encodeURI(spec.image ?? "/images/home-hero.jpg")}`;
  return {
    title: spec.title,
    description: spec.description,
    keywords: spec.keywords,
    alternates: {
      canonical: spec.path,
      languages: getHreflangAlternates(spec.path),
    },
    robots: spec.noindex ? { index: false, follow: true } : undefined,
    openGraph: {
      type: spec.ogType ?? "website",
      title: `${spec.title} | ${SITE.name}`,
      description: spec.description,
      url,
      siteName: SITE.name,
      locale: "fr_FR",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${spec.title} | ${SITE.name}`,
      description: spec.description,
      images: [ogImage],
    },
  };
}

/* ---------------------------------------------------------------- JSON-LD */

export function organizationSchema() {
  const socialUrls = Object.entries(SITE.socialLinks || {})
    .filter(([platform, url]) => platform !== "whatsapp" && Boolean(url && url.trim()))
    .map(([, url]) => url.trim());

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.domain,
    email: SITE.supportEmail,
    ...(socialUrls.length > 0 ? { sameAs: socialUrls } : {}),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.domain,
    inLanguage: "fr-FR",
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${SITE.domain}${item.href}` } : {}),
    })),
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function articleSchema(post: { title: string; excerpt: string; date: string; path: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "fr-FR",
    mainEntityOfPage: `${SITE.domain}${post.path}`,
    publisher: { "@type": "Organization", name: SITE.name },
  };
}

/**
 * Product + AggregateOffer for the subscription. Prices are the real, visible
 * base plans (no aggregateRating — the site does not use fabricated reviews).
 */
export function subscriptionOffersSchema(plans: { name: string; price: number }[]) {
  const prices = plans.map((p) => p.price);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `Abonnement IPTV ${SITE.name}`,
    description:
      "Abonnement IPTV premium : 50 000+ chaînes en direct et 180 000+ films et séries en 4K, sur tous les appareils, sans engagement.",
    brand: { "@type": "Brand", name: SITE.name },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      lowPrice: Math.min(...prices).toFixed(2),
      highPrice: Math.max(...prices).toFixed(2),
      offerCount: plans.length,
      availability: "https://schema.org/InStock",
      url: `${SITE.domain}/abonnement`,
      offers: plans.map((p) => ({
        "@type": "Offer",
        name: `Abonnement ${p.name}`,
        price: p.price.toFixed(2),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: `${SITE.domain}/abonnement`,
      })),
    },
  };
}

export function howToSchema(name: string, steps: { title: string; description: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name,
    step: steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.description,
    })),
  };
}
