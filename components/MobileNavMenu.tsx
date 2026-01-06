'use client'

import { usePathname, useRouter } from 'next/navigation'
import { InteractiveMenu, InteractiveMenuItem } from '@/components/ui/modern-mobile-menu'
import { Home, ShoppingBag, Info, Image, Mail } from 'lucide-react'
import { useMemo } from 'react'

export default function MobileNavMenu() {
  const pathname = usePathname()
  const router = useRouter()

  const menuItems: InteractiveMenuItem[] = [
    { label: 'Home', icon: Home },
    { label: 'Products', icon: ShoppingBag },
    { label: 'About', icon: Info },
    { label: 'Gallery', icon: Image },
    { label: 'Contact', icon: Mail },
  ]

  // Map paths to menu indices
  const activeIndex = useMemo(() => {
    if (pathname === '/') return 0
    if (pathname?.startsWith('/products')) return 1
    if (pathname === '/about') return 2
    if (pathname === '/gallery') return 3
    if (pathname === '/contact') return 4
    return 0
  }, [pathname])

  const handleItemClick = (index: number) => {
    const paths = ['/', '/products', '/about', '/gallery', '/contact']
    const targetPath = paths[index]
    if (targetPath && pathname !== targetPath) {
      router.push(targetPath)
    }
  }

  return (
    <div className="mobile-nav-menu-container">
      <InteractiveMenu 
        items={menuItems}
        accentColor="#2ea043"
        activeIndex={activeIndex}
        onItemClick={handleItemClick}
      />
    </div>
  )
}

