import Container from "@/components/Container";
import Button from "@/components/Button";
import { PRIMARY_CTA } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="section" style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <Container>
        <div style={{ textAlign: "center", maxWidth: 520, marginInline: "auto" }}>
          <span className="eyebrow eyebrow--chip">Erreur 404</span>
          <h1 style={{ marginTop: "var(--space-4)" }}>
            Cette page est <span className="accent">introuvable</span>
          </h1>
          <p className="lead" style={{ marginTop: "var(--space-4)", marginInline: "auto" }}>
            La page que vous cherchez n'existe pas ou a été déplacée.
          </p>
          <div style={{ marginTop: "var(--space-6)", display: "flex", gap: "var(--space-3)", justifyContent: "center", flexWrap: "wrap" }}>
            <Button href="/" size="lg">Retour à l'accueil</Button>
            <Button href={PRIMARY_CTA.href} size="lg" variant="secondary">{PRIMARY_CTA.label}</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
