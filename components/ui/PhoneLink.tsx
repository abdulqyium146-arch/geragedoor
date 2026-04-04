import { cn } from '@/lib/utils'
import { Phone } from 'lucide-react'

export const PHONE_DISPLAY = '(773) 985-1092'
export const PHONE_TEL = 'tel:+17739851092'

interface Props {
  className?: string
  showIcon?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizes = { sm: 'text-sm', md: 'text-base', lg: 'text-2xl font-bold' }

export function PhoneLink({ className, showIcon = false, size = 'md' }: Props) {
  return (
    <a
      href={PHONE_TEL}
      className={cn('inline-flex items-center gap-2 transition-colors hover:opacity-80', sizes[size], className)}
      aria-label={`Call us at ${PHONE_DISPLAY}`}
    >
      {showIcon && <Phone size={size === 'lg' ? 24 : 18} aria-hidden="true" />}
      {PHONE_DISPLAY}
    </a>
  )
}
