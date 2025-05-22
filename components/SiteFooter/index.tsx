'use client'

import { project_details } from '../../lib/project'
import dayjs from 'dayjs'
import styles from '@/styles/Layout.module.sass'

const SiteFooter = () => {
  return (
    <div className={styles.pad}>
      <span>&copy; {dayjs().format('YYYY')} {project_details.title}</span>
    </div>
  )
}

export default SiteFooter