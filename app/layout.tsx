import type { Metadata } from 'next'
import './global.sass'
import { Montserrat } from 'next/font/google'
import Navbar from './components/Navbar'
import SiteFooter from './components/footer'
import { project_details } from './_lib/project'

const montserrat = Montserrat({ subsets: ['latin'] })

const baseUrl = 'https://chinamuslim.vercel.app'

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  viewportFit: 'cover',
  themeColor: project_details.themeColor,
}

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: project_details.title,
  description: project_details.description,
  keywords: 'home massage, prenatal massage, postnatal massage, pregnancy massage Singapore, home-based massage service',
  openGraph: {
    title: project_details.title,
    description: project_details.description,
    url: project_details.url,
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Massage For Mom - Prenatal & Postnatal massage service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Massage For Mom - Prenatal & Postnatal Massage Services in Singapore',
    description: project_details.description,
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/icons/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/manifest.json', // Link to your webmanifest
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent', // Options: 'default', 'black', 'black-translucent'
    title: project_details.title,
    startupImage: '/splash/apple-splash-2048x2732.png', // 2048x2732px recommended
  },
  alternates: {
    canonical: project_details.url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}