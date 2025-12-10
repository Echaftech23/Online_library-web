"use client";

import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    cover:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
    rating: 4.8,
    category: "Fiction",
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    cover:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    category: "Self Help",
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    cover:
      "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=800",
    rating: 4.7,
    category: "Sci-Fi",
  },
  {
    id: 4,
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover:
      "https://images.unsplash.com/photo-1614544048536-0d28caf77f41?auto=format&fit=crop&q=80&w=800",
    rating: 4.9,
    category: "Sci-Fi",
  },
];

export const FeaturedBooks = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Trending Now</h2>
            <p className="text-neutral-400">Most popular books this week</p>
          </div>
          <Button variant="link" className="text-blue-400 hover:text-blue-300">
            View All
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <Card
              key={book.id}
              className="bg-neutral-900 border-neutral-800 overflow-hidden group hover:border-neutral-700 transition-colors"
            >
              <CardContent className="p-0 relative aspect-2/3">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
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
                  <span className="text-sm font-medium text-white">
                    {book.rating}
                  </span>
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
          ))}
        </div>
      </div>
    </section>
  );
};
