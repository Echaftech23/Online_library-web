import { Hero } from "@/components/landing/hero";
import { FeaturedBooks } from "@/components/landing/featured-books";
import { Features } from "@/components/landing/features";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedBooks />
      <Features />
    </main>
  );
}
