import Link from "next/link";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "EPG IPTV : configurer le guide des programmes",
  description:
    "Le guide des programmes (EPG) en IPTV : à quoi il sert, comment il fonctionne (XMLTV) et comment corriger un décalage horaire dans votre lecteur.",
  path: "/formats/epg",
  keywords: ["iptv epg", "guide des programmes iptv", "xmltv", "configurer epg iptv"],
});

export default function EpgPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technique · EPG"
        title={<>Le <span className="accent">guide des programmes</span> (EPG)</>}
        lead="L'EPG affiche le programme en cours et à venir sur chaque chaîne. C'est lui qui donne à l'IPTV son confort de box classique."
        breadcrumb={[{ label: "Technique", href: "/formats" }, { label: "EPG" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />
      <Section narrow>
        <div className="prose">
          <p>
            EPG signifie « Electronic Program Guide » — le guide électronique des programmes. Il indique, pour chaque chaîne, ce
            qui est diffusé maintenant et ce qui suit, comme sur une télécommande de box.
          </p>
          <h2>Comment fonctionne l'EPG ?</h2>
          <p>
            Les données proviennent d'un fichier au format XMLTV. Avec l'
            <Link href="/formats/xtream-codes" className="link">API Xtream</Link>, l'EPG se charge automatiquement ; en{" "}
            <Link href="/formats/m3u" className="link">M3U</Link>, il faut parfois renseigner l'URL du guide séparément.
          </p>
          <h2>Corriger un décalage horaire</h2>
          <p>
            Si les programmes affichés sont décalés d'une ou plusieurs heures, ajustez le paramètre de décalage EPG dans votre
            lecteur pour le faire correspondre au fuseau horaire français. Sur{" "}
            <Link href="/applications/tivimate" className="link">TiviMate</Link>, ce réglage se trouve dans les options de la playlist.
          </p>
        </div>
      </Section>
      <CTA />
    </>
  );
}
