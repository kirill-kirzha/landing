"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { EASE, DURATION } from "@/lib/motion";
import type { NavItem } from "@/config/site";

export function NavDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const enter = () => {
    clearTimeout(timeout.current);
    setOpen(true);
  };

  const leave = () => {
    timeout.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => () => clearTimeout(timeout.current), []);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div ref={ref} className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground focus-ring rounded-sm"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={cn("size-3 transition-transform duration-200", open && "rotate-180")}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: DURATION.fast, ease: EASE }}
            className="absolute top-full left-1/2 z-50 mt-2 w-56 -translate-x-1/2 rounded-xl border border-border/50 bg-background/95 p-2 shadow-lg backdrop-blur-xl"
          >
            {item.children.map((child) => (
              <Link
                key={child.href}
                href={child.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 transition-colors duration-150 hover:bg-muted focus-ring"
              >
                <span className="text-sm font-medium">{child.label}</span>
                {"description" in child && child.description && (
                  <span className="mt-0.5 block text-xs text-quaternary">
                    {child.description}
                  </span>
                )}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
