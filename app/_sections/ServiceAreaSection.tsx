'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { CITIES } from '@/lib/cities'
import { fadeUp, stagger, viewportOnce } from '@/lib/animations'

const COUNTIES = ['Polk', 'Orange', 'Osceola', 'Lake', 'Highlands', 'Hardee']

export function ServiceAreaSection() {
  return (
    <section
      className="bg-brand-cream py-20 px-4"
      aria-labelledby="service-areas-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <SectionHeader
            eyebrow="Service Areas"
            heading="Serving All of Central Florida"
            subtext="We proudly serve homeowners and businesses across Central Florida. Fast response times throughout the region."
            id="service-areas-heading"
          />
        </motion.div>

        {/* County badges */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {COUNTIES.map(county => (
            <motion.span
              key={county}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-navy text-white text-sm font-semibold"
            >
              {county} County
            </motion.span>
          ))}
        </motion.div>

        {/* Cities grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-10"
        >
          {CITIES.map(city => (
            <motion.div key={city.slug} variants={fadeUp}>
              <Link
                href={`/service-areas/${city.slug}`}
                className="block text-center px-3 py-2.5 rounded-lg border border-gray-200 text-brand-slate text-sm font-medium hover:border-brand-sky hover:text-brand-sky hover:bg-brand-sky/5 transition-all"
              >
                {city.name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-brand-sky font-semibold hover:underline"
          >
            View All Service Areas →
          </Link>
        </div>
      </div>
    </section>
  )
}
