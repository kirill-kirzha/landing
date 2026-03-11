"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";

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

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3">
      <div
        className={cn(
          "flex w-max items-center gap-10",
          reverse ? "animate-[marquee_50s_linear_infinite_reverse]" : "animate-[marquee_50s_linear_infinite]",
        )}
      >
        {doubled.map((client, i) => (
          <span
            key={`${client}-${i}`}
            className="shrink-0 text-sm whitespace-nowrap text-muted-foreground/40 transition-colors duration-150 hover:text-muted-foreground"
          >
            {client}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ClientsSection({ className }: SectionProps) {
  return (
    <section className={cn("py-12 sm:py-16", className)}>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-center text-xs tracking-wider text-muted-foreground/40 uppercase"
      >
        Trusted by industry leaders
      </motion.p>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />
        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
