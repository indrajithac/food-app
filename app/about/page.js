import Link from "next/link";
import Header from "@/components/header/header";
export default function AboutPage() {
  return (
    <div>
      <Header />
      <h1>About Page</h1>
      <Link href="/">Home Page</Link>
    </div>
  );
}
