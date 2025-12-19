'use client'

import { useEffect, useState } from 'react'

interface ParallaxBackgroundProps {
  children: React.ReactNode
  speed?: number
  className?: string
}

export default function ParallaxBackground({ 
  children, 
  speed = 0.3,
  className = '' 
}: ParallaxBackgroundProps) {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={className}
      style={{
        transform: `translateY(${scrollY * speed}px)`,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  )
}

