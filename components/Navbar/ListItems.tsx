'use client'

import Link from 'next/link'
import styles from './Navbar.module.sass'

interface ListItemProps {
  label: string
  key: string
}

interface ListItemsProps {
  items: ListItemProps[]
  onClick: () => void
}

export default function ListItems({ items, onClick }: ListItemsProps) {
  return (
    <>
      {items.map((item, index) => (
        <li className={styles.item} key={index}>
          <Link
            className={styles.button}
            href={`/${item.key}`}
            onClick={onClick}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </>
  )
}