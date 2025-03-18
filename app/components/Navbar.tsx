'use client'

import Link from 'next/link'
import MobileNav from './MobileNav'
import styles from './Navbar.module.sass'

const leftNav = ["watch", "contact"]
const rightNav = ["zakat", "projects", "testimonials"]

const Logo = () => (
  <div><strong className={styles.logoStrong}>Chinamuslim</strong>.help</div>
)

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav className={styles.nav} id='left-nav'>
        <ul className={styles.leftList}>
          <li className={styles.item}>
            <Link className={styles.donateButton} href={`/donate`}>donate</Link>
          </li>
          {leftNav.map((item, key) =>
            <li className={styles.item} key={key}>
              <Link className={styles.button} href={`/${item}`}>{item}</Link>
            </li>
          )}
        </ul>
      </nav>
      <Link href="/" className={styles.logo}>
        <Logo />
      </Link>
      <nav className={styles.nav} id='right-nav'>
        <ul className={styles.rightList}>
          {rightNav.map((item, key) =>
            <li className={styles.item} key={key}>
              <Link className={styles.button} href={`/${item}`}>{item}</Link>
            </li>
          )}
        </ul>
      </nav>
      <MobileNav logo={<Logo />} items={leftNav.concat(rightNav)} />
    </header>
  )
}

export default Navbar