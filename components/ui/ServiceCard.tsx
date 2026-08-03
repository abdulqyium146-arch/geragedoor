'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'
import { ArrowRight, Home, Wrench, Zap, Radio, AlertTriangle, Building2 } from 'lucide-react'
import Link from 'next/link'
import { fadeUp, viewportOnce } from '@/lib/animations'

const iconMap = {
  Home,
  Wrench,
  Zap,
  Radio,
  AlertTriangle,
  Building2,
}

interface Props {
  icon: string
  title: string
  description: string
  href: string
  className?: string
}

export function ServiceCard({ icon, title, description, href, className }: Props) {
  const Icon = iconMap[icon as keyof typeof iconMap] ?? Home

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        'group bg-white rounded-xl p-6 transition-all duration-200 cursor-pointer',
        'hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]',
        '[box-shadow:var(--shadow-card)]',
        className
      )}
    >
      <div className="w-14 h-14 rounded-xl bg-brand-amber/10 flex items-center justify-center mb-4">
        <Icon className="text-brand-amber" size={32} aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-semibold text-brand-slate mb-2">{title}</h3>
      <p className="text-brand-steel text-sm leading-relaxed mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-brand-sky text-sm font-semibold hover:gap-2 transition-all"
        aria-label={`Learn more about ${title}`}
      >
        Learn More <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </motion.div>
  )
}
