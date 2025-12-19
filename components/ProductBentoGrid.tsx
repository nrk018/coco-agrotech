'use client'

import { cn } from '@/lib/utils'

interface ProductBentoGridProps {
  images: string[]
  className?: string
}

export default function ProductBentoGrid({ images, className }: ProductBentoGridProps) {
  return (
    <div className={cn("product-hero-section", className)}>
      {/* Single background image */}
      <div 
        className="product-hero-image" 
        style={{ backgroundImage: `url('${images[0] || '/product1_bento.png'}')` }}
      ></div>
      
      {/* Green text card overlay */}
      <div className="product-hero-overlay">
        <div className="product-hero-card">
          <div className="product-detail-logo">
            <h1 className="logo-text">
              <span className="logo-text-large">COCO</span>
              <span className="logo-text-small">AGROTECH</span>
            </h1>
            <div className="logo-tagline">
              <p>COCOPEAT TO MAKE THE WORLD GREEN</p>
            </div>
          </div>
          <div className="product-detail-content">
            <p className="product-detail-intro">
              Coco Agrotech is a leading manufacturer and supplier of natural and organic coco peat products in India. 
              We specialize in producing high-quality coco peat substrates for various applications including hydroponics, 
              nurseries, greenhouses, tissue culture, and home gardening.
            </p>
            <h3 className="product-detail-section-title">INFRASTRUCTURE</h3>
            <p className="product-detail-paragraph-white">
              Our state-of-the-art manufacturing facility in Bangalore is equipped with advanced machinery for processing 
              and packing coco peat products. We have dedicated manufacturing units, composting areas, and quality control 
              laboratories. Our infrastructure supports large-scale production while maintaining strict quality standards. 
              We continuously invest in innovation and technology to improve our manufacturing processes.
            </p>
            <h3 className="product-detail-section-title">ASSURED QUALITY</h3>
            <p className="product-detail-paragraph-white">
              Quality is at the heart of everything we do. We maintain rigorous quality control processes at every stage 
              of production, from raw material sourcing to final packaging. Our products undergo thorough testing to ensure 
              they meet international standards. We work closely with our clients to understand their specific requirements 
              and deliver products that exceed expectations. Our commitment to quality has earned us the trust of customers 
              worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

