import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/config/site";
import { getArticleBySlug, getArticleSlugs, formatNewsDate } from "@/config/news";
import { newsContent2026 } from "@/config/news-content-2026";
import { newsContent2025Q4 } from "@/config/news-content-2025-q4";
import { newsContent2025Early } from "@/config/news-content-2025-early";
import { ArticleLayout } from "@/components/sections/newsroom/article-layout";
import { ArticleJsonLd } from "@/components/sections/newsroom/article-json-ld";

const allContent: Record<string, string[]> = {
  ...newsContent2026,
  ...newsContent2025Q4,
  ...newsContent2025Early,
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Not Found" };

  const canonical = `${siteConfig.url}/company/newsroom/${slug}`;
  const publishedTime = `${article.date}T12:00:00Z`;

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical },
    openGraph: {
      url: canonical,
      title: article.title,
      description: article.excerpt,
      siteName: siteConfig.name,
      type: "article",
      publishedTime,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  const content = allContent[slug];

  if (!article || !content) notFound();

  return (
    <>
      <ArticleJsonLd article={article} />
      <ArticleLayout
        title={article.title}
        date={formatNewsDate(article.date)}
        content={content}
      />
    </>
  );
}
