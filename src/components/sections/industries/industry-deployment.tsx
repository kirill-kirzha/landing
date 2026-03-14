import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { WindowFrame } from "@/components/marketing/window-frame";
import { Reveal } from "@/components/ui/reveal";

interface IndustryDeploymentProps {
  title: string;
  description: string;
}

export function IndustryDeployment({
  title,
  description,
}: IndustryDeploymentProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Badge>Featured deployment</Badge>
              <h2 className="type-title mt-6">{title}</h2>
              <p className="type-body mt-6 text-muted-foreground">
                {description}
              </p>
            </div>
            <WindowFrame title="Deployment">
              <div className="flex aspect-video items-center justify-center bg-muted/50">
                <div className="text-center">
                  <div className="type-metric text-brand-mint">Live</div>
                  <p className="type-body-sm mt-2 text-tertiary">
                    Running in production
                  </p>
                </div>
              </div>
            </WindowFrame>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
