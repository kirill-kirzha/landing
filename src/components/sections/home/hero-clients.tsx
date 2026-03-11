"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { fadeIn } from "@/lib/motion";
import { Marquee } from "@/components/ui/marquee";

type Client = {
  name: string;
  file: string;
  width: number;
  invert?: boolean;
};

const row1: Client[] = [
  { name: "UAE Presidential Court", file: "uae-presidential-court.png", width: 42 },
  { name: "Ministry of Foreign Affairs", file: "mofaic.png", width: 100 },
  { name: "ADAA", file: "adaa.svg", width: 88 },
  { name: "FAB", file: "fab.svg", width: 56 },
  { name: "ADIA", file: "adia.svg", width: 78 },
  { name: "ADX", file: "adx.png", width: 34 },
  { name: "EMAAR", file: "emaar.svg", width: 100 },
  { name: "Adani", file: "adani.svg", width: 80 },
  { name: "Aldar", file: "aldar.png", width: 38 },
  { name: "Miral", file: "miral.png", width: 72 },
  { name: "ADNEC", file: "adnec.png", width: 36 },
  { name: "Dept. of Culture & Tourism", file: "dct.png", width: 90 },
];

const row2: Client[] = [
  { name: "Multiply Group", file: "multiply-group.svg", width: 52, invert: true },
  { name: "IHC", file: "ihc.png", width: 34 },
  { name: "Masdar", file: "masdar.svg", width: 100 },
  { name: "Etisalat / e&", file: "eand.svg", width: 36 },
  { name: "Rakez", file: "rakez.svg", width: 28 },
  { name: "IFZA", file: "ifza.png", width: 88 },
  { name: "crypto.com", file: "crypto-com.svg", width: 100 },
  { name: "BTG Pactual", file: "btg-pactual.png", width: 72 },
  { name: "Grupo Nutresa", file: "grupo-nutresa.svg", width: 50 },
  { name: "OncoClinicas", file: "oncoclnicas.png", width: 80 },
  { name: "Dept. of Municipalities & Transport", file: "dmt.svg", width: 100 },
  { name: "Abu Dhabi Cyber Security Council", file: "adcsc.png", width: 80 },
];

function ClientLogo({ client }: { client: Client }) {
  return (
    <div
      className="flex h-6 shrink-0 items-center justify-center sm:h-8"
      style={{ width: client.width }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/clients/${client.file}`}
        alt={client.name}
        className={cn(
          "max-h-full max-w-full object-contain",
          "opacity-40 grayscale transition-all duration-500",
          "hover:opacity-100 hover:grayscale-0",
          client.invert && "invert",
        )}
      />
    </div>
  );
}

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.6 },
  },
};

export function HeroClients() {
  return (
    <motion.div
      className="relative z-10 pb-8 sm:pb-14"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <motion.p
        variants={fadeIn}
        className="type-body-sm mb-4 text-center text-quaternary sm:mb-5"
      >
        Trusted by industry leaders
      </motion.p>

      <motion.div variants={fadeIn} className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-background to-transparent sm:w-32"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-background to-transparent sm:w-32"
          aria-hidden="true"
        />

        <Marquee speed={60} className="py-2 sm:py-3">
          {row1.map((client) => (
            <ClientLogo key={client.name} client={client} />
          ))}
        </Marquee>

        <Marquee speed={60} reverse className="py-2 sm:py-3">
          {row2.map((client) => (
            <ClientLogo key={client.name} client={client} />
          ))}
        </Marquee>
      </motion.div>
    </motion.div>
  );
}
