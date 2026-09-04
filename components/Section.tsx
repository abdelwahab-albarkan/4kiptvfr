import type { ReactNode } from "react";
import Container from "./Container";

/** Convenience wrapper: <section> + Container, with background + spacing variants. */
export default function Section({
  children,
  variant,
  tight,
  narrow,
  id,
}: {
  children: ReactNode;
  variant?: "secondary" | "soft";
  tight?: boolean;
  narrow?: boolean;
  id?: string;
}) {
  const cls = [
    "section",
    tight ? "section--tight" : "",
    variant === "secondary" ? "section--secondary" : "",
    variant === "soft" ? "section--soft" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={cls} id={id}>
      <Container narrow={narrow}>{children}</Container>
    </section>
  );
}
