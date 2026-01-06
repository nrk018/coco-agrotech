'use client'

import { useEffect, useState } from 'react'
import EnquiryPopup from '@/components/EnquiryPopup'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Globe from '@/components/ui/globe'

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    color: `rgba(15,23,42,${0.1 + i * 0.03})`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <title>Background Paths</title>
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="#2ea043"
            strokeWidth={path.width}
            strokeOpacity={0.1 + path.id * 0.03}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const heroSectionRef = document.querySelector('.gh-universe-page')
    const titleSection = document.querySelector('.gh-title-section')
    const verticalLines = document.querySelectorAll('.gh-vertical-line-left, .gh-vertical-line-right')
    
    const updateLinePositions = () => {
      requestAnimationFrame(() => {
        if (titleSection && verticalLines.length > 0) {
          const titleRect = titleSection.getBoundingClientRect()
          const containerRect = titleSection.parentElement?.getBoundingClientRect()
          if (containerRect) {
            // The horizontal line is at the bottom of titleSection (the ::after pseudo-element at bottom: 0)
            // titleRect.bottom gives us the exact position where the horizontal line is
            const titleBottom = titleRect.bottom - containerRect.top
            verticalLines.forEach((line) => {
              const lineEl = line as HTMLElement
              lineEl.style.top = `${titleBottom}px`
              lineEl.style.bottom = '0'
            })
          }
        }
      })
    }
    
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

    // Use setTimeout to ensure DOM is ready, then update positions
    setTimeout(updateLinePositions, 0)
    updateLinePositions()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', updateLinePositions, { passive: true })
    handleScroll()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', updateLinePositions)
    }
  }, [])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>

      <main id="main-content" className="main-content">
        <div className="gh-universe-page" id="continuous-page" ref={(el) => {
          if (el) {
            (window as any).__continuousPageRef = el;
          }
        }}>
          {/* Hero and Wrap Section Container with Background Paths */}
          <div className="gh-hero-wrap-container">
            {/* Vertical Lines */}
            <div className="gh-vertical-line-left"></div>
            <div className="gh-vertical-line-right"></div>

            {/* Main Title Section */}
            <section className="gh-title-section">
              <h1 className="gh-main-title">
                COCO <span className="gh-agro-text">AGRO</span>TECH<span className="gh-tm-symbol">™</span>
              </h1>
            </section>

            {/* That's a Wrap Section */}
            <section className="gh-wrap-section">
              <div className="gh-wrap-container">
                <div className="gh-wrap-left">
                  <h2 className="gh-wrap-title">Premium<br />Coco Peat<br />Manufacturers</h2>
                </div>
                <div className="gh-wrap-divider"></div>
                <div className="gh-wrap-right">
                  <div className="gh-wrap-content-box">
                    <p className="gh-wrap-text">Coco Agrotech continues to innovate, but that doesn't mean the journey is over: See our newest products and sustainable solutions for global agriculture.</p>
                    <Link href="/products" className="gh-wrap-button">
                      SEE OUR PRODUCTS
                      <span className="gh-arrow">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* See You Next Year Section - Black Strip */}
            <section className="gh-next-year-section">
              <div className="gh-trusted-customers-container">
                <div className="gh-section-label">OUR TRUSTED CUSTOMERS</div>
                <div className="gh-company-scroll">
                  <div className="gh-company-scroll-inner">
                    <span className="gh-company-name">Company Name 1</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 2</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 3</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 4</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 5</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 6</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 7</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 8</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 1</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 2</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 3</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 4</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 5</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 6</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 7</span>
                    <span className="gh-company-separator">•</span>
                    <span className="gh-company-name">Company Name 8</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Section Divider */}
          <div className="gh-section-divider dark"></div>

          {/* Highlights Section */}
          <section className="gh-highlights-section">
            <div className="gh-highlights-header">
              <div className="gh-highlights-left">
                <div className="gh-year-label">2025</div>
                <h2 className="gh-highlights-title">Highlights</h2>
              </div>
              <div className="gh-highlights-right">
                <span className="gh-section-label-right">FEATURED</span>
              </div>
            </div>

            {/* Video Section */}
            <div className="gh-video-section">
              <div className="gh-video-player">
                <div className="gh-video-placeholder">
                  <img src="/coconut.png" alt="Video thumbnail" />
                  <div className="gh-play-button"></div>
                </div>
                <div className="gh-video-title">
                  <h3>Innovation in Coco Products</h3>
                  <span className="gh-video-nav">All Videos →</span>
                </div>
              </div>
              <div className="gh-video-sidebar">
                <div className="gh-video-item active">
                  <div className="gh-video-thumb">
                    <img src="/coconut.png" alt="Video" />
                  </div>
                  <div className="gh-video-info">
                    <h4>Sustainable Farming Solutions</h4>
                    <span className="gh-video-duration">5:23</span>
                  </div>
                </div>
                <div className="gh-video-item">
                  <div className="gh-video-thumb">
                    <img src="/factory.png" alt="Video" />
                  </div>
                  <div className="gh-video-info">
                    <h4>Quality Production Process</h4>
                    <span className="gh-video-duration">3:45</span>
                  </div>
                </div>
                <div className="gh-video-item">
                  <div className="gh-video-thumb">
                    <img src="/coconut.png" alt="Video" />
                  </div>
                  <div className="gh-video-info">
                    <h4>Global Export Network</h4>
                    <span className="gh-video-duration">4:12</span>
                  </div>
                </div>
            </div>
          </div>
        </section>

          {/* Section Divider */}
          <div className="gh-section-divider"></div>

          {/* Explore Section */}
          <section className="gh-explore-section">
            <div className="gh-explore-header">
              <h2 className="gh-explore-title">Explore</h2>
              <Link href="/products" className="gh-explore-link-header">
                View All →
              </Link>
            </div>
            <div className="gh-explore-cards">
              <div className="gh-explore-card">
                <div className="gh-explore-card-image">
                  <img src="/coconut.png" alt="Product" />
                </div>
                <div className="gh-explore-card-content">
                  <p className="gh-explore-card-text">Premium cocopeat substrates for hydroponic systems and commercial farming applications.</p>
                  <Link href="/products" className="gh-explore-card-button">Learn More →</Link>
                </div>
              </div>
              <div className="gh-explore-card">
                <div className="gh-explore-card-image">
                  <img src="/factory.png" alt="Product" />
                </div>
                <div className="gh-explore-card-content">
                  <p className="gh-explore-card-text">Sustainable production methods ensuring quality and environmental responsibility.</p>
                  <Link href="/products" className="gh-explore-card-button">Learn More →</Link>
                </div>
              </div>
              <div className="gh-explore-card">
                <div className="gh-explore-card-image">
                  <img src="/coconut.png" alt="Product" />
                </div>
                <div className="gh-explore-card-content">
                  <p className="gh-explore-card-text">Global distribution network serving agricultural markets worldwide.</p>
                  <Link href="/products" className="gh-explore-card-button">Learn More →</Link>
                </div>
            </div>
          </div>
        </section>

          {/* Section Divider */}
          <div className="gh-section-divider"></div>

          {/* Survey Section */}
          <section className="gh-survey-section">
            <div className="gh-survey-left">
              <div className="gh-survey-grid-bg"></div>
              <div className="gh-survey-globe">
                <Globe />
              </div>
            </div>
            <div className="gh-survey-right">
              <p className="gh-survey-text">We're continuously improving our products and services. Your feedback helps us serve you better.</p>
              <button className="gh-survey-button">Take Survey →</button>
          </div>
        </section>

          <footer className="transparent-footer">
            <div className="footer-content">
              <p>&copy; 2025 CocoAgroTech Substrates Pvt. Ltd. | All Rights Reserved</p>
            </div>
          </footer>
          </div>
      </main>
      <EnquiryPopup />
    </>
  )
}
