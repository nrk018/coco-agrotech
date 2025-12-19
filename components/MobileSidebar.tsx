'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Sidebar, MobileSidebar as AceternityMobileSidebar, SidebarLink } from '@/components/ui/sidebar'
import Link from 'next/link'
import { 
  IconShoppingBag, 
  IconInfoCircle, 
  IconPhoto, 
  IconMail,
  IconHome
} from '@tabler/icons-react'

const links = [
  {
    label: 'Home',
    href: '/',
    icon: <IconHome size={20} />,
  },
  {
    label: 'Products',
    href: '/products',
    icon: <IconShoppingBag size={20} />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <IconInfoCircle size={20} />,
  },
  {
    label: 'Gallery',
    href: '/gallery',
    icon: <IconPhoto size={20} />,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <IconMail size={20} />,
  },
]

export default function MobileSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sidebar open={open} setOpen={setOpen} animate={false}>
      <AceternityMobileSidebar className="mobile-sidebar-content">
        <div className="mobile-sidebar-inner">
          {/* Logo/Brand */}
          <div className="mobile-sidebar-logo">
            <Link 
              href="/" 
              onClick={() => setOpen(false)}
              className="mobile-sidebar-logo-link"
            >
              CocoAgroTech
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="mobile-sidebar-nav">
            {links.map((link, idx) => {
              const isActive = (link.href === '/' && pathname === '/') || 
                              (link.href !== '/' && pathname?.startsWith(link.href))
              return (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={`mobile-sidebar-link ${isActive ? 'active' : ''}`}
                />
              )
            })}
          </nav>

          {/* Request Quote Button */}
          <div className="mobile-sidebar-button">
            <button
              onClick={() => {
                setOpen(false)
                window.dispatchEvent(new CustomEvent('open-enquiry-popup'))
              }}
              className="mobile-sidebar-cta"
            >
              Request Quote
            </button>
          </div>
        </div>
      </AceternityMobileSidebar>
    </Sidebar>
  )
}
