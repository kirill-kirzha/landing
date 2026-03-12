import { Marquee } from "@/components/ui/marquee";

type Client = {
  name: string;
  file: string;
  scale?: number;
};

const row1: Client[] = [
  { name: "UAE Presidential Court", file: "uae-presidential-court.png" },
  { name: "Ministry of Foreign Affairs", file: "mofaic.png" },
  { name: "ADAA", file: "adaa.svg" },
  { name: "FAB", file: "fab.svg" },
  { name: "ADIA", file: "adia.svg" },
  { name: "ADX", file: "adx.png", scale: 1.8 },
  { name: "EMAAR", file: "emaar.svg" },
  { name: "Adani", file: "adani.svg" },
  { name: "Aldar", file: "aldar.png" },
  { name: "Miral", file: "miral.png" },
  { name: "ADNEC", file: "adnec.png" },
  { name: "Dept. of Culture & Tourism", file: "dct.png" },
];

const row2: Client[] = [
  { name: "Multiply Group", file: "multiply-group.svg" },
  { name: "IHC", file: "ihc.png" },
  { name: "Masdar", file: "masdar.svg" },
  { name: "Etisalat / e&", file: "eand.svg" },
  { name: "Rakez", file: "rakez.svg" },
  { name: "IFZA", file: "ifza.png" },
  { name: "crypto.com", file: "crypto-com.svg" },
  { name: "BTG Pactual", file: "btg-pactual.png", scale: 1.8 },
  { name: "Grupo Nutresa", file: "grupo-nutresa.svg", scale: 1.6 },
  { name: "Dept. of Municipalities & Transport", file: "dmt.svg" },
  { name: "Abu Dhabi Cyber Security Council", file: "adcsc.png" },
];

function ClientLogo({ client }: { client: Client }) {
  return (
    <div className="flex h-8 shrink-0 items-center justify-center sm:h-10">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`/logos/clients/${client.file}`}
        alt={client.name}
        loading="lazy"
        decoding="async"
        className="h-full w-auto object-contain transition-all duration-500 [filter:grayscale(1)_contrast(0)_brightness(0.7)] hover:[filter:none]"
        style={client.scale ? { transform: `scale(${client.scale})` } : undefined}
      />
    </div>
  );
}

export function HeroClients() {
  return (
    <div className="animate-fade-in-slow relative z-10 pb-8 sm:pb-14">
      <p className="type-body-sm mb-4 text-center text-quaternary sm:mb-5">
        Trusted by industry leaders
      </p>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-16"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-16"
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
      </div>
    </div>
  );
}
