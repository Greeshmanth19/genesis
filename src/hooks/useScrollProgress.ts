export const placeholder = {}; // src/hooks/useScrollProgress.ts
import { useState, useEffect } from 'react';

interface ScrollProgress {
  progress: number;
  isScrolling: boolean;
  scrollY: number;
  scrollDirection: 'up' | 'down' | null;
}

export function useScrollProgress(): ScrollProgress {
  const [scrollProgress, setScrollProgress] = useState<ScrollProgress>({
    progress: 0,
    isScrolling: false,
    scrollY: 0,
    scrollDirection: null,
  });

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const progress = scrollableHeight > 0 ? (currentScrollY / scrollableHeight) * 100 : 0;

      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';

      setScrollProgress({
        progress: Math.min(100, Math.max(0, progress)),
        isScrolling: true,
        scrollY: currentScrollY,
        scrollDirection,
      });

      lastScrollY = currentScrollY;

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrollProgress((prev) => ({ ...prev, isScrolling: false }));
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return scrollProgress;
}
