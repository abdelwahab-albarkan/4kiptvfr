import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { SITE } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});


export const metadata: Metadata = {
  metadataBase: new URL(SITE.domain),
  title: {
    default: `${SITE.name} — Abonnement IPTV premium en France`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "4kiptvfr.com : abonnement IPTV premium avec 50 000+ chaînes en direct et 180 000+ films et séries en 4K. Compatible Smart TV, Fire TV, Android. Activation en 60 s, sans engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      className={geistSans.variable}
      suppressHydrationWarning
    >
      <body>
        {/* No-flash theme: apply the saved choice before first paint. Dark is
            the default, so with no saved value nothing changes. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme');if(t==='light'||t==='dark'){document.documentElement.setAttribute('data-theme',t);}}catch(e){}})();",
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
    </html>
  );
}
