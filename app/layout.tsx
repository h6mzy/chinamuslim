import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './global.sass'
import Navbar from './components/navbar'
import SiteFooter from './components/footer'
import { project_details } from './_lib/project'

const inter = Inter({ subsets: ['latin'] })

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
