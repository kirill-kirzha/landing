import Image from "next/image";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

const ratios = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[2/1]",
} as const;

interface MediaFrameProps {
  src?: string;
  alt?: string;
  videoSrc?: string;
  label?: string;
  ratio?: keyof typeof ratios;
  priority?: boolean;
  className?: string;
}

export function MediaFrame({
  src,
  alt,
  videoSrc,
  label = "Video",
  ratio = "video",
  priority = false,
  className,
}: MediaFrameProps) {
  const base = cn(
    "group relative overflow-hidden rounded-2xl border border-border/40 bg-muted/10",
    ratios[ratio],
    className,
  );

  if (videoSrc) {
    return (
      <div className={base}>
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>
    );
  }

  if (src) {
    return (
      <div className={base}>
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        />
      </div>
    );
  }

  return (
    <div className={base}>
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:48px_48px] opacity-[0.12]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,var(--background)_100%)]" />
      </div>
      <div className="relative flex h-full flex-col items-center justify-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-full border border-border/30 bg-background/50 backdrop-blur-sm transition-transform duration-200 group-hover:scale-105">
          <Play className="size-4 text-muted-foreground/60" aria-hidden="true" />
        </div>
        <span
          className="text-xs tracking-wider text-muted-foreground/40 uppercase"
          aria-hidden="true"
        >
          {label}
        </span>
      </div>
    </div>
  );
}
