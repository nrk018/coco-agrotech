'use client'

import { useEffect, useRef, useState } from 'react'
import { ReactNode } from 'react'

interface ParallaxLayerProps {
  children: ReactNode
  speed: number
  className?: string
  style?: React.CSSProperties
}

export default function ParallaxLayer({ 
  children, 
  speed, 
  className = '',
  style = {} 
}: ParallaxLayerProps) {
  const [transform, setTransform] = useState('translateY(0px)')
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking && ref.current) {
        window.requestAnimationFrame(() => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const elementTop = rect.top + scrolled
        const windowHeight = window.innerHeight
            
            // Only process if element is in or near viewport
            if (rect.bottom < -windowHeight || rect.top > windowHeight * 2) {
              ticking = false
              return
            }
        
        // Calculate parallax offset based on scroll position
        const yPos = -(scrolled - elementTop + windowHeight) * speed
            setTransform(`translate3d(0, ${yPos}px, 0)`)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform,
        willChange: 'transform',
        backfaceVisibility: 'hidden',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

