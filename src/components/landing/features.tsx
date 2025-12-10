"use client";

import { BookOpen, Cloud, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Massive Library",
    description:
      "Access over 1 million titles across all genres, from bestsellers to indie gems.",
  },
  {
    icon: Cloud,
    title: "Read Anywhere",
    description:
      "Sync your reading progress across all your devices automatically.",
  },
  {
    icon: Smartphone,
    title: "Offline Mode",
    description:
      "Download books to read offline when you don't have an internet connection.",
  },
  {
    icon: Shield,
    title: "Curated for You",
    description:
      "Personalized recommendations based on your reading habits and preferences.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-neutral-900/50 border-y border-neutral-800">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Why Choose BooksLib?
          </h2>
          <p className="text-neutral-400">
            Experience the best digital reading platform designed for modern
            readers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 hover:border-blue-500/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <feature.icon className="h-6 w-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
