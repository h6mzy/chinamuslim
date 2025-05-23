'use client'

import styles from '@/styles/Home.module.sass'
import SplashScreen from '@/components/SplashScreen'

export default function HomePage() {
  return (
    <main>
      <section>
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
              className="whiteButton"
            >
              More info
            </button>
          </div>
        </div>
        <SplashScreen />
      </section>
    </main>
  )
}