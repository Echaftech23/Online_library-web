import { Book, OpenLibraryWork } from "@/types/book";

const BASE_URL = "https://openlibrary.org";
const COVER_URL = "https://covers.openlibrary.org/b/id";

/**
 * Fetches books by subject from Open Library API
 */
export const fetchBooksBySubject = async (
  subject: string,
  limit: number = 7
): Promise<Book[]> => {
  try {
    const response = await fetch(
      `${BASE_URL}/subjects/${subject}.json?limit=${limit}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    return data.works.map((work: OpenLibraryWork) => ({
      id: work.key,
      title: work.title,
      author: work.authors?.[0]?.name ?? "Unknown Author",
      cover: work.cover_id
        ? `${COVER_URL}/${work.cover_id}-L.jpg`
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

/**
 * Fetches books for multiple subjects
 */
export const fetchBooksBySubjects = async (
  subjects: string[],
  limitPerSubject: number = 7
): Promise<Book[]> => {
  const allBooks = await Promise.all(
    subjects.map((subject) => fetchBooksBySubject(subject, limitPerSubject))
  );
  return allBooks.flat();
};
