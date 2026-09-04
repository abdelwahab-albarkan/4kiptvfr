import Link from "next/link";
import Icon from "./Icon";

/**
 * One versatile linked card used for device / application / sport / topic
 * listings. Hierarchy comes from a kicker + title + description, not icons.
 */
export default function LinkCard({
  href,
  kicker,
  title,
  description,
  meta,
}: {
  href: string;
  kicker?: string;
  title: string;
  description?: string;
  meta?: string;
}) {
  return (
    <Link href={href} className="card card--hover" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {kicker ? <span className="badge">{kicker}</span> : null}
      <h3 style={{ marginTop: kicker ? "var(--space-4)" : 0, fontSize: "1.2rem" }}>{title}</h3>
      {description ? (
        <p style={{ marginTop: "var(--space-3)", fontSize: "0.95rem", flex: 1 }}>{description}</p>
      ) : null}
      <span style={{ marginTop: "var(--space-5)", display: "inline-flex", alignItems: "center", justifyContent: "space-between", color: "var(--accent)", fontWeight: 650, fontSize: "0.95rem" }}>
        {meta ?? "En savoir plus"}
        <Icon name="arrow-right" size={18} />
      </span>
    </Link>
  );
}
