import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin } from 'lucide-react'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { CityCard } from '@/components/ui/CityCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { CITIES } from '@/lib/cities'

export const metadata: Metadata = {
  title: 'Service Areas — Central Florida Garage Door Service',
  description:
    'Garage Door Solutions of Central Florida serves Polk, Orange, Osceola, Lake & surrounding counties. Find your city and get same-day garage door service.',
  alternates: { canonical: 'https://garagedoorsolutionscfl.com/service-areas' },
  openGraph: {
    title: 'Service Areas | Garage Door Solutions of Central Florida',
    description: 'We serve 20+ cities across Central Florida. Find your city for local garage door repair and installation.',
    url: 'https://garagedoorsolutionscfl.com/service-areas',
  },
}

// Group cities by county
const COUNTY_ORDER = ['Polk', 'Orange', 'Osceola', 'Lake', 'Hillsborough', 'Marion', 'Seminole', 'Volusia']

function groupByCounty(cities: typeof CITIES) {
  const map = new Map<string, typeof CITIES>()
  for (const city of cities) {
    const county = city.county.split('/')[0]
    if (!map.has(county)) map.set(county, [])
    map.get(county)!.push(city)
  }
  return map
}

export default function ServiceAreasPage() {
  const grouped = groupByCounty(CITIES)

  return (
    <>
      <BreadcrumbNav crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Service Areas', href: '/service-areas' },
      ]} />

      <section className="bg-brand-navy py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-3">
            Where We Work
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Garage Door Service Throughout Central Florida
          </h1>
          <p className="text-slate-300 text-lg mt-4 leading-relaxed">
            Our team serves homeowners and businesses across Polk, Orange, Osceola, Lake, and surrounding counties. With same-day availability and a fleet of fully stocked trucks, we can reach most of Central Florida within hours of your call.
          </p>
        </div>
      </section>

      <main id="main-content" className="max-w-7xl mx-auto px-4 py-16">
        {COUNTY_ORDER.filter(c => grouped.has(c)).map(county => (
          <section key={county} className="mb-14" aria-labelledby={`${county.toLowerCase()}-heading`}>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-brand-amber shrink-0" size={20} aria-hidden="true" />
              <h2
                id={`${county.toLowerCase()}-heading`}
                className="font-display text-2xl font-bold text-brand-slate"
              >
                {county} County
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {grouped.get(county)!.map(city => (
                <CityCard
                  key={city.slug}
                  name={city.name}
                  county={city.county}
                  slug={city.slug}
                />
              ))}
            </div>
          </section>
        ))}

        <div className="mt-10 p-6 bg-brand-cream rounded-2xl border border-gray-200 text-center">
          <p className="text-brand-slate font-semibold mb-2">
            Don&apos;t see your city?
          </p>
          <p className="text-brand-steel text-sm mb-4">
            Call us — we may still serve your area. Our team covers a wide radius throughout Central Florida.
          </p>
          <a
            href="tel:+18638083341"
            className="inline-flex items-center gap-2 bg-brand-amber text-brand-navy font-bold px-6 py-3 rounded-xl hover:bg-brand-amber-hover transition-colors"
          >
            Call (863) 808-3341
          </a>
        </div>
      </main>

      <CTABanner />
    </>
  )
}
