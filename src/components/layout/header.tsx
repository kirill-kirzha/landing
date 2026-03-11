"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { DURATION, EASE } from "@/lib/motion";
import { Btn } from "@/components/marketing/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: DURATION.normal, ease: EASE }}
      className="fixed top-0 z-50 w-full bg-background/60 backdrop-blur-2xl backdrop-saturate-150"
    >
      <div className="mx-auto flex h-[var(--header-height)] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="transition-opacity duration-150 hover:opacity-70"
          aria-label={`${siteConfig.name} — Home`}
        >
          <Image
            src="/logo.svg"
            alt={siteConfig.name}
            width={100}
            height={24}
            priority
            className="dark:hidden"
          />
          <Image
            src="/logo-dark.svg"
            alt={siteConfig.name}
            width={100}
            height={24}
            priority
            className="hidden dark:block"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
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

        <div className="hidden items-center gap-3 lg:flex">
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
          className="flex size-10 items-center justify-center rounded-full text-muted-foreground transition-colors duration-150 hover:text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </div>

      <div className="line-gradient" aria-hidden="true" />

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </motion.header>
  );
}
