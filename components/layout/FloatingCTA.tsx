import { MessageSquare, Phone } from 'lucide-react'
import { PHONE_TEL } from '@/components/ui/PhoneLink'
import Link from 'next/link'

export function FloatingCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 flex md:hidden h-14"
      role="complementary"
      aria-label="Quick contact"
    >
      <a
        href={PHONE_TEL}
        className="flex-1 flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold text-sm min-h-[44px]"
        aria-label="Call us now"
      >
        <Phone size={18} aria-hidden="true" />
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 flex items-center justify-center gap-2 bg-brand-navy text-white font-bold text-sm min-h-[44px]"
        aria-label="Get a free quote"
      >
        <MessageSquare size={18} aria-hidden="true" />
        Free Quote
      </Link>
    </div>
  )
}
