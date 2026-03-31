import { ArrowRight, MapPin } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface Props { name: string; county: string; slug: string; className?: string }

export function CityCard({ name, county, slug, className }: Props) {
  return (
    <Link
      href={`/service-areas/${slug}`}
      className={cn(
        'group flex items-center justify-between p-3 rounded-lg border border-gray-100',
        'hover:border-brand-sky hover:bg-brand-sky/5 transition-all duration-200',
        className
      )}
    >
      <div className="flex items-center gap-2">
        <MapPin className="text-brand-steel shrink-0" size={14} aria-hidden="true" />
        <div>
          <span className="text-brand-slate font-medium text-sm block">{name}</span>
          <span className="text-brand-steel text-xs">{county} County</span>
        </div>
      </div>
      <ArrowRight className="text-brand-steel group-hover:text-brand-sky transition-colors shrink-0" size={14} aria-hidden="true" />
    </Link>
  )
}
