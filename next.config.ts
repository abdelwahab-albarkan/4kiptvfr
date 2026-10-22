import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "image.tmdb.org", pathname: "/t/p/**" },
    ],
  },
  async redirects() {
    return [
      // Canonical host: force the apex https://4kiptvfr.com. The www subdomain
      // and the Vercel preview host redirect to the apex so there is a single
      // canonical URL and 4kiptvfr.vercel.app is never treated as canonical.
      // (host `value` is anchored, so the apex 4kiptvfr.com does not match
      // these rules — no redirect loop.)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.4kiptvfr.com" }],
        destination: "https://4kiptvfr.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "4kiptvfr.vercel.app" }],
        destination: "https://4kiptvfr.com/:path*",
        permanent: true,
      },
      // /technique/* renamed to /formats/*
      { source: "/technique", destination: "/formats", permanent: true },
      { source: "/technique/:path*", destination: "/formats/:path*", permanent: true },
      // legacy /fr/* URLs from initial deployment to preserve Google rankings & pass authority
      { source: "/fr", destination: "/", permanent: true },
      { source: "/fr/iptv-france", destination: "/", permanent: true },
      { source: "/fr/abonnement-iptv", destination: "/abonnement", permanent: true },
      { source: "/fr/smart-tv", destination: "/appareils", permanent: true },
      { source: "/fr/android-tv", destination: "/appareils/android-tv", permanent: true },
      { source: "/fr/fire-tv", destination: "/appareils/firestick", permanent: true },
      { source: "/fr/samsung-tv", destination: "/appareils/samsung", permanent: true },
      { source: "/fr/lg-tv", destination: "/appareils/lg", permanent: true },
      { source: "/fr/iptv-apps", destination: "/applications", permanent: true },
      { source: "/fr/iptv-players", destination: "/applications", permanent: true },
      { source: "/fr/faq", destination: "/faq", permanent: true },
      { source: "/fr/contact", destination: "/contact", permanent: true },
      { source: "/fr/a-propos", destination: "/a-propos", permanent: true },
      { source: "/fr/blog", destination: "/blog", permanent: true },
      { source: "/fr/blog/:slug*", destination: "/blog/:slug*", permanent: true },
      { source: "/fr/mentions-legales", destination: "/mentions-legales", permanent: true },
      { source: "/fr/conditions-utilisation", destination: "/conditions-utilisation", permanent: true },
      { source: "/fr/politique-confidentialite", destination: "/politique-confidentialite", permanent: true },
      { source: "/fr/:path*", destination: "/:path*", permanent: true },
      // device slug changes
      { source: "/appareils/windows-mac", destination: "/appareils/windows", permanent: true },
      { source: "/appareils/mag-box", destination: "/appareils/mag", permanent: true },
      // comparatif slug changes
      { source: "/comparatifs/vs-freebox", destination: "/comparatifs/vs-freebox-tv", permanent: true },
      { source: "/comparatifs/vs-tnt", destination: "/comparatifs/vs-dtt", permanent: true },
      // offer slug changes
      { source: "/abonnement/mensuel", destination: "/abonnement", permanent: true },
    ];
  },
};

export default nextConfig;
