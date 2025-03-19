'use client'

import dayjs from 'dayjs'
import { project_details } from '../_lib/project'
import styles from './Layout.module.sass'

const SiteFooter = () => {
  return (
    <div className={styles.pad}>
      <span>&copy; {dayjs().format('YYYY')} {project_details.title}</span>
    </div>
  )
}

export default SiteFooter