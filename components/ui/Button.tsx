import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:   'bg-brand-amber text-brand-navy font-semibold hover:bg-brand-amberHover shadow-cta',
  secondary: 'bg-brand-blue text-white font-semibold hover:bg-brand-navy',
  outline:   'border-2 border-white text-white font-semibold hover:bg-white hover:text-brand-navy',
  ghost:     'text-brand-sky font-semibold hover:text-brand-sky/80',
}
const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

interface CommonProps { variant?: Variant; size?: Size; className?: string; children: ReactNode }
type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type LinkProps   = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type Props = ButtonProps | LinkProps

export function Button({ variant = 'primary', size = 'md', className, href, children, ...rest }: Props) {
  const base = cn(
    'inline-flex items-center justify-center gap-2 transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed',
    variants[variant], sizes[size], className
  )
  if (href !== undefined) {
    return <Link href={href} className={base} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>{children}</Link>
  }
  return <button className={base} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>{children}</button>
}
