import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";

interface CaseStudyHeroProps {
  title: string;
  industry: string;
  location: string;
}

export function CaseStudyHero({ title, industry, location }: CaseStudyHeroProps) {
  return (
    <Section spacing="lg" className="pt-28 sm:pt-32 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.93_0.015_82/0.4),transparent)]"
        aria-hidden="true"
      />
      <Container className="relative z-10">
        <div className="animate-fade-in">
          <LinkArrow href="/customers" className="text-muted-foreground">
            All case studies
          </LinkArrow>
          <div className="mt-8">
            <Badge>{industry} · {location}</Badge>
            <h1 className="type-display mt-6">{title}</h1>
          </div>
        </div>
      </Container>
    </Section>
  );
}
