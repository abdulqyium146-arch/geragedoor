import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ChevronRight, MapPin } from 'lucide-react'
import { SERVICES } from '@/lib/services'
import { CTABanner } from '@/components/ui/CTABanner'
import { StructuredData } from '@/components/seo/StructuredData'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { PhoneLink } from '@/components/ui/PhoneLink'

export const metadata: Metadata = {
  title: 'Garage Door Services in Central Florida | Fast & Reliable | (863) 808-3341',
  description:
    'Complete garage door services in Central Florida: new door installation, spring replacement, opener repair, emergency service. Serving Polk, Orange & Osceola Counties.',
  alternates: { canonical: 'https://garagedoorsolutionsofcf.com/services' },
  openGraph: {
    title: 'Garage Door Services in Central Florida | Fast & Reliable',
    description: 'Expert garage door repair, installation & emergency service across Central Florida.',
    url: 'https://garagedoorsolutionsofcf.com/services',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Garage Door Services Central Florida' }],
  },
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Garage Door Services',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://garagedoorsolutionsofcf.com/services#${s.slug}`,
  })),
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
]

const featuredServiceCities = [
  { slug: 'lakeland',    name: 'Lakeland' },
  { slug: 'kissimmee',   name: 'Kissimmee' },
  { slug: 'orlando',     name: 'Orlando' },
]

export default function ServicesPage() {
  return (
    <>
      <StructuredData schema={itemListSchema} />
      <BreadcrumbNav crumbs={crumbs} />

      {/* Page header */}
      <section className="bg-brand-navy py-16 px-4" aria-labelledby="services-page-heading">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-3">What We Do</p>
          <h1 id="services-page-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Garage Door Services in Central Florida
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            From routine tune-ups to full replacements — we handle every garage door need for Central Florida homes &amp; businesses.
            Fast, reliable, and always honest.
          </p>
        </div>
      </section>

      {/* Services list */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-20">
        {SERVICES.map((service, i) => {
          const isEven = i % 2 === 0
          return (
            <article
              key={service.slug}
              id={service.slug}
              className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}
              aria-labelledby={`service-${service.slug}-heading`}
            >
              {/* Content */}
              <div className={isEven ? '' : 'lg:col-start-2'}>
                <div className="w-16 h-16 bg-brand-amber/10 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-brand-amber text-3xl" aria-hidden="true">{service.icon}</span>
                </div>
                <h2
                  id={`service-${service.slug}-heading`}
                  className="font-display text-3xl font-bold text-brand-slate mb-4"
                >
                  {service.title} in Central Florida
                </h2>
                <p className="text-brand-steel leading-relaxed mb-6">{service.longDescription}</p>
                <ul className="space-y-3 mb-8" role="list">
                  {service.benefits.map(benefit => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                      <span className="text-brand-steel text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-brand-amber text-brand-navy font-bold px-6 py-3 rounded-xl hover:bg-brand-amberHover transition-colors min-h-[44px]"
                    aria-label={`Get a free quote for ${service.title}`}
                  >
                    Get Free Quote
                    <ChevronRight size={16} aria-hidden="true" />
                  </Link>
                  <PhoneLink className="inline-flex items-center gap-2 border border-brand-steel/30 text-brand-steel font-semibold px-6 py-3 rounded-xl hover:border-brand-sky hover:text-brand-sky transition-colors min-h-[44px] text-sm" />
                </div>
              </div>

              {/* Visual card */}
              <div className={`bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl p-10 flex flex-col items-center justify-center text-center min-h-[280px] ${isEven ? '' : 'lg:col-start-1'}`}>
                <div className="text-6xl mb-4" aria-hidden="true">{service.icon}</div>
                <p className="font-display text-xl font-bold text-white mb-2">{service.shortTitle}</p>
                <p className="text-slate-300 text-sm">{service.description}</p>
              </div>
            </article>
          )
        })}
      </div>

      {/* Internal links — service areas + 3 city pages */}
      <section className="bg-brand-cream py-12 px-4 border-t border-gray-100" aria-labelledby="service-areas-cta-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-brand-amber" aria-hidden="true" />
            <h2 id="service-areas-cta-heading" className="font-display text-xl font-bold text-brand-slate">
              Serving All of Central Florida
            </h2>
          </div>
          <p className="text-brand-steel text-sm mb-6 max-w-2xl">
            We provide all of these services throughout Polk, Orange, Osceola &amp; Lake Counties.
            Find your city below or{' '}
            <Link href="/service-areas" className="text-brand-sky font-semibold hover:underline">
              view all 20 service areas
            </Link>
            .
          </p>
          <ul className="flex flex-wrap gap-3" role="list">
            {featuredServiceCities.map(city => (
              <li key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-brand-steel text-sm font-semibold px-4 py-2.5 rounded-lg hover:border-brand-sky hover:text-brand-sky transition-colors"
                  aria-label={`Garage door services in ${city.name}, FL`}
                >
                  {city.name}, FL
                  <ChevronRight size={14} aria-hidden="true" />
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-1.5 bg-brand-sky text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-brand-blue transition-colors"
              >
                All Service Areas
                <ChevronRight size={14} aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <CTABanner
        heading="Not Sure What You Need?"
        subtext="Give us a call — we'll diagnose the problem and give you a free, honest quote."
      />
    </>
  )
}
