'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import MobileSidebar from './MobileSidebar'
import MobileHamburger from './MobileHamburger'

export default function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Only detect scroll for scrolled state (no expansion)
    if (!isHomePage) {
      return
    }

    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          // Just detect if scrolled past hero
          setIsScrolled(scrollY > 100)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial state
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  // Fixed sizes - no expansion on scroll
  const containerPadding = 20
  const logoFontSize = 20
  const navFontSize = 14
  const buttonPadding = '10px 20px'
  const buttonFontSize = 14

  return (
    <>
      <MobileSidebar />
      {/* Chain holes at top of page */}
      <div className="chain-holes">
        <div className="chain-hole chain-hole-left"></div>
        <div className="chain-hole chain-hole-right"></div>
      </div>
      {/* Chain links connecting top holes to navbar */}
      <div className="chain-links">
        <div className="chain-link chain-link-left"></div>
        <div className="chain-link chain-link-right"></div>
      </div>
      <header 
        className={`header ${isHomePage ? (isScrolled ? 'scrolled' : '') : 'white-navbar'}`}
        role="banner"
      >
        {/* Two black circles in between the ends */}
        <div className="navbar-circle navbar-circle-left"></div>
        <div className="navbar-circle navbar-circle-right"></div>
        <div 
          className="header-container"
          style={{
            padding: `${containerPadding}px 40px`,
          }}
        >
          <nav className="header-nav" aria-label="Header logo and title">
            <ul className="nav-list">
              <li className="nav-item">
                <Link href="/" className="logo-link" aria-label="CocoAgroTech Home">
                  <span className="logo" style={{ fontSize: `${logoFontSize}px` }}>CocoAgroTech</span>
                </Link>
              </li>
            </ul>
          </nav>
          
          <nav 
            className="main-nav hidden md:block"
            aria-label="Main navigation"
          >
            <ul className="main-nav-list">
              <li>
                <Link 
                  href="/products" 
                  className={`nav-link ${pathname.startsWith('/products') ? 'active' : ''}`} 
                  style={{ fontSize: `${navFontSize}px` }}
                >
                  PRODUCTS
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className={`nav-link ${pathname === '/about' ? 'active' : ''}`} 
                  style={{ fontSize: `${navFontSize}px` }}
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className={`nav-link ${pathname === '/gallery' ? 'active' : ''}`} 
                  style={{ fontSize: `${navFontSize}px` }}
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`nav-link ${pathname === '/contact' ? 'active' : ''}`} 
                  style={{ fontSize: `${navFontSize}px` }}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          <button
            className="sign-in-btn hidden md:block" 
            aria-label="Request Quote"
            onClick={() => {
              window.dispatchEvent(new CustomEvent('open-enquiry-popup'))
            }}
            style={{
              padding: buttonPadding,
              fontSize: `${buttonFontSize}px`,
            }}
          >
            <span>REQUEST QUOTE</span>
          </button>

          {/* Mobile Hamburger Button */}
          <MobileHamburger />
        </div>
      </header>
    </>
  )
}

