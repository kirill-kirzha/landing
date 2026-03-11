import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";

interface LinkArrowProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export function LinkArrow({ href, className, children }: LinkArrowProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-sm font-medium transition-opacity duration-150 hover:opacity-70",
        className,
      )}
    >
      {children}
      <ArrowRight className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
    </Link>
  );
}
