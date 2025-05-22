'use client'

import Link from 'next/link'
import styles from './Navbar.module.sass'

interface NavListProps {
  items: string[]
  className?: string
}

export default function NavList({ items, className }: NavListProps) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li className={styles.item} key={index}>
          <Link className={styles.button} href={`/${item}`}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  )
}