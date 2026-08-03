import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: Variant
  size?: Size
  className?: string
}

interface ButtonProps extends BaseProps, ButtonHTMLAttributes<HTMLButtonElement> {
  href?: undefined
}

interface LinkProps extends BaseProps, AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
}

type Props = ButtonProps | LinkProps

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-amber text-brand-navy font-semibold hover:bg-brand-amber-hover focus-visible:outline-brand-amber',
  secondary:
    'bg-brand-blue text-white font-semibold hover:bg-brand-navy focus-visible:outline-brand-blue',
  outline:
    'border-2 border-white text-white font-semibold hover:bg-white hover:text-brand-navy focus-visible:outline-white',
  ghost:
    'text-brand-sky font-semibold hover:text-brand-sky/80 focus-visible:outline-brand-sky',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm rounded',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-xl',
}

export function Button({ variant = 'primary', size = 'md', className, href, ...rest }: Props) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 transition-all duration-200',
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:opacity-60 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {(rest as LinkProps).children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} />
  )
}
