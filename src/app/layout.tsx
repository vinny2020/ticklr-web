import type { Metadata, Viewport } from 'next'
import { Bebas_Neue, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
  adjustFontFallback: true,
})

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-bebas',
  display: 'swap',
  preload: true,
  fallback: ['Impact', 'Arial Black', 'sans-serif'],
  adjustFontFallback: false,
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-mono',
  display: 'swap',
  preload: true,
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
  adjustFontFallback: false,
})

export const metadata: Metadata = {
  title: 'Ticklr — Your People Matter',
  description:
    'Private contact reminders for the relationships that matter most. Everything stays on your device. No accounts. No cloud. No analytics.',
  keywords: ['contacts', 'networking', 'privacy', 'reminders', 'relationships'],
  metadataBase: new URL('https://ticklr.org'),
  openGraph: {
    title: 'Ticklr — Your People Matter',
    description: 'Private contact reminders for the relationships that matter most.',
    images: ['/assets/ticklr-og-hero-q85.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ticklr — Your People Matter',
    description: 'Private contact reminders. On your device. Nowhere else.',
    images: ['/assets/ticklr-og-hero-q85.jpg'],
  },
  icons: {
    icon: '/assets/app-icon.png',
    apple: '/assets/app-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#EFEAE0',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
