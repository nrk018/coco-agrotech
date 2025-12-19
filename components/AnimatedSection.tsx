'use client'

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function AnimatedSection({ children, className = '', id }: AnimatedSectionProps) {
  const [ref, isIntersecting] = useIntersectionObserver()

  return (
    <section
      ref={ref}
      id={id}
      className={className}
      style={{
        opacity: isIntersecting ? 1 : 0,
        transform: isIntersecting ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
      }}
    >
      {children}
    </section>
  )
}

