import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";

const doExamples = [
  {
    title: <>Your <span className="font-normal">Sovereign</span> AI Factory</>,
    note: "\"Sovereign\" — signature word, sits in the interior of the title",
  },
  {
    title: <>Build <span className="font-normal">Intelligence</span> at Scale</>,
    note: "\"Intelligence\" — key concept, framed by bold on both sides",
  },
  {
    title: <>The <span className="font-normal">Future</span> of Enterprise AI</>,
    note: "\"Future\" — vision word, bold text closes the line",
  },
];

const dontExamples = [
  {
    title: <>Your Sovereign AI <span className="font-normal">Factory</span></>,
    note: "Last word of the title — the line ends light, losing its close",
  },
  {
    title: <>Your <span className="font-normal">and</span> Sovereign AI Factory</>,
    note: "Conjunction — only significant words qualify",
  },
  {
    title: <><span className="font-normal">The</span> Future of Enterprise AI</>,
    note: "Article — never lighten a structural word",
  },
];

export function DsTitleRule() {
  return (
    <Section background="muted" divider="both">
      <Container>
        <SectionHeader
          badge="Typographic Signature"
          title={<>Bold / <span className="font-normal">Light</span> Contrast</>}
          description="On every h1 and h2, one keyword switches to font-normal (400) while the rest stays bold (700). This creates a breathing rhythm that draws the eye to the signature word of the title."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-foreground" aria-hidden="true" />
              <p className="type-label text-muted-foreground">Correct</p>
            </div>
            <div className="mt-6 space-y-4">
              {doExamples.map((ex, i) => (
                <div key={i} className="rounded-lg border border-border bg-background p-5">
                  <p className="type-title font-serif">{ex.title}</p>
                  <p className="type-body-sm mt-3 text-tertiary">{ex.note}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-destructive" aria-hidden="true" />
              <p className="type-label text-destructive">Incorrect</p>
            </div>
            <div className="mt-6 space-y-4">
              {dontExamples.map((ex, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-destructive/20 bg-background p-5 opacity-60"
                >
                  <p className="type-title font-serif">{ex.title}</p>
                  <p className="type-body-sm mt-3 text-destructive">{ex.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-lg border border-border bg-background p-6">
          <h3 className="type-heading">Rules</h3>
          <ul className="mt-4 space-y-2">
            <li className="type-body-sm text-muted-foreground">
              The light word must be a{" "}
              <strong className="text-foreground">significant, signature word</strong>{" "}
              — the concept that defines the title.
            </li>
            <li className="type-body-sm text-muted-foreground">
              <strong className="text-foreground">Never at the end</strong> of the
              title. The light word sits inside so bold text frames it on both
              sides and closes the line.
            </li>
            <li className="type-body-sm text-muted-foreground">
              <strong className="text-foreground">Never a conjunction, article,
              or preposition</strong> (and, the, a, of, for).
            </li>
            <li className="type-body-sm text-muted-foreground">
              <strong className="text-foreground">Maximum 1 light word</strong>{" "}
              per title. Multiple dilutes the effect.
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}
