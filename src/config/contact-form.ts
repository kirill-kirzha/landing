export const FORM_INPUT_CLASS =
  "rounded-lg border border-border bg-background px-4 py-3 type-body-sm focus-ring w-full transition-colors duration-150 hover:border-border/80 placeholder:text-quaternary";
export const FORM_LABEL_CLASS = "type-label mb-2 block text-muted-foreground";

export const CONTACT_COUNTRIES = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Brazil",
  "Indonesia",
  "United Kingdom",
  "United States",
  "India",
  "Other",
];

export const CONTACT_ORG_TYPES = [
  "Enterprise",
  "Government",
  "SMB",
  "Startup",
  "Other",
];

export const CONTACT_CHALLENGES = [
  "Data Unification",
  "AI Deployment",
  "Workflow Automation",
  "Executive Intelligence",
  "Video Analytics",
  "Data Sovereignty",
  "Other",
];

export const CONTACT_DEPLOYMENT_MODELS = [
  "Cloud",
  "On-Premise",
  "Air-Gapped",
  "Not Sure",
];

export interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  organisation: string;
  country: string;
  orgType: string;
  challenges: string[];
  deployment: string;
  budget: string;
}

export const CONTACT_BUDGET_OPTIONS = [
  "<50K AED/mo",
  "50-200K AED/mo",
  "200K+ AED/mo",
  "Custom/Enterprise",
];
