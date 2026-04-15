import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import FloatingLight from './components/FloatingLight'
import Particles from './components/Particles'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Naomi Dereje | Creative Developer',
  description: 'Portfolio showcasing creative development work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <Particles />
        <FloatingLight />
        <main>{children}</main>
      </body>
    </html>
  )
}