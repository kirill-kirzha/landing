import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { Badge } from "@/components/marketing/badge";
import { HoneycombBg } from "@/components/marketing/honeycomb-bg";
import { ArticleBody } from "@/components/sections/newsroom/article-body";

interface ArticleLayoutProps {
  title: string;
  date: string;
  content: string[];
}

export function ArticleLayout({ title, date, content }: ArticleLayoutProps) {
  return (
    <>
      <Section spacing="lg" className="pt-28 sm:pt-32 lg:pt-36">
        <HoneycombBg placement="top-right" intensity="subtle" />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,oklch(0.93_0.015_82/0.4),transparent)]"
          aria-hidden="true"
        />
        <Container size="narrow" className="relative z-10">
          <Link
            href="/company/newsroom"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-ring rounded-md"
          >
            <ArrowLeft className="size-3.5" aria-hidden="true" />
            Back to Newsroom
          </Link>

          <div className="mt-8">
            <Badge>{date}</Badge>
            <h1 className="type-display mt-6">{title}</h1>
          </div>
        </Container>
        <div
          className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-border/40 to-transparent"
          aria-hidden="true"
        />
      </Section>

      <Section>
        <Container size="narrow">
          <article aria-label={title}>
            <ArticleBody content={content} />
          </article>
        </Container>
      </Section>

      <Section>
        <Container size="narrow">
          <div className="border-t border-border/20 pt-8">
            <Link
              href="/company/newsroom"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-ring rounded-md"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" />
              All news
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
