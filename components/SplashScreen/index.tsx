'use client'

import { motion, AnimatePresence } from 'motion/react'
import styles from './SplashScreen.module.sass'
import { slides } from './splashSlides'
import { useSplashVisibility, useSlideProgression } from './hooks'
import { splashFade, logoAnim, textAnim } from './animations'

export default function SplashScreen() {
  const { visible, setVisible } = useSplashVisibility()
  const { currentSlide } = useSlideProgression(visible, setVisible)

  const handleSkip = () => setVisible(false)

  const handleDontShow = () => {
    const days = 7
    const expiry = Date.now() + days * 24 * 60 * 60 * 1000
    localStorage.setItem('noSplashUntil', expiry.toString())
    setVisible(false)
  }

  return (
    <>
      {process.env.NODE_ENV === 'development' && (
        <div className={styles.devTools}>
          <button
            className="fullWidth"
            onClick={() => {
              localStorage.removeItem('noSplashUntil')
              window.location.reload()
            }}
          >
            🔄 Reset Splash
          </button>
        </div>
      )}
      <AnimatePresence>
        {visible && (
          <motion.div className={styles.splash} {...splashFade}>
            <div className={styles.content}>
              <motion.div className={styles.logo} {...logoAnim}>
                <img src="/images/chinamuslim.svg" alt="Hands making doa" />
                <h4><strong>Chinamuslim</strong>.help</h4>
              </motion.div>
              <div className={styles.textWrapper}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className={styles.text}
                    {...textAnim}
                  >
                    {slides[currentSlide]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            <div className={styles.buttons}>
              <button className='whiteButton' onClick={handleSkip}>Skip</button>
              <button className='whiteButton' onClick={handleDontShow}>Don’t show again</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}