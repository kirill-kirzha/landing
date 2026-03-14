import { ArrowRight } from "lucide-react";

import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Btn } from "@/components/marketing/button";
import { Reveal } from "@/components/ui/reveal";

export function PricingEnterprise() {
  return (
    <Section spacing="lg">
      <Container size="narrow">
        <Reveal className="text-center">
          <p className="type-body text-muted-foreground">
            For organizations deploying on-premise, air-gapped or at national infrastructure scale
            — pricing is scoped based on deployment architecture, data volume, number of entities
            and support requirements.
          </p>
          <Btn href="/contact" size="lg" className="mt-8 focus-ring">
            Talk to our team
            <ArrowRight className="size-4" aria-hidden="true" />
          </Btn>
        </Reveal>
      </Container>
    </Section>
  );
}
