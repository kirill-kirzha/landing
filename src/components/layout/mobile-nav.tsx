"use client";

import { useEffect, useCallback } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { siteConfig } from "@/config/site";
import { EASE } from "@/lib/motion";
import { Btn } from "@/components/marketing/button";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const linkVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.05 * i, duration: 0.2, ease: EASE },
  }),
};

export function MobileNav({ open, onClose }: MobileNavProps) {
  const handleEsc = useCallback(
    (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); },
    [onClose],
  );

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) document.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEsc);
    };
  }, [open, handleEsc]);

  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="h-[calc(100dvh-var(--header-height))] overflow-y-auto bg-background/95 backdrop-blur-xl lg:hidden"
          aria-label="Mobile navigation"
        >
          <div className="flex min-h-full flex-col px-5 pt-6 pb-10 sm:px-6">
            <div className="flex flex-col gap-1">
              {siteConfig.nav.main.map((item, i) => (
                <motion.div
                  key={item.href}
                  custom={i}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors duration-150 hover:bg-muted focus-ring"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="my-6 h-px bg-border/20" aria-hidden="true" />

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.2, ease: EASE }}
              className="flex flex-col gap-3"
            >
              <Btn
                href={siteConfig.nav.cta.tryAleria.href}
                variant="secondary"
                onClick={onClose}
              >
                {siteConfig.nav.cta.tryAleria.label}
              </Btn>
              <Btn
                href={siteConfig.nav.cta.primary.href}
                onClick={onClose}
              >
                {siteConfig.nav.cta.primary.label}
              </Btn>
            </motion.div>

            <div className="mt-auto pt-8">
              <Link
                href={siteConfig.nav.cta.login.href}
                onClick={onClose}
                className="text-sm text-quaternary transition-colors hover:text-foreground"
              >
                {siteConfig.nav.cta.login.label}
              </Link>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
