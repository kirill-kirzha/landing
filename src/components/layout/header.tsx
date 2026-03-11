"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Btn } from "@/components/marketing/button";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className="fixed top-0 z-50 w-full border-b border-foreground/[0.06] bg-background/60 backdrop-blur-2xl backdrop-saturate-150"
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className="transition-opacity duration-150 hover:opacity-70"
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

        <nav className="hidden items-center gap-8 lg:flex">
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
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </motion.header>
  );
}
