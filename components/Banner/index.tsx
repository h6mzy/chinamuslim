import { ReactNode } from 'react'
import styles from './Banner.module.sass'
import { isString } from '@/utils/isString'

interface BannerProps {
  title?: string | ReactNode
  label?: string | ReactNode
  photoUrl?: string
}

export default function Card({ title, label, photoUrl }: BannerProps) {
  return (
    <div className={styles.banner}>
      {photoUrl && <img src={photoUrl} alt="Banner Image" className={styles.photo} />}
      
      <div className="container relative">
        <header className={`${styles.meta} smallGap`}>
          {label &&
            (isString(label) ? (
              <h2 className={styles.label}>{label}</h2>
            ) : (
              <div className={styles.label}>{label}</div>
            ))}

          {title &&
            (isString(title) ? (
              <h1 className={styles.title}>{title}</h1>
            ) : (
              <div className={styles.title}>{title}</div>
            ))}
        </header>
      </div>
    </div>
  )
}