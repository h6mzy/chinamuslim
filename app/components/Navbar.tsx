'use client'

import MobileNav from './MobileNav'
import styles from './Navbar.module.sass'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>My Brand</div>
      <MobileNav />
    </nav>
  )
}

export default Navbar