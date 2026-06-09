import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { CTABanner } from '@/components/ui/CTABanner'
import { StructuredData } from '@/components/seo/StructuredData'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { PHONE_TEL, PHONE_DISPLAY } from '@/components/ui/PhoneLink'

export const metadata: Metadata = {
  title: 'Garage Door FAQ | Central Florida | Garage Door Solutions',
  description:
    'Answers to every garage door question — repair costs, emergency service, spring replacement, opener installation, new door pricing, maintenance & more. Serving Central Florida 24/7.',
  alternates: { canonical: 'https://garagedoorsolutionsofcf.com/faq' },
  openGraph: {
    title: 'Garage Door FAQ | Garage Door Solutions of Central Florida',
    description: 'Complete A-to-Z answers to garage door repair, installation, pricing, and emergency service questions for Central Florida homeowners.',
    url: 'https://garagedoorsolutionsofcf.com/faq',
    images: [{ url: '/gallery/android-chrome-512x512.png', width: 512, height: 512, alt: 'Garage Door FAQ Central Florida' }],
  },
}

interface FAQ { q: string; a: React.ReactNode }
interface Category { id: string; label: string; faqs: FAQ[] }

const categories: Category[] = [
  {
    id: 'about',
    label: 'About Us',
    faqs: [
      {
        q: 'What services does Garage Door Solutions of Central Florida provide?',
        a: 'We provide garage door repair, new door installation, spring replacement, garage door opener repair and installation, emergency service, and commercial garage door services throughout Central Florida — available 24/7.',
      },
      {
        q: 'How long have you been in business?',
        a: 'We have been serving Central Florida homeowners and businesses for 15+ years. Starting in Polk County, we have grown to serve 20+ cities across Polk, Orange, Osceola, Lake, and surrounding counties.',
      },
      {
        q: 'Are you licensed and insured for garage door work in Florida?',
        a: 'Yes. Garage Door Solutions of Central Florida, LLC is fully licensed and insured to perform garage door installation and repair throughout the state of Florida. All technicians are background-checked and factory-trained.',
      },
      {
        q: 'Do you offer a warranty on your work?',
        a: 'Yes. Every job comes backed by our workmanship guarantee. Parts warranties vary by manufacturer — we will walk you through coverage specifics before any work begins.',
      },
      {
        q: 'What areas of Central Florida do you serve?',
        a: 'We serve 20+ cities including Lakeland, Winter Haven, Kissimmee, Orlando, Clermont, Haines City, Auburndale, Bartow, Plant City, Brandon, Davenport, Poinciana, St. Cloud, Celebration, Deltona, Sanford, Apopka, and more across Polk, Orange, Osceola, Lake, Hillsborough, Volusia, Seminole, and Marion Counties.',
      },
    ],
  },
  {
    id: 'booking',
    label: 'Booking & Availability',
    faqs: [
      {
        q: 'Are you available 24/7 for garage door service?',
        a: 'Yes. We are available 24 hours a day, 7 days a week. Call (702) 935-3283 any time — a real person will always answer. No voicemail, no automated systems.',
      },
      {
        q: 'How do I schedule a garage door repair or installation?',
        a: 'Call (702) 935-3283 to speak with a team member and schedule your appointment, or fill out our online quote form at garagedoorsolutionsofcf.com/contact. We offer same-day and next-day appointments throughout Central Florida.',
      },
      {
        q: 'Do you offer free estimates?',
        a: 'Yes. We provide free, no-obligation estimates for all garage door repairs and new installations. You always approve the price before any work begins — no hidden fees.',
      },
      {
        q: 'How quickly can you arrive at my home?',
        a: 'For standard service calls, we typically arrive same-day or next day depending on your location. For emergency calls, we aim to arrive within 1–3 hours. We always give you an honest ETA when you call.',
      },
      {
        q: 'Do you offer same-day garage door service?',
        a: 'Yes. We offer same-day appointments for most repairs and installations throughout Central Florida. Call early for best availability.',
      },
    ],
  },
  {
    id: 'emergency',
    label: 'Emergency Service',
    faqs: [
      {
        q: 'Do you offer emergency garage door repair near me in Central Florida?',
        a: 'Yes. We provide 24/7 emergency garage door repair throughout Central Florida — Orlando, Kissimmee, Lakeland, Winter Haven, Altamonte Springs, Lake Nona, Winter Garden, and all surrounding cities. Call (702) 935-3283 now.',
      },
      {
        q: 'What counts as a garage door emergency?',
        a: 'A garage door emergency is any situation that leaves your home unsecured (door stuck open), prevents access to your vehicle, or creates a safety hazard. Common emergencies include: broken spring, snapped cable, door off track, door stuck open, or opener failure with car trapped inside.',
      },
      {
        q: 'What should I do if my garage door won\'t close?',
        a: 'If your door is stuck open, do not leave your home unattended. Try pulling the manual release cord (red handle hanging from the opener track) to disengage the opener, then manually lower the door as a temporary measure. Call (702) 935-3283 immediately for same-day repair.',
      },
      {
        q: 'What should I do if my garage door won\'t open?',
        a: 'First check that the opener is plugged in and the wall button works. If the opener hums but the door won\'t move, the spring or drive gear may be broken. Use the manual release cord to open the door manually. For safety, call us — spring and drive problems require professional repair.',
      },
      {
        q: 'Is emergency garage door repair more expensive?',
        a: 'No. We charge the same fair prices for emergency calls — there are no hidden emergency surcharges or after-hours fees. You always approve the price before any work begins.',
      },
      {
        q: 'My garage door fell completely off the track — is that an emergency?',
        a: 'Yes. An off-track door is both a security risk and a serious safety hazard. Do not attempt to force it back onto the track yourself — the door could fall and cause injury. Call (702) 935-3283 for immediate assistance.',
      },
      {
        q: 'I heard a loud bang from my garage — is my spring broken?',
        a: 'A sudden loud bang from the garage, especially followed by a door that feels extremely heavy or won\'t open, almost always indicates a broken torsion spring. This is an emergency — the door should not be operated until the spring is replaced. Call us immediately.',
      },
    ],
  },
  {
    id: 'pricing',
    label: 'Pricing & Payment',
    faqs: [
      {
        q: 'How much does garage door repair cost in Central Florida?',
        a: 'Garage door repair in Central Florida typically ranges from $75 to $600+ depending on the issue. Sensor alignment: $75–$150. Cable replacement: $100–$200. Spring replacement: $150–$350. Off-track repair: $100–$300. Panel replacement: $200–$600+. We provide free, upfront estimates — call (702) 935-3283.',
      },
      {
        q: 'How much does garage door spring replacement cost?',
        a: 'Spring replacement in Central Florida typically costs $150–$350 for a single spring or $200–$500 for both (which we recommend replacing together). Price depends on spring type, size, and wire gauge. High-cycle spring upgrades last 20,000+ cycles and are available for a modest premium.',
      },
      {
        q: 'How much does a new garage door installation cost?',
        a: 'New garage door installation typically ranges from $800 to $3,500+ depending on size, material, and style. Single doors: $800–$1,500. Double doors: $1,200–$3,500. Custom wood or carriage-style doors run higher. We provide free, no-obligation estimates — call (702) 935-3283.',
      },
      {
        q: 'How much does garage door opener installation cost?',
        a: 'Garage door opener installation in Central Florida typically costs $200–$600 including the unit and labor. Chain drive openers start around $200–$350; belt drive (quieter): $300–$500; smart Wi-Fi openers: $300–$600 installed. We provide free estimates.',
      },
      {
        q: 'Do you charge a diagnostic or trip fee?',
        a: 'We do not charge a hidden trip fee. We provide free estimates and upfront pricing. You know the full cost before any work begins.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards, debit cards, checks, and cash. Payment is due upon completion of work.',
      },
    ],
  },
  {
    id: 'repairs',
    label: 'Garage Door Repairs',
    faqs: [
      {
        q: 'What are the most common garage door problems?',
        a: 'The most common garage door issues we repair are: broken torsion or extension springs, snapped or frayed cables, misaligned safety sensors, doors off track, worn rollers, bent tracks, broken panels, and garage door opener failures.',
      },
      {
        q: 'How do I know if my garage door spring is broken?',
        a: 'Signs of a broken spring: the door feels extremely heavy when lifted manually, the opener strains or fails to lift the door, the door only opens a few inches, or you heard a loud bang. You may also see a visible gap in the torsion spring coil above the door.',
      },
      {
        q: 'Can I replace a garage door spring myself?',
        a: 'We strongly advise against DIY spring replacement. Garage door torsion springs are under hundreds of pounds of tension and can cause severe injury or death if improperly handled. This job requires specialized tools and professional training.',
      },
      {
        q: 'Should I replace both garage door springs at the same time?',
        a: 'Yes. If one spring breaks, the second is typically near the end of its life. Replacing both at once saves on labor costs and prevents a second service call within weeks. We always recommend this approach.',
      },
      {
        q: 'What causes garage door cables to snap or fray?',
        a: 'Cables typically fail due to wear from repeated use, rust or corrosion (common in Florida\'s humid climate), a broken spring putting extra load on the cables, or the cable jumping off its drum due to misalignment.',
      },
      {
        q: 'What should I do if my garage door goes off track?',
        a: 'Do not continue operating the door — this can cause further damage or injury. The door should be professionally realigned. Call (702) 935-3283 for same-day off-track repair throughout Central Florida.',
      },
      {
        q: 'Why is my garage door making a loud grinding or squeaking noise?',
        a: 'Grinding usually means worn or dry rollers, loose hardware, or a stripped opener drive gear. Squeaking typically means the rollers, hinges, or springs need lubrication. A regular tune-up and lubrication service can prevent these issues.',
      },
      {
        q: 'Why does my garage door reverse before fully closing?',
        a: 'This is usually caused by misaligned safety sensors (the small boxes near the bottom of the door tracks), or the close-force limit setting on the opener being too sensitive. Check that nothing is blocking the sensor beam. If the issue persists, call us.',
      },
      {
        q: 'My garage door opens by itself — what\'s causing this?',
        a: 'Common causes: a neighbor\'s remote operating on the same frequency, a stuck remote button, electrical interference from nearby devices, or a faulty logic board in the opener. We can diagnose and fix the issue same-day.',
      },
      {
        q: 'Can a bent or dented garage door panel be repaired, or does it need replacement?',
        a: 'Minor dents can sometimes be repaired. Significant bends, cracks, or structural damage typically require panel replacement. We will give you an honest assessment — if repair is cost-effective, we will say so.',
      },
      {
        q: 'Why is my garage door crooked or uneven?',
        a: 'An uneven door usually indicates a broken or worn spring on one side, a cable that has jumped off its drum, or a bent track. This creates uneven tension and should be repaired promptly to avoid damaging the opener and other hardware.',
      },
    ],
  },
  {
    id: 'installation',
    label: 'New Door Installation',
    faqs: [
      {
        q: 'How long does new garage door installation take?',
        a: 'Most standard residential garage door installations are completed in 3–5 hours. Custom or oversized doors may take longer. We offer same-day and next-day installation appointments throughout Central Florida.',
      },
      {
        q: 'What is the best garage door material for Florida\'s climate?',
        a: 'Steel doors are the most popular choice in Florida due to their durability, resistance to humidity and insects, and wide variety of styles. Fiberglass and aluminum are also excellent in coastal and humid climates. We can help you choose the right material for your home and budget.',
      },
      {
        q: 'What garage door brands do you install?',
        a: 'We install doors from Clopay, Wayne Dalton, Amarr, and other top-rated manufacturers. We help you select the right style, insulation rating, and material to match your home\'s architecture.',
      },
      {
        q: 'Should I get an insulated garage door in Florida?',
        a: 'Yes, insulation is worth it even in Florida. An insulated door keeps your garage cooler in summer, reduces energy costs if the garage is attached to your home, reduces noise, and is generally more durable. We recommend at least R-6 insulation value.',
      },
      {
        q: 'Do you remove and haul away my old garage door?',
        a: 'Yes. Old door removal and disposal is included with every new installation. We leave your property clean.',
      },
      {
        q: 'What is the difference between a single and double garage door?',
        a: 'A single garage door covers a one-car opening (typically 8–10 ft wide). A double door covers a two-car opening (typically 16 ft wide). Double doors cost more but provide the convenience of a single large opening and can be more visually appealing.',
      },
      {
        q: 'How do I choose the right garage door style for my home?',
        a: 'Consider your home\'s architectural style: traditional homes suit raised-panel steel doors; craftsman or cottage homes look great with carriage-house styles; modern homes pair well with aluminum and glass or flush steel. We can walk you through options and show you samples.',
      },
    ],
  },
  {
    id: 'openers',
    label: 'Garage Door Openers',
    faqs: [
      {
        q: 'What is the best garage door opener brand?',
        a: 'LiftMaster is widely considered the most reliable brand by professionals and is what we install most often. Chamberlain (same parent company) and Genie are also excellent choices. We help you pick the right model for your needs and budget.',
      },
      {
        q: 'What is the difference between chain drive, belt drive, and screw drive openers?',
        a: 'Chain drive: most affordable, durable, slightly noisier — good for detached garages. Belt drive: quieter operation, ideal for attached garages near bedrooms. Screw drive: fewer moving parts, moderate noise, less common. We recommend belt drive for most Central Florida homes.',
      },
      {
        q: 'How long does garage door opener installation take?',
        a: 'Most garage door opener installations are completed in 1–2 hours including remote programming, keypad setup, and safety sensor testing.',
      },
      {
        q: 'Can I get a smart Wi-Fi connected garage door opener?',
        a: 'Yes. We install and configure Wi-Fi connected openers from LiftMaster and Chamberlain that work with the myQ app, Apple HomeKit, Google Home, and Amazon Alexa — so you can monitor and control your garage door from anywhere.',
      },
      {
        q: 'How do I program or re-program my garage door remote?',
        a: 'Most modern openers have a "Learn" button on the motor unit. Press it, then press the button on your remote within 30 seconds. For step-by-step help specific to your brand, call us at (702) 935-3283 — we are happy to walk you through it.',
      },
      {
        q: 'Why does my garage door opener hum but not move the door?',
        a: 'A humming opener that doesn\'t move usually means the drive gear is stripped, the motor capacitor has failed, or a broken spring is preventing the door from lifting. All are repairable — we stock parts on every truck for same-day service.',
      },
      {
        q: 'My opener\'s light flashes and the door won\'t close — why?',
        a: 'This almost always indicates a safety sensor issue. The sensors (small boxes near the bottom of each door track) must have a clear line-of-sight and the indicator lights must be solid (not blinking). Check for obstructions, wipe the sensor lenses, and ensure they are properly aligned. If the problem persists, call us.',
      },
      {
        q: 'How long do garage door openers typically last?',
        a: 'A quality garage door opener typically lasts 10–15 years with proper maintenance. Signs it may be time to replace: frequent breakdowns, slow response, loud operation, or lack of modern safety features. We can assess your current unit and give an honest recommendation.',
      },
    ],
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    faqs: [
      {
        q: 'How often should I have my garage door serviced?',
        a: 'We recommend a professional tune-up once a year. In Florida\'s humid climate, regular lubrication and hardware inspection is especially important to prevent rust and corrosion. Annual service can extend the life of your door and opener significantly.',
      },
      {
        q: 'What does a garage door tune-up include?',
        a: 'A standard tune-up includes: lubrication of all moving parts (rollers, hinges, springs, tracks), tightening of all hardware, balance test, safety sensor alignment check, opener force and travel limit adjustment, and a full safety inspection.',
      },
      {
        q: 'How do I properly lubricate my garage door?',
        a: 'Use a silicone-based or lithium-based spray lubricant (not WD-40, which attracts dirt). Apply to: rollers (not nylon), hinges, torsion springs, and the top of the rail (not the track itself). Lubricate every 6 months in Florida\'s climate. Call us if you are unsure — we include lubrication with every tune-up.',
      },
      {
        q: 'What is the typical lifespan of a garage door?',
        a: 'A well-maintained steel or aluminum garage door typically lasts 20–30 years. Wood doors may need refinishing or replacement sooner due to Florida\'s humidity. Regular maintenance, prompt repairs, and quality hardware all extend door life.',
      },
    ],
  },
  {
    id: 'commercial',
    label: 'Commercial',
    faqs: [
      {
        q: 'Do you repair commercial and industrial garage doors?',
        a: 'Yes. We service commercial roll-up doors, sectional overhead doors, fire-rated doors, and high-speed doors for warehouses, retail centers, auto shops, self-storage facilities, and more throughout Central Florida.',
      },
      {
        q: 'Do you offer maintenance contracts for commercial properties?',
        a: 'Yes. Our preventive maintenance programs cover regular inspections, lubrication, hardware adjustments, and safety checks. Proactive maintenance reduces emergency breakdowns and extends door life. Contact us for a custom maintenance proposal.',
      },
      {
        q: 'How quickly can you respond to a commercial garage door emergency?',
        a: 'We prioritize commercial calls due to business impact. We target same-day response for commercial emergencies throughout our Central Florida service area, 24/7. Call (702) 935-3283 to reach a live team member immediately.',
      },
    ],
  },
]

const allFaqs = categories.flatMap(c => c.faqs)

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: allFaqs.map(faq => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: typeof faq.a === 'string' ? faq.a : String(faq.a),
    },
  })),
}

const crumbs = [
  { label: 'Home', href: '/' },
  { label: 'FAQ', href: '/faq' },
]

export default function FAQPage() {
  return (
    <>
      <StructuredData schema={faqSchema} />
      <BreadcrumbNav crumbs={crumbs} />

      {/* Header */}
      <section className="bg-brand-navy py-16 px-4" aria-labelledby="faq-page-heading">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-brand-amber text-sm font-semibold uppercase tracking-wide mb-3">
            Garage Door Help Center
          </p>
          <h1 id="faq-page-heading" className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Garage Door FAQ — Central Florida
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
            Every question answered — repair costs, emergency service, installation, openers, maintenance &amp; more.
            Can&apos;t find your answer?{' '}
            <a href={PHONE_TEL} className="text-brand-amber font-bold hover:underline">
              Call {PHONE_DISPLAY}
            </a>
            {' '}— a real person answers 24/7.
          </p>
          {/* Category jump links */}
          <nav aria-label="FAQ categories" className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map(cat => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="bg-white/10 hover:bg-brand-amber hover:text-brand-navy text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                {cat.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* FAQ categories */}
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {categories.map(cat => (
          <section key={cat.id} id={cat.id} aria-labelledby={`cat-${cat.id}-heading`}>
            <h2
              id={`cat-${cat.id}-heading`}
              className="font-display text-2xl font-bold text-brand-slate mb-8 pb-3 border-b-2 border-brand-amber"
            >
              {cat.label}
            </h2>
            <dl className="space-y-4">
              {cat.faqs.map((faq, i) => (
                <div key={i} className="bg-white rounded-xl border border-gray-100 shadow-card p-6">
                  <dt className="font-display text-lg font-bold text-brand-slate mb-3">{faq.q}</dt>
                  <dd className="text-brand-steel leading-relaxed text-sm">{faq.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      {/* Internal links to service and city pages */}
      <section className="py-12 px-4 bg-brand-cream border-t border-gray-100" aria-labelledby="faq-explore-heading">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 id="faq-explore-heading" className="font-display text-xl font-bold text-brand-slate mb-4">
              Explore Our Services
            </h2>
            <ul className="space-y-2" role="list">
              {[
                { href: '/services/emergency-service', label: 'Emergency Garage Door Repair' },
                { href: '/services/garage-door-repair', label: 'Garage Door Repair' },
                { href: '/services/spring-replacement', label: 'Spring Replacement' },
                { href: '/services/opener-services', label: 'Opener Repair & Installation' },
                { href: '/services/new-door-installation', label: 'New Door Installation' },
                { href: '/services/commercial-doors', label: 'Commercial Garage Doors' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="flex items-center gap-2 text-brand-sky text-sm font-semibold hover:underline">
                    <ChevronRight size={13} aria-hidden="true" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-brand-slate mb-4">
              Service Areas
            </h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2" role="list">
              {[
                { href: '/service-areas/lakeland', label: 'Lakeland, FL' },
                { href: '/service-areas/orlando', label: 'Orlando, FL' },
                { href: '/service-areas/kissimmee', label: 'Kissimmee, FL' },
                { href: '/service-areas/winter-haven', label: 'Winter Haven, FL' },
                { href: '/service-areas/clermont', label: 'Clermont, FL' },
                { href: '/service-areas/brandon', label: 'Brandon, FL' },
                { href: '/service-areas/apopka', label: 'Apopka, FL' },
                { href: '/service-areas/sanford', label: 'Sanford, FL' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-brand-sky text-sm font-semibold hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link href="/service-areas" className="inline-flex items-center gap-1 text-brand-sky text-sm font-bold hover:underline">
                All 20 service areas <ChevronRight size={13} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        heading="Still Have Questions?"
        subtext="Call us 24/7 — a real person always answers. Free estimates, no obligation."
      />
    </>
  )
}
