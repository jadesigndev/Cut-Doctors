import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
      gsap.fromTo(
        imgRef.current,
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
          delay: 0.15,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="bg-cream py-20 md:py-28 overflow-hidden"
      aria-label="About Cut Doctors"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* Text Column */}
          <div ref={textRef}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-barber-red mb-4">
              Who We Are
            </p>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase text-text-main leading-tight mb-6">
              East Orlando's Barbershop
              <br />
              <span className="text-gold">Since Day One</span>
            </h2>

            <p className="font-inter text-base text-text-muted leading-relaxed mb-4">
              Cut Doctors has been the go-to barbershop for men in East Orlando's Waterford Lakes area. Our team of skilled barbers brings a blend of classic technique and modern precision — from clean skin fades to full hot towel shave rituals.
            </p>
            <p className="font-inter text-base text-text-muted leading-relaxed mb-8">
              We're not just a haircut. We're the lounge, the pool table, the easy conversation, and the confidence of walking out looking your best.
            </p>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-gold pl-5 py-1">
              <p className="font-playfair italic text-lg sm:text-xl text-text-main">
                "You'll leave feeling great and looking even better."
              </p>
            </blockquote>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#book"
                className="bg-barber-red hover:bg-red-700 text-white font-inter font-semibold text-sm px-6 py-3 rounded transition-colors duration-150"
              >
                Book Your Cut
              </a>
              <a
                href="tel:+14072032836"
                className="border border-white/20 hover:border-white/50 text-text-main font-inter font-semibold text-sm px-6 py-3 rounded transition-colors duration-150"
              >
                (407) 203-2836
              </a>
            </div>
          </div>

          {/* Image Column */}
          <div ref={imgRef} className="relative">
            <div className="rounded-xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[520px]">
              <img
                src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80&fit=crop"
                alt="Inside Cut Doctors barbershop — classic chairs, warm lighting, East Orlando FL"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Accent badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#0a0a0a] border border-white/10 text-white rounded-xl px-5 py-4 shadow-xl">
              <p className="font-oswald text-3xl font-bold text-gold">Walk-Ins</p>
              <p className="font-inter text-xs text-white/60 mt-0.5 uppercase tracking-wider">Always Welcome</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
