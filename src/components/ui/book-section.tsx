"use client";

import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/ui/book-card";
import { BookCardSkeletonGrid } from "@/components/ui/book-card-skeleton";
import { useBooks } from "@/hooks/useBooks";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookSectionProps {
  title: string;
  subject: string;
  limit?: number;
  className?: string;
}

/**
 * Reusable section component for displaying books (Popular, Pre Order, etc.)
 */
export const BookSection = ({
  title,
  subject,
  limit = 6,
  className,
}: BookSectionProps) => {
  const { books, isLoading } = useBooks({ subject, limit });

  return (
    <div className={cn("py-12", className)}>
      {/* Section Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
          <div className="h-1 w-12 rounded-full bg-primary" />
        </div>
        <Button
          variant="link"
          className="text-primary hover:text-primary/80 gap-1"
        >
          Show more
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Books Grid */}
      {isLoading ? (
        <BookCardSkeletonGrid count={limit} />
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};
