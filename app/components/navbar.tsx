'use client'

import { usePathname } from 'next/navigation'
import { Button, Image, List, Popup, Space, Tabs } from 'antd-mobile'
import Link from 'next/link'
import styles from './navbar.module.sass'
import { CloseOutline, MoreOutline } from 'antd-mobile-icons'
import { useEffect, useState } from 'react'
import { project_details } from '../_lib/project'

const Navbar = () => {

  const pathname = usePathname()
  const activeKey = pathname.split('/').filter(n => n)[0] || ''

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    document.documentElement.setAttribute(
      'data-prefers-color-scheme',
      'default',
    )
  }, [])

  const TabLink = ({ href, title }: { href: string, title: string }) => (
    <Link className={`${styles.link} ${styles.tabItem}`} href={href}>{title}</Link>
  )

  const navItems = [
    { key: 'about', title: 'About' },
    { key: 'contact', title: 'Contact' },
    { key: 'donate', title: 'Donate' },
  ]

  const iconSize = 24

  return (
    <>
      <div className={styles.nav}>
        <Space justify='between' block className='align-stretch'>
          <Link href='/' onClick={() => setVisible(false)}>
            <Button color='primary' className={styles.height}>
              <Space align='center'>
                <Image src='/images/chinamuslim.svg' height={`${iconSize}px`} />
                <div dangerouslySetInnerHTML={{ __html: project_details.title_html }} />
              </Space>
            </Button>
          </Link>
          <>
            <Tabs
              defaultActiveKey={null}
              activeKey={activeKey}
              className='show-on-lg tabs-borderless'
              style={{ 
                '--active-line-color': 'var(--adm-color-white)',
                '--active-title-color': 'var(--adm-color-white)',
              }}
            >
              {navItems.map(tab =>
                <Tabs.Tab
                  key={tab.key}
                  title={<TabLink href={`/${tab.key}`} title={tab.title} />}
                  className={`${styles.height} ${styles.tab}`}
                />
              )}
            </Tabs>
            <Button
              color='primary'
              onClick={() => setVisible(true)}
              className={`hide-on-lg ${styles.height}`}
            >
              <MoreOutline fontSize={iconSize} className={styles.more} />
            </Button>
          </>
        </Space>
      </div>
      <div className='hide-on-lg'>
        <Popup
          visible={visible}
          onMaskClick={() => { setVisible(false) }}
          position='right'
          bodyStyle={{ width: '100%' }}
          onClose={() => { setVisible(false) }}
        >
          <Space
            block
            justify='between'
            align='center'
            style={{ background: 'var(--adm-color-primary)' }}
          >
            <Button color='primary' disabled>Explore</Button>
            <Button
              color='primary'
              onClick={() => { setVisible(false) }}
              className={styles.height}
            >
              <CloseOutline fontSize={20} />
            </Button>
          </Space>
          <List

          >
            {navItems.map(item =>
              <Link
                key={item.key}
                href={`/${item.key}`}
                className={`${styles.link} ${styles.listLink} ${item.key === activeKey ? styles.active : ''}`}
                onClick={() => setVisible(false)}
              >
                <List.Item>
                  {item.title}
                </List.Item>
              </Link>
            )}
          </List>
        </Popup>
      </div>
    </>
  )
}

export default Navbar