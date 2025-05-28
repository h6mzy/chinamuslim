import { ReactNode } from 'react'
import styles from './Card.module.sass'
import { isString } from '@/utils/isString'

interface CardProps {
  title?: string | ReactNode
  label?: string | ReactNode
  photoUrl?: string
  children?: ReactNode
}

export default function Card({ title, label, photoUrl, children }: CardProps) {
  return (
    <div className={styles.card}>
      {photoUrl && <img src={photoUrl} alt="Card Image" className={styles.photo} />}
      
      <header className={`${styles.meta} smallGap`}>
        {label &&
          (isString(label) ? (
            <h4 className={styles.label}>{label}</h4>
          ) : (
            <div className={styles.label}>{label}</div>
          ))}

        {title &&
          (isString(title) ? (
            <h3 className={styles.title}>{title}</h3>
          ) : (
            <div className={styles.title}>{title}</div>
          ))}
      </header>

      {children && <div className={styles.children}>{children}</div>}
    </div>
  )
}