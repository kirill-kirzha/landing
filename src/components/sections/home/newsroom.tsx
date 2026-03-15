import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { SectionProps } from "@/types";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { Reveal } from "@/components/ui/reveal";

const articles = [
  {
    date: "March 2026",
    title: "Aleria 2.0: The Sovereign AI Factory",
    excerpt:
      "A complete rebuild of the platform. New architecture, new capabilities, same commitment to data sovereignty.",
    href: "/company/newsroom",
  },
  {
    date: "January 2025",
    title: "First AI Board Observer recognized at Davos WEF",
    excerpt:
      "Aiden Insight becomes the world's first AI-powered non-voting Board Observer, presented at the World Economic Forum.",
    href: "/company/newsroom",
  },
  {
    date: "November 2024",
    title: "Sovereign AI deployed at national infrastructure scale",
    excerpt:
      "Aleria powers a sovereign AI factory running on bare-metal infrastructure in a national data center.",
    href: "/company/newsroom",
  },
] as const;

export function NewsroomSection({ className }: SectionProps) {
  return (
    <Section background="muted" divider="both" className={className}>
      <Container>
        <Reveal>
          <SectionHeader
            badge="Newsroom"
            title={
              <>
                Latest <span className="font-normal">News</span>
              </>
            }
          />

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.title}
                href={article.href}
                className="group rounded-xl border border-border/40 bg-background p-6 transition-colors hover:border-border/80 focus-ring"
              >
                <p className="type-label text-quaternary">{article.date}</p>
                <h3 className="type-body mt-3 font-medium text-foreground">
                  {article.title}
                </h3>
                <p className="type-body-sm mt-2 text-muted-foreground">
                  {article.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  Read more
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-10 text-center">
            <LinkArrow href="/company/newsroom">All news</LinkArrow>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
