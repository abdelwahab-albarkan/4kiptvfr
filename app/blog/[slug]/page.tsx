import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import Icon from "@/components/Icon";
import BlogCard from "@/components/BlogCard";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { buildMetadata, articleSchema, faqSchema } from "@/lib/seo";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article introuvable" };
  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    ogType: "article",
    image: post.heroImage?.src,
  });
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getAllPosts().filter((p) => p.slug !== post.slug).slice(0, 3);

  // Collect any per-article FAQ items for structured data.
  const faqItems = post.body.flatMap((b) => (b.type === "faq" ? b.items : []));

  return (
    <>
      <JsonLd
        data={[
          articleSchema({ title: post.title, excerpt: post.excerpt, date: post.date, path: `/blog/${post.slug}` }),
          ...(faqItems.length > 0 ? [faqSchema(faqItems)] : []),
        ]}
      />

      <PageHeader
        eyebrow={post.category}
        title={post.title}
        lead={post.excerpt}
        breadcrumb={[{ label: "Guides", href: "/blog" }, { label: post.title }]}
      />

      <Section narrow>
        <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "var(--space-6)" }}>
          {formatDate(post.date)} · {post.readingMinutes} min de lecture
        </p>
        {post.heroImage && (
          <Image
            src={post.heroImage.src}
            alt={post.heroImage.alt}
            width={820}
            height={460}
            priority
            className="rounded-media"
            style={{ width: "100%", height: "auto", objectFit: "cover", marginBottom: "var(--space-8)" }}
            sizes="(max-width: 820px) 100vw, 820px"
          />
        )}
        <article className="prose">
          {post.body.map((block, i) => {
            if (block.type === "h2") return <h2 key={i}>{block.text}</h2>;
            if (block.type === "h3") return <h3 key={i}>{block.text}</h3>;
            if (block.type === "ul")
              return (
                <ul key={i}>
                  {block.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            if (block.type === "ol")
              return (
                <ol key={i}>
                  {block.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ol>
              );
            if (block.type === "table")
              return (
                <div key={i} className="table-scroll">
                  <table className="dtable">
                    <thead>
                      <tr>
                        {block.headers.map((h) => (
                          <th key={h}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((cell, c) => (
                            <td key={c}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            if (block.type === "faq")
              return (
                <div key={i} style={{ marginBlock: "var(--space-6)" }}>
                  <FAQ items={block.items} />
                </div>
              );
            if (block.type === "callout")
              return (
                <aside key={i} className="callout">
                  <p className="callout__title">
                    <Icon name="check" size={20} /> {block.title}
                  </p>
                  <ul className="callout__list">
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </aside>
              );
            return <p key={i}>{block.text}</p>;
          })}
        </article>
        {post.links && post.links.length > 0 && (
          <div className="card" style={{ marginTop: "var(--space-8)" }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "var(--space-4)" }}>Pour aller plus loin</h2>
            <ul style={{ display: "grid", gap: "10px" }}>
              {post.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="link">{l.label} →</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div style={{ marginTop: "var(--space-8)" }}>
          <Link href="/blog" className="link">← Retour aux guides</Link>
        </div>
      </Section>

      {related.length > 0 && (
        <Section variant="secondary">
          <h2 style={{ marginBottom: "var(--space-6)" }}>À lire aussi</h2>
          <div className="grid grid--3">
            {related.map((p) => (
              <BlogCard key={p.slug} post={p} />
            ))}
          </div>
        </Section>
      )}

      <CTA />
    </>
  );
}
