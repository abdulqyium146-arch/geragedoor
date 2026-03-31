export interface ServiceFAQ {
  q: string
  a: string
}

export interface Service {
  slug: string
  title: string
  shortTitle: string
  icon: string
  description: string
  longDescription: string
  benefits: string[]
  keywords: string[]
  metaTitle: string
  metaDesc: string
  faqs: ServiceFAQ[]
}

export const SERVICES: Service[] = [
  {
    slug: 'new-door-installation',
    title: 'New Door Installation',
    shortTitle: 'New Installations',
    icon: 'Home',
    metaTitle: 'Garage Door Installation Central Florida | (863) 808-3341',
    metaDesc: 'New garage door installation in Central Florida. Steel, wood & composite doors from top brands. Free estimates. Same-day appointments. Call (863) 808-3341.',
    keywords: [
      'garage door installation near me',
      'garage door installation cost',
      'overhead door installation',
      'garage door replacement companies',
      'garage door installation Central Florida',
      'new garage door Lakeland FL',
    ],
    description: 'Expert installation of residential and commercial garage doors from top brands, with same-day and next-day appointments available.',
    longDescription: 'Upgrade your home with a beautiful new garage door from Garage Door Solutions of Central Florida. We carry an extensive selection of steel, wood, aluminum, and composite doors to match any architectural style. Our certified technicians handle everything — from removal of the old door to final adjustment and safety testing. Every installation comes backed by a full parts and labor warranty. We serve homeowners and businesses throughout Polk, Orange, Osceola, and Lake Counties with fast, professional service you can count on.',
    benefits: [
      'Wide selection of styles and materials to match your home',
      'Professional installation by certified technicians',
      'Same-day and next-day appointments available',
      'Full warranty on all parts and labor',
    ],
    faqs: [
      {
        q: 'How much does new garage door installation cost in Central Florida?',
        a: 'New garage door installation in Central Florida typically ranges from $800 to $3,500 depending on door size, material, and style. Single doors start around $800–$1,500 and double doors run $1,200–$3,500. We provide free, no-obligation estimates — call (863) 808-3341.',
      },
      {
        q: 'How long does garage door installation take?',
        a: 'Most standard garage door installations are completed in 3–5 hours. Same-day and next-day appointments are available throughout Central Florida.',
      },
      {
        q: 'What garage door brands do you carry?',
        a: 'We install doors from Clopay, Wayne Dalton, Amarr, and other top-rated manufacturers. We help you choose the right style, insulation, and material for your home and budget.',
      },
      {
        q: 'Do you remove and dispose of my old garage door?',
        a: 'Yes, old door removal and disposal is included with every new installation. We leave your property clean.',
      },
      {
        q: 'What is the best garage door material for Florida homes?',
        a: 'Steel doors are the most popular choice in Florida due to their durability, humidity resistance, and variety of styles. Fiberglass and aluminum are also great options for coastal and humid climates.',
      },
    ],
  },
  {
    slug: 'garage-door-repair',
    title: 'Garage Door Repair',
    shortTitle: 'Door Repair',
    icon: 'Wrench',
    metaTitle: 'Garage Door Repair Central Florida | Same-Day | (863) 808-3341',
    metaDesc: 'Fast garage door repair in Central Florida. Broken springs, off-track doors, cable repair & more. Same-day service available. Call (863) 808-3341 for a free estimate.',
    keywords: [
      'garage door repair near me',
      'garage door repair service',
      'local garage door repair',
      'fix garage door near me',
      'garage door repair cost',
      'overhead garage door repair',
      'garage door off track repair',
      'garage door panel repair',
      'garage door repair Central Florida',
      'garage door technician near me',
    ],
    description: 'Fast, reliable repairs for broken panels, off-track doors, damaged hardware, and all other garage door issues.',
    longDescription: 'A broken garage door is more than an inconvenience — it is a security and safety risk for your family. Our technicians diagnose and repair all types of issues: bent or broken panels, doors that have come off their tracks, damaged rollers, broken cables, and faulty hardware. We stock parts on every service truck so most repairs are completed in a single visit, saving you time and hassle. Upfront pricing means you approve the cost before we touch anything. Serving all of Central Florida including Polk, Orange, Osceola, and Lake Counties.',
    benefits: [
      'Same-day service available across Central Florida',
      'All makes and models serviced',
      'Upfront pricing — you approve before work begins',
      'Parts stocked on every service truck',
    ],
    faqs: [
      {
        q: 'How much does garage door repair cost near me?',
        a: 'Garage door repair costs in Central Florida typically range from $75 to $600 depending on the issue. Minor repairs like sensor alignment or cable replacement run $75–$200. Spring replacement runs $150–$350. We provide upfront pricing — call (863) 808-3341 for a free estimate.',
      },
      {
        q: 'Can I repair my garage door myself?',
        a: 'Minor issues like lubricating tracks or realigning sensors can be DIY, but most repairs — especially springs, cables, and off-track doors — require professional tools and training. Attempting these yourself can be dangerous and cause more damage.',
      },
      {
        q: 'How do I know if my garage door needs repair or replacement?',
        a: 'If your door is less than 15 years old and structurally sound, repair is usually the best value. If it has multiple failing parts, is heavily damaged, or lacks modern safety features, replacement may be more cost-effective. We provide honest assessments.',
      },
      {
        q: 'How quickly can you repair my garage door in Central Florida?',
        a: 'We offer same-day service for most repairs throughout Central Florida. Call (863) 808-3341 and a real person will answer and get a technician to you fast — usually within hours.',
      },
      {
        q: 'What are the most common garage door problems?',
        a: 'The most common issues we repair are: broken or worn torsion/extension springs, snapped or frayed cables, bent tracks, misaligned safety sensors, worn rollers, and garage door opener failures.',
      },
    ],
  },
  {
    slug: 'spring-replacement',
    title: 'Spring Replacement',
    shortTitle: 'Spring Replacement',
    icon: 'Zap',
    metaTitle: 'Garage Door Spring Repair Central FL | (863) 808-3341',
    metaDesc: 'Broken garage door spring? Professional torsion & extension spring replacement in Central Florida. Same-day service. Free estimate. Call (863) 808-3341.',
    keywords: [
      'garage spring repair',
      'garage door spring repair near me',
      'garage door spring repair cost',
      'garage door springs near me',
      'garage door torsion spring repair',
      'fix spring on garage door',
      'broken garage door spring',
      'spring replacement Central Florida',
    ],
    description: 'Safe, professional replacement of torsion and extension springs by trained technicians — never a DIY job.',
    longDescription: 'Garage door springs are under extreme tension and should only be replaced by trained professionals. Attempting a DIY spring replacement can result in serious injury. We replace both torsion and extension springs with high-cycle options rated for 20,000+ open/close cycles. Every spring replacement includes a full door balance adjustment to protect your opener and extend the life of all components. Quick turnaround — most spring jobs are completed in under an hour. We serve homeowners across Polk, Orange, Osceola, and Lake Counties.',
    benefits: [
      'High-cycle springs rated for 20,000+ cycles',
      'Safety-rated installation techniques',
      'Door balance adjustment included at no extra charge',
      'Quick turnaround — usually under 1 hour',
    ],
    faqs: [
      {
        q: 'How much does garage door spring replacement cost in Central Florida?',
        a: 'Garage door spring replacement in Central Florida typically costs $150–$350 for a single spring or $200–$500 for both springs (which we recommend replacing together). Price depends on spring type, size, and wire gauge. Call (863) 808-3341 for a free estimate.',
      },
      {
        q: 'How long do garage door springs last?',
        a: 'Standard garage door springs last about 10,000 cycles (7–10 years with average use). Our high-cycle spring upgrades last 20,000+ cycles, roughly doubling the lifespan and saving you money long-term.',
      },
      {
        q: 'Can I replace my garage door spring myself?',
        a: 'We strongly advise against DIY spring replacement. Garage door springs are under hundreds of pounds of tension and can cause severe injury or death if improperly handled. This is a job for trained professionals with the right tools.',
      },
      {
        q: 'How do I know if my garage door spring is broken?',
        a: 'Signs of a broken spring include: the door feels extremely heavy, the opener strains or fails to lift, the door only opens a few inches, or you hear a loud bang from the garage (springs often snap suddenly). If in doubt, call us.',
      },
      {
        q: 'Should I replace both springs at the same time?',
        a: 'Yes. If one spring breaks, the other is likely near the end of its life as well. Replacing both at the same time saves on labor costs and prevents a second service call in the near future.',
      },
    ],
  },
  {
    slug: 'opener-services',
    title: 'Opener Services',
    shortTitle: 'Opener Services',
    icon: 'Radio',
    metaTitle: 'Garage Door Opener Repair & Install Central FL | (863) 808-3341',
    metaDesc: 'LiftMaster, Chamberlain & Genie garage door opener repair & installation in Central Florida. Same-day service. Free estimate. Call (863) 808-3341.',
    keywords: [
      'garage door opener repair',
      'garage door opener installation',
      'garage opener repair',
      'garage opener installation',
      'liftmaster garage door opener repair',
      'chamberlain garage door opener repair',
      'genie garage door repair',
      'garage door opener installation cost',
      'garage door motor repair',
      'garage door opener repair service near me',
      'automatic garage door repair',
    ],
    description: 'Installation, repair, and programming of all major garage door opener brands including LiftMaster and Chamberlain.',
    longDescription: 'Whether your existing opener is failing or you are ready to upgrade to a smart, Wi-Fi-enabled model, our technicians handle installation, repair, and programming of all major brands. We specialize in LiftMaster, Chamberlain, Genie, and Craftsman units. Every opener installation includes remote programming, keypad setup, and a full safety sensor test so you can drive away with confidence. Smart home integration is available for compatible units. Serving all of Central Florida.',
    benefits: [
      'All major brands: LiftMaster, Chamberlain, Genie, Craftsman',
      'Smart home and Wi-Fi integration available',
      'Remote and keypad programming included',
      'Full safety sensor test on every install',
    ],
    faqs: [
      {
        q: 'How much does garage door opener installation cost in Central Florida?',
        a: 'Garage door opener installation in Central Florida typically costs $200–$600 including the unit and labor. Belt drive openers cost more than chain drive but are quieter. Smart Wi-Fi openers run $250–$600 installed. Call (863) 808-3341 for a free estimate.',
      },
      {
        q: 'How long does garage door opener installation take?',
        a: 'Most garage door opener installations take 1–2 hours. Same-day and next-day appointments are available throughout Central Florida.',
      },
      {
        q: 'What is the best garage door opener brand?',
        a: 'LiftMaster is widely considered the most reliable brand and is what most professionals install. Chamberlain (same parent company) and Genie are also excellent choices. We help you pick the right model for your needs and budget.',
      },
      {
        q: 'My garage door opener hums but does not move — what is wrong?',
        a: 'A humming opener that does not move usually means the drive gear is stripped or the motor capacitor has failed. Both are repairable in most cases. Call us for a diagnosis — we stock parts on every truck for same-day repair.',
      },
      {
        q: 'Can I get a smart garage door opener that works with my phone?',
        a: 'Yes! We install and configure Wi-Fi connected openers from LiftMaster and Chamberlain that work with the myQ app, Apple HomeKit, Google Home, and Amazon Alexa for full smart home integration.',
      },
    ],
  },
  {
    slug: 'emergency-service',
    title: 'Emergency Service',
    shortTitle: 'Emergency Service',
    icon: 'AlertTriangle',
    metaTitle: 'Emergency Garage Door Repair Central FL | (863) 808-3341',
    metaDesc: 'Emergency garage door repair near me — Central Florida\'s fastest response. Door won\'t close? Spring snapped? We respond fast. Call (863) 808-3341 now.',
    keywords: [
      'emergency garage door repair near me',
      'same day garage door repair',
      'emergency garage door repair',
      'urgent garage door repairs',
      'garage door emergency repair near me',
      'garage door repair same day',
      'emergency overhead door repair',
      'weekend garage door repair',
    ],
    description: "Garage door emergencies don't wait for business hours — and neither do we. Call any time and a real person will answer.",
    longDescription: 'Garage door emergencies do not wait for business hours. Whether your door will not close — leaving your home unsecured — or a broken spring has trapped your car inside, we respond fast. Call us any time and you will always speak with a live team member, never an automated system. We maintain fast response times across all of Central Florida including Polk, Orange, Osceola, and Lake Counties. No hidden emergency surcharges — the same fair pricing applies.',
    benefits: [
      'Extended hours including Saturdays — real people answer',
      'Fast response times across Central Florida',
      'No hidden emergency surcharges',
      'Fully stocked trucks for immediate on-site repair',
    ],
    faqs: [
      {
        q: 'Do you offer emergency garage door repair near me in Central Florida?',
        a: 'Yes. We provide emergency garage door repair throughout Central Florida including Lakeland, Kissimmee, Orlando, Winter Haven, and surrounding areas. Call (863) 808-3341 — a real person will answer and dispatch a technician.',
      },
      {
        q: 'How fast can you respond to a garage door emergency?',
        a: 'Response times vary by location, but we aim to arrive within 1–3 hours for most emergency calls in Central Florida. We always give you an honest ETA when you call.',
      },
      {
        q: 'Is emergency garage door repair more expensive?',
        a: 'We charge the same fair prices for emergency calls. There are no hidden emergency surcharges or surprise fees. You always approve the price before any work begins.',
      },
      {
        q: 'What counts as a garage door emergency?',
        a: 'A garage door emergency is any situation that leaves your home unsecured (door stuck open), unsafe (broken spring causing imbalance), or prevents access to your vehicle. Common emergencies include: broken spring, snapped cable, door off track, or opener failure with car trapped inside.',
      },
      {
        q: 'What should I do if my garage door will not close?',
        a: 'If your door is stuck open, do not leave your home unattended. Try the manual release cord (red handle) to disengage the opener and manually close the door temporarily. Then call us at (863) 808-3341 for same-day repair.',
      },
    ],
  },
  {
    slug: 'commercial-doors',
    title: 'Commercial Doors',
    shortTitle: 'Commercial Doors',
    icon: 'Building2',
    metaTitle: 'Commercial Garage Door Repair Central FL | (863) 808-3341',
    metaDesc: 'Commercial garage door repair, installation & maintenance in Central Florida. Sectional, roll-up & fire-rated doors. Fast response. Call (863) 808-3341.',
    keywords: [
      'commercial garage door repair near me',
      'commercial overhead door repair',
      'commercial overhead door repair near me',
      'industrial roller door repairs',
      'roll up door installation',
      'roll up door service near me',
      'overhead door maintenance',
      'commercial garage door installers near me',
      'commercial door systems',
      'shop door repair',
    ],
    description: 'Commercial-grade installation, repair, and maintenance for warehouses, retail locations, and businesses across Central Florida.',
    longDescription: 'We understand that downtime costs your business money. Our commercial door division serves warehouses, retail locations, auto shops, storage facilities, and more throughout Central Florida. We install and service sectional steel doors, rolling steel doors, and fire-rated doors to meet any commercial requirement. Ask about our preventive maintenance programs that help reduce unexpected failures and keep your operations running smoothly.',
    benefits: [
      'Sectional, roll-up, and fire-rated door options',
      'Preventive maintenance programs available',
      'High-traffic, industrial-grade hardware',
      'Minimal downtime during installation and repair',
    ],
    faqs: [
      {
        q: 'Do you repair commercial garage doors in Central Florida?',
        a: 'Yes. We service commercial roll-up doors, sectional overhead doors, fire-rated doors, and high-speed doors for warehouses, retail centers, auto shops, and storage facilities throughout Central Florida.',
      },
      {
        q: 'What types of commercial garage doors do you install?',
        a: 'We install and service sectional steel doors, rolling steel curtain doors, coiling doors, fire-rated doors, and high-speed doors. We work with all major commercial door manufacturers.',
      },
      {
        q: 'How much does commercial garage door installation cost?',
        a: 'Commercial garage door installation varies widely based on door type, size, and installation complexity. Rolling steel doors typically range from $1,500–$5,000+. Sectional commercial doors run $1,000–$4,000. Contact us for a free site assessment and quote.',
      },
      {
        q: 'Do you offer commercial garage door maintenance contracts?',
        a: 'Yes. Our preventive maintenance programs cover regular inspections, lubrication, hardware adjustments, and safety checks. Proactive maintenance reduces emergency breakdowns and extends door life significantly.',
      },
      {
        q: 'How quickly can you respond to a commercial garage door emergency in Central Florida?',
        a: 'We prioritize commercial calls due to business impact. We target same-day response for commercial emergencies throughout our Central Florida service area. Call (863) 808-3341 to reach a live team member immediately.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug)
}
