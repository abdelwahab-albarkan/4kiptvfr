import { STEPS } from "@/lib/site";

export default function Steps({
  items = STEPS,
}: {
  items?: { title: string; description: string }[];
}) {
  return (
    <div className="grid grid--3">
      {items.map((s, i) => (
        <div key={s.title}>
          <div
            aria-hidden="true"
            style={{
              width: 48,
              height: 48,
              borderRadius: "var(--radius-md)",
              display: "grid",
              placeItems: "center",
              background: "var(--accent-soft)",
              color: "var(--accent-hover)",
              fontWeight: 850,
              fontSize: "1.2rem",
            }}
          >
            {i + 1}
          </div>
          <h3 style={{ marginTop: "var(--space-4)", fontSize: "1.2rem" }}>{s.title}</h3>
          <p style={{ marginTop: "var(--space-2)", fontSize: "0.975rem" }}>{s.description}</p>
        </div>
      ))}
    </div>
  );
}
