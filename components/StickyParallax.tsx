'use client'

import { useEffect, useRef, useState } from 'react'
import { ReactNode } from 'react'

interface StickyParallaxProps {
  children: ReactNode
  className?: string
  stickyTop?: number
}

export default function StickyParallax({ 
  children, 
  className = '',
  stickyTop = 0 
}: StickyParallaxProps) {
  const [isSticky, setIsSticky] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        
        if (rect.top <= stickyTop) {
          setIsSticky(true)
          setScrollY(scrolled - (rect.top + scrolled - stickyTop))
        } else {
          setIsSticky(false)
          setScrollY(0)
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [stickyTop])

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`${className} ${isSticky ? 'sticky-parallax-active' : ''}`}
      style={{
        position: isSticky ? 'sticky' : 'relative',
        top: isSticky ? `${stickyTop}px` : 'auto',
        zIndex: isSticky ? 100 : 'auto',
      }}
    >
      {children}
    </section>
  )
}

