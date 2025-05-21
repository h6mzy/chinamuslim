import { RefObject, useEffect } from "react";
import { animate, MotionValue } from "motion";

interface Constraints {
  top: number;
  bottom: number;
}

const deltaThreshold = 5;
const elasticFactor = 0.2;

function lerp(a: number, b: number, t: number): number {
  return a * (1 - t) + b * t;
}

function springTo(value: MotionValue<number>, from: number, to: number) {
  animate(from, to, {
    type: "spring",
    stiffness: 400,
    damping: 40,
    velocity: 0,
    onUpdate: (v) => value.set(v),
  });
}

export function useWheelScroll(
  ref: RefObject<Element>,
  y: MotionValue<number>,
  constraints: Constraints | null,
  onWheelCallback: (e: WheelEvent) => void,
  isActive: boolean
) {
  useEffect(() => {
    if (!isActive || !ref.current) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();

      const currentY = y.get();
      let newY = currentY - event.deltaY;
      let startedAnimation = false;

      const isWithinBounds =
        constraints && newY >= constraints.top && newY <= constraints.bottom;

      if (constraints && !isWithinBounds) {
        newY = lerp(currentY, newY, elasticFactor);

        if (newY < constraints.top && event.deltaY <= deltaThreshold) {
          springTo(y, newY, constraints.top);
          startedAnimation = true;
        }

        if (newY > constraints.bottom && event.deltaY >= -deltaThreshold) {
          springTo(y, newY, constraints.bottom);
          startedAnimation = true;
        }
      }

      if (!startedAnimation) {
        y.set(newY);
      }

      onWheelCallback(event);
    };

    const el = ref.current;
    el.addEventListener("wheel", onWheel as EventListener, { passive: false });

    return () => {
      el.removeEventListener("wheel", onWheel as EventListener);
    };
  }, [ref, y, constraints, onWheelCallback, isActive]);
}