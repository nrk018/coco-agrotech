'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // Only detect scroll for scrolled state
    if (!isHomePage) {
      return
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const heroSection = document.querySelector('.gh-hero-wrap-container')
          if (heroSection) {
            const heroBottom = heroSection.getBoundingClientRect().bottom
            setIsScrolled(heroBottom < 0)
          } else {
            // Fallback to scroll position if hero section not found
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
  }, [isHomePage])

  return (
      <header 
      className={`simple-navbar ${isHomePage ? (isScrolled ? 'scrolled' : '') : 'white-navbar'}`}
        role="banner"
      >
      <div className="simple-navbar-container">
        <div className="simple-navbar-spacer"></div>
        
        <nav className="simple-navbar-logo">
          <Link href="/" className="simple-logo-link">
            <span className="simple-logo">CocoAgroTech</span>
                </Link>
          </nav>
          
        <nav className="simple-navbar-nav">
          <ul className="simple-nav-list">
              <li>
              <Link 
                href="/products" 
                className={`simple-nav-link ${pathname.startsWith('/products') ? 'active' : ''}`}
              >
                PRODUCTS
              </Link>
              </li>
              <li>
              <Link 
                href="/about" 
                className={`simple-nav-link ${pathname === '/about' ? 'active' : ''}`}
              >
                ABOUT
              </Link>
              </li>
              <li>
              <Link 
                href="/gallery" 
                className={`simple-nav-link ${pathname === '/gallery' ? 'active' : ''}`}
              >
                GALLERY
              </Link>
              </li>
              <li>
              <Link 
                href="/contact" 
                className={`simple-nav-link ${pathname === '/contact' ? 'active' : ''}`}
              >
                CONTACT
              </Link>
              </li>
            </ul>
          </nav>

        <button
          className="simple-request-btn" 
            aria-label="Request Quote"
          onClick={() => {
            window.dispatchEvent(new CustomEvent('open-enquiry-popup'))
            }}
          >
          REQUEST QUOTE
        </button>
        
        <div className="simple-navbar-spacer"></div>
        </div>
      </header>
  )
}
