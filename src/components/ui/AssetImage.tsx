import { useState } from "react";
import { ImageOff } from "lucide-react";

interface AssetImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

/**
 * Renders an image from /public/assets/*. If the file hasn't been added yet
 * (or fails to load for any reason), it falls back to a clean placeholder
 * instead of breaking the layout — so this component keeps working as real
 * assets are dropped into place later.
 */
export default function AssetImage({
  src,
  alt,
  className = "",
  imgClassName = "",
}: AssetImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 bg-navy-800/[0.04] text-navy-900/30 ${className}`}
        role="img"
        aria-label={alt}
      >
        <ImageOff className="h-8 w-8" />
        <span className="text-xs font-medium tracking-wide">{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName} object-cover`}
    />
  );
}
