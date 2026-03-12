"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";

interface TextRotatorProps {
  words: readonly string[];
  interval?: number;
  className?: string;
}

export function TextRotator({
  words,
  interval = 2500,
  className,
}: TextRotatorProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <span className={cn("relative inline-block align-bottom", className)}>
      <span className="invisible" aria-hidden="true">
        {words.reduce((a, b) => (a.length >= b.length ? a : b))}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="absolute inset-0"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
