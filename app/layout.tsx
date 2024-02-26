import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './global.sass'
import 'react-medium-image-zoom/dist/styles.css'
import Navbar from './components/navbar'
import SiteFooter from './components/footer'
import { project_details } from './_lib/project'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${project_details.title}`,
  description: 'Rapid web apps and sites',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
