'use client'

import { motion } from 'framer-motion'
import { Phone, Shield, Clock, Star, Award } from 'lucide-react'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

const TRUST_BADGES = [
  { icon: <Star size={16} aria-hidden="true" />, label: '4.9★ Google' },
  { icon: <Shield size={16} aria-hidden="true" />, label: 'Licensed & Insured' },
  { icon: <Clock size={16} aria-hidden="true" />, label: '24/7 Emergency' },
  { icon: <Award size={16} aria-hidden="true" />, label: '15+ Years' },
]

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex items-center bg-brand-navy hero-clip overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Geometric pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Diagonal line pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 pt-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-12 items-center">
          {/* Left — text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block text-brand-amber text-sm font-semibold uppercase tracking-widest mb-4">
                Orlando &amp; Central Florida&apos;s #1 Choice
              </span>
              <h1
                id="hero-heading"
                className="font-display text-4xl md:text-6xl font-bold text-white leading-tight"
              >
                Central Florida&apos;s{' '}
                <span className="text-brand-amber">#1 Garage</span> Door Team
              </h1>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-xl"
            >
              Serving Polk, Orange, Osceola &amp; Lake Counties — You&apos;ll Always Speak With a Real Person
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+18638083341"
                className="inline-flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-amber-hover transition-colors [box-shadow:var(--shadow-cta)]"
                aria-label="Call us now"
              >
                <Phone size={20} aria-hidden="true" />
                Call Now: (863) 808-3341
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white hover:text-brand-navy transition-colors"
              >
                Get Free Quote
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-2">
              {TRUST_BADGES.map(badge => (
                <div
                  key={badge.label}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-white font-medium"
                >
                  <span className="text-brand-amber">{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — mini quote form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            style={{ transitionDelay: '0.3s' } as React.CSSProperties}
            className="bg-brand-navy/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8"
          >
            <h2 className="font-display text-2xl font-bold text-white mb-1">
              Free Estimate
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              We respond within 1 hour during business hours.
            </p>
            <QuoteForm compact />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
