'use client'

import { useState } from 'react'

export function useMenuToggle() {
  const [isVisible, setIsVisible] = useState(false)
  const open = () => setIsVisible(true)
  const close = () => setIsVisible(false)
  return { isVisible, open, close }
}