'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ReviewCard } from '@/components/ui/ReviewCard'
import { StarRating } from '@/components/ui/StarRating'
import { REVIEWS } from '@/lib/reviews'
import { stagger, fadeUp, viewportOnce } from '@/lib/animations'

export function ReviewsSection() {
  const displayReviews = REVIEWS.slice(0, 6)

  return (
    <section
      className="bg-white py-20 px-4"
      aria-labelledby="reviews-heading"
      id="reviews"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-amber mb-3">
            What Customers Say
          </p>
          <div className="flex items-center justify-center gap-3 mb-3">
            <StarRating rating={4.9} size={28} />
            <h2
              id="reviews-heading"
              className="font-display text-3xl md:text-4xl font-bold text-brand-slate"
            >
              4.9★ Rated on Google
            </h2>
          </div>
          <p className="text-brand-steel text-lg">937+ verified reviews from Central Florida homeowners</p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {displayReviews.map(review => (
            <motion.div key={review.id} variants={fadeUp}>
              <ReviewCard review={review} />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <a
            href="https://www.google.com/maps/place/Garage+Door+Solutions+of+Central+Florida"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-brand-sky font-semibold hover:underline"
            aria-label="See all reviews on Google (opens in new tab)"
          >
            See All Reviews on Google
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
