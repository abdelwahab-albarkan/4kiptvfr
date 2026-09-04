import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Steps from "@/components/Steps";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { APP_LIST } from "@/lib/applications";

export const metadata = buildMetadata({
  title: "Meilleures applications IPTV : Smarters, TiviMate, VLC, Kodi",
  description:
    "Toutes les applications IPTV compatibles avec 4kiptvfr.com : IPTV Smarters, TiviMate, VLC, Kodi, GSE, OTT Navigator, XCIPTV. Guides d'installation et configuration.",
  path: "/applications",
  keywords: ["lecteur iptv", "lecteur pour iptv", "application iptv", "applications iptv", "meilleure application iptv", "logiciel iptv", "iptv smarters", "tivimate"],
});

export default function ApplicationsHubPage() {
  return (
    <>
      <PageHeader
        eyebrow="Applications IPTV"
        title={<>L'application idéale pour <span className="accent">chaque écran</span></>}
        lead="4kiptvfr.com fonctionne avec tous les grands lecteurs IPTV. Choisissez votre application, saisissez vos accès, et c'est parti."
        breadcrumb={[{ label: "Applications" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <SectionHeading eyebrow="Comparatif" title="Les lecteurs recommandés" />
        <div className="grid grid--3">
          {APP_LIST.map((a) => (
            <LinkCard
              key={a.slug}
              href={`/applications/${a.slug}`}
              kicker={a.free ? "Gratuit" : "Payant"}
              title={a.name}
              description={a.platforms}
              meta="Voir le guide"
            />
          ))}
        </div>
      </Section>

      <Section variant="soft">
        <SectionHeading eyebrow="Configuration" title="La même méthode partout" center lead="Quelle que soit l'application, vous ajoutez vos accès via API Xtream ou lien M3U." />
        <Steps />
      </Section>

      <CTA />
    </>
  );
}
