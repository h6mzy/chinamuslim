"use client"

import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import { ReactNode, useState } from 'react'
import Link from 'next/link'
import styles from './MobileNav.module.sass'

const MobileNav = ({ logo = null, items = [] }: { logo: ReactNode, items:string[] }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className={styles.container}>
      <motion.button
        className={styles.button}
        onClick={() => setIsVisible(!isVisible)}
        whileTap={{ y: 1 }}
      >
        {isVisible ? 'Hide' : 'Show'}
      </motion.button>
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: .2 }}
            className={styles.mask}
            key="box"
            onClick={() => setIsVisible(false)}
          >
            <div className={`flex column nowrap alignCenter fullWidth fullHeight ${styles.box}`}>
              {logo}
              <nav className={styles.nav}>
                <ul className={styles.leftList}>
                  <li className={styles.item}>
                    <Link className={styles.donateButton} href={`/donate`}>donate</Link>
                  </li>
                  {items.map((item, key) =>
                    <li className={styles.item} key={key}>
                      <Link className={styles.button} href={`/${item}`}>{item}</Link>
                    </li>
                  )}
                </ul>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

export default MobileNav