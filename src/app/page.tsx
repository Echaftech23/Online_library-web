import { Hero } from "@/components/landing/hero";
import { FeaturedBooks } from "@/components/landing/featured-books";
import { Features } from "@/components/landing/features";
import { BooksFilter } from "@/components/landing/books-filter";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <FeaturedBooks />
      <BooksFilter />
      <Testimonials />
    </main>
  );
}
