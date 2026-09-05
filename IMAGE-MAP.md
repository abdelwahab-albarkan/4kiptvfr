# 4kiptvfr.com — Image Map (internal)

Inventory of `public/images/` (~90 files, 46 MB). Not linked publicly.
"Used" = wired into a page via `next/image` with descriptive alt + width/height.

## Wired into pages (clean semantic copies created)

| Semantic file (used) | Source original | Page | Type | Alt |
|---|---|---|---|---|
| `home-hero.jpg` | `lucid-origin_Happy_family_watching_a_modern_Smart_TV…jpg` | `/` | hero (priority) | Famille regardant la télévision en streaming IPTV sur une grande Smart TV |
| `device-samsung.jpg` | `iptv-samsung-tv-setup.jpg` | `/appareils/samsung` | device hero | Application IPTV ouverte sur une Samsung Smart TV |
| `device-lg.jpg` | `gpt-image-2_A_premium_LG_OLED_Smart_TV…jpg` | `/appareils/lg` | device hero | TV LG OLED affichant une interface IPTV |
| `device-android-tv.jpg` | `iptv-android-tv-setup.jpg` | `/appareils/android-tv` | device hero | Installation de l'IPTV sur un téléviseur Android TV |
| `device-firestick.jpg` | `iptv-fire-tv-stick.jpg` | `/appareils/firestick` | device hero | Fire TV Stick branché pour regarder l'IPTV |
| `device-apple-tv.png` | `appletv.png` | `/appareils/apple-tv` | device | Boîtier Apple TV compatible IPTV |
| `device-xiaomi.png` | `androidtvbox.png` | `/appareils/xiaomi` | device | Box Android Xiaomi compatible IPTV |
| `device-nvidia-shield.png` | `nvidiashield.png` | `/appareils/nvidia-shield` | device | Box Nvidia Shield TV pour l'IPTV 4K |
| `device-mag.png` | `mag.png` | `/appareils/mag` | device | Décodeur MAG configuré pour l'IPTV |
| `device-iphone-ipad.png` | `iphone17.png` | `/appareils/iphone-ipad` | device | IPTV sur iPhone et iPad |
| `device-windows.jpg` | `iptv-windows-pc.jpg` | `/appareils/windows` | device hero | IPTV lue sur un PC Windows |
| `device-mac.png` | `macos.png` | `/appareils/mac` | device | IPTV sur Mac sous macOS |
| `blog-iptv-senior.jpg` | `lucid-origin_Happy_family_watching…jpg` | `/blog/iptv-pour-senior` | article hero | Personnes regardant tranquillement la TV en streaming |
| `app-smarters.jpg` | `SMARTERS-PRO-1-YEAR-SUBSCRIPTION_1.jpg` | (reserved for `/applications/smarters`) | app | Interface d'IPTV Smarters Pro |

## Available but not yet wired (library — reusable later)
- **Device renders (PNG):** `samsungsmarttv.png`, `LG TV (webOS).png`, `Android TV.png`, `firestick.png`, `firetvcude.png`, `Fire Tablet.png`, `chromecast.png`, `roku.png`, `Formuler.png`, `Sony TV (Google TV).png`, `TCL TV.png`, `Hisense TV.png`, `other Smart TV.png`, `PlayStation.png`, `Xbox.png`, `iPad.png`, `windowspc.png`, `androidphones.png`
- **Setup/screenshot photos (JPG):** `iptv-samsung-app-store.jpg`, `iptv-google-tv-dashboard.jpg`, `iptv-heimkino.jpg` (home cinema — good alt hero), `IPTVX-Apple-App-Store.jpg`
- **Install screenshots:** `devices/install/{smart-tv,android-tv,firestick,mobile}-install.png`
- **Editorial (JPG):** LG living-room set, VPN/security shields, Wi-Fi speed, Google-vs-Android split — usable for `/formats`, `/problemes/vitesse-internet`, `/meilleur-iptv`.

## Notes
- Copied (not moved) to clean names so originals remain intact.
- Many editorial images mention "Google TV/Canada" in their generated filenames (from the family's other sites) but are visually generic living-room/TV scenes — used only where visually appropriate, never where the label would mislead.
- Not every page gets an image (per brief): technical/legal/FAQ pages stay text-first for clarity and speed.
- All wired images use `next/image` (AVIF/WebP via next.config), explicit width/height (no CLS), `priority` only on above-the-fold heroes, lazy by default elsewhere.
