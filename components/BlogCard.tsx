import Link from "next/link";
import type { Post } from "@/lib/blog";
import { formatDate } from "@/lib/blog";
import Icon from "./Icon";

export default function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="card card--hover" style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "var(--space-4)" }}>
        <span className="badge">{post.category}</span>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{post.readingMinutes} min de lecture</span>
      </div>
      <h3 style={{ fontSize: "1.2rem" }}>{post.title}</h3>
      <p style={{ marginTop: "var(--space-3)", fontSize: "0.95rem", flex: 1 }}>{post.excerpt}</p>
      <div style={{ marginTop: "var(--space-5)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{formatDate(post.date)}</span>
        <span style={{ color: "var(--accent)", fontWeight: 650, display: "inline-flex", alignItems: "center", gap: 5 }}>Lire <Icon name="arrow-right" size={17} /></span>
      </div>
    </Link>
  );
}
