'use client'

import styles from './components/Home.module.sass'

export default function Home() {
  return (
    <main>
      <section>
        <div className={styles.container}>
          <video className={styles.video} src="/videos/home.mp4"  autoPlay  loop  muted  playsInline />
          <div className={styles.content}>
            <h1>Zakat 2025</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <button>More info</button>
          </div>
        </div>
      </section>
    </main>
  )
}