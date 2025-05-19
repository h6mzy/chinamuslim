'use client'

import { donors } from './_lib/donors'
import styles from './components/Home.module.sass'
import layout from './components/Layout.module.sass'
import Slides from './components/Slides'
import ProjectsSection from './components/Projects'
import SplashScreen from './components/SplashScreen'

export default function Home() {
  return (
    <main>
      <section>
        <SplashScreen />
        <div className={styles.container}>
          <video className={styles.video} autoPlay loop muted playsInline>
            <source src="/videos/home.mp4" type="video/mp4" />
            Your browser does not support the video tag. 
          </video>
          <div className={styles.content}>
            <h2>Qurban 2025</h2>
            <p>Demonstrate your gratitude to Allah this Eid al-Adha.</p>
            <button
              aria-label="More info"
              className={layout.whiteButton}
            >
              More info
            </button>
          </div>
        </div>
      </section>
      <ProjectsSection />
      <section>
        <div className={layout.container}>
          <div className={layout.pad}>
            <div className={layout.autoAlign}>
              <h2><strong>Our Generous Donors</strong></h2>
            </div>
            <Slides
              slidesToShow={1}
              items={donors.map((item:any, index) => {
                return (
                  <div 
                    key={index}
                    className={styles.box}
                    style={{ background: `url(${item.photo}?img=1) center center / cover no-repeat transparent` }}
                  />
                )
              })}
            />
          </div>
        </div>
      </section>
    </main>
  )
}