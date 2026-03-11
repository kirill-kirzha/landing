import { Badge } from "@/components/marketing/badge";
import { LinkArrow } from "@/components/marketing/link-arrow";
import { MediaFrame } from "@/components/marketing/media-frame";

interface ProductCardProps {
  badge: string;
  title: string;
  description: string;
  features: readonly string[];
  href: string;
  mediaLabel?: string;
  mediaSrc?: string;
}

export function ProductCard({
  badge,
  title,
  description,
  features,
  href,
  mediaLabel,
  mediaSrc,
}: ProductCardProps) {
  return (
    <div>
      <MediaFrame
        label={mediaLabel ?? badge}
        src={mediaSrc}
        ratio="video"
        className="rounded-xl"
      />

      <div className="mt-6">
        <Badge>{badge}</Badge>
        <h3 className="type-heading mt-6">{title}</h3>
        <p className="type-body-sm mt-6 text-tertiary">{description}</p>

        <ul className="mt-5 space-y-2">
          {features.map((f) => (
            <li key={f} className="type-body-sm text-quaternary">
              {f}
            </li>
          ))}
        </ul>

        <div className="mt-5">
          <LinkArrow href={href}>Discover</LinkArrow>
        </div>
      </div>
    </div>
  );
}
