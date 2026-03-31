import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ChevronRight } from 'lucide-react'
import { CITIES } from '@/lib/cities'
import { CTABanner } from '@/components/ui/CTABanner'
import { StructuredData } from '@/components/seo/StructuredData'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'

export const metadata: Metadata = {
  title: 'Service Areas | Central Florida Garage Door Repair',
  description:
    'Garage door repair and installation across Central Florida — Polk, Orange, Osceola & Lake Counties. View all 20 cities we serve.',
  alternates: { canonical: 'https://garagedoorsolutionsofcf.com/service-areas' },
  openGraph: {
    title: 'Service Areas | Garage Door Solutions of Central Florida',
    description: 'Serving 20+ cities across Central Florida. Find your city.',
    url: 'https://garagedoorsolutionsofcf.com/service-areas',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Central Florida Service Areas' }],
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Service Areas',
  itemListElement: CITIES.map((c, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: `${c.name}, FL`,
    url: `https://garagedoorsolutionsofcf.com/service-areas/${c.slug}`,
  })),
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Service Areas', href: '/service-areas' },
]

// Group cities by county
const byCounty = CITIES.reduce<Record<string, typeof CITIES>>((acc, city) => {
  if (!acc[city.county]) acc[city.county] = []
  acc[city.county].push(city)
  return acc
}, {})

const countyOrder = ['Polk', 'Orange', 'Osceola', 'Lake', 'Volusia', 'Hillsborough']

export default function ServiceAreasPage() {
  const sortedCounties = Object.keys(byCounty).sort(
    (a, b) => countyOrder.indexOf(a) - countyOrder.indexOf(b)
  )

  return (
    <>
      <StructuredData schema={itemListSchema} />
      <BreadcrumbNav crumbs={crumbs} />

      {/* Page header */}
      <section className="bg-brand-navy py-16 px-4" aria-labelledby="areas-page-heading">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-3">Where We Work</p>
          <h1 id="areas-page-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Central Florida Service Areas
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We serve homeowners and businesses across Polk, Orange, Osceola &amp; Lake Counties —
            and surrounding areas throughout Central Florida.
          </p>
        </div>
      </section>

      {/* Cities by county */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-14">
        {sortedCounties.map(county => (
          <section key={county} aria-labelledby={`county-${county.toLowerCase()}-heading`}>
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={20} className="text-brand-amber" aria-hidden="true" />
              <h2
                id={`county-${county.toLowerCase()}-heading`}
                className="font-display text-2xl font-bold text-brand-slate"
              >
                {county} County
              </h2>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" role="list">
              {byCounty[county].map(city => (
                <li key={city.slug}>
                  <Link
                    href={`/service-areas/${city.slug}`}
                    className="group flex items-center justify-between p-5 bg-white rounded-xl border border-gray-100 shadow-card hover:border-brand-sky hover:shadow-md transition-all"
                  >
                    <div>
                      <p className="font-semibold text-brand-slate group-hover:text-brand-sky transition-colors">{city.name}</p>
                      <p className="text-xs text-brand-steel mt-0.5">Pop. {city.population.toLocaleString()}</p>
                    </div>
                    <ChevronRight size={16} className="text-gray-300 group-hover:text-brand-sky transition-colors" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <CTABanner
        heading="Don't See Your City?"
        subtext="We may still serve your area — give us a call and we'll let you know right away."
      />
    </>
  )
}
