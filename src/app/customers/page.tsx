import type { Metadata } from "next";

import { CustomersHero } from "@/components/sections/customers/customers-hero";
import { CustomersGrid } from "@/components/sections/customers/customers-grid";
import { PageCta } from "@/components/sections/shared/page-cta";

export const metadata: Metadata = {
  title: "Customers",
  description: "See how leading organizations deploy Aleria.",
};

export default function CustomersPage() {
  return (
    <>
      <CustomersHero />
      <CustomersGrid />
      <PageCta
        title={
          <>
            Ready to produce <span className="font-normal">intelligence</span> at
            scale?
          </>
        }
      />
    </>
  );
}
