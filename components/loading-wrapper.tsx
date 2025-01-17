'use client'

import { usePathname } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'
import GearLoading from './gear-loading'

// SIDD & ISHNOOR - Loading Wrapper Component
export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [shouldShow, setShouldShow] = useState(true)
  
  useEffect(() => {
    setShouldShow(true)
    const timer = setTimeout(() => {
      setShouldShow(false)
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [pathname])
  
  return (
    <Suspense fallback={<GearLoading />}>
      {shouldShow ? <GearLoading /> : children}
    </Suspense>
  )
} 