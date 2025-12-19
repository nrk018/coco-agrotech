'use client'

import { useState } from 'react'
import { Sidebar, DesktopSidebar as AceternityDesktopSidebar, SidebarLink } from '@/components/ui/sidebar'
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
    icon: <IconHome size={24} />,
  },
  {
    label: 'Products',
    href: '/products',
    icon: <IconShoppingBag size={24} />,
  },
  {
    label: 'About',
    href: '/about',
    icon: <IconInfoCircle size={24} />,
  },
  {
    label: 'Gallery',
    href: '/gallery',
    icon: <IconPhoto size={24} />,
  },
  {
    label: 'Contact',
    href: '/contact',
    icon: <IconMail size={24} />,
  },
]

export default function DesktopSidebar() {
  const [open, setOpen] = useState(false)

  return (
    <Sidebar open={open} setOpen={setOpen} animate={true}>
      <AceternityDesktopSidebar>
        <div className="flex flex-col h-full">
          {/* Logo/Brand */}
          <div className="p-4 border-b border-white/10 mb-4 flex items-center justify-center">
            <Link 
              href="/" 
              className="text-white flex items-center justify-center"
            >
              <span className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-sm font-bold">
                CA
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-2 px-2">
            {links.map((link, idx) => (
              <SidebarLink
                key={idx}
                link={link}
                className="text-white hover:text-[#2ea043] transition-colors duration-200"
              />
            ))}
          </nav>

          {/* Request Quote Button */}
          <div className="p-2 border-t border-white/10">
            <button
              onClick={() => {
                window.dispatchEvent(new CustomEvent('open-enquiry-popup'))
              }}
              className="flex items-center justify-center w-full h-10 bg-[#2ea043] text-white rounded-lg font-semibold hover:bg-[#1a7f37] transition-colors text-xs whitespace-nowrap overflow-hidden"
            >
              <span>Request Quote</span>
            </button>
          </div>
        </div>
      </AceternityDesktopSidebar>
    </Sidebar>
  )
}
