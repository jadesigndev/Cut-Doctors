import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Scissors, Droplets, Sparkles, Star, User, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const serviceGroups = [
  {
    category: 'Haircuts',
    services: [
      { icon: Scissors, name: 'Regular Haircut', description: 'Classic cut styled to your preference', price: '$20' },
      { icon: Scissors, name: 'Fade & Specialty', description: 'Skin fades, tapers, and specialty styles', price: '$20+' },
      { icon: Users, name: 'Kids Haircut', description: 'For the little ones — patient and precise', price: '$20' },
      { icon: User, name: 'Seniors', description: 'Discounted rate for our veteran customers', price: '$15' },
    ],
  },
  {
    category: 'Shaves',
    services: [
      { icon: Droplets, name: 'Hot Towel Shave', description: 'The full ritual — steam, lather, straight razor', price: '$25+' },
      { icon: Scissors, name: 'Trimmer Shave', description: 'Clean, close, and comfortable', price: 'Included' },
      { icon: Star, name: 'Haircut + Hot Towel Shave + Eyebrows', description: 'The complete grooming combo', price: '$25' },
    ],
  },
  {
    category: 'Grooming Extras',
    services: [
      { icon: Sparkles, name: 'Shape Up', description: 'Clean lines, sharp edges', price: '$10' },
      { icon: Sparkles, name: 'Designs', description: 'Custom cuts and artistic patterns', price: '$10+' },
      { icon: Star, name: 'Facials & Hand Details', description: 'Executive treatments — call for details', price: 'Call' },
    ],
  },
]

export default function Services() {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out',
            delay: i * 0.06,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
            },
          }
        )
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  let cardIndex = 0

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-surface py-20 md:py-28"
      aria-label="Services at Cut Doctors"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-barber-red mb-3">
            What We Do
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase text-text-main">
            Services
          </h2>
        </div>

        {/* Service Groups */}
        <div className="space-y-14">
          {serviceGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-oswald text-sm font-semibold uppercase text-text-muted tracking-[0.2em] mb-6 flex items-center gap-3">
                <span>{group.category}</span>
                <span className="flex-1 h-px bg-white/10" />
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {group.services.map((service) => {
                  const Icon = service.icon
                  const ref = (el) => { cardsRef.current[cardIndex++] = el }
                  return (
                    <div
                      key={service.name}
                      ref={ref}
                      className="service-card bg-charcoal rounded-xl p-5 cursor-default"
                    >
                      <div className="w-9 h-9 bg-cream rounded-lg flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-barber-red" strokeWidth={1.75} />
                      </div>
                      <h4 className="font-oswald text-base font-semibold uppercase text-text-main mb-1.5 leading-snug">
                        {service.name}
                      </h4>
                      <p className="font-inter text-sm text-text-muted leading-snug mb-4">
                        {service.description}
                      </p>
                      <span className="font-mono text-sm font-medium text-barber-red">
                        {service.price}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="#book"
            className="inline-block bg-barber-red hover:bg-red-700 text-white font-inter font-semibold text-base px-10 py-4 rounded transition-colors duration-150"
          >
            Book Your Service
          </a>
        </div>

      </div>
    </section>
  )
}
