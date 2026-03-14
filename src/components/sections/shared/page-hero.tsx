import { cn } from "@/lib/utils";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";

interface PageHeroProps {
  badge?: string;
  title: React.ReactNode;
  subtitle: string;
  children?: React.ReactNode;
}

export function PageHero({ badge, title, subtitle, children }: PageHeroProps) {
  return (
    <Section spacing="lg" className="pt-28 sm:pt-32 lg:pt-36">
      <HoneycombBg placement="top-right" intensity="subtle" />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.93_0.015_82/0.4),transparent)]"
        aria-hidden="true"
      />
      <Container size="narrow" className="relative z-10">
        <div className="animate-fade-in text-center">
          {badge && <Badge>{badge}</Badge>}
          <h1 className={cn("type-display", badge && "mt-6")}>{title}</h1>
          <p className="type-body mx-auto mt-6 max-w-2xl text-muted-foreground">
            {subtitle}
          </p>
          {children}
        </div>
      </Container>
      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent"
        aria-hidden="true"
      />
    </Section>
  );
}
