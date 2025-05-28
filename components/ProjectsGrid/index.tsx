import { projects } from '@/lib/projects'
import Link from 'next/link'
import Card from '../Card'

export default function ProjectsGrid() {
  return (
    <div className="grid">
      {projects.map((project, index) => 
        <Link
          key={index}
          href={`/project/${project.id}`}
          className="unstyledLink"
        >
          <Card
            title={project.title}
            label={project.year}
            photoUrl={project.photoUrl}
          />
        </Link>
      )}
    </div>
  )
}