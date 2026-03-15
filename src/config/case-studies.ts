export interface CaseStudyShift {
  title: string;
  description: string;
}

export interface CaseStudyData {
  slug: string;
  title: string;
  industry: string;
  location: string;
  summary: string;
  entity: string;
  changeHeadline: string;
  changeIntro: string;
  shifts: readonly CaseStudyShift[];
  capabilities: readonly string[];
}

import { CASE_STUDIES_MORE } from "./case-studies-more";
import { CASE_STUDIES_EXTRA } from "./case-studies-extra";

const BASE_STUDIES: readonly CaseStudyData[] = [
  {
    slug: "augmented-legislation",
    title: "Aleria for Augmented Legislation",
    industry: "Government",
    location: "Middle East",
    summary:
      "Legislation stopped being static text and started functioning as operational intelligence, with automated global benchmarking for drafting new laws.",
    entity:
      "A leading public audit and accountability authority chose Aleria to make legislation more readable, more actionable, and easier to use in day-to-day decision-making. The challenge was not to automate legal work for the sake of speed. It was to make complex regulatory material clearer, more usable, and more directly connected to operations.",
    changeHeadline: "From legal complexity to operational clarity",
    changeIntro:
      "Legislation stopped being treated as static text and started functioning as operational intelligence. Instead of relying on manual reading, disconnected interpretation, and slow analysis cycles, the organization gained a way to access, understand, and apply legal and regulatory content in context. Aleria also transformed the way new legislation is prepared: automatically scanning international legal frameworks, analyzing how regulations are structured across jurisdictions, and identifying what models can inform the new regulation.",
    shifts: [
      {
        title: "Automated legislative benchmark",
        description:
          "When drafting a new law, the system scans international frameworks on the same topic, analyzing structure, intent, and outcomes across jurisdictions.",
      },
      {
        title: "Stronger detection of inconsistencies",
        description:
          "Proactive identification of ambiguities, outdated references, and regulatory gaps that manual review would miss.",
      },
      {
        title: "Clearer path from analysis to design",
        description:
          "A direct connection from regulatory analysis to legislative design: not just faster access to information, but better-structured output.",
      },
    ],
    capabilities: [
      "Automatic analysis and synthesis of regulatory documents",
      "Contextual legal translation in multiple languages",
      "Instant generation of plain-language summaries for decision-makers",
      "Semantic search across legal and regulatory content",
      "Real-time compliance assessment",
      "Proactive identification of ambiguities and outdated references",
      "Automated global benchmarking when drafting new laws",
      "Localized, sovereign legal monitoring capability",
    ],
  },
] as const;

export const CASE_STUDIES: readonly CaseStudyData[] = [
  ...BASE_STUDIES,
  ...CASE_STUDIES_MORE,
  ...CASE_STUDIES_EXTRA,
];
