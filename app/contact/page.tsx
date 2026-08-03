import type { Metadata } from 'next'
import { Phone, Clock, MapPin, ChevronDown } from 'lucide-react'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { StructuredData } from '@/components/seo/StructuredData'
import { QuoteForm } from '@/components/forms/QuoteForm'

export const metadata: Metadata = {
  title: 'Contact Us — Get a Free Garage Door Quote',
  description:
    'Request a free garage door quote or call (863) 808-3341. Serving all of Central Florida. Mon–Sat 8am–7pm. A real person always answers.',
  alternates: { canonical: 'https://garagedoorsolutionscfl.com/contact' },
  openGraph: {
    title: 'Get a Free Garage Door Quote | Central Florida',
    description: 'Call or request a free estimate online. Same-day service available throughout Central Florida.',
    url: 'https://garagedoorsolutionscfl.com/contact',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://garagedoorsolutionscfl.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://garagedoorsolutionscfl.com/contact' },
  ],
}

const FAQS = [
  {
    q: 'How quickly can you come out?',
    a: 'We offer same-day service throughout Central Florida. In most cases we can have a technician at your home within 2–4 hours of your call. Emergency calls are always prioritized.',
  },
  {
    q: 'Do you offer free estimates?',
    a: 'Yes. We provide free, no-obligation estimates for all garage door repairs and installations. You approve the price before any work begins — guaranteed.',
  },
  {
    q: 'What brands of garage doors do you carry?',
    a: 'We carry and install doors from all major manufacturers including Clopay, Amarr, Wayne Dalton, and Craftsman. We also service all brands regardless of where they were purchased.',
  },
  {
    q: 'Do you work on commercial properties?',
    a: 'Yes. We service warehouses, retail locations, auto shops, storage facilities, and other commercial properties throughout Central Florida. Ask about our commercial maintenance programs.',
  },
  {
    q: 'What areas do you service?',
    a: 'We serve all of Central Florida including Polk, Orange, Osceola, Lake, Highlands, and Hardee Counties. Our service cities include Lakeland, Winter Haven, Kissimmee, Orlando, Clermont, and many more.',
  },
]

export default function ContactPage() {
  return (
    <>
      <StructuredData schema={breadcrumbSchema} />

      <BreadcrumbNav crumbs={[
        { label: 'Home', href: '/' },
        { label: 'Contact', href: '/contact' },
      ]} />

      <section className="bg-brand-navy py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Get a Free Garage Door Quote
          </h1>
          <p className="text-slate-300 text-lg mt-4">
            Fill out the form or call — a real person always answers.
          </p>
        </div>
      </section>

      <main id="main-content" className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12">
          {/* Form */}
          <section aria-labelledby="quote-form-heading">
            <h2 id="quote-form-heading" className="font-display text-2xl font-bold text-brand-slate mb-6">
              Request Your Free Estimate
            </h2>
            <div className="bg-white rounded-2xl p-6 md:p-8 [box-shadow:var(--shadow-card)]">
              <QuoteForm />
            </div>
          </section>

          {/* Contact info */}
          <aside aria-label="Contact information">
            <div className="bg-brand-navy rounded-2xl p-6 mb-6">
              <h2 className="font-display text-xl font-bold text-white mb-6">Contact Info</h2>
              <div className="space-y-5">
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Phone</p>
                  <a
                    href="tel:+18638083341"
                    className="text-brand-amber font-bold text-2xl hover:text-brand-amber-hover transition-colors flex items-center gap-2"
                    aria-label="Call (863) 808-3341"
                  >
                    <Phone size={22} aria-hidden="true" />
                    (863) 808-3341
                  </a>
                  <p className="text-slate-400 text-xs mt-1">Always a real person</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-widest mb-2">Hours</p>
                  <table className="text-sm w-full" aria-label="Business hours">
                    <tbody>
                      {[
                        ['Monday – Friday', '8:00am – 7:00pm'],
                        ['Saturday', '8:00am – 7:00pm'],
                        ['Sunday', 'Emergency Calls Only'],
                      ].map(([day, hours]) => (
                        <tr key={day}>
                          <td className="text-slate-300 py-1 pr-4">{day}</td>
                          <td className="text-white font-medium py-1">{hours}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div>
                  <p className="text-slate-400 text-xs uppercase tracking-widest mb-1">Service Area</p>
                  <div className="flex items-start gap-2">
                    <MapPin size={16} className="text-brand-amber mt-0.5 shrink-0" aria-hidden="true" />
                    <p className="text-slate-300 text-sm">
                      All of Central Florida — Polk, Orange, Osceola, Lake, and surrounding counties.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-200 to-slate-300 aspect-video flex items-center justify-center">
              <div className="text-center text-slate-400">
                <MapPin size={32} className="mx-auto mb-2" aria-hidden="true" />
                <p className="text-sm font-medium">Polk County, FL</p>
                <p className="text-xs">Map embed placeholder</p>
              </div>
            </div>
          </aside>
        </div>

        {/* FAQ */}
        <section className="mt-16 max-w-3xl mx-auto" aria-labelledby="faq-heading" id="reviews">
          <h2
            id="faq-heading"
            className="font-display text-2xl font-bold text-brand-slate mb-8 text-center"
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none font-semibold text-brand-slate hover:text-brand-sky transition-colors">
                  {faq.q}
                  <ChevronDown
                    size={18}
                    className="text-brand-steel group-open:rotate-180 transition-transform shrink-0"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 pb-5 text-brand-steel text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}
