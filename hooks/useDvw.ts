'use client'

import { useState, useEffect } from 'react'

export function useDvw() {
  const [dvw, setDvw] = useState<number>(window.innerWidth / document.documentElement.clientWidth * 100)
  useEffect(() => {
    const updateDvw = () => {
      setDvw(window.innerWidth / document.documentElement.clientWidth * 100)
    }
    window.addEventListener('resize', updateDvw)
    updateDvw() // Set initial dvw
    return () => window.removeEventListener('resize', updateDvw)
  }, [])
  return dvw
}