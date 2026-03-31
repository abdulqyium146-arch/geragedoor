import type { Metadata } from 'next'
import { Phone, MapPin, Clock } from 'lucide-react'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { StructuredData } from '@/components/seo/StructuredData'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { PHONE_TEL, PHONE_DISPLAY } from '@/components/ui/PhoneLink'

export const metadata: Metadata = {
  title: 'Free Garage Door Quote | Central Florida | Call (863) 808-3341',
  description:
    'Get a free garage door estimate in Central Florida. Call (863) 808-3341 or fill out our form. We respond within 1 hour. Mon–Sat 8am–7pm.',
  alternates: { canonical: 'https://garagedoorsolutionsofcf.com/contact' },
  openGraph: {
    title: 'Contact Us | Free Garage Door Quote | (863) 808-3341',
    description: 'Get a free quote for garage door repair or installation in Central Florida.',
    url: 'https://garagedoorsolutionsofcf.com/contact',
    images: [{ url: '/gallery/android-chrome-512x512.png', width: 512, height: 512, alt: 'Contact Garage Door Solutions of Central Florida' }],
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How quickly will you respond to my quote request?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We typically respond within 1 hour during business hours (Mon–Sat, 8am–7pm). For urgent needs, please call us directly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the quote really free?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, 100% free and no-obligation. We will diagnose your situation and provide a clear, upfront price before any work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer emergency service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, we offer extended-hours emergency service. Call (863) 808-3341 and you will speak with a live team member.',
      },
    },
  ],
}

const faqs = [
  {
    q: 'How quickly will you respond to my request?',
    a: 'We typically respond within 1 hour during business hours (Mon–Sat, 8am–7pm). For urgent needs, please call us directly at (863) 808-3341.',
  },
  {
    q: 'Is the quote really free?',
    a: 'Absolutely — 100% free and no-obligation. We diagnose your situation and provide a clear, upfront price before any work begins.',
  },
  {
    q: 'Do you offer same-day service?',
    a: 'Yes! We offer same-day appointments for most repairs throughout Central Florida, Monday through Saturday.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve all of Central Florida including Polk, Orange, Osceola, Lake, and surrounding counties — from Lakeland to Orlando and beyond.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards, checks, and cash. Payment is due upon completion of work.',
  },
]

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'Contact', href: '/contact' },
]

export default function ContactPage() {
  return (
    <>
      <StructuredData schema={faqSchema} />
      <BreadcrumbNav crumbs={crumbs} />

      {/* Page header */}
      <section className="bg-brand-navy py-16 px-4" aria-labelledby="contact-heading">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-3">Free Quote</p>
          <h1 id="contact-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Get Your Free Garage Door Quote
          </h1>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Fill out the form below or give us a call — we&apos;ll get back to you fast.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        {/* Form */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-card p-8">
            <h2 className="font-display text-2xl font-bold text-brand-slate mb-6">Request a Free Quote</h2>
            <QuoteForm />
          </div>
        </div>

        {/* Sidebar */}
        <aside aria-label="Contact information">
          <div className="space-y-6">
            {/* Call CTA */}
            <div className="bg-brand-navy rounded-2xl p-6 text-white text-center">
              <p className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-2">Prefer to Call?</p>
              <a
                href={PHONE_TEL}
                className="font-display text-3xl font-bold text-white hover:text-brand-amber transition-colors block mb-3"
                aria-label={`Call ${PHONE_DISPLAY}`}
              >
                {PHONE_DISPLAY}
              </a>
              <p className="text-slate-400 text-sm">You&apos;ll always reach a live person — no call centers, no bots.</p>
            </div>

            {/* Business info */}
            <div className="bg-white rounded-2xl shadow-card p-6 space-y-4">
              <h3 className="font-display text-lg font-bold text-brand-slate">Business Info</h3>
              <address className="not-italic space-y-3 text-sm text-brand-steel">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="text-brand-amber mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-brand-slate">Service Area</p>
                    <p>Polk, Orange, Osceola &amp; Lake Counties, FL</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={16} className="text-brand-amber mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-brand-slate">Hours</p>
                    <p>Mon–Sat, 8:00am–7:00pm</p>
                    <p>Emergency service available</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={16} className="text-brand-amber mt-0.5 shrink-0" aria-hidden="true" />
                  <div>
                    <p className="font-semibold text-brand-slate">Phone</p>
                    <a href={PHONE_TEL} className="text-brand-sky hover:underline">{PHONE_DISPLAY}</a>
                  </div>
                </div>
              </address>
            </div>

            {/* Badges */}
            <div className="bg-brand-cream rounded-2xl p-6">
              <h3 className="font-display text-lg font-bold text-brand-slate mb-4">Why Choose Us</h3>
              <ul className="space-y-2 text-sm text-brand-steel" role="list">
                {[
                  '4.9★ Google Rating · 937+ Reviews',
                  'Licensed & Insured in Florida',
                  'Same-Day Service Available',
                  '15+ Years of Experience',
                  'No Hidden Fees — Upfront Pricing',
                ].map(item => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-amber shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>
      </div>

      {/* FAQ */}
      <section className="bg-white py-16 px-4" aria-labelledby="contact-faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="contact-faq-heading" className="font-display text-3xl font-bold text-brand-slate text-center mb-10">
            Frequently Asked Questions
          </h2>
          <dl className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-brand-cream rounded-xl border border-gray-100 p-6">
                <dt className="font-semibold text-brand-slate mb-2">{faq.q}</dt>
                <dd className="text-brand-steel text-sm leading-relaxed">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}
