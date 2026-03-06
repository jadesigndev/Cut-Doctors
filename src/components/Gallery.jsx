import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Instagram } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const photos = [
  {
    url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80&fit=crop',
    caption: 'Skin Fade + Beard Lineup',
    alt: 'Skin fade and beard lineup haircut at Cut Doctors barbershop East Orlando FL',
  },
  {
    url: 'https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80&fit=crop',
    caption: 'Classic Taper Fade',
    alt: 'Classic taper fade haircut performed at Cut Doctors barbershop near Waterford Lakes',
  },
  {
    url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80&fit=crop',
    caption: 'Hot Towel Shave',
    alt: 'Hot towel shave service at Cut Doctors barbershop in Orlando Florida',
  },
  {
    url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&q=80&fit=crop',
    caption: 'Barbershop Interior',
    alt: 'Interior of Cut Doctors mens barbershop in East Orlando near Waterford Lakes',
  },
  {
    url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&q=80&fit=crop',
    caption: 'Shape Up & Edge',
    alt: 'Shape up and edge haircut at Cut Doctors barbershop East Orlando',
  },
  {
    url: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80&fit=crop',
    caption: 'Fresh Low Fade',
    alt: 'Fresh low fade haircut at Cut Doctors mens barbershop in Orlando FL',
  },
]

export default function Gallery() {
  const sectionRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gridRef.current?.querySelectorAll('.gallery-item')
      if (!items?.length) return
      gsap.fromTo(
        items,
        { opacity: 0, scale: 0.95 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.08,
          duration: 0.5,
          ease: 'power2.out',
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
      id="gallery"
      ref={sectionRef}
      className="bg-surface py-20 md:py-28"
      aria-label="Gallery of cuts at Cut Doctors"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-barber-red mb-3">
            Proof of Work
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase text-text-main">
            The Gallery
          </h2>
        </div>

        {/* Photo Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {photos.map((photo) => (
            <div
              key={photo.url}
              className="gallery-item group relative rounded-xl overflow-hidden aspect-[4/3]"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              {/* Caption overlay — always subtly visible */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-4">
                <p className="font-inter text-sm font-medium text-white/80 group-hover:text-white transition-colors">
                  {photo.caption}
                </p>
              </div>

              {/* Placeholder label */}
              <div className="absolute top-3 right-3 bg-black/60 text-white/50 font-mono text-[9px] px-2 py-0.5 rounded uppercase tracking-wide">
                Placeholder
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10">
          <Instagram className="w-5 h-5 text-barber-red" />
          <p className="font-inter text-sm text-text-muted">
            See more work on Instagram —{' '}
            <a
              href="https://www.instagram.com/cutdoctorsbarbershop/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-barber-red hover:underline font-semibold"
            >
              @cutdoctorsbarbershop
            </a>
          </p>
        </div>

      </div>
    </section>
  )
}
