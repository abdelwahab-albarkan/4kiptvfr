/**
 * Internal Linking Architecture for 4kiptvfr.com
 * Defines structured relationships between Pillars, Clusters, Supporting Articles, and Technical Hubs.
 */

export interface InternalLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface ClusterLinks {
  pillar: InternalLink;
  hubs: InternalLink[];
  recommendedApps: InternalLink[];
  recommendedDevices: InternalLink[];
  troubleshooting: InternalLink[];
  commercial: InternalLink[];
}

/** 1. Main Pillars */
export const PILLAR_LINKS = {
  meilleurIptv: {
    label: "Meilleur IPTV",
    href: "/meilleur-iptv",
    description: "Guide comparatif et critères de choix du meilleur service IPTV en France.",
  },
  abonnement: {
    label: "Abonnement IPTV",
    href: "/abonnement",
    description: "Offres complètes 3, 6 et 12 mois avec activation en 60 secondes.",
  },
  appareils: {
    label: "Appareils & Boîtiers",
    href: "/appareils",
    description: "Guides d'installation sur Smart TV Samsung, LG, Android TV, Firestick, Apple TV.",
  },
  applications: {
    label: "Applications IPTV",
    href: "/applications",
    description: "Comparatif et tutoriels IPTV Smarters Pro, TiviMate, VLC, Kodi, GSE Smart IPTV.",
  },
  contenu: {
    label: "Chaînes & Contenu",
    href: "/contenu",
    description: "50 000+ chaînes françaises et internationales, bouquets sport et VOD 4K.",
  },
  comparatifs: {
    label: "Comparatifs",
    href: "/comparatifs",
    description: "Comparaisons face à Canal+, Molotov, Netflix, Freebox TV, Orange et la TNT.",
  },
  problemes: {
    label: "Centre de Dépannage",
    href: "/problemes",
    description: "Solutions pas à pas aux problèmes de buffering, écran noir, débit et erreurs.",
  },
  faq: {
    label: "Aide & FAQ",
    href: "/faq",
    description: "Réponses aux questions fréquentes, aspects légaux et lexique technique.",
  },
  blog: {
    label: "Guides & Blog",
    href: "/blog",
    description: "Articles détaillés, conseils pour seniors, guides VPN et astuces d'experts.",
  },
};

/** 2. Mapping by Device -> Apps & Troubleshooting */
export const DEVICE_CROSS_LINKS: Record<
  string,
  {
    apps: InternalLink[];
    troubleshooting: InternalLink[];
    relatedDevices: InternalLink[];
    relatedGuides: InternalLink[];
  }
> = {
  samsung: {
    apps: [
      { label: "IPTV Smarters Pro", href: "/applications/smarters", description: "L'application la plus complète sur Samsung Tizen." },
      { label: "VLC Media Player", href: "/applications/vlc", description: "Pour tester rapidement une playlist M3U." },
    ],
    troubleshooting: [
      { label: "Écran noir sur Smart TV", href: "/problemes/ecran-noir", description: "Résoudre les problèmes de lecture vidéo ou d'écran figé." },
      { label: "Buffering et coupures", href: "/problemes/buffering-coupure", description: "Optimiser le flux vidéo et éviter les saccades." },
    ],
    relatedDevices: [
      { label: "LG Smart TV", href: "/appareils/lg" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
    ],
    relatedGuides: [
      { label: "Guide IPTV pour seniors", href: "/blog/iptv-pour-senior" },
      { label: "Guide API Xtream Codes", href: "/formats/xtream-codes" },
    ],
  },
  lg: {
    apps: [
      { label: "IPTV Smarters Pro", href: "/applications/smarters", description: "Disponible sur le LG Content Store." },
      { label: "VLC Media Player", href: "/applications/vlc", description: "Lecture directe des flux M3U." },
    ],
    troubleshooting: [
      { label: "Liste vide ou non chargée", href: "/problemes/erreurs", description: "Corriger les erreurs de chargement d'URL ou d'accès." },
      { label: "Problème de son ou codec", href: "/problemes/ecran-noir", description: "Régler la sortie audio PCM/Bitstream." },
    ],
    relatedDevices: [
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
    ],
    relatedGuides: [
      { label: "Guide des formats M3U", href: "/formats/m3u" },
      { label: "Bien choisir son abonnement", href: "/blog/comment-choisir-son-abonnement-iptv" },
    ],
  },
  "android-tv": {
    apps: [
      { label: "TiviMate IPTV Player", href: "/applications/tivimate", description: "L'interface TV la plus ergonomique sur Android TV." },
      { label: "IPTV Smarters Pro", href: "/applications/smarters", description: "Gestion complète du direct, replay et VOD." },
      { label: "OTT Navigator", href: "/applications/ott-navigator", description: "Personnalisation poussée de l'interface." },
      { label: "XCIPTV Player", href: "/applications/xciptv", description: "Lecteur fluide optimisé télécommande." },
    ],
    troubleshooting: [
      { label: "Optimiser le débit internet", href: "/problemes/vitesse-internet", description: "Débit recommandé pour la 4K Ultra HD." },
      { label: "Résoudre le buffering", href: "/problemes/buffering-coupure", description: "Réglages de mémoire tampon et connexion Ethernet." },
    ],
    relatedDevices: [
      { label: "Nvidia Shield TV Pro", href: "/appareils/nvidia-shield" },
      { label: "Xiaomi TV Box", href: "/appareils/xiaomi" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
    ],
    relatedGuides: [
      { label: "Guide IPTV et VPN", href: "/blog/iptv-et-vpn-faut-il-en-utiliser-un" },
      { label: "Guide EPG & Replay", href: "/formats/epg" },
    ],
  },
  firestick: {
    apps: [
      { label: "IPTV Smarters Pro", href: "/applications/smarters", description: "Installation facile via Downloader." },
      { label: "TiviMate IPTV Player", href: "/applications/tivimate", description: "Le lecteur idéal avec la télécommande Fire TV." },
      { label: "Kodi", href: "/applications/kodi", description: "Addon PVR pour Fire OS." },
    ],
    troubleshooting: [
      { label: "IPTV ne fonctionne pas", href: "/problemes/iptv-ne-fonctionne-pas", description: "Diagnostic complet de la Firestick." },
      { label: "Buffering en Wi-Fi", href: "/problemes/buffering-coupure", description: "Améliorer la réception Wi-Fi 5 GHz." },
    ],
    relatedDevices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Xiaomi TV Stick", href: "/appareils/xiaomi" },
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
    ],
    relatedGuides: [
      { label: "Tutoriel complet Fire TV Stick", href: "/blog/installer-iptv-sur-fire-tv-stick" },
      { label: "Faut-il utiliser un VPN ?", href: "/blog/iptv-et-vpn-faut-il-en-utiliser-un" },
    ],
  },
  "apple-tv": {
    apps: [
      { label: "GSE Smart IPTV", href: "/applications/gse-smart-iptv", description: "Application de référence sur tvOS." },
      { label: "IPTV Smarters Pro", href: "/applications/smarters", description: "Disponible sur l'App Store Apple TV." },
      { label: "VLC for Apple TV", href: "/applications/vlc", description: "Lecteur gratuit universel." },
    ],
    troubleshooting: [
      { label: "Erreur de connexion serveur", href: "/problemes/serveur-indisponible", description: "Vérifier la validité des flux." },
      { label: "Qualité 4K HDR", href: "/abonnement/4k", description: "Optimiser les réglages vidéo de l'Apple TV." },
    ],
    relatedDevices: [
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
      { label: "Mac", href: "/appareils/mac" },
      { label: "Nvidia Shield", href: "/appareils/nvidia-shield" },
    ],
    relatedGuides: [
      { label: "Comprendre l'API Xtream Codes", href: "/formats/xtream-codes" },
      { label: "Abonnement 4K Ultra HD", href: "/abonnement/4k" },
    ],
  },
  xiaomi: {
    apps: [
      { label: "TiviMate IPTV Player", href: "/applications/tivimate" },
      { label: "IPTV Smarters Pro", href: "/applications/smarters" },
      { label: "XCIPTV", href: "/applications/xciptv" },
    ],
    troubleshooting: [
      { label: "Débit internet & Wi-Fi", href: "/problemes/vitesse-internet" },
      { label: "Coupures en soirée", href: "/problemes/buffering-coupure" },
    ],
    relatedDevices: [
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Nvidia Shield", href: "/appareils/nvidia-shield" },
    ],
    relatedGuides: [
      { label: "Installer IPTV sur Fire TV", href: "/blog/installer-iptv-sur-fire-tv-stick" },
    ],
  },
  "nvidia-shield": {
    apps: [
      { label: "TiviMate IPTV Player", href: "/applications/tivimate", description: "Performances maximales avec upscaling IA." },
      { label: "IPTV Smarters Pro", href: "/applications/smarters" },
      { label: "Kodi", href: "/applications/kodi" },
    ],
    troubleshooting: [
      { label: "Vérifier le débit Ethernet", href: "/problemes/vitesse-internet" },
      { label: "Configuration 4K HDR10+", href: "/abonnement/4k" },
    ],
    relatedDevices: [
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Xiaomi TV Box", href: "/appareils/xiaomi" },
    ],
    relatedGuides: [
      { label: "Tout savoir sur la 4K IPTV", href: "/abonnement/4k" },
    ],
  },
  mag: {
    apps: [
      { label: "Portail Middleware Stalker", href: "/formats/xtream-codes", description: "Configuration via URL de portail MAG." },
    ],
    troubleshooting: [
      { label: "Erreur 'Your STB is blocked'", href: "/problemes/compte-expire", description: "Vérification de l'adresse MAC enregistrée." },
      { label: "Écran bloqué au chargement", href: "/problemes/iptv-ne-fonctionne-pas" },
    ],
    relatedDevices: [
      { label: "Android TV Box", href: "/appareils/android-tv" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
    ],
    relatedGuides: [
      { label: "Lexique des termes IPTV", href: "/faq/lexique" },
    ],
  },
  windows: {
    apps: [
      { label: "VLC Media Player", href: "/applications/vlc", description: "Le lecteur le plus simple pour Windows 10/11." },
      { label: "IPTV Smarters Pro Windows", href: "/applications/smarters", description: "Application dédiée avec interface TV sur PC." },
      { label: "Kodi Windows", href: "/applications/kodi" },
    ],
    troubleshooting: [
      { label: "Erreurs de lecture VLC", href: "/problemes/erreurs" },
      { label: "Test de vitesse connexion", href: "/problemes/vitesse-internet" },
    ],
    relatedDevices: [
      { label: "Mac", href: "/appareils/mac" },
      { label: "Android TV", href: "/appareils/android-tv" },
    ],
    relatedGuides: [
      { label: "Utiliser un VPN sur PC", href: "/blog/iptv-et-vpn-faut-il-en-utiliser-un" },
      { label: "Playlist M3U expliquée", href: "/formats/m3u" },
    ],
  },
  mac: {
    apps: [
      { label: "VLC Media Player pour Mac", href: "/applications/vlc" },
      { label: "IPTV Smarters Pro macOS", href: "/applications/smarters" },
      { label: "GSE Smart IPTV", href: "/applications/gse-smart-iptv" },
    ],
    troubleshooting: [
      { label: "Problèmes de flux M3U", href: "/problemes/erreurs" },
      { label: "Résoudre les coupures", href: "/problemes/buffering-coupure" },
    ],
    relatedDevices: [
      { label: "PC Windows", href: "/appareils/windows" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
    ],
    relatedGuides: [
      { label: "Guide des formats M3U", href: "/formats/m3u" },
    ],
  },
  "iphone-ipad": {
    apps: [
      { label: "GSE Smart IPTV", href: "/applications/gse-smart-iptv", description: "Idéal pour iOS et iPadOS." },
      { label: "IPTV Smarters Pro iOS", href: "/applications/smarters" },
      { label: "VLC pour iOS", href: "/applications/vlc" },
    ],
    troubleshooting: [
      { label: "Lecture en 4G/5G et Wi-Fi", href: "/problemes/vitesse-internet" },
      { label: "Flux qui coupe", href: "/problemes/buffering-coupure" },
    ],
    relatedDevices: [
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "Mac", href: "/appareils/mac" },
      { label: "Android TV", href: "/appareils/android-tv" },
    ],
    relatedGuides: [
      { label: "API Xtream Codes sur iPhone", href: "/formats/xtream-codes" },
    ],
  },
};

/** 3. Mapping by Application -> Compatible Devices & Hubs */
export const APP_CROSS_LINKS: Record<
  string,
  {
    devices: InternalLink[];
    formats: InternalLink[];
    troubleshooting: InternalLink[];
  }
> = {
  smarters: {
    devices: [
      { label: "Samsung Smart TV", href: "/appareils/samsung" },
      { label: "LG Smart TV", href: "/appareils/lg" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "PC Windows", href: "/appareils/windows" },
      { label: "Apple TV", href: "/appareils/apple-tv" },
    ],
    formats: [
      { label: "Connexion Xtream Codes", href: "/formats/xtream-codes" },
      { label: "Playlist M3U", href: "/formats/m3u" },
      { label: "Guide TV (EPG)", href: "/formats/epg" },
    ],
    troubleshooting: [
      { label: "Erreurs de connexion Smarters", href: "/problemes/erreurs" },
      { label: "Buffering et ralentissements", href: "/problemes/buffering-coupure" },
    ],
  },
  tivimate: {
    devices: [
      { label: "Android TV & Google TV", href: "/appareils/android-tv" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Nvidia Shield TV", href: "/appareils/nvidia-shield" },
      { label: "Xiaomi Mi Box", href: "/appareils/xiaomi" },
    ],
    formats: [
      { label: "Configuration Xtream Codes", href: "/formats/xtream-codes" },
      { label: "Guide TV EPG", href: "/formats/epg" },
    ],
    troubleshooting: [
      { label: "Guide EPG non synchronisé", href: "/formats/epg" },
      { label: "Problème d'écran noir", href: "/problemes/ecran-noir" },
    ],
  },
  vlc: {
    devices: [
      { label: "PC Windows 10/11", href: "/appareils/windows" },
      { label: "Mac (macOS)", href: "/appareils/mac" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
    ],
    formats: [
      { label: "Format Playlist M3U", href: "/formats/m3u" },
    ],
    troubleshooting: [
      { label: "VLC saute les chaînes", href: "/problemes/buffering-coupure" },
      { label: "Vérifier la vitesse internet", href: "/problemes/vitesse-internet" },
    ],
  },
  kodi: {
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Fire TV Stick", href: "/appareils/firestick" },
      { label: "PC Windows", href: "/appareils/windows" },
      { label: "Nvidia Shield", href: "/appareils/nvidia-shield" },
    ],
    formats: [
      { label: "Addon PVR IPTV Simple Client", href: "/formats/m3u" },
      { label: "Intégration EPG XMLTV", href: "/formats/epg" },
    ],
    troubleshooting: [
      { label: "Diagnostic panne IPTV", href: "/problemes/iptv-ne-fonctionne-pas" },
    ],
  },
  "gse-smart-iptv": {
    devices: [
      { label: "Apple TV 4K", href: "/appareils/apple-tv" },
      { label: "iPhone & iPad", href: "/appareils/iphone-ipad" },
      { label: "Mac", href: "/appareils/mac" },
      { label: "Android", href: "/appareils/android-tv" },
    ],
    formats: [
      { label: "Xtream Codes API", href: "/formats/xtream-codes" },
      { label: "Lien M3U", href: "/formats/m3u" },
    ],
    troubleshooting: [
      { label: "Erreur de liste", href: "/problemes/erreurs" },
    ],
  },
  "ott-navigator": {
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Nvidia Shield", href: "/appareils/nvidia-shield" },
      { label: "Xiaomi TV Box", href: "/appareils/xiaomi" },
    ],
    formats: [
      { label: "Xtream Codes", href: "/formats/xtream-codes" },
      { label: "Guide des programmes", href: "/formats/epg" },
    ],
    troubleshooting: [
      { label: "Optimisation de mémoire tampon", href: "/problemes/buffering-coupure" },
    ],
  },
  xciptv: {
    devices: [
      { label: "Android TV", href: "/appareils/android-tv" },
      { label: "Amazon Firestick", href: "/appareils/firestick" },
      { label: "Xiaomi TV", href: "/appareils/xiaomi" },
    ],
    formats: [
      { label: "API Xtream", href: "/formats/xtream-codes" },
    ],
    troubleshooting: [
      { label: "Problème d'écran noir", href: "/problemes/ecran-noir" },
    ],
  },
};
