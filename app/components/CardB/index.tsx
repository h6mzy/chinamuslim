import * as React from "react"
import { memo, useRef, RefObject } from "react"
import { motion, useMotionValue } from "motion/react"
import { useRouter } from "next/navigation"
import { useInvertedBorderRadius } from "@/app/utils/useInvertedBorderRadius"
import { useScrollConstraints } from "@/app/utils/useScrollConstraints"
import { useWheelScroll } from "@/app/utils/useWheelScroll"
import { CardData } from "@/app/_lib/types"
import { ContentPlaceholder } from "./ContentPlaceholder"
import { Title } from "./Title"
import { Image } from "./Image"
import { openSpring, closeSpring } from "./animations"
import styles from "./Card.module.sass"

interface Props extends CardData {
  isSelected: boolean
}

// Distance in pixels a user has to scroll a card down before we recognise
// a swipe-to-dismiss action.
const dismissDistance = 150

export const Card = memo(
  ({
    isSelected,
    id,
    title,
    category,
    pointOfInterest,
    backgroundColor,
  }: Props) => {
    const y = useMotionValue(0)
    const zIndex = useMotionValue(isSelected ? 2 : 0)
    const router = useRouter()

    // Maintain the visual border radius when we perform the layoutTransition by inverting its scaleX/Y
    const inverted = useInvertedBorderRadius(20)

    // We'll use the opened card element to calculate the scroll constraints
    const cardRef = useRef<HTMLDivElement>(null)
    const constraints = useScrollConstraints(cardRef as RefObject<HTMLElement>, isSelected)

    function checkSwipeToDismiss() {
      if (y.get() > dismissDistance) {
        router.push("/") // Navigate back home when swipe dismissed
      }
    }

    function checkZIndex(latest: { scaleX: number }) {
      if (isSelected) {
        zIndex.set(2)
      } else if (!isSelected && latest.scaleX < 1.01) {
        zIndex.set(0)
      }
    }

    // When this card is selected, attach a wheel event listener
    const containerRef = useRef<HTMLLIElement>(null)
    useWheelScroll(containerRef as React.RefObject<Element>, y, constraints, checkSwipeToDismiss, isSelected)

    return (
      <li ref={containerRef} className={styles.card}>
        <Overlay isSelected={isSelected} />
        <div className={`${styles.cardContentContainer} ${isSelected ? styles.open : ""}`}>
          <motion.div
            ref={cardRef}
            className={styles.cardContent}
            style={{ ...inverted, zIndex, y }}
            layout
            transition={isSelected ? openSpring : closeSpring}
            drag={isSelected ? "y" : false}
            dragConstraints={constraints}
            onDrag={checkSwipeToDismiss}
            onUpdate={checkZIndex}
          >
            <Image
              id={id}
              isSelected={isSelected}
              pointOfInterest={pointOfInterest}
              backgroundColor={backgroundColor}
            />
            <Title title={title} category={category} isSelected={isSelected} />
            <ContentPlaceholder />
          </motion.div>
        </div>
        {!isSelected && (
          <a
            href={`/${id}`}
            className={styles.cardOpenLink}
            aria-label={`Open card ${title}`}
            onClick={(e) => {
              e.preventDefault()
              router.push(`/${id}`)
            }}
          />
        )}
      </li>
    )
  },
  (prev, next) => prev.isSelected === next.isSelected
)

const Overlay = ({ isSelected }: { isSelected: boolean }) => {
  const router = useRouter()  // Call hook at top level
  return (
    <motion.div
      initial={false}
      animate={{ opacity: isSelected ? 1 : 0 }}
      transition={{ duration: 0.2 }}
      style={{ pointerEvents: isSelected ? "auto" : "none" }}
      className={styles.overlay}
    >
      <a
        href="/"
        aria-label="Close card"
        onClick={(e) => {
          e.preventDefault()
          router.push("/")
        }}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </motion.div>
  )
}