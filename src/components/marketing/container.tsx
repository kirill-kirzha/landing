import { cn } from "@/lib/utils";

const widths = {
  default: "max-w-7xl",
  narrow: "max-w-3xl",
  wide: "max-w-[90rem]",
  full: "max-w-none",
} as const;

interface ContainerProps {
  size?: keyof typeof widths;
  className?: string;
  children: React.ReactNode;
}

export function Container({
  size = "default",
  className,
  children,
}: ContainerProps) {
  return (
    <div className={cn("mx-auto px-5 sm:px-6 lg:px-8", widths[size], className)}>
      {children}
    </div>
  );
}
