'use client'

import Heading from '../components/heading'
import Title from '../components/title'
import Video from '../components/video'
import Gallery from '../components/viewer'

export default function Home() {

  const iframe = (
    `<iframe src="https://www.youtube.com/embed/wUzvZO60x_w?si=NYbSFJXiVobIJZoI&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="video-iframe"></iframe>`
  )

  const iframe2 = (
    `<iframe src="https://www.youtube.com/embed/E7W8iqVL5qk?si=wkBPVtbbVJB0LdVZ&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen class="video-iframe"></iframe>`
  )

  const images = [
    { src: '/images/cambridge-certs/1.webp' },
    { src: '/images/cambridge-certs/2.webp', title: 'Cambridge Certificate 2' },
    { src: '/images/cambridge-certs/3.webp', title: 'Cambridge Certificate 3' },
  ]

  return (
    <main>
      <section className='container'>
        <div className='pad'>
          <Title title='[Mariah] Mah' style={{ marginTop: 0 }} />
          <Heading
            title='The 500 Most Influential Muslims In The World!'
            weak
          />
          <Video iframe={iframe} />
          <div className='text-justify'>
            <p>Mariah Mah a retired Singaporean educator in her 70's, has been working tirelessly Mariah Mah a retired Singaporean educator in her 70's, has been working tirelessly in the past 20 years to improve the lives of Muslims in China. She has been greatly involved in the Singapore Muslim outreach to poor Muslims in China. She was named by the Royal Islamic Strategic Studies Centre as one of the 500 most influential Muslims in the world in 2009 and has also been cited in a book published by The Prince Alwaleed Bin Talal Center for Muslim-Christian Understanding by Edmund A. Walsh from the School of Foreign Service Georgetown University - USA. She is the Honorary Chairman of Xiji Welfare Charity Centre (China) a government registered NGO in China's poorest region known as XIHAIGU (one of the world's poorest regions as recorded by UNESCO). As a result of the numerous charity projects initiated which benefitted and improve the lives of hundreds of farmers in the region, Sister was awarded the Honorary Citizen of Xiji County, Ningxia Province China.</p>
            <p>Brother Jaafar Mah was similarly awarded the Honorary Citizen of Zhang Jia Chuan County in Gansu Province for his numerous contributions in uplifting the life of villagers there. He helped to establish kindergartens and an orphanage. Giving school fees to poor children to attend schools. At that time about 25 years ago, half the population in Zhang JiaChuan did not attend primary school. In 2000, Bro Jaafar initiated a huge water supply project building 2 big reservoirs to supply drinking water to tens of thousands of households living up in the mountainous regions averaging 1500 to 2000 meters above sea level. Bro Jaafar also helped to build one of the biggest kindergartens, an orphanage, and old folks home in Xiji County Ningxia Province. He was given the Honorary Citizen for that. He was also the first person to help build a Muslim preschool in Xian city for lower-income Muslim kids who could not afford a preschool education. Brother Jaafar's contribution to social community projects has been ongoing until now! Bless him! He not only initiated the first MuslimTravel tours to China but he also started the first Muslim preschools and orphanages. Charity projects include distribution of Zakat, Sadakah, Iftar Ramadan, sponsoring of poor Muslims to go on Hajj, subsidising orphans education and livelihoods, and implementing water projects in arid areas.</p>
          </div>
          <Video iframe={iframe2} />
          <div className='text-justify'>
            <p>Mariah dedicates her life to humanitarian work. A Muslim by birth, her avid interest in Islam as a religion for humanity was reawakened after her pre-university education. She decided to pursue a degree in Islamic studies at the University of Malaya. After graduation, she became a teacher and continued in the profession for 35 years. While attending university, sister Mariah learnt Arabic language, Islamic history, hadiths, Quran tafsir, Islamic philosophy and law. Amazed at the great legacy that Islam had given the world at a time when Europe was still in the Dark Ages, she decided to spend her life learning and sharing Islam ic values to as many people as possible, especailly to non Muslims who often misundertand Islam to be a religion of the Malays, Arabs and that of the Hui minority in China when in fact it is Divine Guidance revelaed to Prophets throughout the ages since the creation of Man. She remains true to her goal today, which has inspired the multipler humanitarian projects that she carries out in China.</p>
            <p>Mariah shows her dedication to improving education standards of Muslims in China by sponsoring the salaries of madrasah teachers, giving out bursaries to 200 students each year to enable them to pursue tertiary education as that would help to break the vicious poverty circle among indigent farmers. She has also set up literacy education centre's where poor village children are offered basic literacy as well Quran reading.</p>
            <p>Sister Mariah and her brother, Jaafar in 1994 conceptualised the first China Muslim Silaturrahim tours and invited local tour partners in Singapore to participate in such discovery tours to explore and understand Chinese Muslim civilisation. Silaturrahim Tours, are charity-oriented, and non-profit. It is a niche service to Muslims who would like to tour China on holiday and network with Muslims in China. Unlike most tour agencies, Mariah ensures that every last bit of profit from the operations is put into the charities to help the underprivileged Muslims in China.</p>
            <p>Apart from Tours Sister Mariah also organises community services for students who want to get a taste of village life. Right now she is working with undergrads from SMU, NTU nad NUS.</p>
            <p>Kindly refer to page 142 of the publication - The 500 most influential Muslims in the world 2009.</p>
            <p>Besides being selected to be among 500 most influential Muslims in the world, she was honoured by Cambridge University Faculty of Islamic Arts for excellence in the promotion and service of Islam and the promotion of Chinese Muslim Culture in 2000.</p>
          </div>
          <Gallery images={images} gridProps={{ columns: 3, gap: 'var(--adm-gap-sm)' }} thumbnails={images.length} thumbnailAspectRatio={[1,1]} thumbnailFit='cover' />
        </div>
      </section>
    </main>
  )
}