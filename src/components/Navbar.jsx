import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Prices', href: '#prices' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Find Us', href: '#contact' },
]

// SVG badge logo matching the Cut Doctors circular badge design
function CutDoctorsLogo({ className = '' }) {
  return (
    <svg
      viewBox="0 0 220 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Cut Doctors logo"
      role="img"
    >
      {/* Decorative left flourish */}
      <g fill="none" stroke="white" strokeWidth="1" opacity="0.7">
        <path d="M 2 45 Q 8 38 14 42 Q 20 46 26 40 Q 30 35 34 38 Q 36 40 34 43" />
        <path d="M 2 45 Q 8 52 14 48 Q 20 44 26 50 Q 30 55 34 52 Q 36 50 34 47" />
        <circle cx="6" cy="45" r="1.5" fill="white" opacity="0.5" />
        <circle cx="18" cy="41" r="1" fill="white" opacity="0.4" />
        <circle cx="18" cy="49" r="1" fill="white" opacity="0.4" />
      </g>

      {/* Decorative right flourish */}
      <g fill="none" stroke="white" strokeWidth="1" opacity="0.7">
        <path d="M 218 45 Q 212 38 206 42 Q 200 46 194 40 Q 190 35 186 38 Q 184 40 186 43" />
        <path d="M 218 45 Q 212 52 206 48 Q 200 44 194 50 Q 190 55 186 52 Q 184 50 186 47" />
        <circle cx="214" cy="45" r="1.5" fill="white" opacity="0.5" />
        <circle cx="202" cy="41" r="1" fill="white" opacity="0.4" />
        <circle cx="202" cy="49" r="1" fill="white" opacity="0.4" />
      </g>

      {/* Barber pole — centered top */}
      <g transform="translate(104, 4)">
        <rect x="0" y="0" width="12" height="28" rx="6" fill="#B22222" />
        <rect x="0" y="0" width="12" height="28" rx="6"
          fill="none"
          stroke="white"
          strokeWidth="0"
        />
        {/* Stripe overlays */}
        <clipPath id="poleClip">
          <rect x="0" y="0" width="12" height="28" rx="6" />
        </clipPath>
        <g clipPath="url(#poleClip)">
          <rect x="-4" y="3" width="20" height="4" fill="white" transform="rotate(-30 6 14)" opacity="0.9" />
          <rect x="-4" y="11" width="20" height="4" fill="white" transform="rotate(-30 6 14)" opacity="0.9" />
          <rect x="-4" y="19" width="20" height="4" fill="white" transform="rotate(-30 6 14)" opacity="0.9" />
          <rect x="0" y="0" width="12" height="4" fill="#1a2a4a" opacity="0.5" />
          <rect x="0" y="24" width="12" height="4" fill="#1a2a4a" opacity="0.5" />
        </g>
        {/* Globe tops */}
        <circle cx="6" cy="0" r="4" fill="#E8E8E8" />
        <circle cx="6" cy="28" r="4" fill="#E8E8E8" />
      </g>

      {/* Main text: CUT DOCTORS */}
      <text
        x="110"
        y="52"
        textAnchor="middle"
        fontFamily="Oswald, sans-serif"
        fontWeight="700"
        fontSize="30"
        fill="white"
        letterSpacing="3"
      >
        CUT DOCTORS
      </text>

      {/* Thin rule lines flanking EST. 2012 */}
      <line x1="56" y1="61" x2="88" y2="61" stroke="white" strokeWidth="0.75" opacity="0.5" />
      <line x1="132" y1="61" x2="164" y2="61" stroke="white" strokeWidth="0.75" opacity="0.5" />

      {/* EST. 2012 */}
      <text
        x="110"
        y="65"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontStyle="italic"
        fontSize="9"
        fill="white"
        opacity="0.75"
        letterSpacing="2"
      >
        EST. 2012
      </text>

      {/* Scissors below EST */}
      <g transform="translate(100, 70)" fill="white" opacity="0.7">
        {/* Left blade */}
        <ellipse cx="4" cy="6" rx="2.5" ry="6" transform="rotate(-20 4 6)" />
        {/* Right blade */}
        <ellipse cx="16" cy="6" rx="2.5" ry="6" transform="rotate(20 16 6)" />
        {/* Pivot */}
        <circle cx="10" cy="8" r="2" fill="#B22222" />
        {/* Handles */}
        <ellipse cx="3" cy="14" rx="3" ry="4" transform="rotate(-15 3 14)" />
        <ellipse cx="17" cy="14" rx="3" ry="4" transform="rotate(15 17 14)" />
      </g>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-black/40'
            : 'bg-black/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <a
              href="#"
              className="flex items-center"
              aria-label="Cut Doctors — Home"
            >
              <CutDoctorsLogo className="h-12 w-auto" />
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link font-inter text-sm font-medium text-white/70 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop Book Now CTA */}
            <div className="hidden md:flex">
              <a
                href="#book"
                className="bg-barber-red hover:bg-red-700 text-white font-inter font-semibold text-sm px-5 py-2.5 rounded transition-colors duration-150"
              >
                Book Now
              </a>
            </div>

            {/* Mobile: Book Now + Hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href="#book"
                className="bg-barber-red hover:bg-red-700 text-white font-inter font-semibold text-xs px-3.5 py-2 rounded transition-colors duration-150"
              >
                Book Now
              </a>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                className="text-white hover:text-gold transition-colors duration-150 p-1"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/98 flex flex-col pt-20 px-8"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex justify-center mb-8">
            <CutDoctorsLogo className="h-20 w-auto" />
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="font-oswald text-2xl font-medium text-white hover:text-gold transition-colors duration-150 uppercase tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-10 pt-8 border-t border-white/10">
            <a
              href="tel:+14072032836"
              className="flex items-center gap-2 font-mono text-sm text-gold"
            >
              (407) 203-2836
            </a>
          </div>
        </div>
      )}
    </>
  )
}
