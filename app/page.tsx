import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Shield, Clock, Star, ChevronRight, Wrench, Zap, Award } from 'lucide-react'
import { SERVICES } from '@/lib/services'
import { CITIES } from '@/lib/cities'
import { REVIEWS } from '@/lib/reviews'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { CTABanner } from '@/components/ui/CTABanner'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { PHONE_TEL, PHONE_DISPLAY } from '@/components/ui/PhoneLink'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Garage Door Repair & Installation Central Florida | (863) 808-3341',
  description:
    'Garage Door Solutions of Central Florida — serving Lakeland, Kissimmee, Orlando & all of Polk County. Same-day service. Always a real person answers. Free estimates.',
  alternates: { canonical: 'https://garagedoorsolutionsofcf.com' },
  openGraph: {
    title: 'Garage Door Solutions of Central Florida | (863) 808-3341',
    description: "Central Florida's #1 rated garage door company. Same-day service, free quotes.",
    url: 'https://garagedoorsolutionsofcf.com',
    images: [{ url: '/gallery/android-chrome-512x512.png', width: 512, height: 512, alt: 'Garage Door Solutions of Central Florida' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly can you repair a garage door in Central Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer same-day service for most garage door repairs in Central Florida. Call (863) 808-3341 and a real person will answer and schedule your appointment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer free estimates for garage door installation in Polk County?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we provide free estimates for all garage door installations and replacements in Polk County and throughout Central Florida.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas of Central Florida do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Central Florida including Polk County, Orange County, Osceola County, and Lake County. This includes Lakeland, Winter Haven, Kissimmee, Orlando, Clermont, and surrounding areas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you licensed and insured for garage door work in Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Garage Door Solutions of Central Florida, LLC is fully licensed and insured to perform garage door installation and repair throughout the state of Florida.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you repair all brands of garage door openers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, our technicians are trained to repair and install all major brands including LiftMaster, Chamberlain, Genie, Craftsman, and more.',
      },
    },
  ],
}

const trustBadges = [
  { icon: Star,   label: '4.9★ Google Rating' },
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Clock,  label: 'Same-Day Service' },
  { icon: Award,  label: '15+ Years Experience' },
]

const whyUs = [
  {
    icon: Zap,
    title: 'Fast Response',
    body: 'Most calls answered in under 2 minutes. Same-day appointments available 6 days a week.',
  },
  {
    icon: Wrench,
    title: 'Expert Technicians',
    body: 'Factory-trained on all major brands — LiftMaster, Chamberlain, Genie, Clopay & more.',
  },
  {
    icon: Shield,
    title: 'Upfront Pricing',
    body: 'No hidden fees, ever. You approve the quote before we touch your door.',
  },
  {
    icon: Star,
    title: 'Satisfaction Guaranteed',
    body: 'We back every job with a workmanship guarantee. Your satisfaction is our standard.',
  },
]

const featuredCities = ['lakeland', 'winter-haven', 'kissimmee', 'orlando', 'clermont', 'brandon', 'haines-city', 'plant-city']

export default function HomePage() {
  return (
    <>
      <StructuredData schema={faqSchema} />

      {/* ── Hero ── */}
      <section
        className="relative min-h-[90vh] flex items-center bg-brand-navy hero-clip overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-brand-blue/90 to-brand-navy/80 z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex items-center gap-2 text-brand-amber text-sm font-semibold tracking-wide uppercase mb-4">
              <Star size={14} fill="currentColor" aria-hidden="true" />
              Central Florida&apos;s #1 Rated Garage Door Company
            </p>
            <h1
              id="hero-heading"
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Central Florida&apos;s<br />
              Trusted <span className="text-brand-amber">Garage Door</span><br />
              Team
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
              Serving Polk, Orange, Osceola &amp; Lake Counties for 15+ years.
              Same-day service available — most repairs completed in one visit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_TEL}
                className="inline-flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold text-lg px-8 py-4 rounded-xl shadow-cta hover:bg-brand-amberHover transition-colors min-h-[56px]"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                <Phone size={20} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold text-base px-8 py-4 rounded-xl hover:bg-white/10 transition-colors min-h-[56px]"
              >
                Get Free Quote
                <ChevronRight size={18} aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-6 text-slate-400 text-sm">Mon–Sat 8:00am–7:00pm · Emergency service available</p>
          </div>

          {/* Rating card */}
          <div className="hidden lg:flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center max-w-xs w-full">
              <div className="text-6xl font-display font-bold text-white mb-1">4.9</div>
              <div className="flex justify-center gap-1 mb-3">
                {[1,2,3,4,5].map(n => (
                  <Star key={n} size={24} className="text-brand-amber" fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <p className="text-slate-300 text-sm mb-4">937+ Verified Google Reviews</p>
              <div className="border-t border-white/20 pt-4">
                <p className="text-brand-amber font-semibold text-sm">Licensed &amp; Insured</p>
                <p className="text-slate-400 text-xs mt-1">Polk County, FL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Bar ── */}
      <section className="bg-white border-b border-gray-100 py-5" aria-label="Trust indicators">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4" role="list">
            {trustBadges.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center justify-center gap-2.5 text-brand-slate font-semibold text-sm">
                <Icon size={20} className="text-brand-amber shrink-0" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="py-20 bg-brand-cream" id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="What We Do"
            id="services-heading"
            heading="Complete Garage Door Services"
            subtext="From emergency repairs to full new door installations, we handle every garage door need for Central Florida homeowners and businesses."
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" role="list">
            {SERVICES.map(service => (
              <li key={service.slug}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  href={`/services/${service.slug}`}
                />
              </li>
            ))}
          </ul>
          <div className="mt-10 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-brand-sky font-semibold hover:text-brand-blue transition-colors"
            >
              View all services
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-20 bg-brand-navy" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Why Choose Us"
            id="why-heading"
            heading="The Central Florida Garage Door Experts"
            subtext="We've been serving homeowners and businesses across Central Florida for over 15 years — and we do it right every time."
            light
          />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12" role="list">
            {whyUs.map(({ icon: Icon, title, body }) => (
              <li key={title} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="w-12 h-12 bg-brand-amber/20 rounded-xl flex items-center justify-center mb-4">
                  <Icon size={24} className="text-brand-amber" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2">{title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Service Areas ── */}
      <section className="py-20 bg-white" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Where We Serve"
            id="areas-heading"
            heading="Serving All of Central Florida"
            subtext="From Lakeland to Orlando and beyond — we cover Polk, Orange, Osceola & Lake Counties."
          />
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-12" role="list">
            {CITIES.filter(c => featuredCities.includes(c.slug)).map(city => (
              <li key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="group flex items-center justify-between p-4 bg-brand-cream rounded-xl border border-gray-100 hover:border-brand-sky hover:shadow-card transition-all"
                >
                  <div>
                    <p className="font-semibold text-brand-slate text-sm group-hover:text-brand-sky transition-colors">{city.name}</p>
                    <p className="text-xs text-brand-steel mt-0.5">{city.county} County</p>
                  </div>
                  <ChevronRight size={14} className="text-gray-300 group-hover:text-brand-sky transition-colors" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-center">
            <Link
              href="/service-areas"
              className="inline-flex items-center gap-2 text-brand-sky font-semibold hover:text-brand-blue transition-colors"
            >
              View all 20 service areas
              <ChevronRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reviews ── */}
      <section className="py-20 bg-brand-cream" id="reviews" aria-labelledby="reviews-heading">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Customer Reviews"
            id="reviews-heading"
            heading="937+ Happy Customers Can't Be Wrong"
            subtext="Don't take our word for it — here's what our Central Florida neighbors say about us."
          />
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12" role="list">
            {REVIEWS.slice(0, 6).map(review => (
              <li key={review.id}>
                <ReviewCard review={review} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <CTABanner
        heading="Ready to Fix Your Garage Door?"
        subtext="Get a free quote today. Same-day service available Mon–Sat, 8am–7pm."
      />
    </>
  )
}
