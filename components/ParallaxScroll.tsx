'use client'

import { useEffect, useRef } from 'react'

export default function ParallaxScroll() {
  const sectionsRef = useRef<NodeListOf<Element> | null>(null)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    // Cache DOM queries - only query once
    sectionsRef.current = document.querySelectorAll('.parallax-section')
    
    const handleScroll = () => {
      if (!sectionsRef.current) return
      
      const scrolled = window.pageYOffset
      const sections = sectionsRef.current

      // Use for loop instead of forEach for better performance
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i] as HTMLElement
        
        // Skip parallax for old content sections with diagonal split and last-section
        if ((section.classList.contains('content-section') && !section.classList.contains('content-section-flow')) || section.classList.contains('last-section')) {
          continue
        }
        
        // Skip flow sections - no parallax, just diagonal cuts
        if (section.classList.contains('content-section-flow')) {
          continue
        }
        
        const rect = section.getBoundingClientRect()
        const sectionTop = rect.top + scrolled
        const sectionHeight = rect.height
        const windowHeight = window.innerHeight
        
        // Only process if section is in or near viewport (performance optimization)
        if (rect.bottom < -windowHeight || rect.top > windowHeight * 2) {
          continue
        }
        
        // Calculate how far into the section we've scrolled
        const scrollProgress = (scrolled - sectionTop + windowHeight) / (sectionHeight + windowHeight)
        
        // Reduced parallax speed for better performance
        const parallaxSpeed = 0.8 // Reduced from 1.5
        const parallaxOffset = (scrolled - sectionTop) * parallaxSpeed
        
        // Minimal scale to reduce repaints
        const scale = Math.max(1, 1 + (scrollProgress * 0.05)) // Reduced from 0.1
        
        // Minimal rotation
        const rotation = (scrollProgress - 0.5) * 0.5 // Reduced from 1
        
        // Minimal horizontal movement
        const horizontalOffset = (scrollProgress - 0.5) * 10 // Reduced from 15
        
        const bg = section.querySelector('.parallax-bg') as HTMLElement
        if (bg) {
          // Use transform3d for GPU acceleration
          bg.style.transform = `translate3d(${horizontalOffset}px, ${parallaxOffset}px, 0) scale(${scale}) rotate(${rotation}deg)`
        }
        
        // Animate content separately for layered effect
        const content = section.querySelector('.parallax-content') as HTMLElement
        if (content) {
          const contentOffset = (scrolled - sectionTop) * 0.15 // Reduced from 0.2
          const contentScale = 1 - (scrollProgress * 0.05) // Reduced from 0.1
          const contentOpacity = Math.max(0.5, Math.min(1, 1 - Math.abs(scrollProgress - 0.5) * 1.2)) // Reduced opacity changes
          content.style.transform = `translate3d(0, ${contentOffset}px, 0) scale(${contentScale})`
          content.style.opacity = contentOpacity.toString()
        }
      }
    }

    // Optimized scroll handler with requestAnimationFrame throttling
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        rafIdRef.current = window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll() // Initial call

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current)
      }
    }
  }, [])

  return null
}
