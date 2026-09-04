import type { ReactNode } from "react";

/**
 * Real SVG country flags (no emoji flags — which don't render on Windows).
 * Consistent 3:2 ratio, rounded corners, subtle border, crisp on retina.
 * Complex flags are tastefully simplified but recognisable.
 */

type FlagDef = { label: string; svg: ReactNode };

const V = (colors: string[]) => (
  <>
    {colors.map((c, i) => (
      <rect key={i} x={(30 / colors.length) * i} y="0" width={30 / colors.length} height="20" fill={c} />
    ))}
  </>
);
const H = (colors: string[]) => (
  <>
    {colors.map((c, i) => (
      <rect key={i} x="0" y={(20 / colors.length) * i} width="30" height={20 / colors.length} fill={c} />
    ))}
  </>
);
/** Nordic (offset) cross flag: background + cross, with an optional inner cross. */
const nordic = (bg: string, cross: string, inner?: string) => (
  <>
    <rect width="30" height="20" fill={bg} />
    <rect x="9" y="0" width="4" height="20" fill={cross} />
    <rect x="0" y="8" width="30" height="4" fill={cross} />
    {inner ? (
      <>
        <rect x="10" y="0" width="2" height="20" fill={inner} />
        <rect x="0" y="9" width="30" height="2" fill={inner} />
      </>
    ) : null}
  </>
);

const FLAGS: Record<string, FlagDef> = {
  fr: { label: "France", svg: V(["#002654", "#fff", "#ce1126"]) },
  be: { label: "Belgique", svg: V(["#111", "#fdda24", "#ef3340"]) },
  it: { label: "Italie", svg: V(["#008c45", "#fff", "#cd212a"]) },
  de: { label: "Allemagne", svg: H(["#111", "#dd0000", "#ffce00"]) },
  nl: { label: "Pays-Bas", svg: H(["#ae1c28", "#fff", "#21468b"]) },
  es: {
    label: "Espagne",
    svg: (
      <>
        <rect width="30" height="20" fill="#c60b1e" />
        <rect y="5" width="30" height="10" fill="#ffc400" />
      </>
    ),
  },
  pt: {
    label: "Portugal",
    svg: (
      <>
        <rect width="30" height="20" fill="#da291c" />
        <rect width="12" height="20" fill="#046a38" />
        <circle cx="12" cy="10" r="3" fill="#ffe600" stroke="#fff" strokeWidth="0.6" />
      </>
    ),
  },
  ch: {
    label: "Suisse",
    svg: (
      <>
        <rect width="30" height="20" fill="#d52b1e" />
        <rect x="13" y="5.5" width="4" height="9" fill="#fff" />
        <rect x="10.5" y="8" width="9" height="4" fill="#fff" />
      </>
    ),
  },
  ca: {
    label: "Canada",
    svg: (
      <>
        <rect width="30" height="20" fill="#fff" />
        <rect width="7.5" height="20" fill="#d52b1e" />
        <rect x="22.5" width="7.5" height="20" fill="#d52b1e" />
        <path d="M15 5l1 2 2-.5-1 2 1.5 1-2 .5.3 2L15 13l-1.8 2 .3-2-2-.5 1.5-1-1-2 2 .5 1-2z" fill="#d52b1e" />
      </>
    ),
  },
  gb: {
    label: "Royaume-Uni",
    svg: (
      <>
        <rect width="30" height="20" fill="#012169" />
        <path d="M0 0l30 20M30 0L0 20" stroke="#fff" strokeWidth="4" />
        <path d="M0 0l30 20M30 0L0 20" stroke="#c8102e" strokeWidth="2" />
        <path d="M15 0v20M0 10h30" stroke="#fff" strokeWidth="6" />
        <path d="M15 0v20M0 10h30" stroke="#c8102e" strokeWidth="3.5" />
      </>
    ),
  },
  us: {
    label: "États-Unis",
    svg: (
      <>
        {H(["#b22234", "#fff", "#b22234", "#fff", "#b22234", "#fff", "#b22234"])}
        <rect width="13" height="11" fill="#3c3b6e" />
      </>
    ),
  },
  ma: {
    label: "Maroc",
    svg: (
      <>
        <rect width="30" height="20" fill="#c1272d" />
        <path d="M15 6l1.2 3.7h3.9l-3.1 2.3 1.2 3.7-3.1-2.3-3.1 2.3 1.2-3.7-3.1-2.3h3.9z" fill="none" stroke="#006233" strokeWidth="1" />
      </>
    ),
  },
  dz: {
    label: "Algérie",
    svg: (
      <>
        <rect width="30" height="20" fill="#fff" />
        <rect width="15" height="20" fill="#006233" />
        <circle cx="15" cy="10" r="4" fill="#d21034" />
        <circle cx="16.2" cy="10" r="3.2" fill="#fff" />
        <path d="M17 7.5l.7 2.2 2.3.02-1.85 1.36.68 2.2-1.83-1.34" fill="#d21034" />
      </>
    ),
  },
  tn: {
    label: "Tunisie",
    svg: (
      <>
        <rect width="30" height="20" fill="#e70013" />
        <circle cx="15" cy="10" r="5" fill="#fff" />
        <circle cx="16" cy="10" r="3.4" fill="#e70013" />
        <circle cx="17.2" cy="10" r="2.7" fill="#fff" />
      </>
    ),
  },
  tr: {
    label: "Turquie",
    svg: (
      <>
        <rect width="30" height="20" fill="#e30a17" />
        <circle cx="12" cy="10" r="4" fill="#fff" />
        <circle cx="13.3" cy="10" r="3.2" fill="#e30a17" />
        <path d="M17 8l.6 1.9 2 .02-1.6 1.2.6 1.9-1.6-1.2" fill="#fff" />
      </>
    ),
  },
  br: {
    label: "Brésil",
    svg: (
      <>
        <rect width="30" height="20" fill="#009c3b" />
        <path d="M15 3l11 7-11 7L4 10z" fill="#ffdf00" />
        <circle cx="15" cy="10" r="3.6" fill="#002776" />
      </>
    ),
  },
  in: {
    label: "Inde",
    svg: (
      <>
        {H(["#ff9933", "#fff", "#138808"])}
        <circle cx="15" cy="10" r="2.4" fill="none" stroke="#000080" strokeWidth="0.6" />
      </>
    ),
  },
  jp: {
    label: "Japon",
    svg: (
      <>
        <rect width="30" height="20" fill="#fff" />
        <circle cx="15" cy="10" r="5" fill="#bc002d" />
      </>
    ),
  },
  au: {
    label: "Australie",
    svg: (
      <>
        <rect width="30" height="20" fill="#00247d" />
        <rect width="15" height="10" fill="#012169" />
        <path d="M0 0l15 10M15 0L0 10" stroke="#fff" strokeWidth="2" />
        <path d="M7.5 0v10M0 5h15" stroke="#fff" strokeWidth="3" />
        <path d="M7.5 0v10M0 5h15" stroke="#c8102e" strokeWidth="1.6" />
        <path d="M22 8l.7 2 2 .02-1.6 1.2.6 2-1.7-1.25" fill="#fff" />
      </>
    ),
  },
  sa: {
    label: "Arabie Saoudite",
    svg: (
      <>
        <rect width="30" height="20" fill="#006c35" />
        <rect x="6" y="13" width="18" height="1.4" fill="#fff" />
        <rect x="6" y="9" width="14" height="1.2" fill="#fff" />
      </>
    ),
  },
  lu: { label: "Luxembourg", svg: H(["#ed2939", "#fff", "#00a1de"]) },
  ro: { label: "Roumanie", svg: V(["#002b7f", "#fcd116", "#ce1126"]) },
  ie: { label: "Irlande", svg: V(["#169b62", "#fff", "#ff883e"]) },
  at: { label: "Autriche", svg: H(["#ed2939", "#fff", "#ed2939"]) },
  pl: { label: "Pologne", svg: H(["#fff", "#dc143c"]) },
  dk: { label: "Danemark", svg: nordic("#c8102e", "#fff") },
  se: { label: "Suède", svg: nordic("#006aa7", "#fecc00") },
  no: { label: "Norvège", svg: nordic("#ba0c2f", "#fff", "#00205b") },
  gr: {
    label: "Grèce",
    svg: (
      <>
        <rect width="30" height="20" fill="#fff" />
        {[0, 2, 4, 6, 8].map((i) => (
          <rect key={i} x="0" y={i * (20 / 9)} width="30" height={20 / 9} fill="#0d5eaf" />
        ))}
        <rect width="11.11" height="11.11" fill="#0d5eaf" />
        <rect x="4.2" y="0" width="2.7" height="11.11" fill="#fff" />
        <rect x="0" y="4.2" width="11.11" height="2.7" fill="#fff" />
      </>
    ),
  },
  mx: {
    label: "Mexique",
    svg: (
      <>
        {V(["#006847", "#fff", "#ce1126"])}
        <circle cx="15" cy="10" r="1.9" fill="none" stroke="#8b5a2b" strokeWidth="0.7" />
      </>
    ),
  },
};

/** Map French country names (used in content) to codes. */
const NAME_TO_CODE: Record<string, string> = {
  france: "fr", belgique: "be", suisse: "ch", luxembourg: "lu", italie: "it", allemagne: "de",
  "pays-bas": "nl", espagne: "es", portugal: "pt", "royaume-uni": "gb", "états-unis": "us",
  canada: "ca", maroc: "ma", algérie: "dz", tunisie: "tn", turquie: "tr", brésil: "br",
  inde: "in", japon: "jp", australie: "au", "arabie saoudite": "sa",
  irlande: "ie", autriche: "at", pologne: "pl", danemark: "dk", suède: "se",
  norvège: "no", grèce: "gr", mexique: "mx", roumanie: "ro",
};

export function flagCode(country: string): string | null {
  const key = country.toLowerCase().trim();
  return NAME_TO_CODE[key] ?? (FLAGS[key] ? key : null);
}

export default function Flag({
  country,
  size = 26,
  className,
}: {
  country: string; // code ("fr") or French name ("France")
  size?: number;
  className?: string;
}) {
  const code = flagCode(country);
  if (!code || !FLAGS[code]) return null;
  const def = FLAGS[code];
  return (
    <span
      className={className}
      role="img"
      aria-label={`Drapeau : ${def.label}`}
      style={{
        display: "inline-block",
        width: size,
        height: (size * 2) / 3,
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.16)",
        flexShrink: 0,
        lineHeight: 0,
      }}
    >
      <svg viewBox="0 0 30 20" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        {def.svg}
      </svg>
    </span>
  );
}
