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
          <div className="mt-14 divide-y divide-border/50">
            {benefits.map((item) => (
              <div
                key={item.benefit}
                className="flex flex-col gap-2 py-5 first:pt-0 sm:flex-row sm:items-start sm:gap-8"
              >
                <span className="min-w-[12rem] font-medium text-foreground">
                  {item.benefit}
                </span>
                <span className="type-body-sm text-tertiary">{item.impact}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
