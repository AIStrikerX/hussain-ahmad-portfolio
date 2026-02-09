import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hussain Ahmad - AI/ML Engineer Portfolio',
  description: 'Professional portfolio of Hussain Ahmad - AI/ML Engineer specializing in Multi-Agent Systems, Medical AI, and Cloud-Native Solutions',
  keywords: ['AI', 'Machine Learning', 'Multi-Agent Systems', 'Medical AI', 'Cloud Computing', 'Full Stack Development'],
  authors: [{ name: 'Hussain Ahmad' }],
  openGraph: {
    title: 'Hussain Ahmad - AI/ML Engineer Portfolio',
    description: 'Professional portfolio showcasing AI/ML projects, work experience, and technical expertise',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
