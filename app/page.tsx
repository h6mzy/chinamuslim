'use client'

import SplashScreen from '@/components/SplashScreen'
import FullPageVideo from '@/components/FullPageVideo'

export default function HomePage() {
  return (
    <main>
      <section>
        <FullPageVideo />
      </section>
      <SplashScreen />
    </main>
  )
}