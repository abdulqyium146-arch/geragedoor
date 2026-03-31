import type { Metadata } from 'next'
import Link from 'next/link'
import { Shield, Star, Users, Award, CheckCircle, Phone } from 'lucide-react'
import { CTABanner } from '@/components/ui/CTABanner'
import { StructuredData } from '@/components/seo/StructuredData'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { PHONE_TEL, PHONE_DISPLAY } from '@/components/ui/PhoneLink'

export const metadata: Metadata = {
  title: 'About Us | Garage Door Solutions of Central Florida',
  description:
    'Learn about Garage Door Solutions of Central Florida — 15+ years serving Polk, Orange, Osceola & Lake Counties with honest, reliable garage door service.',
  alternates: { canonical: 'https://garagedoorsolutionsofcf.com/about' },
  openGraph: {
    title: 'About Us | Garage Door Solutions of Central Florida',
    description: '15+ years of trusted garage door service in Central Florida.',
    url: 'https://garagedoorsolutionsofcf.com/about',
    images: [{ url: '/gallery/android-chrome-512x512.png', width: 512, height: 512, alt: 'About Garage Door Solutions of Central Florida' }],
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Garage Door Solutions of Central Florida, LLC',
  url: 'https://garagedoorsolutionsofcf.com',
  telephone: '+18638083341',
  foundingDate: '2008',
  description:
    "Central Florida's trusted garage door repair, installation & emergency service company serving Polk, Orange, Osceola & Lake Counties for 15+ years.",
  areaServed: 'Central Florida',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '937',
    bestRating: '5',
  },
}

const stats = [
  { value: '15+', label: 'Years in Business' },
  { value: '937+', label: 'Verified Reviews' },
  { value: '4.9★', label: 'Google Rating' },
  { value: '20+', label: 'Cities Served' },
]

const values = [
  {
    icon: Shield,
    title: 'Integrity First',
    body: 'We give honest assessments and fair prices — always. You will never hear us recommend something you don\'t need.',
  },
  {
    icon: Star,
    title: 'Craftsmanship',
    body: 'Every job, big or small, is done right. We take pride in our work and it shows in our reviews and repeat customers.',
  },
  {
    icon: Users,
    title: 'Community',
    body: 'We live and work in Central Florida. Serving our neighbors isn\'t just a job — it\'s something we genuinely care about.',
  },
  {
    icon: Award,
    title: 'Accountability',
    body: 'We stand behind every job with a workmanship guarantee. If something isn\'t right, we make it right.',
  },
]

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
]

export default function AboutPage() {
  return (
    <>
      <StructuredData schema={orgSchema} />
      <BreadcrumbNav crumbs={crumbs} />

      {/* Page header */}
      <section className="bg-brand-navy py-16 px-4" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-3">Our Story</p>
          <h1 id="about-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Central Florida&apos;s Trusted<br />Garage Door Experts
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            For 15+ years we&apos;ve been helping Central Florida homeowners and businesses
            with reliable, honest garage door service they can count on.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 px-4 border-b border-gray-100" aria-label="Company statistics">
        <div className="max-w-7xl mx-auto">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center" role="list">
            {stats.map(({ value, label }) => (
              <li key={label}>
                <div className="font-display text-4xl font-bold text-brand-sky mb-1">{value}</div>
                <div className="text-brand-steel text-sm font-semibold">{label}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 bg-brand-cream" aria-labelledby="story-heading">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 id="story-heading" className="font-display text-3xl font-bold text-brand-slate mb-6">
              Built on Trust, Grown Through Referrals
            </h2>
            <div className="space-y-4 text-brand-steel leading-relaxed">
              <p>
                Garage Door Solutions of Central Florida was founded on a simple idea: give every customer the same honest, high-quality service you&apos;d want for your own family. Starting in Polk County over 15 years ago, we built our reputation one satisfied customer at a time.
              </p>
              <p>
                Today we serve homeowners and businesses across Polk, Orange, Osceola, Lake, and surrounding counties. Our growth has come almost entirely through word of mouth and referrals — the best testament to the work we do every day.
              </p>
              <p>
                We&apos;re a local company. Every technician we send to your home is background-checked, factory-trained, and takes genuine pride in their craft. We stock parts on every truck so most repairs are completed in a single visit.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold px-6 py-3 rounded-xl hover:bg-brand-amberHover transition-colors min-h-[44px]"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <Phone size={18} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-brand-steel/30 text-brand-slate font-semibold px-6 py-3 rounded-xl hover:border-brand-sky hover:text-brand-sky transition-colors min-h-[44px] text-sm"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>

          <div className="bg-brand-navy rounded-2xl p-10 text-white">
            <h3 className="font-display text-xl font-bold text-white mb-6">Why Customers Choose Us</h3>
            <ul className="space-y-4" role="list">
              {[
                'Licensed & Insured in the state of Florida',
                'Background-checked, factory-trained technicians',
                'Upfront pricing — you approve before we start',
                'Parts stocked on every truck for fast repairs',
                '4.9★ rating across 937+ verified Google reviews',
                'No call centers — you talk to a real local person',
              ].map(item => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-green-400 mt-0.5 shrink-0" aria-hidden="true" />
                  <span className="text-slate-300 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white" aria-labelledby="values-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-2">What We Stand For</p>
            <h2 id="values-heading" className="font-display text-3xl font-bold text-brand-slate">Our Core Values</h2>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {values.map(({ icon: Icon, title, body }) => (
              <li key={title} className="text-center p-6 bg-brand-cream rounded-2xl border border-gray-100">
                <div className="w-14 h-14 bg-brand-amber/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-brand-amber" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-slate mb-2">{title}</h3>
                <p className="text-brand-steel text-sm leading-relaxed">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTABanner
        heading="Ready to Experience the Difference?"
        subtext="Join 937+ happy Central Florida customers. Call or get a free quote today."
      />
    </>
  )
}
