'use client'

export default function MobileHamburger() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent('toggle-mobile-sidebar'))
  }

  return (
    <button
      className="mobile-hamburger-btn md:hidden"
      onClick={handleClick}
      aria-label="Toggle menu"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>
  )
}

