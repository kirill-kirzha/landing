import { cn } from "@/lib/utils";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";

interface BeforeAfterRow {
  before: string;
  after: string;
}

interface BeforeAfterProps {
  rows: readonly BeforeAfterRow[];
  badge?: string;
  title?: React.ReactNode;
}

export function BeforeAfter({
  rows,
  badge = "The shift",
  title,
}: BeforeAfterProps) {
  return (
    <Section background="muted" divider="both">
      <Container>
        <Reveal>
          {title && <SectionHeader badge={badge} title={title} />}
          <div className={cn(title && "mt-14")}>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl bg-border/30 md:grid-cols-2">
              <div className="bg-background px-6 py-4">
                <p className="type-label text-destructive/80">Before Aleria</p>
              </div>
              <div className="bg-background px-6 py-4">
                <p className="type-label text-brand-mint">After Aleria</p>
              </div>
              {rows.map((row, i) => (
                <div key={i} className="contents">
                  <div className="bg-background px-6 py-5">
                    <p className="type-body-sm text-tertiary">{row.before}</p>
                  </div>
                  <div className="bg-background px-6 py-5">
                    <p className="type-body-sm text-muted-foreground">{row.after}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
