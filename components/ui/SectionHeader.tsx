import { cn } from '@/lib/utils'

interface Props {
  eyebrow?: string
  heading: string
  subtext?: string
  id?: string
  className?: string
  center?: boolean
  light?: boolean
}

export function SectionHeader({ eyebrow, heading, subtext, id, className, center = true, light = false }: Props) {
  return (
    <div className={cn('mb-12', center && 'text-center', className)}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest mb-3 text-brand-amber">
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={cn('font-display text-3xl md:text-4xl font-bold leading-tight', light ? 'text-white' : 'text-brand-slate')}
      >
        {heading}
      </h2>
      {subtext && (
        <p className={cn('mt-4 text-lg max-w-2xl', center && 'mx-auto', light ? 'text-slate-300' : 'text-brand-steel')}>
          {subtext}
        </p>
      )}
    </div>
  )
}
