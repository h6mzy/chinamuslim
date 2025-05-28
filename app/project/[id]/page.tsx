import Banner from '@/components/Banner'
import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) return notFound()

  return (
    <main>
      <section>
        <Banner
          title={project.title}
          label={project.year}
          photoUrl={project.photoUrl}
        />
      </section>
      <section>
        <div className='container pad'>
          <div dangerouslySetInnerHTML={{ __html: project.description }} />
        </div>
      </section>
    </main>
  )
}
