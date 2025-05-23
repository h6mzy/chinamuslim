import { projects } from '@/lib/projects'
import Link from 'next/link'
import Card from '../Card'

export default function ProjectsGrid() {
  return (
    <div className="grid">
      {projects.map((project, index) => 
        <Link key={index} href={`/project/${project.id}`}>
          <Card />
        </Link>
      )}
    </div>
  )
}