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
          const wrapSection = document.querySelector('.gh-wrap-section')
          if (containerRect && wrapSection) {
            // The horizontal line is at the bottom of titleSection (the ::after pseudo-element at bottom: 0)
            // titleRect.bottom gives us the exact position where the horizontal line is
            const titleBottom = titleRect.bottom - containerRect.top
            const wrapRect = wrapSection.getBoundingClientRect()
            const wrapTop = wrapRect.top - containerRect.top
            const wrapHeight = wrapRect.height
            // Calculate where the trusted customers section starts (before it)
            const trustedCustomers = document.querySelector('.gh-trusted-customers-container')
            let lineEnd = wrapTop + wrapHeight
            if (trustedCustomers) {
              const trustedRect = trustedCustomers.getBoundingClientRect()
              lineEnd = trustedRect.top - containerRect.top
            }
            const lineHeight = lineEnd - titleBottom
            verticalLines.forEach((line) => {
              const lineEl = line as HTMLElement
              lineEl.style.top = `${titleBottom}px`
              lineEl.style.height = `${lineHeight}px`
              lineEl.style.bottom = 'auto'
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
                <div className="gh-stamp-area">
                  <img 
                    src="/plant_9628875.png" 
                    alt="Plant icon" 
                    className="gh-plant-icon"
                  />
                </div>
                <div className="gh-wrap-divider"></div>
                <div className="gh-wrap-right">
                  <div className="gh-wrap-content-box">
                    <p className="gh-wrap-text">With over 12 years of proven expertise, Coco Agrotech is a leading India-wide exporter and supplier of premium coco peat, delivering sustainable, high-quality growing solutions trusted by agricultural and horticultural professionals across the country.</p>
                    <Link href="/products" className="gh-wrap-button">
                      SEE OUR PRODUCTS
                      <span className="gh-arrow">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Our Trusted Customers Section - Attached to hero section bottom */}
            <div className="gh-trusted-customers-container">
                <div className="gh-section-label">WHAT OUR CUSTOMERS SAY</div>
                <div className="gh-company-scroll">
                  <div className="gh-company-scroll-inner">
                    <div className="gh-company-item">
                      <span className="gh-company-name">GreenTech Farms</span>
                      <span className="gh-company-testimonial">"Exceptional quality coco peat that transformed our hydroponic yields."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">AgriSolutions Inc.</span>
                      <span className="gh-company-testimonial">"The best coco peat substrate we've used - consistent and reliable."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">Urban Growers</span>
                      <span className="gh-company-testimonial">"Premium coco peat that delivers outstanding results every time."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">Sustainable Farms</span>
                      <span className="gh-company-testimonial">"Eco-friendly and high-performing - perfect for our organic operations."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">Global Horticulture</span>
                      <span className="gh-company-testimonial">"Superior coco peat quality that meets all our commercial farming needs."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">Premium Gardens</span>
                      <span className="gh-company-testimonial">"The finest coco peat products - our plants thrive with CocoAgroTech."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">GreenTech Farms</span>
                      <span className="gh-company-testimonial">"Exceptional quality coco peat that transformed our hydroponic yields."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">AgriSolutions Inc.</span>
                      <span className="gh-company-testimonial">"The best coco peat substrate we've used - consistent and reliable."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">Urban Growers</span>
                      <span className="gh-company-testimonial">"Premium coco peat that delivers outstanding results every time."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">Sustainable Farms</span>
                      <span className="gh-company-testimonial">"Eco-friendly and high-performing - perfect for our organic operations."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">Global Horticulture</span>
                      <span className="gh-company-testimonial">"Superior coco peat quality that meets all our commercial farming needs."</span>
                    </div>
                    <span className="gh-company-separator">•</span>
                    <div className="gh-company-item">
                      <span className="gh-company-name">Premium Gardens</span>
                      <span className="gh-company-testimonial">"The finest coco peat products - our plants thrive with CocoAgroTech."</span>
                    </div>
                  </div>
                </div>
            </div>
          </div>

          {/* Section Divider */}
          <div className="gh-section-divider dark"></div>

          {/* Highlights Section */}
          <section className="gh-highlights-section">
            <div className="gh-highlights-header">
              <div className="gh-highlights-left">
                <h2 className="gh-highlights-title">Why Choose Our Product?</h2>
                <p className="gh-highlights-subtitle">Watch through our videos of our production process</p>
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
                  <h3>Production Process 1</h3>
                  <span className="gh-video-nav">All Videos →</span>
                </div>
              </div>
              <div className="gh-video-sidebar">
                <div className="gh-video-item active">
                  <div className="gh-video-thumb">
                    <img src="/coconut.png" alt="Video" />
                  </div>
                  <div className="gh-video-info">
                    <h4>Production Process 1</h4>
                    <span className="gh-video-duration">5:23</span>
                  </div>
                </div>
                <div className="gh-video-item">
                  <div className="gh-video-thumb">
                    <img src="/factory.png" alt="Video" />
                  </div>
                  <div className="gh-video-info">
                    <h4>Production Process 2</h4>
                    <span className="gh-video-duration">3:45</span>
                  </div>
                </div>
                <div className="gh-video-item">
                  <div className="gh-video-thumb">
                    <img src="/coconut.png" alt="Video" />
                  </div>
                  <div className="gh-video-info">
                    <h4>Production Process 3</h4>
                    <span className="gh-video-duration">4:12</span>
                  </div>
                </div>
            </div>
          </div>
        </section>

          {/* Section Divider */}
          <div className="gh-section-divider"></div>

          {/* Our Products Section */}
          <section className="gh-explore-section">
            <div className="gh-explore-header">
              <h2 className="gh-explore-title">Our Products</h2>
              <Link href="/products" className="gh-explore-link-header">
                View All →
              </Link>
            </div>
            <div className="gh-explore-cards">
              <div className="gh-explore-card">
                <div className="gh-explore-card-image">
                  <img src="/coconut.png" alt="Coco Peat" />
                </div>
                <div className="gh-explore-card-content">
                  <h3 className="gh-explore-card-title">Coco Peat</h3>
                  <p className="gh-explore-card-text">Premium cocopeat substrates for hydroponic systems and commercial farming applications.</p>
                  <Link href="/products/coco-peat" className="gh-explore-card-button">Learn More →</Link>
                </div>
              </div>
              <div className="gh-explore-card">
                <div className="gh-explore-card-image">
                  <img src="/factory.png" alt="Growing Media" />
                </div>
                <div className="gh-explore-card-content">
                  <h3 className="gh-explore-card-title">Growing Media</h3>
                  <p className="gh-explore-card-text">Sustainable production methods ensuring quality and environmental responsibility.</p>
                  <Link href="/products/growing-media" className="gh-explore-card-button">Learn More →</Link>
                </div>
              </div>
              <div className="gh-explore-card">
                <div className="gh-explore-card-image">
                  <img src="/coconut.png" alt="Agri Peat" />
                </div>
                <div className="gh-explore-card-content">
                  <h3 className="gh-explore-card-title">Agri Peat</h3>
                  <p className="gh-explore-card-text">Global distribution network serving agricultural markets worldwide.</p>
                  <Link href="/products/agri-peat" className="gh-explore-card-button">Learn More →</Link>
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
              <div className="gh-survey-plant-overlay">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/plant_9628875.png" 
                  alt="Plant" 
                  className="gh-plant-overlay-img"
                  style={{
                    width: '420px',
                    height: '420px',
                    objectFit: 'contain',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1,
                    zIndex: 20
                  }}
                />
              </div>
            </div>
            <div className="gh-survey-right">
              <h2 className="gh-survey-title">Why Coco Agro Tech is the Best Coco Peat Manufacturers</h2>
              <div className="gh-survey-boxes">
                <div className="gh-survey-box">
                  <div className="gh-survey-box-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div className="gh-survey-box-number">15 Acres</div>
                  <div className="gh-survey-box-text">Exclusive Substrates production unit</div>
                </div>
                <div className="gh-survey-box">
                  <div className="gh-survey-box-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <div className="gh-survey-box-number">80000 Sq Ft</div>
                  <div className="gh-survey-box-text">Exclusive Drying yard for peat drying</div>
                </div>
                <div className="gh-survey-box">
                  <div className="gh-survey-box-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                    </svg>
                  </div>
                  <div className="gh-survey-box-number">10k Sq Ft</div>
                  <div className="gh-survey-box-text">Production Hall</div>
                </div>
                <div className="gh-survey-box">
                  <div className="gh-survey-box-icon">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div className="gh-survey-box-number">4 Exclusive</div>
                  <div className="gh-survey-box-text">Bunkers & tankers for buffering and washing</div>
                </div>
              </div>
          </div>
        </section>

          </div>
      </main>
      <EnquiryPopup />
    </>
  )
}
