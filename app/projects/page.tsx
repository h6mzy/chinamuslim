import ProjectsGrid from '@/components/ProjectsGrid'
import { categories } from '@/lib/categories'
import { projects } from '@/lib/projects'
import CategoryFilter from '@/components/CategoryFilter'

export default async function ProjectsPage({ 
  params
}: { 
  params: Promise<{ category?: string }>
}) {
  const { category = '' } = await params
  const selectedCategory = category || ''

  const searchTerm = selectedCategory.toLowerCase()
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.categories.includes(searchTerm))
    : projects

  const categoryLabel =
    categories.find((c) => c.id === selectedCategory)?.label ?? ''

  return (
    <main>
      <section>
        <div className="container pad">
          <div className="textCenter">
            <h1><strong>{categoryLabel}</strong> Projects</h1>
            <p className="textWeak">{filteredProjects.length} found.</p>
          </div>

          <div className="padBottom">
            <div className="grid" style={{ rowGap: 0 }}>
              <div />
              <CategoryFilter value={selectedCategory} />
              <div />
            </div>
          </div>

          <ProjectsGrid categories={selectedCategory ? [selectedCategory] : []} />
        </div>
      </section>
    </main>
  )
}