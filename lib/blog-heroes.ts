/**
 * Central blog featured-image map (slug → { src, alt }). Reuses existing images
 * from public/images, mapped to each article by topic. Injected into posts by
 * lib/blog.ts when a post doesn't already define its own heroImage — so the
 * article template and OG metadata pick it up with no per-article duplication.
 *
 * alt text honestly describes the depicted scene (no keyword-stuffing, no
 * misleading claims). Images are landscape editorial streaming/device visuals.
 */

type Hero = { src: string; alt: string };

// --- Image pool (each declared once, referenced by many articles when relevant) ---
const family: Hero = {
  src: "/images/lucid-origin_Happy_family_watching_a_modern_Smart_TV_in_a_luxury_living_room_secure_digital_s-0.jpg",
  alt: "Famille regardant la télévision en streaming sur une grande Smart TV dans un salon",
};
const homeTheater: Hero = {
  src: "/images/lucid-origin_Luxury_home_theater_with_Google_TV_streaming_ultra_HD_4K_entertainment_premium_O-0.jpg",
  alt: "Home cinéma avec une grande télévision diffusant du contenu en 4K",
};
const premiumSetup: Hero = {
  src: "/images/lucid-origin_Ultra-realistic_premium_streaming_setup_in_a_modern_Canadian_living_room_large_4-0.jpg",
  alt: "Installation de streaming premium dans un salon moderne avec une grande télévision 4K",
};
const gtvSetup: Hero = {
  src: "/images/lucid-origin_Ultra-realistic_Google_TV_streaming_setup_in_a_modern_luxury_living_room_Chromec-0.jpg",
  alt: "Salon moderne équipé d'une Smart TV et d'un boîtier de streaming",
};
const devices: Hero = {
  src: "/images/lucid-origin_Collection_of_premium_streaming_devices_including_Android_TV_box_Fire_TV_style_s-0.jpg",
  alt: "Ensemble d'appareils de streaming : boîtier Android TV, clé Fire TV et lecteurs",
};
const gtvHome: Hero = {
  src: "/images/lucid-origin_Modern_Google_TV_home_screen_with_personalized_recommendations_app_icons_streami-0.jpg",
  alt: "Écran d'accueil d'une Smart TV avec applications et recommandations",
};
const editorial: Hero = {
  src: "/images/lucid-origin_Award-winning_editorial_technology_artwork_showing_Google_TV_as_the_ultimate_str-0.jpg",
  alt: "Illustration éditoriale d'une plateforme de streaming sur Smart TV",
};
const lgOled: Hero = {
  src: "/images/gpt-image-2_Luxury_home_entertainment_setup_with_a_large_LG_OLED_Smart_TV_displaying_IPTV_co-0.jpg",
  alt: "Grande télévision OLED LG diffusant du contenu de streaming dans un salon",
};
const shield: Hero = {
  src: "/images/lucid-origin_Futuristic_cybersecurity_shield_protecting_online_streaming_glowing_encrypted_da-0.jpg",
  alt: "Illustration d'un bouclier de cybersécurité protégeant une connexion de streaming",
};
const vpn: Hero = {
  src: "/images/lucid-origin_Modern_streaming_setup_with_encrypted_VPN_tunnel_visualization_Smart_TV_laptop_a-0.jpg",
  alt: "Représentation d'un tunnel VPN chiffré reliant une Smart TV et un ordinateur",
};
const secureNet: Hero = {
  src: "/images/lucid-origin_Modern_Smart_TV_connected_to_a_secure_streaming_network_glowing_digital_shield_p-0.jpg",
  alt: "Smart TV connectée à un réseau de streaming sécurisé",
};
const wifi: Hero = {
  src: "/images/lucid-origin_Modern_Wi-Fi_router_with_glowing_speed_lines_reaching_a_large_Smart_TV_high-spee-0.jpg",
  alt: "Routeur Wi-Fi diffusant un signal haut débit vers une Smart TV",
};
const ethernet: Hero = {
  src: "/images/lucid-origin_LG_Smart_TV_connected_through_a_high-speed_Ethernet_cable_with_glowing_digital_n-0.jpg",
  alt: "Smart TV LG reliée par un câble Ethernet pour une connexion stable",
};
const install: Hero = {
  src: "/images/lucid-origin_Step-by-step_IPTV_installation_concept_on_Google_TV_Google_Play_Store_open_on_te-0.jpg",
  alt: "Installation pas à pas d'une application IPTV depuis le store d'une Smart TV",
};
const split: Hero = {
  src: "/images/lucid-origin_Split-screen_comparison_showing_Google_TV_interface_versus_Android_TV_interface_-0.jpg",
  alt: "Comparaison en écran partagé de deux interfaces de Smart TV",
};
const tivimate: Hero = {
  src: "/images/gpt-image-2_Modern_IPTV_application_interface_inspired_by_TiviMate_displayed_on_a_Google_TV_-0.jpg",
  alt: "Interface d'une application IPTV moderne affichée sur une Smart TV",
};
const players: Hero = {
  src: "/images/gpt-image-2_Collection_of_premium_IPTV_player_interfaces_displayed_on_Google_TV_multiple_str-0.jpg",
  alt: "Plusieurs interfaces de lecteurs IPTV affichées sur des écrans",
};
const lgWebos: Hero = {
  src: "/images/gpt-image-2_Close-up_of_an_LG_Smart_TV_running_the_webOS_home_interface_with_IPTV_applicatio-0.jpg",
  alt: "Smart TV LG sous webOS affichant l'interface d'accueil",
};
const lgMagic: Hero = {
  src: "/images/gpt-image-2_A_hand_using_an_LG_Magic_Remote_while_navigating_an_IPTV_application_on_a_large_-0.jpg",
  alt: "Utilisation d'une télécommande LG pour naviguer dans une application IPTV",
};
const chromecast: Hero = {
  src: "/images/gpt-image-2_Close-up_of_Chromecast_with_Google_TV_remote_and_streaming_device_beside_a_premi-0.jpg",
  alt: "Chromecast avec Google TV et sa télécommande à côté d'une télévision",
};
const firestick: Hero = { src: "/images/iptv-fire-tv-stick.jpg", alt: "Clé Fire TV Stick pour regarder l'IPTV sur un téléviseur" };
const samsung: Hero = { src: "/images/iptv-samsung-tv-setup.jpg", alt: "Configuration de l'IPTV sur une Smart TV Samsung" };
const android: Hero = { src: "/images/iptv-android-tv-setup.jpg", alt: "Configuration de l'IPTV sur un appareil Android TV" };
const gtvDash: Hero = { src: "/images/iptv-google-tv-dashboard.jpg", alt: "Tableau de bord d'une Smart TV sous Google TV" };
const windows: Hero = { src: "/images/iptv-windows-pc.jpg", alt: "IPTV en cours d'utilisation sur un ordinateur Windows" };
const heimkino: Hero = { src: "/images/iptv-heimkino.jpg", alt: "Salle de home cinéma avec un grand écran diffusant du contenu" };
const samsungStore: Hero = { src: "/images/iptv-samsung-app-store.jpg", alt: "Store d'applications d'une Smart TV Samsung pour installer un lecteur IPTV" };

export const BLOG_HEROES: Record<string, Hero> = {
  // Base posts (iptv-pour-senior already defines its own heroImage → not listed)
  "comment-choisir-son-abonnement-iptv": editorial,
  "installer-iptv-sur-fire-tv-stick": firestick,
  "iptv-et-vpn-faut-il-en-utiliser-un": vpn,
  "quest-ce-que-liptv": premiumSetup,
  "iptv-legal-en-france": shield,
  "iptv-4k-materiel-et-conditions": homeTheater,
  "comment-installer-iptv": install,
  "reconnaitre-arnaque-iptv": secureNet,
  "regarder-tv-francaise-etranger": gtvSetup,
  "iptv-multi-ecrans-famille": family,
  "mettre-a-jour-application-iptv": gtvHome,
  "choisir-boitier-iptv": devices,
  "comprendre-vod-iptv": lgOled,
  "activer-iptv-rapidement": samsungStore,
  "erreurs-a-eviter-debutant-iptv": gtvDash,
  "comprendre-4k-hdr-h265": heimkino,
  "iptv-et-sport-tout-suivre": premiumSetup,
  "controle-parental-iptv": family,
  "pourquoi-iptv-moins-cher": gtvSetup,
  "quel-forfait-internet-pour-iptv": wifi,
  "configurer-favoris-et-epg": gtvHome,

  // Extra posts
  "meilleures-applications-iptv-2026": players,
  "comment-configurer-un-vpn-pour-iptv": vpn,
  "meilleures-smart-tv-pour-iptv": lgWebos,
  "meilleurs-lecteurs-iptv-gratuits": tivimate,
  "m3u-ou-xtream-codes": split,
  "tivimate-ou-iptv-smarters": split,
  "fire-tv-stick-ou-boitier-android": chromecast,
  "wifi-ou-ethernet-pour-iptv": ethernet,
  "iptv-payant-ou-gratuit": editorial,
  "comment-ajouter-une-playlist-m3u": install,
  "comment-utiliser-les-codes-xtream": android,
  "comment-enregistrer-un-programme-iptv": lgMagic,
  "comment-regarder-iptv-dans-plusieurs-pieces": premiumSetup,
  "comment-ameliorer-la-qualite-dimage-iptv": homeTheater,
  "comment-tester-son-debit-pour-iptv": wifi,
  "comment-installer-iptv-sur-videoprojecteur": heimkino,
  "comment-reduire-la-consommation-de-donnees-iptv": ethernet,
  "difference-entre-iptv-ott-et-vod": editorial,
  "comment-fonctionne-un-serveur-iptv": secureNet,
  "quest-ce-quun-fichier-m3u8": windows,
  "comprendre-la-latence-et-le-buffer": wifi,
  "iptv-et-protection-de-la-vie-privee": shield,
  "iptv-pour-etudiants": gtvDash,
  "iptv-pour-les-amateurs-de-cinema": lgOled,
  "iptv-pour-suivre-lactualite-internationale": premiumSetup,
  "iptv-pour-regarder-le-sport-etranger": homeTheater,
  "suivre-le-ramadan-a-la-television": family,
  "regarder-les-jeux-olympiques-en-streaming": premiumSetup,
  "preparer-sa-tv-pour-la-saison-de-football": samsung,
  "checklist-avant-de-souscrire-un-abonnement-iptv": devices,
};
