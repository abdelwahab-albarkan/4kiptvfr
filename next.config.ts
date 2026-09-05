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
