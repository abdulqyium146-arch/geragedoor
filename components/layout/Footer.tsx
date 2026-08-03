import Link from 'next/link'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { SERVICES } from '@/lib/services'
import { CITIES } from '@/lib/cities'

const topCities = CITIES.filter(c =>
  ['lakeland','winter-haven','kissimmee','orlando','clermont','brandon'].includes(c.slug)
)

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <div className="font-display text-2xl font-bold mb-4">
            <span className="text-white">Garage Door </span>
            <span className="text-brand-amber">Solutions</span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Central Florida&apos;s trusted garage door company. Serving Polk, Orange, Osceola, and Lake Counties for 15+ years.
          </p>
          <address className="not-italic text-sm text-slate-400 space-y-3">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="text-brand-amber mt-0.5 shrink-0" aria-hidden="true" />
              <span>Polk County, FL (Lakeland Area)</span>
            </div>
            <a
              href="tel:+18638083341"
              className="flex items-center gap-2 hover:text-brand-amber transition-colors"
              aria-label="Call us at (863) 808-3341"
            >
              <Phone size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
              (863) 808-3341
            </a>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-brand-amber shrink-0" aria-hidden="true" />
              <span>Mon–Sat, 8:00am–7:00pm</span>
            </div>
          </address>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-2">
            {SERVICES.map(service => (
              <li key={service.slug}>
                <Link
                  href={`/services#${service.slug}`}
                  className="text-slate-400 text-sm hover:text-brand-amber transition-colors"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cities */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4 text-white">Service Areas</h3>
          <ul className="space-y-2">
            {topCities.map(city => (
              <li key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="text-slate-400 text-sm hover:text-brand-amber transition-colors"
                >
                  {city.name}, FL
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/service-areas"
                className="text-brand-sky text-sm hover:text-brand-amber transition-colors font-semibold"
              >
                View All Service Areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-display text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2 mb-6">
            {[
              { href: '/', label: 'Home' },
              { href: '/services', label: 'Services' },
              { href: '/service-areas', label: 'Service Areas' },
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Contact' },
            ].map(link => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-400 text-sm hover:text-brand-amber transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="bg-brand-amber/10 border border-brand-amber/20 rounded-lg p-4">
            <p className="text-brand-amber text-sm font-semibold mb-1">4.9★ on Google</p>
            <p className="text-slate-400 text-xs">937+ Verified Reviews</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Garage Door Solutions of Central Florida, LLC. All rights reserved.</p>
          <p>Licensed &amp; Insured · Polk County, FL</p>
        </div>
      </div>
    </footer>
  )
}
