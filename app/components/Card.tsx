'use client'

import styles from './Card.module.sass'
import { motion } from 'motion/react'

export default function Card({ title = 'Title' }:{ title:string }) {
 return (
    <motion.div layoutId={title} className={styles.card}>
      <div>{title}</div>
    </motion.div>
  )
}