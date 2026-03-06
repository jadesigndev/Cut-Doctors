import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function BarberPoleStory() {
  const sectionRef = useRef(null)
  const textRef = useRef(null)
  const poleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current?.children,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
      gsap.fromTo(
        poleRef.current,
        { opacity: 0, scale: 0.85 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.4)',
          delay: 0.3,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="story"
      ref={sectionRef}
      className="bg-charcoal py-20 md:py-28 overflow-hidden"
      aria-label="The story behind Cut Doctors"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">

          {/* Text */}
          <div ref={textRef}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold/70 mb-4">
              The Origin
            </p>
            <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase text-white leading-tight mb-8">
              Why "Cut Doctors"?
            </h2>

            <p className="font-inter text-base text-white/70 leading-relaxed mb-5">
              The barber pole isn't just a decoration — it's a symbol with centuries of history. In medieval Europe, barbers were also surgeons, performing everything from bloodletting to tooth extractions. The iconic red-and-white pole represented bandages and blood: the tools of the original healers.
            </p>
            <p className="font-inter text-base text-white/70 leading-relaxed mb-5">
              At Cut Doctors, we carry that legacy forward. Our barbers are craftsmen — trained in the art of the cut, the science of the shave, and the tradition of making every man who sits in the chair feel taken care of. From the hot towel ritual to the precise fade, we treat every service with the same care a doctor gives a patient.
            </p>
            <p className="font-inter text-base text-white/70 leading-relaxed mb-8">
              East Orlando deserves a real barbershop. Not a chain, not a quick clip joint. A place where skill is respected and every customer walks out looking and feeling their best.
            </p>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-gold pl-5">
              <p className="font-playfair italic text-xl sm:text-2xl text-white">
                "Barbers: the original surgeons."
              </p>
            </blockquote>
          </div>

          {/* Barber Pole Visual */}
          <div ref={poleRef} className="hidden md:flex flex-col items-center gap-3 select-none">
            {/* Cap */}
            <div className="w-12 h-4 bg-white rounded-t-full" />

            {/* Pole body */}
            <div
              className="barber-pole-anim w-12 rounded"
              style={{ height: 280 }}
              aria-hidden="true"
            />

            {/* Base */}
            <div className="w-12 h-4 bg-white rounded-b-full" />

            <p className="font-mono text-[10px] uppercase tracking-widest text-white/30 mt-2 text-center">
              Est. East Orlando
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
