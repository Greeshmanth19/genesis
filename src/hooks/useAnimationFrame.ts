export const placeholder = {};
import { useRef, useEffect, useCallback, useState } from 'react';

export function useAnimationFrame(
  callback: (deltaTime: number) => void,
  isActive: boolean = true
): void {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback]
  );

  useEffect(() => {
    if (isActive) {
      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current);
        }
      };
    }
  }, [isActive, animate]);
}

// Helper for smooth counter animations
export function useCountAnimation(
  endValue: number,
  duration: number = 2000,
  startValue: number = 0
): number {
  const [count, setCount] = useState(startValue);
  const startTimeRef = useRef<number | null>(null);

  useAnimationFrame((deltaTime) => {
    if (!startTimeRef.current) {
      startTimeRef.current = performance.now();
    }

    const elapsed = performance.now() - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);

    // Easing function (ease-out-cubic)
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentCount = startValue + (endValue - startValue) * eased;

    setCount(currentCount);

    if (progress >= 1) {
      startTimeRef.current = null;
    }
  }, count < endValue);

  return Math.round(count);
}
