/**
 * Accessible 5-star rating. Filled and empty stars differ in SHAPE (solid vs
 * outline), not just colour, so the value is legible without relying on colour.
 * A single aria-label conveys the numeric value to assistive tech.
 */
export default function StarRating({
  rating,
  max = 5,
  size = 17,
}: {
  rating: number;
  max?: number;
  size?: number;
}) {
  const filledCount = Math.round(rating);
  const label = `${rating.toString().replace(".", ",")} sur ${max} étoiles`;
  const STAR = "M12 2.6l2.6 5.68 6.2.6-4.66 4.13 1.35 6.09L12 15.9 6.5 19.1l1.35-6.09L3.2 8.88l6.2-.6L12 2.6z";

  return (
    <span role="img" aria-label={label} style={{ display: "inline-flex", gap: 3, lineHeight: 0 }}>
      {Array.from({ length: max }).map((_, i) => {
        const filled = i < filledCount;
        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
            fill={filled ? "var(--warning)" : "none"}
            stroke={filled ? "none" : "var(--border-strong)"}
            strokeWidth={1.6}
            strokeLinejoin="round"
          >
            <path d={STAR} />
          </svg>
        );
      })}
    </span>
  );
}
