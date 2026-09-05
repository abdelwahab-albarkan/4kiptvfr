# 4kiptvfr.com — Master Keyword → URL Map (internal)

Built from 4 sources: `dataipfrance.txt` + 3 × `iptv_broad-match_fr` CSVs.
Not linked from the site. Reference for content/SEO decisions.

## Coverage summary
- Raw rows across CSVs: **32,710**
- Unique normalized keywords: **29,520**
- Mapped to a target URL: **27,473** (93%)
- Unmapped / rejected: **2,047** (7%) — mostly third-party brand apps (Atlas Pro, Iron/King/Zen/Smart IPTV apk) out of scope, or ultra-generic fragments.

## Bucket → URL (by aggregate monthly volume)

| Cluster | Target URL | # kw | Volume | Status |
|---|---|---:|---:|---|
| Brand / generic IPTV France | `/` + `/meilleur-iptv` | 9321 | 550,840 | existing |
| IPTV Smarters | `/applications/smarters` | 1340 | 108,860 | existing |
| Applications (generic) | `/applications` | 1764 | 107,530 | existing |
| M3U | `/formats/m3u` | 1449 | 63,260 | existing |
| Abonnement (generic) | `/abonnement` | 653 | 62,380 | existing |
| Appareils / Smart TV / boîtier | `/appareils` | 996 | 55,770 | existing |
| **Erreurs** | `/problemes/erreurs` | 1377 | 53,680 | **NEW** |
| **Essai / test gratuit** | `/abonnement/essai-gratuit` | 580 | 48,040 | **NEW** |
| Windows / Mac / PC | `/appareils/windows` | 1220 | 39,810 | existing |
| Meilleur / comparatif général | `/meilleur-iptv` | 532 | 34,810 | existing |
| **Chaînes françaises** | `/contenu/chaines/francaises` | 231 | 20,300 | **NEW** |
| **Premium / stable / fiable** | `/abonnement/premium` | 266 | 20,260 | **NEW** |
| Avis / test / arnaque | `/abonnement/avis` | 601 | 17,950 | existing |
| Samsung | `/appareils/samsung` | 535 | 16,760 | existing |
| Android TV / box | `/appareils/android-tv` | 588 | 16,290 | existing |
| Freebox | `/comparatifs/vs-freebox-tv` | 507 | 15,230 | existing |
| Légalité / VPN / sécurité | `/faq` | 235 | 15,080 | existing |
| Xtream Codes | `/formats/xtream-codes` | 309 | 14,720 | existing |
| Installation générique | `/appareils` (hubs) | 471 | 14,200 | existing |
| **Serveur indisponible** | `/problemes/serveur-indisponible` | 502 | 12,150 | **NEW** |
| Chaînes (generic) | `/contenu/chaines` | 352 | 11,670 | existing |
| Firestick | `/appareils/firestick` | 399 | 11,230 | existing |
| **4K / UHD / HDR** | `/abonnement/4k` | 203 | 8,460 | **NEW** |
| **iPhone / iPad / iOS** | `/appareils/iphone-ipad` | 290 | 7,330 | **NEW** |
| **Prix / tarif** | `/abonnement/prix` | 124 | 6,880 | **NEW** |
| **Annuel / 12 mois** | `/abonnement/annuel` | 43 | 6,730 | **NEW** |
| **Ne fonctionne pas** | `/problemes/iptv-ne-fonctionne-pas` | 206 | 6,380 | **NEW** |
| Football / Ligue 1 | `/contenu/sport/football` | 223 | 6,190 | existing |
| Kodi | `/applications/kodi` | 195 | 5,330 | existing |
| **Films / cinéma / VOD** | `/contenu/divertissement/films` | 169 | 5,330 | **NEW** |
| **Pas cher** | `/abonnement/pas-cher` | 53 | 5,170 | **NEW** |
| LG | `/appareils/lg` | 235 | 5,040 | existing |
| EPG | `/formats/epg` | 84 | 4,800 | existing |
| VLC | `/applications/vlc` | 125 | 4,600 | existing |
| Apple TV | `/appareils/apple-tv` | 141 | 4,170 | existing |
| **Chaînes internationales** | `/contenu/chaines/internationales` | 128 | 3,630 | **NEW** |
| Sport (generic) | `/contenu/sport` | 141 | 3,600 | existing |
| **Revendeur / reseller / panel** | `/abonnement/revendeur` | 119 | 3,440 | **NEW** |
| **Lexique / définitions** | `/faq/lexique` | 53 | 2,790 | **NEW** |
| GSE | `/applications/gse-smart-iptv` | 86 | 2,720 | existing |
| Netflix | `/comparatifs/vs-netflix` | 80 | 2,480 | existing |
| **Orange TV** | `/comparatifs/vs-orange-tv` | 67 | 2,420 | **NEW** |
| **Buffering / coupures** | `/problemes/buffering-coupure` | 95 | 2,150 | **NEW** |
| TiviMate | `/applications/tivimate` | 24 | 2,060 | existing |
| Canal+ | `/comparatifs/vs-canal-plus` | 45 | 1,680 | existing |
| XCIPTV | `/applications/xciptv` | 13 | 1,080 | existing |
| **Séries** | `/contenu/divertissement/series` | 44 | 1,030 | **NEW** |
| **Mensuel / 1 mois** | `/abonnement/mensuel` | 24 | 1,010 | **NEW** |
| **Vitesse / débit** | `/problemes/vitesse-internet` | 37 | 870 | **NEW** |
| Divertissement (generic) | `/contenu/divertissement` | 21 | 770 | existing |
| **Écran noir / son** | `/problemes/ecran-noir` | 37 | 760 | **NEW** |
| **Satellite** | `/comparatifs/vs-satellite` | 32 | 640 | **NEW** |
| MAG box | `/appareils/mag` | 23 | 370 | existing |
| OTT Navigator | `/applications/ott-navigator` | 9 | 300 | existing |

## Consolidated (NOT built — too thin per data)
- Sport disciplines **F1 (360), tennis (350), NBA (270), rugby (120), NFL (70)** → sections on `/contenu/sport`, not standalone pages.
- **Documentaires / enfants (50)** → sections on `/contenu/divertissement`.
- **TNT (320)** → folded into `/contenu/chaines/francaises`.
- M3U tools (générer/valider/éditer) → sections on `/formats/m3u`; **no fake generators/validators built** (functionality does not exist).

## Rejected (~2,047 kw)
Third-party brand apps (Atlas Pro, Iron IPTV, King IPTV, Zen IPTV, Smart IPTV apk, "my iptv app"…) — not our brand, out of scope; and ultra-generic single-token fragments.
