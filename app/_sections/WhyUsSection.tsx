'use client'

import { motion } from 'framer-motion'
import { PhoneCall, MapPin, DollarSign, BadgeCheck } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { StarRating } from '@/components/ui/StarRating'
import { stagger, fadeUp, viewportOnce } from '@/lib/animations'

const FEATURES = [
  {
    icon: <PhoneCall size={24} aria-hidden="true" />,
    title: 'Live Person Answers',
    body: 'No bots, no voicemail. A real Polk County team member picks up every call, every time.',
  },
  {
    icon: <MapPin size={24} aria-hidden="true" />,
    title: 'Local Experts',
    body: 'We live and work here. We know Central Florida homes, neighborhoods, and what it takes to do the job right.',
  },
  {
    icon: <DollarSign size={24} aria-hidden="true" />,
    title: 'Upfront Pricing',
    body: 'No hidden fees, no surprises. You approve the price before any work begins — that\'s our promise.',
  },
  {
    icon: <BadgeCheck size={24} aria-hidden="true" />,
    title: 'Workmanship Guarantee',
    body: 'We stand behind every job. If something\'s wrong after we leave, we come back and fix it. No questions asked.',
  },
]

export function WhyUsSection() {
  return (
    <section
      className="bg-brand-navy py-20 px-4"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Features grid */}
          <div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
            >
              <SectionHeader
                eyebrow="Why Choose Us"
                heading="The Hometown Difference"
                id="why-us-heading"
                center={false}
                light
              />
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {FEATURES.map(feature => (
                <motion.div key={feature.title} variants={fadeUp} className="flex flex-col gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-amber/15 flex items-center justify-center text-brand-amber">
                    {feature.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.body}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Customer review pull quote */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="bg-white/5 border border-white/10 rounded-2xl p-8"
          >
            <StarRating rating={5} size={22} className="mb-6" />
            <blockquote className="text-white text-lg leading-relaxed italic mb-6">
              &ldquo;Called on a Saturday morning when my spring snapped and the car was trapped in the garage. They had a technician out within 2 hours. Fixed everything same-day and the price was exactly what they quoted. Will never use anyone else.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-amber/20 flex items-center justify-center text-brand-amber font-bold font-display text-lg">
                JM
              </div>
              <div>
                <cite className="text-white font-semibold not-italic">Jennifer M.</cite>
                <p className="text-slate-400 text-sm">Lakeland, FL · January 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
