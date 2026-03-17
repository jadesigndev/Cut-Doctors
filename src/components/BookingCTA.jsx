import { Phone, ExternalLink } from 'lucide-react'

export default function BookingCTA() {
  return (
    <section
      id="book"
      className="bg-barber-red py-16 md:py-20"
      aria-label="Book an appointment at Cut Doctors"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 mb-4">
          Ready?
        </p>
        <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase text-white mb-4">
          Book Your Cut Today
        </h2>
        <p className="font-inter text-base text-white/80 mb-8 max-w-lg mx-auto">
          Book online with Booksy, call us, or walk in — we're ready for you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://booksy.com/en-us/182701_cut-doctors_hair-salon_134763_orlando#ba_s=seo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-barber-red hover:bg-cream font-inter font-bold text-base px-8 py-4 rounded transition-colors duration-150"
          >
            <ExternalLink className="w-5 h-5" />
            Book on Booksy
          </a>
          <a
            href="tel:+14072032836"
            className="flex items-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-inter font-bold text-base px-8 py-4 rounded transition-colors duration-150"
          >
            <Phone className="w-5 h-5" />
            Call to Book
          </a>
        </div>

        <p className="mt-6 font-mono text-sm text-white/50">
          (407) 203-2836 · 829 Woodbury Rd, Orlando FL 32828
        </p>
      </div>
    </section>
  )
}
