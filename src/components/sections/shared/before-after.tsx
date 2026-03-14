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
            <div className="hidden md:grid md:grid-cols-2 md:gap-px md:overflow-hidden md:rounded-xl md:bg-border/30">
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
                    <p className="type-body-sm text-muted-foreground">
                      {row.after}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 md:hidden">
              {rows.map((row, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-xl border border-border/40"
                >
                  <div className="border-b border-border/30 bg-background px-5 py-4">
                    <p className="type-label mb-2 text-destructive/80">Before</p>
                    <p className="type-body-sm text-tertiary">{row.before}</p>
                  </div>
                  <div className="bg-background px-5 py-4">
                    <p className="type-label mb-2 text-brand-mint">After</p>
                    <p className="type-body-sm text-muted-foreground">
                      {row.after}
                    </p>
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
