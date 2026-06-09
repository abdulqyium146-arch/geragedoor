import { MessageSquare, Phone, Star } from 'lucide-react'
import { PHONE_TEL, PHONE_DISPLAY } from '@/components/ui/PhoneLink'
import Link from 'next/link'

export function FloatingCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      role="complementary"
      aria-label="Quick contact"
    >
      {/* Safe area spacer for iOS home indicator */}
      <div className="flex h-16 shadow-[0_-4px_16px_rgba(0,0,0,0.18)]">
        <a
          href={PHONE_TEL}
          className="flex-1 flex flex-col items-center justify-center bg-brand-amber text-brand-navy active:bg-brand-amberHover transition-colors"
          aria-label={`Call ${PHONE_DISPLAY} — available 24/7`}
        >
          <div className="flex items-center gap-1.5">
            <Phone size={17} aria-hidden="true" />
            <span className="text-sm font-bold tracking-tight">{PHONE_DISPLAY}</span>
          </div>
          <span className="text-[10px] font-semibold opacity-75 mt-0.5">Available 24/7</span>
        </a>
        <div className="w-px bg-brand-navy/20" aria-hidden="true" />
        <Link
          href="/contact"
          className="flex-1 flex flex-col items-center justify-center bg-brand-navy text-white active:bg-brand-blue transition-colors"
          aria-label="Get a free quote — 4.9 star rated"
        >
          <div className="flex items-center gap-1.5">
            <MessageSquare size={17} aria-hidden="true" />
            <span className="text-sm font-bold">Free Quote</span>
          </div>
          <div className="flex items-center gap-0.5 mt-0.5">
            {[1,2,3,4,5].map(n => (
              <Star key={n} size={8} className="text-brand-amber" fill="currentColor" aria-hidden="true" />
            ))}
            <span className="text-[10px] font-semibold opacity-60 ml-0.5">4.9★ Rated</span>
          </div>
        </Link>
      </div>
      {/* iOS safe area padding */}
      <div className="h-safe-bottom bg-brand-navy md:hidden" style={{ height: 'env(safe-area-inset-bottom)' }} aria-hidden="true" />
    </div>
  )
}
