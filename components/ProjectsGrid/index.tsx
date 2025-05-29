import { projects } from '@/lib/projects'
import Link from 'next/link'
import Card from '../Card'

interface ProjectsGridProps {
  categories?: string[]
}

export default function ProjectsGrid({ categories }: ProjectsGridProps) {
  const lowerCategories = categories?.map(c => c.toLowerCase())

  const filteredProjects = !lowerCategories || lowerCategories.length === 0
    ? projects
    : projects.filter(project =>
        project.categories.some(cat =>
          lowerCategories.includes(cat.toLowerCase())
        )
      )

  return (
    <div className="grid">
      {filteredProjects.map((project, index) => (
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
      ))}
    </div>
  )
}