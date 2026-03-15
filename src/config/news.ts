export interface NewsArticle {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
}

export function formatNewsDate(dateStr: string): string {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}

export function getArticleSlugs(): string[] {
  return newsArticles.map((a) => a.slug);
}

export const newsArticles: NewsArticle[] = [
  {
    slug: "qasr-aleria-a-vision-for-sovereign-ai",
    date: "2026-02-16",
    title: "Qasr Aleria: A Vision for Sovereign AI",
    excerpt:
      "As AI becomes critical national infrastructure, Qasr Aleria represents the UAE's answer to sovereign intelligence — deployed on-premise, governed locally, powered by NVIDIA.",
  },
  {
    slug: "strategic-dialogue-on-sovereign-ai",
    date: "2026-01-28",
    title: "A Strategic Dialogue at Aleria HQ on the Future of Sovereign AI",
    excerpt:
      "Aleria welcomed senior leaders from NVIDIA and DDN for a strategic exchange on sovereign AI and large-scale data infrastructure.",
  },
  {
    slug: "ai-sustainability-at-scale-davos",
    date: "2026-01-21",
    title: "AI and Sustainability at Scale: Building Trust into Next-Generation Infrastructure",
    excerpt:
      "During the World Economic Forum in Davos, Aleria convened a panel to examine AI infrastructure and sustainability at institutional scale.",
  },
  {
    slug: "ifza-aleria-ai-digital-capabilities",
    date: "2026-01-20",
    title: "IFZA and Aleria Collaborate to Advance AI Driven Digital Capabilities for Free Zones",
    excerpt:
      "IFZA entered a strategic collaboration with Aleria to advance AI as core digital infrastructure across its ecosystem of 80,000+ registered companies.",
  },
  {
    slug: "beyond-the-hype-ai-intelligence-factory",
    date: "2026-01-20",
    title: "Beyond the Hype: Delivering the AI Intelligence Factory",
    excerpt:
      "At Davos, Aleria convened a panel with NVIDIA and DDN to move the conversation beyond experimentation toward real-world AI Intelligence Factories.",
  },
  {
    slug: "cyber-run-and-ride-2026",
    date: "2026-01-17",
    title: "Aleria Supports Cyber Run and Ride 2026 to Advance Digital Awareness",
    excerpt:
      "Aleria participated in Cyber Run and Ride 2026, a large-scale public initiative bringing together more than 20,000 participants in Abu Dhabi.",
  },
  {
    slug: "multiply-group-innovation-labs",
    date: "2025-11-13",
    title: "Multiply Group Unveils Innovation Labs Powered by Aleria's AI Platform & NVIDIA",
    excerpt:
      "Multiply Group launched Innovation Labs leveraging Aleria's AI platform as its core technology backbone, with priority access to NVIDIA's ecosystem.",
  },
  {
    slug: "aleria-reach-nexumous-partnership",
    date: "2025-11-12",
    title: "Aleria, REACH Group, and Nexumous Forge Strategic Partnership for AI-Robotics",
    excerpt:
      "A landmark MoU signed during DriftX to jointly deliver integrated, AI-driven and robotics-enabled solutions across the UAE.",
  },
  {
    slug: "nvidia-dgx-spark-one-development",
    date: "2025-11-04",
    title: "Aleria Presents NVIDIA DGX Spark to One Development for Smart Real Estate",
    excerpt:
      "Aleria presented one of the UAE's first NVIDIA DGX Spark AI mini-supercomputers to One Development for intelligent property development.",
  },
  {
    slug: "nvidia-dgx-spark-ehc-adipec",
    date: "2025-11-03",
    title: "Aleria and EHC Investment Deploy NVIDIA DGX Spark During ADIPEC 2025",
    excerpt:
      "Aleria presented one of the UAE's first NVIDIA DGX Spark AI mini-supercomputers to EHC Investment during ADIPEC 2025.",
  },
  {
    slug: "powering-multiply-group-sovereign-ai",
    date: "2025-10-31",
    title: "Powering Multiply Group with Sovereign AI Innovation",
    excerpt:
      "Aleria delivered one of the first NVIDIA DGX Spark mini-supercomputers in the UAE to Multiply Group.",
  },
  {
    slug: "first-nvidia-dgx-spark-uae",
    date: "2025-10-30",
    title: "Aleria Announces First NVIDIA DGX Spark in UAE",
    excerpt:
      "Aleria received the first NVIDIA DGX Spark in the United Arab Emirates, marking a significant milestone in the nation's AI journey.",
  },
  {
    slug: "aleria-nvidia-sovereign-ai-cloud",
    date: "2025-10-20",
    title: "Aleria and NVIDIA Unveil UAE's Next-Gen Sovereign AI and Cloud Ecosystem",
    excerpt:
      "Aleria and NVIDIA partner to accelerate the UAE's sovereign AI transformation with DGX GB300 systems and DDN Storage.",
  },
  {
    slug: "ehc-adopts-aleria-ai-solutions",
    date: "2025-09-15",
    title: "EHC UAE Adopts Aleria AI Solutions for Next-Gen Governance",
    excerpt:
      "EHC UAE integrates Aleria's AI platform to embed artificial intelligence into governance and executive functions.",
  },
  {
    slug: "al-seer-marine-ai-board-observer-nova",
    date: "2025-08-22",
    title: 'Al Seer Marine Rolls Out AI Board Observer "NOVA" Powered by Aleria',
    excerpt:
      "Al Seer Marine deployed NOVA, the UAE maritime sector's first non-voting AI Board Observer, developed by Aleria.",
  },
  {
    slug: "ihc-aiden-insight-2",
    date: "2025-05-08",
    title: "IHC Unveils Aiden Insight 2.0, Powered by Aleria",
    excerpt:
      "IHC launched Aiden Insight 2.0, its next-generation AI Board Observer built with Aleria, delivering real-time strategic insights on-premise.",
  },
  {
    slug: "multiply-group-ai-board-governance",
    date: "2025-04-28",
    title: "Multiply Group Integrates Aleria's AI in Board-Level Governance",
    excerpt:
      "Multiply Group appointed MAI, an AI board observer developed with Aleria, as a non-voting member offering real-time analytics.",
  },
  {
    slug: "zayed-foundation-ai-partnership",
    date: "2025-03-13",
    title: "Zayed Humanitarian Foundation Introduces AI Applications with Aleria",
    excerpt:
      "The Zayed Charitable & Humanitarian Foundation signed an MoU with Aleria to apply AI to optimize aid distribution and humanitarian operations.",
  },
  {
    slug: "eand-uae-smbs-aleria",
    date: "2025-02-11",
    title: "e& UAE Empowers SMBs Through AI Integration with Aleria",
    excerpt:
      "e& UAE launched AI solutions powered by Aleria, integrating the sovereign platform to help SMBs scale and optimize operations.",
  },
  {
    slug: "adaa-ai-legal-transformation",
    date: "2024-10-18",
    title: "ADAA Partners with Aleria to Advance AI-Powered Legal Transformation",
    excerpt:
      "At GITEX Global 2024, ADAA announced a strategic collaboration with Aleria to deploy AI-powered legislative automation.",
  },
  {
    slug: "ihc-ai-board-observer-aiden-insight",
    date: "2024-08-06",
    title: 'IHC Leverages Aleria\'s AI Board Observer "Aiden Insight"',
    excerpt:
      "IHC deployed Aleria's AI Board Observer Aiden Insight to empower boardroom decision making through real-time analytics.",
  },
];
