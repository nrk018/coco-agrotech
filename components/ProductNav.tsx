'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function ProductNav() {
  const pathname = usePathname()

  const productPages = [
    { name: 'Coco Peat', href: '/products/coco-peat' },
    { name: 'Agri Peat', href: '/products/agri-peat' },
    { name: 'Growing Media', href: '/products/growing-media' }
  ]

  // Show on product detail pages and main products page
  const isProductPage = pathname === '/products' ||
    (pathname?.startsWith('/products/') && 
     (pathname === '/products/coco-peat' || 
      pathname === '/products/agri-peat' || 
      pathname === '/products/growing-media'))

  if (!isProductPage) {
    return null
  }

  return (
    <nav className="product-nav">
      <div className="product-nav-container">
        {productPages.map((page) => {
          // Active if current path matches, or if on /products and it's the first item (Coco Peat)
          const isActive = pathname === page.href || (pathname === '/products' && page.href === '/products/coco-peat')
          return (
            <Link
              key={page.href}
              href={page.href}
              className={cn('product-nav-button', isActive && 'active')}
            >
              {page.name}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}






