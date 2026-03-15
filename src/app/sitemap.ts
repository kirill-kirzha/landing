import type { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";
import { getArticleSlugs } from "@/config/news";
import { CASE_STUDIES } from "@/config/case-studies";

const base = siteConfig.url;

function url(path: string, options?: { lastModified?: Date; changeFrequency?: "yearly" | "monthly" | "weekly"; priority?: number }): MetadataRoute.Sitemap[number] {
  return {
    url: `${base}${path}`,
    lastModified: options?.lastModified ?? new Date(),
    changeFrequency: options?.changeFrequency ?? "monthly",
    priority: options?.priority ?? 0.8,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    url("/", { priority: 1, changeFrequency: "weekly" }),
    url("/contact"),
    url("/pricing"),
    url("/ai-factory"),
    url("/customers"),
    url("/company/newsroom", { changeFrequency: "weekly" }),
  ];

  const solutionPaths = [
    "/solutions/sources",
    "/solutions/ai-os",
    "/solutions/agents",
    "/solutions/flows",
    "/solutions/dashboard-ai",
    "/solutions/video-ai",
  ];
  const industryPaths = [
    "/industries/government",
    "/industries/financial-services",
    "/industries/real-estate-construction",
    "/industries/telecom",
  ];

  const solutionEntries = solutionPaths.map((path) => url(path));
  const industryEntries = industryPaths.map((path) => url(path));
  const newsroomArticles = getArticleSlugs().map((slug) =>
    url(`/company/newsroom/${slug}`, { changeFrequency: "yearly" }),
  );
  const customerSlugs = CASE_STUDIES.map((c) => c.slug);
  const customerEntries = customerSlugs.map((slug) =>
    url(`/customers/${slug}`, { changeFrequency: "yearly" }),
  );

  return [
    ...staticPages,
    ...solutionEntries,
    ...industryEntries,
    ...newsroomArticles,
    ...customerEntries,
  ];
}
