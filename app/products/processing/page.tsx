'use client'

import Header from '@/components/Header'
import ProductBentoGrid from '@/components/ProductBentoGrid'

export default function ProcessingPage() {
  const images = [
    '/factory.png',
    '/coconut.png',
    '/path.png',
    '/factory.png',
    '/coconut.png',
    '/pith.png'
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
              <h2 className="product-detail-heading">PROCESSING</h2>
              <p className="product-detail-paragraph">
                Our advanced processing facility ensures that every batch of coco peat meets the highest quality standards. 
                The processing involves multiple stages including sieving, washing, drying, and compression to create products 
                suitable for various agricultural and horticultural applications.
              </p>
              <p className="product-detail-paragraph">
                We use state-of-the-art machinery and follow strict quality control protocols at every step. Our processing 
                methods are designed to preserve the natural properties of coco peat while ensuring consistency and purity in 
                every product we deliver.
              </p>

              <h2 className="product-detail-heading">BENEFITS</h2>
              <ul className="product-detail-list">
                <li>Consistent quality across all batches</li>
                <li>Optimal EC and pH levels for plant growth</li>
                <li>Free from harmful pathogens and contaminants</li>
                <li>Custom processing to meet specific requirements</li>
                <li>Efficient production with minimal waste</li>
                <li>Environmentally sustainable processing methods</li>
                <li>Rigorous quality testing at every stage</li>
              </ul>

              <h2 className="product-detail-heading">USAGE</h2>
              <ul className="product-detail-list">
                <li>Commercial greenhouse operations</li>
                <li>Hydroponic farming systems</li>
                <li>Large-scale nursery production</li>
                <li>Export quality substrates</li>
                <li>Custom blend formulations</li>
                <li>Bulk agricultural applications</li>
                <li>Industrial horticulture projects</li>
              </ul>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
