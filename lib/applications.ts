/** Application-guide content for the /applications cluster. Keyed by slug. */

export type AppGuide = {
  slug: string;
  name: string;
  platforms: string;
  order: number;
  free: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  intro: string[];
  steps: { title: string; description: string }[];
  pros: string[];
  cons: string[];
  problems: { q: string; a: string }[];
  devices: { label: string; href: string }[];
};

export const APPLICATIONS: Record<string, AppGuide> = {
  smarters: {
    slug: "smarters",
    name: "IPTV Smarters Pro",
    platforms: "Android, iOS, Fire TV, Windows, Mac",
    order: 1,
    free: true,
    metaTitle: "IPTV Smarters Pro : abonnement, installation et code",
    metaDescription:
      "IPTV Smarters Pro avec 4kiptvfr.com : quel abonnement utiliser, installation, configuration via API Xtream et saisie du code. Le guide complet du lecteur Smarters Players Pro sur tous vos appareils.",
    keywords: ["iptv smarters pro", "iptv smarters pro abonnement", "abonnement iptv smarters", "smart iptv pro", "iptv smarters players pro", "code iptv smarters pro", "iptv smarters pro tv", "configurer iptv smarters"],
    eyebrow: "Applications · Smarters",
    h1: "IPTV Smarters Pro",
    lead: "Le lecteur IPTV le plus répandu : gratuit, disponible presque partout et simple à configurer. Le meilleur point de départ avec 4kiptvfr.com.",
    intro: [
      "IPTV Smarters Pro (aussi appelé Smarters Players Pro) est une application gratuite et multiplateforme. Elle prend en charge l'API Xtream et les listes M3U, avec guide des programmes, catégories et vidéothèque intégrés.",
      "Point important : Smarters est un lecteur, pas un abonnement. Il affiche les chaînes fournies par votre abonnement IPTV — celui de 4kiptvfr.com s'y configure en quelques secondes via vos accès Xtream.",
      "Sa disponibilité sur Android, iOS, Fire TV, Windows et Mac en fait un choix universel, idéal pour débuter comme pour un usage quotidien.",
    ],
    steps: [
      { title: "Installez l'application", description: "Depuis le magasin de votre appareil (Play Store, App Store, Amazon Appstore) ou via Downloader sur Fire TV." },
      { title: "Choisissez « Xtream Codes API »", description: "C'est la méthode recommandée : elle charge automatiquement les catégories et l'EPG." },
      { title: "Saisissez vos accès", description: "Entrez un nom, l'URL du serveur, votre identifiant et votre mot de passe 4kiptvfr.com." },
      { title: "Validez", description: "Vos chaînes, films et séries se chargent. Ajoutez vos favoris pour un accès rapide." },
    ],
    pros: ["Gratuit et sans publicité intrusive", "Disponible sur presque tous les appareils", "Interface claire avec EPG et VOD", "Prise en charge Xtream et M3U"],
    cons: ["Pas d'enregistrement natif", "Personnalisation plus limitée que TiviMate"],
    problems: [
      { q: "Que saisir dans le champ « code » ?", a: "Smarters ne demande pas de code séparé : renseignez l'URL du serveur, l'identifiant et le mot de passe fournis dans votre e-mail d'activation." },
      { q: "L'application affiche « aucune chaîne »", a: "Vérifiez la méthode Xtream et l'exactitude de l'URL et des identifiants, sans espace superflu." },
    ],
    devices: [
      { label: "Fire TV Stick", href: "/appareils/firestick" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Samsung", href: "/appareils/samsung" },
    ],
  },
  tivimate: {
    slug: "tivimate",
    name: "TiviMate",
    platforms: "Android TV, box Android, Fire TV",
    order: 2,
    free: true,
    metaTitle: "TiviMate : configuration, premium et dépannage",
    metaDescription:
      "TiviMate avec 4kiptvfr.com : la meilleure application IPTV sur Android TV. Installation, configuration, différences premium et solutions aux problèmes.",
    keywords: ["tivimate", "tivimate premium", "configurer tivimate", "tivimate vs smarters", "installer tivimate"],
    eyebrow: "Applications · TiviMate",
    h1: "TiviMate",
    lead: "L'application IPTV préférée des utilisateurs Android TV : interface soignée, guide des programmes exemplaire et navigation ultra-fluide.",
    intro: [
      "TiviMate se distingue par une interface pensée pour le téléviseur et une gestion du guide des programmes parmi les meilleures du marché. Elle fonctionne sur Android TV, box Android et Fire TV.",
      "La version gratuite suffit largement pour lire 4kiptvfr.com. La version Premium ajoute le multi-listes, l'enregistrement et quelques options avancées.",
    ],
    steps: [
      { title: "Installez TiviMate", description: "Depuis le Play Store sur Android TV, ou via Downloader sur Fire TV." },
      { title: "Ajoutez une playlist", description: "Choisissez « Xtream Codes » et saisissez l'URL et vos identifiants 4kiptvfr.com." },
      { title: "Configurez l'EPG", description: "TiviMate récupère automatiquement le guide ; ajustez le décalage horaire si besoin." },
      { title: "Organisez vos favoris", description: "Créez des groupes et réordonnez vos chaînes pour un accès rapide." },
    ],
    pros: ["Meilleur guide des programmes du marché", "Interface conçue pour la télécommande", "Très fluide, même avec de longues listes", "Version gratuite pleinement fonctionnelle"],
    cons: ["Android uniquement (pas d'iOS)", "Enregistrement réservé à la version Premium"],
    problems: [
      { q: "Faut-il payer TiviMate Premium ?", a: "Non. La version gratuite lit parfaitement 4kiptvfr.com. Le Premium n'ajoute que le multi-listes, l'enregistrement et des réglages avancés." },
      { q: "Le guide des programmes est décalé", a: "Ajustez le décalage EPG dans les réglages pour le faire correspondre au fuseau horaire français." },
    ],
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Nvidia Shield", href: "/appareils/nvidia-shield" },
      { label: "Fire TV Stick", href: "/appareils/firestick" },
    ],
  },
  vlc: {
    slug: "vlc",
    name: "VLC",
    platforms: "Windows, Mac, Android, iOS",
    order: 3,
    free: true,
    metaTitle: "VLC IPTV : lire une playlist M3U facilement",
    metaDescription:
      "Utiliser VLC pour lire l'IPTV 4kiptvfr.com via une playlist M3U : méthode pas à pas sur ordinateur et mobile. Simple, gratuit, sans configuration complexe.",
    keywords: ["vlc iptv", "vlc playlist m3u", "lire m3u avec vlc", "iptv vlc"],
    eyebrow: "Applications · VLC",
    h1: "VLC pour l'IPTV",
    lead: "VLC lit une playlist M3U en quelques clics. Pratique pour tester rapidement un abonnement, sans installer de lecteur dédié.",
    intro: [
      "VLC n'est pas une application IPTV à proprement parler, mais il lit parfaitement une liste M3U. C'est la solution la plus rapide pour vérifier des accès.",
      "En revanche, VLC n'affiche pas de guide des programmes ni de catégories organisées : pour un usage quotidien sur téléviseur, un lecteur dédié reste préférable.",
    ],
    steps: [
      { title: "Ouvrez VLC", description: "Sur ordinateur : menu Média › Ouvrir un flux réseau." },
      { title: "Collez votre lien M3U", description: "Renseignez l'URL M3U fournie avec votre abonnement 4kiptvfr.com." },
      { title: "Lancez la lecture", description: "La liste des chaînes se charge dans la fenêtre de liste de lecture." },
    ],
    pros: ["Totalement gratuit et sans publicité", "Disponible partout", "Idéal pour tester un lien M3U"],
    cons: ["Pas de guide des programmes", "Navigation entre chaînes peu pratique", "Aucune organisation par catégories"],
    problems: [
      { q: "La playlist ne s'ouvre pas dans VLC", a: "Vérifiez que le lien M3U est complet et actif. Vous pouvez aussi enregistrer le fichier .m3u et l'ouvrir directement dans VLC." },
    ],
    devices: [
      { label: "Windows", href: "/appareils/windows" },
    ],
  },
  kodi: {
    slug: "kodi",
    name: "Kodi",
    platforms: "Windows, Mac, Android, Fire TV",
    order: 4,
    free: true,
    metaTitle: "Kodi IPTV : configurer l'add-on PVR IPTV Simple Client",
    metaDescription:
      "Configurer l'IPTV 4kiptvfr.com sur Kodi avec l'add-on PVR IPTV Simple Client : ajout de la playlist M3U, EPG et réglages. Guide détaillé.",
    keywords: ["kodi iptv", "iptv simple client", "add-on iptv kodi", "configurer kodi iptv"],
    eyebrow: "Applications · Kodi",
    h1: "Kodi pour l'IPTV",
    lead: "Kodi transforme votre appareil en médiacenter complet. Avec l'add-on PVR IPTV Simple Client, il lit vos chaînes 4kiptvfr.com avec guide des programmes.",
    intro: [
      "Kodi est un lecteur multimédia open source très puissant. L'IPTV s'y ajoute via l'add-on intégré « PVR IPTV Simple Client ».",
      "La configuration est un peu plus technique que sur un lecteur dédié, mais Kodi offre en retour une personnalisation quasi illimitée.",
    ],
    steps: [
      { title: "Activez PVR IPTV Simple Client", description: "Dans Add-ons › Mes add-ons › Clients PVR, activez « PVR IPTV Simple Client »." },
      { title: "Renseignez la playlist", description: "Dans sa configuration, choisissez l'emplacement « URL distante » et collez votre lien M3U." },
      { title: "Ajoutez l'EPG", description: "Renseignez l'URL du guide (XMLTV) si vous souhaitez le programme TV." },
      { title: "Redémarrez Kodi", description: "Les chaînes apparaissent dans la section « TV »." },
    ],
    pros: ["Gratuit et open source", "Personnalisation très poussée", "Regroupe IPTV et médias locaux"],
    cons: ["Configuration plus technique", "Interface moins immédiate pour l'IPTV"],
    problems: [
      { q: "Kodi n'affiche pas la section TV", a: "Assurez-vous que PVR IPTV Simple Client est bien activé et qu'une playlist valide est renseignée, puis redémarrez Kodi." },
    ],
    devices: [
      { label: "Windows", href: "/appareils/windows" },
      { label: "Fire TV Stick", href: "/appareils/firestick" },
    ],
  },
  "gse-smart-iptv": {
    slug: "gse-smart-iptv",
    name: "GSE Smart IPTV",
    platforms: "iOS, Apple TV, Android",
    order: 5,
    free: true,
    metaTitle: "GSE Smart IPTV : configuration sur iOS et Apple TV",
    metaDescription:
      "Configurer GSE Smart IPTV avec 4kiptvfr.com sur iPhone, iPad et Apple TV : ajout de playlist M3U ou API Xtream et réglages recommandés.",
    keywords: ["gse smart iptv", "gse iptv apple", "configurer gse smart iptv"],
    eyebrow: "Applications · GSE",
    h1: "GSE Smart IPTV",
    lead: "L'un des rares lecteurs IPTV complets et fiables sur l'écosystème Apple. Un bon choix pour iPhone, iPad et Apple TV.",
    intro: [
      "GSE Smart IPTV est particulièrement apprécié sur iOS et tvOS, où le choix d'applications IPTV est plus restreint qu'ailleurs.",
      "Il prend en charge les listes M3U et l'API Xtream, avec guide des programmes et gestion des catégories.",
    ],
    steps: [
      { title: "Installez GSE Smart IPTV", description: "Depuis l'App Store sur iPhone, iPad ou Apple TV." },
      { title: "Ajoutez une source distante", description: "Choisissez « Xtream Codes API » ou « M3U distant »." },
      { title: "Saisissez vos accès", description: "Renseignez l'URL et vos identifiants 4kiptvfr.com." },
    ],
    pros: ["Fiable sur l'écosystème Apple", "Compatible Xtream et M3U", "Guide des programmes intégré"],
    cons: ["Interface un peu dense", "Réglages avancés parfois déroutants"],
    problems: [
      { q: "Les chaînes ne se chargent pas sur Apple TV", a: "Vérifiez la méthode de connexion (Xtream recommandée) et la validité de vos identifiants." },
    ],
    devices: [
      { label: "Apple TV", href: "/appareils/apple-tv" },
    ],
  },
  "ott-navigator": {
    slug: "ott-navigator",
    name: "OTT Navigator",
    platforms: "Android, Android TV, Fire TV",
    order: 6,
    free: true,
    metaTitle: "OTT Navigator : personnalisation avancée de l'IPTV",
    metaDescription:
      "OTT Navigator avec 4kiptvfr.com : un lecteur Android très personnalisable. Installation, configuration Xtream et réglages de l'interface.",
    keywords: ["ott navigator", "ott navigator iptv", "configurer ott navigator"],
    eyebrow: "Applications · OTT Navigator",
    h1: "OTT Navigator",
    lead: "Pour les utilisateurs qui aiment tout régler : OTT Navigator offre une personnalisation de l'interface parmi les plus complètes.",
    intro: [
      "OTT Navigator est un lecteur Android riche en options : thèmes, dispositions, rappels, catégories sur mesure. Il séduit les utilisateurs avancés.",
      "Il prend en charge l'API Xtream et les listes M3U, avec un guide des programmes soigné.",
    ],
    steps: [
      { title: "Installez OTT Navigator", description: "Depuis le Play Store sur Android ou Android TV." },
      { title: "Ajoutez une playlist Xtream", description: "Renseignez l'URL et vos identifiants 4kiptvfr.com." },
      { title: "Personnalisez l'affichage", description: "Adaptez la disposition, les catégories et le guide à vos préférences." },
    ],
    pros: ["Personnalisation très poussée", "Guide des programmes détaillé", "Compatible Xtream et M3U"],
    cons: ["Beaucoup d'options pour un débutant", "Android uniquement"],
    problems: [
      { q: "L'interface est trop complexe", a: "Conservez les réglages par défaut au départ ; vous pourrez affiner la disposition une fois familiarisé." },
    ],
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
    ],
  },
  xciptv: {
    slug: "xciptv",
    name: "XCIPTV",
    platforms: "Android, Android TV, Fire TV",
    order: 7,
    free: true,
    metaTitle: "XCIPTV : installation et configuration",
    metaDescription:
      "XCIPTV avec 4kiptvfr.com : lecteur Android complet compatible Xtream et M3U. Installation, configuration et prise en main.",
    keywords: ["xciptv", "xciptv player", "configurer xciptv"],
    eyebrow: "Applications · XCIPTV",
    h1: "XCIPTV Player",
    lead: "Un lecteur Android complet, compatible Xtream et M3U, avec guide des programmes et gestion des catégories.",
    intro: [
      "XCIPTV est un lecteur Android polyvalent qui prend en charge l'API Xtream et les listes M3U, avec une interface moderne.",
      "Il constitue une alternative solide à Smarters pour un usage quotidien sur Android et Fire TV.",
    ],
    steps: [
      { title: "Installez XCIPTV", description: "Depuis le Play Store ou via Downloader sur Fire TV." },
      { title: "Connectez-vous en Xtream", description: "Saisissez l'URL et vos identifiants 4kiptvfr.com." },
      { title: "Regardez", description: "Naviguez dans vos chaînes, films et séries." },
    ],
    pros: ["Compatible Xtream et M3U", "Interface moderne", "Guide des programmes intégré"],
    cons: ["Publicités sur certaines versions", "Android uniquement"],
    problems: [
      { q: "La connexion Xtream échoue", a: "Vérifiez l'URL et les identifiants ; certains réglages régionaux nécessitent d'activer le VPN si votre réseau filtre." },
    ],
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Fire TV Stick", href: "/appareils/firestick" },
    ],
  },
  "perfect-player": {
    slug: "perfect-player",
    name: "Perfect Player",
    platforms: "Android, Android TV, Windows",
    order: 8,
    free: true,
    metaTitle: "Perfect Player IPTV : installation et configuration",
    metaDescription:
      "Guide Perfect Player avec 4kiptvfr.com : installer le lecteur, ajouter votre playlist M3U ou Xtream, associer l'EPG et régler le décodage pour un flux fluide.",
    keywords: ["perfect player iptv", "perfect player m3u", "configurer perfect player", "perfect player xtream", "perfect player android"],
    eyebrow: "Applications · Perfect Player",
    h1: "Perfect Player",
    lead: "Un lecteur léger et très configurable, apprécié des utilisateurs avancés qui veulent régler finement le décodage et l'affichage.",
    intro: [
      "Perfect Player est un lecteur IPTV pour Android, Android TV et Windows, reconnu pour sa stabilité et ses nombreux réglages. Il gère les listes M3U comme l'API Xtream, avec une source EPG paramétrable séparément.",
      "Son interface est plus technique que celle de Smarters, mais elle offre en contrepartie un contrôle précis sur le tampon, le décodage matériel/logiciel et l'agencement des chaînes — utile sur les appareils un peu anciens.",
    ],
    steps: [
      { title: "Installez Perfect Player", description: "Depuis le Play Store (Android / Android TV) ou le site de l'éditeur pour Windows." },
      { title: "Ajoutez la playlist", description: "Dans Réglages > Général > Playlist, choisissez le type Xtream Codes (ou M3U) et saisissez vos accès 4kiptvfr.com." },
      { title: "Associez l'EPG", description: "Dans Réglages > Général > EPG, indiquez la source du guide des programmes pour afficher les horaires." },
      { title: "Réglez le décodage", description: "Si une chaîne saccade, basculez entre décodage matériel et logiciel dans les réglages du lecteur." },
    ],
    pros: ["Très configurable (buffer, décodage, EPG)", "Léger et stable, même sur appareils anciens", "Compatible Xtream et M3U", "Disponible sur Windows"],
    cons: ["Interface technique, moins guidée", "Pas d'enregistrement natif"],
    problems: [
      { q: "Le guide des programmes reste vide", a: "La source EPG se règle séparément de la playlist dans Perfect Player : renseignez-la dans Réglages > EPG, puis rechargez." },
      { q: "Une chaîne saccade", a: "Changez le mode de décodage (matériel ↔ logiciel) et augmentez la taille du tampon dans les réglages." },
    ],
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Windows", href: "/appareils/windows" },
      { label: "Xiaomi", href: "/appareils/xiaomi" },
    ],
  },
  televizo: {
    slug: "televizo",
    name: "Televizo",
    platforms: "Android, Android TV",
    order: 9,
    free: true,
    metaTitle: "Televizo IPTV : installation et configuration",
    metaDescription:
      "Guide Televizo avec 4kiptvfr.com : installer le lecteur, ajouter votre playlist M3U ou Xtream, activer l'EPG et profiter d'une interface moderne sur Android TV.",
    keywords: ["televizo iptv", "televizo m3u", "configurer televizo", "televizo xtream", "televizo android tv"],
    eyebrow: "Applications · Televizo",
    h1: "Televizo",
    lead: "Un lecteur Android moderne et fluide, à l'interface soignée, qui se prend en main rapidement tout en restant complet.",
    intro: [
      "Televizo est un lecteur IPTV pour Android et Android TV, à l'interface récente et agréable. Il prend en charge les listes M3U et l'API Xtream, avec guide des programmes, favoris et catégories.",
      "Sa navigation est pensée pour la télécommande, ce qui le rend confortable sur un boîtier Android TV ou une Smart TV sous Android, sans les réglages parfois austères des lecteurs plus anciens.",
    ],
    steps: [
      { title: "Installez Televizo", description: "Depuis le Play Store sur votre appareil Android ou Android TV." },
      { title: "Ajoutez une source", description: "Choisissez « Xtream Codes » (recommandé) ou « Playlist M3U », puis saisissez vos accès 4kiptvfr.com." },
      { title: "Activez l'EPG", description: "Le guide des programmes se charge automatiquement en Xtream ; vérifiez le fuseau horaire si les horaires sont décalés." },
      { title: "Organisez vos favoris", description: "Ajoutez vos chaînes préférées aux favoris pour les retrouver en un geste." },
    ],
    pros: ["Interface moderne et fluide", "Navigation confortable à la télécommande", "Compatible Xtream et M3U", "Favoris et EPG intégrés"],
    cons: ["Certaines fonctions réservées à la version payante", "Android uniquement"],
    problems: [
      { q: "Les horaires du guide sont décalés", a: "Réglez le fuseau horaire sur l'heure de Paris dans les paramètres de Televizo, puis rechargez l'EPG." },
      { q: "Aucune chaîne n'apparaît", a: "Vérifiez la méthode Xtream et l'exactitude de l'URL et des identifiants, sans espace superflu." },
    ],
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Xiaomi", href: "/appareils/xiaomi" },
      { label: "Fire TV Stick", href: "/appareils/firestick" },
    ],
  },
  "ibo-player": {
    slug: "ibo-player",
    name: "IBO Player",
    platforms: "Samsung, LG, Android TV",
    order: 10,
    free: false,
    metaTitle: "IBO Player : installation sur Smart TV Samsung et LG",
    metaDescription:
      "Guide IBO Player avec 4kiptvfr.com : installer le lecteur sur Samsung ou LG, récupérer l'adresse MAC, activer l'appareil sur le portail et ajouter votre playlist.",
    keywords: ["ibo player", "ibo player smart tv", "ibo player samsung", "ibo player lg", "ibo player activation"],
    eyebrow: "Applications · IBO Player",
    h1: "IBO Player",
    lead: "Un lecteur pensé pour les Smart TV Samsung et LG : l'application affiche une adresse d'appareil, et la playlist s'ajoute depuis un portail web.",
    intro: [
      "IBO Player est un lecteur populaire sur les téléviseurs Samsung (Tizen) et LG (webOS). Son principe diffère des applications mobiles : le téléviseur affiche une adresse MAC et une clé, que l'on utilise sur le portail de l'éditeur pour associer sa playlist.",
      "Ce fonctionnement par portail évite de saisir de longues URL à la télécommande : on prépare la liste sur ordinateur ou téléphone, puis le téléviseur la charge automatiquement.",
    ],
    steps: [
      { title: "Installez IBO Player", description: "Depuis le store de votre téléviseur (Samsung Apps ou LG Content Store)." },
      { title: "Relevez l'adresse de l'appareil", description: "À l'ouverture, l'application affiche une adresse MAC et une clé de l'appareil. Notez-les." },
      { title: "Ajoutez la playlist sur le portail", description: "Sur le site de l'éditeur, saisissez l'adresse MAC puis ajoutez votre lien M3U ou vos accès Xtream 4kiptvfr.com." },
      { title: "Rechargez sur le téléviseur", description: "Redémarrez l'application : vos chaînes et catégories apparaissent automatiquement." },
    ],
    pros: ["Conçu pour Samsung et LG, sans matériel externe", "Saisie de la playlist sur ordinateur, pas à la télécommande", "Compatible M3U et Xtream", "Interface simple et lisible"],
    cons: ["Activation payante (frais unique) selon l'éditeur", "Dépend d'un portail externe pour la configuration"],
    problems: [
      { q: "Où saisir mon lien M3U ?", a: "Pas sur le téléviseur mais sur le portail de l'éditeur : entrez l'adresse MAC affichée par l'application, puis ajoutez votre playlist 4kiptvfr.com." },
      { q: "La liste n'apparaît pas après ajout", a: "Redémarrez complètement l'application sur le téléviseur pour forcer le rechargement depuis le portail." },
    ],
    devices: [
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "LG Smart TV", href: "/appareils/lg" },
      { label: "Android TV", href: "/appareils/android-tv" },
    ],
  },
  "duplex-iptv": {
    slug: "duplex-iptv",
    name: "Duplex IPTV",
    platforms: "Samsung, LG, Fire TV",
    order: 11,
    free: false,
    metaTitle: "Duplex IPTV : installation et configuration sur Smart TV",
    metaDescription:
      "Guide Duplex IPTV avec 4kiptvfr.com : installer le lecteur sur Samsung, LG ou Fire TV, associer l'appareil via le portail et ajouter votre playlist M3U ou Xtream.",
    keywords: ["duplex iptv", "duplex play", "duplex iptv samsung", "duplex iptv lg", "configurer duplex iptv"],
    eyebrow: "Applications · Duplex IPTV",
    h1: "Duplex IPTV",
    lead: "Un lecteur multiplateforme apprécié sur Smart TV, qui associe l'appareil via un portail web et gère aussi bien les listes M3U que l'API Xtream.",
    intro: [
      "Duplex IPTV (Duplex Play) est disponible sur les téléviseurs Samsung et LG ainsi que sur Fire TV. Comme IBO Player, il fonctionne avec une adresse d'appareil que l'on renseigne sur un portail pour y ajouter sa playlist.",
      "Il se distingue par une interface personnalisable et la possibilité de gérer plusieurs playlists, pratique dans un foyer où l'on combine plusieurs sources.",
    ],
    steps: [
      { title: "Installez Duplex IPTV", description: "Depuis le store de votre téléviseur (Samsung / LG) ou l'Amazon Appstore sur Fire TV." },
      { title: "Relevez l'identifiant de l'appareil", description: "L'application affiche une adresse MAC / un identifiant : notez-le pour l'étape suivante." },
      { title: "Associez votre playlist", description: "Sur le portail de l'éditeur, entrez l'identifiant puis ajoutez votre lien M3U ou vos accès Xtream 4kiptvfr.com." },
      { title: "Actualisez le lecteur", description: "Redémarrez Duplex IPTV : vos chaînes se chargent depuis le portail." },
    ],
    pros: ["Disponible sur Samsung, LG et Fire TV", "Gestion de plusieurs playlists", "Interface personnalisable", "Compatible M3U et Xtream"],
    cons: ["Activation payante (frais unique) selon l'éditeur", "Configuration via un portail externe"],
    problems: [
      { q: "Faut-il saisir la playlist sur le téléviseur ?", a: "Non : l'ajout se fait sur le portail de l'éditeur avec l'identifiant de l'appareil affiché par l'application, puis le téléviseur la charge." },
      { q: "Mes chaînes ne se mettent pas à jour", a: "Forcez l'actualisation dans l'application, ou redémarrez-la pour recharger la playlist depuis le portail." },
    ],
    devices: [
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "LG Smart TV", href: "/appareils/lg" },
      { label: "Fire TV Stick", href: "/appareils/firestick" },
    ],
  },
};

export const APP_LIST = Object.values(APPLICATIONS).sort((a, b) => a.order - b.order);
export const APP_SLUGS = APP_LIST.map((a) => a.slug);

/**
 * Coherent Icon-system tile per app (no fake screenshots — no real app
 * screenshots exist in the asset library, so we use the single icon language).
 */
export const APP_ICONS: Record<string, string> = {
  smarters: "tv",
  tivimate: "guide",
  vlc: "play",
  kodi: "film",
  "gse-smart-iptv": "screens",
  "ott-navigator": "star",
  xciptv: "bolt",
  "perfect-player": "play",
  televizo: "tv",
  "ibo-player": "screens",
  "duplex-iptv": "guide",
};
