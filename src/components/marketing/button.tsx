import Link from "next/link";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "btn-primary-gradient hover:opacity-90 active:scale-[0.98]",
  secondary:
    "border border-border bg-transparent hover:bg-muted active:scale-[0.98]",
  outline_gradient:
    "border-gradient-glow hover:opacity-90 active:scale-[0.98]",
  ghost:
    "bg-transparent text-muted-foreground hover:text-foreground",
} as const;

const sizes = {
  default: "h-10 px-5 text-sm",
  lg: "h-11 px-6 text-sm",
  sm: "h-9 px-4 text-xs",
} as const;

type ButtonBaseProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  children: React.ReactNode;
};

type AsLink = ButtonBaseProps & {
  href: string;
  onClick?: () => void;
};

type AsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: never;
  };

type ButtonProps = AsLink | AsButton;

export function Btn({
  variant = "primary",
  size = "default",
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-150 select-none",
    "focus-ring",
    "disabled:pointer-events-none disabled:opacity-40",
    variants[variant],
    sizes[size],
    className,
  );

  if ("href" in props && props.href) {
    const { href, onClick, ...rest } = props as AsLink;
    return (
      <Link href={href} className={classes} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as AsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
