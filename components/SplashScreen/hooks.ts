import { useEffect, useState } from 'react'
import { slides } from './splashSlides'

export function useSplashVisibility() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const expiry = localStorage.getItem('noSplashUntil')
    const now = Date.now()
    if (!expiry || now > Number(expiry)) {
      setVisible(true)
    }
  }, [])

  return { visible, setVisible }
}

export function useSlideProgression(visible: boolean, setVisible: (v: boolean) => void) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (!visible) return

    if (currentSlide < slides.length - 1) {
      const timeout = setTimeout(() => {
        setCurrentSlide((prev) => prev + 1)
      }, 3000)
      return () => clearTimeout(timeout)
    } else {
      const closeTimeout = setTimeout(() => {
        setVisible(false) // ✅ closes splash after last slide
      }, 3000)
      return () => clearTimeout(closeTimeout)
    }
  }, [currentSlide, visible, setVisible])

  return { currentSlide }
}