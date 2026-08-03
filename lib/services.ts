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
  benefits: string[]
  longDescription: string
  metaTitle?: string
  metaDescription?: string
  faqs?: ServiceFAQ[]
}

export const SERVICES: Service[] = [
  {
    slug: 'new-door-installation',
    title: 'New Door Installation',
    shortTitle: 'New Installations',
    icon: 'Home',
    description: 'Expert installation of residential and commercial garage doors from top brands.',
    benefits: [
      'Wide selection of styles and materials',
      'Professional installation by certified technicians',
      'Same-day and next-day appointments available',
      'Full warranty on parts and labor',
    ],
    longDescription:
      'Upgrade your home with a beautiful new garage door from Garage Door Solutions of Central Florida. We carry an extensive selection of steel, wood, aluminum, and composite doors to match any architectural style. Our certified technicians handle everything from removal of the old door to final adjustment and safety testing. We serve all of Polk, Orange, Osceola, and Lake Counties.',
    metaTitle: 'New Garage Door Installation Central Florida | Free Estimate | (863) 808-3341',
    metaDescription:
      'New garage door installation in Orlando, Lakeland, Kissimmee & all of Central Florida. Steel, wood & composite doors. Same-day appointments available. Free estimate. Call (863) 808-3341.',
    faqs: [
      {
        q: 'How long does a new garage door installation take?',
        a: 'Most residential garage door installations are completed in 3–5 hours. Our technicians handle removal of the old door, installation of the new door, hardware setup, opener wiring, and safety testing — all in a single visit.',
      },
      {
        q: 'Do you offer same-day or next-day garage door installation in Central Florida?',
        a: 'Yes. We offer same-day and next-day installation appointments throughout Polk, Orange, Osceola, and Lake Counties. Call (863) 808-3341 to check current availability.',
      },
      {
        q: 'What brands of garage doors do you install?',
        a: 'We install doors from all major manufacturers including Clopay, Amarr, Wayne Dalton, and Craftsman. We offer steel, wood, aluminum, and composite options to fit any budget and architectural style.',
      },
      {
        q: 'Do you offer free estimates for new garage door installation?',
        a: 'Yes. We provide free, no-obligation estimates for all garage door installations. You approve the price before any work begins — no surprises.',
      },
      {
        q: 'Do you install garage doors near me in Central Florida?',
        a: 'We install garage doors throughout Central Florida including Lakeland, Orlando, Kissimmee, Winter Haven, Haines City, Clermont, Apopka, Sanford, Deltona, and surrounding cities. Call (863) 808-3341 to schedule.',
      },
    ],
  },
  {
    slug: 'garage-door-repair',
    title: 'Garage Door Repair',
    shortTitle: 'Door Repair',
    icon: 'Wrench',
    description: 'Fast, reliable repairs for broken panels, off-track doors, and damaged hardware.',
    benefits: [
      'Same-day service available',
      'All makes and models serviced',
      'Upfront pricing before work begins',
      'Parts stocked on every service truck',
    ],
    longDescription:
      'A broken garage door is more than an inconvenience — it is a security and safety risk. Our technicians diagnose and repair all types of issues: bent or broken panels, doors off their tracks, damaged rollers, broken cables, and faulty hardware. We stock parts on every truck so most repairs are completed in a single visit.',
    metaTitle: 'Garage Door Repair Central Florida | Same-Day Service | (863) 808-3341',
    metaDescription:
      'Fast garage door repair in Orlando, Lakeland, Kissimmee & all of Central Florida. Broken panels, off-track doors, springs, cables & more. Same-day service. Free estimates. Call (863) 808-3341.',
    faqs: [
      {
        q: 'How quickly can you repair my garage door in Central Florida?',
        a: 'We offer same-day garage door repair throughout Central Florida. In most cases we can have a technician at your home within 2–4 hours of your call.',
      },
      {
        q: 'Do you repair all brands and models of garage doors?',
        a: 'Yes. We repair all makes and models of residential and commercial garage doors — regardless of where the door was purchased or who originally installed it.',
      },
      {
        q: 'How much does garage door repair cost in Central Florida?',
        a: 'Repair costs vary depending on the type of problem. We provide upfront, itemized pricing before any work begins so you always know what you will pay. Call (863) 808-3341 for a free estimate.',
      },
      {
        q: 'Can you repair a garage door that is off track?',
        a: 'Yes. An off-track garage door is one of the most common repairs we handle. Do not try to force the door — call us and our technician will safely re-align the door and inspect the tracks, rollers, and cables.',
      },
      {
        q: 'Do you offer garage door repair near me on the same day?',
        a: 'Yes. Same-day garage door repair is available across Central Florida including Orlando, Kissimmee, Lakeland, Haines City, and surrounding areas. Call (863) 808-3341 to get on our schedule today.',
      },
    ],
  },
  {
    slug: 'spring-replacement',
    title: 'Spring Replacement',
    shortTitle: 'Spring Replacement',
    icon: 'Zap',
    description: 'Safe, professional replacement of torsion and extension springs.',
    benefits: [
      'High-cycle springs for longer life',
      'Safety-rated installation techniques',
      'Balanced door adjustment included',
      'Quick turnaround — usually under 1 hour',
    ],
    longDescription:
      'Garage door springs are under extreme tension and should only be replaced by trained professionals. We replace both torsion and extension springs with high-cycle options rated for 20,000+ open/close cycles. Every spring replacement includes a full door balance adjustment to protect your opener and extend the life of all components.',
    metaTitle: 'Garage Door Spring Replacement Central Florida | Fast Service | (863) 808-3341',
    metaDescription:
      'Broken garage door spring? We replace torsion & extension springs across Central Florida. Same-day service, high-cycle springs, balanced door adjustment included. Call (863) 808-3341.',
    faqs: [
      {
        q: 'How do I know if my garage door spring is broken?',
        a: 'Signs of a broken spring include: the door will not open or opens only a few inches, the opener sounds like it is straining, you see a visible gap in the spring coil, or the door feels extremely heavy when lifted manually.',
      },
      {
        q: 'Is it safe to use my garage door with a broken spring?',
        a: 'No. Do not attempt to operate a garage door with a broken spring. The door can fall suddenly and cause serious injury or property damage. Call (863) 808-3341 immediately for emergency spring replacement.',
      },
      {
        q: 'How long does garage door spring replacement take?',
        a: 'Most spring replacements are completed in under 1 hour. Our technicians carry a full inventory of springs on every truck so there is no waiting for parts.',
      },
      {
        q: 'Should I replace both springs at the same time?',
        a: 'Yes. If one spring breaks, the other is likely near the end of its service life. We strongly recommend replacing both at the same time to prevent a second breakdown shortly after the first repair.',
      },
      {
        q: 'Do you offer garage door spring repair near me in Central Florida?',
        a: 'Yes. We replace garage door springs throughout Central Florida — Lakeland, Orlando, Kissimmee, Haines City, and surrounding areas. Same-day appointments are available. Call (863) 808-3341.',
      },
    ],
  },
  {
    slug: 'opener-services',
    title: 'Opener Services',
    shortTitle: 'Opener Services',
    icon: 'Radio',
    description: 'Installation, repair, and programming of all major garage door opener brands.',
    benefits: [
      'All major brands: LiftMaster, Chamberlain, Genie',
      'Smart home integration available',
      'Remote and keypad programming included',
      'Wi-Fi enabled openers available',
    ],
    longDescription:
      'Whether your existing opener is failing or you are ready to upgrade to a smart, Wi-Fi-enabled model, our technicians handle installation, repair, and programming of all major brands. We specialize in LiftMaster, Chamberlain, Genie, and Craftsman units. Every opener install includes remote programming and a full safety sensor test.',
    metaTitle: 'Garage Door Opener Repair & Installation Central Florida | (863) 808-3341',
    metaDescription:
      'Garage door opener not working? We repair & install LiftMaster, Chamberlain, Genie & all brands across Central Florida. Smart home integration available. Free estimates. Call (863) 808-3341.',
    faqs: [
      {
        q: 'What garage door opener brands do you service in Central Florida?',
        a: 'We service and install all major brands including LiftMaster, Chamberlain, Genie, Craftsman, Ryobi, and Sommer. We also program remotes and keypads for virtually any modern opener.',
      },
      {
        q: 'Can you install a smart garage door opener?',
        a: 'Yes. We install Wi-Fi enabled smart openers from LiftMaster and Chamberlain that integrate with your smartphone, Amazon Alexa, and Google Home. Open, close, and monitor your garage from anywhere.',
      },
      {
        q: 'My garage door opener is running but the door will not move — what is wrong?',
        a: 'This is often caused by a broken spring or disconnected trolley — not the opener itself. Call us at (863) 808-3341 for a free diagnosis. We will identify whether the opener or another component needs service.',
      },
      {
        q: 'Do you offer garage door opener repair near me on the same day?',
        a: 'Yes. Same-day garage door opener repair is available throughout Central Florida. Call (863) 808-3341 and we will get a technician to you as fast as possible.',
      },
    ],
  },
  {
    slug: 'emergency-service',
    title: 'Emergency Service',
    shortTitle: 'Emergency Service',
    icon: 'AlertTriangle',
    description: '24/7 emergency garage door service when you need it most.',
    benefits: [
      'Available 24 hours a day, 7 days a week',
      'Fast response — typically within 60 minutes',
      'No hidden emergency surcharges — upfront pricing always',
      'You always speak with a live person, never a machine',
    ],
    longDescription:
      'Garage door emergencies do not wait for business hours. Whether your door will not close, leaving your home unsecured, or a broken spring has trapped your car inside, we respond fast. Call us any time and you will always speak with a live team member — never a machine. We serve all of Central Florida including Polk, Orange, Osceola, Seminole, and Lake Counties.',
    metaTitle: '24/7 Emergency Garage Door Repair Orlando & Central FL | (863) 808-3341',
    metaDescription:
      'Emergency garage door repair 24/7 in Orlando, Kissimmee, Winter Park & all of Central Florida. Live person answers every call. No emergency surcharge. Call now: (863) 808-3341.',
    faqs: [
      {
        q: 'What is the average response time for emergency garage door service?',
        a: 'We typically arrive within 60 minutes of your call throughout Central Florida. Response times may vary slightly by location and demand, but our goal is always to reach you as fast as possible — day or night.',
      },
      {
        q: 'Who should I call for 24-hour garage door repair in Orlando?',
        a: 'Call Garage Door Solutions of Central Florida at (863) 808-3341. A live team member answers 24 hours a day, 7 days a week. You will never reach a voicemail or an automated system when you need us most.',
      },
      {
        q: 'Do you charge extra for emergency or after-hours garage door service?',
        a: 'No. We do not add hidden emergency fees or after-hours surcharges. We give you upfront pricing before any work begins, and you approve the price before we start — regardless of the time of day.',
      },
      {
        q: 'My garage door will not close — should I call right now?',
        a: 'Yes. A garage door that will not close is a security and safety emergency. Call (863) 808-3341 immediately. We treat open-door calls as our highest priority and dispatch a technician as fast as possible.',
      },
      {
        q: 'My garage door is stuck halfway open or closed — what should I do?',
        a: 'Do not try to force the door. A door stuck halfway usually means a broken spring, snapped cable, or obstruction. Forcing it can cause additional damage or injury. Call (863) 808-3341 right away.',
      },
      {
        q: 'Do you offer weekend and after-hours garage door repair near me?',
        a: 'Yes. We provide emergency garage door service seven days a week, including weekends and holidays. Call (863) 808-3341 any time — day or night — and a real person will answer.',
      },
      {
        q: 'What areas do you cover for 24/7 emergency garage door repair?',
        a: 'We cover all of Central Florida including Orlando, Kissimmee, Winter Park, Winter Garden, Lake Nona, Altamonte Springs, Haines City, Lakeland, Deltona, Sanford, and surrounding areas across Orange, Osceola, Polk, Seminole, Lake, and Volusia Counties.',
      },
    ],
  },
  {
    slug: 'commercial-doors',
    title: 'Commercial Doors',
    shortTitle: 'Commercial Doors',
    icon: 'Building2',
    description: 'Commercial-grade installation, repair, and maintenance for businesses across Central Florida.',
    benefits: [
      'Sectional, roll-up, and fire-rated doors',
      'Preventive maintenance programs available',
      'High-traffic, industrial-grade options',
      'Minimal downtime during installation',
    ],
    longDescription:
      'We understand that downtime costs your business money. Our commercial door division serves warehouses, retail locations, auto shops, storage facilities, and more throughout Central Florida. We install and service sectional steel doors, rolling steel doors, and fire-rated doors. Ask about our commercial preventive maintenance programs to reduce unexpected failures.',
    metaTitle: 'Commercial Garage Door Installation & Repair Central Florida | (863) 808-3341',
    metaDescription:
      'Commercial garage door installation, repair & maintenance in Central Florida. Sectional, roll-up & fire-rated doors for warehouses, retail & more. Minimal downtime. Call (863) 808-3341.',
    faqs: [
      {
        q: 'What types of commercial garage doors do you install in Central Florida?',
        a: 'We install sectional steel doors, rolling steel doors, fire-rated doors, and high-traffic industrial-grade doors. We serve warehouses, retail locations, auto shops, storage facilities, and commercial properties throughout Central Florida.',
      },
      {
        q: 'Do you offer commercial garage door maintenance contracts?',
        a: 'Yes. We offer preventive maintenance programs for commercial properties to reduce unexpected downtime and extend the life of your doors. Contact us to discuss a program tailored to your facility.',
      },
      {
        q: 'Can you repair commercial garage doors on an emergency basis?',
        a: 'Yes. A broken commercial door means lost revenue. Call (863) 808-3341 any time and we will dispatch a technician as fast as possible — emergency after-hours service is available.',
      },
      {
        q: 'Do you work on commercial garage doors near me in Central Florida?',
        a: 'Yes. We serve commercial properties across Polk, Orange, Osceola, Hillsborough, Seminole, and Lake Counties. Call (863) 808-3341 to discuss your commercial door needs.',
      },
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug)
}
