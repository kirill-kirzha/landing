"use client";

import { useRef, useEffect, type ReactNode } from "react";

import { cn } from "@/lib/utils";

let observer: IntersectionObserver | null = null;

function getObserver() {
  if (observer) return observer;
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer!.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "60px", threshold: 0.08 },
  );
  return observer;
}

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = getObserver();
    obs.observe(el);
    return () => obs.unobserve(el);
  }, []);

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  );
}
