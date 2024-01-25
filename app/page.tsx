'use client'

import { Button, Card, Divider, Ellipsis, Grid } from 'antd-mobile'
import Link from 'next/link'
import { DownOutline } from 'antd-mobile-icons'
import Heading from './components/heading'
import Title from './components/title'
import styles from './home.module.sass'

export default function Home() {

  const video = (
    `<div style="position: relative; width: 100%; height: 0; border-radius: 8px; padding-top: 56.2500%; padding-bottom: 0; overflow: hidden; will-change: transform;"><iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFwTPsi-Dw&#x2F;watch?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe></div>`
  )

  return (
    <main>
      <section className='container'>
        <div className='pad'>
          <div className='pad-y' />
          <Card
            className={styles.mariah}
          >
            <Title title='[Mariah] Mah' style={{ marginTop: 0 }} />
            <Heading
              title='The 500 Most Influential Muslims In The World!'
              weak 
            />
          </Card>
          <Ellipsis
            direction='end'
            rows={3}
            className='p text-justify'
            content={`Mariah Mah a retired Singaporean educator in her 70's, has been working tirelessly Mariah Mah a retired Singaporean educator in her 70's, has been working tirelessly in the past 20 years to improve the lives of Muslims in China. She has been greatly involved in the Singapore Muslim outreach to poor Muslims in China. She was named by the Royal Islamic Strategic Studies Centre as one of the 500 most influential Muslims in the world in 2009 and has also been cited in a book published by The Prince Alwaleed Bin Talal Center for Muslim-Christian Understanding by Edmund A. Walsh from the School of Foreign Service Georgetown University - USA. She is the Honorary Chairman of Xiji Welfare Charity Centre (China) a government registered NGO in China's poorest region known as XIHAIGU (one of the world's poorest regions as recorded by UNESCO). As a result of the numerous charity projects initiated which benefitted and improve the lives of hundreds of farmers in the region, Sister was awarded the Honorary Citizen of Xiji County, Ningxia Province China.`}
          />
          <Link href='/mariah-mah'>
            <Button block fill='outline' style={{ '--border-color': 'var(--adm-color-light)' }}>
              Read more
            </Button>
          </Link>
        </div>
        <Divider />
      </section>
      <section className='container'>
        <div className='pad'>
          <h4 className='text-right font-color-weak'>Featured Project <DownOutline /></h4>
          <div dangerouslySetInnerHTML={{ __html: video }} style={{ marginTop: '.5rem' }} />
          <Heading title='2023 Zhang Jiachuan Zakat for the Aged Poor' />
          <p className='text-justify'>In April 2004, Late Brother Jaafar Mah set up the first Muslim NGO known as Zhang Jiachuan Charity Services Center. He was its main Chairman till his demise in May 2021 and Sister Mariah Mah took over the chairmanship to manage its community service charity projects like Distribution of Zakat, Sedaqah, Rice, Fidyah, Iftar Ramadan, Qurban and Aqiqah.</p>
          <Grid columns={2} gap='.5rem' className='pad-t'>
            <Link href='/project/2023-zhang-jiachuan-zakat-for-the-aged-poor'>
              <Button block fill='outline' style={{ '--border-color': 'var(--adm-color-light)' }}>
                Read more
              </Button>
            </Link>
            <Link href='/'>
              <Button block color='primary'>
                Contribute
              </Button>
            </Link>
          </Grid>
        </div>
      </section>
    </main>
  )
}