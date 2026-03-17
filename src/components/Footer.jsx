import { Instagram, Facebook, Phone, MapPin } from 'lucide-react'

const HOURS_SIMPLE = [
  { day: 'Mon–Sun', label: '9am–6pm' },
]

function isOpenNow() {
  const now = new Date()
  const h = now.getHours() + now.getMinutes() / 60
  return h >= 9 && h < 18
}

function CutDoctorsLogoSmall() {
  return (
    <svg
      viewBox="0 0 220 90"
      xmlns="http://www.w3.org/2000/svg"
      className="h-14 w-auto"
      aria-label="Cut Doctors logo"
      role="img"
    >
      <g fill="none" stroke="white" strokeWidth="1" opacity="0.5">
        <path d="M 2 45 Q 8 38 14 42 Q 20 46 26 40 Q 30 35 34 38 Q 36 40 34 43" />
        <path d="M 2 45 Q 8 52 14 48 Q 20 44 26 50 Q 30 55 34 52 Q 36 50 34 47" />
        <circle cx="6" cy="45" r="1.5" fill="white" opacity="0.4" />
      </g>
      <g fill="none" stroke="white" strokeWidth="1" opacity="0.5">
        <path d="M 218 45 Q 212 38 206 42 Q 200 46 194 40 Q 190 35 186 38 Q 184 40 186 43" />
        <path d="M 218 45 Q 212 52 206 48 Q 200 44 194 50 Q 190 55 186 52 Q 184 50 186 47" />
        <circle cx="214" cy="45" r="1.5" fill="white" opacity="0.4" />
      </g>
      <g transform="translate(104, 4)">
        <rect x="0" y="0" width="12" height="28" rx="6" fill="#B22222" />
        <clipPath id="poleClipF">
          <rect x="0" y="0" width="12" height="28" rx="6" />
        </clipPath>
        <g clipPath="url(#poleClipF)">
          <rect x="-4" y="3" width="20" height="4" fill="white" transform="rotate(-30 6 14)" opacity="0.9" />
          <rect x="-4" y="11" width="20" height="4" fill="white" transform="rotate(-30 6 14)" opacity="0.9" />
          <rect x="-4" y="19" width="20" height="4" fill="white" transform="rotate(-30 6 14)" opacity="0.9" />
        </g>
        <circle cx="6" cy="0" r="4" fill="#E8E8E8" />
        <circle cx="6" cy="28" r="4" fill="#E8E8E8" />
      </g>
      <text x="110" y="52" textAnchor="middle" fontFamily="Oswald, sans-serif" fontWeight="700" fontSize="30" fill="white" letterSpacing="3">
        CUT DOCTORS
      </text>
      <line x1="56" y1="61" x2="88" y2="61" stroke="white" strokeWidth="0.75" opacity="0.4" />
      <line x1="132" y1="61" x2="164" y2="61" stroke="white" strokeWidth="0.75" opacity="0.4" />
      <text x="110" y="65" textAnchor="middle" fontFamily="'Playfair Display', serif" fontStyle="italic" fontSize="9" fill="white" opacity="0.6" letterSpacing="2">
        EST. 2012
      </text>
      <g transform="translate(100, 70)" fill="white" opacity="0.5">
        <ellipse cx="4" cy="6" rx="2.5" ry="6" transform="rotate(-20 4 6)" />
        <ellipse cx="16" cy="6" rx="2.5" ry="6" transform="rotate(20 16 6)" />
        <circle cx="10" cy="8" r="2" fill="#B22222" />
        <ellipse cx="3" cy="14" rx="3" ry="4" transform="rotate(-15 3 14)" />
        <ellipse cx="17" cy="14" rx="3" ry="4" transform="rotate(15 17 14)" />
      </g>
    </svg>
  )
}

export default function Footer() {
  const open = isOpenNow()

  return (
    <footer
      className="bg-black border-t border-white/5 text-white"
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <CutDoctorsLogoSmall />
            <p className="font-inter text-sm text-white/40 leading-relaxed mb-5 max-w-xs mt-4">
              East Orlando's premier men's barbershop — where old-school craft meets modern precision.
            </p>
            <div className="flex items-center gap-2">
              <span
                className={`w-2.5 h-2.5 rounded-full ${
                  open ? 'bg-green-400 status-dot-open' : 'bg-red-500'
                }`}
              />
              <span className="font-mono text-sm text-white/60">
                {open ? 'Open Now' : 'Closed'}
              </span>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <p className="font-oswald text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">
              Navigate
            </p>
            <nav className="space-y-2.5" aria-label="Footer navigation">
              {[
                { label: 'About', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Find Us', href: '#contact' },
                { label: 'Book Now', href: '#book' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block font-inter text-sm text-white/50 hover:text-white transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact + Social */}
          <div>
            <p className="font-oswald text-xs font-semibold uppercase tracking-[0.15em] text-white/30 mb-4">
              Contact
            </p>
            <div className="space-y-3 mb-6">
              <a
                href="tel:+14072032836"
                className="flex items-center gap-2 font-mono text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                (407) 203-2836
              </a>
              <a
                href="https://maps.google.com/?q=829+Woodbury+Rd+Orlando+FL+32828"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 font-inter text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                <MapPin className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                829 Woodbury Rd, Orlando FL 32828
              </a>
            </div>

            <div className="space-y-1 mb-6">
              {HOURS_SIMPLE.map((h) => (
                <div key={h.day} className="flex gap-3">
                  <span className="font-mono text-xs text-white/25 w-14">{h.day}</span>
                  <span className="font-mono text-xs text-white/50">{h.label}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/cutdoctorsbarbershop/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cut Doctors on Instagram"
                className="text-gold hover:text-white transition-colors duration-150"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/pages/Cut-Doctors/316628785103039"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cut Doctors on Facebook"
                className="text-gold hover:text-white transition-colors duration-150"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom strip */}
        <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[11px] text-white/25">
            © {new Date().getFullYear()} Cut Doctors Inc. | East Orlando, FL
          </p>
          <p className="font-mono text-[11px] text-white/15">
            829 Woodbury Rd · Orlando, FL 32828
          </p>
        </div>
      </div>
    </footer>
  )
}
