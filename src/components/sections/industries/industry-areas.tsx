import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";
import { Reveal } from "@/components/ui/reveal";
import type { FunctionalArea } from "./industry-layout";

interface IndustryAreasProps {
  areas: readonly FunctionalArea[];
}

export function IndustryAreas({ areas }: IndustryAreasProps) {
  return (
    <Section>
      <HoneycombBg placement="center-right" intensity="subtle" />
      <Container className="relative z-10">
        <Reveal>
          <SectionHeader
            badge="Functional areas"
            title={
              <>
                Capabilities <span className="font-normal">deployed</span>
              </>
            }
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {areas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl border border-border/50 p-6 transition-colors duration-200 hover:border-border/80"
              >
                <h3 className="type-heading">{area.title}</h3>
                <p className="type-body-sm mt-3 text-muted-foreground">
                  {area.description}
                </p>
                <div
                  className="my-4 h-px w-full bg-border/30"
                  aria-hidden="true"
                />
                <p className="type-label text-quaternary">Capabilities</p>
                <p className="type-body-sm mt-1 text-tertiary">
                  {area.capabilities}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
