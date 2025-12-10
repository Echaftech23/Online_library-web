"use client";

import { BookOpen, Cloud, Shield, Smartphone, LucideIcon } from "lucide-react";

// --- Types ---
interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

// --- Data ---
const features: Feature[] = [
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

// --- Sub-components ---
interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => (
  <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors group">
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <feature.icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-xl font-semibold text-card-foreground mb-2">
      {feature.title}
    </h3>
    <p className="text-muted-foreground leading-relaxed">
      {feature.description}
    </p>
  </div>
);

// --- Main Component ---
export const Features = () => {
  return (
    <section className="py-24 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose Aventi?
          </h2>
          <p className="text-muted-foreground">
            Experience the best digital reading platform designed for modern
            readers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};
