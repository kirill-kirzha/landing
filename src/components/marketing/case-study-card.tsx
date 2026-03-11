import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface CaseStudyCardProps {
  client: string;
  meta: string;
  description: string;
  href: string;
  className?: string;
}

export function CaseStudyCard({
  client,
  meta,
  description,
  href,
  className,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex flex-col rounded-2xl border border-border/30 p-6 transition-all duration-300 sm:p-8",
        "hover:border-border/60 hover:shadow-md",
        className,
      )}
    >
      <div className="flex size-11 items-center justify-center rounded-xl border border-border/20 bg-foreground/[0.03]">
        <span className="type-label text-foreground/70">
          {client.split(" ")[0].slice(0, 2)}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="type-heading">{client}</h3>
        <p className="type-label mt-1 text-quaternary">{meta}</p>
      </div>

      <p className="type-body-sm mt-4 flex-1 text-tertiary">{description}</p>

      <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors duration-200 group-hover:text-foreground">
        Read case study
        <ArrowRight
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
