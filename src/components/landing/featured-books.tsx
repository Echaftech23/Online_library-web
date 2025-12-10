"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

// --- Types ---
interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  category: string;
}

interface OpenLibraryWork {
  key: string;
  title: string;
  authors?: { name: string }[];
  cover_id?: number;
  ratings_average?: number;
}

// --- Data Fetching ---
const SUBJECTS = ["adventure", "travel"];

const fetchBooksBySubject = async (subject: string): Promise<Book[]> => {
  try {
    const response = await fetch(
      `https://openlibrary.org/subjects/${subject}.json?limit=4`
    );
    const data = await response.json();

    return data.works.map((work: OpenLibraryWork) => ({
      id: work.key,
      title: work.title,
      author: work.authors?.[0]?.name ?? "Unknown Author",
      cover: work.cover_id
        ? `https://covers.openlibrary.org/b/id/${work.cover_id}-L.jpg`
        : "/images/placeholder-cover.jpg",
      rating: work.ratings_average
        ? parseFloat(work.ratings_average.toFixed(1))
        : parseFloat((Math.random() * (5 - 4) + 4).toFixed(1)),
      category: subject.charAt(0).toUpperCase() + subject.slice(1),
    }));
  } catch (error) {
    console.error(`Failed to fetch ${subject} books:`, error);
    return [];
  }
};

// --- Sub-components ---
interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => (
  <Card className="bg-neutral-900 border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-colors">
    <CardContent className="p-0 relative aspect-2/3">
      <Image
        src={book.cover}
        alt={book.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        unoptimized // Required for external URLs
      />
      <div className="absolute top-3 left-3">
        <Badge className="bg-black/60 hover:bg-black/70 backdrop-blur-md text-white border-none">
          {book.category}
        </Badge>
      </div>
    </CardContent>
    <CardFooter className="flex flex-col items-start p-4">
      <div className="flex items-center gap-1 text-yellow-500 mb-2">
        <Star className="h-4 w-4 fill-current" />
        <span className="text-sm font-medium text-white">{book.rating}</span>
      </div>
      <h3 className="text-lg font-semibold text-white line-clamp-1">
        {book.title}
      </h3>
      <p className="text-sm text-neutral-400 mb-4">{book.author}</p>
      <Button className="w-full bg-neutral-800 hover:bg-neutral-700 text-white">
        Read Now
      </Button>
    </CardFooter>
  </Card>
);

const LoadingState = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {[...Array(4)].map((_, i) => (
      <Card
        key={i}
        className="bg-neutral-900 border-neutral-800 overflow-hidden animate-pulse"
      >
        <CardContent className="p-0 relative aspect-2/3 bg-neutral-800" />
        <CardFooter className="flex flex-col items-start p-4 gap-2">
          <div className="h-4 w-16 bg-neutral-800 rounded" />
          <div className="h-5 w-full bg-neutral-800 rounded" />
          <div className="h-4 w-24 bg-neutral-800 rounded" />
          <div className="h-10 w-full bg-neutral-800 rounded mt-2" />
        </CardFooter>
      </Card>
    ))}
  </div>
);

// --- Main Component ---
export const FeaturedBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      setIsLoading(true);
      const allBooks = await Promise.all(
        SUBJECTS.map((subject) => fetchBooksBySubject(subject))
      );
      // Flatten and take first 4 unique books
      const flatBooks = allBooks.flat().slice(0, 4);
      setBooks(flatBooks);
      setIsLoading(false);
    };

    loadBooks();
  }, []);

  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Trending Now</h2>
            <p className="text-neutral-400">
              Adventure & Travel books from Open Library
            </p>
          </div>
          <Button variant="link" className="text-blue-400 hover:text-blue-300">
            View All
          </Button>
        </div>

        {isLoading ? (
          <LoadingState />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
