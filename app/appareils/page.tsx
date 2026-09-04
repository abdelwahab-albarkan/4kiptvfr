import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import DeviceGrid from "@/components/DeviceGrid";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { DEVICE_LIST } from "@/lib/devices";

export const metadata = buildMetadata({
  title: "Décodeur & boîtier IPTV : appareils compatibles et installation",
  description:
    "Quel décodeur ou boîtier IPTV choisir ? Installez 4kiptvfr.com sur Smart TV Samsung et LG, Android TV, Fire TV Stick, Apple TV, Xiaomi, Nvidia Shield, MAG et ordinateur. Guides d'installation pas à pas.",
  path: "/appareils",
  keywords: ["décodeur iptv", "boitier iptv", "boitier iptv 4k", "box iptv", "iptv smart tv", "iptv appareils", "installer iptv"],
});

export default function AppareilsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Appareils compatibles"
        title={<>L'IPTV sur <span className="accent">tous vos écrans</span></>}
        lead="Smart TV, box, consoles multimédia, mobiles et ordinateurs : choisissez votre appareil pour accéder au guide d'installation adapté, étape par étape."
        breadcrumb={[{ label: "Appareils" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Choisir son appareil" title="Guides d'installation par matériel" />
        <DeviceGrid items={DEVICE_LIST} />
      </Section>

      <Section variant="secondary" narrow>
        <div className="prose">
          <h2>Faut-il un décodeur ou un boîtier IPTV ?</h2>
          <p>
            Si votre téléviseur est déjà une Smart TV (Samsung, LG, Android&nbsp;TV), aucun boîtier n'est nécessaire : l'application
            s'installe directement. Sinon, un petit décodeur ou boîtier IPTV branché en HDMI — clé Fire&nbsp;TV, boîtier Android&nbsp;TV,
            Nvidia&nbsp;Shield ou Apple&nbsp;TV — transforme n'importe quel écran en plateforme IPTV, en 4K si votre téléviseur le permet.
          </p>
          <p>
            Pour comparer les options et choisir le boîtier adapté à votre budget, voyez notre{" "}
            <a className="link" href="/blog/choisir-boitier-iptv">guide pour choisir un boîtier IPTV</a> et le comparatif{" "}
            <a className="link" href="/blog/fire-tv-stick-ou-boitier-android">Fire TV Stick ou boîtier Android</a>.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
