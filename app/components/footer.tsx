'use client'

import { Footer } from 'antd-mobile'
import dayjs from 'dayjs'
import { project_details } from '../_lib/project'

const SiteFooter = () => {
  return (
    <Footer className='pad-x' label={<span>&copy; {dayjs().format('YYYY')} {project_details.title}</span>} />
  )
}

export default SiteFooter