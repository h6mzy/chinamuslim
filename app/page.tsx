'use client'

import { donors } from './_lib/donors'
import styles from './components/Home.module.sass'
import layout from './components/Layout.module.sass'
import Slides from './components/Slides'
import Card from './components/Card'
import flex from './components/Flex.module.sass'
import { projects } from './_lib/projects'
import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import ExpandedCard from './components/ExpandedCard'
import ProjectsSection from './components/Projects'

export default function Home() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null)
  return (
    <main>
      <section>
        <div className={styles.container}>
          <video className={styles.video} src="/videos/home.mp4"  autoPlay  loop  muted  playsInline />
          <div className={styles.content}>
            <h2>Zakat 2025</h2>
            <p>Lorem ipsum dolor sit amet.</p>
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
              slidesToShow={2}
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

//https://codesandbox.io/p/sandbox/framer-motion-sharedlayout-dk5pfh?file=%2Fsrc%2FApp.js%3A140%2C28
//https://codesandbox.io/p/sandbox/framer-motion-ios-notifications-0sct9o?file=%2Fsrc%2FApp.js