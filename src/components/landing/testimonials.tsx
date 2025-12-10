"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// ============================================================================
// Types
// ============================================================================
interface Testimonial {
  id: number;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
}

// ============================================================================
// Data
// ============================================================================
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Book Club Organizer",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "This digital library has transformed how our book club operates. We can easily discover new titles, share recommendations, and track our reading progress together. The interface is intuitive and the selection is outstanding!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Literature Student",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "As a literature student, having access to such a vast collection of books has been invaluable. The search functionality and categorization make research so much easier. I've discovered classics I never knew existed!",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Avid Reader",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "I've been using this platform for over a year now, and it's become my go-to for discovering new reads. The personalized recommendations are spot-on, and the borrowing process is seamless. Highly recommend!",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "History Professor",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "The historical collection available here is remarkable. My students benefit greatly from the easy access to primary sources and scholarly works. This platform has elevated my teaching resources significantly.",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Parent & Educator",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Finding quality books for my children has never been easier. The kids' section is well-curated with age-appropriate content. It's wonderful to see my children develop a love for reading through this platform.",
  },
];

// ============================================================================
// Sub-components
// ============================================================================

// Star Rating Component
function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "h-4 w-4",
            i < rating ? "fill-primary text-primary" : "fill-muted text-muted"
          )}
        />
      ))}
    </div>
  );
}

// Single Testimonial Card
function TestimonialCard({
  testimonial,
  isActive,
}: {
  testimonial: Testimonial;
  isActive: boolean;
}) {
  return (
    <div
      className={cn(
        "relative rounded-2xl p-8 transition-all duration-500",
        isActive
          ? "bg-card border border-border shadow-lg scale-100 opacity-100"
          : "bg-muted/50 scale-95 opacity-60"
      )}
    >
      {/* Quote Icon */}
      <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/20" />

      {/* Content */}
      <div className="space-y-6">
        {/* Rating */}
        <StarRating rating={testimonial.rating} />

        {/* Testimonial Text */}
        <p className="text-foreground/80 leading-relaxed text-lg">
          &ldquo;{testimonial.text}&rdquo;
        </p>

        {/* Author Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-border">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-primary/20">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">
              {testimonial.name}
            </h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Navigation Dots
function NavigationDots({
  total,
  current,
  onSelect,
}: {
  total: number;
  current: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          className={cn(
            "h-2 rounded-full transition-all duration-300",
            i === current
              ? "w-8 bg-primary"
              : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
          )}
          aria-label={`Go to testimonial ${i + 1}`}
        />
      ))}
    </div>
  );
}

// Navigation Arrows
function NavigationArrows({
  onPrev,
  onNext,
}: {
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex gap-3">
      <Button
        variant="outline"
        size="icon"
        onClick={onPrev}
        className="h-12 w-12 rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        className="h-12 w-12 rounded-full border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}

// Section Header
function SectionHeader() {
  return (
    <div className="text-center space-y-4 mb-12">
      <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
        Testimonials
      </span>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        What Our Readers Say
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Join thousands of satisfied readers who have discovered the joy of our
        digital library. Here&apos;s what they have to say about their
        experience.
      </p>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================
export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Get visible testimonials (current and adjacent)
  const getVisibleTestimonials = () => {
    const prevIndex =
      activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1;
    const nextIndex =
      activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
    return [
      { ...testimonials[prevIndex], position: "prev" },
      { ...testimonials[activeIndex], position: "current" },
      { ...testimonials[nextIndex], position: "next" },
    ];
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <SectionHeader />

        {/* Desktop Carousel - 3 cards */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-3 gap-6 items-center">
            {getVisibleTestimonials().map((testimonial) => (
              <TestimonialCard
                key={`${testimonial.id}-${testimonial.position}`}
                testimonial={testimonial}
                isActive={testimonial.position === "current"}
              />
            ))}
          </div>
        </div>

        {/* Mobile/Tablet - Single card */}
        <div className="lg:hidden">
          <TestimonialCard
            testimonial={testimonials[activeIndex]}
            isActive={true}
          />
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center mt-10">
          <NavigationArrows onPrev={handlePrev} onNext={handleNext} />
          <NavigationDots
            total={testimonials.length}
            current={activeIndex}
            onSelect={setActiveIndex}
          />
        </div>
      </div>
    </section>
  );
}
