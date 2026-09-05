/**
 * 4kiptvfr.com — Central site configuration (French market, root-level URLs).
 * Single source of truth for brand, navigation, pricing and shared content.
 * Every navigation target maps to a REAL route — no dead links.
 */

export type SocialPlatform =
  | "facebook"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "twitter"
  | "telegram"
  | "whatsapp";

export type SocialLinksConfig = Record<SocialPlatform, string>;

export const SITE = {
  name: "4kiptvfr.com",
  domain: "https://4kiptvfr.com",
  locale: "fr-FR",
  supportEmail: "support@streamb4.com",
  // WhatsApp — international format (Morocco). Local 0625218443 → 212625218443.
  whatsappNumber: "212625218443",
  tagline: "La télévision premium, pensée pour la France.",
  socialLinks: {
    facebook: "",
    instagram: "",
    tiktok: "",
    youtube: "",
    twitter: "",
    telegram: "",
    whatsapp: "https://wa.me/212625218443",
  },
} as const;

/** Build a wa.me link, optionally with a pre-filled message. */
export function waLink(message?: string): string {
  const base = `https://wa.me/${SITE.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

/** Primary navigation with grouped dropdowns (desktop). */
export const NAV: NavItem[] = [
  {
    label: "Abonnement",
    href: "/abonnement",
    children: [
      { label: "Tous les abonnements", href: "/abonnement" },
      { label: "1 Connexion (Solo)", href: "/abonnement/1-connexion" },
      { label: "2 Connexions (Duo)", href: "/abonnement/2-connexions" },
      { label: "3 Connexions (Famille)", href: "/abonnement/3-connexions" },
      { label: "5 Connexions (Multi-écrans)", href: "/abonnement/5-connexions" },
      { label: "Formule 12 mois", href: "/abonnement/annuel" },
      { label: "Qualité Premium 4K", href: "/abonnement/4k" },
      { label: "Essai sans risque", href: "/abonnement/essai-gratuit" },
    ],
  },
  {
    label: "Appareils",
    href: "/appareils",
    children: [
      { label: "Samsung", href: "/appareils/samsung" },
      { label: "LG", href: "/appareils/lg" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Fire TV Stick", href: "/appareils/firestick" },
      { label: "Apple TV", href: "/appareils/apple-tv" },
      { label: "Xiaomi", href: "/appareils/xiaomi" },
      { label: "iPhone / iPad", href: "/appareils/iphone-ipad" },
      { label: "Windows", href: "/appareils/windows" },
      { label: "Mac", href: "/appareils/mac" },
      { label: "Tous les appareils", href: "/appareils" },
    ],
  },
  {
    label: "Applications",
    href: "/applications",
    children: [
      { label: "IPTV Smarters", href: "/applications/smarters" },
      { label: "TiviMate", href: "/applications/tivimate" },
      { label: "VLC", href: "/applications/vlc" },
      { label: "Kodi", href: "/applications/kodi" },
      { label: "GSE Smart IPTV", href: "/applications/gse-smart-iptv" },
      { label: "OTT Navigator", href: "/applications/ott-navigator" },
      { label: "XCIPTV", href: "/applications/xciptv" },
    ],
  },
  {
    label: "Chaînes",
    href: "/contenu/chaines",
    children: [
      { label: "Chaînes françaises", href: "/contenu/chaines/francaises" },
      { label: "TNT", href: "/contenu/chaines/francaises" },
      { label: "Internationales", href: "/contenu/chaines/internationales" },
      { label: "Sport", href: "/contenu/sport" },
      { label: "Toutes les chaînes", href: "/contenu/chaines" },
    ],
  },
  { label: "Sport", href: "/contenu/sport" },
  { label: "Guide", href: "/meilleur-iptv" },
  { label: "Blog", href: "/blog" },
];

export const PRIMARY_CTA = { label: "Voir les offres", href: "/abonnement" };
export const SECONDARY_CTA = { label: "Nous contacter", href: "/contact" };
/** Right-hand header button. */
export const NAV_CTA = { label: "Essai gratuit", href: "/abonnement/essai-gratuit" };

/** Headline statistics — mirrors the 4kiptvfr.com network figures. */
export const STATS: { value: string; label: string }[] = [
  { value: "50 000+", label: "Chaînes en direct" },
  { value: "180 000+", label: "Films & séries" },
  { value: "4K", label: "Ultra HD / HDR10+" },
  { value: "99,9%", label: "Disponibilité serveurs" },
];

export type PricingPlan = {
  id: string;
  name: string;
  months: number;
  price: number;
  perMonth: number;
  discount: string;
  popular: boolean;
};

export type ConnectionTier = {
  connections: number;
  label: string;
  shortLabel: string;
  tagline: string;
  idealFor: string;
  slug: string;
  popular?: boolean;
  slots: string[];
  plans: PricingPlan[];
};

/** Pricing (1 écran base), preserved for standard plan access */
export const PRICING_PLANS: PricingPlan[] = [
  { id: "3-mois", name: "3 mois", months: 3, price: 40.99, perMonth: 13.66, discount: "-20%", popular: false },
  { id: "6-mois", name: "6 mois", months: 6, price: 55.99, perMonth: 9.33, discount: "-40%", popular: false },
  { id: "12-mois", name: "12 mois", months: 12, price: 70.99, perMonth: 5.92, discount: "-50%", popular: true },
];

/** Structured multi-connection pricing model (1, 2, 3, 5 connections) */
export const CONNECTION_TIERS: Record<number, ConnectionTier> = {
  1: {
    connections: 1,
    label: "1 Connexion",
    shortLabel: "1 écran",
    tagline: "Solo · 1 écran actif",
    idealFor: "1 personne, smartphone ou TV principale",
    slug: "1-connexion",
    slots: ["Écran principal (Smart TV ou Smartphone)"],
    plans: [
      { id: "1c-3m", name: "3 mois", months: 3, price: 40.99, perMonth: 13.66, discount: "-20%", popular: false },
      { id: "1c-6m", name: "6 mois", months: 6, price: 55.99, perMonth: 9.33, discount: "-40%", popular: false },
      { id: "1c-12m", name: "12 mois", months: 12, price: 70.99, perMonth: 5.92, discount: "-50%", popular: true },
    ],
  },
  2: {
    connections: 2,
    label: "2 Connexions",
    shortLabel: "2 écrans",
    tagline: "Duo · 2 écrans simultanés",
    idealFor: "Couples, Salon + Chambre ou Mobile en déplacement",
    slug: "2-connexions",
    popular: true,
    slots: ["Écran 1 : Smart TV Salon", "Écran 2 : TV Chambre ou Mobile"],
    plans: [
      { id: "2c-3m", name: "3 mois", months: 3, price: 65.99, perMonth: 21.99, discount: "-20%", popular: false },
      { id: "2c-6m", name: "6 mois", months: 6, price: 89.99, perMonth: 14.99, discount: "-35%", popular: false },
      { id: "2c-12m", name: "12 mois", months: 12, price: 119.99, perMonth: 9.99, discount: "-50%", popular: true },
    ],
  },
  3: {
    connections: 3,
    label: "3 Connexions",
    shortLabel: "3 écrans",
    tagline: "Famille · 3 écrans simultanés",
    idealFor: "Familles, parents et enfants sur différents écrans",
    slug: "3-connexions",
    slots: ["Écran 1 : Salon principal", "Écran 2 : Chambre parents", "Écran 3 : Chambre enfants ou Tablette"],
    plans: [
      { id: "3c-3m", name: "3 mois", months: 3, price: 85.99, perMonth: 28.66, discount: "-20%", popular: false },
      { id: "3c-6m", name: "6 mois", months: 6, price: 119.99, perMonth: 19.99, discount: "-35%", popular: false },
      { id: "3c-12m", name: "12 mois", months: 12, price: 159.99, perMonth: 13.33, discount: "-50%", popular: true },
    ],
  },
  5: {
    connections: 5,
    label: "5 Connexions",
    shortLabel: "5 écrans",
    tagline: "Multi-écrans · 5 écrans simultanés",
    idealFor: "Grands foyers, multi-pièces, colocation & résidences",
    slug: "5-connexions",
    slots: ["Écran 1 : Salon", "Écran 2 : Chambre 1", "Écran 3 : Chambre 2", "Écran 4 : Bureau / PC", "Écran 5 : Mobile / Tablette"],
    plans: [
      { id: "5c-3m", name: "3 mois", months: 3, price: 129.99, perMonth: 43.33, discount: "-20%", popular: false },
      { id: "5c-6m", name: "6 mois", months: 6, price: 179.99, perMonth: 29.99, discount: "-35%", popular: false },
      { id: "5c-12m", name: "12 mois", months: 12, price: 239.99, perMonth: 19.99, discount: "-50%", popular: true },
    ],
  },
};

export const CONNECTION_LIST = Object.values(CONNECTION_TIERS);

export const PLAN_FEATURES: string[] = [
  "50 000+ chaînes en direct HD/UHD",
  "180 000+ films & séries à la demande",
  "1 800+ chaînes sport premium (Ligue 1, C1…)",
  "Streaming 4K/UHD réel & HDR10+",
  "Anti-coupure & 99,9% de disponibilité",
  "Guide des programmes (EPG) inclus",
  "Replay 7 jours & pause du direct",
  "100% compatible VPN",
  "Utilisable partout, sans blocage d'IP",
  "Activation automatique en moins de 60 s",
  "Support français WhatsApp & e-mail",
  "Sans engagement, sans reconduction auto",
  "Garantie satisfait ou remboursé 30 jours",
];

export const PAYMENT_METHODS = ["Visa", "Mastercard", "PayPal", "Apple Pay", "Google Pay", "Crypto"];

/** Payment methods rendered as logo badges, using the real brand assets in
 *  /public/images/payments/. `name` is the displayed label ("Crypto" uses the
 *  Bitcoin asset). Logos are decorative (the label names each method). */
export const PAYMENTS: { name: string; file: string }[] = [
  { name: "Visa", file: "visa.webp" },
  { name: "Mastercard", file: "mastercard.webp" },
  { name: "PayPal", file: "paypal.png" },
  { name: "Apple Pay", file: "apple-pay.webp" },
  { name: "Google Pay", file: "google-pay.png" },
  { name: "Crypto", file: "bitcoin.jpg" },
];

export const FEATURES: { title: string; description: string }[] = [
  {
    title: "Vraie 4K Ultra HD (H.265)",
    description:
      "Un direct et des contenus à la demande d'une netteté parfaite en 4K réel avec HDR10+. La compression H.265 offre une qualité maximale pour une bande passante minimale.",
  },
  {
    title: "Réseau anti-coupure",
    description:
      "Un réseau de serveurs performants avec routage géographique intelligent qui limite la latence et la mise en mémoire tampon. Le sport en direct, sans saccade.",
  },
  {
    title: "50 000+ chaînes en direct",
    description:
      "Toutes les chaînes françaises premium — TF1, France Télévisions, M6, Canal+, beIN, RMC Sport — complétées par le sport, l'info et les bouquets internationaux.",
  },
  {
    title: "180 000+ films & séries",
    description:
      "Une vidéothèque mise à jour quotidiennement : films, documentaires et saisons complètes, en version française et en version originale sous-titrée.",
  },
  {
    title: "Sans blocage d'IP",
    description:
      "Votre accès n'est pas lié à votre box. Profitez de votre abonnement en déplacement, en vacances ou à l'hôtel, partout, sans réactivation.",
  },
  {
    title: "Compatible partout",
    description:
      "Smart TV Samsung & LG, Android TV, Fire TV Stick, Apple TV, box Android, iOS, Android, Windows et Mac. Configuration par lien M3U ou API Xtream.",
  },
];

export const STEPS: { title: string; description: string }[] = [
  { title: "Choisissez votre offre", description: "Sélectionnez la durée qui vous convient. Sans engagement, avec garantie 30 jours." },
  { title: "Recevez vos accès", description: "Vos identifiants sont générés automatiquement et envoyés par e-mail en moins de 60 secondes." },
  { title: "Installez & regardez", description: "Ajoutez vos accès dans l'application de votre choix, et profitez immédiatement." },
];

export const FAQ_ITEMS: { q: string; a: string }[] = [
  { q: "Qu'est-ce que 4kiptvfr.com ?", a: "4kiptvfr.com est un service de streaming IPTV premium donnant accès à plus de 50 000 chaînes en direct et 180 000 films et séries en 4K, sur tous vos appareils." },
  { q: "Sur quels appareils puis-je regarder ?", a: "Sur Smart TV Samsung et LG, Android TV, Fire TV Stick, Apple TV, box Android, smartphones et tablettes iOS/Android, ainsi que sur ordinateur Windows et Mac." },
  { q: "Combien de temps prend l'activation ?", a: "L'activation est automatique. Vous recevez vos identifiants par e-mail en moins de 60 secondes après la commande." },
  { q: "Y a-t-il un engagement ?", a: "Non. Toutes les offres sont sans engagement et sans reconduction automatique. Vous bénéficiez d'une garantie satisfait ou remboursé de 30 jours." },
  { q: "Le service est-il compatible avec un VPN ?", a: "Oui, 4kiptvfr.com est 100% compatible avec les VPN et utilisable partout dans le monde, sans blocage d'adresse IP." },
  { q: "Quels moyens de paiement acceptez-vous ?", a: "Visa, Mastercard, PayPal, Apple Pay, Google Pay et les principales cryptomonnaies." },

  // --- Questions complémentaires (prix, contenu, technique, appareils, support) ---
  { q: "Combien coûte un abonnement IPTV ?", a: "Nos formules démarrent autour de 5,92 €/mois avec l'abonnement 12 mois. Comptez 40,99 € pour 3 mois, 55,99 € pour 6 mois et 70,99 € pour 12 mois, sans engagement." },
  { q: "Quelle est la formule la moins chère ?", a: "La formule 12 mois offre le meilleur tarif au mois (environ 5,92 €/mois) : plus la durée est longue, plus le prix mensuel baisse." },
  { q: "Le paiement se fait-il en une seule fois ?", a: "Oui, l'abonnement se règle en une fois lors de la commande. Les formules longues permettent de réduire nettement le coût mensuel." },
  { q: "Y a-t-il une garantie satisfait ou remboursé ?", a: "Oui, vous bénéficiez d'une garantie satisfait ou remboursé de 30 jours : si le service ne vous convient pas, vous êtes remboursé." },
  { q: "Que se passe-t-il au renouvellement de l'abonnement ?", a: "Il n'y a aucune reconduction automatique. À l'échéance, vous choisissez librement de renouveler la formule de votre choix." },
  { q: "Quelles chaînes françaises sont incluses ?", a: "Les grandes chaînes françaises généralistes, d'information, de sport et thématiques (TF1, France 2/3, M6, la TNT…) sont couvertes, avec leur guide des programmes." },
  { q: "Peut-on regarder le sport en direct ?", a: "Oui : Ligue 1, Champions League, Formule 1, tennis, rugby, NBA et les grands événements sont accessibles en direct, en Full HD et 4K." },
  { q: "Proposez-vous des chaînes internationales ?", a: "Oui, de nombreux bouquets internationaux sont inclus : Royaume-Uni, Espagne, Italie, Allemagne, Maghreb, chaînes arabes, États-Unis et bien d'autres." },
  { q: "Y a-t-il des films et séries à la demande ?", a: "Oui, une vidéothèque de plus de 180 000 films et séries est incluse, en VF et VOST, jusqu'à la 4K." },
  { q: "Puis-je retrouver les chaînes de mon pays d'origine ?", a: "Oui : des bouquets marocains, algériens, tunisiens, arabes, turcs, portugais et bien d'autres sont disponibles, avec le son d'origine et sans parabole." },
  { q: "Les chaînes de sport comme beIN Sports ou RMC Sport sont-elles accessibles ?", a: "Les chaînes qui diffusent le sport en France — beIN Sports, Canal+ Sport, RMC Sport, DAZN, Eurosport — sont accessibles via nos bouquets." },
  { q: "Puis-je regarder la télévision française depuis l'étranger ?", a: "Oui, l'IPTV fonctionne partout où vous avez une connexion internet : vos chaînes françaises vous suivent en voyage comme en expatriation." },
  { q: "Quelle qualité d'image proposez-vous ?", a: "Les chaînes sont diffusées en HD et Full HD, et en 4K Ultra HD avec HDR lorsque la source le permet, grâce à l'encodage H.265." },
  { q: "Quel débit internet faut-il pour l'IPTV ?", a: "Comptez environ 10 à 15 Mb/s pour la Full HD et au moins 25 Mb/s pour un flux 4K stable. La fibre est idéale." },
  { q: "L'IPTV fonctionne-t-elle en Wi-Fi ?", a: "Oui, mais une connexion filaire (Ethernet) est recommandée pour le téléviseur principal, surtout en 4K, afin d'éviter les coupures." },
  { q: "Faut-il une parabole ou une antenne ?", a: "Non. Tout passe par votre connexion internet : aucune parabole ni antenne n'est nécessaire." },
  { q: "Qu'est-ce qu'un lien M3U ou un code Xtream ?", a: "Ce sont les deux façons de connecter votre lecteur : un lien M3U (liste de chaînes) ou des codes Xtream (URL, identifiant, mot de passe), reçus par e-mail après la commande." },
  { q: "Le guide des programmes (EPG) est-il inclus ?", a: "Oui, un guide des programmes (EPG) est intégré pour savoir ce qui passe maintenant et à venir sur chaque chaîne." },
  { q: "Comment installer l'IPTV sur un Fire TV Stick ?", a: "Installez un lecteur comme IPTV Smarters depuis l'Amazon Appstore, puis saisissez vos identifiants Xtream ou votre lien M3U reçus par e-mail." },
  { q: "L'IPTV fonctionne-t-elle sur Samsung et LG ?", a: "Oui, sur les Smart TV Samsung (Tizen) et LG (webOS) via un lecteur compatible, sans matériel externe." },
  { q: "Puis-je regarder sur mon smartphone ou ma tablette ?", a: "Oui, sur iOS et Android avec une application IPTV. Idéal pour regarder en déplacement." },
  { q: "Quelle application IPTV utiliser ?", a: "IPTV Smarters (universel), TiviMate (excellent sur Android TV) ou VLC. Toutes sont gratuites et compatibles avec nos accès." },
  { q: "Comment passer commande ?", a: "Choisissez votre formule, puis finalisez via WhatsApp. Vous recevez vos accès par e-mail en moins de 60 secondes." },
  { q: "Le support est-il en français ?", a: "Oui, notre équipe support répond en français, par e-mail et sur WhatsApp, 7 jours sur 7." },
  { q: "Puis-je vous contacter sur WhatsApp ?", a: "Oui, notre support est joignable sur WhatsApp pour toute question avant comme après la commande." },
  { q: "Que se passe-t-il quand mon abonnement expire ?", a: "Vos chaînes cessent de se lancer. Il suffit de renouveler pour réactiver l'accès, sans reconfigurer votre application." },
  { q: "Comment renouveler mon abonnement ?", a: "Reprenez une formule via WhatsApp : vos réglages et favoris sont conservés dans l'application après réactivation." },
  { q: "Mes paiements sont-ils sécurisés ?", a: "Oui, les paiements sont 100% sécurisés. Nous acceptons Visa, Mastercard, PayPal, Apple Pay, Google Pay et les cryptomonnaies." },
  { q: "Y a-t-il un contrôle parental ?", a: "Oui, la plupart des lecteurs permettent de verrouiller par code certaines chaînes ou catégories, pour un usage familial serein." },
  { q: "Puis-je devenir revendeur IPTV ?", a: "Oui, un programme revendeur est proposé pour distribuer nos abonnements. Contactez-nous pour en connaître les conditions." },
];

/** Cluster hubs — used for footer, cross-links and the homepage nav grid. */
export const CLUSTERS: { label: string; href: string; description: string }[] = [
  { label: "Meilleur IPTV", href: "/meilleur-iptv", description: "Le guide de référence pour choisir un service fiable." },
  { label: "Abonnement", href: "/abonnement", description: "Formules, durées, prix et garanties." },
  { label: "Appareils", href: "/appareils", description: "Installation sur Smart TV, box et mobiles." },
  { label: "Applications", href: "/applications", description: "Smarters, TiviMate, VLC, Kodi et plus." },
  { label: "Sports", href: "/contenu/sport", description: "Football, Ligue 1, C1, F1, tennis, rugby." },
  { label: "Comparatifs", href: "/comparatifs", description: "IPTV face à Canal+, Molotov, Netflix…" },
];

export const LEGAL_LINKS: { label: string; href: string }[] = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "CGU", href: "/conditions-utilisation" },
  { label: "CGV", href: "/cgv" },
  { label: "Confidentialité", href: "/politique-confidentialite" },
  { label: "Cookies", href: "/cookies" },
  { label: "Remboursement", href: "/remboursement" },
];
