import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { newsArticles } from "@/config/news";
import { PageHero } from "@/components/sections/shared/page-hero";
import { Section } from "@/components/marketing/section";
import { Container } from "@/components/marketing/container";
import { ArticleGrid } from "@/components/sections/newsroom/article-grid";
import { PageCta } from "@/components/sections/shared/page-cta";

const newsroomUrl = `${siteConfig.url}/company/newsroom`;
const description =
  "Latest news, partnerships, and milestones from Aleria — sovereign AI infrastructure for enterprises and governments.";

export const metadata: Metadata = {
  title: "Newsroom",
  description,
  alternates: { canonical: newsroomUrl },
  openGraph: {
    url: newsroomUrl,
    title: "Newsroom",
    description,
    siteName: siteConfig.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsroom",
    description,
  },
};

export default function NewsroomPage() {
  return (
    <>
      <PageHero
        badge="Newsroom"
        title={
          <>
            Latest <span className="font-normal">News</span>
          </>
        }
        subtitle="Partnerships, deployments, and milestones shaping the future of sovereign AI infrastructure."
      />

      <Section>
        <Container>
          <ArticleGrid articles={newsArticles} />
        </Container>
      </Section>

      <PageCta
        headline="Sovereign AI is not just a vision — it is operational reality."
        title={
          <>
            Ready to <span className="font-normal">operate</span> intelligence?
          </>
        }
        secondaryLabel="Contact us"
        secondaryHref="/contact"
      />
    </>
  );
}
