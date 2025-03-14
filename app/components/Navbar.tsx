'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './Navbar.module.sass'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Toggle the menu open/close
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className={styles.navbar}>
      <motion.div
        className={styles.logo}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Your logo here */}
        <h1>My Brand</h1>
      </motion.div>

      <motion.div
        className={`${styles.menuIcon} ${isOpen ? styles.open : ''}`}
        onClick={toggleMenu}
        whileTap={{ scale: 0.9 }}
      >
        {/* The hamburger icon */}
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </motion.div>

      <motion.ul
        className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <li className={styles.navItem}><a className={styles.navLink} href="/">Home</a></li>
        <li className={styles.navItem}><a className={styles.navLink} href="/about">About</a></li>
        <li className={styles.navItem}><a className={styles.navLink} href="/projects">Projects</a></li>
        <li className={styles.navItem}><a className={styles.navLink} href="/donate">Donate</a></li>
      </motion.ul>
    </nav>
  )
}

export default Navbar
