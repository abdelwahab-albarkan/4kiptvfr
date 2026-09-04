/**
 * Commercial sub-pages for the /abonnement cluster.
 * Each entry targets a distinct search intent from the keyword database.
 */

export type Section = { title: string; body: string[] };

export type Offer = {
  slug: string;
  name: string;
  order: number;
  connections?: number;
  badge?: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  sections: Section[];
  showPricing: boolean;
  showIncluded: boolean;
  faq: { q: string; a: string }[];
};

export const OFFERS: Record<string, Offer> = {
  "1-connexion": {
    slug: "1-connexion",
    name: "1 Connexion",
    order: 1,
    connections: 1,
    badge: "Solo",
    metaTitle: "Abonnement IPTV 1 Connexion : pour 1 écran solo en 4K",
    metaDescription:
      "Abonnement IPTV 1 écran : profitez de 50 000+ chaînes et 180 000+ films/séries en 4K sur votre Smart TV, PC ou smartphone. Activation en 60 s, sans engagement.",
    keywords: ["iptv 1 connexion", "abonnement iptv 1 ecran", "iptv solo", "iptv 1 appareil", "iptv france 1 connexion"],
    eyebrow: "Offre Solo · 1 Écran",
    h1: "Abonnement IPTV 1 Connexion",
    lead: "La formule idéale pour un usage individuel : regardez sur votre Smart TV, smartphone, tablette ou ordinateur, sans payer pour des écrans superflus.",
    intro: [
      "L'offre 1 Connexion est conçue pour les personnes qui regardent la télévision sur un seul écran à la fois. Vous pouvez installer vos accès sur plusieurs appareils (par exemple votre Smart TV au salon et votre smartphone pour les trajets), mais un seul flux vidéo peut être actif simultanément.",
      "Vous bénéficiez de l'intégralité du bouquet 4kiptvfr.com : plus de 50 000 chaînes françaises et internationales en direct, le sport en 4K Ultra HD, le guide des programmes (EPG), le replay et une immense vidéothèque VOD de 180 000+ titres.",
    ],
    sections: [
      {
        title: "Pour qui est conçue cette offre ?",
        body: [
          "Cette formule s'adresse aux célibataires, étudiants, personnes seules ou à ceux qui souhaitent équiper un écran unique (téléviseur du salon ou box multimédia).",
          "Si vous n'avez jamais besoin de regarder deux chaînes différentes en même temps dans votre foyer, cette offre 1 écran vous garantit le tarif le plus avantageux sans aucun compromis sur la qualité d'image.",
        ],
      },
      {
        title: "Comment fonctionne la connexion unique ?",
        body: [
          "Une connexion correspond à une session de streaming active. Vous recevez un jeu d'identifiants (lien M3U ou API Xtream).",
          "Vous pouvez configurer ces identifiants sur votre Smart TV Samsung/LG et sur votre iPhone/Android. Lorsque vous regardez la TV au salon, la connexion est active sur la TV. Lorsque vous partez en déplacement, vous pouvez lancer l'application sur votre smartphone en toute simplicité.",
        ],
      },
      {
        title: "Compatibilité et activation immédiate",
        body: [
          "Fonctionne sur 100% des appareils et applications compatibles (Smart TV, Fire TV Stick, Apple TV, Android TV, Nvidia Shield, MAG Box, PC Windows, Mac, iOS et Android).",
          "Dès votre commande validée, vos identifiants sont générés automatiquement et envoyés par e-mail en moins de 60 secondes avec le guide d'installation adapté.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Puis-je installer l'application sur mon téléphone et ma TV ?", a: "Oui, vous pouvez installer l'application sur plusieurs appareils, mais vous ne pouvez regarder que sur un seul écran à la fois." },
      { q: "Que se passe-t-il si deux écrans tentent de regarder en même temps ?", a: "Sur une offre 1 connexion, le lancement d'un second écran simultané provoquera une coupure sur l'un des deux flux. Pour deux écrans en même temps, nous recommandons l'offre 2 connexions." },
      { q: "Puis-je passer à 2 ou 3 connexions plus tard ?", a: "Oui, vous pouvez faire évoluer votre formule à tout moment en contactant notre support WhatsApp." },
    ],
  },
  "2-connexions": {
    slug: "2-connexions",
    name: "2 Connexions",
    order: 2,
    connections: 2,
    badge: "Populaire · Duo",
    metaTitle: "Abonnement IPTV 2 Connexions : 2 écrans simultanés en 4K",
    metaDescription:
      "Abonnement IPTV 2 connexions simultanées : regardez 2 programmes différents dans 2 pièces ou en déplacement. 50 000+ chaînes 4K, sans coupure.",
    keywords: ["iptv 2 connexions", "abonnement iptv 2 ecrans", "iptv duo", "iptv 2 appareils simultanes", "iptv double ecran"],
    eyebrow: "Offre Duo · 2 Écrans Simultanés",
    h1: "Abonnement IPTV 2 Connexions",
    lead: "Regardez simultanément deux programmes distincts dans deux pièces différentes ou sur un smartphone en déplacement, sans conflit de flux.",
    intro: [
      "L'offre 2 Connexions est la formule la plus plébiscitée par les couples et les foyers équipés de deux téléviseurs. Elle permet de regarder deux chaînes ou films différents au même instant, en toute indépendance.",
      "Fini les compromis entre le match de football en direct et votre série préférée : chacun profite de sa diffusion en 4K Ultra HD avec une fluidité irréprochable.",
    ],
    sections: [
      {
        title: "Pourquoi choisir l'offre 2 connexions ?",
        body: [
          "Idéale pour équiper la Smart TV du salon et le téléviseur de la chambre, ou pour permettre à un membre du foyer de regarder la télévision sur son smartphone ou sa tablette pendant que l'autre utilise la TV principale.",
          "Chaque écran dispose de son propre contrôle du direct, de son propre replay et de son accès indépendant à la vidéothèque VOD de 180 000+ titres.",
        ],
      },
      {
        title: "Fonctionnement avec une ou deux adresses IP",
        body: [
          "Contrairement à de nombreux opérateurs traditionnels, 4kiptvfr.com ne bloque pas vos accès par adresse IP. Vous pouvez donc utiliser un écran connecté au Wi-Fi de votre domicile et un second écran en 4G/5G en déplacement ou chez des amis, sans blocage.",
          "Les deux flux fonctionnent simultanément avec une bande passante optimisée en encodage H.265.",
        ],
      },
      {
        title: "Un tarif nettement plus économique que 2 abonnements séparés",
        body: [
          "Prendre un abonnement 2 connexions vous permet d'économiser plus de 40% par rapport à l'achat de deux abonnements distincts, tout en centralisant la gestion et le renouvellement.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Les deux écrans peuvent-ils regarder des chaînes différentes ?", a: "Oui, absolument. Chaque écran est 100% indépendant et peut regarder n'importe quelle chaîne ou contenu VOD à tout moment." },
      { q: "Puis-je utiliser un écran à la maison et un écran à l'extérieur ?", a: "Oui. Il n'y a aucun blocage d'adresse IP : vous pouvez utiliser un écran chez vous et un autre en 4G/5G en déplacement." },
      { q: "Dois-je créer deux comptes différents ?", a: "Non, un seul compte multi-lignes vous est attribué, ce qui simplifie grandement la configuration." },
    ],
  },
  "3-connexions": {
    slug: "3-connexions",
    name: "3 Connexions",
    order: 3,
    connections: 3,
    badge: "Famille",
    metaTitle: "Abonnement IPTV 3 Connexions : 3 écrans simultanés pour toute la famille",
    metaDescription:
      "Abonnement IPTV 3 écrans simultanés : la formule familiale idéale pour le salon, les chambres et tablettes. 50 000+ chaînes 4K sans engagement.",
    keywords: ["iptv 3 connexions", "abonnement iptv 3 ecrans", "iptv famille", "iptv 3 appareils simultanes", "iptv multi ecran famille"],
    eyebrow: "Offre Famille · 3 Écrans Simultanés",
    h1: "Abonnement IPTV 3 Connexions",
    lead: "Chacun son écran et son programme : sport dans le salon, dessin animé dans la chambre des enfants et série sur tablette, sans aucune coupure.",
    intro: [
      "L'offre 3 Connexions a été pensée pour répondre aux besoins de toute la famille. Elle autorise 3 écrans à diffuser en même temps des flux haute définition ou 4K distincts.",
      "Parents et enfants profitent de leurs univers respectifs sans jamais se disputer la télécommande ni subir de ralentissement.",
    ],
    sections: [
      {
        title: "La solution idéale pour les foyers familiaux",
        body: [
          "Avec 3 connexions actives, vous pouvez simultanément diffuser : le match de Ligue 1 en 4K sur le téléviseur principal, un film en VOD dans la chambre parentale, et un programme jeunesse sur la tablette dans la chambre des enfants.",
          "Chaque écran bénéficie du guide complet des programmes, du contrôle parental si souhaité dans votre application, et du replay 7 jours.",
        ],
      },
      {
        title: "Stabilité garantie sur les 3 flux",
        body: [
          "Notre architecture de serveurs haute performance alloue une bande passante dédiée à chaque flux pour garantir que les 3 lectures restent parfaitement fluides, même aux heures de grande écoute.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Puis-je installer l'IPTV sur plus de 3 appareils ?", a: "Oui, vous pouvez installer l'application sur autant d'appareils que vous le souhaitez. La seule limite est que 3 appareils au maximum peuvent regarder en simultané." },
      { q: "Quelle vitesse internet est recommandée pour 3 écrans 4K ?", a: "Nous recommandons une connexion fibre ou VDSL d'au moins 35 à 50 Mb/s pour assurer une diffusion fluide en 4K sur les 3 écrans en simultané." },
      { q: "Le contrôle parental est-il disponible ?", a: "Oui, la majorité des applications recommandées (TiviMate, IPTV Smarters) intègrent un contrôle parental avec code PIN pour masquer les contenus adultes." },
    ],
  },
  "5-connexions": {
    slug: "5-connexions",
    name: "5 Connexions",
    order: 4,
    connections: 5,
    badge: "Multi-écrans",
    metaTitle: "Abonnement IPTV 5 Connexions : 5 écrans simultanés multi-pièces",
    metaDescription:
      "Abonnement IPTV 5 écrans simultanés : la formule multi-écrans ultime pour grands foyers, colocations et résidences. 50 000+ chaînes 4K, support prioritaire.",
    keywords: ["iptv 5 connexions", "abonnement iptv 5 ecrans", "iptv multi pieces", "iptv 5 appareils", "iptv grand foyer"],
    eyebrow: "Pack Multi-écrans · 5 Écrans Simultanés",
    h1: "Abonnement IPTV 5 Connexions",
    lead: "Le pack complet pour les grands foyers, maisons connectées et résidences : jusqu'à 5 écrans simultanés en très haute définition 4K.",
    intro: [
      "L'offre 5 Connexions est notre pack multi-écrans le plus complet. Il permet d'alimenter jusqu'à 5 téléviseurs, ordinateurs, tablettes ou smartphones en simultané avec une fluidité totale.",
      "Idéal pour les grandes maisons, résidences secondaires partagées, colocations ou passionnés d'écrans multiples qui recherchent une liberté totale.",
    ],
    sections: [
      {
        title: "Équipez toute votre maison avec un seul abonnement",
        body: [
          "Salon principal, chambre 1, chambre 2, bureau et smartphone en déplacement : 5 flux simultanés sans aucune restriction.",
          "Chaque écran accède en toute liberté à l'ensemble du catalogue 4K, au sport en direct, au replay et à plus de 180 000 films et séries.",
        ],
      },
      {
        title: "Support prioritaire 7j/7 dédié",
        body: [
          "Les abonnés au pack 5 Connexions bénéficient d'un canal d'assistance prioritaire via WhatsApp pour la configuration rapide de l'ensemble de leurs appareils et le support technique au quotidien.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Les 5 connexions peuvent-elles être sur 5 réseaux internet différents ?", a: "Oui, aucun blocage IP n'est imposé. Les 5 appareils peuvent être situés dans des lieux géographiques différents." },
      { q: "Puis-je ajouter d'autres connexions au-delà de 5 ?", a: "Oui, pour des besoins supérieurs (plus de 5 connexions ou programme revendeur), contactez notre équipe sur WhatsApp pour une offre sur-mesure." },
    ],
  },
  "essai-gratuit": {
    slug: "essai-gratuit",
    name: "Essai sans risque",
    order: 5,
    metaTitle: "Essai IPTV : test 24h ou garantie 30 jours ?",
    metaDescription:
      "Vous cherchez un test IPTV 24h ou un essai gratuit ? On vous explique pourquoi 4kiptvfr.com mise plutôt sur une garantie satisfait ou remboursé de 30 jours — un vrai temps pour tester, en toute transparence.",
    keywords: ["iptv essai", "iptv test 24h", "test 24h iptv", "iptv 24h test", "iptv essai gratuit", "essai iptv", "tester iptv"],
    eyebrow: "Essai & garantie",
    h1: "Essayer l'IPTV sans prendre de risque",
    lead: "Plutôt qu'un essai express de quelques heures, 4kiptvfr.com mise sur une garantie satisfait ou remboursé de 30 jours : le temps réel de juger le service dans vos conditions.",
    intro: [
      "Beaucoup de recherches portent sur l'« essai gratuit » ou le « test gratuit » d'un abonnement IPTV. C'est légitime : personne n'aime s'engager à l'aveugle. Mais un essai de 24 ou 48 heures ne dit pas grand-chose de la stabilité réelle d'un service, qui se juge surtout lors des grands rendez-vous sportifs.",
      "Nous préférons une approche transparente : vous vous abonnez, et si le service ne vous convient pas, vous êtes remboursé sous 30 jours. Vous disposez ainsi d'un vrai temps de test, sur tous vos appareils, sans pression.",
    ],
    sections: [
      {
        title: "Pourquoi une garantie plutôt qu'un essai de quelques heures",
        body: [
          "Un flux peut être parfait un mardi après-midi et saturer un soir de Champions League. Seule une période d'utilisation réelle permet de vérifier la stabilité, la qualité d'image et la richesse du catalogue.",
          "La garantie 30 jours couvre exactement cela : vous testez le service dans la durée, aux heures de pointe comme aux heures creuses.",
        ],
      },
      {
        title: "Comment procéder",
        body: [
          "Choisissez une formule courte pour commencer, installez l'application de votre choix, ajoutez vos accès et utilisez le service normalement. Si vous n'êtes pas satisfait, contactez le support dans les 30 jours pour un remboursement selon nos conditions.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: false,
    faq: [
      { q: "Proposez-vous un essai gratuit de 24 h ?", a: "Nous privilégions une garantie satisfait ou remboursé de 30 jours, qui offre un temps de test bien plus représentatif qu'un essai de quelques heures." },
      { q: "Comment fonctionne le remboursement ?", a: "Si le service ne vous convient pas, contactez le support dans les 30 jours suivant la commande. Les conditions vous sont précisées lors de l'achat." },
    ],
  },
  premium: {
    slug: "premium",
    name: "Premium",
    order: 6,
    metaTitle: "Abonnement IPTV premium : stabilité et qualité 4K",
    metaDescription:
      "L'abonnement IPTV premium 4kiptvfr.com : streaming 4K stable, réseau anti-coupure, 50 000+ chaînes et guide des programmes. La qualité sans compromis.",
    keywords: ["iptv premium", "iptv france premium", "abonnement iptv premium", "iptv stable", "iptv fiable", "iptv sans coupure"],
    eyebrow: "Qualité premium",
    h1: "Un abonnement IPTV premium",
    lead: "« Premium » ne devrait pas être un simple argument marketing. Chez 4kiptvfr.com, cela signifie une infrastructure solide, une vraie 4K et une stabilité pensée pour les soirs de grand match.",
    intro: [
      "Un service premium se reconnaît à ce qui ne se voit pas : la qualité du réseau, la gestion des pics de charge, la fraîcheur du catalogue. C'est là que se joue la différence avec les offres bas de gamme.",
    ],
    sections: [
      {
        title: "Ce qui définit le premium",
        body: [
          "Une diffusion 4K réelle en H.265, un réseau anti-coupure avec routage intelligent, un guide des programmes complet et un support réactif en français. Ce sont ces éléments, et non un logo « VIP », qui font la qualité.",
        ],
      },
      {
        title: "Stable, y compris aux heures de pointe",
        body: [
          "La stabilité se mesure quand tout le monde regarde en même temps. Notre réseau est dimensionné pour absorber les pics d'audience et diffuser le sport en direct sans saccade.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Qu'est-ce qui rend un abonnement « premium » ?", a: "La stabilité réelle, la vraie qualité 4K/HDR, un guide des programmes complet et un support réactif — pas un simple label marketing." },
      { q: "Le service reste-t-il stable pendant les grands matchs ?", a: "Oui, le réseau est dimensionné pour absorber les pics d'audience et diffuser le direct sans coupure." },
    ],
  },
  prix: {
    slug: "prix",
    name: "Prix",
    order: 7,
    metaTitle: "Prix IPTV France : combien coûte un abonnement ?",
    metaDescription:
      "Le prix d'un abonnement IPTV en France : formules de 3 à 12 mois à partir de 5,92 €/mois. Comprendre ce qui influence le tarif et comment payer le juste prix.",
    keywords: ["prix iptv france", "prix iptv", "tarif iptv", "combien coute iptv", "iptv prix"],
    eyebrow: "Tarifs",
    h1: "Le prix d'un abonnement IPTV",
    lead: "Combien coûte l'IPTV en France ? Le tarif dépend surtout de la durée choisie. Voici une lecture claire des prix, sans piège.",
    intro: [
      "Le prix d'un abonnement IPTV varie principalement selon la durée d'engagement volontaire : plus la période est longue, plus le tarif mensuel baisse. Chez 4kiptvfr.com, les offres vont de 3 à 12 mois, à partir de 5,92 €/mois sur la formule annuelle.",
      "Méfiez-vous des tarifs anormalement bas ou des offres « à vie » : la qualité et la pérennité d'un service ont un coût. Un prix juste est le signe d'un service sérieux.",
    ],
    sections: [
      {
        title: "Ce qui influence le prix",
        body: [
          "La durée de l'abonnement est le premier facteur. Viennent ensuite le nombre d'écrans simultanés et, chez certains fournisseurs, des options. Chez nous, toutes les fonctionnalités sont incluses dans chaque formule : le seul choix est la durée.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Combien coûte un abonnement IPTV ?", a: "Chez 4kiptvfr.com, de 40,99 € pour 3 mois à 70,99 € pour douze mois, soit 5,92 €/mois sur la formule annuelle." },
      { q: "Pourquoi éviter les offres « à vie » très bon marché ?", a: "Un service fiable a un coût de fonctionnement. Les offres « à vie » anormalement basses sont rarement pérennes." },
    ],
  },
  "pas-cher": {
    slug: "pas-cher",
    name: "Pas cher",
    order: 8,
    metaTitle: "IPTV pas cher : le meilleur rapport qualité-prix",
    metaDescription:
      "IPTV pas cher en France : comment obtenir le meilleur rapport qualité-prix sans sacrifier la stabilité. La formule annuelle 4kiptvfr.com dès 5,92 €/mois.",
    keywords: ["iptv pas cher", "iptv france pas cher", "abonnement iptv pas cher", "iptv moins cher", "meilleur rapport qualite prix iptv"],
    eyebrow: "Économique",
    h1: "IPTV pas cher, sans rogner sur la qualité",
    lead: "« Pas cher » ne doit pas rimer avec instable. Le vrai bon plan, c'est le meilleur rapport qualité-prix — et il passe par la durée.",
    intro: [
      "Chercher une IPTV pas chère est naturel, mais le prix le plus bas cache parfois un service instable. Le meilleur rapport qualité-prix consiste à choisir un service fiable sur une durée longue, où le tarif mensuel devient très avantageux.",
      "Sur la formule 12 mois, 4kiptvfr.com revient à 5,92 €/mois — soit moins qu'un café par semaine — tout en gardant la stabilité et la 4K.",
    ],
    sections: [
      {
        title: "Le bon calcul",
        body: [
          "Plutôt que de payer peu pour un service qui coupe, mieux vaut viser le coût mensuel le plus bas sur un service qui tient la charge. La formule annuelle est presque toujours le meilleur choix économique.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: false,
    faq: [
      { q: "Quelle est la formule la moins chère au mois ?", a: "La formule 12 mois, à 5,92 €/mois, offre le meilleur tarif mensuel." },
      { q: "Une IPTV pas chère est-elle forcément mauvaise ?", a: "Non, mais un prix anormalement bas est un signal d'alerte. Visez le meilleur rapport qualité-prix, pas le tarif le plus bas." },
    ],
  },
  "4k": {
    slug: "4k",
    name: "4K Ultra HD",
    order: 9,
    metaTitle: "IPTV 4K : streaming Ultra HD et HDR",
    metaDescription:
      "IPTV 4K France : streaming Ultra HD réel en H.265 avec HDR10+. Débit conseillé, compatibilité des appareils et ce qu'il faut vérifier pour une vraie 4K.",
    keywords: ["iptv 4k", "iptv france 4k", "iptv ultra hd", "iptv uhd", "iptv hdr", "abonnement iptv 4k"],
    eyebrow: "Qualité d'image",
    h1: "L'IPTV en 4K Ultra HD",
    lead: "La 4K change l'expérience — à condition qu'elle soit réelle. Voici ce que recouvre vraiment l'IPTV 4K et comment en profiter pleinement.",
    intro: [
      "De nombreux services annoncent la 4K sans la proposer réellement. Une vraie diffusion Ultra HD s'appuie sur un encodage moderne (H.265) et, idéalement, sur le HDR pour des couleurs et un contraste supérieurs.",
      "4kiptvfr.com diffuse en 4K réelle avec HDR10+ sur les contenus compatibles, pour une bande passante maîtrisée.",
    ],
    sections: [
      {
        title: "Quel débit pour la 4K ?",
        body: [
          "Comptez une connexion stable d'environ 25 Mb/s pour un flux 4K confortable. Une connexion filaire (Ethernet) est recommandée pour éviter les ralentissements aux heures de pointe.",
        ],
      },
      {
        title: "Sur quels appareils",
        body: [
          "La 4K est disponible sur les Smart TV compatibles, les box Android performantes (Nvidia Shield, Fire TV 4K) et l'Apple TV 4K. Consultez le guide de votre appareil pour l'installation.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: false,
    faq: [
      { q: "Quel débit internet faut-il pour la 4K ?", a: "Environ 25 Mb/s en connexion stable, de préférence filaire, pour un flux 4K sans interruption." },
      { q: "Tous les contenus sont-ils en 4K ?", a: "La 4K concerne les contenus et chaînes compatibles ; le reste est diffusé en Full HD ou HD selon la source." },
    ],
  },
  annuel: {
    slug: "annuel",
    name: "Annuel",
    order: 10,
    metaTitle: "Abonnement IPTV annuel : 12 mois au meilleur prix",
    metaDescription:
      "Abonnement IPTV annuel 4kiptvfr.com : 12 mois à 70,99 €, soit 5,92 €/mois. La formule la plus économique, sans reconduction automatique.",
    keywords: ["abonnement iptv annuel", "iptv 12 mois", "iptv 1 an", "iptv france annuel", "iptv annee"],
    eyebrow: "Durée · 12 mois",
    h1: "L'abonnement IPTV annuel",
    lead: "La formule 12 mois est la plus avantageuse : un seul paiement, le meilleur tarif mensuel, et aucune reconduction automatique.",
    intro: [
      "L'abonnement annuel s'adresse à ceux qui ont déjà adopté l'IPTV et veulent le meilleur prix. À 70,99 € les douze mois, il revient à 5,92 €/mois, soit la moitié du tarif mensuel.",
      "Comme toutes nos offres, il est sans engagement au-delà de la période payée et sans reconduction automatique : vous restez libre.",
    ],
    sections: [
      {
        title: "Pour qui ?",
        body: [
          "La formule annuelle convient aux foyers qui utilisent l'IPTV au quotidien et souhaitent optimiser le budget. Si vous découvrez le service, une formule plus courte permet de commencer en douceur.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Combien coûte l'abonnement annuel ?", a: "70,99 € pour douze mois, soit 5,92 €/mois — la formule la plus économique." },
      { q: "Y a-t-il une reconduction automatique ?", a: "Non. Aucun renouvellement n'est prélevé automatiquement ; vous décidez de renouveler ou non." },
    ],
  },
  revendeur: {
    slug: "revendeur",
    name: "Revendeur",
    order: 11,
    metaTitle: "Devenir revendeur IPTV : programme et panel",
    metaDescription:
      "Programme revendeur IPTV 4kiptvfr.com : proposez l'IPTV à vos clients via un panel dédié. Fonctionnement, prérequis et prise de contact.",
    keywords: ["revendeur iptv", "reseller iptv", "panel iptv", "iptv revendeur france", "devenir revendeur iptv"],
    eyebrow: "Professionnels",
    h1: "Devenir revendeur IPTV",
    lead: "Vous souhaitez proposer l'IPTV à vos clients ? Le programme revendeur donne accès à un panel de gestion pour créer et administrer des accès.",
    intro: [
      "Le programme revendeur s'adresse aux professionnels et particuliers qui souhaitent commercialiser des abonnements. Il repose sur un panel de gestion permettant de créer des lignes, suivre les échéances et gérer les clients.",
      "Les conditions (volume, tarification par crédit, support dédié) sont définies au cas par cas. Contactez-nous pour recevoir les détails adaptés à votre projet.",
    ],
    sections: [
      {
        title: "Comment ça fonctionne",
        body: [
          "Après validation, vous accédez à un panel où vous générez les accès pour vos clients. Vous gérez vous-même les activations et les renouvellements, avec l'appui de notre support technique.",
        ],
      },
      {
        title: "Prérequis",
        body: [
          "Une connaissance de base de l'IPTV et de ses applications est recommandée pour accompagner vos clients dans l'installation. Nous fournissons la documentation nécessaire.",
        ],
      },
    ],
    showPricing: false,
    showIncluded: false,
    faq: [
      { q: "Comment devenir revendeur ?", a: "Contactez notre équipe via la page Contact en précisant votre projet. Nous vous transmettons les conditions et l'accès au panel." },
      { q: "Y a-t-il un volume minimum ?", a: "Les conditions, dont l'éventuel volume minimum, sont définies au cas par cas selon votre projet." },
    ],
  },
  comparatif: {
    slug: "comparatif",
    name: "Comparatif des formules",
    order: 12,
    metaTitle: "Comparatif des abonnements IPTV : quelle formule choisir ?",
    metaDescription:
      "Comparatif des formules d'abonnement IPTV 4kiptvfr.com : 3, 6 et 12 mois. Prix, tarif mensuel et conseils pour choisir la durée adaptée à votre usage.",
    keywords: ["comparatif abonnement iptv", "iptv comparatif", "quelle formule iptv", "iptv france comparatif"],
    eyebrow: "Comparer les formules",
    h1: "Comparatif des formules d'abonnement",
    lead: "Trois durées, un seul et même service complet. Ce comparatif vous aide à choisir la formule adaptée à votre usage.",
    intro: [
      "Toutes nos formules donnent accès au même service : la seule variable est la durée, qui fait baisser le tarif mensuel. Voici comment choisir.",
    ],
    sections: [
      {
        title: "Comment choisir",
        body: [
          "Pour tester : la formule 3 mois. Pour un usage régulier : la formule 6 mois. Pour la formule la plus économique au meilleur tarif : l'abonnement annuel 12 mois.",
        ],
      },
    ],
    showPricing: true,
    showIncluded: true,
    faq: [
      { q: "Les fonctionnalités changent-elles selon la formule ?", a: "Non. Toutes les formules incluent exactement le même service ; seule la durée et le tarif mensuel varient." },
      { q: "Quelle formule offre le meilleur prix ?", a: "La formule 12 mois, à 5,92 €/mois." },
    ],
  },
};

export const OFFER_LIST = Object.values(OFFERS).sort((a, b) => a.order - b.order);
export const OFFER_SLUGS = OFFER_LIST.map((o) => o.slug);
