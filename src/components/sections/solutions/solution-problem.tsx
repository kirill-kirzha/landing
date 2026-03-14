import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/ui/reveal";

interface SolutionProblemProps {
  text: string;
}

export function SolutionProblem({ text }: SolutionProblemProps) {
  return (
    <Section background="muted" divider="both">
      <Container size="narrow">
        <Reveal>
          <p className="type-label text-muted-foreground">The problem</p>
          <div
            className="gradient-desert-mint mt-4 h-px w-12 rounded-full"
            aria-hidden="true"
          />
          <p className="type-body mt-6 text-muted-foreground leading-relaxed">
            {text}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
