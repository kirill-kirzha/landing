import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";
import type { ClientBenefit } from "./industry-layout";

interface IndustryBenefitsProps {
  benefits: readonly ClientBenefit[];
}

export function IndustryBenefits({ benefits }: IndustryBenefitsProps) {
  return (
    <Section background="muted" divider="both">
      <Container>
        <Reveal>
          <SectionHeader
            badge="Client benefits"
            title={
              <>
                Impact at a <span className="font-normal">glance</span>
              </>
            }
          />
          <div className="mt-14 space-y-0 divide-y divide-border/50">
            {benefits.map((item) => (
              <div
                key={item.benefit}
                className="grid grid-cols-1 gap-1 py-5 first:pt-0 sm:grid-cols-[14rem_1fr] sm:gap-8"
              >
                <span className="type-body-sm font-medium text-foreground">
                  {item.benefit}
                </span>
                <span className="type-body-sm text-tertiary">
                  {item.impact}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
