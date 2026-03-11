"use client";

import { motion } from "framer-motion";

import type { SectionProps } from "@/types";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import { DURATION, VIEWPORT } from "@/lib/motion";

type Client = {
  name: string;
  file: string | null;
  invert?: boolean;
};

const row1: Client[] = [
  { name: "UAE Presidential Court", file: null },
  { name: "Ministry of Foreign Affairs", file: null },
  { name: "ADAA", file: "adaa.svg" },
  { name: "FAB", file: "fab.svg" },
  { name: "ADIA", file: "adia.svg" },
  { name: "ADX", file: "adx.png" },
  { name: "EMAAR", file: "emaar.svg" },
  { name: "Adani", file: "adani.svg" },
  { name: "Aldar", file: "aldar.png" },
  { name: "Miral", file: "miral.png" },
  { name: "ADNEC", file: "adnec.png" },
  { name: "Dept. of Culture & Tourism", file: "dct.png" },
];

const row2: Client[] = [
  { name: "Multiply Group", file: "multiply-group.svg", invert: true },
  { name: "IHC", file: "ihc.png" },
  { name: "Masdar", file: "masdar.svg" },
  { name: "Etisalat / e&", file: "eand.svg" },
  { name: "Rakez", file: "rakez.svg" },
  { name: "IFZA", file: "ifza.png" },
  { name: "crypto.com", file: "crypto-com.svg" },
  { name: "BTG Pactual", file: "btg-pactual.png" },
  { name: "Grupo Nutresa", file: "grupo-nutresa.svg" },
  { name: "OncoClinicas", file: "oncoclnicas.png" },
  { name: "Dept. of Municipalities & Transport", file: "dmt.svg" },
  { name: "Abu Dhabi Cyber Security Council", file: null },
];

function ClientLogo({ client }: { client: Client }) {
  if (!client.file) {
    return (
      <span className="shrink-0 rounded-full border border-border/25 px-4 py-1.5 text-sm whitespace-nowrap text-quaternary">
        {client.name}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/logos/clients/${client.file}`}
      alt={client.name}
      className={cn(
        "h-8 w-auto max-w-[140px] object-contain",
        "grayscale opacity-50 transition-all duration-500",
        "hover:grayscale-0 hover:opacity-100",
        client.invert && "invert",
      )}
    />
  );
}

export function ClientsSection({ className }: SectionProps) {
  return (
    <section className={cn("py-12 sm:py-16", className)} aria-label="Clients">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: DURATION.slow }}
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

        <Marquee speed={60} className="py-4">
          {row1.map((client) => (
            <ClientLogo key={client.name} client={client} />
          ))}
        </Marquee>

        <Marquee speed={60} reverse className="py-4">
          {row2.map((client) => (
            <ClientLogo key={client.name} client={client} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
