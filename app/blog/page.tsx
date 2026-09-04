import Section from "@/components/Section";
import PageHeader from "@/components/PageHeader";
import BlogGrid from "@/components/BlogGrid";
import CTA from "@/components/CTA";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Guides & conseils IPTV",
  description:
    "Le blog 4kiptvfr.com : guides d'installation, conseils pour bien choisir son IPTV, tutoriels par appareil et actualités du streaming en France.",
  path: "/blog",
  keywords: ["iptv guide", "iptv tutoriel", "iptv france blog", "guide iptv"],
});

export default function BlogPage() {
  const posts = getAllPosts();
  return (
    <>
      <PageHeader
        eyebrow="Guides"
        title={<>Guides & conseils <span className="accent">IPTV</span></>}
        lead="Tout pour bien choisir, installer et profiter de votre IPTV : nos guides pratiques et nos conseils, mis à jour régulièrement."
        breadcrumb={[{ label: "Guides" }]}
      />
      <Section>
        <BlogGrid posts={posts} />
      </Section>
      <CTA />
    </>
  );
}
