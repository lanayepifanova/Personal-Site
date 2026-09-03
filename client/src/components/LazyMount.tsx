import { useEffect, useRef, useState, type ReactNode } from "react";

// The single page holds a map plus dozens of Instagram/LinkedIn embeds. Each
// heavy section waits until it is nearly on screen before it mounts, so the
// first paint and the scroll itself stay quick.
export default function LazyMount({
  children,
  minHeight = 640,
  rootMargin = "800px",
}: {
  children: ReactNode;
  minHeight?: number;
  rootMargin?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) return;

    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setMounted(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setMounted(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [mounted, rootMargin]);

  return (
    <div ref={ref} style={mounted ? undefined : { minHeight }}>
      {mounted ? children : null}
    </div>
  );
}
