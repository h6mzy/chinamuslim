'use client'

import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import styles from './Navbar.module.sass'
import Logo from './Logo'
import Donate from './Donate'
import ListItems from './ListItems'
import { useMenuToggle } from './hooks'
import { fadeInOut, tapEffect } from './animations'
import { leftNav, rightNav, mobileNav } from './navItems'

export default function Navbar() {
  const { isVisible, open, close } = useMenuToggle()

  return (
    <header className={styles.navbar}>
      <div className={styles.navSpacer} />
      
      {/* Left navigation */}
      <nav className={styles.nav}>
        <ul className={styles.leftList}>
          <li className={styles.item}>
            <Donate onClick={close} />
          </li>
          <ListItems onClick={close} items={leftNav} />
        </ul>
      </nav>
      
      {/* Logo linking to home */}
      <a href="/" className={styles.homeLink}>
        <Logo />
      </a>
      
      {/* Right navigation */}
      <nav className={styles.nav}>
        <ul className={styles.rightList}>
          <ListItems onClick={close} items={rightNav} />
        </ul>
      </nav>
      
      {/* Mobile menu toggle button */}
      <div className={styles.container}>
        <motion.button
          aria-label="Open menu"
          className={styles.menuButton}
          onClick={open}
          {...tapEffect}
        >
          <span className={styles.lines}>&nbsp;</span>
        </motion.button>

        {/* Mobile menu with animation */}
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              {...fadeInOut}
              className={styles.mask}
              key="mobile-menu"
            >
              <div className={styles.box}>
                <div className={styles.navbar}>
                  <div className={styles.navSpacer} />
                  <Logo />
                  <motion.button
                    aria-label="Close menu"
                    className={styles.closeButton}
                    onClick={close}
                    whileTap={{ y: 1 }}
                  >
                    <span className={styles.lines}>&nbsp;</span>
                  </motion.button>
                </div>
                <div className={styles.divider} />
                <nav className={styles.mobileNav}>
                  <ul className={styles.leftList}>
                    <li className={styles.item}>
                      <Donate onClick={close} />
                    </li>
                    {/* Combined nav items */}
                    <ListItems onClick={close} items={mobileNav} />
                  </ul>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}