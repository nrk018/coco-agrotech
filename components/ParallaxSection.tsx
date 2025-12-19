'use client'

import { useEffect, useRef, useState } from 'react'
import { ReactNode } from 'react'

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  id?: string
}

export default function ParallaxSection({ 
  children, 
  className = '', 
  speed = 0.5,
  id 
}: ParallaxSectionProps) {
  const [offsetY, setOffsetY] = useState(0)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const elementTop = rect.top + scrolled
        const elementHeight = rect.height
        const windowHeight = window.innerHeight
        
        // Calculate parallax offset
        const yPos = -(scrolled - elementTop + windowHeight) * speed
        setOffsetY(yPos)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={className}
      style={{
        transform: `translateY(${offsetY}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </section>
  )
}

