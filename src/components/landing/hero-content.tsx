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
    <div className="max-w-4xl mx-auto text-center pointer-events-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="inline-block py-1 px-3 rounded-full bg-black/10 border border-black/20 text-sm font-medium mb-6 backdrop-blur-sm text-white">
          {badge}
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg"
      >
        {title} <br />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-200 via-yellow-500 to-yellow-700">
          {subtitle}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-zinc-100 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
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
          className="bg-primary h-12 px-8 text-lg rounded-full"
        >
          Start Reading Free
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="border-neutral-700 bg-transparent text-neutral-300 hover:bg-white/5 hover:text-white h-12 px-8 text-lg rounded-full backdrop-blur-sm"
        >
          <PlayCircle className="mr-2 h-5 w-5" />
          Watch Demo
        </Button>
      </motion.div>
    </div>
  );
};
