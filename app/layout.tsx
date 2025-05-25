import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '24-25J-060',
  description: 'An interactive platform that visualizes sleep patterns, predicts future sleep quality, and enhances user engagement through gamification. Designed to help young adults improve sleep habits using deep learning insights',
  generator: 'v0.dev',
  icons: {
    icon: '/moon-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
