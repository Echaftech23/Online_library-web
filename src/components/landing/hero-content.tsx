"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle } from "lucide-react";

interface HeroContentProps {
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export const HeroContent = ({
  title,
  subtitle,
  description,
  badge,
}: HeroContentProps) => {
  return (
    <div className="pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-primary/30 border border-primary/20 text-sm font-medium mb-6 backdrop-blur-sm text-white">
          {badge}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
      >
        {title} <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-brand-orange to-amber-100">
          {subtitle}
        </span>






                 </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-base text-zinc-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
      >
        {description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <Button
          size="lg"
          className="bg-primary rounded-full"
        >
          Start Reading Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-neutral-700 bg-white/5 text-white hover:bg-transparent hover:text-neutral-300 rounded-full backdrop-blur-sm"
        >
          <PlayCircle className="mr-2 h-5 w-5" />
          Watch Demo
        </Button>
      </motion.div>
    </div>
  );
};
