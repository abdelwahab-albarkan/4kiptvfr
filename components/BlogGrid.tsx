import type { Post } from "@/lib/blog";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return <p className="lead">De nouveaux articles arrivent très bientôt.</p>;
  }
  return (
    <div className="grid grid--3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
