import type { Metadata } from 'next'
import { Oswald, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/layout/FloatingCTA'
import { StructuredData } from '@/components/seo/StructuredData'
import { CITIES } from '@/lib/cities'

const displayFont = Oswald({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display-var',
  weight: ['400', '500', '600', '700'],
})

const bodyFont = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body-var',
  weight: ['400', '600', '700'],
})

const BASE_URL = 'https://garagedoorsolutionscfl.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Garage Door Solutions of Central Florida | Repair & Installation',
    template: '%s | Garage Door Solutions of Central Florida',
  },
  description:
    "Central Florida's trusted garage door company. 4.9★ rated with 937+ Google reviews. New installations, repairs, spring replacement, opener services. Serving Polk, Orange, Osceola & Lake Counties.",
  openGraph: {
    type: 'website',
    siteName: 'Garage Door Solutions of Central Florida',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
  alternates: { canonical: BASE_URL },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'Garage Door Solutions of Central Florida, LLC',
  url: BASE_URL,
  telephone: '+18638083341',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  openingHours: ['Mo-Su 00:00-23:59'],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+18638083341',
      contactType: 'customer service',
      areaServed: 'US-FL',
      availableLanguage: 'English',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'ContactPoint',
      telephone: '+18638083341',
      contactType: 'emergency',
      areaServed: 'US-FL',
      availableLanguage: 'English',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '937',
    bestRating: '5',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lakeland',
    addressRegion: 'FL',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.0395,
    longitude: -81.9498,
  },
  areaServed: CITIES.map(city => ({
    '@type': 'City',
    name: city.name,
    containedIn: { '@type': 'AdministrativeArea', name: `${city.county} County, FL` },
  })),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-brand-cream pb-14 md:pb-0">
        <StructuredData schema={localBusinessSchema} />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
