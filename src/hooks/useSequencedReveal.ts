import { useEffect, useState } from "react";

interface UseSequencedRevealOptions {
  startDelay?: number;
  interval?: number;
  active?: boolean;
  prefersReducedMotion?: boolean;
}

export function useSequencedReveal(
  count: number,
  {
    startDelay = 400,
    interval = 900,
    active = true,
    prefersReducedMotion = false,
  }: UseSequencedRevealOptions = {}
) {
  const [visibleCount, setVisibleCount] = useState(() =>
    prefersReducedMotion ? count : 0
  );

  useEffect(() => {
    if (!active) {
      setVisibleCount(prefersReducedMotion ? count : 0);
      return;
    }

    if (prefersReducedMotion) {
      setVisibleCount(count);
      return;
    }

    setVisibleCount(0);
    const timers: number[] = [];

    for (let index = 0; index < count; index += 1) {
      const timeoutId = window.setTimeout(() => {
        setVisibleCount((previous) => Math.max(previous, index + 1));
      }, startDelay + interval * index);

      timers.push(timeoutId);
    }

    return () => {
      timers.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [count, startDelay, interval, active, prefersReducedMotion]);

  return visibleCount;
}
