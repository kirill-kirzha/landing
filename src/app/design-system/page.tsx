import type { Metadata } from "next";

import { DsHero } from "@/components/sections/design-system/ds-hero";
import { DsColors } from "@/components/sections/design-system/ds-colors";
import { DsTypography } from "@/components/sections/design-system/ds-typography";
import { DsTitleRule } from "@/components/sections/design-system/ds-title-rule";
import { DsGradients } from "@/components/sections/design-system/ds-gradients";
import { DsSpacing } from "@/components/sections/design-system/ds-spacing";
import { DsButtons } from "@/components/sections/design-system/ds-buttons";
import { DsTokens } from "@/components/sections/design-system/ds-tokens";
import { DsAccessibility } from "@/components/sections/design-system/ds-accessibility";

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

export default function DesignSystemPage() {
  return (
    <>
      <DsHero />
      <DsColors />
      <DsTypography />
      <DsTitleRule />
      <DsGradients />
      <DsSpacing />
      <DsButtons />
      <DsTokens />
      <DsAccessibility />
    </>
  );
}
