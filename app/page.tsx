'use client'

import SplashScreen from '@/components/SplashScreen'
import FullPageVideo from '@/components/FullPageVideo'
import ProjectsGrid from '@/components/ProjectsGrid'

export default function HomePage() {
  return (
    <main>
      <section>
        <FullPageVideo />
      </section>
      <SplashScreen />
      <section>
        <div className='container pad'>
          <h2>Recent Projects</h2>
          <ProjectsGrid />
        </div>
      </section>
    </main>
  )
}