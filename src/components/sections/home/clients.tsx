"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";

const row1 = [
  "UAE Presidential Court",
  "Abu Dhabi Cyber Security Council",
  "Ministry of Foreign Affairs",
  "ADAA",
  "FAB",
  "ADIA",
  "ADX",
  "EMAAR",
  "Adani",
  "Aldar",
  "Miral",
  "ADNEC",
];

const row2 = [
  "Multiply Group",
  "IHC",
  "Masdar",
  "Etisalat/e&",
  "Rakez",
  "IFZA",
  "crypto.com",
  "BTG Pactual",
  "Indosat Ooredoo",
  "Grupo Nutresa",
  "OncoClinicas",
  "Dept. of Municipalities & Transport",
];

function ClientPill({ name }: { name: string }) {
  return (
    <span className="shrink-0 rounded-full border border-border/25 px-4 py-1.5 text-sm whitespace-nowrap text-quaternary transition-all duration-200 hover:border-border/50 hover:text-muted-foreground">
      {name}
    </span>
  );
}

export function ClientsSection({ className }: SectionProps) {
  return (
    <section className={cn("py-12 sm:py-16", className)} aria-label="Clients">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="type-label mb-8 text-center text-quaternary"
      >
        Trusted by industry leaders
      </motion.p>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent"
          aria-hidden="true"
        />

        <Marquee speed={50} className="py-2">
          {row1.map((client) => (
            <ClientPill key={client} name={client} />
          ))}
        </Marquee>

        <Marquee speed={50} reverse className="py-2">
          {row2.map((client) => (
            <ClientPill key={client} name={client} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
