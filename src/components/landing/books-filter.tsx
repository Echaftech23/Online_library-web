"use client";

import { useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookCard } from "@/components/ui/book-card";
import { BookCardSkeletonGrid } from "@/components/ui/book-card-skeleton";
import { useBooks } from "@/hooks/useBooks";
import { cn } from "@/lib/utils";

// --- Types ---
interface Category {
  id: string;
  label: string;
  subject: string;
}

// --- Data ---
const categories: Category[] = [
    { id: "wilderness", label: "Adventure Stories", subject: "adventure_stories" },
    { id: "forest", label: "Forest & Nature", subject: "forest" },
    { id: "travel", label: "Travel & Exploration", subject: "travel" },
    { id: "survival", label: "Survival & Skills", subject: "survival" },
    { id: "hiking", label: "Hiking & Trekking", subject: "hiking" },
    { id: "camping", label: "Camping & Backpacking", subject: "camping" },
    { id: "nature", label: "Nature & Wildlife", subject: "nature" },
    { id: "geography", label: "Adventure Travel", subject: "adventure_travel" },
    { id: "outdoor", label: "Outdoor Recreation", subject: "outdoor_sports" },
];

// --- Sub-components ---
interface CategoryListProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (category: Category) => void;
}

const CategoryList = ({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryListProps) => (
  <ul className="space-y-1">
    {categories.map((category) => (
      <li key={category.id}>
        <button
          onClick={() => onCategoryChange(category)}
          className={cn(
            "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors",
            activeCategory === category.id
              ? "bg-primary/10 text-primary font-medium"
              : "text-muted-foreground hover:text-foreground hover:bg-muted"
          )}
        >
          {category.label}
        </button>
      </li>
    ))}
  </ul>
);

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => (
  <div className="relative flex-1">
    <SlidersHorizontal className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    <Input
      placeholder="Search book..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="pl-10 pr-10 bg-card border-border text-foreground h-11"
    />
    <Button
      size="icon"
      variant="ghost"
      className="absolute right-1 top-1/2 -translate-y-1/2 h-9 w-9 text-primary hover:text-primary/80"
    >
      <Search className="h-4 w-4" />
    </Button>
  </div>
);

// --- Main Component ---
export const BooksFilter = () => {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const [searchQuery, setSearchQuery] = useState("");
  const { books, isLoading } = useBooks({
    subject: activeCategory.subject,
    limit: 12,
  });

  // Filter books by search query (client-side)
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              All Products
            </h2>
            <div className="h-1 w-12 rounded-full bg-primary mb-6"/>
            <CategoryList
              categories={categories}
              activeCategory={activeCategory.id}
              onCategoryChange={setActiveCategory}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Search Header */}
            <div className="flex items-center gap-4 mb-8">
              <SearchBar value={searchQuery} onChange={setSearchQuery} />
            </div>

            {/* Books Grid */}
            {isLoading ? (
              <BookCardSkeletonGrid count={12} className="lg:grid-cols-4" />
            ) : filteredBooks.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground">
                  No books found matching &quot;{searchQuery}&quot;
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
