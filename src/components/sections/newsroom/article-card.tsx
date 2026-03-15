import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { NewsArticle } from "@/config/news";
import { formatNewsDate } from "@/config/news";

interface ArticleCardProps {
  article: NewsArticle;
  featured?: boolean;
}

export function ArticleCard({ article, featured }: ArticleCardProps) {
  return (
    <Link
      href={`/company/newsroom/${article.slug}`}
      className="group flex flex-col rounded-xl border border-border/40 bg-background p-6 transition-colors hover:border-border/80 focus-ring"
    >
      <p className="type-label text-quaternary">
        {formatNewsDate(article.date)}
      </p>
      <h3
        className={`mt-3 font-medium text-foreground ${featured ? "type-heading" : "type-body"}`}
      >
        {article.title}
      </h3>
      <p className="type-body-sm mt-2 flex-1 text-muted-foreground">
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
  );
}
