// src/hooks/useMediaQuery.ts
import { useState, useEffect } from 'react';

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    if (media.addEventListener) {
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    } else {
      // Fallback for older browsers
      media.addListener(listener);
      return () => media.removeListener(listener);
    }
  }, [matches, query]);

  return matches;
}

// Predefined breakpoints
export const useIsSmallScreen = () => useMediaQuery('(max-width: 640px)');
export const useIsMediumScreen = () => useMediaQuery('(max-width: 768px)');
export const useIsLargeScreen = () => useMediaQuery('(max-width: 1024px)');
export const useIsXLargeScreen = () => useMediaQuery('(max-width: 1280px)');
