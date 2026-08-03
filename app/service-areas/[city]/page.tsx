import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { CheckCircle2 } from 'lucide-react'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { StructuredData } from '@/components/seo/StructuredData'
import { CTABanner } from '@/components/ui/CTABanner'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { CITIES, getCityBySlug } from '@/lib/cities'
import { SERVICES } from '@/lib/services'
import Link from 'next/link'
import { Phone } from 'lucide-react'

export function generateStaticParams() {
  return CITIES.map(city => ({ city: city.slug }))
}

type Props = { params: Promise<{ city: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)
  if (!city) return {}

  return {
    title: `Garage Door Repair ${city.name} FL | 24/7 Emergency | (863) 808-3341`,
    description: `24/7 emergency garage door repair & installation in ${city.name}, FL. 4.9★ rated · same-day service · live person answers every call. Free estimate. Call (863) 808-3341.`,
    alternates: {
      canonical: `https://garagedoorsolutionscfl.com/service-areas/${city.slug}`,
    },
    openGraph: {
      title: `Garage Door Repair in ${city.name}, FL | 24/7 Emergency Service`,
      description: `24/7 emergency garage door repair and installation in ${city.name}. 4.9★ rated, same-day service, upfront pricing, live person answers every call.`,
      url: `https://garagedoorsolutionscfl.com/service-areas/${city.slug}`,
    },
  }
}

const TRUST_SIGNALS = [
  '4.9★ rated on Google with 937+ reviews',
  'You always speak with a live person',
  'Upfront pricing — you approve before work begins',
  'Licensed, insured, and locally owned',
  'Same-day service available throughout Central Florida',
  '15+ years serving Central Florida homeowners',
]

export default async function CityPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = getCityBySlug(citySlug)
  if (!city) notFound()

  const citySchema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    name: 'Garage Door Solutions of Central Florida, LLC',
    url: `https://garagedoorsolutionscfl.com/service-areas/${city.slug}`,
    telephone: '+18638083341',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '937',
    },
    serviceArea: {
      '@type': 'City',
      name: city.name,
      containedIn: {
        '@type': 'AdministrativeArea',
        name: `${city.county} County, FL`,
      },
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
  }

  const cityFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `Do you offer 24/7 emergency garage door repair in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. We provide 24/7 emergency garage door repair in ${city.name} and throughout ${city.county} County. A live person answers every call — day or night. Call (863) 808-3341 now.`,
        },
      },
      {
        '@type': 'Question',
        name: `How fast can you get to ${city.name} for an emergency garage door repair?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We typically arrive within 60 minutes of your call in ${city.name}. Our trucks are staged throughout Central Florida and fully stocked so most repairs are completed on the first visit.`,
        },
      },
      {
        '@type': 'Question',
        name: `Do you offer same-day garage door repair in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Same-day garage door repair is available in ${city.name}. Call (863) 808-3341 and we will dispatch the nearest available technician as fast as possible.`,
        },
      },
      {
        '@type': 'Question',
        name: `What garage door services do you offer in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `We offer garage door repair, new door installation, spring replacement, opener repair and installation, and 24/7 emergency service in ${city.name}, ${city.county} County. Free estimates on all work. Call (863) 808-3341.`,
        },
      },
      {
        '@type': 'Question',
        name: `How much does garage door repair cost in ${city.name}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Costs vary based on the type of repair. We provide upfront, itemized pricing before any work begins so you always know what you will pay. Call (863) 808-3341 for a free estimate in ${city.name}.`,
        },
      },
    ],
  }

  return (
    <>
      <StructuredData schema={citySchema} />
      <StructuredData schema={cityFaqSchema} />

      <BreadcrumbNav crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Service Areas', href: '/service-areas' },
        { label: city.name, href: `/service-areas/${city.slug}` },
      ]} />

      {/* Hero */}
      <section className="bg-brand-navy py-16 px-4" aria-labelledby="city-hero-heading">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-3">
            {city.county} County, FL
          </p>
          <h1
            id="city-hero-heading"
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Garage Door Repair &amp; Installation in {city.name}, FL
          </h1>
          <p className="text-slate-300 text-lg">
            Same-day service available · 4.9★ rated · Always speak with a real person
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
            <a
              href="tel:+18638083341"
              className="inline-flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-amber-hover transition-colors"
              aria-label="Call us now"
            >
              <Phone size={20} aria-hidden="true" />
              Call (863) 808-3341
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white hover:text-brand-navy transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      <main id="main-content" className="max-w-7xl mx-auto px-4 py-16">
        {/* Intro */}
        <section className="max-w-3xl mb-16" aria-labelledby="city-intro-heading">
          <h2 id="city-intro-heading" className="font-display text-2xl font-bold text-brand-slate mb-4">
            Your Local Garage Door Experts in {city.name}
          </h2>
          <p className="text-brand-steel leading-relaxed mb-4">
            Garage Door Solutions of Central Florida proudly serves homeowners and businesses throughout {city.name}, {city.county} County. Our team has been the go-to garage door company in {city.name} and the surrounding area for over 15 years, building a reputation for fast, honest, and quality work.
          </p>
          <p className="text-brand-steel leading-relaxed mb-4">
            Whether you need an emergency repair, a full door replacement, or a new opener installed, we have fully stocked trucks ready to serve {city.name} residents the same day you call. Our technicians are familiar with homes throughout {city.county} County and can diagnose and fix most issues on the first visit.
          </p>
          <p className="text-brand-steel leading-relaxed">
            We believe every {city.name} homeowner deserves upfront pricing, professional service, and a company that stands behind its work. That is why we offer a workmanship guarantee on every job — if something is not right, we come back and fix it at no extra charge.
          </p>
        </section>

        {/* Services in city */}
        <section className="mb-16" aria-labelledby="city-services-heading">
          <h2 id="city-services-heading" className="font-display text-2xl font-bold text-brand-slate mb-8">
            Our Services in {city.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map(service => (
              <Link
                key={service.slug}
                href={`/services#${service.slug}`}
                className="p-5 rounded-xl border border-gray-200 hover:border-brand-sky hover:shadow-md transition-all group"
              >
                <h3 className="font-display text-lg font-semibold text-brand-slate group-hover:text-brand-sky mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-steel text-sm leading-relaxed">{service.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Why trust us */}
        <section className="mb-16 bg-brand-navy rounded-2xl p-8 md:p-12" aria-labelledby="city-trust-heading">
          <h2
            id="city-trust-heading"
            className="font-display text-2xl font-bold text-white mb-8"
          >
            Why {city.name} Homeowners Trust Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TRUST_SIGNALS.map(signal => (
              <div key={signal} className="flex items-start gap-3">
                <CheckCircle2 className="text-brand-amber shrink-0 mt-0.5" size={18} aria-hidden="true" />
                <span className="text-slate-300 text-sm">{signal}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Quote form */}
        <section className="max-w-2xl mx-auto" aria-labelledby="city-quote-heading">
          <h2
            id="city-quote-heading"
            className="font-display text-2xl font-bold text-brand-slate mb-2 text-center"
          >
            Get a Free Quote in {city.name}
          </h2>
          <p className="text-brand-steel text-center mb-8">
            Fill out the form below and we&apos;ll call you within 1 hour.
          </p>
          <div className="bg-white rounded-2xl p-6 md:p-8 [box-shadow:var(--shadow-card)]">
            <QuoteForm prefilledCity={city.name} />
          </div>
        </section>
      </main>

      <CTABanner
        heading={`Ready for Garage Door Service in ${city.name}?`}
        subtext="Call us today — a real person will answer and get you scheduled fast."
      />
    </>
  )
}
