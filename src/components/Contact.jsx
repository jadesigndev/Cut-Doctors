import { MapPin, Phone, Clock, Mail } from 'lucide-react'

const HOURS = [
  { day: 'Monday', label: '9:00 AM – 6:00 PM', jsDay: 1 },
  { day: 'Tuesday', label: '9:00 AM – 6:00 PM', jsDay: 2 },
  { day: 'Wednesday', label: '9:00 AM – 6:00 PM', jsDay: 3 },
  { day: 'Thursday', label: '9:00 AM – 6:00 PM', jsDay: 4 },
  { day: 'Friday', label: '9:00 AM – 6:00 PM', jsDay: 5 },
  { day: 'Saturday', label: '9:00 AM – 6:00 PM', jsDay: 6 },
  { day: 'Sunday', label: '9:00 AM – 6:00 PM', jsDay: 0 },
]

const todayJsDay = new Date().getDay()

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-cream py-20 md:py-28"
      aria-label="Find Cut Doctors — Contact and Hours"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-barber-red mb-3">
            Get Here
          </p>
          <h2 className="font-oswald text-4xl sm:text-5xl font-bold uppercase text-text-main">
            Find Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start">

          {/* Contact Details */}
          <div className="space-y-8">

            {/* Address */}
            <div className="flex gap-4">
              <MapPin className="w-5 h-5 text-barber-red shrink-0 mt-1" />
              <div>
                <p className="font-oswald text-sm font-semibold uppercase tracking-wider text-text-main mb-1">
                  Address
                </p>
                <p className="font-inter text-base text-text-muted leading-snug">
                  829 Woodbury Rd<br />
                  Orlando, FL 32828
                </p>
                <p className="font-inter text-sm text-text-muted mt-1">
                  Behind Waterford Lakes Shopping Plaza,<br />
                  between Lake Underhill Rd & Waterford Lakes Pkwy
                </p>
                <a
                  href="https://maps.google.com/?q=829+Woodbury+Rd+Orlando+FL+32828"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 font-inter text-sm text-barber-red hover:underline font-medium"
                >
                  Get Directions →
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <Phone className="w-5 h-5 text-barber-red shrink-0 mt-1" />
              <div>
                <p className="font-oswald text-sm font-semibold uppercase tracking-wider text-text-main mb-1">
                  Phone
                </p>
                <a
                  href="tel:+14072032836"
                  className="font-mono text-xl text-text-main hover:text-barber-red transition-colors duration-150"
                >
                  (407) 203-2836
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-4">
              <Mail className="w-5 h-5 text-barber-red shrink-0 mt-1" />
              <div>
                <p className="font-oswald text-sm font-semibold uppercase tracking-wider text-text-main mb-1">
                  Email
                </p>
                <a
                  href="mailto:cutdoctorsinc@yahoo.com"
                  className="font-inter text-base text-text-muted hover:text-barber-red transition-colors duration-150"
                >
                  cutdoctorsinc@yahoo.com
                </a>
              </div>
            </div>

            {/* Hours Table */}
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-barber-red shrink-0 mt-1" />
              <div className="w-full">
                <p className="font-oswald text-sm font-semibold uppercase tracking-wider text-text-main mb-3">
                  Hours
                </p>
                <div className="space-y-1">
                  {HOURS.map((h) => {
                    const isToday = h.jsDay === todayJsDay
                    return (
                      <div
                        key={h.day}
                        className={`flex justify-between items-center py-1.5 px-3 rounded ${
                          isToday ? 'bg-barber-red/15 border border-barber-red/25' : ''
                        }`}
                      >
                        <span
                          className={`font-inter text-sm ${
                            isToday ? 'text-text-main font-semibold' : 'text-text-muted'
                          }`}
                        >
                          {h.day}
                          {isToday && (
                            <span className="ml-2 font-mono text-[10px] uppercase tracking-widest text-barber-red">
                              Today
                            </span>
                          )}
                        </span>
                        <span
                          className={`font-mono text-sm ${
                            isToday ? 'text-barber-red font-medium' : 'text-text-muted'
                          }`}
                        >
                          {h.label}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <p className="font-inter text-sm text-text-muted mb-3">
                Questions? Ready to book?
              </p>
              <a
                href="tel:+14072032836"
                className="inline-block bg-barber-red hover:bg-red-700 text-white font-inter font-semibold text-sm px-6 py-3 rounded transition-colors duration-150"
              >
                Call (407) 203-2836
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="w-full rounded-xl overflow-hidden border border-white/10" style={{ minHeight: 400 }}>
            <iframe
              title="Cut Doctors Barbershop location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.7!2d-81.1764!3d28.5232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e77a68b4c80a4b%3A0x1!2s829+Woodbury+Rd%2C+Orlando%2C+FL+32828!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="450"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
