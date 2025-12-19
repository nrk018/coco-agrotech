'use client'

import { usePathname } from 'next/navigation'

export default function PageBackground({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  if (isHomePage) {
    return <>{children}</>
  }

  return (
    <div className="page-background-wrapper">
      <div className="page-background-image"></div>
      <div className="page-background-content">
        {children}
      </div>
    </div>
  )
}

