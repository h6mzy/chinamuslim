'use client'

import { DownOutline } from 'antd-mobile-icons'
import { testimonials } from '../_lib/testimonials'
import Title from '../components/title'
import styles from './testimonials.module.sass'
import { Button, Grid, Popup, Tabs } from 'antd-mobile'
import { useState } from 'react'

export default function Testimonials() {

  const years = (
    [...new Set(testimonials.map(t => String(t.year)))]
    .sort((a, b) => Number(b) - Number(a))
  )
  const [tab, setTab] = useState(years[0])
  const [visible, setVisible] = useState(false)

  const onBtnClick = (year:string) => {
    setTab(year)
    setVisible(false)
  }
  
  return (
    <main>
      <section className='container'>
        <div className='pad'>
          <Title title='Testimonials' style={{ margin: '0 0 var(--adm-gap)' }} />
          <div className={styles.header}>
            <Tabs
              className={styles.tabs}
              activeKey={tab}
              onChange={(key) => setTab(key)}
            >
              {years.map(year =>
                <Tabs.Tab title={year} key={year} />
              )}
            </Tabs>
            <a onClick={() => setVisible(true)}>
              <DownOutline className={styles.more} />
            </a>
          </div>
          <Popup
            visible={visible}
            onMaskClick={() => setVisible(false)}
            onClose={() => setVisible(false)}
            bodyStyle={{ height: 'auto', maxHeight: '100vh' }}
          >
            <div className='container'>
              <div className='pad'>
                <Grid columns={3} gap='var(--adm-gap-sm)'>
                  {years.map(year =>
                    <Grid.Item key={year}>
                      <Button block onClick={() => onBtnClick(year)}>{year}</Button>
                    </Grid.Item>
                  )}
                </Grid>
              </div>
            </div>
          </Popup>
        </div>
      </section>
    </main>
  )
}