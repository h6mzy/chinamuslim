'use client'

import { project_details } from '../../lib/project'
import dayjs from 'dayjs'

const SiteFooter = () => {
  return (
    <div className="container pad textCenter">
      <span>&copy; {dayjs().format('YYYY')} {project_details.title}</span>
    </div>
  )
}

export default SiteFooter