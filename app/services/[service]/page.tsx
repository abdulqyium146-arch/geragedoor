import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Phone, CheckCircle, ChevronRight, MapPin } from 'lucide-react'
import { SERVICES, getServiceBySlug } from '@/lib/services'
import { ServiceIcon } from '@/components/ui/ServiceIcon'
import { CTABanner } from '@/components/ui/CTABanner'
import { StructuredData } from '@/components/seo/StructuredData'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { PHONE_TEL, PHONE_DISPLAY } from '@/components/ui/PhoneLink'

const BASE_URL = 'https://garagedoorsolutionsofcf.com'

const featuredCities = [
  { slug: 'lakeland',    name: 'Lakeland' },
  { slug: 'kissimmee',  name: 'Kissimmee' },
  { slug: 'orlando',    name: 'Orlando' },
  { slug: 'winter-haven', name: 'Winter Haven' },
  { slug: 'clermont',   name: 'Clermont' },
  { slug: 'plant-city', name: 'Plant City' },
]

interface Props {
  params: { service: string }
}

export function generateStaticParams() {
  return SERVICES.map(s => ({ service: s.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const service = getServiceBySlug(params.service)
  if (!service) return {}

  return {
    title: service.metaTitle,
    description: service.metaDesc,
    keywords: service.keywords,
    alternates: {
      canonical: `${BASE_URL}/services/${service.slug}`,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `${BASE_URL}/services/${service.slug}`,
      images: [{ url: '/gallery/android-chrome-512x512.png', width: 512, height: 512, alt: service.title }],
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.service)
  if (!service) notFound()

  const otherServices = SERVICES.filter(s => s.slug !== service.slug)

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription,
    url: `${BASE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Garage Door Solutions of Central Florida',
      telephone: '+18638083341',
      url: BASE_URL,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lakeland',
        addressRegion: 'FL',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida',
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  const crumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.title, href: `/services/${service.slug}` },
  ]

  return (
    <>
      <StructuredData schema={serviceSchema} />
      <StructuredData schema={faqSchema} />
      <BreadcrumbNav crumbs={crumbs} />

      {/* Hero */}
      <section className="bg-brand-navy py-16 px-4" aria-labelledby="service-page-heading">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-3">
              Central Florida Garage Door
            </p>
            <h1
              id="service-page-heading"
              className="font-display text-4xl sm:text-5xl font-bold text-white mb-4"
            >
              {service.title} in Central Florida
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mb-8 leading-relaxed">
              {service.description}
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

          {/* Visual card */}
          <div className="hidden lg:flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-10 text-center max-w-sm w-full">
              <div className="flex justify-center mb-4">
                <ServiceIcon name={service.icon} size={72} className="text-brand-amber" />
              </div>
              <p className="font-display text-2xl font-bold text-white mb-3">{service.shortTitle}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Long description + benefits */}
      <section className="py-16 px-4 bg-white" aria-labelledby="service-detail-heading">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 id="service-detail-heading" className="font-display text-3xl font-bold text-brand-slate mb-6">
              About Our {service.title} Service
            </h2>
            <p className="text-brand-steel leading-relaxed text-base mb-8">
              {service.longDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold px-6 py-3 rounded-xl hover:bg-brand-amberHover transition-colors min-h-[44px]"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <Phone size={16} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-brand-steel/30 text-brand-steel font-semibold px-6 py-3 rounded-xl hover:border-brand-sky hover:text-brand-sky transition-colors min-h-[44px] text-sm"
              >
                Request a Free Quote
                <ChevronRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-brand-cream rounded-2xl p-8">
            <h3 className="font-display text-xl font-bold text-brand-slate mb-6">
              Why Choose Us
            </h3>
            <ul className="space-y-4" role="list">
              {service.benefits.map(benefit => (
                <li key={benefit} className="flex items-start gap-3">
                  <CheckCircle size={20} className="text-green-500 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-brand-steel leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-xs text-brand-steel mb-3 font-semibold uppercase tracking-wide">Serving All of Central Florida</p>
              <ul className="flex flex-wrap gap-2" role="list">
                {featuredCities.map(city => (
                  <li key={city.slug}>
                    <Link
                      href={`/service-areas/${city.slug}`}
                      className="text-xs text-brand-sky font-semibold hover:underline"
                      aria-label={`${service.title} in ${city.name}, FL`}
                    >
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 px-4 bg-brand-cream" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="faq-heading" className="font-display text-3xl font-bold text-brand-slate mb-2 text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-brand-steel text-center mb-10">
            Common questions about {service.title.toLowerCase()} in Central Florida.
          </p>
          <dl className="space-y-4">
            {service.faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-gray-100 shadow-card p-6"
              >
                <dt className="font-display text-lg font-bold text-brand-slate mb-3">
                  {faq.q}
                </dt>
                <dd className="text-brand-steel leading-relaxed text-sm">
                  {faq.a}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 px-4 bg-white" aria-labelledby="other-services-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="other-services-heading" className="font-display text-2xl font-bold text-brand-slate mb-8">
            Other Garage Door Services
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {otherServices.map(s => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex items-start gap-4 p-5 bg-brand-cream rounded-xl border border-gray-100 hover:border-brand-sky hover:shadow-card transition-all"
                  aria-label={`${s.title} in Central Florida`}
                >
                  <ServiceIcon name={s.icon} size={28} className="text-brand-amber shrink-0 mt-0.5" />
                  <div>
                    <p className="font-display font-bold text-brand-slate group-hover:text-brand-sky transition-colors mb-1">
                      {s.title}
                    </p>
                    <p className="text-brand-steel text-xs leading-relaxed">{s.description}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Service areas internal links */}
      <section className="py-12 px-4 bg-brand-cream border-t border-gray-100" aria-labelledby="cities-heading">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} className="text-brand-amber" aria-hidden="true" />
            <h2 id="cities-heading" className="font-display text-xl font-bold text-brand-slate">
              {service.title} Across Central Florida
            </h2>
          </div>
          <p className="text-brand-steel text-sm mb-6 max-w-2xl">
            We provide {service.title.toLowerCase()} throughout Polk, Orange, Osceola &amp; Lake Counties.
            Find your city below.
          </p>
          <ul className="flex flex-wrap gap-3" role="list">
            {featuredCities.map(city => (
              <li key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-brand-steel text-sm font-semibold px-4 py-2.5 rounded-lg hover:border-brand-sky hover:text-brand-sky transition-colors"
                  aria-label={`${service.title} in ${city.name}, FL`}
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
        heading={`Need ${service.shortTitle} in Central Florida?`}
        subtext="Call us now or request a free quote online — same-day service available."
      />
    </>
  )
}
