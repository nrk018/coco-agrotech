'use client'

import { useEffect, useState } from 'react'

export default function LoadingCurtain() {
  const [isSlidingIn, setIsSlidingIn] = useState(true)
  const [isOpening, setIsOpening] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Only run on client side
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Safely check sessionStorage
    let hasSeenCurtain = false
    try {
      hasSeenCurtain = typeof window !== 'undefined' && sessionStorage.getItem('hasSeenCurtain') !== null
    } catch (e) {
      // If sessionStorage is not available, continue
    }
    
    if (hasSeenCurtain) {
      setShouldRender(false)
      return
    }

    // Mark that we've seen the curtain
    try {
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('hasSeenCurtain', 'true')
      }
    } catch (e) {
      // If sessionStorage is not available, continue anyway
    }

    // Slide in black screen (cover the page)
    const slideInTimer = setTimeout(() => {
      setIsSlidingIn(false)
      
      // After slide in completes, start opening animation
      const openTimer = setTimeout(() => {
        setIsOpening(true)
      }, 300)
      
      // Remove curtain after opening animation completes
      const removeTimer = setTimeout(() => {
        setShouldRender(false)
      }, 1500)

      return () => {
        clearTimeout(openTimer)
        clearTimeout(removeTimer)
      }
    }, 100)

    return () => {
      clearTimeout(slideInTimer)
    }
  }, [isMounted])

  if (!shouldRender || !isMounted) return null

  return (
    <div className={`loading-curtain ${isSlidingIn ? 'sliding-in' : ''} ${isOpening ? 'opening' : ''}`}>
      <div className="curtain-top"></div>
      <div className="curtain-content">
        <div className="curtain-logo">CocoAgroTech</div>
      </div>
      <div className="curtain-bottom"></div>
    </div>
  )
}

