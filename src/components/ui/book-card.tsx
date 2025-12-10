import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Book } from "@/types/book";
import { cn } from "@/lib/utils";

interface BookCardProps {
  book: Book;
  className?: string;
}

/**
 * Presentational component for displaying a single book card
 */
export const BookCard = ({ book, className }: BookCardProps) => (
  <Card
    className={cn(
      "bg-neutral-900 border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-colors",
      className
    )}
  >
    <CardContent className="p-0 relative aspect-2/3">
      <Image
        src={book.cover}
        alt={book.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        unoptimized
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
