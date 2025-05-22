'use client'

import styles from './Navbar.module.sass'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <img src="/images/chinamuslim.svg" alt="Chinamuslim logo" />
      <span>
        <strong className={styles.logoStrong}>Chinamuslim</strong>.help
      </span>
    </div>
  )
}