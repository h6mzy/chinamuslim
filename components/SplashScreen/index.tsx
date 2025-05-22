'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import styles from './SplashScreen.module.sass'

const slides = [
  'A website run by Mariah Mah',
  'In affiliation with Xiji Welfare Charity Centre',
]

export default function SplashScreen() {
  const [visible, setVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const dontShow = localStorage.getItem('noSplash')
    if (!dontShow) {
      setVisible(true)
    }
  }, [])

  useEffect(() => {
    if (!visible) return

    if (currentSlide < slides.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentSlide((prev) => prev + 1)
      }, 2000)
      return () => clearTimeout(timeout)
    } else {
      const closeTimeout = setTimeout(() => {
        setVisible(false)
      }, 2000)
      return () => clearTimeout(closeTimeout)
    }
  }, [currentSlide, visible])

  const handleSkip = () => {
    setVisible(false)
  }

  const handleDontShow = () => {
    localStorage.setItem('noSplash', 'true')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className={styles.splash}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={styles.logo}
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <img src="/logo.png" alt="Logo" />
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className={styles.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>



          <div className={styles.buttons}>
            <button onClick={handleSkip}>Skip</button>
            <button onClick={handleDontShow}>Don’t show again</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}