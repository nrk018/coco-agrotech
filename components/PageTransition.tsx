'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsTransitioning(false)
    }, 300)

    return () => clearTimeout(timer)
  }, [pathname, children])

  return (
    <div className={`page-transition ${isTransitioning ? 'fading-out' : 'fading-in'}`}>
      {displayChildren}
    </div>
  )
}






