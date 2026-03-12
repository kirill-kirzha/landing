import type { SectionProps } from "@/types";

import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { WindowFrame } from "@/components/marketing/window-frame";

import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: "145×", label: "Faster than Talend" },
  { value: "8×", label: "Infra reduction" },
  { value: "20+", label: "Connectors" },
] as const;

export function SourcesSection({ className }: SectionProps) {
  return (
    <Section background="muted" divider="both" className={className}>
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <WindowFrame title="Aleria Sources">
              <div className="aspect-[4/3] bg-background/40" />
            </WindowFrame>
          </div>

          <div className="order-1 lg:order-2">
            <Badge>Sources — Big Data Fusion</Badge>
            <h2 className="type-title mt-6">
              Every data source,{" "}
              <span className="font-normal">unified</span>
            </h2>
            <p className="type-body mt-5 max-w-lg text-muted-foreground">
              Proprietary ETL platform that extracts, transforms and loads
              massive volumes from any source into a governed, AI-ready
              datalake.
            </p>

            <div className="mt-8 flex flex-wrap gap-8">
              {stats.map((s) => (
                <div key={s.value}>
                  <p className="type-metric">
                    {s.value}
                  </p>
                  <p className="type-body-sm mt-1 text-tertiary">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <LinkArrow href="/solutions/sources">
                Discover Sources
              </LinkArrow>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
