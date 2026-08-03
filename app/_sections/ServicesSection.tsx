'use client'

import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ServiceCard } from '@/components/ui/ServiceCard'
import { SERVICES } from '@/lib/services'
import { stagger, viewportOnce } from '@/lib/animations'

export function ServicesSection() {
  return (
    <section
      className="bg-brand-cream py-20 px-4"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          <SectionHeader
            eyebrow="What We Do"
            heading="Complete Garage Door Services"
            subtext="From emergency repairs to full installations, our certified technicians handle it all — fast, fair, and right the first time."
            id="services-heading"
          />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map(service => (
            <ServiceCard
              key={service.slug}
              icon={service.icon}
              title={service.title}
              description={service.description}
              href={`/services#${service.slug}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
