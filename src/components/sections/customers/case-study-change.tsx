import type { CaseStudyShift } from "@/config/case-studies";

import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";

interface CaseStudyChangeProps {
  headline: string;
  intro: string;
  shifts: readonly CaseStudyShift[];
}

export function CaseStudyChange({
  headline,
  intro,
  shifts,
}: CaseStudyChangeProps) {
  return (
    <Section background="muted" divider="both">
      <Container>
        <Reveal>
          <SectionHeader
            badge="What Aleria changed"
            title={headline}
            align="left"
          />
          <p className="type-body mt-6 max-w-3xl text-muted-foreground">
            {intro}
          </p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {shifts.map((shift) => (
              <div
                key={shift.title}
                className="rounded-xl border border-border/40 bg-background p-6 transition-colors duration-200 hover:border-border/70"
              >
                <h3 className="type-heading">{shift.title}</h3>
                <p className="type-body-sm mt-3 text-tertiary">
                  {shift.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
