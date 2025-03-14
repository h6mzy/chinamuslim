"use client"

import { AnimatePresence } from "motion/react"
import * as motion from "motion/react-client"
import { useState } from "react"
import styles from './MobileNav.module.sass'

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(true)
  return (
    <div className={styles.container}>
      <motion.button
        className={styles.button}
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? "Hide" : "Show"}
      </motion.button>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={styles.mask}
            key="box"
            onClick={() => setIsVisible(false)}
          >
            <div className={styles.box} />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav