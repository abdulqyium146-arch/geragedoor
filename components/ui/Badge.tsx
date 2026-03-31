import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

interface Props { icon?: ReactNode; label: string; className?: string }

export function Badge({ icon, label, className }: Props) {
  return (
    <div className={cn('inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold', className)}>
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{label}</span>
    </div>
  )
}
