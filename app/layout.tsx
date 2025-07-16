import type { Metadata } from 'next'
import './globals.css'
import GoogleTagManager from '@/components/GoogleTagManager'

export const metadata: Metadata = {
  title: 'Raheel Dental Surgery - Dr. Raheel Ahmad Khan | Islamabad',
  description: 'Leading dental surgery in Islamabad. Dr. Raheel Ahmad Khan offers comprehensive dental care, cosmetic dentistry, orthodontics, and aesthetic treatments with state-of-the-art technology.',
  generator: 'v0.dev',
  keywords: 'dental surgery, dentist, Islamabad, Dr. Raheel Ahmad Khan, cosmetic dentistry, orthodontics, dental implants',
  authors: [{ name: 'Dr. Raheel Ahmad Khan' }],
  openGraph: {
    title: 'Raheel Dental Surgery - Dr. Raheel Ahmad Khan',
    description: 'Leading dental surgery in Islamabad. Comprehensive dental care and aesthetic treatments.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleTagManager />
        {children}
      </body>
    </html>
  )
}
