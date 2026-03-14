import { ArrowRight } from "lucide-react";

import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Btn } from "@/components/marketing/button";
import { Reveal } from "@/components/ui/reveal";

interface PageCtaProps {
  headline?: string;
  title: React.ReactNode;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export function PageCta({
  headline = "The organizations that can produce intelligence at scale will define the future.",
  title,
  primaryLabel = "Let's Talk",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: PageCtaProps) {
  return (
    <Section spacing="lg">
      <Container size="narrow" className="relative z-10">
        <Reveal className="text-center">
          <p className="type-body text-muted-foreground">{headline}</p>
          <div
            className="gradient-desert-mint mx-auto mt-8 h-px w-24 rounded-full"
            aria-hidden="true"
          />
          <h2 className="type-display mt-8">{title}</h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Btn href={primaryHref} size="lg" className="w-full sm:w-auto">
              {primaryLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Btn>
            {secondaryLabel && secondaryHref && (
              <Btn
                href={secondaryHref}
                variant="outline_gradient"
                size="lg"
                className="w-full sm:w-auto"
              >
                {secondaryLabel}
              </Btn>
            )}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
