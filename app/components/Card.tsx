'use client'

import styles from './Card.module.sass'
import { motion } from 'motion/react'

export default function Card({ project = {}, index = 1 }:{ project:any, index?:number }) {
 return (
    <motion.div
      layoutId={project.id}
      className={styles.card}
      style={{ background: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .5)), url(https://i.pravatar.cc/768?img=${index+1}) center/cover no-repeat` }}
    >
      <h3>{project.title}</h3>
    </motion.div>
  )
}