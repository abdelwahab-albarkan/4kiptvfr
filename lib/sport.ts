/**
 * Content for the /contenu/sport/[slug] cluster — disciplines, competitions and
 * "où regarder" channel pages. Every entry is written to answer a real
 * "comment / où regarder … en direct" intent with concrete, differentiated
 * information (broadcasters in France, what the competition covers, practical
 * viewing tips). No fabricated stats. Broadcaster mentions are phrased as
 * "diffuseurs habituels" because French rights change from one season to the
 * next — the evergreen value is how to follow it via IPTV.
 *
 * Note: /contenu/sport/football is a separate static page (broad hub for the
 * discipline); it is intentionally NOT included here to avoid a route clash.
 */

export type SportType = "discipline" | "competition" | "chaine";

export type SportEntry = {
  slug: string;
  type: SportType;
  name: string;
  eyebrow: string;
  order: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  lead: string;
  intro: string[];
  /** Who broadcasts it in France (chips). */
  broadcasters?: string[];
  /** What the page covers — competitions, rounds or key facts (list). */
  covers?: string[];
  /** Compact fact table. */
  facts?: { label: string; value: string }[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

const TYPE_EYEBROW: Record<SportType, string> = {
  discipline: "Sport · Discipline",
  competition: "Sport · Compétition",
  chaine: "Sport · Chaîne",
};

export const SPORT: Record<string, SportEntry> = {
  /* ------------------------------------------------------------------ DISCIPLINES */
  rugby: {
    slug: "rugby",
    type: "discipline",
    name: "Rugby",
    eyebrow: TYPE_EYEBROW.discipline,
    order: 10,
    metaTitle: "Regarder le rugby en direct : Top 14, XV de France, Coupe du monde",
    metaDescription:
      "Comment regarder le rugby en direct en IPTV : Top 14, Champions Cup, Tournoi des Six Nations, XV de France et Coupe du monde, en Full HD et 4K sans coupure.",
    keywords: ["iptv rugby", "regarder rugby direct", "iptv top 14", "rugby streaming", "regarder xv de france"],
    h1: "Regarder le rugby en direct",
    lead: "Du Top 14 au Tournoi des Six Nations, suivez tout le rugby français et international en direct, dans une qualité stable même lors des grosses affiches.",
    intro: [
      "Le rugby est l'un des sports les plus suivis en France, avec un calendrier riche qui s'étale de septembre à juin entre championnat national, coupes d'Europe et fenêtres internationales. L'accès aux matchs est réparti entre plusieurs diffuseurs, ce qui oblige souvent à cumuler les abonnements.",
      "Un service IPTV réunit ces sources au même endroit : vous passez du Top 14 au Six Nations sans changer d'application, en Full HD ou en 4K quand la captation le permet. Pour les grands chocs, une connexion filaire et un lecteur réactif suffisent à garantir un direct fluide.",
    ],
    broadcasters: ["Canal+ (Top 14, Champions Cup)", "France Télévisions (Six Nations, tournées)", "beIN Sports (compétitions internationales)"],
    covers: ["Top 14", "Pro D2", "Champions Cup & Challenge Cup", "Tournoi des Six Nations", "Tournées d'automne", "Coupe du monde de rugby", "XV de France"],
    facts: [
      { label: "Saison", value: "Septembre à juin (+ fenêtres internationales)" },
      { label: "Diffuseurs habituels", value: "Canal+, France TV, beIN Sports" },
      { label: "Qualité", value: "Full HD, 4K sur les grandes affiches" },
      { label: "Idéal sur", value: "Smart TV, Apple TV, Fire TV Stick" },
    ],
    faq: [
      { q: "Où regarder le Top 14 en direct ?", a: "Le Top 14 est historiquement diffusé par Canal+. Via un service IPTV, vous retrouvez les affiches de la journée au même endroit que les autres compétitions de rugby." },
      { q: "Le Tournoi des Six Nations est-il inclus ?", a: "Le Tournoi des Six Nations est traditionnellement diffusé en clair par France Télévisions. Nos bouquets donnent accès aux chaînes qui le retransmettent." },
      { q: "Peut-on suivre la Coupe du monde de rugby ?", a: "Oui, les grandes compétitions internationales de rugby sont couvertes par les chaînes incluses, en direct et en haute définition." },
    ],
    related: [
      { label: "Top 14", href: "/contenu/sport/top-14" },
      { label: "Tournoi des Six Nations", href: "/contenu/sport/six-nations" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
    ],
  },
  tennis: {
    slug: "tennis",
    type: "discipline",
    name: "Tennis",
    eyebrow: TYPE_EYEBROW.discipline,
    order: 11,
    metaTitle: "Regarder le tennis en direct : Roland-Garros, ATP, WTA, Grands Chelems",
    metaDescription:
      "Regardez le tennis en direct en IPTV : Roland-Garros, Wimbledon, US Open, Open d'Australie et le circuit ATP/WTA, sans coupure et en haute définition.",
    keywords: ["iptv tennis", "regarder tennis direct", "iptv roland garros", "tennis streaming", "regarder atp wta"],
    h1: "Regarder le tennis en direct",
    lead: "Les quatre Grands Chelems, les Masters 1000 et le circuit ATP/WTA : suivez le tennis toute l'année, du premier tour à la finale.",
    intro: [
      "Le tennis se joue quasiment toute l'année, sur plusieurs continents et fuseaux horaires. Les droits sont partagés entre chaînes en clair, chaînes payantes et plateformes, ce qui complique l'accès à un tournoi précis quand on ne sait pas qui le diffuse.",
      "Avec l'IPTV, vous retrouvez les chaînes qui couvrent le tennis au même endroit, y compris pour les sessions de nuit et les tournois moins médiatisés. Pratique pour suivre un joueur français sur un court annexe comme pour ne rien manquer d'une finale de Grand Chelem.",
    ],
    broadcasters: ["France Télévisions & Amazon Prime (Roland-Garros)", "beIN Sports (ATP/WTA, Grands Chelems)", "Eurosport (Australie, tournois)"],
    covers: ["Roland-Garros", "Wimbledon", "US Open", "Open d'Australie", "Masters 1000 & 500", "ATP Finals", "Circuit WTA", "Coupe Davis & Billie Jean King Cup"],
    facts: [
      { label: "Saison", value: "Janvier à novembre" },
      { label: "Diffuseurs habituels", value: "France TV, Amazon, beIN Sports, Eurosport" },
      { label: "Sessions de nuit", value: "Souvent tard — direct + rediffusions" },
      { label: "Qualité", value: "Full HD, 4K sur certains courts" },
    ],
    faq: [
      { q: "Où regarder Roland-Garros ?", a: "Roland-Garros est diffusé en clair par France Télévisions, avec certaines sessions de nuit sur Amazon Prime Video. Les chaînes concernées sont accessibles via nos bouquets." },
      { q: "Peut-on suivre les tournois ATP et WTA ?", a: "Oui, le circuit ATP/WTA et les Masters 1000 sont majoritairement couverts par beIN Sports, inclus dans l'offre." },
      { q: "Comment regarder une session de nuit à l'étranger ?", a: "Les tournois hors Europe (Open d'Australie, US Open) se jouent la nuit en France : le direct est disponible, et vous pouvez revoir les matchs en rediffusion." },
    ],
    related: [
      { label: "Roland-Garros", href: "/contenu/sport/roland-garros" },
      { label: "Chaîne Eurosport", href: "/contenu/sport/eurosport" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
    ],
  },
  basketball: {
    slug: "basketball",
    type: "discipline",
    name: "Basket-ball",
    eyebrow: TYPE_EYEBROW.discipline,
    order: 12,
    metaTitle: "Regarder le basket en direct : NBA, Euroligue, Betclic Élite",
    metaDescription:
      "Regardez le basket en direct en IPTV : NBA, Euroligue, Betclic Élite et EuroBasket. Matchs de nuit en direct ou en rediffusion, en Full HD et 4K.",
    keywords: ["iptv basket", "regarder nba direct", "iptv nba", "basket streaming", "regarder euroligue"],
    h1: "Regarder le basket en direct",
    lead: "De la NBA à la Betclic Élite en passant par l'Euroligue, suivez le meilleur du basket, y compris les matchs américains diffusés en pleine nuit.",
    intro: [
      "Le basket combine des compétitions européennes en soirée et des matchs NBA qui se jouent la nuit, heure française. Suivre à la fois la scène américaine et les clubs européens demande souvent plusieurs abonnements.",
      "Un service IPTV réunit ces sources et permet de basculer d'un match d'Euroligue à une rencontre NBA sans effort. Les rediffusions sont précieuses pour rattraper au réveil un match joué à 3 h du matin.",
    ],
    broadcasters: ["beIN Sports (NBA, Euroligue)", "Skweek / chaînes dédiées (Betclic Élite)", "L'Équipe (certaines affiches)"],
    covers: ["NBA (saison régulière + Playoffs)", "Euroligue & EuroCup", "Betclic Élite (championnat de France)", "EuroBasket & Coupe du monde", "NCAA (sélection)"],
    facts: [
      { label: "NBA", value: "Matchs de nuit (direct + replay)" },
      { label: "Diffuseurs habituels", value: "beIN Sports, chaînes dédiées" },
      { label: "Saison NBA", value: "Octobre à juin" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Où regarder la NBA en France ?", a: "La NBA est diffusée en France par beIN Sports, en complément du League Pass officiel. Les matchs de nuit sont disponibles en direct et en rediffusion via nos bouquets." },
      { q: "Peut-on suivre le championnat de France ?", a: "Oui, la Betclic Élite et les compétitions européennes de clubs sont couvertes par les chaînes incluses." },
      { q: "Comment rattraper un match NBA joué la nuit ?", a: "Les rencontres jouées en pleine nuit sont proposées en rediffusion, ce qui permet de les regarder au réveil sans spoiler." },
    ],
    related: [
      { label: "NBA", href: "/contenu/sport/nba" },
      { label: "Chaîne beIN Sports", href: "/contenu/sport/bein-sports" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
    ],
  },
  "formule-1": {
    slug: "formule-1",
    type: "discipline",
    name: "Formule 1",
    eyebrow: TYPE_EYEBROW.discipline,
    order: 13,
    metaTitle: "Regarder la Formule 1 en direct : tous les Grands Prix de la saison",
    metaDescription:
      "Regardez la Formule 1 en direct en IPTV : essais libres, qualifications, sprints et Grands Prix de toute la saison, en Full HD et 4K sans coupure.",
    keywords: ["iptv formule 1", "regarder f1 direct", "iptv f1", "formule 1 streaming", "regarder grand prix f1"],
    h1: "Regarder la Formule 1 en direct",
    lead: "Essais, qualifications, sprints et courses : suivez chaque Grand Prix de la saison de Formule 1 en direct, quel que soit le fuseau horaire.",
    intro: [
      "La Formule 1 propose un week-end complet à chaque Grand Prix — essais libres, qualifications, parfois une course sprint, puis la course. Les circuits s'étalent sur toute la planète, avec des séances qui tombent aux heures les plus variées.",
      "Via l'IPTV, vous accédez aux chaînes qui diffusent l'intégralité du week-end, avec un direct stable en Full HD ou 4K et la possibilité de revoir la course. Idéal pour ne pas manquer une qualification décisive un samedi matin.",
    ],
    broadcasters: ["Canal+ (intégralité de la saison)", "Chaînes internationales (F1 en VO)"],
    covers: ["Essais libres 1, 2 et 3", "Qualifications", "Courses sprint", "Grands Prix", "F2 & F3", "Analyses et magazines"],
    facts: [
      { label: "Saison", value: "Mars à décembre (~24 Grands Prix)" },
      { label: "Diffuseur habituel", value: "Canal+ (intégralité)" },
      { label: "Format week-end", value: "Essais, qualifs, sprint, course" },
      { label: "Qualité", value: "Full HD, 4K sur certains GP" },
    ],
    faq: [
      { q: "Où regarder la F1 en direct en France ?", a: "La Formule 1 est diffusée dans son intégralité par Canal+. Les chaînes correspondantes sont accessibles via nos bouquets, essais et qualifications compris." },
      { q: "Les essais et qualifications sont-ils inclus ?", a: "Oui, tout le week-end de Grand Prix est couvert : essais libres, qualifications, éventuelle course sprint et la course du dimanche." },
      { q: "Peut-on suivre un GP disputé à l'autre bout du monde ?", a: "Oui. Les Grands Prix en Asie ou en Océanie se courent tôt le matin en France : le direct est disponible, avec rediffusion possible ensuite." },
    ],
    related: [
      { label: "Chaîne Canal+ Sport", href: "/contenu/sport/canal-plus-sport" },
      { label: "Moto GP", href: "/contenu/sport/moto-gp" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
    ],
  },
  "boxe-mma": {
    slug: "boxe-mma",
    type: "discipline",
    name: "Boxe & MMA",
    eyebrow: TYPE_EYEBROW.discipline,
    order: 14,
    metaTitle: "Regarder la boxe et le MMA en direct : UFC, championnats et galas",
    metaDescription:
      "Regardez la boxe et le MMA en direct en IPTV : UFC, grands combats de boxe, galas et championnats. Événements en direct, souvent de nuit, en haute définition.",
    keywords: ["iptv boxe", "iptv mma", "regarder ufc direct", "regarder boxe streaming", "mma streaming"],
    h1: "Regarder la boxe et le MMA en direct",
    lead: "Des grands combats de boxe aux soirées UFC, suivez les sports de combat en direct — y compris les cartes américaines qui se disputent au milieu de la nuit.",
    intro: [
      "Les sports de combat vivent au rythme des grands événements : un championnat du monde de boxe ou une soirée UFC se prépare des semaines à l'avance et se regarde souvent en direct, tard dans la nuit heure française.",
      "L'IPTV réunit les chaînes qui diffusent ces galas et permet de suivre le combat principal comme les préliminaires, avec un direct stable et des rediffusions pour revoir un KO au réveil.",
    ],
    broadcasters: ["RMC Sport (UFC, boxe)", "Canal+ (certains galas)", "Chaînes internationales (cartes en VO)"],
    covers: ["UFC (soirées et Fight Nights)", "Grands combats de boxe", "Championnats du monde", "Galas français", "Kick-boxing & disciplines associées"],
    facts: [
      { label: "Format", value: "Événements ponctuels, souvent de nuit" },
      { label: "Diffuseurs habituels", value: "RMC Sport, Canal+, chaînes dédiées" },
      { label: "Direct & replay", value: "Combat principal + préliminaires" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Où regarder l'UFC en France ?", a: "L'UFC est historiquement diffusée par RMC Sport. Les chaînes qui retransmettent les soirées sont accessibles via nos bouquets, en direct et en rediffusion." },
      { q: "Comment suivre un combat de boxe américain de nuit ?", a: "Les grandes soirées américaines se disputent au milieu de la nuit : le direct est disponible, et une rediffusion permet de revoir le combat le lendemain." },
      { q: "Les préliminaires sont-ils accessibles ?", a: "Oui, quand elles sont diffusées, les cartes préliminaires précèdent le combat principal et sont incluses avec la chaîne qui retransmet l'événement." },
    ],
    related: [
      { label: "Chaîne RMC Sport", href: "/contenu/sport/rmc-sport" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
      { label: "Chaînes de sport", href: "/contenu/chaines" },
    ],
  },
  cyclisme: {
    slug: "cyclisme",
    type: "discipline",
    name: "Cyclisme",
    eyebrow: TYPE_EYEBROW.discipline,
    order: 15,
    metaTitle: "Regarder le cyclisme en direct : Tour de France, Giro, Vuelta, classiques",
    metaDescription:
      "Regardez le cyclisme en direct en IPTV : Tour de France, Giro, Vuelta, Paris-Roubaix et les grandes classiques, étape par étape en haute définition.",
    keywords: ["iptv cyclisme", "regarder tour de france direct", "cyclisme streaming", "iptv tour de france", "regarder velo direct"],
    h1: "Regarder le cyclisme en direct",
    lead: "Grands Tours et classiques : suivez le Tour de France, le Giro, la Vuelta et les monuments du calendrier, de la première échappée à l'arrivée.",
    intro: [
      "Le cyclisme sur route enchaîne les Grands Tours de trois semaines et les classiques d'un jour, avec des étapes souvent diffusées intégralement sur plusieurs heures. En France, la couverture se partage entre chaîne en clair et chaîne spécialisée.",
      "Un service IPTV réunit ces diffuseurs et permet de suivre une étape en intégralité comme de retrouver le final au sprint. Utile pour ne pas jongler entre plusieurs applications au fil de la saison.",
    ],
    broadcasters: ["France Télévisions (Tour de France, classiques)", "Eurosport (Grands Tours, calendrier complet)"],
    covers: ["Tour de France", "Giro d'Italia", "Vuelta a España", "Paris-Roubaix & monuments", "Championnats du monde", "Cyclo-cross"],
    facts: [
      { label: "Grands Tours", value: "Étapes diffusées en intégralité" },
      { label: "Diffuseurs habituels", value: "France TV, Eurosport" },
      { label: "Saison", value: "Janvier à octobre" },
      { label: "Qualité", value: "Full HD, 4K sur certaines étapes" },
    ],
    faq: [
      { q: "Où regarder le Tour de France en direct ?", a: "Le Tour de France est diffusé en clair par France Télévisions et intégralement sur Eurosport. Les deux sont accessibles via nos bouquets." },
      { q: "Peut-on suivre le Giro et la Vuelta ?", a: "Oui, les trois Grands Tours et les grandes classiques sont couverts, généralement via Eurosport, inclus dans l'offre." },
      { q: "Les étapes sont-elles diffusées en entier ?", a: "Oui, les étapes des Grands Tours sont retransmises en intégralité, souvent sur plusieurs heures, avec le final en direct." },
    ],
    related: [
      { label: "Tour de France", href: "/contenu/sport/tour-de-france" },
      { label: "Chaîne Eurosport", href: "/contenu/sport/eurosport" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
    ],
  },
  handball: {
    slug: "handball",
    type: "discipline",
    name: "Handball",
    eyebrow: TYPE_EYEBROW.discipline,
    order: 16,
    metaTitle: "Regarder le handball en direct : Liqui Moly Starligue, Ligue des champions",
    metaDescription:
      "Regardez le handball en direct en IPTV : championnat de France, Ligue des champions et grands tournois de l'équipe de France, en Full HD sans coupure.",
    keywords: ["iptv handball", "regarder handball direct", "handball streaming", "iptv starligue", "regarder equipe de france handball"],
    h1: "Regarder le handball en direct",
    lead: "Championnat de France, Ligue des champions et grands rendez-vous des Bleus : suivez le handball, l'un des sports où la France brille au plus haut niveau.",
    intro: [
      "Le handball français est une référence mondiale, et l'intérêt monte encore lors des championnats d'Europe et du monde. Entre championnat national, coupe d'Europe et fenêtres internationales, l'offre est répartie sur plusieurs chaînes.",
      "L'IPTV réunit ces diffuseurs au même endroit, du match de Starligue au quart de finale d'un grand tournoi. Une connexion filaire suffit pour un direct fluide lors des soirées d'équipe de France.",
    ],
    broadcasters: ["beIN Sports (Ligue des champions, tournois)", "L'Équipe & chaînes dédiées (Starligue)", "TF1 / chaînes en clair (grands matchs des Bleus)"],
    covers: ["Liqui Moly Starligue", "Ligue des champions (EHF)", "Championnat d'Europe & du monde", "Équipe de France (H/F)", "Jeux Olympiques"],
    facts: [
      { label: "Saison", value: "Septembre à juin (+ tournois internationaux)" },
      { label: "Diffuseurs habituels", value: "beIN Sports, L'Équipe, chaînes en clair" },
      { label: "Équipe de France", value: "Grands matchs souvent en clair" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Où regarder l'équipe de France de handball ?", a: "Les grands matchs des Bleus sont souvent diffusés en clair (TF1, chaînes gratuites) ; les autres rencontres passent sur des chaînes spécialisées incluses dans l'offre." },
      { q: "Le championnat de France est-il couvert ?", a: "Oui, la Starligue est diffusée par des chaînes dédiées accessibles via nos bouquets, avec les affiches de chaque journée." },
      { q: "Peut-on suivre la Ligue des champions de hand ?", a: "Oui, la Ligue des champions européenne est généralement diffusée par beIN Sports, inclus dans l'offre." },
    ],
    related: [
      { label: "Chaîne beIN Sports", href: "/contenu/sport/bein-sports" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
    ],
  },
  "moto-gp": {
    slug: "moto-gp",
    type: "discipline",
    name: "MotoGP",
    eyebrow: TYPE_EYEBROW.discipline,
    order: 17,
    metaTitle: "Regarder le MotoGP en direct : Grands Prix, qualifications et courses sprint",
    metaDescription:
      "Regardez le MotoGP en direct en IPTV : essais, qualifications, sprints et courses de toute la saison, plus Moto2 et Moto3, en haute définition sans coupure.",
    keywords: ["iptv moto gp", "regarder motogp direct", "motogp streaming", "iptv moto", "regarder grand prix moto"],
    h1: "Regarder le MotoGP en direct",
    lead: "Essais, qualifications, sprints et courses : suivez chaque Grand Prix moto de la saison, ainsi que les catégories Moto2 et Moto3.",
    intro: [
      "Le MotoGP propose, comme la F1, un week-end complet à chaque Grand Prix, avec depuis peu une course sprint le samedi. Le championnat voyage aux quatre coins du monde, avec des horaires très variables selon le circuit.",
      "Via l'IPTV, vous suivez l'intégralité du week-end sur les chaînes qui diffusent le championnat, en direct et en rediffusion, avec les catégories Moto2 et Moto3 en complément.",
    ],
    broadcasters: ["Canal+ (intégralité MotoGP)", "Chaînes internationales (VO)"],
    covers: ["Essais et qualifications", "Courses sprint", "Grands Prix MotoGP", "Moto2 & Moto3", "Magazines et analyses"],
    facts: [
      { label: "Saison", value: "Mars à novembre" },
      { label: "Diffuseur habituel", value: "Canal+" },
      { label: "Catégories", value: "MotoGP, Moto2, Moto3" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Où regarder le MotoGP en France ?", a: "Le MotoGP est diffusé dans son intégralité par Canal+. Les chaînes correspondantes sont accessibles via nos bouquets, essais et qualifications inclus." },
      { q: "Les catégories Moto2 et Moto3 sont-elles incluses ?", a: "Oui, l'ensemble du week-end de Grand Prix est couvert, MotoGP comme Moto2 et Moto3." },
      { q: "Comment suivre un GP disputé en Asie ?", a: "Les Grands Prix asiatiques se courent tôt le matin en France : le direct est disponible, avec rediffusion ensuite." },
    ],
    related: [
      { label: "Formule 1", href: "/contenu/sport/formule-1" },
      { label: "Chaîne Canal+ Sport", href: "/contenu/sport/canal-plus-sport" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
    ],
  },

  /* ------------------------------------------------------------------ COMPETITIONS */
  "ligue-1": {
    slug: "ligue-1",
    type: "competition",
    name: "Ligue 1",
    eyebrow: TYPE_EYEBROW.competition,
    order: 30,
    metaTitle: "Regarder la Ligue 1 en direct : tous les matchs en streaming",
    metaDescription:
      "Comment regarder la Ligue 1 en direct : diffuseurs, horaires et astuces pour suivre tous les matchs du championnat de France de football en Full HD et 4K.",
    keywords: ["regarder ligue 1 direct", "iptv ligue 1", "ligue 1 streaming", "voir ligue 1", "match ligue 1 direct"],
    h1: "Regarder la Ligue 1 en direct",
    lead: "Le championnat de France, journée après journée : suivez tous les matchs de Ligue 1 en direct, du multiplex du dimanche aux affiches du soir.",
    intro: [
      "La Ligue 1 est le championnat le plus suivi en France, avec dix matchs par journée répartis du vendredi au dimanche. Les droits de diffusion ont changé plusieurs fois ces dernières saisons, si bien qu'il faut souvent plusieurs abonnements pour tout voir.",
      "Un service IPTV réunit les chaînes qui diffusent la Ligue 1 et permet de passer d'un match à l'autre sans changer d'application. Pour les affiches du dimanche soir, une connexion filaire garantit un direct fluide même en cas de forte affluence.",
    ],
    broadcasters: ["DAZN & beIN Sports (diffuseurs récents)", "Canal+ (certaines affiches selon les saisons)"],
    covers: ["Tous les matchs de la journée", "Multiplex", "Affiche du dimanche soir", "Résumés et magazines", "Classement et statistiques"],
    facts: [
      { label: "Format", value: "18 clubs, 34 journées" },
      { label: "Diffuseurs récents", value: "DAZN, beIN Sports" },
      { label: "Créneaux", value: "Vendredi soir au dimanche soir" },
      { label: "Qualité", value: "Full HD, 4K sur les grandes affiches" },
    ],
    faq: [
      { q: "Qui diffuse la Ligue 1 cette saison ?", a: "La diffusion de la Ligue 1 se partage selon les saisons entre DAZN et beIN Sports, Canal+ récupérant parfois certaines affiches. Nos bouquets réunissent les chaînes concernées au même endroit." },
      { q: "Peut-on voir tous les matchs d'une journée ?", a: "Oui, l'ensemble des rencontres de la journée est accessible, y compris via le multiplex qui bascule d'un match à l'autre." },
      { q: "La Ligue 1 est-elle disponible en 4K ?", a: "Les grandes affiches sont proposées en Full HD, et en 4K lorsque la captation le permet." },
    ],
    related: [
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
      { label: "Ligue 2", href: "/contenu/sport/ligue-2" },
      { label: "Coupe de France", href: "/contenu/sport/coupe-de-france" },
    ],
  },
  "ligue-2": {
    slug: "ligue-2",
    type: "competition",
    name: "Ligue 2",
    eyebrow: TYPE_EYEBROW.competition,
    order: 31,
    metaTitle: "Regarder la Ligue 2 en direct : tous les matchs du championnat",
    metaDescription:
      "Comment regarder la Ligue 2 BKT en direct : diffuseurs et astuces pour suivre les matchs de la deuxième division française de football en haute définition.",
    keywords: ["regarder ligue 2 direct", "iptv ligue 2", "ligue 2 streaming", "voir ligue 2 bkt", "match ligue 2 direct"],
    h1: "Regarder la Ligue 2 en direct",
    lead: "La deuxième division française, souvent imprévisible et disputée jusqu'au bout : suivez la Ligue 2 BKT match après match.",
    intro: [
      "La Ligue 2 offre un championnat serré où la lutte pour la montée et le maintien tient en haleine jusqu'à la dernière journée. Sa diffusion est plus discrète que celle de l'élite, ce qui rend l'accès aux matchs moins évident.",
      "Un service IPTV rassemble les chaînes qui retransmettent la Ligue 2, du multiplex aux affiches en direct, pour suivre son club sans chercher chaque week-end qui diffuse quoi.",
    ],
    broadcasters: ["beIN Sports (diffuseur habituel)", "Chaînes dédiées selon les saisons"],
    covers: ["Matchs de la journée", "Multiplex de Ligue 2", "Play-offs d'accession", "Résumés et classement"],
    facts: [
      { label: "Format", value: "18 clubs, 34 journées" },
      { label: "Diffuseur habituel", value: "beIN Sports" },
      { label: "Enjeux", value: "Montée en Ligue 1, maintien" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Qui diffuse la Ligue 2 ?", a: "La Ligue 2 BKT est généralement diffusée par beIN Sports. Les chaînes concernées sont accessibles via nos bouquets." },
      { q: "Peut-on suivre son club en particulier ?", a: "Oui, le multiplex et les matchs diffusés permettent de suivre chaque club au fil de la saison." },
    ],
    related: [
      { label: "Ligue 1", href: "/contenu/sport/ligue-1" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
      { label: "Chaîne beIN Sports", href: "/contenu/sport/bein-sports" },
    ],
  },
  "champions-league": {
    slug: "champions-league",
    type: "competition",
    name: "Champions League",
    eyebrow: TYPE_EYEBROW.competition,
    order: 32,
    metaTitle: "Regarder la Champions League en direct : tous les matchs de la C1",
    metaDescription:
      "Comment regarder la Ligue des champions (Champions League) en direct : diffuseurs, soirées européennes et astuces pour ne rien manquer, en Full HD et 4K.",
    keywords: ["regarder champions league direct", "iptv champions league", "ligue des champions streaming", "voir la c1", "match champions league direct"],
    h1: "Regarder la Champions League en direct",
    lead: "Les plus grands clubs d'Europe, les soirées à enjeu et les chocs à élimination directe : suivez toute la Ligue des champions en direct.",
    intro: [
      "La Ligue des champions est le sommet du football de clubs, avec des soirées où plusieurs matchs se jouent en même temps. C'est aussi le moment où les serveurs de streaming sont les plus sollicités, tant l'audience est forte.",
      "Un service IPTV réunit les chaînes qui diffusent la C1 et permet de suivre le match de son choix, ou de basculer d'une rencontre à l'autre lors des soirées européennes, avec un direct dimensionné pour absorber les pics.",
    ],
    broadcasters: ["Canal+ (large diffusion)", "beIN Sports (matchs complémentaires)"],
    covers: ["Phase de ligue", "Barrages & huitièmes", "Quarts et demi-finales", "Finale", "Multiplex des soirées européennes"],
    facts: [
      { label: "Format", value: "Nouvelle phase de ligue puis élimination directe" },
      { label: "Diffuseurs habituels", value: "Canal+, beIN Sports" },
      { label: "Soirées", value: "Mardi et mercredi soir" },
      { label: "Qualité", value: "Full HD, 4K sur les affiches" },
    ],
    faq: [
      { q: "Qui diffuse la Champions League en France ?", a: "La Ligue des champions est majoritairement diffusée par Canal+, avec des matchs complémentaires sur beIN Sports. Nos bouquets réunissent ces chaînes." },
      { q: "Peut-on suivre plusieurs matchs le même soir ?", a: "Oui, lors des soirées européennes, le multiplex et les différentes chaînes permettent de basculer d'un match à l'autre." },
      { q: "Le direct tient-il lors des grosses affiches ?", a: "Notre réseau est dimensionné pour les pics d'audience des soirées de C1. Une connexion filaire améliore encore la stabilité." },
    ],
    related: [
      { label: "Ligue Europa", href: "/contenu/sport/ligue-europa" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
      { label: "Premier League", href: "/contenu/sport/premier-league" },
    ],
  },
  "ligue-europa": {
    slug: "ligue-europa",
    type: "competition",
    name: "Ligue Europa",
    eyebrow: TYPE_EYEBROW.competition,
    order: 33,
    metaTitle: "Regarder la Ligue Europa en direct : matchs et clubs français",
    metaDescription:
      "Comment regarder la Ligue Europa (et la Conference League) en direct : diffuseurs, clubs français engagés et astuces pour suivre les soirées européennes.",
    keywords: ["regarder ligue europa direct", "iptv ligue europa", "europa league streaming", "voir ligue europa", "conference league direct"],
    h1: "Regarder la Ligue Europa en direct",
    lead: "La deuxième coupe d'Europe et sa petite sœur la Conference League : suivez les clubs français et les grandes équipes du continent.",
    intro: [
      "La Ligue Europa, complétée par la Conference League, rassemble de nombreux clubs français au fil de la saison, avec des soirées souvent décalées par rapport à la Champions League. La diffusion se partage entre chaîne payante et chaînes en clair pour les équipes tricolores.",
      "Un service IPTV réunit ces sources et permet de suivre le parcours européen de son club sans chercher, chaque jeudi, quelle chaîne diffuse quel match.",
    ],
    broadcasters: ["Canal+ (large diffusion)", "M6 / W9 (certains matchs de clubs français)", "beIN Sports (compléments)"],
    covers: ["Ligue Europa", "Conference League", "Clubs français engagés", "Phases finales", "Finales européennes"],
    facts: [
      { label: "Soirées", value: "Jeudi soir principalement" },
      { label: "Diffuseurs habituels", value: "Canal+, M6/W9, beIN Sports" },
      { label: "Clubs FR", value: "Souvent en clair pour les Français" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Où regarder la Ligue Europa ?", a: "La Ligue Europa est diffusée par Canal+, certains matchs de clubs français passant en clair sur M6 ou W9. Nos bouquets réunissent ces chaînes." },
      { q: "La Conference League est-elle incluse ?", a: "Oui, la Conference League est couverte au même titre que la Ligue Europa via les chaînes incluses." },
    ],
    related: [
      { label: "Champions League", href: "/contenu/sport/champions-league" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
      { label: "Coupe de France", href: "/contenu/sport/coupe-de-france" },
    ],
  },
  "premier-league": {
    slug: "premier-league",
    type: "competition",
    name: "Premier League",
    eyebrow: TYPE_EYEBROW.competition,
    order: 34,
    metaTitle: "Regarder la Premier League en direct : championnat anglais en streaming",
    metaDescription:
      "Comment regarder la Premier League en direct depuis la France : diffuseurs, horaires anglais et astuces pour suivre le championnat anglais en Full HD.",
    keywords: ["regarder premier league direct", "iptv premier league", "premier league streaming", "voir premier league", "championnat anglais direct"],
    h1: "Regarder la Premier League en direct",
    lead: "Le championnat anglais, réputé pour son intensité : suivez la Premier League et ses affiches du week-end depuis la France.",
    intro: [
      "La Premier League est l'un des championnats les plus regardés au monde, avec des matchs répartis sur tout le week-end aux horaires anglais. En France, sa diffusion passe par une chaîne payante qui en détient les droits.",
      "Via l'IPTV, vous accédez aux chaînes qui retransmettent la Premier League, du samedi après-midi au dimanche soir, avec la possibilité de suivre plusieurs affiches et de revoir les résumés.",
    ],
    broadcasters: ["Canal+ (diffuseur habituel)", "Chaînes britanniques (VO)"],
    covers: ["Toutes les journées de championnat", "Affiches du week-end", "Boxing Day", "Résumés et magazines"],
    facts: [
      { label: "Format", value: "20 clubs, 38 journées" },
      { label: "Diffuseur habituel", value: "Canal+" },
      { label: "Horaires", value: "Week-end (heure anglaise)" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Qui diffuse la Premier League en France ?", a: "La Premier League est diffusée par Canal+. Les chaînes concernées sont accessibles via nos bouquets, y compris les affiches du week-end." },
      { q: "Peut-on regarder la Premier League en version originale ?", a: "Oui, des chaînes britanniques permettent de suivre certains matchs en anglais, en complément de la diffusion française." },
    ],
    related: [
      { label: "Champions League", href: "/contenu/sport/champions-league" },
      { label: "Chaînes anglaises", href: "/contenu/chaines/anglaises" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
    ],
  },
  liga: {
    slug: "liga",
    type: "competition",
    name: "Liga",
    eyebrow: TYPE_EYEBROW.competition,
    order: 35,
    metaTitle: "Regarder la Liga en direct : championnat espagnol et Clásico",
    metaDescription:
      "Comment regarder la Liga en direct depuis la France : diffuseurs, Clásico Real Madrid – Barça et astuces pour suivre le championnat espagnol en Full HD.",
    keywords: ["regarder liga direct", "iptv liga", "liga espagnole streaming", "voir el clasico", "championnat espagnol direct"],
    h1: "Regarder la Liga en direct",
    lead: "Real Madrid, Barça, et le spectacle du football espagnol : suivez la Liga et le Clásico en direct depuis la France.",
    intro: [
      "La Liga espagnole attire un large public en France, notamment grâce au Real Madrid, au FC Barcelone et à l'Atlético. Le Clásico est l'un des matchs les plus regardés de la saison, tous championnats confondus.",
      "Un service IPTV réunit les chaînes qui diffusent la Liga et permet de suivre chaque journée, du match du dimanche soir au Clásico, en Full HD et sans coupure.",
    ],
    broadcasters: ["beIN Sports (diffuseur habituel)", "Chaînes espagnoles (VO)"],
    covers: ["Toutes les journées", "El Clásico", "Derbys madrilènes et catalans", "Résumés et classement"],
    facts: [
      { label: "Format", value: "20 clubs, 38 journées" },
      { label: "Diffuseur habituel", value: "beIN Sports" },
      { label: "Affiche phare", value: "El Clásico Real – Barça" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Qui diffuse la Liga en France ?", a: "La Liga est diffusée par beIN Sports. Les chaînes concernées sont accessibles via nos bouquets, Clásico compris." },
      { q: "Peut-on suivre la Liga en espagnol ?", a: "Oui, des chaînes espagnoles permettent de suivre le championnat en version originale, en complément." },
    ],
    related: [
      { label: "Chaînes espagnoles", href: "/contenu/chaines/espagnoles" },
      { label: "Champions League", href: "/contenu/sport/champions-league" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
    ],
  },
  "serie-a": {
    slug: "serie-a",
    type: "competition",
    name: "Serie A",
    eyebrow: TYPE_EYEBROW.competition,
    order: 36,
    metaTitle: "Regarder la Serie A en direct : championnat italien en streaming",
    metaDescription:
      "Comment regarder la Serie A en direct depuis la France : diffuseurs, grands clubs italiens et astuces pour suivre le championnat d'Italie en Full HD.",
    keywords: ["regarder serie a direct", "iptv serie a", "serie a streaming", "voir serie a", "championnat italien direct"],
    h1: "Regarder la Serie A en direct",
    lead: "Le Calcio et ses grands clubs — Juventus, Milan, Inter, Naples : suivez la Serie A italienne en direct depuis la France.",
    intro: [
      "La Serie A conjugue tactique et grands noms, avec des derbys parmi les plus intenses d'Europe. Son suivi depuis la France passe par une chaîne payante spécialisée dans les championnats étrangers.",
      "Un service IPTV réunit les chaînes qui diffusent le Calcio et permet de suivre chaque journée, du derby de Milan aux affiches du haut de tableau, sans changer d'application.",
    ],
    broadcasters: ["beIN Sports (diffuseur habituel)", "Chaînes italiennes (VO)"],
    covers: ["Toutes les journées", "Derbys (Milan, Rome, Turin)", "Courses au Scudetto", "Résumés et classement"],
    facts: [
      { label: "Format", value: "20 clubs, 38 journées" },
      { label: "Diffuseur habituel", value: "beIN Sports" },
      { label: "Grands clubs", value: "Juventus, Milan, Inter, Naples, Rome" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Qui diffuse la Serie A en France ?", a: "La Serie A est diffusée par beIN Sports. Les chaînes concernées sont accessibles via nos bouquets." },
      { q: "Peut-on suivre le Calcio en italien ?", a: "Oui, des chaînes italiennes permettent de suivre certains matchs en version originale." },
    ],
    related: [
      { label: "Chaînes italiennes", href: "/contenu/chaines/italiennes" },
      { label: "Champions League", href: "/contenu/sport/champions-league" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
    ],
  },
  bundesliga: {
    slug: "bundesliga",
    type: "competition",
    name: "Bundesliga",
    eyebrow: TYPE_EYEBROW.competition,
    order: 37,
    metaTitle: "Regarder la Bundesliga en direct : championnat allemand en streaming",
    metaDescription:
      "Comment regarder la Bundesliga en direct depuis la France : diffuseurs, Bayern, Dortmund et astuces pour suivre le championnat allemand en Full HD.",
    keywords: ["regarder bundesliga direct", "iptv bundesliga", "bundesliga streaming", "voir bundesliga", "championnat allemand direct"],
    h1: "Regarder la Bundesliga en direct",
    lead: "Le championnat allemand, ses stades pleins et son football offensif : suivez la Bundesliga et le Klassiker en direct.",
    intro: [
      "La Bundesliga est réputée pour l'ambiance de ses stades et un jeu porté vers l'avant. Le Bayern Munich et le Borussia Dortmund en sont les têtes d'affiche, notamment lors du Klassiker.",
      "Via l'IPTV, vous accédez aux chaînes qui diffusent la Bundesliga en France, avec les matchs du samedi après-midi et les affiches du week-end, en Full HD.",
    ],
    broadcasters: ["beIN Sports (diffuseur habituel)", "Chaînes allemandes (VO)"],
    covers: ["Toutes les journées", "Der Klassiker (Bayern – Dortmund)", "Résumés et classement"],
    facts: [
      { label: "Format", value: "18 clubs, 34 journées" },
      { label: "Diffuseur habituel", value: "beIN Sports" },
      { label: "Affiche phare", value: "Der Klassiker" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Qui diffuse la Bundesliga en France ?", a: "La Bundesliga est diffusée par beIN Sports. Les chaînes concernées sont accessibles via nos bouquets." },
      { q: "Peut-on suivre la Bundesliga en allemand ?", a: "Oui, des chaînes allemandes permettent de suivre certains matchs en version originale." },
    ],
    related: [
      { label: "Chaînes allemandes", href: "/contenu/chaines/allemandes" },
      { label: "Champions League", href: "/contenu/sport/champions-league" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
    ],
  },
  "coupe-du-monde": {
    slug: "coupe-du-monde",
    type: "competition",
    name: "Coupe du monde",
    eyebrow: TYPE_EYEBROW.competition,
    order: 38,
    metaTitle: "Regarder la Coupe du monde en direct : tous les matchs de la compétition",
    metaDescription:
      "Comment regarder la Coupe du monde de football en direct : diffuseurs en clair et payants, matchs des Bleus et astuces pour tout suivre en Full HD et 4K.",
    keywords: ["regarder coupe du monde direct", "iptv coupe du monde", "coupe du monde streaming", "voir coupe du monde", "match bleus direct"],
    h1: "Regarder la Coupe du monde en direct",
    lead: "L'événement le plus regardé de la planète football : suivez tous les matchs de la Coupe du monde et le parcours des Bleus en direct.",
    intro: [
      "La Coupe du monde rassemble un public immense, avec des dizaines de matchs sur quelques semaines. En France, la diffusion se partage entre chaînes en clair pour les affiches majeures et chaînes payantes pour l'intégralité de la compétition.",
      "Un service IPTV réunit ces sources et permet de suivre chaque rencontre, des matchs de poule aux quarts de finale, en Full HD ou 4K, avec un direct dimensionné pour l'afflux des grands soirs.",
    ],
    broadcasters: ["TF1 & M6 (matchs en clair)", "beIN Sports (intégralité de la compétition)"],
    covers: ["Phase de groupes", "Matchs des Bleus", "Huitièmes à la finale", "Résumés et analyses"],
    facts: [
      { label: "Fréquence", value: "Tous les 4 ans" },
      { label: "Diffuseurs habituels", value: "Chaînes en clair + beIN Sports" },
      { label: "Matchs", value: "L'intégralité de la compétition" },
      { label: "Qualité", value: "Full HD, 4K sur les grandes affiches" },
    ],
    faq: [
      { q: "Où regarder la Coupe du monde en France ?", a: "Les grandes affiches et les matchs des Bleus sont souvent diffusés en clair (TF1, M6), l'intégralité de la compétition passant par beIN Sports. Nos bouquets réunissent ces chaînes." },
      { q: "Peut-on voir tous les matchs, même les moins médiatisés ?", a: "Oui, l'ensemble des rencontres est accessible via les chaînes qui diffusent l'intégralité de la compétition." },
    ],
    related: [
      { label: "Euro de football", href: "/contenu/sport/euro" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
      { label: "Chaîne beIN Sports", href: "/contenu/sport/bein-sports" },
    ],
  },
  euro: {
    slug: "euro",
    type: "competition",
    name: "Euro de football",
    eyebrow: TYPE_EYEBROW.competition,
    order: 39,
    metaTitle: "Regarder l'Euro de football en direct : matchs et parcours des Bleus",
    metaDescription:
      "Comment regarder le Championnat d'Europe de football en direct : diffuseurs en clair et payants, matchs de l'équipe de France et astuces pour tout suivre.",
    keywords: ["regarder euro direct", "iptv euro football", "euro streaming", "voir euro football", "championnat europe football direct"],
    h1: "Regarder l'Euro de football en direct",
    lead: "Le Championnat d'Europe des nations et le parcours des Bleus : suivez tous les matchs de l'Euro en direct.",
    intro: [
      "L'Euro est le grand rendez-vous continental, avec des matchs quotidiens pendant plusieurs semaines. Comme pour la Coupe du monde, la diffusion française mêle chaînes en clair et chaînes payantes.",
      "L'IPTV réunit ces diffuseurs et permet de suivre l'intégralité de la compétition, de la phase de groupes à la finale, avec un direct stable même lors des soirs à plusieurs matchs.",
    ],
    broadcasters: ["TF1 & M6 (matchs en clair)", "beIN Sports (intégralité)"],
    covers: ["Phase de groupes", "Matchs de l'équipe de France", "Huitièmes à la finale", "Résumés et analyses"],
    facts: [
      { label: "Fréquence", value: "Tous les 4 ans" },
      { label: "Diffuseurs habituels", value: "Chaînes en clair + beIN Sports" },
      { label: "Matchs", value: "L'intégralité de la compétition" },
      { label: "Qualité", value: "Full HD, 4K sur les affiches" },
    ],
    faq: [
      { q: "Où regarder l'Euro en France ?", a: "Les grandes affiches et les matchs des Bleus passent souvent en clair (TF1, M6), l'intégralité de la compétition étant diffusée par beIN Sports. Nos bouquets réunissent ces chaînes." },
      { q: "Peut-on suivre toutes les nations ?", a: "Oui, l'ensemble des matchs est accessible via les chaînes qui diffusent l'intégralité du tournoi." },
    ],
    related: [
      { label: "Coupe du monde", href: "/contenu/sport/coupe-du-monde" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
      { label: "Chaîne beIN Sports", href: "/contenu/sport/bein-sports" },
    ],
  },
  "coupe-de-france": {
    slug: "coupe-de-france",
    type: "competition",
    name: "Coupe de France",
    eyebrow: TYPE_EYEBROW.competition,
    order: 40,
    metaTitle: "Regarder la Coupe de France en direct : des petits clubs à la finale",
    metaDescription:
      "Comment regarder la Coupe de France de football en direct : diffuseurs, exploits des petits clubs et finale au Stade de France, en Full HD.",
    keywords: ["regarder coupe de france direct", "iptv coupe de france", "coupe de france streaming", "voir coupe de france football", "finale coupe de france direct"],
    h1: "Regarder la Coupe de France en direct",
    lead: "La compétition des exploits, où un club amateur peut défier un cador de Ligue 1 : suivez la Coupe de France jusqu'à la finale.",
    intro: [
      "La Coupe de France a ce charme unique : des équipes amateures y côtoient les grands clubs professionnels, avec chaque année son lot d'exploits. Sa diffusion se partage entre chaîne en clair et chaîne payante.",
      "Un service IPTV réunit ces diffuseurs et permet de suivre les tours à élimination directe, des trente-deuxièmes à la finale au Stade de France.",
    ],
    broadcasters: ["France Télévisions (matchs en clair)", "beIN Sports (compléments)"],
    covers: ["Tours à élimination directe", "Exploits des clubs amateurs", "Demi-finales", "Finale au Stade de France"],
    facts: [
      { label: "Format", value: "Élimination directe, un match sec" },
      { label: "Diffuseurs habituels", value: "France TV, beIN Sports" },
      { label: "Finale", value: "Stade de France" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Où regarder la Coupe de France ?", a: "La Coupe de France est diffusée en partie en clair par France Télévisions, avec des matchs complémentaires sur beIN Sports. Nos bouquets réunissent ces chaînes." },
      { q: "Les petits clubs sont-ils diffusés ?", a: "Les affiches marquantes, y compris les exploits des clubs amateurs, sont retransmises par les chaînes qui couvrent la compétition." },
    ],
    related: [
      { label: "Ligue 1", href: "/contenu/sport/ligue-1" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
    ],
  },
  "roland-garros": {
    slug: "roland-garros",
    type: "competition",
    name: "Roland-Garros",
    eyebrow: TYPE_EYEBROW.competition,
    order: 41,
    metaTitle: "Regarder Roland-Garros en direct : le Grand Chelem sur terre battue",
    metaDescription:
      "Comment regarder Roland-Garros en direct : diffuseurs en clair, sessions de nuit, courts annexes et astuces pour suivre le Grand Chelem parisien en Full HD.",
    keywords: ["regarder roland garros direct", "iptv roland garros", "roland garros streaming", "voir roland garros", "tennis roland garros direct"],
    h1: "Regarder Roland-Garros en direct",
    lead: "Le Grand Chelem parisien sur terre battue : suivez Roland-Garros du premier tour à la finale, courts principaux et courts annexes.",
    intro: [
      "Roland-Garros est le rendez-vous du tennis français, avec deux semaines de compétition sur la terre battue de la Porte d'Auteuil. La diffusion mêle chaîne en clair pour le grand public et plateforme pour certaines sessions de nuit.",
      "Un service IPTV réunit ces sources et permet de suivre un match sur un court annexe comme une finale sur le Central, en direct et en rediffusion.",
    ],
    broadcasters: ["France Télévisions (diffusion principale)", "Amazon Prime Video (sessions de nuit)"],
    covers: ["Premiers tours", "Courts principaux et annexes", "Sessions de nuit", "Demi-finales et finales", "Simples et doubles"],
    facts: [
      { label: "Période", value: "Fin mai à début juin" },
      { label: "Diffuseurs habituels", value: "France TV, Amazon Prime" },
      { label: "Surface", value: "Terre battue" },
      { label: "Qualité", value: "Full HD, 4K sur certains courts" },
    ],
    faq: [
      { q: "Où regarder Roland-Garros ?", a: "Roland-Garros est diffusé en clair par France Télévisions, avec certaines sessions de nuit sur Amazon Prime Video. Nos bouquets donnent accès aux chaînes concernées." },
      { q: "Peut-on suivre les courts annexes ?", a: "Oui, la diffusion multi-courts permet de suivre les matchs sur les courts annexes, pas seulement le court central." },
    ],
    related: [
      { label: "Tennis (tous tournois)", href: "/contenu/sport/tennis" },
      { label: "Chaîne Eurosport", href: "/contenu/sport/eurosport" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
    ],
  },
  "top-14": {
    slug: "top-14",
    type: "competition",
    name: "Top 14",
    eyebrow: TYPE_EYEBROW.competition,
    order: 42,
    metaTitle: "Regarder le Top 14 en direct : championnat de France de rugby",
    metaDescription:
      "Comment regarder le Top 14 en direct : diffuseur, affiches de la journée, phases finales et astuces pour suivre le championnat de France de rugby en Full HD.",
    keywords: ["regarder top 14 direct", "iptv top 14", "top 14 streaming", "voir top 14", "rugby top 14 direct"],
    h1: "Regarder le Top 14 en direct",
    lead: "Le championnat de France de rugby, dense et physique jusqu'aux phases finales : suivez le Top 14 journée après journée.",
    intro: [
      "Le Top 14 est le championnat de rugby le plus relevé au monde, avec des affiches réparties du samedi au dimanche et des phases finales à guichets fermés. Sa diffusion est assurée par une chaîne payante qui en détient les droits.",
      "Via l'IPTV, vous accédez aux chaînes qui diffusent le Top 14, des matchs de la journée jusqu'au barrage, demi-finales et finale au Stade de France.",
    ],
    broadcasters: ["Canal+ (diffuseur habituel)"],
    covers: ["Toutes les journées", "Affiches du samedi soir", "Barrages et demi-finales", "Finale au Stade de France"],
    facts: [
      { label: "Format", value: "14 clubs, phases finales" },
      { label: "Diffuseur habituel", value: "Canal+" },
      { label: "Finale", value: "Stade de France" },
      { label: "Qualité", value: "Full HD, 4K sur les grandes affiches" },
    ],
    faq: [
      { q: "Qui diffuse le Top 14 ?", a: "Le Top 14 est diffusé par Canal+. Les chaînes concernées sont accessibles via nos bouquets, phases finales comprises." },
      { q: "Peut-on suivre toutes les affiches d'une journée ?", a: "Oui, les matchs de la journée sont diffusés sur les chaînes incluses, avec les grandes affiches en soirée." },
    ],
    related: [
      { label: "Rugby (toutes compétitions)", href: "/contenu/sport/rugby" },
      { label: "Tournoi des Six Nations", href: "/contenu/sport/six-nations" },
      { label: "Chaîne Canal+ Sport", href: "/contenu/sport/canal-plus-sport" },
    ],
  },
  "six-nations": {
    slug: "six-nations",
    type: "competition",
    name: "Tournoi des Six Nations",
    eyebrow: TYPE_EYEBROW.competition,
    order: 43,
    metaTitle: "Regarder le Tournoi des Six Nations en direct : rugby international",
    metaDescription:
      "Comment regarder le Tournoi des Six Nations en direct : diffusion en clair, matchs du XV de France et astuces pour suivre le rugby international en Full HD.",
    keywords: ["regarder six nations direct", "iptv six nations", "tournoi des six nations streaming", "voir xv de france", "rugby six nations direct"],
    h1: "Regarder le Tournoi des Six Nations en direct",
    lead: "France, Angleterre, Irlande, Écosse, Pays de Galles, Italie : suivez le grand rendez-vous du rugby international en direct.",
    intro: [
      "Le Tournoi des Six Nations est le sommet du rugby international de l'hémisphère nord, avec des week-ends de février et mars très attendus. Les matchs du XV de France y sont particulièrement suivis.",
      "Un service IPTV réunit les chaînes qui diffusent le Tournoi, généralement en clair, pour ne rien manquer des matchs des Bleus comme des autres nations.",
    ],
    broadcasters: ["France Télévisions (diffusion en clair)"],
    covers: ["Matchs du XV de France", "Toutes les nations", "Grand Chelem et Triple Couronne", "Analyses et magazines"],
    facts: [
      { label: "Période", value: "Février à mars" },
      { label: "Diffuseur habituel", value: "France Télévisions" },
      { label: "Nations", value: "France, Angleterre, Irlande, Écosse, Galles, Italie" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Où regarder le Tournoi des Six Nations ?", a: "Le Tournoi est traditionnellement diffusé en clair par France Télévisions. Les chaînes concernées sont accessibles via nos bouquets." },
      { q: "Les matchs des autres nations sont-ils inclus ?", a: "Oui, l'ensemble des rencontres du Tournoi est diffusé, pas seulement les matchs de l'équipe de France." },
    ],
    related: [
      { label: "Rugby (toutes compétitions)", href: "/contenu/sport/rugby" },
      { label: "Top 14", href: "/contenu/sport/top-14" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
    ],
  },
  "tour-de-france": {
    slug: "tour-de-france",
    type: "competition",
    name: "Tour de France",
    eyebrow: TYPE_EYEBROW.competition,
    order: 44,
    metaTitle: "Regarder le Tour de France en direct : chaque étape en intégralité",
    metaDescription:
      "Comment regarder le Tour de France en direct : diffusion en clair, étapes de montagne, contre-la-montre et astuces pour suivre la Grande Boucle en Full HD.",
    keywords: ["regarder tour de france direct", "iptv tour de france", "tour de france streaming", "voir tour de france", "cyclisme tour de france direct"],
    h1: "Regarder le Tour de France en direct",
    lead: "La Grande Boucle, étape après étape : suivez le Tour de France, des sprints massifs aux ascensions mythiques, en direct et en intégralité.",
    intro: [
      "Le Tour de France est l'événement sportif de l'été, avec trois semaines d'étapes diffusées souvent en intégralité sur plusieurs heures. La couverture se partage entre chaîne en clair et chaîne spécialisée.",
      "Un service IPTV réunit ces diffuseurs et permet de suivre une étape de montagne du départ à l'arrivée, ou de retrouver le final au sprint, en Full HD et parfois en 4K.",
    ],
    broadcasters: ["France Télévisions (diffusion en clair)", "Eurosport (intégralité)"],
    covers: ["Étapes de plaine et de montagne", "Contre-la-montre", "Maillots distinctifs", "Arrivée sur les Champs-Élysées"],
    facts: [
      { label: "Période", value: "Juillet (3 semaines)" },
      { label: "Diffuseurs habituels", value: "France TV, Eurosport" },
      { label: "Étapes", value: "Diffusées en intégralité" },
      { label: "Qualité", value: "Full HD, 4K sur certaines étapes" },
    ],
    faq: [
      { q: "Où regarder le Tour de France ?", a: "Le Tour est diffusé en clair par France Télévisions et intégralement sur Eurosport. Nos bouquets donnent accès aux deux." },
      { q: "Les étapes sont-elles diffusées en entier ?", a: "Oui, les étapes sont retransmises en intégralité, souvent sur plusieurs heures, avec le final en direct." },
    ],
    related: [
      { label: "Cyclisme (toutes courses)", href: "/contenu/sport/cyclisme" },
      { label: "Chaîne Eurosport", href: "/contenu/sport/eurosport" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
    ],
  },
  nba: {
    slug: "nba",
    type: "competition",
    name: "NBA",
    eyebrow: TYPE_EYEBROW.competition,
    order: 45,
    metaTitle: "Regarder la NBA en direct : saison régulière, Playoffs et Finales",
    metaDescription:
      "Comment regarder la NBA en direct depuis la France : diffuseurs, matchs de nuit, Playoffs et Finales, en direct ou en rediffusion, en Full HD.",
    keywords: ["regarder nba direct", "iptv nba", "nba streaming", "voir nba", "match nba direct france"],
    h1: "Regarder la NBA en direct",
    lead: "La meilleure ligue de basket au monde : suivez la NBA, de la saison régulière aux Finales, malgré le décalage horaire.",
    intro: [
      "La NBA se joue en pleine nuit, heure française, ce qui en fait un défi pour les fans : il faut soit veiller, soit rattraper les matchs au réveil. La diffusion passe par une chaîne payante en complément du League Pass officiel.",
      "Un service IPTV réunit les chaînes qui diffusent la NBA et propose les matchs en direct comme en rediffusion, pour ne pas se faire spoiler un résultat joué à 3 h du matin.",
    ],
    broadcasters: ["beIN Sports (diffuseur habituel)", "NBA League Pass (complément officiel)"],
    covers: ["Saison régulière", "NBA Cup", "Playoffs", "Finales NBA", "All-Star Game"],
    facts: [
      { label: "Saison", value: "Octobre à juin" },
      { label: "Diffuseur habituel", value: "beIN Sports" },
      { label: "Horaires", value: "Nuit (heure française)" },
      { label: "Direct & replay", value: "Rediffusions pour rattraper" },
    ],
    faq: [
      { q: "Où regarder la NBA en France ?", a: "La NBA est diffusée par beIN Sports, en complément du League Pass officiel. Nos bouquets donnent accès aux chaînes concernées, en direct et en rediffusion." },
      { q: "Comment rattraper un match joué la nuit ?", a: "Les rencontres nocturnes sont proposées en rediffusion, ce qui permet de les regarder au réveil sans connaître le score." },
    ],
    related: [
      { label: "Basket (toutes compétitions)", href: "/contenu/sport/basketball" },
      { label: "Chaîne beIN Sports", href: "/contenu/sport/bein-sports" },
      { label: "Chaînes américaines", href: "/contenu/chaines/americaines" },
    ],
  },
  nfl: {
    slug: "nfl",
    type: "competition",
    name: "NFL",
    eyebrow: TYPE_EYEBROW.competition,
    order: 46,
    metaTitle: "Regarder la NFL en direct : football américain et Super Bowl",
    metaDescription:
      "Comment regarder la NFL en direct depuis la France : diffuseurs, matchs du dimanche soir, Playoffs et Super Bowl, en direct ou en rediffusion.",
    keywords: ["regarder nfl direct", "iptv nfl", "nfl streaming", "voir super bowl direct", "football americain direct"],
    h1: "Regarder la NFL en direct",
    lead: "Le football américain, ses dimanches soir et son Super Bowl : suivez la NFL depuis la France, malgré le décalage horaire.",
    intro: [
      "La NFL rythme les nuits du dimanche au lundi de septembre à février, avec une apothéose au Super Bowl, l'un des événements les plus regardés au monde. Sa diffusion en France passe par des chaînes spécialisées et des plateformes.",
      "Un service IPTV réunit les chaînes qui retransmettent la NFL et propose les matchs en direct comme en rediffusion, du Sunday Night Football au Super Bowl.",
    ],
    broadcasters: ["Chaînes spécialisées & plateformes", "Chaînes américaines (VO)"],
    covers: ["Saison régulière", "Sunday & Monday Night", "Playoffs", "Super Bowl"],
    facts: [
      { label: "Saison", value: "Septembre à février" },
      { label: "Événement phare", value: "Super Bowl" },
      { label: "Horaires", value: "Nuit (heure française)" },
      { label: "Direct & replay", value: "Rediffusions disponibles" },
    ],
    faq: [
      { q: "Où regarder la NFL en France ?", a: "La NFL est diffusée par des chaînes spécialisées et des plateformes. Nos bouquets donnent accès aux chaînes qui retransmettent les matchs, Super Bowl compris." },
      { q: "Peut-on regarder le Super Bowl en direct ?", a: "Oui, le Super Bowl est diffusé en direct de nuit ; une rediffusion permet de le revoir le lendemain." },
    ],
    related: [
      { label: "Chaînes américaines", href: "/contenu/chaines/americaines" },
      { label: "NBA", href: "/contenu/sport/nba" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
    ],
  },
  can: {
    slug: "can",
    type: "competition",
    name: "Coupe d'Afrique des Nations",
    eyebrow: TYPE_EYEBROW.competition,
    order: 47,
    metaTitle: "Regarder la CAN en direct : Coupe d'Afrique des Nations",
    metaDescription:
      "Comment regarder la Coupe d'Afrique des Nations (CAN) en direct : diffuseurs, matchs des sélections africaines et astuces pour tout suivre en Full HD.",
    keywords: ["regarder can direct", "iptv can", "coupe d'afrique streaming", "voir can football", "can 2025 direct"],
    h1: "Regarder la CAN en direct",
    lead: "La Coupe d'Afrique des Nations, très suivie en France : retrouvez toutes les sélections africaines et leurs supporters en direct.",
    intro: [
      "La CAN rassemble les meilleures sélections africaines et passionne une large partie du public en France, où de nombreux supporters suivent le parcours du Maroc, de l'Algérie, du Sénégal ou de la Côte d'Ivoire.",
      "Un service IPTV réunit les chaînes qui diffusent la compétition, des matchs de poule à la finale, avec en complément des chaînes arabes et africaines pour suivre l'événement dans une autre langue.",
    ],
    broadcasters: ["beIN Sports (diffuseur habituel)", "Chaînes arabes et africaines (VO)"],
    covers: ["Phase de groupes", "Sélections nord et ouest-africaines", "Quarts à la finale", "Résumés et analyses"],
    facts: [
      { label: "Fréquence", value: "Tous les 2 ans" },
      { label: "Diffuseur habituel", value: "beIN Sports" },
      { label: "Compléments", value: "Chaînes arabes & africaines" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Où regarder la CAN en France ?", a: "La Coupe d'Afrique des Nations est diffusée par beIN Sports. Des chaînes arabes et africaines permettent aussi de la suivre en VO. Nos bouquets réunissent ces sources." },
      { q: "Peut-on suivre une sélection en particulier ?", a: "Oui, l'intégralité de la compétition est diffusée, ce qui permet de suivre le parcours de chaque sélection." },
    ],
    related: [
      { label: "Chaînes africaines", href: "/contenu/chaines/africaines" },
      { label: "Chaînes arabes", href: "/contenu/chaines/arabes" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
    ],
  },

  /* ------------------------------------------------------------------ CHANNELS */
  "bein-sports": {
    slug: "bein-sports",
    type: "chaine",
    name: "beIN Sports",
    eyebrow: TYPE_EYEBROW.chaine,
    order: 60,
    metaTitle: "Regarder beIN Sports en direct : football, NBA et compétitions",
    metaDescription:
      "Comment regarder beIN Sports en direct via l'IPTV : Liga, Serie A, Bundesliga, NBA, Ligue des champions et grands championnats, en Full HD sans coupure.",
    keywords: ["regarder bein sports direct", "iptv bein sports", "bein sports streaming", "voir bein sport", "bein sport direct"],
    h1: "Regarder beIN Sports en direct",
    lead: "L'une des chaînes de sport les plus complètes : championnats étrangers, NBA, handball et grands événements réunis sur beIN Sports.",
    intro: [
      "beIN Sports diffuse une grande partie du football international (Liga, Serie A, Bundesliga), la NBA, du handball et de nombreuses compétitions que l'on ne trouve pas ailleurs. C'est une chaîne incontournable pour l'amateur de sport.",
      "Via l'IPTV, vous accédez aux différents canaux beIN Sports au même endroit, avec un direct stable en Full HD. Pratique pour passer d'un match de Liga à une rencontre NBA sans changer d'abonnement.",
    ],
    covers: ["Liga, Serie A, Bundesliga", "NBA", "Ligue des champions (compléments)", "Handball & Ligue 1 (selon saisons)", "Tennis ATP/WTA"],
    facts: [
      { label: "Type", value: "Chaîne de sport premium" },
      { label: "Points forts", value: "Championnats étrangers, NBA" },
      { label: "Canaux", value: "Plusieurs chaînes beIN" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Que diffuse beIN Sports ?", a: "beIN Sports diffuse la Liga, la Serie A, la Bundesliga, la NBA, du handball, du tennis et de nombreuses autres compétitions. Nos bouquets donnent accès à ses canaux." },
      { q: "Peut-on regarder plusieurs chaînes beIN à la fois ?", a: "Les différents canaux beIN Sports sont accessibles, ce qui permet de suivre plusieurs événements simultanés lors des grosses soirées." },
    ],
    related: [
      { label: "Liga", href: "/contenu/sport/liga" },
      { label: "NBA", href: "/contenu/sport/nba" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
    ],
  },
  "rmc-sport": {
    slug: "rmc-sport",
    type: "chaine",
    name: "RMC Sport",
    eyebrow: TYPE_EYEBROW.chaine,
    order: 61,
    metaTitle: "Regarder RMC Sport en direct : UFC, boxe et football",
    metaDescription:
      "Comment regarder RMC Sport en direct via l'IPTV : UFC, sports de combat, football et grands événements, en direct et en rediffusion, en Full HD.",
    keywords: ["regarder rmc sport direct", "iptv rmc sport", "rmc sport streaming", "voir rmc sport", "rmc sport ufc direct"],
    h1: "Regarder RMC Sport en direct",
    lead: "La chaîne des sports de combat et de grandes affiches : UFC, boxe et football réunis sur RMC Sport.",
    intro: [
      "RMC Sport s'est imposée comme une référence pour les sports de combat, notamment l'UFC, ainsi que pour certaines compétitions de football selon les saisons. Ses soirées événementielles se disputent souvent tard.",
      "Via l'IPTV, vous accédez aux canaux RMC Sport au même endroit, en direct comme en rediffusion, pour suivre une soirée UFC ou un grand combat de boxe sans jongler entre abonnements.",
    ],
    covers: ["UFC & sports de combat", "Grands combats de boxe", "Football (selon les droits)", "Magazines et analyses"],
    facts: [
      { label: "Type", value: "Chaîne de sport premium" },
      { label: "Points forts", value: "UFC, boxe" },
      { label: "Événements", value: "Souvent en soirée / nuit" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Que diffuse RMC Sport ?", a: "RMC Sport diffuse l'UFC, de la boxe et certaines compétitions de football selon les saisons. Nos bouquets donnent accès à ses canaux, en direct et en rediffusion." },
      { q: "Peut-on revoir une soirée UFC ?", a: "Oui, les soirées UFC, souvent nocturnes, sont proposées en rediffusion pour les revoir au réveil." },
    ],
    related: [
      { label: "Boxe & MMA", href: "/contenu/sport/boxe-mma" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
      { label: "Chaînes de sport", href: "/contenu/chaines" },
    ],
  },
  "canal-plus-sport": {
    slug: "canal-plus-sport",
    type: "chaine",
    name: "Canal+ Sport",
    eyebrow: TYPE_EYEBROW.chaine,
    order: 62,
    metaTitle: "Regarder Canal+ Sport en direct : Champions League, F1, Top 14",
    metaDescription:
      "Comment regarder Canal+ Sport en direct via l'IPTV : Champions League, Premier League, Formule 1, MotoGP et Top 14, en Full HD et 4K sans coupure.",
    keywords: ["regarder canal plus sport direct", "iptv canal plus sport", "canal plus sport streaming", "voir canal sport", "canal+ sport direct"],
    h1: "Regarder Canal+ Sport en direct",
    lead: "Champions League, Premier League, Formule 1, MotoGP et Top 14 : les grandes compétitions premium réunies sur Canal+ Sport.",
    intro: [
      "Canal+ concentre une partie des droits sportifs les plus prestigieux : Champions League, Premier League, Formule 1, MotoGP et Top 14. C'est une chaîne clé pour l'amateur de football européen et de sport mécanique.",
      "Via l'IPTV, vous accédez aux canaux sport de Canal+ au même endroit, avec un direct stable en Full HD et parfois en 4K sur les grandes affiches.",
    ],
    covers: ["Champions League", "Premier League", "Formule 1 & MotoGP", "Top 14", "Grands événements"],
    facts: [
      { label: "Type", value: "Chaîne premium" },
      { label: "Points forts", value: "C1, Premier League, F1, Top 14" },
      { label: "Canaux", value: "Plusieurs chaînes sport" },
      { label: "Qualité", value: "Full HD, 4K sur les affiches" },
    ],
    faq: [
      { q: "Que diffuse Canal+ Sport ?", a: "Canal+ diffuse la Champions League, la Premier League, la Formule 1, le MotoGP et le Top 14. Nos bouquets donnent accès à ses canaux sport." },
      { q: "La Formule 1 est-elle en 4K ?", a: "Certaines diffusions premium, dont des Grands Prix, sont proposées en 4K lorsque la captation le permet." },
    ],
    related: [
      { label: "Champions League", href: "/contenu/sport/champions-league" },
      { label: "Formule 1", href: "/contenu/sport/formule-1" },
      { label: "Top 14", href: "/contenu/sport/top-14" },
    ],
  },
  dazn: {
    slug: "dazn",
    type: "chaine",
    name: "DAZN",
    eyebrow: TYPE_EYEBROW.chaine,
    order: 63,
    metaTitle: "Regarder DAZN en direct : Ligue 1 et boxe en streaming",
    metaDescription:
      "Comment regarder DAZN en direct via l'IPTV : Ligue 1, grands combats de boxe et événements, en direct et en rediffusion, en Full HD.",
    keywords: ["regarder dazn direct", "iptv dazn", "dazn streaming", "voir dazn", "dazn ligue 1 direct"],
    h1: "Regarder DAZN en direct",
    lead: "La plateforme sportive montée en puissance en France, notamment sur la Ligue 1 et la boxe : suivez DAZN en direct.",
    intro: [
      "DAZN est devenue un acteur majeur du sport en France, avec une place centrale sur la Ligue 1 lors des saisons récentes et une forte présence sur la boxe internationale.",
      "Via l'IPTV, vous accédez aux contenus diffusés sur DAZN au même endroit que les autres chaînes de sport, en direct comme en rediffusion, sans multiplier les applications.",
    ],
    covers: ["Ligue 1 (selon les saisons)", "Grands combats de boxe", "Événements internationaux", "Magazines"],
    facts: [
      { label: "Type", value: "Plateforme sportive" },
      { label: "Points forts", value: "Ligue 1, boxe" },
      { label: "Direct & replay", value: "Rediffusions disponibles" },
      { label: "Qualité", value: "Full HD" },
    ],
    faq: [
      { q: "Que diffuse DAZN en France ?", a: "DAZN diffuse une large partie de la Ligue 1 selon les saisons, ainsi que de grands combats de boxe. Nos bouquets donnent accès aux chaînes concernées." },
      { q: "Peut-on suivre la Ligue 1 via DAZN ?", a: "Oui, quand DAZN détient les droits de la Ligue 1, les matchs sont accessibles au même endroit que les autres compétitions." },
    ],
    related: [
      { label: "Ligue 1", href: "/contenu/sport/ligue-1" },
      { label: "Boxe & MMA", href: "/contenu/sport/boxe-mma" },
      { label: "Tout le sport en direct", href: "/contenu/sport" },
    ],
  },
  eurosport: {
    slug: "eurosport",
    type: "chaine",
    name: "Eurosport",
    eyebrow: TYPE_EYEBROW.chaine,
    order: 64,
    metaTitle: "Regarder Eurosport en direct : cyclisme, tennis et sports d'hiver",
    metaDescription:
      "Comment regarder Eurosport en direct via l'IPTV : Grands Tours de cyclisme, tennis, sports d'hiver et Jeux Olympiques, en Full HD sans coupure.",
    keywords: ["regarder eurosport direct", "iptv eurosport", "eurosport streaming", "voir eurosport", "eurosport cyclisme direct"],
    h1: "Regarder Eurosport en direct",
    lead: "La chaîne des Grands Tours, du tennis et des sports d'hiver : Eurosport couvre un calendrier que l'on ne trouve pas ailleurs.",
    intro: [
      "Eurosport est incontournable pour le cyclisme (Tour de France, Giro, Vuelta), une grande partie du tennis, les sports d'hiver et, certaines années, les Jeux Olympiques. Sa force est la diffusion intégrale d'événements longs.",
      "Via l'IPTV, vous accédez aux canaux Eurosport au même endroit, en direct comme en rediffusion, pour suivre une étape de montagne ou un tournoi de tennis du début à la fin.",
    ],
    covers: ["Cyclisme (Grands Tours, classiques)", "Tennis (nombreux tournois)", "Sports d'hiver", "Snooker & fléchettes", "Jeux Olympiques (selon années)"],
    facts: [
      { label: "Type", value: "Chaîne de sport" },
      { label: "Points forts", value: "Cyclisme, tennis, sports d'hiver" },
      { label: "Canaux", value: "Eurosport 1 & 2" },
      { label: "Qualité", value: "Full HD, 4K sur certains events" },
    ],
    faq: [
      { q: "Que diffuse Eurosport ?", a: "Eurosport diffuse les Grands Tours de cyclisme, de nombreux tournois de tennis, les sports d'hiver et parfois les Jeux Olympiques. Nos bouquets donnent accès à ses canaux." },
      { q: "Peut-on suivre une étape de cyclisme en intégralité ?", a: "Oui, Eurosport diffuse les étapes des Grands Tours en intégralité, souvent sur plusieurs heures." },
    ],
    related: [
      { label: "Cyclisme (toutes courses)", href: "/contenu/sport/cyclisme" },
      { label: "Tennis (tous tournois)", href: "/contenu/sport/tennis" },
      { label: "Tour de France", href: "/contenu/sport/tour-de-france" },
    ],
  },
};

export const SPORT_SLUGS = Object.keys(SPORT);

export const SPORT_BY_TYPE = (type: SportType): SportEntry[] =>
  Object.values(SPORT)
    .filter((e) => e.type === type)
    .sort((a, b) => a.order - b.order);
