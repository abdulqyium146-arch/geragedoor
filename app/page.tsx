import type { Metadata } from 'next'
import { HeroSection } from './_sections/HeroSection'
import { TrustBar } from './_sections/TrustBar'
import { ServicesSection } from './_sections/ServicesSection'
import { WhyUsSection } from './_sections/WhyUsSection'
import { ServiceAreaSection } from './_sections/ServiceAreaSection'
import { ReviewsSection } from './_sections/ReviewsSection'
import { FinalCTA } from './_sections/FinalCTA'
import { StructuredData } from '@/components/seo/StructuredData'

export const metadata: Metadata = {
  title: 'Garage Door Repair & Installation Orlando | 24/7 Emergency | (863) 808-3341',
  description:
    "Central Florida's #1 garage door company. 4.9★ · 937+ Google reviews. Repair, installation, spring replacement & 24/7 emergency service. Serving Orlando, Kissimmee, Lakeland & all of Central FL. Call (863) 808-3341.",
  alternates: { canonical: 'https://garagedoorsolutionscfl.com' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you offer emergency garage door repair near me in Orlando?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide 24/7 emergency garage door repair across Orlando and all of Central Florida. A live person answers every call — day or night. Call (863) 808-3341 now.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the average response time for emergency garage door service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We typically arrive within 60 minutes of your call throughout Central Florida. Our trucks are fully stocked so most repairs are completed in a single visit.',
      },
    },
    {
      '@type': 'Question',
      name: 'My garage door will not close — who should I call?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Call Garage Door Solutions of Central Florida at (863) 808-3341 immediately. A door that will not close is a security emergency and we treat it as our highest priority.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer same-day garage door repair in Central Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Same-day garage door repair is available throughout Polk, Orange, Osceola, Seminole, and Lake Counties. Call (863) 808-3341 and we will get a technician to you as fast as possible.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you a garage door company near me that does free estimates?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We provide free, no-obligation estimates for all garage door repairs and installations throughout Central Florida. You approve the price before any work begins — no surprises.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you offer after-hours and weekend garage door repair in Orlando?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We offer emergency garage door service seven days a week including weekends and holidays. Call (863) 808-3341 any time and a real person will answer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas do you service for garage door repair and installation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve all of Central Florida including Orlando, Kissimmee, Lakeland, Winter Park, Lake Nona, Winter Garden, Altamonte Springs, Haines City, Deltona, Sanford, and the surrounding counties of Orange, Osceola, Polk, Seminole, Lake, and Volusia.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work on commercial garage doors in Central Florida?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We install and repair commercial garage doors for warehouses, retail locations, auto shops, and storage facilities throughout Central Florida. Emergency commercial service is also available.',
      },
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <StructuredData schema={faqSchema} />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <WhyUsSection />
      <ServiceAreaSection />
      <ReviewsSection />
      <FinalCTA />
    </>
  )
}
