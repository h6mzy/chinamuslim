import { useMotionValue } from "motion/react"
import { useEffect } from "react"

export function useInvertedScale(scaleX = useMotionValue(1), scaleY = useMotionValue(1)) {
  const invertedScaleX = useMotionValue(1)
  const invertedScaleY = useMotionValue(1)

  useEffect(() => {
    function update() {
      invertedScaleX.set(scaleX.get() === 0 ? 0 : 1 / scaleX.get())
      invertedScaleY.set(scaleY.get() === 0 ? 0 : 1 / scaleY.get())
    }

    const unsubX = scaleX.onChange(update)
    const unsubY = scaleY.onChange(update)

    update()

    return () => {
      unsubX()
      unsubY()
    }
  }, [scaleX, scaleY, invertedScaleX, invertedScaleY])

  return { scaleX: invertedScaleX, scaleY: invertedScaleY }
}