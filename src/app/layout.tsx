import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../../src/app/globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Agam Jain - Full Stack Developer',
  description: 'Portfolio of Agam Jain, a Full Stack Developer specializing in React, Node.js, and AI solutions.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-background text-foreground selection:bg-primary/20 selection:text-primary`}>
        {children}
      </body>
    </html>
  )
}
