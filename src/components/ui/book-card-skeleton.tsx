import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface BookCardSkeletonProps {
  className?: string;
}

/**
 * Skeleton loader for BookCard - uniform loading state across the website
 */
export const BookCardSkeleton = ({ className }: BookCardSkeletonProps) => (
  <Card
    className={cn(
      "bg-card border-border overflow-hidden animate-pulse",
      className
    )}
  >
    <CardContent className="p-0 relative aspect-2/3 bg-muted" />
    <CardFooter className="flex flex-col items-start p-4 gap-2">
      <div className="h-4 w-16 bg-muted rounded" />
      <div className="h-5 w-full bg-muted rounded" />
      <div className="h-4 w-24 bg-muted rounded" />
      <div className="h-10 w-full bg-muted rounded mt-2" />
    </CardFooter>
  </Card>
);

interface BookCardSkeletonGridProps {
  count?: number;
  className?: string;
}

/**
 * Grid of skeleton loaders for loading states
 */
export const BookCardSkeletonGrid = ({
  count = 6,
  className,
}: BookCardSkeletonGridProps) => (
  <div
    className={cn(
      "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4",
      className
    )}
  >
    {[...Array(count)].map((_, i) => (
      <BookCardSkeleton key={i} />
    ))}
  </div>
);
