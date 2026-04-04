import type { Metadata } from 'next'
import { Oswald, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/layout/FloatingCTA'
import { StructuredData } from '@/components/seo/StructuredData'
import { BASE_URL } from '@/lib/seo'

const display = Oswald({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  preload: true,
})

const body = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Garage Door Solutions of Central Florida | Lakeland, FL',
    template: '%s | Garage Door Solutions of Central Florida',
  },
  description:
    "Central Florida's trusted garage door company. Serving Polk, Orange, Osceola & Lake Counties. Call (773) 985-1092 for same-day service, repairs & new installations.",
  keywords: [
    'garage door repair Central Florida',
    'garage door installation Lakeland FL',
    'garage door company Polk County',
    'emergency garage door service Florida',
  ],
  authors: [{ name: 'Garage Door Solutions of Central Florida' }],
  creator: 'Garage Door Solutions of Central Florida, LLC',
  publisher: 'Garage Door Solutions of Central Florida, LLC',
  formatDetection: { telephone: true, email: false, address: true },
  alternates: {
    canonical: BASE_URL,
  },
  icons: {
    icon: [
      { url: '/gallery/favicon.ico', sizes: 'any' },
      { url: '/gallery/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/gallery/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
    ],
    apple: [
      { url: '/gallery/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/gallery/favicon.ico',
    other: [
      { rel: 'icon', url: '/gallery/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/gallery/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Garage Door Solutions of Central Florida',
    title: 'Garage Door Solutions of Central Florida | (773) 985-1092',
    description:
      'Serving all of Central Florida. Real people, same-day service, 15+ years experience. Licensed & Insured.',
    images: [
      {
        url: '/gallery/android-chrome-512x512.png',
        width: 512,
        height: 512,
        alt: 'Garage Door Solutions of Central Florida Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garage Door Solutions of Central Florida',
    description: 'Serving Polk, Orange, Osceola & Lake Counties. Call (773) 985-1092.',
    images: ['/gallery/android-chrome-512x512.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ADD_YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE_HERE',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id': `${BASE_URL}/#business`,
  name: 'Garage Door Solutions of Central Florida, LLC',
  url: BASE_URL,
  telephone: '+17739851092',
  email: 'info@garagedoorsolutionsofcf.com',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Check',
  logo: {
    '@type': 'ImageObject',
    url: `${BASE_URL}/gallery/android-chrome-512x512.png`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/gallery/android-chrome-512x512.png`,
  description:
    "Central Florida's trusted garage door company with 15+ years of experience. Serving Polk, Orange, Osceola, and Lake Counties.",
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lakeland',
    addressRegion: 'FL',
    addressCountry: 'US',
    postalCode: '33801',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 28.0395,
    longitude: -81.9498,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Lakeland' },
    { '@type': 'City', name: 'Winter Haven' },
    { '@type': 'City', name: 'Kissimmee' },
    { '@type': 'City', name: 'Orlando' },
    { '@type': 'City', name: 'Clermont' },
    { '@type': 'City', name: 'Haines City' },
    { '@type': 'City', name: 'Auburndale' },
    { '@type': 'City', name: 'Bartow' },
    { '@type': 'City', name: 'Plant City' },
    { '@type': 'City', name: 'Davenport' },
    { '@type': 'City', name: 'Poinciana' },
    { '@type': 'City', name: 'St. Cloud' },
    { '@type': 'City', name: 'Apopka' },
    { '@type': 'City', name: 'Sanford' },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '937',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Garage Door Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garage Door Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Garage Door Installation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spring Replacement' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Opener Installation & Repair' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Emergency Garage Door Service' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Garage Doors' } },
    ],
  },
  sameAs: [
    'https://www.facebook.com/garagedoorsolutionsofcf',
    'https://www.google.com/maps?cid=REPLACE_WITH_ACTUAL_CID',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-sans bg-brand-cream text-brand-slate antialiased">
        <StructuredData schema={localBusinessSchema} />
        <Navbar />
        <main id="main-content" tabIndex={-1} className="pb-14 md:pb-0">
          {children}
        </main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
