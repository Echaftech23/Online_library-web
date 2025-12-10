import { useState, useEffect, useCallback } from "react";
import { Book } from "@/types/book";
import { fetchBooksBySubject } from "@/api/books";

interface UseBooksOptions {
  subject: string;
  limit?: number;
}

interface UseBooksReturn {
  books: Book[];
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

/**
 * Custom hook for fetching books by subject
 */
export const useBooks = ({
  subject,
  limit = 7,
}: UseBooksOptions): UseBooksReturn => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadBooks = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const fetchedBooks = await fetchBooksBySubject(subject, limit);
      setBooks(fetchedBooks);
    } catch (err) {
      setError(err instanceof Error ? err : new Error("Failed to fetch books"));
    } finally {
      setIsLoading(false);
    }
  }, [subject, limit]);

  useEffect(() => {
    loadBooks();
  }, [loadBooks]);

  return {
    books,
    isLoading,
    error,
    refetch: loadBooks,
  };
};
