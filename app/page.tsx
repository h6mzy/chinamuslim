'use client'

import { donors } from './_lib/donors'
import styles from './components/Home.module.sass'
import layout from './components/Layout.module.sass'
import Slides from './components/Slides'

export default function Home() {
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
      <section>
        <div className={layout.container}>
          <div className={layout.pad}>
            <div className={layout.autoAlign}>
              <h2><strong>Waqaf Projects</strong></h2>
            </div>
          </div>
        </div>
      </section>
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