'use client'

import { motion } from 'motion/react'
import styles from './Card.module.sass'

export default function ExpandedCard({ title, onClose }: { title: string; onClose: () => void }) {
  return (
    <motion.div
      layoutId={title}
      className={styles.expandedCard}
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>{title}</h2>
      <p>More details about {title}...</p>
    </motion.div>
  )
}