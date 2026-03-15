import { WindowFrame } from "@/components/marketing/window-frame";
import { VideoPlayer } from "./video-player";

interface VideoPlaceholderProps {
  title?: string;
  videoSrc?: string;
  className?: string;
}

export function VideoPlaceholder({
  title = "Aleria",
  videoSrc,
  className,
}: VideoPlaceholderProps) {
  return (
    <div className={className}>
      <WindowFrame title={title}>
        {videoSrc ? (
          <VideoPlayer src={videoSrc} />
        ) : (
          <div className="aspect-video bg-muted/30" />
        )}
      </WindowFrame>
    </div>
  );
}
