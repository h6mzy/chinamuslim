'use client'

import styles from './components/Home.module.sass'
import layoutStyles from './components/Layout.module.sass'

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
              name="More info"
              className={layoutStyles.whiteButton}
            >
              More info
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}