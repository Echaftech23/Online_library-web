export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  rating: number;
  category: string;
}

export interface OpenLibraryWork {
  key: string;
  title: string;
  authors?: { name: string }[];
  cover_id?: number;
  ratings_average?: number;
}
