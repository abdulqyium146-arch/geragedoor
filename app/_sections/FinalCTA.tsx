import { Phone } from 'lucide-react'
import Link from 'next/link'

export function FinalCTA() {
  return (
    <section
      className="bg-brand-amber py-20 px-4"
      aria-label="Get started today"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brand-navy mb-4">
          Ready for Fast, Honest Garage Door Service?
        </h2>
        <p className="text-brand-navy/70 text-lg mb-8">
          Available Mon–Sat, 8am–7pm. Emergency calls always welcome.
        </p>
        <a
          href="tel:+18638083341"
          className="inline-flex items-center gap-3 bg-brand-navy text-white font-bold text-2xl md:text-3xl px-10 py-5 rounded-xl hover:bg-brand-blue transition-colors mb-6 [box-shadow:0_4px_20px_rgba(11,31,58,0.25)]"
          aria-label="Call us at (863) 808-3341"
        >
          <Phone size={28} aria-hidden="true" />
          (863) 808-3341
        </a>
        <div className="flex items-center justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center text-brand-navy font-semibold text-lg border-2 border-brand-navy px-8 py-3 rounded-xl hover:bg-brand-navy hover:text-white transition-colors"
          >
            Get Free Quote Online
          </Link>
        </div>
      </div>
    </section>
  )
}
