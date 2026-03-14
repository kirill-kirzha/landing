import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/ui/reveal";

interface CaseStudyEntityProps {
  text: string;
}

export function CaseStudyEntity({ text }: CaseStudyEntityProps) {
  return (
    <Section>
      <Container size="narrow">
        <Reveal>
          <p className="type-label text-muted-foreground">The organization</p>
          <p className="type-body mt-6 text-muted-foreground leading-relaxed">
            {text}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
