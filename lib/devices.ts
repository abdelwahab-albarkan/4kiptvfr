/** Device-guide content for the /appareils cluster. Keyed by route slug. */

export type DeviceGuide = {
  slug: string;
  name: string;
  os?: string;
  order: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  compatibility: string[];
  quickFacts: { label: string; value: string }[];
  steps: { title: string; description: string }[];
  apps: { name: string; note: string; href: string }[];
  troubleshoot: { problem: string; cause: string; solution: string }[];
  faq: { q: string; a: string }[];
};

export const DEVICES: Record<string, DeviceGuide> = {
  samsung: {
    slug: "samsung",
    name: "Samsung",
    os: "Tizen",
    order: 1,
    metaTitle: "IPTV sur Samsung Smart TV : installation, application et dépannage",
    metaDescription:
      "Guide complet pour installer 4kiptvfr.com sur une Samsung Smart TV (Tizen) : applications compatibles, configuration pas à pas et solutions aux problèmes courants.",
    keywords: ["iptv samsung", "iptv france samsung", "comment installer iptv sur samsung", "application iptv samsung"],
    eyebrow: "Appareils · Samsung",
    h1: "IPTV sur Samsung Smart TV",
    lead: "Les téléviseurs Samsung récents lisent l'IPTV directement, sans boîtier. Voici comment installer, configurer et dépanner 4kiptvfr.com sur Tizen.",
    intro: [
      "Depuis 2016, les Smart TV Samsung fonctionnent sous Tizen, le système maison de la marque. Il dispose de son propre magasin d'applications, qui héberge plusieurs lecteurs IPTV capables de lire vos accès 4kiptvfr.com.",
      "Contrairement à Android TV, Tizen ne permet pas d'installer des fichiers d'application externes. Vous êtes donc limité aux applications présentes sur le Samsung Apps Store — ce qui reste largement suffisant pour une expérience complète avec guide des programmes et catégories.",
    ],
    compatibility: [
      "Modèles Samsung sous Tizen (à partir des séries 2016)",
      "Résolutions HD, Full HD et 4K selon le téléviseur",
      "Connexion filaire recommandée pour la 4K",
      "Aucune box supplémentaire nécessaire",
    ],
    quickFacts: [
      { label: "Système", value: "Tizen OS (Samsung, 2016 et +)" },
      { label: "Formats supportés", value: "API Xtream Codes & playlist M3U" },
      { label: "Application conseillée", value: "Smart IPTV ou IPTV Smarters" },
      { label: "Connexion conseillée", value: "Ethernet ou Wi-Fi 5 GHz (4K)" },
      { label: "Installation", value: "Samsung Apps Store, sans fichier externe" },
    ],
    steps: [
      { title: "Ouvrez le Samsung Apps Store", description: "Depuis l'écran d'accueil, ouvrez le magasin d'applications et recherchez un lecteur IPTV compatible." },
      { title: "Installez l'application", description: "Installez Smart IPTV, IPTV Smarters ou Set IPTV. L'installation est gratuite." },
      { title: "Ajoutez vos accès", description: "Choisissez l'ajout via API Xtream ou lien M3U, puis saisissez l'URL, l'identifiant et le mot de passe reçus par e-mail." },
      { title: "Chargez vos chaînes", description: "Le guide des programmes et la vidéothèque se chargent automatiquement. Vous pouvez commencer à regarder." },
    ],
    apps: [
      { name: "Smart IPTV", note: "La référence historique sur Tizen.", href: "/applications" },
      { name: "IPTV Smarters", note: "Interface complète avec EPG et VOD.", href: "/applications/smarters" },
      { name: "Set IPTV", note: "Alternative simple et fiable.", href: "/applications" },
    ],
    troubleshoot: [
      { problem: "Les chaînes ne se chargent pas", cause: "URL ou identifiants mal saisis, serveur momentanément injoignable", solution: "Recopiez les accès sans espace depuis l'e-mail et vérifiez votre connexion." },
      { problem: "L'image se fige en 4K", cause: "Débit Wi-Fi insuffisant ou instable", solution: "Passez en Ethernet et fermez les autres appareils gourmands du réseau." },
      { problem: "Aucune application IPTV sur le store", cause: "Modèle Tizen ancien ou magasin restreint", solution: "Utilisez Smart IPTV / Set IPTV, ou ajoutez un Fire TV Stick au téléviseur." },
    ],
    faq: [
      { q: "Comment installer l'IPTV sur une Samsung Smart TV ?", a: "Ouvrez le Samsung Apps Store, installez Smart IPTV ou IPTV Smarters, puis ajoutez vos accès via API Xtream ou lien M3U reçus par e-mail." },
      { q: "Quelle application IPTV utiliser sur Samsung ?", a: "Smart IPTV et IPTV Smarters sont les plus fiables sur Tizen. Set IPTV est une bonne alternative simple." },
      { q: "L'IPTV fonctionne-t-il sur Tizen ?", a: "Oui. Tizen n'autorise pas les fichiers d'application externes, mais les lecteurs du Samsung Apps Store suffisent pour une expérience complète." },
      { q: "Pourquoi l'IPTV ne fonctionne pas sur ma Samsung ?", a: "Le plus souvent : identifiants mal saisis, abonnement expiré ou connexion internet instable. Vérifiez ces trois points en premier." },
      { q: "Comment éviter les coupures sur Samsung ?", a: "Privilégiez une connexion Ethernet, un Wi-Fi 5 GHz et, si votre débit est limité, réduisez la qualité en Full HD." },
      { q: "Faut-il un boîtier en plus de la Samsung ?", a: "Non. Une Samsung récente sous Tizen lit l'IPTV directement, sans matériel supplémentaire." },
    ],
  },
  lg: {
    slug: "lg",
    name: "LG",
    os: "webOS",
    order: 2,
    metaTitle: "IPTV sur LG Smart TV (webOS) : installation et configuration",
    metaDescription:
      "Installer 4kiptvfr.com sur une LG Smart TV sous webOS : applications du LG Content Store, configuration pas à pas et dépannage des problèmes fréquents.",
    keywords: ["iptv lg", "iptv france lg", "comment installer iptv sur lg", "application iptv lg"],
    eyebrow: "Appareils · LG",
    h1: "IPTV sur LG Smart TV",
    lead: "Les téléviseurs LG sous webOS lisent l'IPTV via le LG Content Store. Voici la marche à suivre pour 4kiptvfr.com, de l'installation au dépannage.",
    intro: [
      "Les Smart TV LG utilisent webOS, un système fluide et réactif doté du LG Content Store. Plusieurs applications IPTV y sont disponibles et compatibles avec vos accès 4kiptvfr.com.",
      "Comme pour Samsung, webOS est un environnement fermé : on installe les applications depuis le magasin officiel, sans fichiers externes. La configuration reste identique d'une application à l'autre.",
    ],
    compatibility: [
      "Téléviseurs LG sous webOS (modèles récents)",
      "HD, Full HD et 4K selon le modèle",
      "Compatible API Xtream et listes M3U",
      "Fonctionne sans matériel additionnel",
    ],
    quickFacts: [
      { label: "Système", value: "webOS (LG)" },
      { label: "Formats supportés", value: "API Xtream Codes & playlist M3U" },
      { label: "Application conseillée", value: "Smart IPTV ou IPTV Smarters" },
      { label: "Connexion conseillée", value: "Ethernet ou Wi-Fi 5 GHz" },
      { label: "Installation", value: "LG Content Store, en un clic" },
    ],
    steps: [
      { title: "Ouvrez le LG Content Store", description: "Recherchez un lecteur IPTV compatible comme Smart IPTV ou IPTV Smarters." },
      { title: "Installez l'application", description: "L'installation se fait en un clic depuis le magasin webOS." },
      { title: "Renseignez vos identifiants", description: "Ajoutez votre abonnement via API Xtream ou lien M3U avec les accès reçus par e-mail." },
      { title: "Profitez du direct", description: "Vos chaînes et votre guide des programmes apparaissent immédiatement." },
    ],
    apps: [
      { name: "Smart IPTV", note: "Compatible webOS, très populaire.", href: "/applications" },
      { name: "IPTV Smarters", note: "EPG, catégories et VOD intégrés.", href: "/applications/smarters" },
      { name: "Set IPTV", note: "Configuration rapide.", href: "/applications" },
    ],
    troubleshoot: [
      { problem: "Liste de chaînes vide", cause: "Lien de playlist expiré ou mal saisi", solution: "Recopiez soigneusement les accès depuis l'e-mail de confirmation, ou renouvelez l'abonnement." },
      { problem: "Pas de son sur certaines chaînes", cause: "Codec audio non pris en charge en Bitstream", solution: "Réglez la sortie audio du téléviseur sur PCM dans les paramètres son." },
      { problem: "Application lente à ouvrir", cause: "Mémoire saturée sur un modèle ancien", solution: "Redémarrez le téléviseur et fermez les applications en arrière-plan." },
    ],
    faq: [
      { q: "Comment installer l'IPTV sur une LG Smart TV ?", a: "Ouvrez le LG Content Store, installez Smart IPTV ou IPTV Smarters, puis ajoutez vos accès via API Xtream ou lien M3U." },
      { q: "Quelle application IPTV pour LG webOS ?", a: "Smart IPTV et IPTV Smarters sont les plus adaptées au LG Content Store." },
      { q: "L'IPTV fonctionne-t-il sur toutes les LG ?", a: "Sur les modèles webOS récents, oui. Les téléviseurs LG plus anciens peuvent avoir un catalogue d'applications plus limité." },
      { q: "Pourquoi ma liste de chaînes est-elle vide ?", a: "Le lien de playlist a probablement expiré ou été mal saisi : recopiez les accès depuis votre e-mail." },
      { q: "Comment régler un problème de son sur LG ?", a: "Passez la sortie audio de Bitstream à PCM : certains flux utilisent un codec non pris en charge en Bitstream." },
      { q: "Faut-il un abonnement séparé par téléviseur ?", a: "Non, un même abonnement fonctionne sur vos appareils selon la formule choisie ; un flux simultané par ligne." },
    ],
  },
  "android-tv": {
    slug: "android-tv",
    name: "Android TV",
    os: "Android TV / Google TV",
    order: 3,
    metaTitle: "IPTV sur Android TV : meilleures applications et installation",
    metaDescription:
      "4kiptvfr.com sur Android TV et Google TV (Sony, Philips, TCL, box) : TiviMate, IPTV Smarters, installation depuis le Play Store et dépannage.",
    keywords: ["iptv android tv", "iptv google tv", "google tv iptv", "formuler iptv", "iptv x96", "x96 mini iptv", "android box iptv", "meilleure application iptv android tv", "installer iptv android tv"],
    eyebrow: "Appareils · Android TV",
    h1: "IPTV sur Android TV",
    lead: "La plateforme la plus flexible : Android TV donne accès aux meilleurs lecteurs IPTV du Play Store, dont TiviMate. Voici comment en profiter.",
    intro: [
      "Android TV (et sa déclinaison Google TV) équipe de nombreux téléviseurs Sony, Philips et TCL, ainsi que des boîtiers dédiés. Grâce au Google Play Store, vous accédez aux applications IPTV les plus complètes du marché.",
      "C'est la plateforme idéale si vous recherchez une expérience avancée : guide des programmes détaillé, enregistrement, personnalisation de l'interface. TiviMate y est particulièrement apprécié.",
    ],
    compatibility: [
      "Téléviseurs Android TV / Google TV",
      "Box Android, Chromecast avec Google TV, Nvidia Shield",
      "Prise en charge complète de la 4K/HDR",
      "Toutes les applications du Play Store",
    ],
    quickFacts: [
      { label: "Système", value: "Android TV / Google TV" },
      { label: "Formats supportés", value: "API Xtream Codes, M3U, EPG XMLTV" },
      { label: "Application conseillée", value: "TiviMate (premium) ou IPTV Smarters Pro" },
      { label: "Connexion conseillée", value: "Ethernet ou Wi-Fi 5 GHz pour la 4K" },
      { label: "Installation", value: "Google Play Store, sans manipulation" },
    ],
    steps: [
      { title: "Ouvrez le Google Play Store", description: "Recherchez TiviMate ou IPTV Smarters Pro et installez l'application." },
      { title: "Lancez l'application", description: "Choisissez l'ajout d'une liste via API Xtream ou URL M3U." },
      { title: "Saisissez vos accès", description: "Entrez l'URL du serveur et vos identifiants 4kiptvfr.com." },
      { title: "Personnalisez", description: "Organisez vos favoris et activez le guide des programmes selon vos préférences." },
    ],
    apps: [
      { name: "TiviMate", note: "La meilleure expérience Android TV.", href: "/applications/tivimate" },
      { name: "IPTV Smarters Pro", note: "Gratuit et complet.", href: "/applications/smarters" },
      { name: "OTT Navigator", note: "Personnalisation avancée.", href: "/applications/ott-navigator" },
    ],
    troubleshoot: [
      { problem: "L'image saccade", cause: "Buffer trop court ou débit insuffisant", solution: "Réduisez le buffer dans les réglages et visez au moins 25 Mb/s pour la 4K." },
      { problem: "TiviMate réclame le premium", cause: "Fonctions avancées verrouillées", solution: "La version gratuite suffit pour lire vos chaînes ; le premium n'ajoute que le multi-listes et l'enregistrement." },
      { problem: "L'EPG ne se synchronise pas", cause: "Source EPG non configurée", solution: "Activez le guide des programmes dans les réglages du lecteur et laissez-le se charger." },
    ],
    faq: [
      { q: "Quelle est la meilleure application IPTV sur Android TV ?", a: "TiviMate offre l'interface la plus ergonomique ; IPTV Smarters Pro est l'alternative gratuite la plus complète." },
      { q: "Comment installer l'IPTV sur Android TV ?", a: "Installez TiviMate ou IPTV Smarters Pro depuis le Google Play Store, puis ajoutez vos accès via API Xtream ou lien M3U." },
      { q: "TiviMate est-il gratuit ?", a: "Oui pour lire l'IPTV. La version premium n'ajoute que des options avancées (multi-listes, enregistrement)." },
      { q: "Pourquoi l'image saccade-t-elle sur Android TV ?", a: "Généralement un débit insuffisant ou un buffer mal réglé : réduisez le buffer et privilégiez l'Ethernet." },
      { q: "Puis-je enregistrer les chaînes ?", a: "Oui, avec TiviMate Premium ou un lecteur compatible, si votre appareil dispose de stockage." },
      { q: "Android TV gère-t-il la 4K HDR ?", a: "Oui, la plupart des appareils Android TV récents lisent la 4K avec HDR, avec une connexion adaptée." },
      { q: "Est-ce la même chose sur Google TV ?", a: "Oui. Google TV est l'interface récente construite sur Android TV : le Play Store, les applications (TiviMate, Smarters) et l'installation sont identiques." },
      { q: "Comment installer l'IPTV sur un boîtier Formuler ?", a: "Les Formuler (Z-series) tournent sous Android : installez votre lecteur depuis le store ou via l'application maison, puis ajoutez vos accès Xtream ou M3U comme sur n'importe quel Android TV." },
      { q: "Et sur un boîtier X96 ou une Mi Box Xiaomi ?", a: "Ces boîtiers sont sous Android TV : la procédure est la même — installez TiviMate ou IPTV Smarters Pro depuis le Play Store, puis saisissez vos identifiants. Sur les X96 d'entrée de gamme, évitez de multiplier les applications pour préserver la fluidité." },
    ],
  },
  firestick: {
    slug: "firestick",
    name: "Fire TV Stick",
    os: "Fire OS",
    order: 4,
    metaTitle: "IPTV sur Fire TV Stick (Amazon) : installation complète",
    metaDescription:
      "Installer 4kiptvfr.com sur un Amazon Fire TV Stick : applications depuis l'Appstore, méthode Downloader et solutions aux problèmes de lecture.",
    keywords: ["iptv firestick", "iptv france firestick", "comment installer iptv sur firestick", "application iptv firestick"],
    eyebrow: "Appareils · Fire TV",
    h1: "IPTV sur Fire TV Stick",
    lead: "Le boîtier le plus populaire : branchez le Fire TV Stick sur n'importe quel téléviseur et profitez de 4kiptvfr.com en quelques minutes.",
    intro: [
      "Le Fire TV Stick d'Amazon transforme toute télévision avec une prise HDMI en Smart TV. C'est une solution économique et efficace pour l'IPTV.",
      "Fire OS est basé sur Android : on installe la plupart des lecteurs depuis l'Amazon Appstore, et certaines applications via l'outil Downloader lorsqu'elles n'y figurent pas.",
    ],
    compatibility: [
      "Fire TV Stick, 4K et 4K Max",
      "Fire TV Cube",
      "Certaines Smart TV avec Fire OS intégré",
      "4K/HDR selon le modèle",
    ],
    quickFacts: [
      { label: "Système", value: "Fire OS (basé sur Android)" },
      { label: "Formats supportés", value: "API Xtream Codes & playlist M3U" },
      { label: "Application conseillée", value: "IPTV Smarters Pro (Appstore) ou TiviMate (Downloader)" },
      { label: "Connexion conseillée", value: "Wi-Fi 5 GHz ; adaptateur Ethernet possible" },
      { label: "Installation", value: "Amazon Appstore, ou Downloader pour les APK" },
    ],
    steps: [
      { title: "Installez un lecteur IPTV", description: "Depuis l'Appstore, installez IPTV Smarters Pro. Pour TiviMate, utilisez l'application Downloader." },
      { title: "Ouvrez l'application", description: "Sélectionnez l'ajout via API Xtream ou lien M3U." },
      { title: "Entrez vos identifiants", description: "Saisissez l'URL et les accès 4kiptvfr.com reçus par e-mail." },
      { title: "Regardez", description: "Vos chaînes se chargent ; ajoutez vos favoris pour un accès rapide." },
    ],
    apps: [
      { name: "IPTV Smarters Pro", note: "Disponible directement sur l'Appstore.", href: "/applications/smarters" },
      { name: "TiviMate", note: "Via Downloader, expérience premium.", href: "/applications/tivimate" },
      { name: "Kodi", note: "Add-on PVR pour Fire OS.", href: "/applications/kodi" },
    ],
    troubleshoot: [
      { problem: "Le Fire TV Stick chauffe et rame", cause: "Mémoire limitée sur les modèles d'entrée de gamme", solution: "Fermez les applications en arrière-plan et redémarrez l'appareil régulièrement." },
      { problem: "Downloader n'installe pas l'appli", cause: "Sources inconnues désactivées", solution: "Activez « Applications de sources inconnues » dans les paramètres développeur." },
      { problem: "Buffering en Wi-Fi", cause: "Signal Wi-Fi faible ou 2,4 GHz saturé", solution: "Rapprochez-vous de la box, passez en 5 GHz ou utilisez un adaptateur Ethernet." },
    ],
    faq: [
      { q: "Comment installer l'IPTV sur un Fire TV Stick ?", a: "Installez IPTV Smarters Pro depuis l'Appstore, ou TiviMate via l'application Downloader, puis ajoutez vos accès Xtream/M3U." },
      { q: "Faut-il un abonnement Amazon Prime ?", a: "Non, l'IPTV fonctionne indépendamment de Prime ; seul le Fire TV Stick et votre abonnement 4kiptvfr.com sont nécessaires." },
      { q: "Comment installer TiviMate sur Firestick ?", a: "TiviMate n'est pas sur l'Appstore : installez l'application Downloader, activez les sources inconnues, puis téléchargez l'APK." },
      { q: "Le Fire TV Stick rame, que faire ?", a: "Fermez les applications ouvertes, videz le cache et redémarrez. Le modèle 4K Max offre de meilleures performances." },
      { q: "Quelle version de Fire TV Stick choisir ?", a: "Pour la 4K et la fluidité, le Fire TV Stick 4K ou 4K Max est recommandé." },
      { q: "Peut-on brancher un câble Ethernet ?", a: "Oui, via un adaptateur Ethernet officiel — idéal pour stabiliser la 4K." },
    ],
  },
  "apple-tv": {
    slug: "apple-tv",
    name: "Apple TV",
    os: "tvOS",
    order: 5,
    metaTitle: "IPTV sur Apple TV (tvOS) : applications et configuration",
    metaDescription:
      "Utiliser 4kiptvfr.com sur Apple TV : applications tvOS compatibles comme GSE Smart IPTV, installation et réglages recommandés.",
    keywords: ["iptv apple tv", "iptv france apple tv", "comment installer iptv sur apple tv", "application iptv apple tv"],
    eyebrow: "Appareils · Apple TV",
    h1: "IPTV sur Apple TV",
    lead: "Sur Apple TV, l'IPTV passe par des applications tvOS de l'App Store. Voici les options compatibles avec 4kiptvfr.com et leur configuration.",
    intro: [
      "L'Apple TV offre une interface soignée et une excellente qualité de lecture. Les applications IPTV s'installent depuis l'App Store tvOS.",
      "GSE Smart IPTV et IPTV Smarters figurent parmi les lecteurs compatibles. La configuration se fait via lien M3U ou API Xtream, comme sur les autres plateformes.",
    ],
    compatibility: [
      "Apple TV HD et Apple TV 4K",
      "tvOS récent",
      "4K Dolby Vision selon le contenu",
      "Configuration M3U ou Xtream",
    ],
    quickFacts: [
      { label: "Système", value: "tvOS (Apple TV HD & 4K)" },
      { label: "Formats supportés", value: "API Xtream Codes & playlist M3U" },
      { label: "Application conseillée", value: "GSE Smart IPTV ou IPTV Smarters" },
      { label: "Connexion conseillée", value: "Ethernet ou Wi-Fi ; AirPlay disponible" },
      { label: "Installation", value: "App Store tvOS" },
    ],
    steps: [
      { title: "Installez une application tvOS", description: "Depuis l'App Store, installez GSE Smart IPTV ou un lecteur compatible." },
      { title: "Ajoutez votre playlist", description: "Sélectionnez l'ajout via URL M3U ou API Xtream." },
      { title: "Saisissez vos accès", description: "Entrez les identifiants 4kiptvfr.com reçus par e-mail." },
      { title: "Lancez la lecture", description: "Naviguez dans vos chaînes et votre vidéothèque." },
    ],
    apps: [
      { name: "GSE Smart IPTV", note: "Compatible tvOS et iOS.", href: "/applications/gse-smart-iptv" },
      { name: "IPTV Smarters", note: "Interface familière multiplateforme.", href: "/applications/smarters" },
      { name: "VLC", note: "Lecteur gratuit universel.", href: "/applications/vlc" },
    ],
    troubleshoot: [
      { problem: "L'application n'est pas sur l'App Store", cause: "Disponibilité variable selon la région", solution: "Privilégiez GSE Smart IPTV, disponible en France." },
      { problem: "Erreur de connexion au serveur", cause: "Flux ou identifiants invalides", solution: "Vérifiez la validité de l'abonnement et recopiez les accès sans erreur." },
      { problem: "Diffusion depuis l'iPhone qui coupe", cause: "AirPlay sur un Wi-Fi saturé", solution: "Utilisez le même réseau 5 GHz, ou lisez directement dans l'application Apple TV." },
    ],
    faq: [
      { q: "Comment installer l'IPTV sur Apple TV ?", a: "Installez GSE Smart IPTV ou IPTV Smarters depuis l'App Store tvOS, puis ajoutez vos accès via M3U ou API Xtream." },
      { q: "Quelle application IPTV pour tvOS ?", a: "GSE Smart IPTV est la référence sur Apple TV ; IPTV Smarters est également disponible." },
      { q: "Peut-on utiliser AirPlay depuis l'iPhone ?", a: "Oui, vous pouvez diffuser depuis un iPhone ou iPad via AirPlay, ou lire directement sur l'Apple TV." },
      { q: "L'Apple TV gère-t-elle la 4K Dolby Vision ?", a: "Oui, l'Apple TV 4K prend en charge la 4K et le Dolby Vision selon les contenus." },
      { q: "Pourquoi l'application est-elle introuvable ?", a: "Certaines applications IPTV ne sont pas publiées sur tvOS selon les régions : utilisez GSE Smart IPTV." },
    ],
  },
  xiaomi: {
    slug: "xiaomi",
    name: "Xiaomi",
    os: "Android TV",
    order: 6,
    metaTitle: "IPTV sur Xiaomi (Mi Box / TV Stick) : installation",
    metaDescription:
      "4kiptvfr.com sur les appareils Xiaomi sous Android TV (Mi Box, Mi TV Stick) : installation depuis le Play Store, applications et dépannage.",
    keywords: ["iptv xiaomi", "iptv france xiaomi", "installer iptv xiaomi mi box"],
    eyebrow: "Appareils · Xiaomi",
    h1: "IPTV sur Xiaomi (Mi Box & TV Stick)",
    lead: "Les appareils Xiaomi tournent sous Android TV : vous profitez donc des mêmes excellents lecteurs que sur n'importe quelle box Android.",
    intro: [
      "La Mi Box et le Mi TV Stick de Xiaomi fonctionnent sous Android TV. Ils offrent un accès complet au Google Play Store et à ses applications IPTV.",
      "Ce sont des appareils économiques et polyvalents, parfaits pour ajouter l'IPTV à un téléviseur non connecté.",
    ],
    compatibility: [
      "Xiaomi Mi Box S, Mi TV Stick, TV Box",
      "Android TV avec Play Store",
      "Selon le modèle : Full HD ou 4K",
      "Compatible TiviMate et Smarters",
    ],
    quickFacts: [
      { label: "Système", value: "Android TV (Xiaomi Mi Box / TV Stick)" },
      { label: "Formats supportés", value: "API Xtream Codes, M3U, EPG" },
      { label: "Application conseillée", value: "TiviMate ou IPTV Smarters Pro" },
      { label: "Connexion conseillée", value: "Wi-Fi 5 GHz (Full HD/4K selon modèle)" },
      { label: "Installation", value: "Google Play Store" },
    ],
    steps: [
      { title: "Ouvrez le Play Store", description: "Installez TiviMate ou IPTV Smarters Pro." },
      { title: "Ajoutez votre liste", description: "Via API Xtream ou lien M3U." },
      { title: "Entrez vos accès", description: "Saisissez vos identifiants 4kiptvfr.com." },
      { title: "Regardez", description: "Organisez vos favoris et le guide des programmes." },
    ],
    apps: [
      { name: "TiviMate", note: "Idéal sur Xiaomi.", href: "/applications/tivimate" },
      { name: "IPTV Smarters Pro", note: "Gratuit et complet.", href: "/applications/smarters" },
      { name: "XCIPTV", note: "Léger et fluide.", href: "/applications/xciptv" },
    ],
    troubleshoot: [
      { problem: "Le Mi TV Stick manque de mémoire", cause: "Stockage interne limité", solution: "Désinstallez les applications inutiles et videz le cache régulièrement." },
      { problem: "Coupures en soirée", cause: "Wi-Fi domestique saturé aux heures de pointe", solution: "Passez en 5 GHz, rapprochez-vous de la box ou réduisez la qualité." },
      { problem: "L'application se ferme seule", cause: "Mémoire vive insuffisante sur le TV Stick", solution: "Redémarrez l'appareil ; la Mi Box S offre plus de ressources que le Stick." },
    ],
    faq: [
      { q: "Comment installer l'IPTV sur une Xiaomi Mi Box ?", a: "Depuis le Google Play Store, installez TiviMate ou IPTV Smarters Pro, puis ajoutez vos accès Xtream/M3U." },
      { q: "Le Mi TV Stick gère-t-il la 4K ?", a: "Le Mi TV Stick est plutôt Full HD ; pour la 4K, choisissez une Mi Box S ou une TV Box Xiaomi 4K." },
      { q: "Quelle application IPTV pour Xiaomi ?", a: "TiviMate pour l'ergonomie, IPTV Smarters Pro pour une solution gratuite complète." },
      { q: "Pourquoi l'application se ferme-t-elle ?", a: "Souvent un manque de mémoire : videz le cache, désinstallez les applications inutiles et redémarrez." },
      { q: "Xiaomi et Android TV, est-ce la même chose ?", a: "Les box et sticks Xiaomi tournent sous Android TV : la procédure d'installation est identique à celle d'Android TV." },
    ],
  },
  "nvidia-shield": {
    slug: "nvidia-shield",
    name: "Nvidia Shield",
    os: "Android TV",
    order: 7,
    metaTitle: "IPTV sur Nvidia Shield : configuration haut de gamme",
    metaDescription:
      "4kiptvfr.com sur Nvidia Shield TV : la box Android TV la plus puissante pour l'IPTV 4K. Installation, réglages et applications recommandées.",
    keywords: ["iptv nvidia shield", "iptv france nvidia shield", "configurer iptv nvidia shield"],
    eyebrow: "Appareils · Nvidia Shield",
    h1: "IPTV sur Nvidia Shield TV",
    lead: "La Nvidia Shield est la box Android TV la plus puissante du marché — un choix haut de gamme pour l'IPTV en 4K sans compromis.",
    intro: [
      "La Nvidia Shield TV combine puissance, fluidité et upscaling 4K par IA. C'est la référence pour qui veut la meilleure expérience Android TV.",
      "Toutes les applications IPTV du Play Store y fonctionnent parfaitement, avec des performances idéales pour le guide des programmes chargé et la lecture multi-flux.",
    ],
    compatibility: [
      "Nvidia Shield TV et Shield TV Pro",
      "Android TV, Play Store complet",
      "4K HDR, Dolby Vision & Atmos",
      "Upscaling IA vers 4K",
    ],
    quickFacts: [
      { label: "Système", value: "Android TV (Nvidia Shield / Shield Pro)" },
      { label: "Formats supportés", value: "API Xtream Codes, M3U, EPG XMLTV" },
      { label: "Application conseillée", value: "TiviMate (fluidité maximale)" },
      { label: "Connexion conseillée", value: "Ethernet (port intégré) pour la 4K" },
      { label: "Installation", value: "Google Play Store" },
    ],
    steps: [
      { title: "Installez votre lecteur", description: "TiviMate est particulièrement fluide sur Shield." },
      { title: "Configurez la liste", description: "Ajoutez 4kiptvfr.com via API Xtream." },
      { title: "Ajustez les réglages", description: "Activez le décodage matériel et l'EPG pour une navigation optimale." },
    ],
    apps: [
      { name: "TiviMate", note: "Performances optimales sur Shield.", href: "/applications/tivimate" },
      { name: "IPTV Smarters Pro", note: "Alternative gratuite et fiable.", href: "/applications/smarters" },
      { name: "Kodi", note: "Pour une médiathèque unifiée.", href: "/applications/kodi" },
    ],
    troubleshoot: [
      { problem: "L'upscaling 4K ne se voit pas", cause: "Option désactivée", solution: "Activez l'upscaling IA dans les paramètres d'affichage de la Shield." },
      { problem: "Léger décalage EPG", cause: "Source EPG non synchronisée", solution: "Forcez la mise à jour du guide dans TiviMate et vérifiez le fuseau horaire." },
      { problem: "Saccades malgré la puissance", cause: "Wi-Fi utilisé au lieu de l'Ethernet", solution: "Branchez le câble Ethernet : la Shield dispose d'un port dédié." },
    ],
    faq: [
      { q: "La Nvidia Shield vaut-elle le coup pour l'IPTV ?", a: "Oui : c'est la box Android TV la plus puissante, idéale pour la 4K, le multi-flux et un EPG chargé sans ralentissement." },
      { q: "Quelle application IPTV sur Nvidia Shield ?", a: "TiviMate exploite au mieux la puissance de la Shield ; IPTV Smarters Pro reste une excellente alternative gratuite." },
      { q: "Comment activer l'upscaling 4K ?", a: "Dans les paramètres d'affichage de la Shield, activez l'upscaling IA pour améliorer la netteté des chaînes HD." },
      { q: "Faut-il la version Pro ?", a: "La Shield TV standard suffit pour l'IPTV ; la Pro apporte surtout du stockage et des usages serveur." },
      { q: "Ethernet ou Wi-Fi sur la Shield ?", a: "L'Ethernet est recommandé pour une stabilité parfaite en 4K, la Shield disposant d'un port dédié." },
    ],
  },
  "mag": {
    slug: "mag",
    name: "MAG Box",
    os: "Linux",
    order: 8,
    metaTitle: "IPTV sur MAG Box : configuration du portail",
    metaDescription:
      "Configurer 4kiptvfr.com sur un décodeur MAG Box : saisie du portail, adresse MAC et réglages. Guide clair pour les boîtiers MAG sous Linux.",
    keywords: ["iptv mag box", "iptv france mag", "configurer mag box iptv", "portail mag iptv"],
    eyebrow: "Appareils · MAG",
    h1: "IPTV sur MAG Box",
    lead: "Les décodeurs MAG utilisent un portail dédié plutôt qu'une application. La configuration passe par l'adresse du portail et l'adresse MAC de l'appareil.",
    intro: [
      "Les boîtiers MAG (Infomir) sont des décodeurs Linux conçus spécifiquement pour l'IPTV. Ils ne fonctionnent pas avec des applications classiques mais avec un portail.",
      "La mise en service consiste à renseigner l'URL du portail fournie et à communiquer l'adresse MAC de votre boîtier lors de la commande.",
    ],
    compatibility: [
      "MAG 254, 322, 324, 424 et modèles récents",
      "Système Linux dédié",
      "Configuration par portail + adresse MAC",
      "HD / 4K selon le modèle",
    ],
    quickFacts: [
      { label: "Système", value: "Linux dédié (Infomir MAG)" },
      { label: "Formats supportés", value: "Portail Stalker (URL + adresse MAC)" },
      { label: "Application conseillée", value: "Portail intégré (aucune appli à installer)" },
      { label: "Connexion conseillée", value: "Ethernet de préférence" },
      { label: "Installation", value: "Réglages serveur du boîtier" },
    ],
    steps: [
      { title: "Relevez l'adresse MAC", description: "Elle figure sous le boîtier et dans les paramètres système." },
      { title: "Renseignez le portail", description: "Dans les réglages serveur, saisissez l'URL de portail fournie avec votre abonnement." },
      { title: "Redémarrez", description: "Le boîtier charge la liste des chaînes et le guide des programmes." },
    ],
    apps: [
      { name: "Portail intégré", note: "Aucune application à installer.", href: "/formats/xtream-codes" },
    ],
    troubleshoot: [
      { problem: "Le portail ne se charge pas", cause: "URL erronée ou adresse MAC non enregistrée", solution: "Vérifiez l'URL du portail et que l'adresse MAC transmise correspond au boîtier utilisé." },
      { problem: "« Your STB is blocked »", cause: "Adresse MAC non autorisée sur le serveur", solution: "Communiquez au support l'adresse MAC exacte du boîtier pour l'activer." },
      { problem: "Boîtier bloqué au démarrage", cause: "Firmware ou réglage réseau", solution: "Vérifiez la connexion Ethernet et redémarrez ; mettez à jour le firmware si nécessaire." },
    ],
    faq: [
      { q: "Comment configurer l'IPTV sur une MAG Box ?", a: "Relevez l'adresse MAC du boîtier, saisissez l'URL du portail dans les réglages serveur, puis redémarrez." },
      { q: "Où trouver l'adresse MAC de mon MAG ?", a: "Sous le boîtier (étiquette) et dans les paramètres système du décodeur." },
      { q: "Pourquoi mon MAG affiche « blocked » ?", a: "L'adresse MAC n'est pas autorisée sur le serveur : transmettez-la au support pour l'activer." },
      { q: "Faut-il installer une application sur MAG ?", a: "Non, les MAG utilisent un portail intégré, sans application à installer." },
      { q: "Quels modèles MAG sont compatibles ?", a: "Les MAG 254, 322, 324, 424 et modèles récents sont pris en charge." },
    ],
  },
  windows: {
    slug: "windows",
    name: "Windows",
    os: "Windows 10 / 11",
    order: 9,
    metaTitle: "IPTV sur PC Windows : lecteurs et configuration",
    metaDescription:
      "Regarder 4kiptvfr.com sur un PC Windows : VLC, lecteurs dédiés, configuration par lien M3U ou API Xtream. Guide pas à pas pour Windows 10 et 11.",
    keywords: ["iptv pc", "iptv windows", "iptv france ordinateur", "iptv windows 10", "iptv windows 11"],
    eyebrow: "Appareils · Windows",
    h1: "IPTV sur PC Windows",
    lead: "Sur Windows, l'IPTV se lit avec VLC ou un lecteur dédié. Pratique pour vérifier rapidement un abonnement ou regarder au bureau.",
    intro: [
      "Windows convient parfaitement pour regarder l'IPTV, notamment pour tester un abonnement avant de l'installer sur la TV.",
      "VLC lit une playlist M3U en quelques clics ; des lecteurs dédiés offrent une interface avec guide des programmes plus proche de l'expérience télé.",
    ],
    compatibility: [
      "Windows 10 et Windows 11",
      "Lecture par M3U (VLC) ou Xtream (lecteurs dédiés)",
      "Idéal pour tester un abonnement",
      "Diffusion possible vers la TV (HDMI, Miracast)",
    ],
    quickFacts: [
      { label: "Système", value: "Windows 10 / 11" },
      { label: "Formats supportés", value: "M3U (VLC), API Xtream (lecteurs dédiés)" },
      { label: "Application conseillée", value: "VLC ou IPTV Smarters Pro (Windows)" },
      { label: "Connexion conseillée", value: "Ethernet ou Wi-Fi" },
      { label: "Installation", value: "VLC.org ou Microsoft Store" },
    ],
    steps: [
      { title: "Installez un lecteur", description: "VLC pour une lecture M3U simple, ou un lecteur IPTV Windows pour l'EPG." },
      { title: "Ouvrez votre playlist", description: "Dans VLC : Média › Ouvrir un flux réseau, puis collez votre lien M3U." },
      { title: "Regardez", description: "Les chaînes s'affichent ; enregistrez la playlist pour y revenir facilement." },
    ],
    apps: [
      { name: "VLC", note: "Gratuit, lecture M3U immédiate.", href: "/applications/vlc" },
      { name: "IPTV Smarters Pro", note: "Interface TV avec EPG sur PC.", href: "/applications/smarters" },
      { name: "Kodi", note: "Médiathèque avec add-on IPTV.", href: "/applications/kodi" },
    ],
    troubleshoot: [
      { problem: "VLC ne charge pas la playlist", cause: "URL M3U incomplète ou abonnement inactif", solution: "Collez l'URL complète et testez-la dans un navigateur ; vérifiez la validité de l'abonnement." },
      { problem: "Lecture qui saccade sur PC", cause: "Débit insuffisant ou décodage logiciel", solution: "Activez le décodage matériel dans VLC et vérifiez votre vitesse internet." },
      { problem: "Pas de guide des programmes dans VLC", cause: "VLC ne gère pas l'EPG", solution: "Utilisez un lecteur dédié comme IPTV Smarters Pro pour l'EPG." },
    ],
    faq: [
      { q: "Comment regarder l'IPTV sur Windows ?", a: "Installez VLC, ouvrez « Flux réseau » et collez votre lien M3U ; ou installez IPTV Smarters Pro pour une interface avec EPG." },
      { q: "VLC est-il suffisant pour l'IPTV ?", a: "VLC lit parfaitement les chaînes en M3U, mais n'affiche pas le guide des programmes : pour l'EPG, préférez un lecteur dédié." },
      { q: "Peut-on utiliser l'IPTV sur Windows 11 ?", a: "Oui, la procédure est identique sur Windows 10 et 11." },
      { q: "Comment tester rapidement un abonnement ?", a: "Windows est idéal pour cela : VLC permet de vérifier vos accès en quelques secondes." },
      { q: "Comment diffuser vers la TV depuis le PC ?", a: "Reliez le PC en HDMI, ou utilisez Miracast pour une diffusion sans fil vers un téléviseur compatible." },
    ],
  },
  mac: {
    slug: "mac",
    name: "Mac",
    os: "macOS",
    order: 10,
    metaTitle: "IPTV sur Mac : applications et configuration",
    metaDescription:
      "Regarder 4kiptvfr.com sur Mac (macOS) : VLC, GSE Smart IPTV et lecteurs compatibles, configuration par M3U ou API Xtream. Guide pas à pas.",
    keywords: ["iptv mac", "iptv macos", "iptv france mac", "iptv macbook", "iptv vlc mac"],
    eyebrow: "Appareils · Mac",
    h1: "IPTV sur Mac",
    lead: "Sur macOS, VLC et quelques lecteurs dédiés lisent parfaitement l'IPTV. Une solution simple pour regarder ou tester vos accès sur MacBook et iMac.",
    intro: [
      "macOS gère très bien l'IPTV, que ce soit pour un usage quotidien ou pour vérifier un abonnement avant de l'installer ailleurs.",
      "VLC pour Mac ouvre une playlist M3U en quelques secondes ; GSE Smart IPTV offre une interface plus complète avec guide des programmes.",
    ],
    compatibility: [
      "macOS récent (Intel & Apple Silicon)",
      "Lecture par M3U (VLC) ou Xtream",
      "AirPlay vers l'Apple TV",
      "Idéal pour tester un abonnement",
    ],
    quickFacts: [
      { label: "Système", value: "macOS (Intel & Apple Silicon)" },
      { label: "Formats supportés", value: "M3U (VLC), API Xtream (GSE)" },
      { label: "Application conseillée", value: "VLC ou GSE Smart IPTV" },
      { label: "Connexion conseillée", value: "Wi-Fi ou Ethernet ; AirPlay vers Apple TV" },
      { label: "Installation", value: "VLC.org ou Mac App Store" },
    ],
    steps: [
      { title: "Installez un lecteur", description: "VLC pour Mac, ou GSE Smart IPTV pour une interface avec EPG." },
      { title: "Ajoutez votre playlist", description: "Dans VLC : Fichier › Ouvrir le flux réseau, puis collez votre lien M3U." },
      { title: "Regardez", description: "Diffusez si besoin vers l'Apple TV via AirPlay." },
    ],
    apps: [
      { name: "VLC", note: "Gratuit, lecture M3U immédiate.", href: "/applications/vlc" },
      { name: "GSE Smart IPTV", note: "Interface complète avec EPG.", href: "/applications/gse-smart-iptv" },
      { name: "IPTV Smarters Pro", note: "Version macOS disponible.", href: "/applications/smarters" },
    ],
    troubleshoot: [
      { problem: "La playlist ne s'ouvre pas dans VLC", cause: "Lien M3U incomplet ou abonnement inactif", solution: "Vérifiez le lien complet et sa validité en le testant dans un navigateur." },
      { problem: "Diffusion AirPlay qui coupe", cause: "Wi-Fi encombré entre le Mac et l'Apple TV", solution: "Utilisez le même réseau 5 GHz, ou lisez directement sur l'Apple TV." },
      { problem: "Pas d'EPG dans VLC", cause: "VLC ne gère pas le guide", solution: "Utilisez GSE Smart IPTV pour bénéficier du guide des programmes." },
    ],
    faq: [
      { q: "Comment regarder l'IPTV sur Mac ?", a: "Installez VLC et ouvrez le flux réseau avec votre lien M3U, ou utilisez GSE Smart IPTV pour une interface avec EPG." },
      { q: "L'IPTV fonctionne-t-il sur les Mac Apple Silicon ?", a: "Oui, VLC et GSE Smart IPTV fonctionnent sur les Mac Intel comme Apple Silicon (M1/M2/M3)." },
      { q: "Peut-on diffuser vers l'Apple TV ?", a: "Oui, via AirPlay, en gardant le Mac et l'Apple TV sur le même réseau Wi-Fi." },
      { q: "Quelle application IPTV pour macOS ?", a: "VLC pour la simplicité, GSE Smart IPTV pour une interface complète avec guide des programmes." },
      { q: "Pourquoi ma playlist ne s'ouvre pas ?", a: "Vérifiez que le lien M3U est complet et que votre abonnement est actif." },
    ],
  },
  "iphone-ipad": {
    slug: "iphone-ipad",
    name: "iPhone & iPad",
    os: "iOS / iPadOS",
    order: 6,
    metaTitle: "IPTV sur iPhone et iPad : applications et configuration",
    metaDescription:
      "Regarder 4kiptvfr.com sur iPhone et iPad : applications iOS compatibles comme GSE Smart IPTV, configuration par M3U ou Xtream et réglages recommandés.",
    keywords: ["iptv iphone", "iptv ipad", "iptv france iphone", "application iptv ios", "iptv ios"],
    eyebrow: "Appareils · iOS",
    h1: "IPTV sur iPhone & iPad",
    lead: "Emportez 4kiptvfr.com partout : sur iPhone et iPad, l'IPTV se lit via des applications iOS compatibles, en Wi-Fi comme en 4G/5G.",
    intro: [
      "iOS et iPadOS disposent de plusieurs lecteurs IPTV sur l'App Store. GSE Smart IPTV et IPTV Smarters figurent parmi les plus fiables.",
      "L'iPhone et l'iPad sont parfaits pour un usage nomade : vous regardez vos chaînes en déplacement, puis reprenez sur la TV à la maison.",
    ],
    compatibility: [
      "iPhone et iPad sous iOS / iPadOS récents",
      "Lecture en Wi-Fi, 4G et 5G",
      "Compatible M3U et API Xtream",
      "AirPlay vers l'Apple TV",
    ],
    quickFacts: [
      { label: "Système", value: "iOS / iPadOS" },
      { label: "Formats supportés", value: "API Xtream Codes & playlist M3U" },
      { label: "Application conseillée", value: "GSE Smart IPTV ou IPTV Smarters" },
      { label: "Connexion conseillée", value: "Wi-Fi (4G/5G possible en mobilité)" },
      { label: "Installation", value: "App Store iOS" },
    ],
    steps: [
      { title: "Installez une application iOS", description: "Depuis l'App Store, installez GSE Smart IPTV ou IPTV Smarters." },
      { title: "Ajoutez votre source", description: "Choisissez l'ajout via API Xtream ou lien M3U distant." },
      { title: "Saisissez vos accès", description: "Renseignez l'URL et vos identifiants 4kiptvfr.com reçus par e-mail." },
      { title: "Regardez partout", description: "Profitez de vos chaînes en mobilité, ou diffusez sur la TV via AirPlay." },
    ],
    apps: [
      { name: "GSE Smart IPTV", note: "Fiable sur iOS et iPadOS.", href: "/applications/gse-smart-iptv" },
      { name: "IPTV Smarters", note: "Interface familière multiplateforme.", href: "/applications/smarters" },
      { name: "VLC", note: "Lecture M3U universelle.", href: "/applications/vlc" },
    ],
    troubleshoot: [
      { problem: "Application IPTV absente de l'App Store", cause: "Disponibilité variable selon la région", solution: "Privilégiez GSE Smart IPTV, disponible en France sur l'App Store." },
      { problem: "Forte consommation de données", cause: "Direct HD/4K gourmand en 4G/5G", solution: "Privilégiez le Wi-Fi ou réduisez la qualité en déplacement." },
      { problem: "Le flux coupe en mobilité", cause: "Réseau mobile instable", solution: "Basculez sur un Wi-Fi fiable ou réduisez la résolution du flux." },
    ],
    faq: [
      { q: "Comment installer l'IPTV sur iPhone ou iPad ?", a: "Installez GSE Smart IPTV ou IPTV Smarters depuis l'App Store, puis ajoutez vos accès via API Xtream ou lien M3U." },
      { q: "Quelle application IPTV pour iOS ?", a: "GSE Smart IPTV est la plus fiable sur iOS/iPadOS ; IPTV Smarters est également disponible." },
      { q: "Peut-on regarder en 4G/5G ?", a: "Oui, mais le direct en HD/4K consomme beaucoup de données : privilégiez le Wi-Fi quand c'est possible." },
      { q: "Comment envoyer l'image sur la TV ?", a: "Utilisez AirPlay vers une Apple TV, en gardant les appareils sur le même réseau Wi-Fi." },
      { q: "Pourquoi certaines applications ne sont pas dispo ?", a: "L'offre varie selon les régions ; GSE Smart IPTV reste disponible en France." },
    ],
  },
};

export const DEVICE_LIST = Object.values(DEVICES).sort((a, b) => a.order - b.order);
export const DEVICE_SLUGS = DEVICE_LIST.map((d) => d.slug);

/** Hero image per device (real assets in /public/images), with descriptive alt. */
export const DEVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  samsung: { src: "/images/device-samsung.jpg", alt: "Application IPTV ouverte sur une Samsung Smart TV dans un salon" },
  lg: { src: "/images/device-lg.jpg", alt: "TV LG OLED affichant une interface IPTV dans un salon moderne" },
  "android-tv": { src: "/images/device-android-tv.jpg", alt: "Installation de l'IPTV sur un téléviseur Android TV" },
  firestick: { src: "/images/device-firestick.jpg", alt: "Amazon Fire TV Stick branché pour regarder l'IPTV" },
  "apple-tv": { src: "/images/device-apple-tv.png", alt: "Boîtier Apple TV compatible IPTV" },
  xiaomi: { src: "/images/device-xiaomi.png", alt: "Box Android Xiaomi compatible IPTV" },
  "nvidia-shield": { src: "/images/device-nvidia-shield.png", alt: "Box Nvidia Shield TV pour l'IPTV 4K" },
  mag: { src: "/images/device-mag.png", alt: "Décodeur MAG configuré pour l'IPTV" },
  "iphone-ipad": { src: "/images/device-iphone-ipad.png", alt: "IPTV sur iPhone et iPad avec une application iOS" },
  windows: { src: "/images/device-windows.jpg", alt: "IPTV lue sur un PC Windows avec un lecteur compatible" },
  mac: { src: "/images/device-mac.png", alt: "IPTV sur Mac sous macOS" },
};
