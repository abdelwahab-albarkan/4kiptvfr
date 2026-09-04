/** Troubleshooting pages for the /problemes cluster. */

export type Problem = {
  slug: string;
  name: string;
  order: number;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  eyebrow: string;
  h1: string;
  lead: string;
  symptoms: string[];
  causes: string[];
  solutions: { title: string; description: string }[];
  support: string;
};

export const PROBLEMS: Record<string, Problem> = {
  "iptv-ne-fonctionne-pas": {
    slug: "iptv-ne-fonctionne-pas",
    name: "L'IPTV ne fonctionne pas",
    order: 1,
    metaTitle: "IPTV ne fonctionne pas : diagnostic et solutions",
    metaDescription:
      "Votre IPTV ne fonctionne plus ? Diagnostic pas à pas : connexion, identifiants, application, abonnement. Les solutions aux causes les plus fréquentes.",
    keywords: ["iptv ne fonctionne pas", "iptv marche pas", "iptv ne marche plus", "probleme iptv"],
    eyebrow: "Dépannage",
    h1: "L'IPTV ne fonctionne pas : que faire ?",
    lead: "Quand rien ne s'affiche, la cause est presque toujours simple : connexion, identifiants ou abonnement. Voici comment diagnostiquer méthodiquement.",
    symptoms: ["Aucune chaîne ne s'affiche", "L'application se ferme ou reste bloquée", "Message d'erreur au chargement de la liste"],
    causes: ["Connexion internet interrompue", "Identifiants mal saisis (URL, login, mot de passe)", "Abonnement expiré", "Application à mettre à jour"],
    solutions: [
      { title: "Vérifiez votre connexion", description: "Testez internet sur un autre appareil. Redémarrez votre box si nécessaire." },
      { title: "Recontrôlez vos identifiants", description: "Recopiez l'URL, l'identifiant et le mot de passe depuis votre e-mail, sans espace superflu." },
      { title: "Redémarrez l'application et l'appareil", description: "Fermez complètement l'application, puis redémarrez le téléviseur ou le boîtier." },
      { title: "Vérifiez la validité de l'abonnement", description: "Assurez-vous que votre abonnement est toujours actif ; renouvelez-le si besoin." },
    ],
    support: "Si le problème persiste après ces étapes, contactez le support avec le modèle de votre appareil et l'application utilisée.",
  },
  "buffering-coupure": {
    slug: "buffering-coupure",
    name: "Buffering & coupures",
    order: 2,
    metaTitle: "IPTV qui coupe et buffering : comment y remédier",
    metaDescription:
      "IPTV qui coupe, se fige ou met en mémoire tampon ? Les causes réseau et les réglages pour retrouver un flux fluide, y compris en 4K et aux heures de pointe.",
    keywords: ["iptv qui coupe", "iptv buffering", "iptv coupure", "iptv freeze", "iptv rame", "ameliorer iptv buffering"],
    eyebrow: "Dépannage",
    h1: "IPTV qui coupe ou met en mémoire tampon",
    lead: "Le buffering vient presque toujours du réseau. Quelques réglages suffisent le plus souvent à retrouver un flux fluide.",
    symptoms: ["L'image se fige régulièrement", "Roue de chargement (buffering) fréquente", "Coupures surtout aux heures de pointe ou en 4K"],
    causes: ["Débit insuffisant ou instable", "Wi-Fi faible ou saturé", "Autres appareils gourmands sur le réseau", "Buffer de l'application trop court"],
    solutions: [
      { title: "Privilégiez le filaire", description: "Une connexion Ethernet est bien plus stable que le Wi-Fi, surtout pour la 4K." },
      { title: "Libérez la bande passante", description: "Mettez en pause les téléchargements et autres flux vidéo pendant le visionnage." },
      { title: "Augmentez le buffer", description: "Dans les réglages du lecteur, augmentez la taille du tampon (buffer) pour absorber les variations." },
      { title: "Ajustez la qualité", description: "Si votre débit est limité, choisissez le Full HD plutôt que la 4K." },
    ],
    support: "En cas de coupures persistantes malgré une bonne connexion, contactez le support : un changement de serveur peut être proposé.",
  },
  "vitesse-internet": {
    slug: "vitesse-internet",
    name: "Vitesse internet",
    order: 3,
    metaTitle: "Débit internet pour l'IPTV : combien faut-il ?",
    metaDescription:
      "Quel débit internet pour l'IPTV ? Recommandations pour la HD, la Full HD et la 4K, et comment tester votre connexion pour un streaming sans coupure.",
    keywords: ["debit internet iptv", "vitesse internet iptv", "debit minimum iptv", "debit iptv 4k"],
    eyebrow: "Dépannage",
    h1: "Quel débit internet pour l'IPTV ?",
    lead: "L'IPTV consomme de la bande passante en continu. Voici les débits conseillés selon la qualité, et comment vérifier votre connexion.",
    symptoms: ["Buffering fréquent", "Qualité qui baisse automatiquement", "Impossible de tenir la 4K"],
    causes: ["Débit global insuffisant", "Connexion partagée entre trop d'appareils", "Wi-Fi éloigné de la box"],
    solutions: [
      { title: "Repères de débit", description: "Environ 10–15 Mb/s pour la Full HD, et au moins 25 Mb/s pour un flux 4K stable." },
      { title: "Testez votre débit", description: "Faites un test de vitesse sur l'appareil qui lit l'IPTV, connecté comme en usage réel." },
      { title: "Rapprochez-vous de la box", description: "En Wi-Fi, la distance et les murs réduisent le débit ; le filaire reste idéal." },
    ],
    support: "Si votre débit est correct mais que les coupures persistent, le problème vient d'ailleurs — voyez la page buffering & coupures.",
  },
  erreurs: {
    slug: "erreurs",
    name: "Messages d'erreur",
    order: 4,
    metaTitle: "Erreurs IPTV (403, 404, connexion, compte expiré) : solutions",
    metaDescription:
      "Comprendre et corriger les messages d'erreur IPTV : erreur 403, 404, erreur de connexion, liste vide, compte expiré. Causes et solutions pas à pas.",
    keywords: ["iptv erreur", "iptv erreur 403", "iptv erreur 404", "iptv erreur de connexion", "iptv compte expire", "iptv liste vide"],
    eyebrow: "Dépannage",
    h1: "Les messages d'erreur IPTV expliqués",
    lead: "403, 404, « erreur de connexion », « liste vide »… Chaque message a une cause précise. Voici comment les interpréter et les corriger.",
    symptoms: ["Erreur 403 (accès refusé)", "Erreur 404 (introuvable)", "« Erreur de connexion » ou « liste vide »", "« Compte expiré »"],
    causes: ["Identifiants ou abonnement invalides (403)", "Lien mal saisi ou expiré (404)", "Connexion instable ou serveur momentanément indisponible", "Abonnement arrivé à échéance"],
    solutions: [
      { title: "Erreur 403", description: "Accès refusé : vérifiez vos identifiants et que votre abonnement est actif. Un seul flux par ligne est autorisé." },
      { title: "Erreur 404", description: "Ressource introuvable : recopiez le lien ou l'URL sans erreur, il a peut-être été mal saisi ou a expiré." },
      { title: "Erreur de connexion / liste vide", description: "Vérifiez votre connexion internet, puis rechargez la liste. Patientez si un serveur est momentanément occupé." },
      { title: "Compte expiré", description: "Votre abonnement est terminé : renouvelez-le pour réactiver l'accès. Vos réglages sont conservés." },
    ],
    support: "Notez le code exact affiché avant de contacter le support : il permet un diagnostic bien plus rapide.",
  },
  "ecran-noir": {
    slug: "ecran-noir",
    name: "Écran noir & son",
    order: 5,
    metaTitle: "IPTV écran noir ou pas de son : solutions",
    metaDescription:
      "Écran noir sur une chaîne IPTV, image figée ou absence de son ? Causes fréquentes (codec, chaîne, réseau) et réglages pour rétablir l'image et l'audio.",
    keywords: ["iptv ecran noir", "iptv pas de son", "iptv image saccadee", "iptv codec non supporte"],
    eyebrow: "Dépannage",
    h1: "Écran noir ou pas de son sur l'IPTV",
    lead: "Un écran noir ou une chaîne muette concerne souvent une chaîne précise ou un réglage audio. Voici comment isoler la cause.",
    symptoms: ["Écran noir sur une ou plusieurs chaînes", "Image sans son", "Image saccadée sur certaines chaînes"],
    causes: ["Chaîne momentanément indisponible", "Codec audio non pris en charge (son)", "Décodage matériel mal réglé", "Connexion instable"],
    solutions: [
      { title: "Testez une autre chaîne", description: "Si les autres chaînes fonctionnent, la chaîne concernée est momentanément indisponible." },
      { title: "Réglez la sortie audio", description: "En cas d'absence de son, passez la sortie audio du téléviseur de Bitstream à PCM." },
      { title: "Changez le mode de décodage", description: "Dans le lecteur, basculez entre décodage matériel et logiciel pour les chaînes récalcitrantes." },
      { title: "Redémarrez", description: "Un simple redémarrage de l'application résout de nombreux écrans noirs passagers." },
    ],
    support: "Si un écran noir touche toutes les chaînes, il s'agit plutôt d'un problème de connexion ou d'identifiants.",
  },
  "serveur-indisponible": {
    slug: "serveur-indisponible",
    name: "Serveur indisponible",
    order: 6,
    metaTitle: "IPTV serveur indisponible : que faire ?",
    metaDescription:
      "Message « serveur indisponible » en IPTV : causes possibles, vérifications à faire et quand contacter le support. Retrouvez rapidement votre accès.",
    keywords: ["iptv serveur indisponible", "iptv serveur down", "iptv server hors service", "iptv serveur ne repond pas"],
    eyebrow: "Dépannage",
    h1: "« Serveur indisponible » : les solutions",
    lead: "Ce message est le plus souvent temporaire. Quelques vérifications permettent de distinguer un incident passager d'un problème de configuration.",
    symptoms: ["Message « serveur indisponible »", "Chaînes qui ne se lancent plus", "Chargement infini"],
    causes: ["Maintenance ou charge momentanée du serveur", "Connexion internet interrompue", "Réglages de connexion à revérifier"],
    solutions: [
      { title: "Patientez quelques minutes", description: "Une indisponibilité est souvent temporaire. Réessayez après quelques minutes." },
      { title: "Vérifiez votre connexion", description: "Assurez-vous qu'internet fonctionne sur l'appareil concerné." },
      { title: "Redémarrez l'application", description: "Fermez puis rouvrez le lecteur pour rétablir la connexion au serveur." },
    ],
    support: "Si l'indisponibilité se prolonge, contactez le support : nous vous informons de l'incident ou proposons un serveur alternatif.",
  },
  "compte-expire": {
    slug: "compte-expire",
    name: "Compte expiré",
    order: 7,
    metaTitle: "IPTV compte expiré : réactiver son abonnement",
    metaDescription:
      "Message « compte expiré » en IPTV : ce que cela signifie, comment renouveler votre abonnement et récupérer l'accès à vos chaînes sans perdre vos réglages.",
    keywords: ["iptv compte expire", "iptv abonnement expire", "iptv reactiver compte", "iptv renouvellement"],
    eyebrow: "Dépannage",
    h1: "« Compte expiré » : réactiver l'accès",
    lead: "Ce message signifie simplement que votre abonnement est arrivé à échéance. Le renouvellement rétablit l'accès en quelques minutes, sans reconfigurer l'application.",
    symptoms: ["Message « compte expiré » ou « expired »", "Les chaînes ne se lancent plus", "Connexion refusée à l'ouverture"],
    causes: ["Abonnement arrivé à son terme", "Renouvellement non encore pris en compte", "Confusion entre deux lignes d'accès"],
    solutions: [
      { title: "Vérifiez la date de fin", description: "Retrouvez la durée souscrite dans votre e-mail de confirmation pour confirmer l'échéance." },
      { title: "Renouvelez l'abonnement", description: "Reprenez une formule pour réactiver vos accès. Vos réglages et favoris sont conservés dans l'application." },
      { title: "Rechargez après renouvellement", description: "Une fois le renouvellement confirmé, redémarrez l'application pour recharger la liste." },
    ],
    support: "Si votre compte affiche « expiré » alors que vous venez de renouveler, contactez le support avec votre e-mail de commande pour une réactivation rapide.",
  },
  "chaines-manquantes": {
    slug: "chaines-manquantes",
    name: "Chaînes manquantes",
    order: 8,
    metaTitle: "IPTV chaînes manquantes ou disparues : que faire ?",
    metaDescription:
      "Des chaînes ont disparu de votre liste IPTV ? Causes fréquentes (liste non rechargée, catégorie masquée, mise à jour) et solutions pour les retrouver.",
    keywords: ["iptv chaines manquantes", "iptv chaines disparues", "iptv chaine introuvable", "iptv liste incomplete"],
    eyebrow: "Dépannage",
    h1: "Des chaînes ont disparu de ma liste",
    lead: "Quand des chaînes manquent, elles ne sont presque jamais perdues : la liste doit souvent simplement être rechargée ou une catégorie a été masquée.",
    symptoms: ["Une catégorie entière n'apparaît plus", "Une chaîne précise a disparu", "La liste semble plus courte qu'avant"],
    causes: ["Liste non rechargée après une mise à jour", "Catégorie masquée ou filtre actif dans le lecteur", "Réorganisation du bouquet côté serveur", "Cache de l'application obsolète"],
    solutions: [
      { title: "Rechargez la liste", description: "Dans les réglages du lecteur, utilisez « actualiser » ou « recharger la playlist » pour récupérer les dernières chaînes." },
      { title: "Vérifiez les filtres et catégories", description: "Assurez-vous qu'aucune catégorie n'est masquée et qu'aucun filtre (favoris, verrouillage) n'est activé." },
      { title: "Videz le cache de l'application", description: "Un cache obsolète peut afficher une ancienne liste : videz-le puis rouvrez l'application." },
      { title: "Redémarrez l'appareil", description: "Un redémarrage force le lecteur à récupérer la liste complète et à jour." },
    ],
    support: "Si une chaîne reste introuvable après rechargement, indiquez son nom exact au support : elle a peut-être changé de catégorie ou de nom.",
  },
  "iptv-bloque-operateur": {
    slug: "iptv-bloque-operateur",
    name: "IPTV bloqué par l'opérateur",
    order: 9,
    metaTitle: "IPTV bloqué par l'opérateur (FAI) : DNS, VPN et solutions",
    metaDescription:
      "Votre IPTV est ralenti ou bloqué par votre opérateur (Orange, SFR, Free, Bouygues) ? Comprendre le bridage, changer de DNS ou utiliser un VPN pour rétablir l'accès.",
    keywords: ["iptv bloque operateur", "iptv bloque fai", "iptv orange sfr free bloque", "iptv changer dns", "iptv bridage"],
    eyebrow: "Dépannage",
    h1: "IPTV ralenti ou bloqué par l'opérateur",
    lead: "Certains fournisseurs d'accès ralentissent ou filtrent les flux vidéo aux heures de pointe. Un changement de DNS ou un VPN suffit généralement à rétablir un flux fluide.",
    symptoms: ["Coupures surtout le soir, alors que le débit est correct", "Flux fluide en 4G mais pas en Wi-Fi (ou l'inverse)", "Certaines chaînes seulement sont affectées"],
    causes: ["Bridage des flux vidéo par le fournisseur d'accès aux heures de pointe", "Filtrage DNS de l'opérateur", "Routage réseau non optimal vers le serveur"],
    solutions: [
      { title: "Changez de DNS", description: "Configurez un DNS public (par exemple 1.1.1.1 ou 8.8.8.8) sur votre appareil ou votre box pour contourner un filtrage DNS." },
      { title: "Testez avec un VPN", description: "Un VPN chiffre le flux et empêche le bridage ciblé : si tout redevient fluide avec le VPN, l'opérateur était bien en cause. 4kiptvfr.com est 100% compatible VPN." },
      { title: "Comparez Wi-Fi et données mobiles", description: "Si le flux est fluide en 4G/5G mais pas en Wi-Fi, le problème vient bien de votre connexion fixe." },
      { title: "Privilégiez le filaire", description: "L'Ethernet limite les pertes et donne un point de comparaison fiable." },
    ],
    support: "Si le bridage persiste malgré le DNS et le VPN, contactez le support : un serveur mieux routé pour votre opérateur peut être proposé.",
  },
  "iptv-samsung": {
    slug: "iptv-samsung",
    name: "IPTV sur Samsung",
    order: 10,
    metaTitle: "IPTV ne fonctionne pas sur Samsung (Tizen) : solutions",
    metaDescription:
      "L'IPTV ne marche pas sur votre TV Samsung ? Application indisponible, écran noir, plantage : les solutions spécifiques à Tizen pour retrouver vos chaînes.",
    keywords: ["iptv ne fonctionne pas samsung", "iptv samsung probleme", "iptv tizen probleme", "smart iptv samsung ne marche pas"],
    eyebrow: "Dépannage",
    h1: "L'IPTV ne fonctionne pas sur ma TV Samsung",
    lead: "Sur les téléviseurs Samsung (système Tizen), la plupart des blocages viennent de l'application ou du store. Voici les vérifications propres à Samsung.",
    symptoms: ["L'application IPTV a disparu du téléviseur", "Écran noir ou plantage à l'ouverture", "Impossible d'installer le lecteur depuis le store"],
    causes: ["Application retirée ou non disponible dans le store Samsung du pays", "Cache de l'application saturé", "Système Tizen à mettre à jour", "Identifiants non enregistrés"],
    solutions: [
      { title: "Mettez à jour le téléviseur", description: "Dans Paramètres > Assistance > Mise à jour du logiciel, installez la dernière version de Tizen." },
      { title: "Réinstallez le lecteur", description: "Supprimez puis réinstallez l'application IPTV depuis le Samsung Apps Store, ou utilisez un lecteur alternatif compatible Tizen." },
      { title: "Videz le cache", description: "Un cache saturé provoque plantages et écrans noirs : videz-le dans les réglages de l'application." },
      { title: "Vérifiez vos identifiants", description: "Ressaisissez l'URL et les identifiants reçus par e-mail, sans espace superflu." },
    ],
    support: "Retrouvez le guide complet d'installation sur la page dédiée aux téléviseurs Samsung, ou contactez le support avec le modèle exact de votre TV.",
  },
  "iptv-firestick": {
    slug: "iptv-firestick",
    name: "IPTV sur Fire TV Stick",
    order: 11,
    metaTitle: "IPTV ne fonctionne pas sur Fire TV Stick : solutions",
    metaDescription:
      "L'IPTV rame ou ne se lance pas sur votre Fire TV Stick ? Manque de mémoire, application à réinstaller, Wi-Fi faible : les solutions spécifiques au Fire Stick.",
    keywords: ["iptv ne fonctionne pas firestick", "iptv fire tv stick probleme", "firestick iptv rame", "iptv smarters firestick probleme"],
    eyebrow: "Dépannage",
    h1: "L'IPTV ne fonctionne pas sur mon Fire TV Stick",
    lead: "Le Fire TV Stick est puissant mais limité en mémoire. La plupart des soucis se règlent en libérant de l'espace et en stabilisant le Wi-Fi.",
    symptoms: ["L'application est lente ou se ferme", "Buffering alors que la connexion semble bonne", "Le lecteur ne s'installe pas ou disparaît"],
    causes: ["Mémoire de stockage saturée", "Wi-Fi faible (le Stick capte moins bien qu'une box)", "Application à mettre à jour", "Trop d'applications en arrière-plan"],
    solutions: [
      { title: "Libérez de l'espace", description: "Supprimez les applications inutilisées : un Fire Stick presque plein rame et fait planter le lecteur." },
      { title: "Forcez l'arrêt puis relancez", description: "Dans Paramètres > Applications, forcez l'arrêt de l'application IPTV avant de la rouvrir." },
      { title: "Renforcez le Wi-Fi", description: "Rapprochez la box, ou utilisez un adaptateur Ethernet pour Fire Stick afin de fiabiliser le flux." },
      { title: "Réinstallez l'application", description: "Désinstallez puis réinstallez le lecteur depuis l'Appstore ou via Downloader." },
    ],
    support: "Le guide pas à pas se trouve sur la page dédiée au Fire TV Stick. En cas de blocage, contactez le support en précisant le modèle de Stick.",
  },
  "application-plante": {
    slug: "application-plante",
    name: "L'application plante",
    order: 12,
    metaTitle: "L'application IPTV plante ou se ferme : solutions",
    metaDescription:
      "Votre application IPTV se ferme toute seule, se fige ou plante au démarrage ? Cache, mémoire, mise à jour : les solutions pour la stabiliser durablement.",
    keywords: ["application iptv plante", "iptv se ferme tout seul", "iptv se fige", "iptv smarters plante", "iptv crash"],
    eyebrow: "Dépannage",
    h1: "Mon application IPTV plante ou se ferme",
    lead: "Une application qui se ferme seule est presque toujours un problème de mémoire ou de cache — rarement l'abonnement. Voici comment la stabiliser.",
    symptoms: ["L'application se ferme au démarrage", "Gel de l'interface au bout de quelques minutes", "Retour à l'écran d'accueil sans raison"],
    causes: ["Cache saturé", "Mémoire vive insuffisante sur l'appareil", "Version de l'application obsolète", "Trop d'applications ouvertes en arrière-plan"],
    solutions: [
      { title: "Videz le cache", description: "Un cache trop volumineux est la première cause de plantage : videz-le dans les réglages de l'application ou du système." },
      { title: "Fermez les applications en arrière-plan", description: "Libérez la mémoire vive en fermant les autres applications avant de lancer l'IPTV." },
      { title: "Mettez à jour ou réinstallez", description: "Installez la dernière version du lecteur ; en cas de doute, désinstallez puis réinstallez-le." },
      { title: "Redémarrez l'appareil", description: "Un redémarrage complet vide la mémoire et résout la plupart des plantages récurrents." },
    ],
    support: "Si les plantages persistent sur un appareil ancien, un lecteur plus léger peut aider : le support peut vous en recommander un adapté.",
  },
  "image-qualite": {
    slug: "image-qualite",
    name: "Image de mauvaise qualité",
    order: 13,
    metaTitle: "IPTV image pixelisée ou de mauvaise qualité : solutions",
    metaDescription:
      "Image IPTV floue, pixelisée ou en basse définition alors que vous attendiez la 4K ? Les causes (débit, réglage qualité, écran) et comment retrouver une image nette.",
    keywords: ["iptv image pixelisee", "iptv mauvaise qualite", "iptv image floue", "iptv pas en 4k", "iptv basse definition"],
    eyebrow: "Dépannage",
    h1: "Image pixelisée ou de mauvaise qualité",
    lead: "Une image floue vient le plus souvent d'un débit limité ou d'un réglage de qualité trop bas — rarement de la chaîne elle-même.",
    symptoms: ["Image pixelisée ou floue", "Qualité qui baisse automatiquement pendant la lecture", "La 4K annoncée s'affiche en HD"],
    causes: ["Débit insuffisant pour la Full HD ou la 4K", "Réglage de qualité automatique trop bas", "Téléviseur ou lecteur limité à une définition", "Version SD de la chaîne sélectionnée"],
    solutions: [
      { title: "Choisissez la version HD/4K de la chaîne", description: "Beaucoup de bouquets proposent une même chaîne en SD, HD et 4K : sélectionnez la meilleure version disponible." },
      { title: "Vérifiez votre débit", description: "Comptez environ 10–15 Mb/s pour la Full HD et 25 Mb/s pour la 4K, mesurés sur l'appareil concerné." },
      { title: "Forcez la qualité maximale", description: "Dans les réglages du lecteur, désactivez la qualité automatique et fixez la définition la plus haute." },
      { title: "Contrôlez l'écran et le câble", description: "Un câble HDMI ancien ou un mode d'image « éco » peut brider la définition affichée." },
    ],
    support: "Si l'image reste médiocre malgré un bon débit et le bon réglage, indiquez la chaîne concernée au support pour vérifier sa source.",
  },
  "son-decale": {
    slug: "son-decale",
    name: "Son décalé",
    order: 14,
    metaTitle: "IPTV son décalé ou désynchronisé : solutions",
    metaDescription:
      "Le son est en décalage avec l'image sur votre IPTV ? Décalage audio, lèvres non synchronisées : les réglages (barre de son, décodage, buffer) pour corriger la synchro.",
    keywords: ["iptv son decale", "iptv audio desynchronise", "iptv son pas synchro", "iptv decalage son image"],
    eyebrow: "Dépannage",
    h1: "Le son est décalé par rapport à l'image",
    lead: "Un décalage audio (lip sync) est presque toujours un problème de traitement du son par le téléviseur ou la barre de son, pas de la chaîne.",
    symptoms: ["Le son précède ou suit l'image", "Décalage qui s'accentue avec le temps de lecture", "Problème surtout avec une barre de son ou un home-cinéma"],
    causes: ["Traitement audio de la barre de son / ampli", "Décodage matériel mal adapté", "Buffer audio du lecteur", "Sortie audio en Bitstream mal gérée"],
    solutions: [
      { title: "Réglez la synchro audio du téléviseur", description: "La plupart des TV offrent un réglage « synchronisation audio » (audio delay) pour recaler le son sur l'image." },
      { title: "Passez la sortie audio en PCM", description: "Sur le téléviseur, remplacez la sortie Bitstream/Dolby par PCM pour éviter le décalage introduit par certains amplis." },
      { title: "Changez le mode de décodage", description: "Dans le lecteur, basculez entre décodage matériel et logiciel pour corriger la synchro." },
      { title: "Relancez la chaîne", description: "Quitter puis rouvrir la chaîne réinitialise le tampon audio et recale souvent le son." },
    ],
    support: "Si le décalage ne touche qu'une barre de son, consultez aussi son propre réglage de synchronisation (lip sync).",
  },
  "epg-ne-safiche-pas": {
    slug: "epg-ne-safiche-pas",
    name: "Le guide des programmes ne s'affiche pas",
    order: 15,
    metaTitle: "IPTV : le guide des programmes (EPG) ne s'affiche pas",
    metaDescription:
      "Le guide des programmes (EPG) est vide, décalé ou absent sur votre IPTV ? Les causes (EPG non chargé, fuseau horaire, cache) et comment le réafficher correctement.",
    keywords: ["iptv epg ne s'affiche pas", "iptv guide programmes vide", "iptv epg decale", "iptv epg absent", "iptv guide tv probleme"],
    eyebrow: "Dépannage",
    h1: "Le guide des programmes (EPG) ne s'affiche pas",
    lead: "Un EPG vide ou décalé se règle presque toujours côté application : chargement du guide, fuseau horaire et cache sont les trois points à vérifier.",
    symptoms: ["Guide des programmes vide", "Programmes décalés d'une ou plusieurs heures", "EPG présent sur certaines chaînes seulement"],
    causes: ["EPG non chargé ou source EPG non renseignée", "Fuseau horaire mal réglé dans le lecteur", "Cache EPG obsolète", "Nom de chaîne non associé au guide"],
    solutions: [
      { title: "Rechargez l'EPG", description: "Dans les réglages du lecteur, forcez le rechargement du guide des programmes (EPG / TV Guide)." },
      { title: "Vérifiez le fuseau horaire", description: "Un EPG décalé vient d'un mauvais fuseau : réglez-le sur l'heure de Paris (GMT+1/+2) dans l'application." },
      { title: "Videz le cache EPG", description: "Supprimez le cache du guide puis rechargez-le pour repartir sur des données à jour." },
      { title: "Patientez au premier chargement", description: "Le guide peut mettre quelques minutes à se remplir après l'installation ou une mise à jour." },
    ],
    support: "Pour tout comprendre du fonctionnement du guide, consultez la page dédiée à l'EPG. Le support peut vérifier la source si le guide reste vide.",
  },
};

export const PROBLEM_LIST = Object.values(PROBLEMS).sort((a, b) => a.order - b.order);
export const PROBLEM_SLUGS = PROBLEM_LIST.map((p) => p.slug);
