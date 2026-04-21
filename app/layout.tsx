import type { Metadata } from 'next'
import { Cormorant_Garamond, Great_Vibes, Caveat, WindSong } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
})

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-caveat',
})

const windSong = WindSong({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-windsong',
})

export const metadata: Metadata = {
  title: 'Daniela & Roberto — Wedding Invitation',
  description: 'We joyfully invite you to celebrate our wedding. Join us for an unforgettable day of love and celebration.',
  generator: 'v0.app',
  openGraph: {
    title: 'Daniela & Roberto — Wedding Invitation',
    description: 'We joyfully invite you to celebrate our wedding.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${greatVibes.variable} ${caveat.variable} ${windSong.variable} font-serif antialiased`} style={{ backgroundColor: '#F9F7F2' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

// export caveat for use in components
export { caveat }
