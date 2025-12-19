'use client'

import Header from '@/components/Header'
import ProductNav from '@/components/ProductNav'
import PageTransition from '@/components/PageTransition'
import ProductBentoGrid from '@/components/ProductBentoGrid'

export default function CocoPeatPage() {
  const images = [
    '/product1_bento.png',
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
        {/* Bento Grid - Spans top left to top right with diagonal cuts */}
        <ProductBentoGrid images={images} />
        
        <div className="product-detail-container">
          {/* Left Column - Text Content */}
          <div className="product-detail-left">

            {/* Text Sections */}
            <div className="product-detail-text">
              <h2 className="product-detail-heading">COCO PEAT</h2>
              <p className="product-detail-paragraph">
                Coco peat, also known as coir peat or coco coir, is a natural fiber extracted from the husk of coconuts. 
                It is a byproduct of the coconut industry and has become an increasingly popular growing medium in horticulture 
                and agriculture. Coco peat is known for its excellent water retention, aeration properties, and sustainability.
              </p>
              <p className="product-detail-paragraph">
                Coir peat is a slow-decomposing organic material that provides a stable growing environment for plants. 
                It has a neutral pH and contains natural nutrients that benefit plant growth. The fibrous structure allows 
                for excellent root development and prevents soil compaction.
              </p>

              <h2 className="product-detail-heading">BENEFITS</h2>
              <ul className="product-detail-list">
                <li>Excellent water retention while maintaining good drainage</li>
                <li>Superior aeration for healthy root systems</li>
                <li>Natural pH balance suitable for most plants</li>
                <li>Contains beneficial microorganisms</li>
                <li>Sustainable and renewable resource</li>
                <li>Reduces soil compaction and improves soil structure</li>
                <li>Helps in nutrient availability and retention</li>
              </ul>

              <h2 className="product-detail-heading">USAGE</h2>
              <ul className="product-detail-list">
                <li>Tissue-culture and micropropagation</li>
                <li>Nurseries and seedling production</li>
                <li>Lawn establishment and turf management</li>
                <li>Hydroponic and soilless cultivation systems</li>
                <li>Greenhouse and controlled environment agriculture</li>
                <li>Potting mixes and container gardening</li>
                <li>Home gardening and landscaping</li>
              </ul>
            </div>
          </div>

        </div>
      </main>
      </PageTransition>
    </>
  )
}
