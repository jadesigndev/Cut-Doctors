import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const contentRef = useRef(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    gsap.fromTo(
      el.children,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8, ease: 'power2.out', delay: 0.2 }
    )
  }, [])

  return (
    <section
      id="hero"
      className="relative flex items-end min-h-[100dvh] pb-16 md:pb-24"
      aria-label="Hero — Cut Doctors Barbershop"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1600&q=80&fit=crop')`,
        }}
        role="img"
        aria-label="Inside Cut Doctors barbershop — classic barber chairs and shop interior in East Orlando FL"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full">
        <div ref={contentRef} className="max-w-2xl">
          {/* Eyebrow */}
          <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70 mb-4">
            East Orlando's Premier Men's Barbershop
          </p>

          {/* H1 */}
          <h1 className="font-oswald text-5xl sm:text-6xl md:text-7xl font-bold leading-none uppercase text-white mb-5">
            Sharp Cuts.
            <br />
            <span className="text-barber-red">Clean Fades.</span>
          </h1>

          {/* Subheading */}
          <p className="font-inter text-base sm:text-lg text-white/80 mb-8 max-w-md">
            Professional haircuts, hot towel shaves, and master-level grooming — near Waterford Lakes since day one.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#book"
              className="bg-barber-red hover:bg-red-700 text-white font-inter font-semibold text-base px-8 py-4 rounded transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              Book Your Cut
            </a>
            <a
              href="#services"
              className="border-2 border-white/60 hover:border-white text-white font-inter font-semibold text-base px-8 py-4 rounded transition-colors duration-150"
            >
              See Services
            </a>
          </div>
        </div>
      </div>

      {/* Scroll nudge */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-50">
        <span className="font-mono text-white text-[10px] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/40" />
      </div>
    </section>
  )
}
