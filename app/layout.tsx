import type { Metadata } from 'next'
import { Space_Mono, Cinzel } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/navbar'
import PageTransition from '@/components/page-transition'
import SmoothScroll from '@/components/smooth-scroll'
import GearLoading from '@/components/gear-loading'
import TopLoadingBar from '@/components/top-loading-bar'
import { Suspense } from 'react'
import { cn } from '@/lib/utils'
import AnimatedCursor from 'react-animated-cursor'
import LoadingWrapper from '@/components/loading-wrapper'
import localFont from 'next/font/local'

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cinzel',
})

export const metadata: Metadata = {
  title: 'Siddharth Chauhan - Digital Innovator',
  description: 'Award-winning portfolio of Siddharth Chauhan, pioneering the future of digital experiences through AI and innovative web solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        spaceMono.variable,
        cinzel.variable,
        'font-mono bg-background text-foreground cursor-none'
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TopLoadingBar />
          <LoadingWrapper>
            <div className="cyber-grid fixed inset-0 opacity-20 pointer-events-none" />
            <AnimatedCursor
              innerSize={8}
              outerSize={24}
              innerScale={1}
              outerScale={2}
              outerAlpha={0.2}
              hasBlendMode={true}
              innerStyle={{
                backgroundColor: 'var(--cursor-color)'
              }}
              outerStyle={{
                border: '2px solid var(--cursor-color)'
              }}
            />
            <SmoothScroll />
            <Navbar />
            <PageTransition>
              {children}
            </PageTransition>
          </LoadingWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}

