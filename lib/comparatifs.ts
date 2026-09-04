/** Comparison content for the /comparatifs cluster. Each entry is distinct. */

export type Comparatif = {
  slug: string;
  competitor: string;
  order: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  h1: string;
  lead: string;
  intro: string[];
  rows: { label: string; ours: string; theirs: string }[];
  verdict: string;
};

export const COMPARATIFS: Record<string, Comparatif> = {
  "vs-canal-plus": {
    slug: "vs-canal-plus",
    competitor: "Canal+",
    order: 1,
    metaTitle: "IPTV vs Canal+ : quel choix en 2026 ?",
    metaDescription:
      "IPTV premium ou Canal+ ? Comparaison honnête du prix, du contenu, du sport, de la flexibilité et de l'engagement pour choisir en connaissance de cause.",
    keywords: ["iptv vs canal plus", "iptv france canal plus", "alternative canal plus"],
    h1: "IPTV vs Canal+",
    lead: "Canal+ reste une référence, notamment pour le cinéma et le sport premium. Voici comment un service IPTV se positionne face à lui.",
    intro: [
      "Canal+ propose des contenus exclusifs (cinéma, certaines compétitions) via des droits de diffusion négociés. Son offre est complète mais souvent onéreuse et engageante.",
      "Un service IPTV mise sur l'étendue du catalogue, la flexibilité et le prix. Le bon choix dépend surtout de votre attachement aux exclusivités de Canal+.",
    ],
    rows: [
      { label: "Prix mensuel", ours: "À partir de 5,92 €", theirs: "Souvent 20–40 €+" },
      { label: "Engagement", ours: "Aucun", theirs: "12–24 mois fréquent" },
      { label: "Chaînes en direct", ours: "50 000+", theirs: "Bouquet défini" },
      { label: "Films & séries", ours: "180 000+ à la demande", theirs: "Catalogue + exclusivités" },
      { label: "Multi-appareils", ours: "Oui", theirs: "Selon formule" },
    ],
    verdict:
      "Si vous tenez aux exclusivités Canal+, elles restent son atout. Pour l'étendue du contenu, la flexibilité et le prix, l'IPTV est difficile à battre.",
  },
  "vs-molotov": {
    slug: "vs-molotov",
    competitor: "Molotov",
    order: 2,
    metaTitle: "IPTV vs Molotov : comparaison complète",
    metaDescription:
      "Molotov ou IPTV premium ? Comparaison du nombre de chaînes, de la VOD, du sport et du prix pour choisir la meilleure solution de streaming TV.",
    keywords: ["iptv vs molotov", "alternative molotov", "molotov ou iptv"],
    h1: "IPTV vs Molotov",
    lead: "Molotov agrège la TNT française avec une offre gratuite et des options payantes. Voici comment il se compare à un service IPTV premium.",
    intro: [
      "Molotov est une application française populaire qui donne accès à la TNT et à du replay, avec un modèle freemium.",
      "L'IPTV va bien au-delà de la TNT : bouquets internationaux, sport élargi et immense vidéothèque. La comparaison dépend de vos besoins.",
    ],
    rows: [
      { label: "Chaînes", ours: "50 000+ (dont internationales)", theirs: "TNT + options" },
      { label: "VOD", ours: "180 000+ titres", theirs: "Replay + locations" },
      { label: "Sport premium", ours: "Large", theirs: "Limité / payant" },
      { label: "Prix", ours: "Dès 5,92 €/mois", theirs: "Gratuit à ~10 €/mois" },
    ],
    verdict:
      "Molotov est excellent et gratuit pour la TNT française. Pour le sport, l'international et une vraie vidéothèque, l'IPTV est plus complet.",
  },
  "vs-netflix": {
    slug: "vs-netflix",
    competitor: "Netflix",
    order: 3,
    metaTitle: "IPTV vs Netflix : direct ou streaming à la demande ?",
    metaDescription:
      "IPTV et Netflix ne jouent pas dans la même catégorie. Comparaison du direct, de la VOD, du sport et du prix pour comprendre lequel répond à vos besoins.",
    keywords: ["iptv vs netflix", "netflix ou iptv", "alternative netflix"],
    h1: "IPTV vs Netflix",
    lead: "Netflix est un service de VOD sur abonnement ; l'IPTV ajoute le direct et le sport. Les deux sont souvent complémentaires plutôt que concurrents.",
    intro: [
      "Netflix produit et diffuse films et séries à la demande, sans télévision en direct ni sport.",
      "L'IPTV apporte le direct, le sport et une vidéothèque très large. Beaucoup d'utilisateurs conservent Netflix pour ses productions originales et ajoutent l'IPTV pour le reste.",
    ],
    rows: [
      { label: "Télévision en direct", ours: "Oui, 50 000+ chaînes", theirs: "Non" },
      { label: "Sport en direct", ours: "Oui", theirs: "Non" },
      { label: "VOD", ours: "180 000+ titres", theirs: "Catalogue + originaux" },
      { label: "Productions originales", ours: "Non", theirs: "Oui" },
    ],
    verdict:
      "Netflix brille pour ses créations originales. L'IPTV couvre le direct et le sport que Netflix ne propose pas : les deux se complètent bien.",
  },
  "vs-freebox-tv": {
    slug: "vs-freebox-tv",
    competitor: "Freebox TV",
    order: 4,
    metaTitle: "IPTV vs Freebox TV : quelle solution choisir ?",
    metaDescription:
      "Freebox TV ou IPTV premium ? Comparaison du contenu, de la flexibilité, du matériel et du prix pour votre télévision en France.",
    keywords: ["iptv vs freebox", "freebox tv ou iptv", "alternative freebox tv"],
    h1: "IPTV vs Freebox TV",
    lead: "La Freebox intègre une offre TV liée à l'abonnement internet. Voici comment un service IPTV indépendant se compare.",
    intro: [
      "Freebox TV est incluse avec l'abonnement Free et repose sur le boîtier de l'opérateur.",
      "L'IPTV est indépendant de votre fournisseur d'accès : il fonctionne sur vos appareils, partout, sans être lié à une box opérateur.",
    ],
    rows: [
      { label: "Indépendance FAI", ours: "Totale", theirs: "Liée à l'abonnement Free" },
      { label: "Portabilité", ours: "Partout, multi-appareils", theirs: "Principalement à domicile" },
      { label: "Chaînes", ours: "50 000+", theirs: "Bouquet Freebox" },
      { label: "Prix", ours: "Dès 5,92 €/mois", theirs: "Inclus dans l'abonnement" },
    ],
    verdict:
      "Si vous êtes déjà chez Free, la Freebox TV est incluse. Pour la portabilité, le multi-appareils et l'étendue du contenu, l'IPTV est plus souple.",
  },
  "vs-dtt": {
    slug: "vs-dtt",
    competitor: "TNT",
    order: 5,
    metaTitle: "IPTV vs TNT : faut-il encore l'antenne ?",
    metaDescription:
      "IPTV ou TNT gratuite ? Comparaison du nombre de chaînes, de la qualité, de la VOD et de la flexibilité pour votre télévision au quotidien.",
    keywords: ["iptv vs tnt", "iptv ou tnt", "alternative tnt"],
    h1: "IPTV vs TNT",
    lead: "La TNT est gratuite mais limitée à une trentaine de chaînes. L'IPTV élargit considérablement le choix. Comparaison utile.",
    intro: [
      "La TNT diffuse gratuitement les chaînes nationales par voie hertzienne, sans internet.",
      "L'IPTV nécessite une connexion mais démultiplie l'offre : international, sport, VOD, replay. Les deux peuvent coexister.",
    ],
    rows: [
      { label: "Coût", ours: "Abonnement dès 5,92 €", theirs: "Gratuit" },
      { label: "Nombre de chaînes", ours: "50 000+", theirs: "~30" },
      { label: "VOD & replay", ours: "Oui, très large", theirs: "Non / limité" },
      { label: "Dépend d'internet", ours: "Oui", theirs: "Non" },
    ],
    verdict:
      "La TNT reste imbattable côté prix pour l'essentiel. Dès que vous voulez du sport, de l'international ou de la VOD, l'IPTV prend l'avantage.",
  },
  "vs-orange-tv": {
    slug: "vs-orange-tv",
    competitor: "Orange TV",
    order: 6,
    metaTitle: "IPTV vs Orange TV : comparaison 2026",
    metaDescription:
      "Orange TV ou IPTV premium ? Comparaison du contenu, de la flexibilité, du matériel et du prix pour votre télévision en France.",
    keywords: ["iptv vs orange", "orange tv ou iptv", "alternative orange tv"],
    h1: "IPTV vs Orange TV",
    lead: "Orange TV est liée à l'abonnement internet Orange. Voici comment un service IPTV indépendant se compare.",
    intro: [
      "Orange TV accompagne la Livebox et son offre dépend de votre forfait Orange.",
      "L'IPTV est indépendant de l'opérateur : il fonctionne sur vos appareils, partout, sans être lié à une box.",
    ],
    rows: [
      { label: "Indépendance FAI", ours: "Totale", theirs: "Liée à l'abonnement Orange" },
      { label: "Portabilité", ours: "Partout, multi-appareils", theirs: "Principalement à domicile" },
      { label: "Chaînes", ours: "50 000+", theirs: "Bouquet Orange" },
      { label: "Prix", ours: "Dès 5,92 €/mois", theirs: "Inclus / options payantes" },
    ],
    verdict:
      "Chez Orange, la TV est incluse. Pour la portabilité, le multi-appareils et l'étendue du contenu, l'IPTV offre plus de liberté.",
  },
  "vs-disney-plus": {
    slug: "vs-disney-plus",
    competitor: "Disney+",
    order: 7,
    metaTitle: "IPTV vs Disney+ : direct ou catalogue à la demande ?",
    metaDescription:
      "IPTV et Disney+ répondent à des besoins différents. Comparaison du direct, du sport, de la VOD et des exclusivités pour choisir — ou combiner.",
    keywords: ["iptv vs disney", "disney plus ou iptv", "alternative disney+"],
    h1: "IPTV vs Disney+",
    lead: "Disney+ est un service de VOD à catalogue ; l'IPTV ajoute le direct et le sport. Ils sont souvent complémentaires.",
    intro: [
      "Disney+ diffuse films et séries à la demande, dont les exclusivités Disney, Marvel, Star Wars et Pixar, sans direct ni sport.",
      "L'IPTV apporte la télévision en direct, le sport et une très large vidéothèque. Beaucoup gardent Disney+ pour ses exclusivités et ajoutent l'IPTV pour le reste.",
    ],
    rows: [
      { label: "Télévision en direct", ours: "Oui, 50 000+ chaînes", theirs: "Non" },
      { label: "Sport en direct", ours: "Oui", theirs: "Non" },
      { label: "VOD", ours: "180 000+ titres", theirs: "Catalogue Disney" },
      { label: "Exclusivités Disney/Marvel", ours: "Non", theirs: "Oui" },
    ],
    verdict:
      "Disney+ est incontournable pour ses univers exclusifs. L'IPTV couvre le direct et le sport qu'il ne propose pas : les deux se complètent.",
  },
  "vs-satellite": {
    slug: "vs-satellite",
    competitor: "Satellite",
    order: 8,
    metaTitle: "IPTV vs satellite (parabole) : que choisir ?",
    metaDescription:
      "IPTV ou télévision par satellite ? Comparaison de l'installation, du nombre de chaînes, de la VOD et de la flexibilité pour votre foyer.",
    keywords: ["iptv vs satellite", "iptv ou parabole", "alternative satellite"],
    h1: "IPTV vs satellite",
    lead: "Le satellite ne dépend pas d'internet mais impose une parabole et un matériel dédié. L'IPTV mise sur la souplesse. Comparaison.",
    intro: [
      "La télévision par satellite capte les chaînes via une parabole, sans connexion internet, mais avec une installation matérielle.",
      "L'IPTV se passe de parabole et fonctionne sur vos appareils connectés, avec une vidéothèque et du replay que le satellite n'offre pas.",
    ],
    rows: [
      { label: "Installation", ours: "Aucune parabole", theirs: "Parabole + décodeur" },
      { label: "Dépend d'internet", ours: "Oui", theirs: "Non" },
      { label: "VOD & replay", ours: "Oui, très large", theirs: "Limité" },
      { label: "Portabilité", ours: "Multi-appareils, partout", theirs: "Poste relié à la parabole" },
    ],
    verdict:
      "Le satellite reste pertinent sans bonne connexion internet. Avec une connexion correcte, l'IPTV est plus souple et plus riche.",
  },
  "vs-sfr-tv": {
    slug: "vs-sfr-tv",
    competitor: "SFR TV",
    order: 9,
    metaTitle: "IPTV vs SFR TV : quel choix pour la télévision ?",
    metaDescription:
      "IPTV premium ou SFR TV ? Comparaison du nombre de chaînes, des appareils compatibles, de la flexibilité et de l'engagement pour bien choisir sa télévision.",
    keywords: ["iptv vs sfr tv", "alternative sfr tv", "iptv ou box sfr", "iptv sfr"],
    h1: "IPTV vs SFR TV",
    lead: "SFR TV est le service de télévision inclus avec les box SFR. Voici comment un service IPTV se positionne face à lui.",
    intro: [
      "SFR TV accompagne un abonnement box SFR : le bouquet dépend de votre offre, et l'accès est lié à votre connexion et au matériel de l'opérateur.",
      "Un service IPTV est indépendant de votre fournisseur d'accès : il fonctionne sur vos propres appareils, avec un catalogue plus large et sans engagement lié à une box.",
    ],
    rows: [
      { label: "Rattachement", ours: "Indépendant de l'opérateur", theirs: "Lié à la box SFR" },
      { label: "Chaînes en direct", ours: "50 000+ (dont internationales)", theirs: "Bouquet selon l'offre box" },
      { label: "Films & séries", ours: "180 000+ à la demande", theirs: "VOD selon options" },
      { label: "Appareils", ours: "Smart TV, box, mobile, PC…", theirs: "Décodeur / app SFR" },
      { label: "Engagement", ours: "Aucun", theirs: "Selon l'offre box" },
      { label: "Prix", ours: "Dès 5,92 €/mois", theirs: "Inclus/en option dans la box" },
    ],
    verdict:
      "Si vous tenez à l'intégration avec la box SFR, SFR TV suffit. Pour l'étendue du catalogue, l'indépendance et le multi-appareils, l'IPTV est plus complète.",
  },
  "vs-bbox": {
    slug: "vs-bbox",
    competitor: "Bbox TV",
    order: 10,
    metaTitle: "IPTV vs Bbox TV (Bouygues) : comparaison complète",
    metaDescription:
      "IPTV premium ou Bbox TV de Bouygues ? Comparaison des chaînes, de la compatibilité, de la souplesse et de l'engagement pour choisir la meilleure solution TV.",
    keywords: ["iptv vs bbox", "alternative bbox tv", "iptv ou box bouygues", "iptv bouygues"],
    h1: "IPTV vs Bbox TV",
    lead: "La Bbox TV est le service de télévision des box Bouygues Telecom. Voici comment l'IPTV se compare à cette offre.",
    intro: [
      "La Bbox TV est incluse avec une box Bouygues : elle propose la TNT, des chaînes selon l'offre et un décodeur dédié, le tout rattaché à l'abonnement internet.",
      "L'IPTV fonctionne indépendamment de votre opérateur, sur les appareils que vous possédez déjà, avec un catalogue nettement plus vaste et sans matériel imposé.",
    ],
    rows: [
      { label: "Rattachement", ours: "Indépendant de l'opérateur", theirs: "Lié à la box Bouygues" },
      { label: "Chaînes en direct", ours: "50 000+ (dont internationales)", theirs: "Bouquet selon l'offre" },
      { label: "Vidéothèque", ours: "180 000+ titres", theirs: "VOD selon options" },
      { label: "Matériel", ours: "Vos appareils actuels", theirs: "Décodeur Bbox" },
      { label: "Engagement", ours: "Aucun", theirs: "Selon l'offre box" },
    ],
    verdict:
      "La Bbox TV est pratique si vous êtes déjà chez Bouygues. Pour la richesse du catalogue et l'usage sur tous vos écrans sans décodeur, l'IPTV a l'avantage.",
  },
  "vs-prime-video": {
    slug: "vs-prime-video",
    competitor: "Amazon Prime Video",
    order: 11,
    metaTitle: "IPTV vs Amazon Prime Video : direct ou catalogue ?",
    metaDescription:
      "IPTV ou Amazon Prime Video ? Comparaison entre la télévision en direct et le catalogue à la demande, le sport, le prix et la complémentarité des deux services.",
    keywords: ["iptv vs prime video", "iptv ou amazon prime", "alternative prime video", "prime video ou iptv"],
    h1: "IPTV vs Amazon Prime Video",
    lead: "Prime Video est une plateforme de vidéo à la demande, avec quelques directs. Voici en quoi elle diffère d'un service IPTV.",
    intro: [
      "Amazon Prime Video mise sur un catalogue de films et séries à la demande, ses productions originales et, ponctuellement, quelques directs sportifs.",
      "Un service IPTV apporte ce que Prime Video ne propose pas : des dizaines de milliers de chaînes en direct, généralistes, sport et internationales, en plus d'une vidéothèque. Les deux peuvent d'ailleurs se compléter.",
    ],
    rows: [
      { label: "Télévision en direct", ours: "50 000+ chaînes", theirs: "Ponctuel (quelques directs)" },
      { label: "Vidéothèque", ours: "180 000+ titres", theirs: "Catalogue + originales Amazon" },
      { label: "Chaînes internationales", ours: "Nombreux bouquets", theirs: "Non" },
      { label: "Sport en direct", ours: "Large", theirs: "Limité à certains droits" },
      { label: "Usage", ours: "TV en direct + VOD", theirs: "Surtout VOD" },
    ],
    verdict:
      "Prime Video est excellent pour la VOD et ses séries originales. Pour la télévision en direct et le sport, l'IPTV le complète largement.",
  },
  "vs-apple-tv-plus": {
    slug: "vs-apple-tv-plus",
    competitor: "Apple TV+",
    order: 12,
    metaTitle: "IPTV vs Apple TV+ : que choisir ?",
    metaDescription:
      "IPTV ou Apple TV+ ? Comparaison entre un catalogue de productions originales et un service de télévision en direct avec vidéothèque. Deux usages différents.",
    keywords: ["iptv vs apple tv+", "iptv ou apple tv plus", "alternative apple tv+", "apple tv plus ou iptv"],
    h1: "IPTV vs Apple TV+",
    lead: "Apple TV+ est un service de productions originales, sans télévision en direct. Voici comment il se compare à l'IPTV.",
    intro: [
      "Apple TV+ se concentre sur un catalogue restreint mais soigné de séries et films originaux Apple. Il ne propose pas de chaînes en direct.",
      "Un service IPTV répond à un tout autre besoin : regarder la télévision en direct — chaînes françaises, sport, international — en plus d'une grande vidéothèque.",
    ],
    rows: [
      { label: "Télévision en direct", ours: "50 000+ chaînes", theirs: "Non" },
      { label: "Catalogue", ours: "180 000+ films & séries", theirs: "Productions originales Apple" },
      { label: "Sport", ours: "Large", theirs: "Très limité" },
      { label: "Chaînes françaises", ours: "Oui", theirs: "Non" },
      { label: "Positionnement", ours: "TV complète", theirs: "Studio original" },
    ],
    verdict:
      "Apple TV+ est un complément haut de gamme pour ses séries originales, pas un service de télévision. Pour le direct et la variété, l'IPTV est incomparable.",
  },
  "vs-pluto-tv": {
    slug: "vs-pluto-tv",
    competitor: "Pluto TV",
    order: 13,
    metaTitle: "IPTV vs Pluto TV : gratuit ou premium ?",
    metaDescription:
      "IPTV premium ou Pluto TV gratuit ? Comparaison du nombre de chaînes, de la publicité, de la qualité et du contenu pour choisir selon vos attentes.",
    keywords: ["iptv vs pluto tv", "iptv ou pluto tv", "alternative pluto tv", "pluto tv gratuit iptv"],
    h1: "IPTV vs Pluto TV",
    lead: "Pluto TV est un service gratuit financé par la publicité, au choix limité. Voici comment il se compare à une offre IPTV premium.",
    intro: [
      "Pluto TV propose gratuitement un ensemble de chaînes thématiques et de la VOD, financés par la publicité. L'offre est correcte pour du contenu d'appoint, mais limitée.",
      "Un service IPTV premium vise l'exhaustivité : dizaines de milliers de chaînes en direct, sport, international et une immense vidéothèque, sans coupures publicitaires imposées.",
    ],
    rows: [
      { label: "Modèle", ours: "Premium sans pub imposée", theirs: "Gratuit, financé par la pub" },
      { label: "Chaînes en direct", ours: "50 000+", theirs: "Sélection limitée" },
      { label: "Sport premium", ours: "Large", theirs: "Très limité" },
      { label: "Chaînes françaises", ours: "Toutes les grandes", theirs: "Choix restreint" },
      { label: "Qualité", ours: "Jusqu'à la 4K", theirs: "Variable" },
    ],
    verdict:
      "Pluto TV est un bon service gratuit d'appoint. Pour un usage principal, avec le sport, l'international et la 4K, l'IPTV premium est bien plus complète.",
  },
  "vs-paramount-plus": {
    slug: "vs-paramount-plus",
    competitor: "Paramount+",
    order: 14,
    metaTitle: "IPTV vs Paramount+ : que choisir ?",
    metaDescription:
      "IPTV ou Paramount+ ? Comparaison entre un catalogue de séries et films et un service de télévision en direct avec vidéothèque. Deux usages complémentaires.",
    keywords: ["iptv vs paramount+", "iptv ou paramount plus", "alternative paramount+", "paramount plus ou iptv"],
    h1: "IPTV vs Paramount+",
    lead: "Paramount+ est une plateforme de streaming à la demande. Voici comment elle se compare à un service IPTV en direct.",
    intro: [
      "Paramount+ propose un catalogue de films, de séries et de productions originales à la demande. Comme les autres plateformes SVOD, il n'offre pas de chaînes généralistes en direct.",
      "Un service IPTV couvre le direct — télévision française, sport, chaînes internationales — en plus d'une vidéothèque, répondant à un besoin différent et plus large.",
    ],
    rows: [
      { label: "Télévision en direct", ours: "50 000+ chaînes", theirs: "Non" },
      { label: "Catalogue", ours: "180 000+ titres", theirs: "Catalogue Paramount" },
      { label: "Sport en direct", ours: "Large", theirs: "Limité à certains droits" },
      { label: "Chaînes internationales", ours: "Oui", theirs: "Non" },
      { label: "Usage", ours: "TV en direct + VOD", theirs: "SVOD" },
    ],
    verdict:
      "Paramount+ est un bon complément pour ses séries et films. Pour la télévision en direct et le sport, l'IPTV apporte ce que la SVOD ne couvre pas.",
  },
};

export const COMPARATIF_LIST = Object.values(COMPARATIFS).sort((a, b) => a.order - b.order);
export const COMPARATIF_SLUGS = COMPARATIF_LIST.map((c) => c.slug);
