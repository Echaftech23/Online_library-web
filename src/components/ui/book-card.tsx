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
      "bg-card border-border overflow-hidden group hover:border-primary/30 hover:shadow-lg transition-all duration-300",
      className
    )}
  >
    <CardContent className="relative aspect-2/3">
      <Image
        src={book.cover}
        alt={book.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        unoptimized
      />
      <div className="absolute top-3 left-3">
        <Badge className="bg-background/80 hover:bg-background/90 backdrop-blur-md text-foreground border-none">
          {book.category}
        </Badge>
      </div>
    </CardContent>
    <CardFooter className="flex flex-col items-start justify-between h-full p-4">
      <div className="flex items-center gap-1 text-primary mb-2">
        <Star className="h-4 w-4 fill-current" />
        <span className="text-sm font-medium text-foreground">
          {book.rating}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-card-foreground line-clamp-1">
        {book.title}
      </h3>
      <p className="text-sm text-muted-foreground mb-4">{book.author}</p>
      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
        Read Now
      </Button>
    </CardFooter>
  </Card>
);
