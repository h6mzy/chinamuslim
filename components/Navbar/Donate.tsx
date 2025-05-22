'use client'

import Link from 'next/link'
import styles from './Navbar.module.sass'

export default function Donate() {
  return (
    <Link className={styles.donateButton} href="/donate">
      donate
    </Link>
  )
}