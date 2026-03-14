import type { SectionProps } from "@/types";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";
import { PricingCards } from "./pricing-cards";

export function PricingSection({ className }: SectionProps) {
  return (
    <Section spacing="lg" divider="top" className={className}>
      <Container>
        <Reveal>
          <SectionHeader
            badge="Pricing"
            title={
              <>
                <span className="font-normal">Transparent</span> pricing.
                Modular by design.
              </>
            }
            description="Start with the platform. Add the capabilities your organization needs. No bundle bloat."
          />
          <PricingCards />
        </Reveal>
      </Container>
    </Section>
  );
}
