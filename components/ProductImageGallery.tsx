'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface ProductImageGalleryProps {
  images: string[]
  className?: string
}

export default function ProductImageGallery({ images, className }: ProductImageGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("product-image-gallery", className)}>
      <div className="product-gallery-container">
        {images.map((src, idx) => (
          <div
            key={idx}
            className={cn(
              "product-gallery-panel",
              hoveredIndex === idx && "hovered",
              hoveredIndex !== null && hoveredIndex !== idx && "not-hovered"
            )}
            style={{ backgroundImage: `url('${src}')` }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
    </div>
  )
}






