import Link from "next/link";

export default function BlogPage() {
  return (
    <main>
      <h1>Blog Page</h1>
      <Link href="/blog/post-1">Blog 1</Link>
      <Link href="/blog/post-2">Blog 2</Link>
    </main>
  );
}
