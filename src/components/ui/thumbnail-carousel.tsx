"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";
import Image from "next/image";

export interface CarouselItem {
  id: number | string;
  image: string;
  title: string; // Used for alt text
  content: React.ReactNode;
}

interface ThumbnailCarouselProps {
  items: CarouselItem[];
  className?: string;
}

export default function ThumbnailCarousel({
  items,
  className,
}: ThumbnailCarouselProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();
    emblaMainApi.on("select", onSelect);
    emblaMainApi.on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className={cn("relative w-full h-full bg-neutral-950", className)}>
      {/* Main Carousel */}
      <div className="overflow-hidden h-full" ref={emblaMainRef}>
        <div className="flex h-full touch-pan-y">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover select-none pointer-events-none brightness-[0.4]"
                fill
              />
              <div className="absolute inset-0 bg-linear-to-b from-neutral-950/60 via-transparent to-neutral-950/90" />

              {/* Content Overlay - Now inside the slide */}
              <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <div className="container mx-auto px-4 w-4/6 h-4/6 p-12 rounded-2xl bg-black-100/10 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 max-w-[90vw] hidden md:block">
        <div
          className="overflow-hidden rounded-xl border border-white/10 bg-black/20 backdrop-blur-md p-1"
          ref={emblaThumbsRef}
        >
          <div className="flex gap-2">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => onThumbClick(index)}
                className={cn(
                  "relative flex-[0_0_auto] overflow-hidden rounded-lg transition-all duration-300 ease-out h-16 w-12 opacity-50 hover:opacity-100",
                  index === selectedIndex && "w-32 opacity-100"
                )}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
