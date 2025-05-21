import { useMotionValue } from "motion/react"
import { useInvertedScale } from "./useInvertedScale"
import { useEffect } from "react"

/**
 * Hook to create an inverted border radius value that compensates for scale transforms.
 *
 * @param radius - The original border radius in pixels
 * @returns Object with scale motion values and inverted border radius motion values
 */
export function useInvertedBorderRadius(radius: number) {
  const scaleX = useMotionValue(1)
  const scaleY = useMotionValue(1)
  const inverted = useInvertedScale(scaleX, scaleY)
  const borderRadius = useMotionValue(`${radius}px`)

  useEffect(() => {
    function updateRadius() {
      const latestX = inverted.scaleX.get()
      const latestY = inverted.scaleY.get()
      borderRadius.set(`${latestX * radius}px ${latestY * radius}px`)
    }

    const unsubX = inverted.scaleX.onChange(updateRadius)
    const unsubY = inverted.scaleY.onChange(updateRadius)

    updateRadius()

    return () => {
      unsubX()
      unsubY()
    }
  }, [radius, inverted.scaleX, inverted.scaleY, borderRadius])

  return {
    scaleX,
    scaleY,
    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
  }
}