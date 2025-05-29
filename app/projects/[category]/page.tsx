import { projects } from '@/lib/projects'
import { notFound } from 'next/navigation'

export default async function ProjectPage({
  params,
}: {
  params: { category: string }
}) {
  const { category } = await params
  const searchTerm = category?.toLowerCase()
  const result = projects.filter((p) => p.categories.includes(searchTerm))

  if (result.length === 0) return notFound()

  return (
    <main>
      <section>
        <div className='container pad'>
          <h1>{result.length} found.</h1>
          {projects.map(p => <div key={p.id}>{p.categories.join(", ")}</div>)}
        </div>
      </section>
    </main>
  )
}
