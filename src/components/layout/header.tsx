"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Btn } from "@/components/marketing/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "animate-fade-in fixed top-0 z-50 w-full backdrop-blur-2xl backdrop-saturate-150 transition-all duration-300",
        scrolled ? "bg-background/80 shadow-xs" : "bg-background/60",
      )}
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative z-10 transition-opacity duration-150 hover:opacity-70 drop-shadow-[0_0_0.3px_oklch(0.11_0.008_55/0.5)]"
          aria-label={`${siteConfig.name} — Home`}
        >
          <span
            className="block h-6 w-[100px] bg-brand-mint"
            style={{
              maskImage: "url(/logo.svg)",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              WebkitMaskImage: "url(/logo.svg)",
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
            }}
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {siteConfig.nav.main.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={siteConfig.nav.cta.tryAleria.href}
            className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            {siteConfig.nav.cta.tryAleria.label}
          </Link>
          <Link
            href={siteConfig.nav.cta.login.href}
            className="text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
          >
            {siteConfig.nav.cta.login.label}
          </Link>
          <Btn href={siteConfig.nav.cta.primary.href} size="sm">
            {siteConfig.nav.cta.primary.label}
          </Btn>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="relative z-10 flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors duration-150 hover:text-foreground focus-ring lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={mobileOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.15 }}
            >
              {mobileOpen
                ? <X className="size-5" aria-hidden="true" />
                : <Menu className="size-5" aria-hidden="true" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <div
        className={cn(
          "line-gradient transition-opacity duration-300",
          scrolled || mobileOpen ? "opacity-100" : "opacity-0",
        )}
        aria-hidden="true"
      />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
