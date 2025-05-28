'use client'

import Link from 'next/link'
import styles from './Navbar.module.sass'

export default function Donate({ onClick }: { onClick: () => void }) {
  return (
    <Link
      className={styles.donateButton}
      href="/donate"
      onClick={onClick}
    >
      donate
    </Link>
  )
}