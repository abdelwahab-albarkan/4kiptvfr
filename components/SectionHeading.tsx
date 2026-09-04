import type { ReactNode } from "react";

export default function SectionHeading({
  eyebrow,
  title,
  lead,
  center,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <div className={center ? "section-head section-head--center" : "section-head"}>
      {eyebrow ? <span className="eyebrow eyebrow--chip">{eyebrow}</span> : null}
      <Tag style={{ marginTop: eyebrow ? "var(--space-4)" : undefined }}>{title}</Tag>
      {lead ? <p className="lead">{lead}</p> : null}
    </div>
  );
}
