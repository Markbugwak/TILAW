"use client";

import { useState } from "react";
import Image from "next/image";

type SafeImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  fallbackClassName: string;
  fallbackLabel: string;
  fallbackTitle?: string;
  priority?: boolean;
};

export default function SafeImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  fallbackClassName,
  fallbackLabel,
  fallbackTitle,
  priority = false
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div className={fallbackClassName} role="img" aria-label={`${fallbackLabel}: ${alt}`}>
        <span>{fallbackLabel}</span>
        {fallbackTitle && <strong>{fallbackTitle}</strong>}
      </div>
    );
  }

  return (
    <Image
      unoptimized
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      priority={priority}
      onError={() => setFailed(true)}
    />
  );
}
