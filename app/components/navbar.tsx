'use client'

import { usePathname } from 'next/navigation'
import { Button, List, Popup, Space, Tabs } from 'antd-mobile'
import Link from 'next/link'
import style from './navbar.module.sass'
import { AppOutline, CloseOutline, MoreOutline } from 'antd-mobile-icons'
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
    <Link className={style.link} href={href}>{title}</Link>
  )

  const navItems = [
    { key: 'about', title: 'About' },
    { key: 'contact', title: 'Contact' },
  ]

  const iconSize = 24

  const Logo = () => (
    <Link href='/' onClick={() => setVisible(false)}>
      <Button fill='none' color='primary' className={style.height}>
        <Space align='center'>
          <AppOutline fontSize={iconSize} />
          <span>{project_details.title}</span>
        </Space>
      </Button>
    </Link>
  )

  return (
    <>
      <div className={style.nav}>
        <Space justify='between' block className='align-stretch'>
          <Logo />
          <>
            <Tabs
              defaultActiveKey={null}
              activeKey={activeKey}
              className='show-on-lg tabs-borderless'
            >
              {navItems.map(tab =>
                <Tabs.Tab
                  key={tab.key}
                  title={<TabLink href={`/${tab.key}`} title={tab.title} />}
                  className={`${style.height} ${style.tab}`}
                />
              )}
            </Tabs>
            <Button
              fill='none'
              color='primary'
              onClick={() => setVisible(true)}
              className={`hide-on-lg ${style.height}`}
            >
              <MoreOutline fontSize={iconSize} className={style.more} />
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
          <Space block justify='between' align='center'>
            <Logo />
            <Button
              fill='none'
              onClick={() => { setVisible(false) }}
              style={{ '--text-color': 'var(--adm-color-weak)' }}
              className={style.height}
            >
              <CloseOutline fontSize={20} />
            </Button>
          </Space>
          <List>
            {navItems.map(item =>
              <Link
                key={item.key}
                href={`/${item.key}`}
                className={style.link}
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