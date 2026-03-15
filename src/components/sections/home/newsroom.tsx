import type { SectionProps } from "@/types";
import { newsArticles } from "@/config/news";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { SectionHeader } from "@/components/marketing/section-header";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { Reveal } from "@/components/ui/reveal";
import { ArticleCard } from "@/components/sections/newsroom/article-card";

const latestArticles = newsArticles.slice(0, 3);

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
            {latestArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
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
