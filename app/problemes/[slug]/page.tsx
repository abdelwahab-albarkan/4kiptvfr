import Link from "next/link";
import { notFound } from "next/navigation";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Steps from "@/components/Steps";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, howToSchema } from "@/lib/seo";
import { SECONDARY_CTA } from "@/lib/site";
import { PROBLEMS, PROBLEM_SLUGS, PROBLEM_LIST } from "@/lib/problemes";

export function generateStaticParams() {
  return PROBLEM_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PROBLEMS[slug];
  if (!p) return {};
  return buildMetadata({ title: p.metaTitle, description: p.metaDescription, path: `/problemes/${p.slug}`, keywords: p.keywords });
}

function List({ items }: { items: string[] }) {
  return (
    <ul style={{ display: "grid", gap: "10px" }}>
      {items.map((it) => (
        <li key={it} style={{ display: "flex", gap: "10px", color: "var(--text-secondary)" }}>
          <span aria-hidden="true" style={{ color: "var(--accent)", fontWeight: 700 }}>•</span>
          {it}
        </li>
      ))}
    </ul>
  );
}

export default async function ProblemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = PROBLEMS[slug];
  if (!p) notFound();

  const others = PROBLEM_LIST.filter((x) => x.slug !== p.slug);

  return (
    <>
      <JsonLd data={howToSchema(`Résoudre : ${p.name}`, p.solutions)} />
      <PageHeader
        eyebrow={p.eyebrow}
        title={p.h1}
        lead={p.lead}
        breadcrumb={[{ label: "Dépannage", href: "/problemes" }, { label: p.name }]}
        secondaryCta={SECONDARY_CTA}
      />

      <Section>
        <div className="home-split">
          <div className="card">
            <span className="badge">Symptômes</span>
            <div style={{ marginTop: "var(--space-4)" }}>
              <List items={p.symptoms} />
            </div>
          </div>
          <div className="card">
            <span className="badge badge--neutral">Causes possibles</span>
            <div style={{ marginTop: "var(--space-4)" }}>
              <List items={p.causes} />
            </div>
          </div>
        </div>
      </Section>

      <Section variant="secondary">
        <SectionHeading eyebrow="Solutions" title="Résolution pas à pas" />
        <Steps items={p.solutions} />
      </Section>

      <Section narrow>
        <div className="prose">
          <h2>Quand contacter le support</h2>
          <p>{p.support}</p>
          <p>
            Voir aussi le <Link href="/problemes" className="link">guide de dépannage complet</Link> ou{" "}
            <Link href="/contact" className="link">contactez-nous</Link>.
          </p>
        </div>
      </Section>

      <Section variant="soft" tight>
        <SectionHeading eyebrow="Autres problèmes" title="Diagnostics liés" />
        <div className="grid grid--3">
          {others.map((x) => (
            <Link key={x.slug} href={`/problemes/${x.slug}`} className="card card--hover" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontWeight: 650, color: "var(--text)" }}>{x.name}</span>
              <span aria-hidden="true" style={{ color: "var(--accent)", fontWeight: 700 }}>→</span>
            </Link>
          ))}
        </div>
      </Section>

      <CTA
        title="Toujours bloqué ?"
        lead="Notre support français vous aide à résoudre votre problème rapidement, par e-mail ou WhatsApp."
        primary={SECONDARY_CTA}
        secondary={{ label: "Voir les offres", href: "/abonnement" }}
      />
    </>
  );
}
