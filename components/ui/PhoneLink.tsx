import { cn } from '@/lib/utils'
import { Phone } from 'lucide-react'

interface Props {
  className?: string
  showIcon?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const PHONE_DISPLAY = '(863) 808-3341'
const PHONE_TEL = 'tel:+18638083341'

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-2xl font-bold',
}

export function PhoneLink({ className, showIcon = false, size = 'md' }: Props) {
  return (
    <a
      href={PHONE_TEL}
      className={cn(
        'inline-flex items-center gap-2 transition-colors hover:opacity-80',
        sizeClasses[size],
        className
      )}
      aria-label={`Call us at ${PHONE_DISPLAY}`}
    >
      {showIcon && <Phone className="shrink-0" size={size === 'lg' ? 24 : 18} aria-hidden="true" />}
      {PHONE_DISPLAY}
    </a>
  )
}

export { PHONE_TEL, PHONE_DISPLAY }
