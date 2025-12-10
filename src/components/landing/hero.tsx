"use client";

import ThumbnailCarousel, {
  CarouselItem,
} from "@/components/ui/thumbnail-carousel";
import { HeroContent } from "@/components/landing/hero-content";
import { Card } from "../ui/card";
import Image from "next/image";

const heroItems = [
  {
    id: 1,
    image: "/images/hero-1.jpg",
    title: "Discover New Worlds",
    subtitle: "Favorite Adventure",
    description:
      "Unlock the door to infinite adventures with our vast collection of digital books.",
    badge: "The Future of Digital Reading",
  },
  {
    id: 2,
    image: "/images/hero-2.webp",
    title: "Read Anywhere",
    subtitle: "Seamless Experience",
    description:
      "Your library goes where you go. Seamless reading experience on all your devices.",
    badge: "Read On Any Device",
  },
  {
    id: 3,
    image: "/images/hero-3.jpg",
    title: "Community of Readers",
    subtitle: "Join the Tribe",
    description:
      "Join millions of book lovers, share reviews, and find your reading tribe.",
    badge: "Connect With Others",
  },
  {
    id: 4,
    image: "/images/hero-4.jpg",
    title: "Curated for You",
    subtitle: "Personalized Picks",
    description:
      "Personalized recommendations to help you find your next favorite adventure.",
    badge: "Tailored For You",
  },
  {
    id: 5,
    image: "/images/hero-5.jpg",
    title: "Audiobooks & More",
    subtitle: "Listen to Stories",
    description:
      "Listen to stories come alive with our premium audiobook selection.",
    badge: "Immersive Audio",
  },
];

export const Hero = () => {
  const slides: CarouselItem[] = heroItems.map((item) => ({
    id: item.id,
    image: item.image,
    title: item.title,
    content: (
      <HeroContent
        title={item.title}
        subtitle={item.subtitle}
        description={item.description}
        badge={item.badge}
      />
    ),
  }));

  return (
    <section className=" pt-12">
      {/* Background Slider */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full z-0">
          <ThumbnailCarousel items={slides} />
        </div>
      </div>
      {/* for cards contain icon iligned with short 2 words */}
      <div className="w-8/12 mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
        {[
          { icon: "/icons/shield.png", label: "Original Products" },
          { icon: "/icons/credit-card.png", label: "Easy Payment" },
          { icon: "/icons/shipped.png", label: "Easy Delivery" },
          { icon: "/icons/return-of-investment.png", label: "Easy Return" },
        ].map((item) => (
          <Card
            key={item.label}
            className="bg-white/10 border-white/20 h-36 backdrop-blur-md rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform"
          >
            <Image src={item.icon} alt={item.label} width={52} height={52} />
            <h3 className="text-lg font-semibold text-white mb-2">
              {item.label}
            </h3>
          </Card>
        ))}
      </div>
    </section>
  );
};
