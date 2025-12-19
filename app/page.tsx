'use client'

import { useEffect, useState } from 'react'
import Header from '@/components/Header'
import ParallaxScroll from '@/components/ParallaxScroll'
import Link from 'next/link'

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const heroSectionRef = document.querySelector('.parallax-section')
    
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroSectionRef) {
            const heroBottom = heroSectionRef.getBoundingClientRect().bottom
            setIsScrolled(heroBottom < 0)
          } else {
            setIsScrolled(window.scrollY > 100)
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fade-in animation for sections after hero
  useEffect(() => {
    let observer: IntersectionObserver | null = null
    let sections: NodeListOf<Element> | null = null

    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      observer = new IntersectionObserver((entries) => {
        // Use requestAnimationFrame for smooth updates
        requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in')
              // Unobserve after animation is triggered to reduce work
              observer?.unobserve(entry.target)
            }
          })
        })
      }, observerOptions)

      // Observe all sections after hero (content-section, image-box-section, last-section)
      sections = document.querySelectorAll('.content-section, .image-box-section, .last-section')
      sections.forEach((section) => {
        // Check if section is already in viewport on mount
        const rect = section.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0
        if (isInViewport) {
          section.classList.add('fade-in')
        } else {
          observer?.observe(section)
        }
      })
    }, 100)

    return () => {
      clearTimeout(timer)
      if (observer && sections) {
        sections.forEach((section) => {
          observer?.unobserve(section)
        })
      }
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <Header />

      <main id="main-content" className="main-content">
        {/* Hero Section */}
        <section className="parallax-section hero-parallax" data-image="tree_up_landscape.png">
          <div className="parallax-bg"></div>
          <div className="parallax-content hero-content-wrapper">
            <h1 className="hero-main-title">Premium Coco Substrates for Global Agriculture</h1>
            <p className="hero-subtitle">Sustainably sourced, scientifically processed, and quality-tested cocopeat products for hydroponics, horticulture, and commercial farming.</p>
            <div className="hero-cta-buttons">
              <Link href="/products" className="cta-button primary">
                Explore Products
              </Link>
              <button 
                className="cta-button secondary"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-enquiry-popup'))
                }}
              >
                Request a Quote
              </button>
            </div>
          </div>
        </section>

        {/* First Section - Mirrored coconut image with diagonal cut */}
        <section className="parallax-section content-section split-left" data-image="coconut.png" id="about">
          <div className="parallax-bg mirrored-image"></div>
          <div className="section-content-wrapper">
            <div className="content-box split-content-left">
            </div>
          </div>
        </section>

        {/* Second Section - Mirrored pith image with diagonal cut */}
        <section className="parallax-section content-section split-right" data-image="pith.png" id="why-choose">
          <div className="parallax-bg mirrored-image"></div>
          <div className="section-content-wrapper">
            <div className="content-box split-content-right">
            </div>
          </div>
        </section>

        {/* Third Section - Mirrored coconut image with diagonal cut (replicated) */}
        <section className="parallax-section content-section split-left" data-image="coconut.png" id="products">
          <div className="parallax-bg mirrored-image"></div>
          <div className="section-content-wrapper">
            <div className="content-box split-content-left">
            </div>
          </div>
        </section>

        {/* Fourth Section - Mirrored pith image with diagonal cut (replicated) */}
        <section className="parallax-section content-section split-right last-section" data-image="pith.png">
          <div className="parallax-bg mirrored-image"></div>
          <div className="section-content-wrapper">
            <div className="content-box split-content-right">
            </div>
          </div>
        </section>
      </main>
      <ParallaxScroll />
    </>
  )
}
