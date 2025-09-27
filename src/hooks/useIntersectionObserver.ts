import { useEffect, useRef, useState } from 'react';

interface IntersectionOptions extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options?: IntersectionOptions
): [React.RefObject<HTMLDivElement>, IntersectionObserverEntry | undefined] {
  const elementRef = useRef<HTMLDivElement>(null);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const {
    threshold = 0,
    root = null,
    rootMargin = '0%',
    freezeOnceVisible = false,
  } = options || {};

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  useEffect(() => {
    const node = elementRef.current;
    if (!node || frozen) return;

    const observer = new IntersectionObserver(([entry]) => setEntry(entry), {
      threshold,
      root,
      rootMargin,
    });

    observer.observe(node);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, frozen]);

  return [elementRef, entry];
}

// Helper hook for common visibility detection
export function useIsVisible(options?: IntersectionOptions): {
  ref: React.RefObject<HTMLDivElement>;
  isVisible: boolean;
  hasBeenVisible: boolean;
} {
  const [ref, entry] = useIntersectionObserver(options);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const isVisible = !!entry?.isIntersecting;

  useEffect(() => {
    if (isVisible && !hasBeenVisible) {
      setHasBeenVisible(true);
    }
  }, [isVisible, hasBeenVisible]);

  return { ref, isVisible, hasBeenVisible };
}
