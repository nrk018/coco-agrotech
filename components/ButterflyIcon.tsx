'use client'

import { useEffect, useState } from 'react'

export default function ButterflyIcon() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <span 
      className="title-icon"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`butterfly-svg ${isHovered ? 'hover' : ''}`}
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
        }}
      >
        {/* Left wing */}
        <path
          d="M30 50 Q20 30, 10 40 Q15 50, 20 55 Q25 50, 30 50 Z"
          fill="#2ea043"
          className="butterfly-wing butterfly-wing-left"
        />
        <path
          d="M30 50 Q20 70, 10 60 Q15 50, 20 45 Q25 50, 30 50 Z"
          fill="#1a7f37"
          className="butterfly-wing butterfly-wing-left"
        />
        
        {/* Body */}
        <ellipse cx="50" cy="50" rx="3" ry="40" fill="#1f2328" className="butterfly-body" />
        
        {/* Right wing */}
        <path
          d="M70 50 Q80 30, 90 40 Q85 50, 80 55 Q75 50, 70 50 Z"
          fill="#2ea043"
          className="butterfly-wing butterfly-wing-right"
        />
        <path
          d="M70 50 Q80 70, 90 60 Q85 50, 80 45 Q75 50, 70 50 Z"
          fill="#1a7f37"
          className="butterfly-wing butterfly-wing-right"
        />
        
        {/* Decorative spots */}
        <circle cx="25" cy="45" r="3" fill="#ffffff" opacity="0.6" />
        <circle cx="75" cy="45" r="3" fill="#ffffff" opacity="0.6" />
      </svg>
    </span>
  )
}

