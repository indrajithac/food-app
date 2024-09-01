import Link from "next/link";

export default function BlogPostPage({ params }) {
  return (
    <main>
      <h1>Blog Post Page - {params.slugId}</h1>
    </main>
  );
}
