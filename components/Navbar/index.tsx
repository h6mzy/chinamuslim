'use client'

import { AnimatePresence } from 'motion/react'
import * as motion from 'motion/react-client'
import styles from './Navbar.module.sass'
import Logo from './Logo'
import Donate from './Donate'
import NavList from './NavList'
import { useMenuToggle } from './hooks'

const leftNav = ["watch", "contact"]
const rightNav = ["zakat", "projects", "testimonials"]

export default function Navbar() {
  const { isVisible, open, close } = useMenuToggle()

  return (
    <header className={styles.navbar}>
      <div className={styles.navSpacer} />
      
      {/* Left navigation */}
      <nav className={styles.nav}>
        <ul className={styles.leftList}>
          <li className={styles.item}>
            <Donate />
          </li>
          <NavList items={leftNav} />
        </ul>
      </nav>
      
      {/* Logo linking to home */}
      <a href="/" className={styles.homeLink}>
        <Logo />
      </a>
      
      {/* Right navigation */}
      <nav className={styles.nav}>
        <NavList items={rightNav} className={styles.rightList} />
      </nav>
      
      {/* Mobile menu toggle button */}
      <div className={styles.container}>
        <motion.button
          aria-label="Open menu"
          className={styles.menuButton}
          onClick={open}
          whileTap={{ y: 1 }}
        >
          <span className={styles.lines}>&nbsp;</span>
        </motion.button>

        {/* Mobile menu with animation */}
        <AnimatePresence initial={false}>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: .2 }}
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
                      <Donate />
                    </li>
                    {/* Combined nav items */}
                    <NavList items={leftNav.concat(rightNav)} />
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