import ProjectsPage from '@/app/projects/page'

export default function CategoryProjectsPage({ params }: { params: { category: string } }) {
 const { category } = params
  return (
    <ProjectsPage params={{category}} />
  )
}