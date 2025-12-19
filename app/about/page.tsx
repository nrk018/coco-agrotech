'use client'

import Header from '@/components/Header'
import Link from 'next/link'

export default function About() {
  return (
    <>
      <Header />
      <main className="page-main">
        <div className="page-hero">
          <h1 className="page-title">About CocoAgroTech</h1>
          <p className="page-subtitle">Premium Coco Substrates for Global Agriculture</p>
        </div>

        <section className="page-section">
          <div className="page-container">
            <div className="content-section-box">
              <h2 className="content-title">Our Story</h2>
              <p className="content-text">
                Founded with a mission to deliver premium growing media, CocoAgroTech Substrates has grown into a trusted global supplier of cocopeat and coco chips.
                Our journey began in the heart of Tamil Nadu&apos;s coconut belt, where naturally rich raw materials meet modern manufacturing expertise.
              </p>
            </div>
          </div>
        </section>

        <section className="page-section alt-section">
          <div className="page-container">
            <div className="content-section-box">
              <h2 className="content-title">Our Facility</h2>
              <p className="content-intro">
                We produce consistent, contamination-free coco substrates suitable for commercial growers.
              </p>
              <div className="facility-grid">
                <div className="facility-item">
                  <div className="facility-icon">🏭</div>
                  <h3 className="facility-name">Large Drying Yards</h3>
                  <p className="facility-desc">Extensive outdoor drying facilities for natural processing</p>
                </div>
                <div className="facility-item">
                  <div className="facility-icon">⚙️</div>
                  <h3 className="facility-name">High-Capacity Sieving Machines</h3>
                  <p className="facility-desc">Automated sieving for consistent particle size</p>
                </div>
                <div className="facility-item">
                  <div className="facility-icon">💧</div>
                  <h3 className="facility-name">Double-Washing Systems</h3>
                  <p className="facility-desc">Thorough washing to achieve low EC levels</p>
                </div>
                <div className="facility-item">
                  <div className="facility-icon">📦</div>
                  <h3 className="facility-name">Hydraulic Block Compressors</h3>
                  <p className="facility-desc">Efficient compression for 5kg blocks and briquettes</p>
                </div>
                <div className="facility-item">
                  <div className="facility-icon">📋</div>
                  <h3 className="facility-name">Automated Packing Line</h3>
                  <p className="facility-desc">Streamlined packaging for export readiness</p>
                </div>
                <div className="facility-item">
                  <div className="facility-icon">🔬</div>
                  <h3 className="facility-name">In-House Laboratory</h3>
                  <p className="facility-desc">EC, pH & moisture testing for quality assurance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section">
          <div className="page-container">
            <div className="content-section-box">
              <h2 className="content-title">Our Commitment</h2>
              <p className="content-text">
                We believe in maintaining stable bulk orders, on-time delivery, transparent communication, and building long-term partnerships with global distributors.
              </p>
              <div className="commitment-list">
                <div className="commitment-item">
                  <span className="commitment-check">✓</span>
                  <span>Maintaining stable bulk orders</span>
                </div>
                <div className="commitment-item">
                  <span className="commitment-check">✓</span>
                  <span>On-time delivery</span>
                </div>
                <div className="commitment-item">
                  <span className="commitment-check">✓</span>
                  <span>Transparent communication</span>
                </div>
                <div className="commitment-item">
                  <span className="commitment-check">✓</span>
                  <span>Long-term partnerships with global distributors</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="page-section cta-section">
          <div className="page-container">
            <div className="cta-box">
              <h2 className="cta-title">Ready to Partner With Us?</h2>
              <p className="cta-text">Get in touch to discuss your cocopeat requirements</p>
              <Link href="/contact" className="cta-button primary">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

