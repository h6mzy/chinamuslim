'use client'

import { motion } from 'motion/react'
import { useEffect } from 'react'
import styles from './Card.module.sass'
import button from './Button.module.sass'
import layout from './Layout.module.sass'
import Image from 'next/image'

export default function ExpandedCard({ project, onClose, index = 1 }: { project: any; onClose: () => void, index?:number }) {
  // Disable scroll on body and html when the expanded card is open
  useEffect(() => {
    // Lock scrolling for the whole page (html and body)
    document.documentElement.style.overflow = 'hidden';  // html
    document.body.style.overflow = 'hidden'; // body

    // Cleanup function to restore scroll when modal closes
    return () => {
      document.documentElement.style.overflow = ''; // Unlock html
      document.body.style.overflow = ''; // Unlock body
    };
  }, []);
  return (
    <motion.div
      className={styles.expandedCardWrapper}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .3, ease: 'easeInOut' }}
      onClick={onClose}
    >
      <motion.div
        layoutId={project.id}
        className={styles.expandedCard}
        initial={{ scale: .9 }}
        animate={{ scale: 1 }}
        exit={{ scale: .9, opacity: 0 }}
        transition={{ duration: .3, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.image}>
          <Image
            src={`https://i.pravatar.cc/768?img=${index+1}`}
            alt={project.title}
            fill
            className={layout.cover}
          />
          <motion.button
            aria-label="Close modal"
            className={`${button.circle} ${button.close}`}
            onClick={onClose}
            whileTap={{ y: 1 }}
          >
            x
          </motion.button>
        </div>
        <div className={styles.body}>
          <h2>{project.title}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </motion.div>
    </motion.div>
  )
}