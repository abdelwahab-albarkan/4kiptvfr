/**
 * Content for the /contenu/chaines/[slug] cluster — per-country ("pays") and
 * per-theme ("theme") channel pages. Each page answers a real "iptv chaînes X"
 * intent with an indicative list of well-known channels for that country/theme
 * plus context for the audience concerned. Channel lists are indicative and
 * non-exhaustive (stated on the page); no fabricated counts.
 *
 * Note: /contenu/chaines/francaises and /contenu/chaines/internationales are
 * separate static pages (hubs); their slugs are intentionally absent here to
 * avoid a route clash.
 */

export type ChaineType = "pays" | "theme";

export type ChaineEntry = {
  slug: string;
  type: ChaineType;
  name: string;
  eyebrow: string;
  order: number;
  /** French country name for the Flag component (only where a flag exists). */
  country?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  lead: string;
  intro: string[];
  /** Indicative list of well-known channels. */
  channels: string[];
  /** Kinds of programming available. */
  categories: string[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
};

export const CHAINES: Record<string, ChaineEntry> = {
  /* ------------------------------------------------------------------- COUNTRIES */
  arabes: {
    slug: "arabes",
    type: "pays",
    name: "Chaînes arabes",
    eyebrow: "Chaînes · Monde arabe",
    order: 10,
    metaTitle: "IPTV chaînes arabes : MBC, Al Jazeera, Rotana en direct",
    metaDescription:
      "IPTV chaînes arabes en direct : MBC, Al Jazeera, Rotana, beIN et de nombreux bouquets du Moyen-Orient et du Maghreb, en Full HD avec le son d'origine.",
    keywords: ["iptv chaines arabes", "iptv arabe", "regarder mbc direct", "chaines arabes streaming", "iptv moyen orient"],
    h1: "IPTV chaînes arabes",
    lead: "Retrouvez les grandes chaînes du monde arabe — information, divertissement, cinéma et musique — en direct depuis la France.",
    intro: [
      "La communauté arabophone de France est nombreuse, et beaucoup souhaitent garder un lien avec les chaînes du Moyen-Orient et du Maghreb : journaux télévisés, séries du ramadan, variétés et cinéma en version originale.",
      "Nos bouquets réunissent les principales chaînes arabes, généralistes comme thématiques, avec le son d'origine et une qualité stable. Une bonne alternative aux paraboles, sans matériel supplémentaire.",
    ],
    channels: ["MBC 1", "MBC 2", "MBC 3", "MBC 4", "MBC Masr", "Al Jazeera", "Al Arabiya", "Rotana Cinema", "Rotana Clip", "Dubai TV", "Abu Dhabi TV", "beIN (VO arabe)"],
    categories: ["Information en continu", "Séries et feuilletons", "Cinéma", "Musique et clips", "Chaînes pour enfants"],
    faq: [
      { q: "Quelles chaînes arabes sont disponibles ?", a: "Les grands groupes comme MBC, Al Jazeera, Al Arabiya et Rotana sont couverts, avec de nombreuses chaînes généralistes et thématiques du Moyen-Orient. La liste est indicative et évolue régulièrement." },
      { q: "Le son est-il en arabe ?", a: "Oui, les chaînes arabes sont diffusées avec leur piste audio d'origine ; certaines proposent aussi des sous-titres." },
      { q: "Faut-il une parabole ?", a: "Non. Tout passe par votre connexion internet : aucune parabole ni matériel de réception supplémentaire n'est nécessaire." },
    ],
    related: [
      { label: "Chaînes marocaines", href: "/contenu/chaines/marocaines" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
      { label: "Coupe d'Afrique des Nations", href: "/contenu/sport/can" },
    ],
  },
  marocaines: {
    slug: "marocaines",
    type: "pays",
    name: "Chaînes marocaines",
    eyebrow: "Chaînes · Maroc",
    order: 11,
    country: "Maroc",
    metaTitle: "IPTV chaînes marocaines : Al Aoula, 2M, Arryadia en direct",
    metaDescription:
      "IPTV chaînes marocaines en direct : Al Aoula, 2M, Arryadia, Al Maghribia et Medi1 TV, avec le son d'origine et une qualité stable depuis la France.",
    keywords: ["iptv chaines marocaines", "regarder 2m direct", "iptv maroc", "chaines marocaines streaming", "al aoula direct"],
    h1: "IPTV chaînes marocaines",
    lead: "Al Aoula, 2M, Arryadia et les grandes chaînes marocaines en direct depuis la France, avec l'information, le sport et les programmes du pays.",
    intro: [
      "Pour la diaspora marocaine de France, retrouver 2M ou Al Aoula, c'est garder un lien quotidien avec l'actualité, les émissions et le football du pays. Les grands rendez-vous, comme les matchs des Lions de l'Atlas, y sont particulièrement suivis.",
      "Nos bouquets réunissent les chaînes marocaines généralistes, d'information et de sport, avec le son d'origine et une diffusion stable, sans parabole.",
    ],
    channels: ["Al Aoula", "2M", "Arryadia", "Al Maghribia", "Medi1 TV", "Tamazight (Al Aoula Laayoune)", "Assadissa", "Athaqafia"],
    categories: ["Information et journaux", "Sport (Arryadia)", "Séries et divertissement", "Programmes religieux et culturels"],
    faq: [
      { q: "Peut-on regarder 2M et Al Aoula en direct ?", a: "Oui, les grandes chaînes marocaines comme 2M et Al Aoula sont disponibles en direct via nos bouquets, avec le son d'origine." },
      { q: "Le football marocain est-il diffusé ?", a: "La chaîne sportive Arryadia, qui diffuse une partie du football marocain, est incluse dans l'offre." },
      { q: "La qualité est-elle bonne depuis la France ?", a: "Oui, la diffusion se fait via internet en Full HD lorsque la chaîne le permet, sans parabole ni matériel spécifique." },
    ],
    related: [
      { label: "Chaînes algériennes", href: "/contenu/chaines/algeriennes" },
      { label: "Chaînes arabes", href: "/contenu/chaines/arabes" },
      { label: "Chaînes africaines", href: "/contenu/chaines/africaines" },
    ],
  },
  algeriennes: {
    slug: "algeriennes",
    type: "pays",
    name: "Chaînes algériennes",
    eyebrow: "Chaînes · Algérie",
    order: 12,
    country: "Algérie",
    metaTitle: "IPTV chaînes algériennes : EPTV, El Bilad, Echorouk en direct",
    metaDescription:
      "IPTV chaînes algériennes en direct : EPTV, Canal Algérie, El Bilad TV, Echorouk et Ennahar, avec le son d'origine et une qualité stable depuis la France.",
    keywords: ["iptv chaines algeriennes", "regarder eptv direct", "iptv algerie", "chaines algeriennes streaming", "echorouk tv direct"],
    h1: "IPTV chaînes algériennes",
    lead: "EPTV, Canal Algérie, El Bilad et les grandes chaînes algériennes en direct depuis la France, information et divertissement compris.",
    intro: [
      "La communauté algérienne de France est l'une des plus importantes, et l'attachement aux chaînes du pays reste fort : journaux, débats, séries et matchs des Verts rythment le quotidien de nombreux foyers.",
      "Nos bouquets réunissent les chaînes publiques et privées algériennes, avec le son d'origine et une diffusion stable via internet, sans parabole.",
    ],
    channels: ["EPTV (Programme National)", "Canal Algérie", "A3", "El Bilad TV", "Echorouk TV", "Ennahar TV", "Berbère Télévision", "Samira TV"],
    categories: ["Information et débats", "Séries et divertissement", "Sport", "Programmes en tamazight"],
    faq: [
      { q: "Quelles chaînes algériennes sont disponibles ?", a: "Les chaînes publiques (EPTV, Canal Algérie, A3) et privées (El Bilad, Echorouk, Ennahar) figurent parmi les chaînes couvertes. La liste est indicative et évolue." },
      { q: "Peut-on suivre les matchs de l'équipe d'Algérie ?", a: "Les grands matchs des Verts sont souvent diffusés sur les chaînes algériennes ou arabes incluses, en complément de la CAN." },
      { q: "Faut-il une parabole ?", a: "Non, la diffusion passe uniquement par votre connexion internet." },
    ],
    related: [
      { label: "Chaînes marocaines", href: "/contenu/chaines/marocaines" },
      { label: "Chaînes tunisiennes", href: "/contenu/chaines/tunisiennes" },
      { label: "Chaînes arabes", href: "/contenu/chaines/arabes" },
    ],
  },
  tunisiennes: {
    slug: "tunisiennes",
    type: "pays",
    name: "Chaînes tunisiennes",
    eyebrow: "Chaînes · Tunisie",
    order: 13,
    country: "Tunisie",
    metaTitle: "IPTV chaînes tunisiennes : Wataniya, Nessma, El Hiwar en direct",
    metaDescription:
      "IPTV chaînes tunisiennes en direct : Wataniya 1 et 2, Nessma TV, El Hiwar El Tounsi et Attessia, avec le son d'origine et une qualité stable depuis la France.",
    keywords: ["iptv chaines tunisiennes", "regarder nessma direct", "iptv tunisie", "chaines tunisiennes streaming", "wataniya direct"],
    h1: "IPTV chaînes tunisiennes",
    lead: "Wataniya, Nessma, El Hiwar El Tounsi et les grandes chaînes tunisiennes en direct depuis la France.",
    intro: [
      "Pour la diaspora tunisienne, retrouver les chaînes nationales permet de suivre l'actualité, les talk-shows et les séries du pays, particulièrement pendant le ramadan où la production télévisée bat son plein.",
      "Nos bouquets réunissent les chaînes publiques et privées tunisiennes, avec le son d'origine et une diffusion stable via internet.",
    ],
    channels: ["Wataniya 1", "Wataniya 2", "Nessma TV", "El Hiwar El Tounsi", "Attessia TV", "Hannibal TV", "Carthage+", "Zitouna TV"],
    categories: ["Information et débats", "Séries et feuilletons", "Talk-shows et divertissement", "Programmes culturels"],
    faq: [
      { q: "Quelles chaînes tunisiennes sont disponibles ?", a: "Les chaînes publiques Wataniya 1 et 2 ainsi que les chaînes privées comme Nessma, El Hiwar et Attessia sont couvertes. La liste est indicative." },
      { q: "Les séries du ramadan sont-elles accessibles ?", a: "Oui, les chaînes tunisiennes diffusant les productions du ramadan sont incluses, en direct comme lors des rediffusions." },
    ],
    related: [
      { label: "Chaînes algériennes", href: "/contenu/chaines/algeriennes" },
      { label: "Chaînes marocaines", href: "/contenu/chaines/marocaines" },
      { label: "Chaînes arabes", href: "/contenu/chaines/arabes" },
    ],
  },
  turques: {
    slug: "turques",
    type: "pays",
    name: "Chaînes turques",
    eyebrow: "Chaînes · Turquie",
    order: 14,
    country: "Turquie",
    metaTitle: "IPTV chaînes turques : TRT, ATV, Show TV, Kanal D en direct",
    metaDescription:
      "IPTV chaînes turques en direct : TRT 1, ATV, Show TV, Kanal D et Star TV, avec les séries turques et le son d'origine, en Full HD depuis la France.",
    keywords: ["iptv chaines turques", "regarder trt direct", "iptv turquie", "chaines turques streaming", "atv turkey direct"],
    h1: "IPTV chaînes turques",
    lead: "TRT, ATV, Show TV, Kanal D et les grandes chaînes turques en direct — séries à succès, information et sport compris.",
    intro: [
      "Les séries turques (dizi) connaissent un succès considérable, en Turquie comme au sein de la diaspora. Suivre ATV, Show TV ou Kanal D en direct permet de ne pas attendre les versions doublées ou sous-titrées.",
      "Nos bouquets réunissent les grandes chaînes généralistes et thématiques turques, avec le son d'origine et une diffusion stable via internet.",
    ],
    channels: ["TRT 1", "ATV", "Show TV", "Kanal D", "Star TV", "NOW (ex-Fox)", "TRT Spor", "beIN Sports Türkiye", "TRT Çocuk"],
    categories: ["Séries turques (dizi)", "Information", "Divertissement", "Sport", "Chaînes pour enfants"],
    faq: [
      { q: "Peut-on regarder les séries turques en direct ?", a: "Oui, les chaînes qui diffusent les grandes séries turques (ATV, Show TV, Kanal D, Star TV) sont incluses, avec le son d'origine." },
      { q: "Le football turc est-il disponible ?", a: "Les chaînes sportives turques comme TRT Spor et beIN Sports Türkiye figurent parmi les chaînes couvertes." },
    ],
    related: [
      { label: "Chaînes arabes", href: "/contenu/chaines/arabes" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
      { label: "Cinéma & séries", href: "/contenu/divertissement/series" },
    ],
  },
  portugaises: {
    slug: "portugaises",
    type: "pays",
    name: "Chaînes portugaises",
    eyebrow: "Chaînes · Portugal",
    order: 15,
    country: "Portugal",
    metaTitle: "IPTV chaînes portugaises : RTP, SIC, TVI en direct",
    metaDescription:
      "IPTV chaînes portugaises en direct : RTP1, RTP2, SIC, TVI et Sport TV, avec l'information, les novelas et le football portugais depuis la France.",
    keywords: ["iptv chaines portugaises", "regarder rtp direct", "iptv portugal", "chaines portugaises streaming", "sic tvi direct"],
    h1: "IPTV chaînes portugaises",
    lead: "RTP, SIC, TVI et les grandes chaînes portugaises en direct — novelas, information et football du championnat portugais.",
    intro: [
      "La communauté portugaise est l'une des plus importantes de France, et l'attachement aux chaînes du pays reste vif : novelas, journaux de la RTP et matchs du championnat portugais font partie du quotidien de nombreux foyers.",
      "Nos bouquets réunissent les grandes chaînes portugaises généralistes et sportives, avec le son d'origine et une diffusion stable via internet.",
    ],
    channels: ["RTP1", "RTP2", "SIC", "TVI", "RTP3", "SIC Notícias", "Sport TV", "Benfica TV", "RTP Madeira", "RTP Açores"],
    categories: ["Novelas et séries", "Information", "Football (Sport TV, Benfica TV)", "Divertissement"],
    faq: [
      { q: "Quelles chaînes portugaises sont disponibles ?", a: "Les chaînes publiques (RTP) et privées (SIC, TVI) ainsi que les chaînes sportives comme Sport TV figurent parmi les chaînes couvertes." },
      { q: "Peut-on suivre le championnat portugais ?", a: "Oui, les chaînes qui diffusent le football portugais, comme Sport TV et Benfica TV, sont incluses dans l'offre." },
    ],
    related: [
      { label: "Chaînes espagnoles", href: "/contenu/chaines/espagnoles" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
      { label: "Football (toutes compétitions)", href: "/contenu/sport/football" },
    ],
  },
  italiennes: {
    slug: "italiennes",
    type: "pays",
    name: "Chaînes italiennes",
    eyebrow: "Chaînes · Italie",
    order: 16,
    country: "Italie",
    metaTitle: "IPTV chaînes italiennes : Rai, Mediaset, Canale 5 en direct",
    metaDescription:
      "IPTV chaînes italiennes en direct : Rai 1, Rai 2, Rai 3, Canale 5, Italia 1 et Rai Sport, avec le son d'origine et la Serie A depuis la France.",
    keywords: ["iptv chaines italiennes", "regarder rai direct", "iptv italie", "chaines italiennes streaming", "canale 5 direct"],
    h1: "IPTV chaînes italiennes",
    lead: "Rai, Mediaset et les grandes chaînes italiennes en direct — information, divertissement et Serie A.",
    intro: [
      "Retrouver les chaînes italiennes permet de suivre l'actualité de la Rai, les grands divertissements de Mediaset et une partie du football italien, en version originale.",
      "Nos bouquets réunissent les chaînes généralistes, d'information et de sport italiennes, avec le son d'origine et une diffusion stable via internet.",
    ],
    channels: ["Rai 1", "Rai 2", "Rai 3", "Canale 5", "Italia 1", "Rete 4", "Rai News 24", "Rai Sport", "Sky TG24"],
    categories: ["Information", "Divertissement et variétés", "Séries et fiction", "Sport (Serie A)"],
    faq: [
      { q: "Quelles chaînes italiennes sont disponibles ?", a: "Les chaînes de la Rai (Rai 1, 2, 3) et de Mediaset (Canale 5, Italia 1, Rete 4) ainsi que Rai Sport figurent parmi les chaînes couvertes." },
      { q: "Peut-on suivre la Serie A en italien ?", a: "Certaines chaînes italiennes permettent de suivre le football national en VO, en complément de la diffusion française." },
    ],
    related: [
      { label: "Serie A", href: "/contenu/sport/serie-a" },
      { label: "Chaînes espagnoles", href: "/contenu/chaines/espagnoles" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
    ],
  },
  espagnoles: {
    slug: "espagnoles",
    type: "pays",
    name: "Chaînes espagnoles",
    eyebrow: "Chaînes · Espagne",
    order: 17,
    country: "Espagne",
    metaTitle: "IPTV chaînes espagnoles : La 1, Antena 3, Telecinco en direct",
    metaDescription:
      "IPTV chaînes espagnoles en direct : La 1, La 2, Antena 3, Telecinco et laSexta, avec le son d'origine et la Liga depuis la France.",
    keywords: ["iptv chaines espagnoles", "regarder antena 3 direct", "iptv espagne", "chaines espagnoles streaming", "telecinco direct"],
    h1: "IPTV chaînes espagnoles",
    lead: "La 1, Antena 3, Telecinco et les grandes chaînes espagnoles en direct — information, divertissement et Liga.",
    intro: [
      "Les chaînes espagnoles séduisent aussi bien la diaspora que les hispanophiles : journaux télévisés, séries, grands divertissements et football de la Liga en version originale.",
      "Nos bouquets réunissent les chaînes généralistes et thématiques espagnoles, avec le son d'origine et une diffusion stable via internet.",
    ],
    channels: ["La 1", "La 2", "Antena 3", "Telecinco", "Cuatro", "laSexta", "Canal Sur", "TV3 (Catalogne)", "Real Madrid TV"],
    categories: ["Information", "Séries et divertissement", "Sport (Liga)", "Chaînes régionales"],
    faq: [
      { q: "Quelles chaînes espagnoles sont disponibles ?", a: "Les chaînes publiques (La 1, La 2) et privées (Antena 3, Telecinco, laSexta) figurent parmi les chaînes couvertes, avec certaines chaînes régionales." },
      { q: "Peut-on suivre la Liga en espagnol ?", a: "Certaines chaînes espagnoles permettent de suivre le football en VO, en complément de la diffusion française sur beIN Sports." },
    ],
    related: [
      { label: "Liga", href: "/contenu/sport/liga" },
      { label: "Chaînes portugaises", href: "/contenu/chaines/portugaises" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
    ],
  },
  belges: {
    slug: "belges",
    type: "pays",
    name: "Chaînes belges",
    eyebrow: "Chaînes · Belgique",
    order: 18,
    country: "Belgique",
    metaTitle: "IPTV chaînes belges : RTBF, RTL-TVI, Tipik en direct",
    metaDescription:
      "IPTV chaînes belges en direct : La Une (RTBF), La Deux, Tipik, RTL-TVI et Club RTL, avec l'information et le divertissement belges depuis la France.",
    keywords: ["iptv chaines belges", "regarder rtbf direct", "iptv belgique", "chaines belges streaming", "rtl tvi direct"],
    h1: "IPTV chaînes belges",
    lead: "La Une, Tipik, RTL-TVI et les grandes chaînes belges francophones en direct — information, séries et divertissement.",
    intro: [
      "Proches culturellement et linguistiquement, les chaînes belges francophones intéressent aussi bien les Belges installés en France que les frontaliers et les curieux de leur programmation.",
      "Nos bouquets réunissent les chaînes de la RTBF et de RTL Belgium, avec une diffusion stable via internet, sans parabole.",
    ],
    channels: ["La Une (RTBF)", "La Deux", "Tipik", "RTL-TVI", "Club RTL", "AB3", "LN24", "VRT (Één, VTM)"],
    categories: ["Information", "Séries et fiction", "Divertissement", "Sport"],
    faq: [
      { q: "Quelles chaînes belges sont disponibles ?", a: "Les chaînes francophones de la RTBF (La Une, La Deux, Tipik) et de RTL Belgium (RTL-TVI, Club RTL) figurent parmi les chaînes couvertes." },
      { q: "Les chaînes flamandes sont-elles incluses ?", a: "Certaines chaînes flamandes (VRT, VTM) peuvent figurer dans les bouquets, en complément des chaînes francophones." },
    ],
    related: [
      { label: "Chaînes suisses", href: "/contenu/chaines/suisses" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
    ],
  },
  suisses: {
    slug: "suisses",
    type: "pays",
    name: "Chaînes suisses",
    eyebrow: "Chaînes · Suisse",
    order: 19,
    country: "Suisse",
    metaTitle: "IPTV chaînes suisses : RTS Un, RTS Deux, RSI en direct",
    metaDescription:
      "IPTV chaînes suisses en direct : RTS Un, RTS Deux et les chaînes romandes, avec l'information et le divertissement suisses depuis la France.",
    keywords: ["iptv chaines suisses", "regarder rts direct", "iptv suisse", "chaines suisses streaming", "rts un direct"],
    h1: "IPTV chaînes suisses",
    lead: "RTS Un, RTS Deux et les chaînes suisses romandes en direct — information, magazines et divertissement.",
    intro: [
      "Les chaînes suisses romandes intéressent les Suisses installés en France, les frontaliers et tous ceux qui suivent l'actualité helvétique via la RTS.",
      "Nos bouquets réunissent les chaînes romandes, avec une diffusion stable via internet, sans matériel spécifique.",
    ],
    channels: ["RTS Un", "RTS Deux", "RSI La 1", "RSI La 2", "SRF 1", "Léman Bleu", "La Télé"],
    categories: ["Information", "Magazines et documentaires", "Divertissement", "Sport"],
    faq: [
      { q: "Quelles chaînes suisses sont disponibles ?", a: "Les chaînes de la RTS (RTS Un, RTS Deux) et d'autres chaînes suisses figurent parmi les chaînes couvertes. La liste est indicative." },
      { q: "Faut-il une parabole ?", a: "Non, la diffusion passe uniquement par votre connexion internet." },
    ],
    related: [
      { label: "Chaînes belges", href: "/contenu/chaines/belges" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
    ],
  },
  africaines: {
    slug: "africaines",
    type: "pays",
    name: "Chaînes africaines",
    eyebrow: "Chaînes · Afrique",
    order: 20,
    metaTitle: "IPTV chaînes africaines : TV5 Afrique, Africable, RTI en direct",
    metaDescription:
      "IPTV chaînes africaines en direct : TV5 Monde Afrique, Africable, RTI, RTS Sénégal et de nombreuses chaînes d'Afrique de l'Ouest et centrale, depuis la France.",
    keywords: ["iptv chaines africaines", "iptv afrique", "regarder rti direct", "chaines africaines streaming", "iptv afrique de l'ouest"],
    h1: "IPTV chaînes africaines",
    lead: "Les grandes chaînes d'Afrique de l'Ouest et centrale en direct — information, musique et divertissement du continent.",
    intro: [
      "La diaspora africaine de France est très diverse, et l'envie de suivre les chaînes nationales — actualité, musique, séries et football — est forte, notamment lors des grands rendez-vous comme la CAN.",
      "Nos bouquets réunissent des chaînes de plusieurs pays africains francophones, avec une diffusion stable via internet, sans parabole.",
    ],
    channels: ["TV5 Monde Afrique", "Africable", "Canal+ Afrique", "RTI (Côte d'Ivoire)", "RTS (Sénégal)", "ORTM (Mali)", "2STV", "Vox Africa", "Novelas TV"],
    categories: ["Information", "Musique et clips", "Séries et novelas", "Sport (football africain)"],
    faq: [
      { q: "Quels pays africains sont couverts ?", a: "Plusieurs pays d'Afrique de l'Ouest et centrale francophone sont représentés (Côte d'Ivoire, Sénégal, Mali et d'autres). La liste est indicative et évolue." },
      { q: "Peut-on suivre le football africain ?", a: "Oui, en complément des chaînes africaines, la Coupe d'Afrique des Nations est diffusée sur les chaînes de sport incluses." },
    ],
    related: [
      { label: "Coupe d'Afrique des Nations", href: "/contenu/sport/can" },
      { label: "Chaînes arabes", href: "/contenu/chaines/arabes" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
    ],
  },
  indiennes: {
    slug: "indiennes",
    type: "pays",
    name: "Chaînes indiennes",
    eyebrow: "Chaînes · Inde",
    order: 21,
    country: "Inde",
    metaTitle: "IPTV chaînes indiennes : Star Plus, Zee TV, Colors en direct",
    metaDescription:
      "IPTV chaînes indiennes en direct : Star Plus, Zee TV, Sony, Colors et Star Sports, avec Bollywood, séries et cricket depuis la France.",
    keywords: ["iptv chaines indiennes", "iptv inde", "regarder zee tv direct", "chaines indiennes streaming", "star plus direct"],
    h1: "IPTV chaînes indiennes",
    lead: "Star Plus, Zee TV, Colors et les grandes chaînes indiennes en direct — séries, Bollywood et cricket.",
    intro: [
      "Les chaînes indiennes couvrent un immense univers de divertissement : séries quotidiennes très suivies, cinéma de Bollywood et cricket, sport roi du sous-continent.",
      "Nos bouquets réunissent les grandes chaînes généralistes, de cinéma et de sport indiennes, dans plusieurs langues, avec une diffusion stable via internet.",
    ],
    channels: ["Star Plus", "Zee TV", "Sony Entertainment", "Colors", "Star Gold", "Zee Cinema", "Sony SAB", "Sun TV", "Star Sports"],
    categories: ["Séries quotidiennes", "Cinéma (Bollywood)", "Divertissement", "Sport (cricket)", "Chaînes régionales"],
    faq: [
      { q: "Quelles chaînes indiennes sont disponibles ?", a: "Les grandes chaînes généralistes (Star Plus, Zee TV, Colors), de cinéma (Star Gold, Zee Cinema) et de sport (Star Sports) figurent parmi les chaînes couvertes." },
      { q: "Le cricket est-il diffusé ?", a: "Oui, les chaînes Star Sports, qui diffusent le cricket international et l'IPL, figurent parmi les chaînes couvertes." },
    ],
    related: [
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
      { label: "Cinéma & séries", href: "/contenu/divertissement/films" },
      { label: "Chaînes anglaises", href: "/contenu/chaines/anglaises" },
    ],
  },
  anglaises: {
    slug: "anglaises",
    type: "pays",
    name: "Chaînes anglaises",
    eyebrow: "Chaînes · Royaume-Uni",
    order: 22,
    country: "Royaume-Uni",
    metaTitle: "IPTV chaînes anglaises : BBC, ITV, Sky en direct",
    metaDescription:
      "IPTV chaînes anglaises en direct : BBC One, BBC Two, ITV, Channel 4 et Sky, en version originale, avec la Premier League depuis la France.",
    keywords: ["iptv chaines anglaises", "iptv uk", "regarder bbc direct", "chaines anglaises streaming", "sky sports direct"],
    h1: "IPTV chaînes anglaises",
    lead: "BBC, ITV, Channel 4 et Sky en direct — la télévision britannique en version originale, Premier League comprise.",
    intro: [
      "Les chaînes britanniques séduisent les anglophones, les expatriés et tous ceux qui veulent regarder séries, documentaires et sport en version originale, sans doublage.",
      "Nos bouquets réunissent les grandes chaînes généralistes et sportives du Royaume-Uni, avec une diffusion stable via internet.",
    ],
    channels: ["BBC One", "BBC Two", "ITV", "Channel 4", "Channel 5", "Sky Sports", "Sky News", "BBC News", "BBC Entertainment"],
    categories: ["Séries et fiction (VO)", "Documentaires", "Information", "Sport (Premier League)"],
    faq: [
      { q: "Peut-on regarder la BBC en direct depuis la France ?", a: "Oui, les chaînes de la BBC et les autres grandes chaînes britanniques figurent parmi les chaînes couvertes, en version originale." },
      { q: "La Premier League est-elle disponible en VO ?", a: "Les chaînes Sky Sports permettent de suivre une partie du football anglais en version originale, en complément de la diffusion française." },
    ],
    related: [
      { label: "Premier League", href: "/contenu/sport/premier-league" },
      { label: "Chaînes américaines", href: "/contenu/chaines/americaines" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
    ],
  },
  americaines: {
    slug: "americaines",
    type: "pays",
    name: "Chaînes américaines",
    eyebrow: "Chaînes · États-Unis",
    order: 23,
    country: "États-Unis",
    metaTitle: "IPTV chaînes américaines : ABC, NBC, ESPN, HBO en direct",
    metaDescription:
      "IPTV chaînes américaines en direct : ABC, NBC, CBS, FOX, ESPN, CNN et HBO, en version originale, avec la NBA et la NFL depuis la France.",
    keywords: ["iptv chaines americaines", "iptv usa", "regarder espn direct", "chaines americaines streaming", "hbo direct"],
    h1: "IPTV chaînes américaines",
    lead: "ABC, NBC, ESPN, HBO et les grandes chaînes américaines en direct — séries, information et sport US en version originale.",
    intro: [
      "Les chaînes américaines attirent les amateurs de séries en VO, d'information internationale et de sport US (NBA, NFL), diffusé souvent en pleine nuit heure française.",
      "Nos bouquets réunissent les grands réseaux et chaînes câblées américaines, avec une diffusion stable via internet.",
    ],
    channels: ["ABC", "NBC", "CBS", "FOX", "ESPN", "CNN", "HBO", "Cartoon Network", "Fox News"],
    categories: ["Séries et cinéma (VO)", "Information", "Sport (NBA, NFL)", "Divertissement"],
    faq: [
      { q: "Quelles chaînes américaines sont disponibles ?", a: "Les grands réseaux (ABC, NBC, CBS, FOX) et des chaînes câblées (ESPN, CNN, HBO) figurent parmi les chaînes couvertes, en version originale." },
      { q: "Peut-on suivre la NBA et la NFL en VO ?", a: "Les chaînes sportives américaines comme ESPN permettent de suivre une partie du sport US en VO, en complément de la diffusion française." },
    ],
    related: [
      { label: "NBA", href: "/contenu/sport/nba" },
      { label: "NFL", href: "/contenu/sport/nfl" },
      { label: "Chaînes anglaises", href: "/contenu/chaines/anglaises" },
    ],
  },
  allemandes: {
    slug: "allemandes",
    type: "pays",
    name: "Chaînes allemandes",
    eyebrow: "Chaînes · Allemagne",
    order: 24,
    country: "Allemagne",
    metaTitle: "IPTV chaînes allemandes : ARD, ZDF, RTL, ProSieben en direct",
    metaDescription:
      "IPTV chaînes allemandes en direct : ARD (Das Erste), ZDF, RTL, ProSieben et SAT.1, avec l'information et le divertissement allemands depuis la France.",
    keywords: ["iptv chaines allemandes", "iptv allemagne", "regarder ard direct", "chaines allemandes streaming", "zdf direct"],
    h1: "IPTV chaînes allemandes",
    lead: "ARD, ZDF, RTL et les grandes chaînes allemandes en direct — information, divertissement et Bundesliga en VO.",
    intro: [
      "Les chaînes allemandes intéressent la diaspora, les frontaliers et les germanophiles : journaux d'ARD et ZDF, divertissements de RTL et ProSieben, football de Bundesliga.",
      "Nos bouquets réunissent les grandes chaînes publiques et privées allemandes, avec une diffusion stable via internet.",
    ],
    channels: ["ARD (Das Erste)", "ZDF", "RTL", "ProSieben", "SAT.1", "VOX", "Sport1", "Kabel Eins", "ZDFneo"],
    categories: ["Information", "Séries et divertissement", "Sport (Bundesliga)", "Documentaires"],
    faq: [
      { q: "Quelles chaînes allemandes sont disponibles ?", a: "Les chaînes publiques (ARD, ZDF) et privées (RTL, ProSieben, SAT.1) figurent parmi les chaînes couvertes." },
      { q: "Peut-on suivre la Bundesliga en allemand ?", a: "Certaines chaînes allemandes permettent de suivre le football en VO, en complément de la diffusion française sur beIN Sports." },
    ],
    related: [
      { label: "Bundesliga", href: "/contenu/sport/bundesliga" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
      { label: "Chaînes belges", href: "/contenu/chaines/belges" },
    ],
  },
  grecques: {
    slug: "grecques",
    type: "pays",
    name: "Chaînes grecques",
    eyebrow: "Chaînes · Grèce",
    order: 25,
    country: "Grèce",
    metaTitle: "IPTV chaînes grecques : ERT, Mega, ANT1, Alpha en direct",
    metaDescription:
      "IPTV chaînes grecques en direct : ERT1, ERT2, Mega Channel, ANT1 et Alpha TV, avec l'information et le divertissement grecs depuis la France.",
    keywords: ["iptv chaines grecques", "iptv grece", "regarder ert direct", "chaines grecques streaming", "ant1 direct"],
    h1: "IPTV chaînes grecques",
    lead: "ERT, Mega, ANT1 et les grandes chaînes grecques en direct — information, séries et divertissement.",
    intro: [
      "Pour la diaspora grecque, retrouver l'ERT publique et les grandes chaînes privées permet de suivre l'actualité, les séries et les émissions du pays.",
      "Nos bouquets réunissent les principales chaînes grecques, avec le son d'origine et une diffusion stable via internet.",
    ],
    channels: ["ERT1", "ERT2", "ERT3", "Mega Channel", "ANT1", "Alpha TV", "Skai TV", "Star Channel"],
    categories: ["Information", "Séries et feuilletons", "Divertissement", "Sport"],
    faq: [
      { q: "Quelles chaînes grecques sont disponibles ?", a: "Les chaînes publiques (ERT) et privées (Mega, ANT1, Alpha, Skai) figurent parmi les chaînes couvertes. La liste est indicative." },
      { q: "Faut-il une parabole ?", a: "Non, la diffusion passe uniquement par votre connexion internet." },
    ],
    related: [
      { label: "Chaînes italiennes", href: "/contenu/chaines/italiennes" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
    ],
  },
  polonaises: {
    slug: "polonaises",
    type: "pays",
    name: "Chaînes polonaises",
    eyebrow: "Chaînes · Pologne",
    order: 26,
    country: "Pologne",
    metaTitle: "IPTV chaînes polonaises : TVP, Polsat, TVN en direct",
    metaDescription:
      "IPTV chaînes polonaises en direct : TVP1, TVP2, Polsat, TVN et TVP Sport, avec l'information et le divertissement polonais depuis la France.",
    keywords: ["iptv chaines polonaises", "iptv pologne", "regarder tvp direct", "chaines polonaises streaming", "polsat direct"],
    h1: "IPTV chaînes polonaises",
    lead: "TVP, Polsat, TVN et les grandes chaînes polonaises en direct — information, séries et sport.",
    intro: [
      "La communauté polonaise de France reste attachée aux chaînes nationales : journaux de la TVP, séries, divertissements de Polsat et TVN, et sport.",
      "Nos bouquets réunissent les principales chaînes polonaises, avec le son d'origine et une diffusion stable via internet.",
    ],
    channels: ["TVP1", "TVP2", "Polsat", "TVN", "TVP Info", "TVP Sport", "Polsat Sport", "TVN24"],
    categories: ["Information", "Séries et divertissement", "Sport", "Chaînes jeunesse"],
    faq: [
      { q: "Quelles chaînes polonaises sont disponibles ?", a: "Les chaînes publiques (TVP) et privées (Polsat, TVN) figurent parmi les chaînes couvertes. La liste est indicative." },
      { q: "Le sport polonais est-il diffusé ?", a: "Les chaînes sportives comme TVP Sport et Polsat Sport figurent parmi les chaînes couvertes." },
    ],
    related: [
      { label: "Chaînes allemandes", href: "/contenu/chaines/allemandes" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
    ],
  },
  neerlandaises: {
    slug: "neerlandaises",
    type: "pays",
    name: "Chaînes néerlandaises",
    eyebrow: "Chaînes · Pays-Bas",
    order: 27,
    country: "Pays-Bas",
    metaTitle: "IPTV chaînes néerlandaises : NPO, RTL 4, SBS6 en direct",
    metaDescription:
      "IPTV chaînes néerlandaises en direct : NPO 1, NPO 2, NPO 3, RTL 4 et SBS6, avec l'information et le divertissement néerlandais depuis la France.",
    keywords: ["iptv chaines neerlandaises", "iptv pays-bas", "regarder npo direct", "chaines hollandaises streaming", "rtl 4 direct"],
    h1: "IPTV chaînes néerlandaises",
    lead: "NPO, RTL 4 et les grandes chaînes néerlandaises en direct — information, séries et divertissement.",
    intro: [
      "Les chaînes néerlandaises intéressent la diaspora, les frontaliers et les néerlandophones : journaux de la NPO, divertissements de RTL 4 et SBS6, et sport.",
      "Nos bouquets réunissent les principales chaînes néerlandaises, avec le son d'origine et une diffusion stable via internet.",
    ],
    channels: ["NPO 1", "NPO 2", "NPO 3", "RTL 4", "RTL 5", "SBS6", "Veronica", "Ziggo Sport"],
    categories: ["Information", "Séries et divertissement", "Sport", "Chaînes jeunesse"],
    faq: [
      { q: "Quelles chaînes néerlandaises sont disponibles ?", a: "Les chaînes publiques (NPO 1, 2, 3) et privées (RTL 4, SBS6) figurent parmi les chaînes couvertes. La liste est indicative." },
      { q: "Faut-il une parabole ?", a: "Non, la diffusion passe uniquement par votre connexion internet." },
    ],
    related: [
      { label: "Chaînes belges", href: "/contenu/chaines/belges" },
      { label: "Chaînes allemandes", href: "/contenu/chaines/allemandes" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
    ],
  },
  roumaines: {
    slug: "roumaines",
    type: "pays",
    name: "Chaînes roumaines",
    eyebrow: "Chaînes · Roumanie",
    order: 28,
    country: "Roumanie",
    metaTitle: "IPTV chaînes roumaines : TVR, Pro TV, Antena 1 en direct",
    metaDescription:
      "IPTV chaînes roumaines en direct : TVR1, TVR2, Pro TV, Antena 1 et Digi24, avec l'information et le divertissement roumains depuis la France.",
    keywords: ["iptv chaines roumaines", "iptv roumanie", "regarder pro tv direct", "chaines roumaines streaming", "antena 1 direct"],
    h1: "IPTV chaînes roumaines",
    lead: "TVR, Pro TV, Antena 1 et les grandes chaînes roumaines en direct — information, séries et divertissement.",
    intro: [
      "La diaspora roumaine de France est importante, et l'attachement aux chaînes nationales reste fort : journaux, séries, divertissements de Pro TV et Antena 1.",
      "Nos bouquets réunissent les principales chaînes roumaines, avec le son d'origine et une diffusion stable via internet.",
    ],
    channels: ["TVR1", "TVR2", "Pro TV", "Antena 1", "Kanal D România", "Digi24", "Pro Arena", "Antena 3 CNN"],
    categories: ["Information", "Séries et feuilletons", "Divertissement", "Sport"],
    faq: [
      { q: "Quelles chaînes roumaines sont disponibles ?", a: "Les chaînes publiques (TVR) et privées (Pro TV, Antena 1, Kanal D) figurent parmi les chaînes couvertes. La liste est indicative." },
      { q: "Faut-il une parabole ?", a: "Non, la diffusion passe uniquement par votre connexion internet." },
    ],
    related: [
      { label: "Chaînes italiennes", href: "/contenu/chaines/italiennes" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
    ],
  },

  /* --------------------------------------------------------------------- THEMES */
  cinema: {
    slug: "cinema",
    type: "theme",
    name: "Chaînes cinéma",
    eyebrow: "Chaînes · Thématique",
    order: 40,
    metaTitle: "IPTV chaînes cinéma : Canal+ Cinéma, Ciné+, TCM en direct",
    metaDescription:
      "IPTV chaînes cinéma en direct : Canal+ Cinéma, Ciné+, TCM, Warner TV et Paramount Network, films récents et classiques en Full HD et 4K.",
    keywords: ["iptv chaines cinema", "regarder cine+ direct", "chaines cinema streaming", "iptv films chaines", "canal cinema direct"],
    h1: "IPTV chaînes cinéma",
    lead: "Canal+ Cinéma, Ciné+, TCM et les grandes chaînes de cinéma en direct — films récents, classiques et sagas cultes.",
    intro: [
      "Au-delà de la vidéothèque à la demande, les chaînes de cinéma proposent une programmation éditorialisée : avant-premières, cycles thématiques et grands classiques, souvent en version multilingue.",
      "Nos bouquets réunissent les grandes chaînes de cinéma françaises et internationales, en complément des 180 000+ films et séries disponibles à la demande.",
    ],
    channels: ["Canal+ Cinéma", "Ciné+ Premier", "Ciné+ Frisson", "Ciné+ Classic", "TCM Cinéma", "Warner TV", "Paramount Network", "Syfy", "Action"],
    categories: ["Films récents", "Classiques et patrimoine", "Sagas et cycles", "Cinéma international"],
    faq: [
      { q: "Quelle différence avec la VOD ?", a: "Les chaînes de cinéma proposent une programmation en direct et éditorialisée, tandis que la vidéothèque permet de choisir un film à la demande. Les deux sont accessibles dans l'offre." },
      { q: "Les films sont-ils en VF et VOST ?", a: "De nombreuses chaînes proposent plusieurs pistes audio et des sous-titres selon les films." },
    ],
    related: [
      { label: "Films & VOD", href: "/contenu/divertissement/films" },
      { label: "Séries", href: "/contenu/divertissement/series" },
      { label: "Chaînes documentaires", href: "/contenu/chaines/documentaires" },
    ],
  },
  enfants: {
    slug: "enfants",
    type: "theme",
    name: "Chaînes jeunesse",
    eyebrow: "Chaînes · Thématique",
    order: 41,
    metaTitle: "IPTV chaînes enfants : Gulli, Disney, Cartoon Network en direct",
    metaDescription:
      "IPTV chaînes jeunesse en direct : Gulli, TiJi, Piwi+, Disney Channel, Cartoon Network et Nickelodeon, avec le contrôle parental, en Full HD.",
    keywords: ["iptv chaines enfants", "chaines jeunesse iptv", "regarder gulli direct", "dessins animes iptv", "disney channel direct"],
    h1: "IPTV chaînes jeunesse",
    lead: "Gulli, Disney Channel, Cartoon Network et les grandes chaînes pour enfants en direct — dessins animés et programmes jeunesse.",
    intro: [
      "Les chaînes jeunesse rassemblent dessins animés, séries et programmes éducatifs pour toutes les tranches d'âge, des tout-petits aux préados. Un contrôle parental permet d'encadrer l'accès.",
      "Nos bouquets réunissent les grandes chaînes jeunesse françaises et internationales, avec une diffusion stable et la possibilité de limiter l'accès à certains contenus.",
    ],
    channels: ["Gulli", "TiJi", "Canal J", "Piwi+", "Disney Channel", "Cartoon Network", "Nickelodeon", "Boomerang", "Boing"],
    categories: ["Dessins animés", "Séries jeunesse", "Programmes pour tout-petits", "Contenus éducatifs"],
    faq: [
      { q: "Y a-t-il un contrôle parental ?", a: "Oui, la plupart des lecteurs IPTV proposent un contrôle parental permettant de restreindre l'accès à certaines chaînes ou contenus." },
      { q: "Quelles chaînes jeunesse sont disponibles ?", a: "Les grandes chaînes françaises (Gulli, TiJi, Piwi+) et internationales (Disney Channel, Cartoon Network, Nickelodeon) figurent parmi les chaînes couvertes." },
    ],
    related: [
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
      { label: "Films & VOD", href: "/contenu/divertissement/films" },
      { label: "Chaînes cinéma", href: "/contenu/chaines/cinema" },
    ],
  },
  documentaires: {
    slug: "documentaires",
    type: "theme",
    name: "Chaînes documentaires",
    eyebrow: "Chaînes · Thématique",
    order: 42,
    metaTitle: "IPTV chaînes documentaires : National Geographic, Discovery, RMC Découverte",
    metaDescription:
      "IPTV chaînes documentaires en direct : National Geographic, Discovery, Planète+, RMC Découverte et Histoire TV, nature, sciences et histoire en Full HD.",
    keywords: ["iptv chaines documentaires", "regarder national geographic direct", "chaines documentaires streaming", "discovery channel direct", "rmc decouverte direct"],
    h1: "IPTV chaînes documentaires",
    lead: "National Geographic, Discovery, Planète+ et les grandes chaînes de documentaires en direct — nature, sciences, histoire et société.",
    intro: [
      "Les chaînes documentaires offrent une programmation riche pour les curieux : nature, sciences, histoire, exploration et grands reportages, avec des productions souvent spectaculaires en haute définition.",
      "Nos bouquets réunissent les grandes chaînes de découverte françaises et internationales, en direct et en Full HD.",
    ],
    channels: ["National Geographic", "Nat Geo Wild", "Discovery Channel", "Planète+", "RMC Découverte", "Histoire TV", "Science & Vie TV", "Ushuaïa TV", "Animaux"],
    categories: ["Nature et animaux", "Sciences et technologies", "Histoire et civilisations", "Grands reportages"],
    faq: [
      { q: "Quelles chaînes documentaires sont disponibles ?", a: "Les grandes chaînes de découverte (National Geographic, Discovery, Planète+, RMC Découverte, Histoire TV) figurent parmi les chaînes couvertes." },
      { q: "Les documentaires sont-ils en HD ?", a: "Oui, la plupart des chaînes documentaires sont diffusées en Full HD, certaines productions récentes étant proposées en 4K." },
    ],
    related: [
      { label: "Chaînes cinéma", href: "/contenu/chaines/cinema" },
      { label: "Chaînes info", href: "/contenu/chaines/info" },
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
    ],
  },
  info: {
    slug: "info",
    type: "theme",
    name: "Chaînes d'information",
    eyebrow: "Chaînes · Thématique",
    order: 43,
    metaTitle: "IPTV chaînes info : BFM TV, CNews, LCI, franceinfo en direct",
    metaDescription:
      "IPTV chaînes d'information en direct : BFM TV, CNews, LCI, franceinfo, Euronews et France 24, l'actualité en continu 24h/24 en Full HD.",
    keywords: ["iptv chaines info", "regarder bfm tv direct", "chaines information streaming", "cnews direct", "franceinfo direct"],
    h1: "IPTV chaînes d'information",
    lead: "BFM TV, CNews, LCI, franceinfo et les chaînes d'info en continu en direct — actualité française et internationale 24h/24.",
    intro: [
      "Les chaînes d'information en continu permettent de suivre l'actualité en temps réel, des grands événements aux débats de société, en France comme à l'international.",
      "Nos bouquets réunissent les chaînes d'info françaises et internationales, avec une diffusion stable en Full HD, à toute heure.",
    ],
    channels: ["BFM TV", "CNews", "LCI", "franceinfo", "Euronews", "France 24", "CNN International", "Al Jazeera English"],
    categories: ["Actualité en continu", "Économie et politique", "International", "Débats et analyses"],
    faq: [
      { q: "Quelles chaînes d'info sont disponibles ?", a: "Les grandes chaînes françaises (BFM TV, CNews, LCI, franceinfo) et internationales (Euronews, France 24, CNN) figurent parmi les chaînes couvertes." },
      { q: "Peut-on suivre l'actualité internationale ?", a: "Oui, des chaînes internationales comme CNN, France 24 et Al Jazeera permettent de suivre l'actualité mondiale en continu." },
    ],
    related: [
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
      { label: "Chaînes documentaires", href: "/contenu/chaines/documentaires" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
    ],
  },
  musique: {
    slug: "musique",
    type: "theme",
    name: "Chaînes musicales",
    eyebrow: "Chaînes · Thématique",
    order: 44,
    metaTitle: "IPTV chaînes musicales : MTV, Trace, NRJ Hits, Mezzo en direct",
    metaDescription:
      "IPTV chaînes musicales en direct : MTV, MCM, Trace Urban, NRJ Hits, M6 Music et Mezzo, clips et concerts de tous les styles en Full HD.",
    keywords: ["iptv chaines musicales", "regarder mtv direct", "chaines musique streaming", "trace urban direct", "nrj hits direct"],
    h1: "IPTV chaînes musicales",
    lead: "MTV, Trace, NRJ Hits, Mezzo et les grandes chaînes musicales en direct — clips, concerts et tous les styles.",
    intro: [
      "Les chaînes musicales couvrent tous les genres : pop et hits du moment, musiques urbaines, latino, classique et jazz, avec clips, concerts et sessions live en continu.",
      "Nos bouquets réunissent les grandes chaînes musicales françaises et internationales, en direct et en Full HD.",
    ],
    channels: ["MTV", "MCM", "Trace Urban", "NRJ Hits", "M6 Music", "Melody", "Mezzo", "Clubbing TV", "Trace Latina"],
    categories: ["Hits et pop", "Musiques urbaines", "Latino et world", "Classique et jazz"],
    faq: [
      { q: "Quelles chaînes musicales sont disponibles ?", a: "Les grandes chaînes de clips et de concerts (MTV, Trace, NRJ Hits, MCM, Mezzo) figurent parmi les chaînes couvertes, tous styles confondus." },
      { q: "Y a-t-il des chaînes de musique classique ?", a: "Oui, des chaînes comme Mezzo, dédiées au classique et au jazz, figurent parmi les chaînes couvertes." },
    ],
    related: [
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
      { label: "Chaînes cinéma", href: "/contenu/chaines/cinema" },
      { label: "Chaînes internationales", href: "/contenu/chaines/internationales" },
    ],
  },
};

export const CHAINES_SLUGS = Object.keys(CHAINES);

export const CHAINES_BY_TYPE = (type: ChaineType): ChaineEntry[] =>
  Object.values(CHAINES)
    .filter((e) => e.type === type)
    .sort((a, b) => a.order - b.order);
