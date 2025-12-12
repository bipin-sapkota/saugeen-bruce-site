"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

const PLACEHOLDER_IMAGE = "/images/placeholder.jpg";

type CarouselImage = {
  src: string;
  alt: string;
};

type ImageCarouselProps = {
  title?: string;
  images: CarouselImage[];
  intervalMs?: number;
};

export function ImageCarousel({ title, images, intervalMs = 1000 }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const reduceMotion = useReducedMotion();

  const activeInterval = reduceMotion ? null : intervalMs;

  useEffect(() => {
    if (activeInterval === null || isPaused || images.length === 0) return undefined;
    const timeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, activeInterval);
    return () => clearTimeout(timeout);
  }, [activeInterval, isPaused, images.length]);

  const activeIndex = images.length ? current % images.length : 0;

  const transitionClass = reduceMotion
    ? ""
    : "transition-opacity duration-700 ease-in-out";

  const statusLabel = isPaused ? "paused" : "playing";

  const logMissingImage = (src: string) => {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[ImageCarousel] Failed to load "${src}", falling back to placeholder.`);
    }
  };

  const handleImageError = (src: string) => {
    if (failedImages[src]) return;
    logMissingImage(src);
    setFailedImages((prev) => ({ ...prev, [src]: true }));
  };

  const handleDot = (index: number) => {
    setCurrent(index);
    setIsPaused(true);
  };

  if (!images.length) {
    return null;
  }

  return (
    <div
      className="relative overflow-hidden rounded-[1.75rem] border border-border bg-surface shadow-[0_20px_45px_rgba(15,31,27,0.15)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(Boolean(reduceMotion))}
    >
      {title && (
        <p className="px-6 pt-6 text-xs uppercase tracking-[0.4em] text-muted">{title}</p>
      )}
      <div className="px-6 pb-6 pt-4">
        <div className="relative w-full overflow-hidden rounded-[1.4rem] bg-surface aspect-[4/3] lg:aspect-[16/9]">
          {images.map((image, index) => {
            const isActive = index === activeIndex;
            const resolvedSrc = failedImages[image.src] ? PLACEHOLDER_IMAGE : image.src;
            return (
              <div
                key={`${image.src}-${index}`}
                className={`absolute inset-0 ${transitionClass} ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!isActive}
              >
                <Image
                  src={resolvedSrc}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 1024px, 100vw"
                  className="w-full h-full object-contain"
                  priority={index === 0}
                  onError={() => handleImageError(image.src)}
                />
              </div>
            );
          })}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 px-4">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleDot(index)}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-accent" : "bg-border/60"
                }`}
                aria-label={`Show image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={() => setIsPaused((prev) => !prev)}
            className="text-xs font-semibold uppercase tracking-[0.4em] text-muted"
            aria-label={`Carousel is currently ${statusLabel}; click to ${
              isPaused ? "play" : "pause"
            }.`}
          >
            {isPaused ? "Play" : "Pause"}
          </button>
        </div>
      </div>
    </div>
  );
}
