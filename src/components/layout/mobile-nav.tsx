"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { Btn } from "@/components/marketing/button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="overflow-hidden border-t border-border/30 lg:hidden"
        >
          <nav className="flex flex-col gap-1 px-6 py-4">
            {siteConfig.nav.main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <div className="my-3 h-px bg-border/20" />

            <div className="flex flex-col gap-2 pt-1">
              <Btn
                href={siteConfig.nav.cta.tryAleria.href}
                variant="secondary"
                size="sm"
                onClick={onClose}
              >
                {siteConfig.nav.cta.tryAleria.label}
              </Btn>
              <Btn
                href={siteConfig.nav.cta.primary.href}
                size="sm"
                onClick={onClose}
              >
                {siteConfig.nav.cta.primary.label}
              </Btn>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
