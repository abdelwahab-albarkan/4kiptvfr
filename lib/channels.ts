/**
 * Data for the /contenu/chaines page. Country coverage and channel categories
 * are presented as an indicative overview — no fabricated per-category counts.
 */

/** Indicative list of countries whose bouquets are available. */
export const COUNTRIES: { name: string; region: string }[] = [
  { name: "France", region: "Europe" },
  { name: "Belgique", region: "Europe" },
  { name: "Suisse", region: "Europe" },
  { name: "Luxembourg", region: "Europe" },
  { name: "Royaume-Uni", region: "Europe" },
  { name: "Irlande", region: "Europe" },
  { name: "Espagne", region: "Europe" },
  { name: "Portugal", region: "Europe" },
  { name: "Italie", region: "Europe" },
  { name: "Allemagne", region: "Europe" },
  { name: "Autriche", region: "Europe" },
  { name: "Pays-Bas", region: "Europe" },
  { name: "Suède", region: "Europe" },
  { name: "Norvège", region: "Europe" },
  { name: "Danemark", region: "Europe" },
  { name: "Pologne", region: "Europe" },
  { name: "Grèce", region: "Europe" },
  { name: "États-Unis", region: "Amérique" },
  { name: "Canada", region: "Amérique" },
  { name: "Brésil", region: "Amérique" },
  { name: "Mexique", region: "Amérique" },
  { name: "Maroc", region: "Afrique & Moyen-Orient" },
  { name: "Algérie", region: "Afrique & Moyen-Orient" },
  { name: "Tunisie", region: "Afrique & Moyen-Orient" },
  { name: "Arabie saoudite", region: "Afrique & Moyen-Orient" },
  { name: "Turquie", region: "Afrique & Moyen-Orient" },
  { name: "Inde", region: "Asie & Océanie" },
  { name: "Australie", region: "Asie & Océanie" },
];

export const COUNTRY_REGIONS = ["Europe", "Amérique", "Afrique & Moyen-Orient", "Asie & Océanie"] as const;

/** Thematic categories. `href` set only when a real destination page exists. */
export const CHANNEL_CATEGORIES: { title: string; description: string; href?: string }[] = [
  {
    title: "Sport",
    description:
      "Football (Ligue 1, Champions League), Formule 1, tennis, rugby, NBA et les grands événements en direct.",
    href: "/contenu/sport",
  },
  {
    title: "Cinéma & séries",
    description:
      "Films récents et classiques, séries françaises et internationales, à la demande, en VF et VOST.",
    href: "/contenu/divertissement",
  },
  {
    title: "Actualités",
    description:
      "L'information en continu : chaînes françaises et internationales, économie, météo et débats.",
  },
  {
    title: "Jeunesse",
    description: "Dessins animés et programmes pour enfants, avec possibilité de contrôle parental.",
  },
  {
    title: "Divertissement",
    description: "Télé-réalité, talk-shows, humour, magazines et grands formats de divertissement.",
  },
  {
    title: "Découverte & documentaires",
    description: "Nature, histoire, sciences, voyage et sociétés — une large sélection de documentaires.",
  },
];

/** Detailed bouquet overview, grouped. Adapted to the French market. */
export const BOUQUETS: { group: string; items: string[] }[] = [
  {
    group: "France",
    items: [
      "Généralistes",
      "TNT",
      "Info en continu",
      "Sport",
      "Cinéma",
      "Séries",
      "Jeunesse",
      "Découverte",
      "Musique",
      "Régions",
    ],
  },
  {
    group: "Europe francophone",
    items: ["Belgique", "Suisse romande", "Luxembourg", "Monaco"],
  },
  {
    group: "Europe",
    items: ["Royaume-Uni", "Espagne", "Italie", "Allemagne", "Portugal", "Pays-Bas", "Scandinavie", "Pologne", "Grèce"],
  },
  {
    group: "Amérique",
    items: ["États-Unis", "Canada (EN/FR)", "Amérique latine", "Brésil"],
  },
  {
    group: "Afrique & Moyen-Orient",
    items: ["Maghreb", "Chaînes arabes", "Afrique", "Turquie"],
  },
];

export const CHANNEL_FAQ: { q: string; a: string }[] = [
  {
    q: "Combien de chaînes sont disponibles ?",
    a: "L'offre donne accès à plus de 50 000 chaînes en direct, réparties entre chaînes françaises, sport, information, jeunesse et bouquets internationaux.",
  },
  {
    q: "Les chaînes françaises sont-elles toutes incluses ?",
    a: "Les grandes chaînes françaises généralistes, d'information, de sport et thématiques sont couvertes, avec leur guide des programmes.",
  },
  {
    q: "Puis-je regarder des chaînes étrangères ?",
    a: "Oui. De nombreux bouquets internationaux sont proposés — Royaume-Uni, Espagne, Italie, Maghreb, États-Unis et bien d'autres.",
  },
  {
    q: "La liste des chaînes peut-elle évoluer ?",
    a: "Oui, le catalogue est mis à jour régulièrement. Les exemples donnés ici sont indicatifs et non exhaustifs.",
  },
];
