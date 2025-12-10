import { Hero } from "@/components/landing/hero";
import { FeaturedBooks } from "@/components/landing/featured-books";
import { Features } from "@/components/landing/features";
import { BooksFilter } from "@/components/landing/books-filter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturedBooks />
      <BooksFilter />
    </main>
  );
}
