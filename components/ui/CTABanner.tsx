import Link from 'next/link'
import { Phone } from 'lucide-react'
import { PHONE_TEL } from './PhoneLink'

interface Props {
  heading?: string
  subtext?: string
}

export function CTABanner({
  heading = 'Ready to Get Started?',
  subtext = 'Call us today for a free estimate. Available Mon–Sat, 8am–7pm.',
}: Props) {
  return (
    <section className="bg-brand-amber py-14 px-4" aria-label="Call to action">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-2">{heading}</h2>
        <p className="text-brand-navy/70 text-lg mb-8">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={PHONE_TEL}
            className="inline-flex items-center gap-3 bg-brand-navy text-white font-bold text-xl px-8 py-4 rounded-xl hover:bg-brand-blue transition-colors"
            aria-label="Call us now"
          >
            <Phone size={22} aria-hidden="true" />
            (863) 808-3341
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-white text-brand-navy font-bold text-base px-8 py-4 rounded-xl hover:bg-brand-cream transition-colors"
          >
            Get Free Quote
          </Link>
        </div>
      </div>
    </section>
  )
}
