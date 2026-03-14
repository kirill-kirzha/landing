import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Reveal } from "@/components/ui/reveal";
import { CASE_STUDIES } from "@/config/case-studies";

export function CustomersGrid() {
  return (
    <Section>
      <Container>
        <Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((cs) => (
              <Link
                key={cs.slug}
                href={`/customers/${cs.slug}`}
                className="group flex flex-col rounded-xl border border-border/50 bg-card p-6 transition-all duration-200 hover:border-border hover:shadow-md focus-ring"
              >
                <p className="type-label text-muted-foreground">
                  {cs.industry} · {cs.location}
                </p>
                <h3 className="type-heading mt-3">{cs.title}</h3>
                <p className="type-body-sm mt-2 flex-1 text-tertiary">
                  {cs.summary}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  Read case study
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
