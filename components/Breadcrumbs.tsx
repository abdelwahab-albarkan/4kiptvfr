import Link from "next/link";
import JsonLd from "./JsonLd";
import { breadcrumbSchema } from "@/lib/seo";

export default function Breadcrumbs({
  items,
}: {
  /** Trail excluding the "Accueil" root, which is prepended automatically. */
  items: { label: string; href?: string }[];
}) {
  const trail = [{ label: "Accueil", href: "/" }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(trail)} />
      <nav aria-label="Fil d'Ariane" style={{ fontSize: "0.875rem" }}>
        <ol style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", color: "var(--text-muted)" }}>
          {trail.map((item, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={item.label} style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
                {item.href && !last ? (
                  <Link href={item.href} style={{ color: "var(--text-secondary)" }}>
                    {item.label}
                  </Link>
                ) : (
                  <span style={{ color: last ? "var(--text)" : undefined, fontWeight: last ? 600 : undefined }} aria-current={last ? "page" : undefined}>
                    {item.label}
                  </span>
                )}
                {!last && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
