import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Phone, CheckCircle, ChevronRight } from 'lucide-react'
import { CITIES, getCityBySlug } from '@/lib/cities'
import { SERVICES } from '@/lib/services'
import { CTABanner } from '@/components/ui/CTABanner'
import { StructuredData } from '@/components/seo/StructuredData'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { NearbyCities } from '@/components/ui/NearbyCities'
import { PHONE_TEL, PHONE_DISPLAY } from '@/components/ui/PhoneLink'
import { ServiceIcon } from '@/components/ui/ServiceIcon'

interface Props {
  params: { city: string }
}

export function generateStaticParams() {
  return CITIES.map(c => ({ city: c.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const city = getCityBySlug(params.city)
  if (!city) return {}

  return {
    title: `Garage Door Repair ${city.name} FL | 24/7 Emergency Service | (702) 935-3283`,
    description: `Garage door repair, installation & 24/7 emergency service in ${city.name}, FL (${city.zipCodes.slice(0,3).join(', ')}). Serving ${city.neighborhoods.slice(0,3).join(', ')} & all of ${city.county} County. Free estimates — call (702) 935-3283.`,
    alternates: {
      canonical: `https://garagedoorsolutionsofcf.com/service-areas/${city.slug}`,
    },
    openGraph: {
      title: `Garage Door Services in ${city.name}, FL`,
      description: `Trusted garage door company serving ${city.name}, FL. Local team, honest pricing, fast response.`,
      url: `https://garagedoorsolutionsofcf.com/service-areas/${city.slug}`,
      images: [{ url: '/gallery/android-chrome-512x512.png', width: 512, height: 512, alt: `Garage Door Services in ${city.name}, FL` }],
    },
  }
}

export default function CityPage({ params }: Props) {
  const city = getCityBySlug(params.city)
  if (!city) notFound()

  const cityFaqs = [
    {
      q: `How much does garage door repair cost in ${city.name}, FL?`,
      a: `Garage door repair in ${city.name} typically ranges from $75 to $600 depending on the issue. Sensor alignment and minor cable work run $75–$200; spring replacement runs $150–$350; panel or off-track repairs vary by scope. Call (702) 935-3283 for a free, upfront estimate — no surprises.`,
    },
    {
      q: `Do you offer 24/7 emergency garage door repair in ${city.name}?`,
      a: `Yes. We are available 24/7 for emergency garage door repair throughout ${city.name} and all of ${city.county} County. Call (702) 935-3283 any time — a real person will always answer and dispatch a technician to you.`,
    },
    {
      q: `What neighborhoods in ${city.name} do you serve?`,
      a: `We serve all of ${city.name} including ${city.neighborhoods.join(', ')} and all surrounding areas in ${city.county} County, FL (ZIP codes: ${city.zipCodes.join(', ')}).`,
    },
    {
      q: `How quickly can a technician arrive in ${city.name}, ${city.county} County?`,
      a: `We aim to arrive within 1–3 hours for most service calls in ${city.name}. For emergencies, we prioritize fast dispatch — available 24/7. Call (702) 935-3283 for an honest ETA.`,
    },
    {
      q: `Do you install new garage doors in ${city.name}, FL?`,
      a: `Yes. We install new residential and commercial garage doors throughout ${city.name}, ${city.county} County. We carry steel, wood, aluminum, and composite options with same-day and next-day appointments available. Call (702) 935-3283 for a free estimate.`,
    },
  ]

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cityFaqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://garagedoorsolutionsofcf.com/service-areas/${city.slug}#business`,
    name: `Garage Door Solutions — ${city.name}, FL`,
    url: `https://garagedoorsolutionsofcf.com/service-areas/${city.slug}`,
    telephone: '+17029353283',
    priceRange: '$$',
    description: `Expert garage door repair, installation & emergency service in ${city.name}, FL (${city.county} County).`,
    areaServed: {
      '@type': 'City',
      name: city.name,
      addressRegion: 'FL',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: city.name,
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.lat,
      longitude: city.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '937',
      bestRating: '5',
      worstRating: '1',
    },
  }

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Service Areas', href: '/service-areas' },
    { label: `${city.name}, FL`, href: `/service-areas/${city.slug}` },
  ]

  return (
    <>
      <StructuredData schema={localBusinessSchema} />
      <StructuredData schema={faqSchema} />
      <BreadcrumbNav crumbs={crumbs} />

      {/* Page header */}
      <section className="bg-brand-navy py-16 px-4" aria-labelledby="city-page-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-brand-amber text-sm font-semibold mb-3">
            <MapPin size={14} aria-hidden="true" />
            {city.county} County, Florida
          </div>
          <h1
            id="city-page-heading"
            className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
          >
            Garage Door Repair &amp; Installation<br />in {city.name}, FL
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mb-8">
            Fast, reliable garage door repair and installation for {city.name} homeowners and businesses.
            Same-day service available — call for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold px-8 py-4 rounded-xl shadow-cta hover:bg-brand-amberHover transition-colors min-h-[56px]"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone size={18} aria-hidden="true" />
              Call {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors min-h-[56px]"
            >
              Get Free Quote
              <ChevronRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services in this city — each links to /services#slug */}
      <section className="py-16 px-4 bg-brand-cream" aria-labelledby="city-services-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="city-services-heading" className="font-display text-3xl font-bold text-brand-slate mb-3">
            Our Services in {city.name}
          </h2>
          <p className="text-brand-steel mb-10 max-w-2xl">
            We offer the full range of garage door services for {city.name} residents and businesses.
            All work is backed by our satisfaction guarantee.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" role="list">
            {SERVICES.map(service => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group block bg-white rounded-xl border border-gray-100 shadow-card p-6 hover:border-brand-sky hover:shadow-md transition-all h-full"
                  aria-label={`${service.title} service in ${city.name}, FL`}
                >
                  <div className="mb-3">
                    <ServiceIcon name={service.icon} size={28} className="text-brand-amber" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-slate mb-2 group-hover:text-brand-sky transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-brand-steel text-sm leading-relaxed mb-4">{service.description}</p>
                  <ul className="space-y-1.5" role="list">
                    {service.benefits.slice(0, 2).map(b => (
                      <li key={b} className="flex items-start gap-2 text-xs text-brand-steel">
                        <CheckCircle size={12} className="text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-brand-sky text-xs font-semibold inline-flex items-center gap-1">
                    Learn more <ChevronRight size={12} aria-hidden="true" />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-sky font-semibold hover:text-brand-blue transition-colors text-sm"
            >
              View all our garage door services
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Emergency garage door repair in this city */}
      <section className="py-16 px-4 bg-brand-navy" aria-labelledby="emergency-heading">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-3">
              Available Now
            </p>
            <h2
              id="emergency-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-white mb-4"
            >
              Emergency Garage Door Repair in {city.name}
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Door stuck open? Spring snapped? Car trapped inside? Our team provides emergency garage door repair throughout {city.name} and all of {city.county} County. Call now — a real person answers every time.
            </p>
            <ul className="space-y-3 mb-8" role="list">
              {[
                `Fast dispatch throughout ${city.name}`,
                'Real person answers — no voicemail, no automated systems',
                'Fully stocked trucks — most repairs done in one visit',
                'Same fair pricing — no hidden emergency fees',
              ].map(point => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-amber mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-slate-300 text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <a
              href={PHONE_TEL}
              className="inline-flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold px-8 py-4 rounded-xl shadow-cta hover:bg-brand-amberHover transition-colors min-h-[56px]"
              aria-label={`Call for emergency garage door repair in ${city.name}`}
            >
              <Phone size={18} aria-hidden="true" />
              Call {PHONE_DISPLAY} — We Answer
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-white mb-4">Common Emergency Repairs</h3>
            <ul className="space-y-3" role="list">
              {[
                'Broken torsion or extension spring',
                'Door stuck open — home unsecured',
                'Snapped or frayed cable',
                'Door off track or jammed',
                'Opener failure — car trapped inside',
                'Bent panels causing safety risk',
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-slate-300 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-amber shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-slate-400 text-xs">
                Serving all of {city.name} and {city.county} County, FL
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why local */}
      <section className="py-16 px-4 bg-white" aria-labelledby="why-local-heading">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="why-local-heading" className="font-display text-3xl font-bold text-brand-slate mb-4">
              Proud to Serve {city.name}
            </h2>
            <p className="text-brand-steel leading-relaxed mb-6">
              {city.name} is home to thousands of great families and thriving businesses — and we&apos;re proud to be the garage door company they trust.
              With 15+ years of experience across {city.county} County and all of Central Florida, we know what it takes to get your door working right.
            </p>
            <ul className="space-y-3 mb-8" role="list">
              {[
                `Fast arrival times throughout ${city.name}`,
                'Fully stocked service trucks — most repairs done in one visit',
                'Transparent pricing — no surprises',
                '4.9★ rating across 937+ verified reviews',
                'Licensed, insured & background-checked technicians',
              ].map(point => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-brand-steel text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-brand-sky font-semibold hover:text-brand-blue transition-colors text-sm"
            >
              View all Central Florida service areas
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl p-10 text-center text-white">
            <div className="text-5xl font-display font-bold mb-2">4.9★</div>
            <p className="text-slate-300 mb-6">937+ Verified Google Reviews</p>
            <address className="not-italic text-slate-400 text-sm space-y-2">
              <p className="flex items-center justify-center gap-2">
                <MapPin size={14} className="text-brand-amber" aria-hidden="true" />
                Serving {city.name}, FL &amp; surrounding areas
              </p>
              <p>24/7 — Always Available</p>
              <a
                href={PHONE_TEL}
                className="inline-flex items-center gap-2 text-brand-amber font-bold hover:text-brand-amber/80 transition-colors mt-2"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <Phone size={14} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </address>
          </div>
        </div>
      </section>

      {/* Neighborhoods We Serve */}
      <section className="py-16 px-4 bg-white" aria-labelledby="neighborhoods-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-brand-amber" aria-hidden="true" />
            <h2 id="neighborhoods-heading" className="font-display text-2xl font-bold text-brand-slate">
              Neighborhoods &amp; Areas We Serve in {city.name}
            </h2>
          </div>
          <p className="text-brand-steel text-sm mb-6 max-w-3xl">
            {city.description} We cover ZIP codes {city.zipCodes.join(', ')} and respond to all neighborhoods throughout {city.county} County, FL.
          </p>
          <ul className="flex flex-wrap gap-3 mb-6" role="list">
            {city.neighborhoods.map(n => (
              <li key={n} className="bg-brand-cream border border-gray-100 text-brand-steel text-sm font-semibold px-4 py-2 rounded-lg">
                {n}
              </li>
            ))}
          </ul>
          <p className="text-brand-steel text-sm">
            Don&apos;t see your neighborhood?{' '}
            <a href={PHONE_TEL} className="text-brand-sky font-semibold hover:underline">
              Call (702) 935-3283
            </a>
            {' '}— we likely serve your area.
          </p>
        </div>
      </section>

      {/* City-specific FAQ */}
      <section className="py-16 px-4 bg-brand-cream" aria-labelledby="city-faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="city-faq-heading" className="font-display text-3xl font-bold text-brand-slate mb-2 text-center">
            Garage Door FAQ — {city.name}, FL
          </h2>
          <p className="text-brand-steel text-center text-sm mb-10">
            Common questions from {city.name} homeowners and businesses.
          </p>
          <dl className="space-y-4">
            {cityFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-card p-6">
                <dt className="font-display text-lg font-bold text-brand-slate mb-3">{faq.q}</dt>
                <dd className="text-brand-steel leading-relaxed text-sm">{faq.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 text-center">
            <Link href="/faq" className="inline-flex items-center gap-1 text-brand-sky font-semibold hover:underline text-sm">
              View all FAQs <ChevronRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Nearby cities — internal linking */}
      <NearbyCities currentCity={city.slug} />

      <CTABanner
        heading={`Need Garage Door Help in ${city.name}?`}
        subtext="Call us or request a free quote online — available 24/7."
      />
    </>
  )
}
