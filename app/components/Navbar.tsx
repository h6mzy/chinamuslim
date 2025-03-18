'use client'

import Link from 'next/link'
import styles from './Navbar.module.sass'
import { AnimatePresence } from 'motion/react'
import { useState } from 'react'
import * as motion from 'motion/react-client'

const leftNav = ["watch", "contact"]
const rightNav = ["zakat", "projects", "testimonials"]

const Logo = () => (
  <div className={styles.logo}>
    <strong className={styles.logoStrong}>Chinamuslim</strong>.help
  </div>
)

const Donate = () => (
  <Link className={styles.donateButton} href={`/donate`}>donate</Link>
)

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <header className={styles.navbar}>
      <div className={styles.navSpacer} />
      <nav className={styles.nav}>
        <ul className={styles.leftList}>
          <li className={styles.item}>
            <Donate />
          </li>
          {leftNav.map((item, key) =>
            <li className={styles.item} key={key}>
              <Link className={styles.button} href={`/${item}`}>{item}</Link>
            </li>
          )}
        </ul>
      </nav>
      <Link href="/" className={styles.homeLink}>
        <Logo />
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.rightList}>
          {rightNav.map((item, key) =>
            <li className={styles.item} key={key}>
              <Link className={styles.button} href={`/${item}`}>{item}</Link>
            </li>
          )}
        </ul>
      </nav>
      <div className={styles.container}>
        <motion.button
          className={styles.menuButton}
          onClick={() => setIsVisible(true)}
          whileTap={{ y: 1 }}
        >
          O
        </motion.button>
        <AnimatePresence initial={false}>
          {isVisible ? (
            <motion.div
              initial={{ opacity: 0 }}//, scale: 0 }}
              animate={{ opacity: 1 }}//, scale: 1 }}
              exit={{ opacity: 0 }}//, scale: 0 }}
              transition={{ duration: .2 }}
              className={styles.mask}
              key="box"
            >
              <div className={styles.box}>
                <div className={styles.navbar}>
                  <div className={styles.navSpacer} />
                  <Logo />
                  <motion.button
                    className={styles.menuButton}
                    onClick={() => setIsVisible(false)}
                    whileTap={{ y: 1 }}
                  >
                    X
                  </motion.button>
                </div>
                <div className={styles.divider} />
                <nav className={styles.mobileNav}>
                  <ul className={styles.leftList}>
                    <li className={styles.item}>
                      <Donate />
                    </li>
                    {leftNav.concat(rightNav).map((item, key) =>
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
    </header>
  )
}

export default Navbar