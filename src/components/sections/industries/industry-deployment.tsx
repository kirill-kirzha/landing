import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/ui/reveal";

interface IndustryDeploymentProps {
  title: string;
  description: string;
}

export function IndustryDeployment({ title, description }: IndustryDeploymentProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="type-title">{title}</h2>
              <p className="type-body mt-6 text-muted-foreground">{description}</p>
            </div>
            <div
              className="aspect-video rounded-xl bg-muted"
              aria-hidden="true"
            />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
