import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";
import type { FunctionalArea } from "./industry-layout";

interface IndustryAreasProps {
  areas: readonly FunctionalArea[];
}

export function IndustryAreas({ areas }: IndustryAreasProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          <SectionHeader
            badge="Functional areas"
            title={
              <>
                Capabilities <span className="font-normal">deployed</span>
              </>
            }
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area) => (
              <div
                key={area.title}
                className="rounded-xl border border-border/50 bg-background p-6"
              >
                <h3 className="type-heading">{area.title}</h3>
                <p className="type-body-sm mt-3 text-muted-foreground">
                  {area.description}
                </p>
                <p className="type-label mt-4 text-quaternary">Capabilities</p>
                <p className="type-body-sm mt-1 text-quaternary">
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
