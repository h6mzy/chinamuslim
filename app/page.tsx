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
      <section>
        <div className='container pad'>
          <h2>Recent Projects</h2>
          <div className='grid'>
            <div><hr /></div>
            <div><hr /></div>
            <div><hr /></div>
            <div><hr /></div>
          </div>
        </div>
      </section>
    </main>
  )
}