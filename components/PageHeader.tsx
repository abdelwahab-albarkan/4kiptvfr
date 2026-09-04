import type { ReactNode } from "react";
import Container from "./Container";
import Button from "./Button";
import Breadcrumbs from "./Breadcrumbs";

type Cta = { label: string; href: string };

export default function PageHeader({
  eyebrow,
  title,
  lead,
  breadcrumb,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  breadcrumb: { label: string; href?: string }[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
}) {
  return (
    <section
      style={{
        background:
          "radial-gradient(55% 60% at 92% 0%, var(--accent-softer), transparent 70%), var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Container>
        <div style={{ paddingBlock: "clamp(1.75rem, 1rem + 3vw, 3rem)" }} className="animate-up">
          <Breadcrumbs items={breadcrumb} />
          <div style={{ maxWidth: 760, marginTop: "var(--space-5)" }}>
            {eyebrow ? <span className="eyebrow eyebrow--chip">{eyebrow}</span> : null}
            <h1 style={{ marginTop: eyebrow ? "var(--space-4)" : 0 }}>{title}</h1>
            {lead ? (
              <p className="lead" style={{ marginTop: "var(--space-4)" }}>
                {lead}
              </p>
            ) : null}
            {(primaryCta || secondaryCta) && (
              <div style={{ marginTop: "var(--space-6)", display: "flex", flexWrap: "wrap", gap: "var(--space-3)" }}>
                {primaryCta && (
                  <Button href={primaryCta.href} size="lg">
                    {primaryCta.label}
                  </Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} size="lg" variant="secondary">
                    {secondaryCta.label}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
