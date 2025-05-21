import * as React from "react"
import { motion, useMotionValue } from "motion/react"
import { useInvertedScale } from "@/app/utils/useInvertedScale"
import styles from "./Card.module.sass"

export const ContentPlaceholder = React.memo(() => {
  const scaleX = useMotionValue(1)
  const scaleY = useMotionValue(1)
  const inverted = useInvertedScale(scaleX, scaleY)

  return (
    <motion.div
      className={styles.contentContainer}
      style={{ ...inverted, originX: 0, originY: 0 }}
    >
      <p className={styles.p}>
        {/* Replace with your own placeholder text */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
        Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.
      </p>
    </motion.div>
  )
})