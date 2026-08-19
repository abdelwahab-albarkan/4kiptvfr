// TODO: Blog article dynamic route — content to be implemented
interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <main>{/* Blog article: {slug} — placeholder */}</main>;
}
