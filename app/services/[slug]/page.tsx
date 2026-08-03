import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Phone, CheckCircle2, AlertTriangle, Clock, Shield, Zap, ArrowRight } from 'lucide-react'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { StructuredData } from '@/components/seo/StructuredData'
import { CTABanner } from '@/components/ui/CTABanner'
import { SERVICES, getServiceBySlug } from '@/lib/services'
import Link from 'next/link'

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }))
}

type Props = { params: Promise<{ slug: string }> }

const BASE_URL = 'https://garagedoorsolutionscfl.com'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return {}

  const title = service.metaTitle ?? `${service.title} in Central Florida | Garage Door Solutions | (863) 808-3341`
  const description =
    service.metaDescription ??
    `${service.description} Licensed & insured. Serving Orlando, Kissimmee, Lakeland & all of Central Florida. Free estimates. Call (863) 808-3341.`

  return {
    title,
    description,
    alternates: { canonical: `${BASE_URL}/services/${slug}` },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/services/${slug}`,
      type: 'website',
    },
  }
}

// Emergency-specific city blocks — each unique to avoid duplicate content
const EMERGENCY_CITIES = [
  {
    name: 'Orlando',
    slug: 'orlando',
    county: 'Orange County',
    blurb:
      'We cover all of Orlando — from Downtown and Dr. Phillips to College Park and beyond. Our trucks are positioned throughout Orange County to reach most Orlando neighborhoods within 60 minutes.',
  },
  {
    name: 'Lake Nona',
    slug: 'lake-nona',
    county: 'Orange County',
    blurb:
      'Lake Nona is one of Central Florida\'s fastest-growing communities and we serve it around the clock. We cover Laureate Park, Medical City, Tavistock, and all Lake Nona neighborhoods for emergency garage door repair.',
  },
  {
    name: 'Kissimmee',
    slug: 'kissimmee',
    county: 'Osceola County',
    blurb:
      'Kissimmee residents across Osceola County call us first for emergency garage door service. Whether you are near US-192, the Osceola Parkway, or anywhere in between — we dispatch immediately.',
  },
  {
    name: 'Winter Garden',
    slug: 'winter-garden',
    county: 'Orange County',
    blurb:
      'We provide 24/7 emergency garage door repair throughout Winter Garden and the West Orange corridor including Windermere, Oakland, and Horizon West. Fast dispatch, fully stocked trucks.',
  },
  {
    name: 'Altamonte Springs',
    slug: 'altamonte-springs',
    county: 'Seminole County',
    blurb:
      'Altamonte Springs and Seminole County homeowners receive the same fast emergency response as our core service area. We cover Cranes Roost, Forest City, and all surrounding neighborhoods day and night.',
  },
  {
    name: 'Winter Park',
    slug: 'winter-park',
    county: 'Orange County',
    blurb:
      'Winter Park homeowners trust us for emergency garage door repairs any time of day or night. We serve all of Winter Park including Maitland, College Park, and surrounding communities.',
  },
  {
    name: 'Haines City',
    slug: 'haines-city',
    county: 'Polk County',
    blurb:
      'Haines City and Polk County is part of our core service area. We have served Haines City homeowners for over 15 years and respond to emergencies around the clock — including weekends and holidays.',
  },
]

const EMERGENCY_SITUATIONS = [
  {
    icon: <AlertTriangle size={24} className="text-brand-amber" aria-hidden="true" />,
    title: "Door Won't Close",
    desc: 'A security and safety emergency. Your home is exposed until this is fixed. We treat it as our highest priority.',
  },
  {
    icon: <Zap size={24} className="text-brand-amber" aria-hidden="true" />,
    title: 'Spring Snapped',
    desc: 'Car trapped inside or door with no support. Do not try to force it — call us immediately.',
  },
  {
    icon: <Shield size={24} className="text-brand-amber" aria-hidden="true" />,
    title: 'Cable Broke',
    desc: 'Broken cable causes uneven hang or a sudden drop. Dangerous to operate. Needs immediate repair.',
  },
  {
    icon: <AlertTriangle size={24} className="text-brand-amber" aria-hidden="true" />,
    title: 'Door Off Track',
    desc: 'Door is hanging at an angle or grinding and will not move. Stop using it and call right away.',
  },
  {
    icon: <Clock size={24} className="text-brand-amber" aria-hidden="true" />,
    title: 'Opener Failure',
    desc: 'Opener running but door will not respond. Could be the opener or another component — we diagnose on arrival.',
  },
  {
    icon: <Shield size={24} className="text-brand-amber" aria-hidden="true" />,
    title: 'Storm or Impact Damage',
    desc: 'Bent panels, damaged tracks, or frame damage from accidents or weather. We restore function and security fast.',
  },
]

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const isEmergency = slug === 'emergency-service'

  const faqSchema = service.faqs?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.faqs.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: { '@type': 'Answer', text: faq.a },
        })),
      }
    : null

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Garage Door Solutions of Central Florida, LLC',
      telephone: '+18638083341',
      url: BASE_URL,
    },
    areaServed: [
      { '@type': 'State', name: 'Florida' },
      { '@type': 'City', name: 'Orlando' },
      { '@type': 'City', name: 'Kissimmee' },
      { '@type': 'City', name: 'Lakeland' },
      { '@type': 'City', name: 'Winter Park' },
      { '@type': 'City', name: 'Lake Nona' },
      { '@type': 'City', name: 'Winter Garden' },
      { '@type': 'City', name: 'Altamonte Springs' },
      { '@type': 'City', name: 'Haines City' },
    ],
    ...(isEmergency && {
      availableChannel: {
        '@type': 'ServiceChannel',
        servicePhone: {
          '@type': 'ContactPoint',
          telephone: '+18638083341',
          contactType: 'emergency',
          availableLanguage: 'English',
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '00:00',
            closes: '23:59',
          },
        },
      },
    }),
  }

  return (
    <>
      {faqSchema && <StructuredData schema={faqSchema} />}
      <StructuredData schema={serviceSchema} />

      <BreadcrumbNav
        crumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title, href: `/services/${slug}` },
        ]}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className={`py-16 px-4 ${isEmergency ? 'bg-[#7f1d1d]' : 'bg-brand-navy'}`}
        aria-labelledby="service-hero-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          {isEmergency ? (
            <p className="text-red-300 text-sm font-semibold uppercase tracking-widest mb-3">
              We Answer 24 Hours — 7 Days a Week — Real Person Every Call
            </p>
          ) : (
            <p className="text-brand-amber text-sm font-semibold uppercase tracking-widest mb-3">
              Central Florida&apos;s #1 Garage Door Team
            </p>
          )}

          <h1
            id="service-hero-heading"
            className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            {isEmergency
              ? '24/7 Emergency Garage Door Repair in Central Florida'
              : `${service.title} in Central Florida`}
          </h1>

          <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {isEmergency
              ? "Garage door won't close? Spring snapped? Car trapped inside? Call now — a real person answers immediately."
              : service.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18638083341"
              className="inline-flex items-center justify-center gap-2 bg-brand-amber text-brand-navy font-bold text-xl px-8 py-5 rounded-xl hover:bg-brand-amber-hover transition-colors [box-shadow:var(--shadow-cta)]"
              aria-label="Call us now at (863) 808-3341"
            >
              <Phone size={24} aria-hidden="true" />
              {isEmergency ? 'Call Now: (863) 808-3341' : 'Call (863) 808-3341'}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-white hover:text-brand-navy transition-colors"
            >
              Free Estimate
            </Link>
          </div>

          {isEmergency && (
            <div className="flex flex-wrap gap-3 justify-center mt-6">
              {[
                'Live Person Answers 24/7',
                '~60 Min Response Time',
                'No Emergency Surcharge',
                '4.9★ Rated — 937+ Reviews',
              ].map(badge => (
                <span
                  key={badge}
                  className="bg-white/10 backdrop-blur-sm text-white text-sm font-medium px-4 py-2 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      <main id="main-content" className="max-w-7xl mx-auto px-4 py-16">

        {/* ── EMERGENCY: SITUATIONS WE FIX ─────────────────── */}
        {isEmergency && (
          <section className="mb-20" aria-labelledby="situations-heading">
            <h2
              id="situations-heading"
              className="font-display text-3xl font-bold text-brand-slate mb-3 text-center"
            >
              Common Emergency Situations We Fix
            </h2>
            <p className="text-brand-steel text-center mb-10 max-w-2xl mx-auto">
              If any of these sound like your situation right now — stop and call{' '}
              <a href="tel:+18638083341" className="text-brand-amber font-bold hover:underline">
                (863) 808-3341
              </a>
              . Do not try to force a damaged door.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {EMERGENCY_SITUATIONS.map(s => (
                <div
                  key={s.title}
                  className="flex gap-4 p-5 rounded-xl border border-gray-200 bg-white [box-shadow:var(--shadow-card)]"
                >
                  <div className="shrink-0 mt-0.5">{s.icon}</div>
                  <div>
                    <h3 className="font-display font-bold text-brand-slate mb-1">{s.title}</h3>
                    <p className="text-brand-steel text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ── EMERGENCY: HOW IT WORKS ──────────────────────── */}
        {isEmergency && (
          <section className="mb-20 bg-brand-navy rounded-2xl p-8 md:p-12" aria-labelledby="how-it-works-heading">
            <h2
              id="how-it-works-heading"
              className="font-display text-2xl font-bold text-white mb-8 text-center"
            >
              How Our Emergency Service Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Call Us Any Time',
                  desc: 'Call (863) 808-3341 and a real person answers — 24 hours a day, 7 days a week. No voicemail, no automated system.',
                },
                {
                  step: '02',
                  title: 'We Dispatch Immediately',
                  desc: 'We send the nearest available technician with a fully stocked truck. Most Central Florida locations reached within 60 minutes.',
                },
                {
                  step: '03',
                  title: 'Fixed & Secured',
                  desc: 'Your technician diagnoses the issue, gives you upfront pricing, and fixes it right — usually in a single visit.',
                },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-amber text-brand-navy font-display font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <a
                href="tel:+18638083341"
                className="inline-flex items-center gap-2 bg-brand-amber text-brand-navy font-bold text-lg px-8 py-4 rounded-xl hover:bg-brand-amber-hover transition-colors"
                aria-label="Call for emergency garage door service"
              >
                <Phone size={20} aria-hidden="true" />
                Call Now — We Answer 24/7
              </a>
            </div>
          </section>
        )}

        {/* ── STANDARD: SERVICE DESCRIPTION ───────────────── */}
        {!isEmergency && (
          <section className="max-w-3xl mb-16" aria-labelledby="service-intro-heading">
            <h2
              id="service-intro-heading"
              className="font-display text-2xl font-bold text-brand-slate mb-4"
            >
              {service.title} — Central Florida
            </h2>
            <p className="text-brand-steel leading-relaxed text-lg">{service.longDescription}</p>
          </section>
        )}

        {/* ── BENEFITS ─────────────────────────────────────── */}
        <section className="mb-16" aria-labelledby="benefits-heading">
          <h2
            id="benefits-heading"
            className="font-display text-2xl font-bold text-brand-slate mb-8"
          >
            {isEmergency ? 'What You Get When You Call Us' : `Why Choose Us for ${service.shortTitle}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
            {service.benefits.map(benefit => (
              <div key={benefit} className="flex items-start gap-3">
                <CheckCircle2
                  className="text-brand-amber shrink-0 mt-0.5"
                  size={20}
                  aria-hidden="true"
                />
                <span className="text-brand-slate font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── EMERGENCY: CITY-BY-CITY SECTIONS ────────────── */}
        {isEmergency && (
          <section className="mb-20" aria-labelledby="emergency-cities-heading">
            <h2
              id="emergency-cities-heading"
              className="font-display text-3xl font-bold text-brand-slate mb-3"
            >
              Emergency Garage Door Repair — City by City
            </h2>
            <p className="text-brand-steel mb-10 max-w-2xl">
              We cover all of Central Florida. Below are the areas we serve most frequently for
              24/7 emergency calls.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EMERGENCY_CITIES.map(city => (
                <article
                  key={city.slug}
                  className="p-6 rounded-xl border border-gray-200 bg-white [box-shadow:var(--shadow-card)]"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-display text-xl font-bold text-brand-slate">
                        Emergency Garage Door Repair in {city.name}
                      </h3>
                      <p className="text-brand-amber text-xs font-semibold uppercase tracking-wide mt-0.5">
                        {city.county}
                      </p>
                    </div>
                  </div>
                  <p className="text-brand-steel text-sm leading-relaxed mb-4">{city.blurb}</p>
                  <div className="flex gap-3">
                    <a
                      href="tel:+18638083341"
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy bg-brand-amber px-4 py-2 rounded-lg hover:bg-brand-amber-hover transition-colors"
                      aria-label={`Call for emergency service in ${city.name}`}
                    >
                      <Phone size={14} aria-hidden="true" />
                      Call Now
                    </a>
                    <Link
                      href={`/service-areas/${city.slug}`}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-navy hover:text-brand-sky transition-colors"
                      aria-label={`Learn more about service in ${city.name}`}
                    >
                      {city.name} Service Area
                      <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ── FAQ ──────────────────────────────────────────── */}
        {service.faqs?.length ? (
          <section className="mb-16 max-w-3xl" aria-labelledby="faq-heading">
            <h2
              id="faq-heading"
              className="font-display text-2xl font-bold text-brand-slate mb-8"
            >
              {isEmergency
                ? 'Emergency Garage Door FAQs'
                : `${service.shortTitle} — Frequently Asked Questions`}
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="border-b border-gray-100 pb-6 last:border-0"
                >
                  <h3 className="font-display font-bold text-brand-slate mb-2">{faq.q}</h3>
                  <p className="text-brand-steel leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        {/* ── OTHER SERVICES ───────────────────────────────── */}
        <section className="mb-16" aria-labelledby="other-services-heading">
          <h2
            id="other-services-heading"
            className="font-display text-xl font-bold text-brand-slate mb-6"
          >
            More Services We Offer
          </h2>
          <div className="flex flex-wrap gap-3">
            {SERVICES.filter(s => s.slug !== slug).map(s => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="px-4 py-2 rounded-lg border border-gray-200 text-brand-steel text-sm font-medium hover:border-brand-sky hover:text-brand-sky transition-colors"
              >
                {s.title}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <CTABanner
        heading={
          isEmergency
            ? 'Garage Door Emergency? Call Right Now.'
            : `Ready for ${service.shortTitle} in Central Florida?`
        }
        subtext={
          isEmergency
            ? 'A real person answers 24/7. No voicemail. No wait. Just fast, professional service.'
            : 'Call us today — a real person will answer and get you scheduled fast.'
        }
      />
    </>
  )
}
