'use client'

import { useState } from 'react'
import { LayoutGroup, AnimatePresence, motion } from 'motion/react'
import Card from './Card'
import ExpandedCard from './ExpandedCard'
import { projects } from '../_lib/projects'
import layout from '../components/Layout.module.sass'
import flex from '../components/Flex.module.sass'

export default function ProjectsSection() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)

  return (
    <LayoutGroup>
      <section>
        <div className={layout.container}>
          <div className={layout.pad}>
            <div className={layout.autoAlign}>
              <h2><strong>Waqaf Projects</strong></h2>
            </div>
            <div className={`${flex.row} ${flex.twoColumn}`}>
              {projects.map((project, index) => (
                <motion.div 
                  key={index} 
                  layoutId={project.title} 
                  onClick={() => setSelectedTitle(project.title)}
                >
                  <Card title={project.title} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for expanded card */}
      <AnimatePresence>
        {selectedTitle && (
          <ExpandedCard title={selectedTitle} onClose={() => setSelectedTitle(null)} />
        )}
      </AnimatePresence>
    </LayoutGroup>
  )
}