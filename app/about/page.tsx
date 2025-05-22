'use client'

import { project_details } from '@/lib/project'

export default function About() {
  return (
    <main className='pad text-center'>
      <h1>About This Project</h1>
      <p>{project_details.title} Apps is an easy way to rapidly build fast modern websites or web apps.</p>
    </main>
  )
}