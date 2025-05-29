'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ProjectsGrid from '@/components/ProjectsGrid'
import { categories } from '@/lib/categories'
import { projects } from '@/lib/projects'

export default function ProjectsPage({ params }: { params: { category: string } }) {
  const router = useRouter()
  const { category } = params
  const [selectedCategory, setSelectedCategory] = useState(category)

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = e.target.value
    setSelectedCategory(selected)
    router.push(selected ? `/projects/${selected}` : '/projects')
  }

  const searchTerm = selectedCategory?.toLowerCase()
  const filteredProjects = selectedCategory
    ? projects.filter(p => p.categories.includes(searchTerm))
    : projects

  const categoryLabel = categories.find(c => c.id === selectedCategory)?.label ?? 'All'

  return (
    <main>
      <section>
        <div className="container pad">
          <h1>{categoryLabel} Projects</h1>
          <p className="textWeak">{filteredProjects.length} found.</p>

          <select value={selectedCategory} onChange={handleCategoryChange}>
            <option value="">All Categories</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>
                {c.label}
              </option>
            ))}
          </select>

          <ProjectsGrid categories={selectedCategory ? [selectedCategory] : []} />
        </div>
      </section>
    </main>
  )
}