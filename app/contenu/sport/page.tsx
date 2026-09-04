import Link from "next/link";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import LinkCard from "@/components/LinkCard";
import CTA from "@/components/CTA";
import Icon, { type IconName } from "@/components/Icon";
import { buildMetadata } from "@/lib/seo";
import { PRIMARY_CTA, SECONDARY_CTA } from "@/lib/site";
import { SPORT_BY_TYPE } from "@/lib/sport";

export const metadata = buildMetadata({
  title: "IPTV Sport : football, F1, tennis, rugby en direct",
  description:
    "Suivez tout le sport en direct avec 4kiptvfr.com : Ligue 1, Champions League, Formule 1, Roland-Garros, Top 14, NBA. En 4K, sans coupure, sur tous vos appareils.",
  path: "/contenu/sport",
  keywords: ["iptv france sport", "iptv france football", "iptv france ligue 1", "iptv sport direct", "iptv champions league"],
});

// Disciplines with an icon; football is the broad static hub, the others are
// data-driven pages under /contenu/sport/[slug].
const DISCIPLINES: { title: string; description: string; icon: IconName; href: string }[] = [
  { icon: "football", href: "/contenu/sport/football", title: "Football", description: "Ligue 1, Champions League, Premier League, Liga et les grands championnats." },
  { icon: "f1", href: "/contenu/sport/formule-1", title: "Formule 1", description: "Tous les Grands Prix de la saison en direct, essais et qualifications." },
  { icon: "tennis", href: "/contenu/sport/tennis", title: "Tennis", description: "Roland-Garros, Wimbledon, US Open, Open d'Australie et le circuit ATP/WTA." },
  { icon: "rugby", href: "/contenu/sport/rugby", title: "Rugby", description: "Top 14, Champions Cup, Tournoi des Six Nations et Coupe du monde." },
  { icon: "basketball", href: "/contenu/sport/basketball", title: "Basket / NBA", description: "La NBA en direct, l'Euroligue et la Betclic Élite." },
  { icon: "combat", href: "/contenu/sport/boxe-mma", title: "Boxe & MMA", description: "UFC, grands combats de boxe et sports de combat en direct." },
];

const MORE_DISCIPLINES = ["cyclisme", "handball", "moto-gp"];

export default function SportPage() {
  const competitions = SPORT_BY_TYPE("competition");
  const channels = SPORT_BY_TYPE("chaine");
  const discipline = SPORT_BY_TYPE("discipline");

  return (
    <>
      <PageHeader
        eyebrow="Sport en direct"
        title={<>Tout le <span className="accent">sport</span> en direct et en 4K</>}
        lead="Ligue 1, Champions League, Formule 1, tennis, rugby, NBA : suivez les grandes compétitions sans coupure, y compris lors des pics d'audience."
        breadcrumb={[{ label: "Contenu", href: "/contenu" }, { label: "Sport" }]}
        primaryCta={PRIMARY_CTA}
        secondaryCta={SECONDARY_CTA}
      />

      <Section narrow>
        <div className="prose">
          <p>
            Le sport est l'usage le plus exigeant pour un service IPTV : c'est lors des grands matchs que la stabilité fait la
            différence. 4kiptvfr.com s'appuie sur un réseau de serveurs performant pour diffuser les compétitions en direct,
            en Full HD et en 4K, sans saccade.
          </p>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Disciplines" title="Choisissez votre sport" lead="Chaque discipline a sa page dédiée : diffuseurs, compétitions couvertes et conseils pour bien regarder." />
        <div className="grid grid--3">
          {DISCIPLINES.map((d) => (
            <Link key={d.title} href={d.href} className="card card--hover" style={{ display: "flex", flexDirection: "column" }}>
              <span className="icon-chip" aria-hidden="true"><Icon name={d.icon} size={22} /></span>
              <h3 style={{ marginTop: "var(--space-4)", fontSize: "1.15rem" }}>{d.title}</h3>
              <p style={{ marginTop: "var(--space-3)", fontSize: "0.95rem" }}>{d.description}</p>
              <span style={{ marginTop: "var(--space-4)", display: "inline-flex", alignItems: "center", gap: 6, color: "var(--accent)", fontWeight: 650, fontSize: "0.95rem" }}>
                En savoir plus <Icon name="arrow-right" size={17} />
              </span>
            </Link>
          ))}
        </div>
        <p style={{ marginTop: "var(--space-6)" }}>
          Également disponibles :{" "}
          {MORE_DISCIPLINES.map((slug, i) => {
            const d = discipline.find((x) => x.slug === slug);
            return d ? (
              <span key={slug}>
                <Link href={`/contenu/sport/${d.slug}`} className="link">{d.name}</Link>
                {i < MORE_DISCIPLINES.length - 1 ? ", " : "."}
              </span>
            ) : null;
          })}
        </p>
      </Section>

      <Section>
        <SectionHeading eyebrow="Compétitions" title="Regarder les grandes compétitions en direct" lead="Football, tennis, rugby, cyclisme, basket : comment suivre chaque grand rendez-vous." />
        <div className="grid grid--3">
          {competitions.map((c) => (
            <LinkCard key={c.slug} href={`/contenu/sport/${c.slug}`} kicker="Compétition" title={c.name} description={c.lead} meta="Comment regarder" />
          ))}
        </div>
      </Section>

      <Section variant="soft">
        <SectionHeading eyebrow="Chaînes de sport" title="Les chaînes qui diffusent le sport" lead="beIN Sports, Canal+ Sport, RMC Sport, DAZN, Eurosport : ce que chacune propose." />
        <div className="grid grid--3">
          {channels.map((c) => (
            <LinkCard key={c.slug} href={`/contenu/sport/${c.slug}`} kicker="Chaîne" title={c.name} description={c.lead} meta="Découvrir la chaîne" />
          ))}
        </div>
      </Section>

      <Section narrow>
        <div className="prose">
          <h2>Regarder le sport sans coupure</h2>
          <p>
            Pour profiter au mieux du direct, privilégiez une connexion filaire et un lecteur performant comme{" "}
            <Link href="/applications/tivimate" className="link">TiviMate</Link>. En cas de ralentissement, consultez nos
            conseils sur le <Link href="/problemes/buffering-coupure" className="link">buffering et la stabilité</Link>.
          </p>
        </div>
      </Section>

      <CTA />
    </>
  );
}
