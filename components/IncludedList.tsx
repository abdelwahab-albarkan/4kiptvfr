import { PLAN_FEATURES } from "@/lib/site";

export default function IncludedList({
  items = PLAN_FEATURES,
  columns = 2,
}: {
  items?: string[];
  columns?: 1 | 2;
}) {
  return (
    <ul
      style={{
        display: "grid",
        gap: "12px",
        gridTemplateColumns: columns === 2 ? "repeat(auto-fit, minmax(260px, 1fr))" : "1fr",
      }}
    >
      {items.map((item) => (
        <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="12" cy="12" r="10" fill="var(--accent-soft)" />
            <path d="M8 12.5l2.5 2.5L16 9" stroke="var(--accent-hover)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span style={{ color: "var(--text-secondary)", fontSize: "0.975rem" }}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
