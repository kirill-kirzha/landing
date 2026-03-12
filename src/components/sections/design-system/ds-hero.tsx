import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";

export function DsHero() {
  return (
    <Section spacing="lg">
      <Container size="narrow" className="text-center">
        <Badge>Internal Reference</Badge>
        <h1 className="type-display mt-6">
          Aleria <span className="font-normal">Design</span> System
        </h1>
        <p className="type-body mx-auto mt-6 max-w-2xl text-muted-foreground">
          Single source of truth for the Aleria visual identity. Colors,
          typography, spacing, effects, and component patterns — documented for
          consistency across every surface.
        </p>
      </Container>

      <Container className="mt-14">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <p className="type-label text-muted-foreground">Philosophy</p>
            <p className="type-body-sm mt-2 text-muted-foreground">
              Warm, premium, accessible. Light-mode first with surgical dark
              sections.
            </p>
          </div>
          <div>
            <p className="type-label text-muted-foreground">Hierarchy</p>
            <p className="type-body-sm mt-2 text-muted-foreground">
              Typography and whitespace drive hierarchy — never color fills or
              decorative boxes.
            </p>
          </div>
          <div>
            <p className="type-label text-muted-foreground">Restraint</p>
            <p className="type-body-sm mt-2 text-muted-foreground">
              Gradients are accents, never backgrounds. Every effect earns its
              place through parsimony.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
