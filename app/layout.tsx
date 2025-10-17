import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SPOOKY SWEETS 🎃 | ur fav halloween candy store',
  description: 'no cap the most bussin halloween candy store fr fr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
