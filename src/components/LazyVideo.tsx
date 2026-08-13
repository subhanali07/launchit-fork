import { useEffect, useRef } from "react";

type LazyVideoProps = {
  src: string;
  poster?: string;
  alt: string;
  className?: string;
};

export function LazyVideo({ src, poster, alt, className }: LazyVideoProps) {
  const ref = useRef<HTMLVideoElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || loaded.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          loaded.current = true;
          el.src = src;
          observer.disconnect();
        }
      },
      { rootMargin: "300px 0px", threshold: 0 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={ref}
      poster={poster}
      aria-label={alt}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
    />
  );
}
