"use client";

import { BookSection } from "@/components/ui/book-section";

/**
 * Featured Books page with Popular and Pre Order sections
 * Uses the BookSection component for DRY pattern
 */
export const FeaturedBooks = () => {
  return (
    <section className="pb-12">
      <div className="container mx-auto px-4">
        {/* Popular Section */}
        <BookSection
          title="Popular"
          subject="adventure"
          limit={6}
        />

        {/* Pre Order Section */}
        <BookSection
          title="Pre Order"
          subject="fantasy"
          limit={6}
          className="mt-8"
        />
      </div>
    </section>
  );
};
