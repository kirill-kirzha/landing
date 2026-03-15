"use client";

import { motion } from "framer-motion";

import type { NewsArticle } from "@/config/news";
import { fadeUp, stagger, VIEWPORT } from "@/lib/motion";
import { ArticleCard } from "@/components/sections/newsroom/article-card";

function groupByYear(articles: NewsArticle[]): Record<string, NewsArticle[]> {
  const groups: Record<string, NewsArticle[]> = {};
  for (const article of articles) {
    const year = article.date.slice(0, 4);
    if (!groups[year]) groups[year] = [];
    groups[year].push(article);
  }
  return groups;
}

interface ArticleGridProps {
  articles: NewsArticle[];
}

export function ArticleGrid({ articles }: ArticleGridProps) {
  const grouped = groupByYear(articles);
  const years = Object.keys(grouped).sort((a, b) => b.localeCompare(a));

  return (
    <div className="space-y-16">
      {years.map((year) => (
        <motion.div
          key={year}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          variants={stagger(0.06)}
        >
          <motion.h2
            variants={fadeUp}
            className="type-title mb-8 border-b border-border/20 pb-4"
          >
            {year}
          </motion.h2>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {grouped[year].map((article) => (
              <motion.div key={article.slug} variants={fadeUp}>
                <ArticleCard article={article} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
