import Link from "next/link";
import { SITE } from "@/lib/site";

/**
 * 4KIPTVFR brand logo — "Modern streaming / TV" mark.
 * A rounded TV screen (brand-red gradient) with a white play triangle, retro
 * antenna dots and a subtle swoosh, paired with the "4K IPTVFR" wordmark
 * (4K in the red accent, IPTVFR in the current text color).
 *
 * - `tone="light"` forces white wordmark text (for the always-dark footer).
 * - `mono` renders a single-colour version (icon + text in currentColor) for
 *   monochrome contexts. The coloured icon otherwise works on dark and light.
 */
export default function Logo({
  className,
  tone = "dark",
  mono = false,
  size = 40,
}: {
  className?: string;
  tone?: "dark" | "light";
  mono?: boolean;
  size?: number;
}) {
  // Static id is safe: the gradient uses objectBoundingBox units, so it scales
  // to each instance independently even if the logo appears more than once.
  const gid = "fk-tv-grad";
  const textColor = tone === "light" ? "#ffffff" : "var(--text)";

  return (
    <Link
      href="/"
      className={className}
      aria-label={`${SITE.name} — accueil`}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "11px",
        textDecoration: "none",
        color: mono ? "currentColor" : undefined,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
        style={{ flex: "0 0 auto", display: "block" }}
      >
        {!mono && (
          <defs>
            <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ff4a57" />
              <stop offset="0.55" stopColor="#e3262e" />
              <stop offset="1" stopColor="#b3141b" />
            </linearGradient>
          </defs>
        )}

        {mono ? (
          <>
            {/* antenna */}
            <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <line x1="19" y1="15" x2="14.5" y2="6" />
              <line x1="29" y1="15" x2="33.5" y2="6" />
            </g>
            <circle cx="14" cy="5.2" r="2.5" fill="currentColor" />
            <circle cx="34" cy="5.2" r="2.5" fill="currentColor" />
            {/* screen outline + play */}
            <rect x="7" y="14" width="34" height="25" rx="6.5" fill="none" stroke="currentColor" strokeWidth="2.4" />
            <path d="M20.7 21 L20.7 32 L31 26.5 Z" fill="currentColor" />
            <path d="M6 41.6 C 15 46.4, 33 46.4, 42 41.6 C 33 44.4, 15 44.4, 6 41.6 Z" fill="currentColor" />
          </>
        ) : (
          <>
            {/* antenna */}
            <g stroke="#e3262e" strokeWidth="2.4" strokeLinecap="round">
              <line x1="19" y1="15" x2="14.5" y2="6" />
              <line x1="29" y1="15" x2="33.5" y2="6" />
            </g>
            <circle cx="14" cy="5.2" r="2.5" fill="#e3262e" />
            <circle cx="34" cy="5.2" r="2.5" fill="#e3262e" />
            {/* screen */}
            <rect x="7" y="14" width="34" height="25" rx="6.5" fill={`url(#${gid})`} />
            {/* top gloss */}
            <path
              d="M13.5 14 H34.5 A6.5 6.5 0 0 1 41 20.5 V21 H7 V20.5 A6.5 6.5 0 0 1 13.5 14 Z"
              fill="#ffffff"
              opacity="0.16"
            />
            {/* play */}
            <path d="M20.7 21 L20.7 32 L31 26.5 Z" fill="#ffffff" />
            {/* swoosh */}
            <path d="M6 41.6 C 15 46.4, 33 46.4, 42 41.6 C 33 44.4, 15 44.4, 6 41.6 Z" fill={`url(#${gid})`} />
          </>
        )}
      </svg>

      <span
        style={{
          fontWeight: 850,
          fontSize: "1.35rem",
          letterSpacing: "-0.02em",
          lineHeight: 1,
          whiteSpace: "nowrap",
          color: mono ? "currentColor" : textColor,
        }}
      >
        <span style={{ color: mono ? "currentColor" : "var(--accent)" }}>4K</span>IPTVFR
      </span>
    </Link>
  );
}
