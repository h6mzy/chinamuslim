'use client'

import { AnimatePresence, motion, usePresenceData, wrap } from 'motion/react'
import React, { forwardRef, SVGProps, useState } from 'react'
import styles from './Slides.module.sass'

const Slides = ({
  items = [],
  slidesToShow = 1,
  loop = true, // Add loop prop (default is true)
}: {
  items?: any[]
  slidesToShow?: number
  loop?: boolean // Option to control looping behavior
}) => {
  const [direction, setDirection] = useState<1 | -1>(1)
  const [selectedIndex, setSelectedIndex] = useState(0)

  // tofix: looping
  function setSlide(newDirection: 1 | -1) {
    let nextIndex = selectedIndex + newDirection
    if (loop) {
      // Looping logic: Use wrap to cycle through slides if 'loop' is true
      nextIndex = wrap(0, items.length - slidesToShow, nextIndex)
    } else {
      // Non-looping logic: Prevent index from going out of bounds
      if (nextIndex < 0) nextIndex = 0
      if (nextIndex >= items.length) nextIndex = items.length - slidesToShow
    }
    setSelectedIndex(nextIndex)
    setDirection(newDirection)
  }

  // Calculate the range of items to display
  const visibleItems = items.slice(selectedIndex, selectedIndex + slidesToShow)

  return (
    <div className={styles.container}>
      <motion.button
        initial={false}
        aria-label="Previous"
        className={styles.button} // tofix - disable at the end of no-loop
        onClick={() => setSlide(-1)}
        whileFocus={{ outline: '1px solid var(--primary-color)' }}
        whileTap={{ scale: .9 }}
      >
        <ArrowLeft />
      </motion.button>

      <AnimatePresence custom={direction} initial={false} mode="popLayout">
        {visibleItems.map((item, index) => (
          <Slide key={selectedIndex + index}>{item}</Slide>
        ))}
      </AnimatePresence>

      <motion.button
        initial={false}
        aria-label="Next"
        className={styles.button}
        onClick={() => setSlide(1)}
        whileFocus={{ outline: '1px solid var(--primary-color)' }}
        whileTap={{ scale: .9 }}
      >
        <ArrowRight />
      </motion.button>
    </div>
  )
}

export default Slides

const Slide = forwardRef<HTMLDivElement, { children?: React.ReactNode }>(
  ({ children }, ref) => {
    const direction = usePresenceData()
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: direction * 50 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: {
            delay: .2,
            type: 'spring',
            visualDuration: .3,
            bounce: .4,
          },
        }}
        exit={{ opacity: 0, x: direction * -50 }}
      >
        {children && React.isValidElement(children) ? 
          React.cloneElement(children) // Clone and pass ref to child element
          : null
        }
      </motion.div>
    )
  }
)

// icons
const iconsProps: SVGProps<SVGSVGElement> = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1",
  strokeLinecap: "round",
  strokeLinejoin: "round",
}

function ArrowLeft() {
  return (
    <svg {...iconsProps}>
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg {...iconsProps}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}