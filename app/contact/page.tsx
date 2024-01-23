import { project_details } from '../_lib/project'

export default function About() {
  return (
    <main className='pad text-center'>
      <h1>Contact</h1>
      <p>For enquiries, please mail us at <a href={`mailto:${project_details.email}`}>{project_details.email}</a></p>
    </main>
  )
}