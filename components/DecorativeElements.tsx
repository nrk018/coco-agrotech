'use client'

import { useEffect, useState } from 'react'

export default function DecorativeElements() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.1

  return (
    <div className="decorative-elements">
      <div 
        className="decor-left"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="decor-shape decor-green"></div>
        <div className="decor-icon">🌿</div>
      </div>
      <div 
        className="decor-right"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="decor-shape decor-blue"></div>
        <div className="decor-star">⭐</div>
      </div>
    </div>
  )
}

