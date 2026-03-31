'use client'
import { motion } from 'framer-motion'
import { ArrowRight, Home, Wrench, Zap, Radio, AlertTriangle, Building2 } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { fadeUp, viewportOnce } from '@/lib/animations'

const ICONS = { Home, Wrench, Zap, Radio, AlertTriangle, Building2 }

interface Props {
  icon: string
  title: string
  description: string
  href: string
  className?: string
}

export function ServiceCard({ icon, title, description, href, className }: Props) {
  const Icon = ICONS[icon as keyof typeof ICONS] ?? Home
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={cn(
        'group bg-white rounded-lg p-6 shadow-card transition-all duration-200',
        'hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]',
        className
      )}
    >
      <div className="w-14 h-14 rounded-lg bg-brand-amber/10 flex items-center justify-center mb-4">
        <Icon className="text-brand-amber" size={32} aria-hidden="true" />
      </div>
      <h3 className="font-display text-xl font-semibold text-brand-slate mb-2">{title}</h3>
      <p className="text-brand-steel text-sm leading-relaxed mb-4 line-clamp-2">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-brand-sky text-sm font-semibold group-hover:gap-2 transition-all"
        aria-label={`Learn more about ${title}`}
      >
        Learn More <ArrowRight size={16} aria-hidden="true" />
      </Link>
    </motion.div>
  )
}
