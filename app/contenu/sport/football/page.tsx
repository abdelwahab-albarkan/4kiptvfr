import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";

export const metadata = buildMetadata({
  title: "IPTV Football : Ligue 1, Champions League en direct",
  description:
    "Regardez le football en direct avec 4kiptvfr.com : Ligue 1, Champions League, Premier League, Liga et les grands championnats européens, en Full HD et 4K.",
  path: "/contenu/sport/football",
  keywords: ["iptv france football", "iptv france ligue 1", "iptv champions league", "iptv football direct"],
});

// Each links to its dedicated "regarder … en direct" page.
const COMPETITIONS: { name: string; slug: string; desc: string }[] = [
  { name: "Ligue 1", slug: "ligue-1", desc: "Le championnat de France, toute la journée du vendredi au dimanche." },
  { name: "Ligue 2", slug: "ligue-2", desc: "La deuxième division française, disputée jusqu'au bout." },
  { name: "Champions League", slug: "champions-league", desc: "La C1 et ses soirées européennes à enjeu." },
  { name: "Ligue Europa", slug: "ligue-europa", desc: "La C3 et les clubs français engagés." },
  { name: "Premier League", slug: "premier-league", desc: "Le championnat anglais et son intensité." },
  { name: "Liga", slug: "liga", desc: "Le football espagnol et le Clásico." },
  { name: "Serie A", slug: "serie-a", desc: "Le Calcio et ses grands clubs italiens." },
  { name: "Bundesliga", slug: "bundesliga", desc: "Le championnat allemand et le Klassiker." },
  { name: "Coupe du monde", slug: "coupe-du-monde", desc: "L'événement planétaire et le parcours des Bleus." },
  { name: "Euro", slug: "euro", desc: "Le Championnat d'Europe des nations." },
  { name: "Coupe de France", slug: "coupe-de-france", desc: "La compétition des exploits jusqu'à la finale." },
  { name: "CAN", slug: "can", desc: "La Coupe d'Afrique des Nations, très suivie en France." },
];

export default function FootballPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sport · Football"
        title={<>Le <span className="accent">football</span> en direct, tous les championnats</>}
        lead="De la Ligue 1 à la Champions League, suivez tous les grands matchs en direct et en haute définition, sans coupure lors des soirées européennes."
        breadcrumb={[{ label: "Contenu", href: "/contenu" }, { label: "Sport", href: "/contenu/sport" }, { label: "Football" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            Le football est le contenu le plus regardé en IPTV, et le plus exigeant en stabilité : un soir de Champions League,
            des milliers de spectateurs se connectent simultanément. 4kiptvfr.com dimensionne son réseau pour absorber ces
            pics et diffuser les matchs sans saccade.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Compétitions" title="Regarder chaque compétition en direct" lead="Cliquez sur une compétition pour savoir où et comment la suivre." />
        <div className="grid grid--3">
          {COMPETITIONS.map((c) => (
            <LinkCard key={c.slug} href={`/contenu/sport/${c.slug}`} kicker="Compétition" title={c.name} description={c.desc} meta="Comment regarder" />
          ))}
        </div>
      </Section>

      <Section narrow>
        <div className="prose">
          <h2>Conseils pour les grands soirs</h2>
          <p>
            Pour ne rien manquer d'un match important, connectez votre téléviseur en Ethernet, fermez les autres flux vidéo de
            la maison et privilégiez un lecteur réactif comme <Link href="/applications/tivimate" className="link">TiviMate</Link>{" "}
            ou <Link href="/applications/smarters" className="link">IPTV Smarters</Link>. Retrouvez tout le{" "}
            <Link href="/contenu/sport" className="link">sport en direct</Link> et nos autres disciplines.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
