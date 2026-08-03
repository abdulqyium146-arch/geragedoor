import type { Metadata } from 'next'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { CTABanner } from '@/components/ui/CTABanner'
import { StructuredData } from '@/components/seo/StructuredData'
import { SERVICES } from '@/lib/services'

export const metadata: Metadata = {
  title: 'Garage Door Services in Central Florida',
  description:
    'Complete garage door services: new installations, repairs, spring replacement, opener services, emergency service & commercial doors. Serving all of Central Florida.',
  alternates: { canonical: 'https://garagedoorsolutionscfl.com/services' },
  openGraph: {
    title: 'Garage Door Services | Central Florida',
    description: 'Installations, repairs, springs, openers & more. Licensed & insured. Serving Polk, Orange, Osceola & Lake Counties.',
    url: 'https://garagedoorsolutionscfl.com/services',
  },
}

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Garage Door Services',
  itemListElement: SERVICES.map((service, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: service.longDescription,
      url: `https://garagedoorsolutionscfl.com/services/${service.slug}`,
      provider: {
        '@type': 'LocalBusiness',
        name: 'Garage Door Solutions of Central Florida, LLC',
      },
      areaServed: 'Central Florida',
    },
  })),
}

export default function ServicesPage() {
  return (
    <>
      <StructuredData schema={servicesSchema} />

      <BreadcrumbNav crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
      ]} />

      {/* Short hero */}
      <section className="bg-brand-navy py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Garage Door Services in Central Florida
          </h1>
          <p className="text-slate-300 text-lg mt-4">
            Licensed, insured, and backed by 15+ years of experience serving Polk, Orange, Osceola &amp; Lake Counties.
          </p>
        </div>
      </section>

      {/* Services */}
      <main id="main-content" className="max-w-7xl mx-auto px-4 py-16">
        {SERVICES.map((service, i) => (
          <article
            key={service.slug}
            id={service.slug}
            className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-20 pb-20 border-b border-gray-100 last:border-0 last:mb-0 last:pb-0`}
          >
            {/* Image placeholder */}
            <div className="lg:w-1/2 w-full">
              <div className="rounded-2xl bg-gradient-to-br from-brand-navy to-brand-blue aspect-video flex items-center justify-center">
                <div className="text-center text-white/40">
                  <div className="font-display text-3xl font-bold mb-2">{service.title}</div>
                  <p className="text-sm">Service photo — {service.title} in Central Florida</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="lg:w-1/2 w-full">
              <h2 className="font-display text-3xl font-bold text-brand-slate mb-4">
                {service.title}
              </h2>
              <p className="text-brand-steel leading-relaxed mb-6">
                {service.longDescription}
              </p>

              <ul className="space-y-3 mb-8" aria-label={`${service.title} benefits`}>
                {service.benefits.map(benefit => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2 className="text-brand-amber shrink-0 mt-0.5" size={20} aria-hidden="true" />
                    <span className="text-brand-slate">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+18638083341"
                  className="inline-flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold px-6 py-3 rounded-xl hover:bg-brand-amber-hover transition-colors"
                  aria-label={`Call about ${service.title}`}
                >
                  Need {service.shortTitle}? Call Us
                </a>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 border-2 border-brand-navy text-brand-navy font-bold px-6 py-3 rounded-xl hover:bg-brand-navy hover:text-white transition-colors"
                  aria-label={`Learn more about ${service.title}`}
                >
                  Learn More
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </main>

      <CTABanner
        heading="Not Sure What You Need?"
        subtext="Call us and a real person will help you diagnose the issue — no commitment required."
      />
    </>
  )
}
