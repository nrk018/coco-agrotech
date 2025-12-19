'use client'

import Header from '@/components/Header'
import ProductNav from '@/components/ProductNav'
import PageTransition from '@/components/PageTransition'
import ProductBentoGrid from '@/components/ProductBentoGrid'

export default function GrowingMediaPage() {
  const images = [
    '/product3_bento.png',
    '/coconut.png',
    '/pith.png',
    '/path.png',
    '/factory.png',
    '/coconut.png'
  ]

  return (
    <>
      <Header />
      <ProductNav />
      <PageTransition>
        <main className="product-detail-page">
        {/* Hero Section with Image */}
        <ProductBentoGrid images={images} />
        
        <div className="product-detail-container">
          {/* Left Column - Text Content */}
          <div className="product-detail-left">
            <div className="product-detail-text">
              <h2 className="product-detail-heading">GROWING MEDIA (GM GRADE)</h2>
              
              <p className="product-detail-paragraph">
                Fourteen months decomposed & Single washed, Sterilized COCO PEAT - Specially for secondary hardening tissue culture applications and landscaping home gardens houses for vegetative multiplication under disease free condition.
              </p>

              <h2 className="product-detail-heading">APPLICATIONS</h2>
              <ul className="product-detail-list">
                <li>Tissue culture (Secondary Hardening)</li>
                <li>Vertical Gardens</li>
                <li>Ornamental Plants</li>
                <li>Raising Seedlings</li>
                <li>Lawns and Fields</li>
                <li>Growing Potted Plants</li>
                <li>Rooting of Cuttings</li>
              </ul>

              <h2 className="product-detail-heading">ADVANTAGES</h2>
              <ul className="product-detail-list">
                <li>Free from soil borne pathogens & weed seeds</li>
                <li>Decomposed & Single washed, Sterilized</li>
                <li>(Low E.C), pH adjusted</li>
              </ul>

              <h2 className="product-detail-heading">SPECIFICATIONS</h2>
              <ul className="product-detail-list">
                <li>pH 6 - 7</li>
                <li>Moisture : 60 - 70%</li>
                <li>Electrical conductivity &lt;1 ds/m</li>
                <li>Organic carbon 8%</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      </PageTransition>
    </>
  )
}

