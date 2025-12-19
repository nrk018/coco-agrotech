'use client'

import Header from '@/components/Header'
import ProductBentoGrid from '@/components/ProductBentoGrid'

export default function QualityPage() {
  const images = [
    '/path.png',
    '/factory.png',
    '/coconut.png',
    '/pith.png',
    '/path.png',
    '/factory.png'
  ]

  return (
    <>
      <Header />
      <main className="product-detail-page">
        {/* Bento Grid - Spans top left to top right with diagonal cuts */}
        <ProductBentoGrid images={images} />
        
        <div className="product-detail-container">
          {/* Left Column - Text Content */}
          <div className="product-detail-left">

            {/* Text Sections */}
            <div className="product-detail-text">
              <h2 className="product-detail-heading">QUALITY ASSURANCE</h2>
              <p className="product-detail-paragraph">
                Quality is the cornerstone of our operations. We implement comprehensive quality control measures throughout 
                the entire production process, from raw material selection to final packaging. Our quality assurance protocols 
                ensure that every product meets or exceeds international standards.
              </p>
              <p className="product-detail-paragraph">
                We maintain state-of-the-art testing facilities and work with certified laboratories to verify product quality. 
                Our quality team conducts regular inspections and testing to ensure consistency, purity, and performance of 
                our coco peat products.
              </p>

              <h2 className="product-detail-heading">BENEFITS</h2>
              <ul className="product-detail-list">
                <li>Certified quality standards compliance</li>
                <li>Consistent product performance and reliability</li>
                <li>Free from contaminants and pathogens</li>
                <li>Detailed quality documentation and traceability</li>
                <li>Regular third-party testing and certification</li>
                <li>Custom quality specifications available</li>
                <li>International export quality standards</li>
              </ul>

              <h2 className="product-detail-heading">USAGE</h2>
              <ul className="product-detail-list">
                <li>Export markets requiring certified quality</li>
                <li>Premium greenhouse and hydroponic operations</li>
                <li>Research and development applications</li>
                <li>High-value crop production</li>
                <li>Organic and certified organic farming</li>
                <li>International commercial projects</li>
                <li>Quality-sensitive horticultural applications</li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
