import * as React from "react"
import { motion } from "motion/react"
import { closeSpring } from "./animations"
import { useInvertedScale } from "@/app/utils/useInvertedScale"
import styles from "./Card.module.sass"

interface ImageProps {
  id: string
  isSelected: boolean
  pointOfInterest?: number
  backgroundColor?: string
}

export const Image: React.FC<ImageProps> = ({
  id,
  isSelected,
  pointOfInterest = 0,
  backgroundColor
}) => {
  const inverted = useInvertedScale()

  return (
    <motion.div
      className={styles.cardImageContainer}
      style={{ ...inverted, backgroundColor, originX: 0, originY: 0 }}
    >
      <motion.img
        className={styles.cardImage}
        src={`/images/demo/${id}.jpg`}
        alt=""
        initial={false}
        animate={
          isSelected ? { x: -20, y: -20 } : { x: -pointOfInterest, y: 0 }
        }
        transition={closeSpring}
      />
    </motion.div>
  )
}