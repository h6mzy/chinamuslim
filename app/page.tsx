'use client'

import { donors } from './_lib/donors'
import styles from './components/Home.module.sass'
import layout from './components/Layout.module.sass'
import Image from 'next/image'

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
              <h2><strong>Our Donors</strong></h2>
            </div>
            {donors.map((donor, key) => 
              <div key={key}>
                <Image className={layout.contain} src={`${donor.photo}?img=${key+1}`} alt={donor.name} width={100} height={100} />
                <p>{donor.name}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}