import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const priceList = [
  { service: 'Haircut + Hot Towel Shave + Eyebrows', price: '$25', popular: true },
  { service: 'Haircut & Hot Towel Shave', price: '$25+', popular: false },
  { service: 'Haircut with Trimmer Shave', price: '$25', popular: false },
  { service: 'Regular Haircut', price: '$20', popular: false },
  { service: 'Kids Haircut', price: '$20', popular: false },
  { service: 'Seniors', price: '$15', popular: false },
  { service: 'Specialty Haircuts', price: '$20+', popular: false },
  { service: 'Shape Up', price: '$10', popular: false },
  { service: 'Designs', price: '$10+', popular: false },
  { service: "Executive Hand Details, Gentlemen's Facials & More", price: 'Call', popular: false },
]

export default function Prices() {
  const sectionRef = useRef(null)
  const tableRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 72%',
          },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="prices"
      ref={sectionRef}
      className="bg-cream py-20 md:py-28"
      aria-label="Prices at Cut Doctors"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-barber-red mb-3">
            No Surprises
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase text-text-main">
            Pricing
          </h2>
        </div>

        {/* Price Table */}
        <div ref={tableRef} className="bg-surface rounded-2xl overflow-hidden border border-white/5">
          <div className="hidden sm:grid grid-cols-[1fr_auto] bg-black/40 px-6 py-3">
            <span className="font-mono text-xs uppercase tracking-widest text-white/30">Service</span>
            <span className="font-mono text-xs uppercase tracking-widest text-white/30">Price</span>
          </div>

          {priceList.map((item, i) => (
            <div
              key={item.service}
              className={`grid grid-cols-1 sm:grid-cols-[1fr_auto] items-center gap-1 sm:gap-4 px-6 py-4 ${
                i !== priceList.length - 1 ? 'border-b border-white/5' : ''
              } ${item.popular ? 'bg-barber-red/10' : ''}`}
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-inter text-sm sm:text-base text-text-main">
                  {item.service}
                </span>
                {item.popular && (
                  <span className="font-mono text-[10px] uppercase tracking-wider bg-barber-red text-white px-2 py-0.5 rounded font-semibold">
                    Popular
                  </span>
                )}
              </div>
              <span className="font-mono text-base font-semibold text-barber-red sm:text-right">
                {item.price}
              </span>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center font-inter text-sm text-text-muted mt-6">
          More services available.{' '}
          <a
            href="tel:+14072032836"
            className="text-barber-red hover:underline font-medium"
          >
            Call us at (407) 203-2836
          </a>{' '}
          for details.
        </p>
      </div>
    </section>
  )
}
