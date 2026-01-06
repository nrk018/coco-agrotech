'use client'

import Header from '@/components/Header'
import ProductNav from '@/components/ProductNav'
import PageTransition from '@/components/PageTransition'
import ProductBentoGrid from '@/components/ProductBentoGrid'

export default function AgriPeatPage() {
  const images = [
    '/product2_bento.png',
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
              <h2 className="product-detail-heading">AGRI PEAT & AGRI PEAT PLUS (TC GRADE)</h2>
              
              <p className="product-detail-paragraph">
                Fourteen months decomposed & Triple washed, Sterilized COCO PEAT - specially for primary hardening tissue culture applications and green houses for vegetative multiplication under disease free condition.
              </p>

              <h2 className="product-detail-heading">APPLICATIONS</h2>
              <ul className="product-detail-list">
                <li>Tissue culture (Primary hardening)</li>
                <li>Floriculture</li>
                <li>Horticulture</li>
                <li>Hydroponics</li>
                <li>Rooting Media</li>
                <li>Lawns and Fields</li>
                <li>Raising Seedlings</li>
              </ul>

              <h2 className="product-detail-heading">ADVANTAGES</h2>
              <ul className="product-detail-list">
                <li>Free from soil borne pathogens & weed seeds</li>
                <li>Decomposed & Triple washed, Sterilized</li>
                <li>CAL-MAG buffered, salinity controlled (Low E.C), pH adjusted</li>
                <li>Well aged</li>
              </ul>

              <h2 className="product-detail-heading">SPECIFICATIONS</h2>
              <ul className="product-detail-list">
                <li>pH 6-7</li>
                <li>Moisture : 60 - 70%</li>
                <li>Electrical conductivity 0.5 ds/m</li>
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






