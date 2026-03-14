import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/ui/reveal";

interface ClientLogosProps {
  logos: readonly { name: string; src: string }[];
  background?: "default" | "muted" | "dark";
}

export function ClientLogos({ logos, background = "default" }: ClientLogosProps) {
  const isDark = background === "dark";

  return (
    <Section background={background} spacing="none" className="py-10 sm:py-12">
      <Container>
        <Reveal>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {logos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.name}
                src={logo.src}
                alt={logo.name}
                loading="lazy"
                decoding="async"
                className={`h-6 w-auto object-contain opacity-50 grayscale sm:h-7 ${isDark ? "brightness-0 invert" : ""}`}
              />
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
