import { MapPin, Phone, Clock } from 'lucide-react'

const HOURS = [
  { day: 'Monday', open: 11, close: 19, label: '11:00 AM – 7:00 PM' },
  { day: 'Tuesday', open: 9, close: 19, label: '9:00 AM – 7:00 PM' },
  { day: 'Wednesday', open: 9, close: 19, label: '9:00 AM – 7:00 PM' },
  { day: 'Thursday', open: 9, close: 19, label: '9:00 AM – 7:00 PM' },
  { day: 'Friday', open: 9, close: 19, label: '9:00 AM – 7:00 PM' },
  { day: 'Saturday', open: 9, close: 17, label: '9:00 AM – 5:00 PM' },
  { day: 'Sunday', open: null, close: null, label: 'Closed' },
]

function getTodayHours() {
  const dayIndex = new Date().getDay() // 0=Sun, 1=Mon, ..., 6=Sat
  const reordered = [HOURS[6], ...HOURS.slice(0, 6)] // Sun=0
  return reordered[dayIndex]
}

function isOpenNow() {
  const now = new Date()
  const today = getTodayHours()
  if (!today.open) return false
  const h = now.getHours() + now.getMinutes() / 60
  return h >= today.open && h < today.close
}

export default function QuickInfoBar() {
  const today = getTodayHours()
  const open = isOpenNow()

  return (
    <section
      id="info"
      className="bg-charcoal py-6"
      aria-label="Quick contact and hours info"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4">

          {/* Address */}
          <a
            href="https://maps.google.com/?q=829+Woodbury+Rd+Orlando+FL+32828"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start sm:items-center gap-3 group"
            aria-label="Get directions to Cut Doctors"
          >
            <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5 sm:mt-0 group-hover:text-white transition-colors" />
            <div>
              <p className="font-mono text-xs text-gold/60 uppercase tracking-widest mb-0.5">Address</p>
              <p className="font-inter text-sm text-white/90 group-hover:text-white transition-colors leading-snug">
                829 Woodbury Rd<br className="sm:hidden" />
                <span className="hidden sm:inline">, </span>Orlando, FL 32828
              </p>
              <p className="font-inter text-xs text-white/40 mt-0.5">Behind Waterford Lakes Shopping Plaza</p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+14072032836"
            className="flex items-start sm:items-center gap-3 group"
            aria-label="Call Cut Doctors"
          >
            <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5 sm:mt-0 group-hover:text-white transition-colors" />
            <div>
              <p className="font-mono text-xs text-gold/60 uppercase tracking-widest mb-0.5">Phone</p>
              <p className="font-mono text-lg text-white/90 group-hover:text-white transition-colors">
                (407) 203-2836
              </p>
              <p className="font-inter text-xs text-white/40 mt-0.5">Tap to call</p>
            </div>
          </a>

          {/* Hours */}
          <div className="flex items-start sm:items-center gap-3">
            <Clock className="w-5 h-5 text-gold shrink-0 mt-0.5 sm:mt-0" />
            <div>
              <p className="font-mono text-xs text-gold/60 uppercase tracking-widest mb-0.5">Hours Today</p>
              <div className="flex items-center gap-2">
                <span
                  className={`inline-block w-2 h-2 rounded-full shrink-0 ${
                    open ? 'bg-green-400 status-dot-open' : 'bg-red-400'
                  }`}
                />
                <p className="font-mono text-sm text-white/90">
                  {today.label}
                </p>
              </div>
              <p className="font-inter text-xs mt-0.5 font-semibold">
                {open
                  ? <span className="text-green-400">Open Now</span>
                  : <span className="text-red-400">Closed Now</span>
                }
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
