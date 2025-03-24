'use client'

import styles from './Card.module.sass'
import { useState } from 'react'
import { motion } from 'motion/react'

export default function Card({ title = 'Title', layoutId = '' }:{ title:string, layoutId?:string }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <motion.div layoutId={title} className={styles.card}>
    {/*}  className={styles.card}
      layoutId={title} // Unique identifier for shared layout
      onClick={() => setIsOpen(true)} // Open on click
    >*/}
      <div>{title}</div>
    </motion.div>
  )
}