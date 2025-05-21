import { useState, useEffect, RefObject } from "react";

interface Constraints {
  top: number;
  bottom: number;
}

/**
 * Calculate the top/bottom scroll constraints of a full-screen element vs the viewport
 *
 * @param ref - RefObject of the element to measure constraints for
 * @param measureConstraints - Whether to measure and update constraints
 * @returns Constraints object with top and bottom scroll limits
 */
export function useScrollConstraints(
  ref: RefObject<HTMLElement>,
  measureConstraints: boolean
): Constraints {
  const [constraints, setConstraints] = useState<Constraints>({
    top: 0,
    bottom: 0
  });

  useEffect(() => {
    if (!measureConstraints) return;

    const element = ref.current;
    if (!element) return;

    const viewportHeight = window.innerHeight;
    const contentTop = element.offsetTop;
    const contentHeight = element.offsetHeight;
    const scrollableViewport = viewportHeight - contentTop * 2;

    // Calculate top constraint as negative max scroll offset; bottom is zero
    const top = Math.min(scrollableViewport - contentHeight, 0);

    setConstraints({ top, bottom: 0 });

    // Optional: handle window resize to recalc constraints
    function onResize() {
      if (!element) return;

      const viewportHeight = window.innerHeight;
      const contentTop = element.offsetTop;
      const contentHeight = element.offsetHeight;
      const scrollableViewport = viewportHeight - contentTop * 2;
      const top = Math.min(scrollableViewport - contentHeight, 0);

      setConstraints({ top, bottom: 0 });
    }

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    }
  }, [ref, measureConstraints]);

  return constraints;
}