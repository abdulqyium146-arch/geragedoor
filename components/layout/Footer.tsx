import Link from 'next/link'
import Image from 'next/image'
import { Phone, Clock, MapPin, Shield, Star } from 'lucide-react'
import { SERVICES } from '@/lib/services'
import { CITIES } from '@/lib/cities'
import { PHONE_TEL } from '@/components/ui/PhoneLink'

const topCities = ['lakeland', 'winter-haven', 'kissimmee', 'orlando', 'clermont', 'brandon']

export function Footer() {
  return (
    <footer className="bg-brand-navy text-white" role="contentinfo">

      {/* Trust bar — E-E-A-T signals, crawlable on mobile */}
      <div className="border-b border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2" role="list">
            <li className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
              <Star size={12} className="text-brand-amber" fill="currentColor" aria-hidden="true" />
              4.9★ · 937+ Google Reviews
            </li>
            <li className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
              <Shield size={12} className="text-brand-amber" aria-hidden="true" />
              Licensed &amp; Insured in Florida
            </li>
            <li className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
              <Clock size={12} className="text-brand-amber" aria-hidden="true" />
              Available 24/7 — Real People Answer
            </li>
            <li className="flex items-center gap-1.5 text-xs text-slate-300 font-semibold">
              <MapPin size={12} className="text-brand-amber" aria-hidden="true" />
              Serving 20+ Cities · Central Florida
            </li>
          </ul>
        </div>
      </div>

      {/* Main footer grid — NAP first for mobile */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1: Brand + NAP — most important for local SEO entity */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="mb-4">
            <Image
              src="/gallery/android-chrome-512x512.png"
              alt="Garage Door Solutions of Central Florida Logo"
              width={160}
              height={45}
              className="h-12 w-auto brightness-0 invert opacity-90"
            />
          </div>
          <p className="text-slate-400 text-sm leading-relaxed mb-5">
            Central Florida&apos;s trusted garage door company — serving Polk, Orange, Osceola, Lake, Hillsborough, Seminole &amp; Volusia Counties for 15+ years.
          </p>

          {/* NAP — schema-consistent, crawlable */}
          <address className="not-italic text-sm text-slate-300 space-y-3 mb-5">
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="text-brand-amber mt-0.5 shrink-0" aria-hidden="true" />
              <span>Polk County, FL (Lakeland Area)<br /><span className="text-slate-500 text-xs">Serving all of Central Florida</span></span>
            </div>
            <a
              href={PHONE_TEL}
              className="flex items-center gap-2.5 text-white font-bold hover:text-brand-amber transition-colors text-base"
              aria-label="Call (702) 935-3283"
            >
              <Phone size={15} className="text-brand-amber shrink-0" aria-hidden="true" />
              (702) 935-3283
            </a>
            <div className="flex items-center gap-2.5">
              <Clock size={15} className="text-brand-amber shrink-0" aria-hidden="true" />
              <span className="font-semibold text-white">Available 24/7</span>
            </div>
          </address>

          {/* Service counties — geo entity signals */}
          <div className="bg-white/5 rounded-lg p-3">
            <p className="text-xs text-slate-500 font-semibold uppercase tracking-wide mb-1.5">Counties Served</p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Polk · Orange · Osceola · Lake · Hillsborough · Seminole · Volusia · Marion
            </p>
          </div>
        </div>

        {/* Col 2: Services */}
        <div>
          <h3 className="font-display text-base font-bold text-white mb-4 pb-2 border-b border-white/10">Our Services</h3>
          <ul className="space-y-1" role="list">
            {SERVICES.map(s => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="block text-slate-400 text-sm hover:text-brand-amber transition-colors py-1.5"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3: Service Areas */}
        <div>
          <h3 className="font-display text-base font-bold text-white mb-4 pb-2 border-b border-white/10">Service Areas</h3>
          <ul className="space-y-1" role="list">
            {CITIES.filter(c => topCities.includes(c.slug)).map(city => (
              <li key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="block text-slate-400 text-sm hover:text-brand-amber transition-colors py-1.5"
                >
                  {city.name}, FL
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="block text-brand-sky text-sm font-semibold hover:text-brand-amber transition-colors py-1.5">
                View All 20 Areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Company + Rating */}
        <div>
          <h3 className="font-display text-base font-bold text-white mb-4 pb-2 border-b border-white/10">Company</h3>
          <ul className="space-y-1 mb-6" role="list">
            {[['/', 'Home'], ['/services', 'Services'], ['/service-areas', 'Service Areas'], ['/faq', 'FAQ'], ['/about', 'About Us'], ['/contact', 'Free Quote']].map(([href, label]) => (
              <li key={href}>
                <Link href={href} className="block text-slate-400 text-sm hover:text-brand-amber transition-colors py-1.5">{label}</Link>
              </li>
            ))}
          </ul>
          {/* Rating widget */}
          <div className="bg-brand-amber/10 border border-brand-amber/20 rounded-xl p-4">
            <div className="flex gap-0.5 mb-1">
              {[1,2,3,4,5].map(n => (
                <Star key={n} size={14} className="text-brand-amber" fill="currentColor" aria-hidden="true" />
              ))}
            </div>
            <p className="text-brand-amber text-sm font-bold mb-0.5">4.9 / 5.0 on Google</p>
            <p className="text-slate-400 text-xs">937+ Verified Customer Reviews</p>
          </div>
        </div>
      </div>

      {/* Bottom bar — legal + entity signals */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Garage Door Solutions of Central Florida, LLC. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1">
            <span>Licensed &amp; Insured · State of Florida</span>
            <span aria-hidden="true">·</span>
            <Link href="/faq" className="hover:text-slate-400 transition-colors">FAQ</Link>
            <span aria-hidden="true">·</span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
