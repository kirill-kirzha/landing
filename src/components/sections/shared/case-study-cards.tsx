import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { Reveal } from "@/components/ui/reveal";

export interface CaseStudy {
  client: string;
  industry: string;
  location: string;
  description: string;
  href: string;
}

interface CaseStudyCardsProps {
  studies: readonly CaseStudy[];
  badge?: string;
  title?: React.ReactNode;
}

export function CaseStudyCards({
  studies,
  badge = "Proof",
  title,
}: CaseStudyCardsProps) {
  return (
    <Section>
      <Container>
        <Reveal>
          {title && <SectionHeader badge={badge} title={title} />}
          <div
            className={cn(
              "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
              title && "mt-14",
            )}
          >
            {studies.map((study) => (
              <Link
                key={study.client}
                href={study.href}
                className="group flex flex-col rounded-xl border border-border/50 bg-card p-6 transition-all duration-200 hover:border-border hover:shadow-md focus-ring"
              >
                <p className="type-label text-muted-foreground">
                  {study.industry} · {study.location}
                </p>
                <h3 className="type-heading mt-3">{study.client}</h3>
                <p className="type-body-sm mt-2 flex-1 text-tertiary">
                  {study.description}
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
