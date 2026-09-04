/**
 * ⚠️ PLACEHOLDER / DEMO DATA — these are ILLUSTRATIVE examples, NOT real
 * customer reviews. They exist so the Reviews UI can be designed and tested
 * against realistic content. Before relying on this section:
 *   1. Replace the entries below with genuine, attributable customer reviews.
 *   2. Set `verified: true` ONLY on reviews tied to real verified purchases.
 *   3. Only THEN may Review / AggregateRating schema be added (fabricated
 *      review markup is illegal in FR/EU and penalised by Google).
 * The section renders a small "display examples" note while REVIEWS_ARE_PLACEHOLDER
 * is true — remove the flag (and the note) once real reviews are in place.
 *
 * To connect a real source later, keep this shape and swap the array for data
 * fetched from your DB/API/admin — the ReviewCard component stays unchanged.
 */

export type Review = {
  id: string;
  name: string;
  country: string; // French country name (matches Flag's flagCode)
  rating: number; // 1–5
  comment: string;
  date: string; // display string, e.g. "août 2026"
  verified: boolean;
  avatar?: string; // optional real image URL; falls back to initials
};

export const REVIEWS_ARE_PLACEHOLDER = true;

export const REVIEWS: Review[] = [
  {
    id: "r1",
    avatar: "/images/pexels-alpha-iliya-2149105184-32064778 (1).jpg",
    name: "Karim",
    country: "Maroc",
    rating: 5,
    comment:
      "Je retrouve enfin 2M et Al Aoula en direct, sans parabole et avec une image nette. L'installation sur ma box Android a pris cinq minutes.",
    date: "août 2026",
    verified: false,
  },
  {
    id: "r2",
    avatar: "/images/pexels-helenalopes-27086758.jpg",
    name: "Sophie",
    country: "France",
    rating: 5,
    comment: "Configuration très simple sur ma Samsung, tout a marché du premier coup.",
    date: "juillet 2026",
    verified: false,
  },
  {
    id: "r3",
    avatar: "/images/pexels-kelly-3812011.jpg",
    name: "Miguel",
    country: "Portugal",
    rating: 4,
    comment:
      "Bon service et beaucoup de chaînes portugaises. J'avais quelques coupures le soir, réglées en passant la télévision en Ethernet.",
    date: "juillet 2026",
    verified: false,
  },
  {
    id: "r4",
    avatar: "/images/pexels-anna-nekrashevich-6801642.jpg",
    name: "Amine",
    country: "Algérie",
    rating: 5,
    comment:
      "Parfait pour suivre le football, y compris la CAN. Le direct tient bien, même les soirs de gros matchs.",
    date: "juin 2026",
    verified: false,
  },
  {
    id: "r5",
    avatar: "/images/pexels-andreas-suwardy-2152085739-39131498.jpg",
    name: "Laura",
    country: "France",
    rating: 5,
    comment:
      "Support réactif sur WhatsApp : on m'a répondu en quelques minutes pour une question d'installation.",
    date: "juin 2026",
    verified: false,
  },
  {
    id: "r6",
    avatar: "/images/pexels-pixabay-262391.jpg",
    name: "Thomas",
    country: "Belgique",
    rating: 4,
    comment:
      "Fonctionne bien sur mon Fire TV Stick et le rapport qualité-prix est correct. Il me manque juste une ou deux chaînes.",
    date: "mai 2026",
    verified: false,
  },
  {
    id: "r7",
    avatar: "/images/pexels-d-ng-thanh-tu-2922122-10341324.jpg",
    name: "Yasmine",
    country: "France",
    rating: 5,
    comment:
      "Pratique en famille : les enfants ont leurs dessins animés et moi mes séries, sur deux écrans en même temps, sans coupure.",
    date: "mai 2026",
    verified: false,
  },
  {
    id: "r8",
    avatar: "/images/pexels-hao-peng-2148478861-30976004.jpg",
    name: "Marco",
    country: "Italie",
    rating: 5,
    comment: "Enfin la Serie A en version originale. Image stable et bonne qualité.",
    date: "avril 2026",
    verified: false,
  },
];
