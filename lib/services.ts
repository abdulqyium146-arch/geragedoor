export interface Service {
  slug: string
  title: string
  shortTitle: string
  icon: string
  description: string
  longDescription: string
  benefits: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'new-door-installation',
    title: 'New Door Installation',
    shortTitle: 'New Installations',
    icon: 'Home',
    description: 'Expert installation of residential and commercial garage doors from top brands, with same-day and next-day appointments available.',
    longDescription: 'Upgrade your home with a beautiful new garage door from Garage Door Solutions of Central Florida. We carry an extensive selection of steel, wood, aluminum, and composite doors to match any architectural style. Our certified technicians handle everything — from removal of the old door to final adjustment and safety testing. Every installation comes backed by a full parts and labor warranty. We serve homeowners and businesses throughout Polk, Orange, Osceola, and Lake Counties with fast, professional service you can count on.',
    benefits: [
      'Wide selection of styles and materials to match your home',
      'Professional installation by certified technicians',
      'Same-day and next-day appointments available',
      'Full warranty on all parts and labor',
    ],
  },
  {
    slug: 'garage-door-repair',
    title: 'Garage Door Repair',
    shortTitle: 'Door Repair',
    icon: 'Wrench',
    description: 'Fast, reliable repairs for broken panels, off-track doors, damaged hardware, and all other garage door issues.',
    longDescription: 'A broken garage door is more than an inconvenience — it is a security and safety risk for your family. Our technicians diagnose and repair all types of issues: bent or broken panels, doors that have come off their tracks, damaged rollers, broken cables, and faulty hardware. We stock parts on every service truck so most repairs are completed in a single visit, saving you time and hassle. Upfront pricing means you approve the cost before we touch anything.',
    benefits: [
      'Same-day service available across Central Florida',
      'All makes and models serviced',
      'Upfront pricing — you approve before work begins',
      'Parts stocked on every service truck',
    ],
  },
  {
    slug: 'spring-replacement',
    title: 'Spring Replacement',
    shortTitle: 'Spring Replacement',
    icon: 'Zap',
    description: 'Safe, professional replacement of torsion and extension springs by trained technicians — never a DIY job.',
    longDescription: 'Garage door springs are under extreme tension and should only be replaced by trained professionals. Attempting a DIY spring replacement can result in serious injury. We replace both torsion and extension springs with high-cycle options rated for 20,000+ open/close cycles. Every spring replacement includes a full door balance adjustment to protect your opener and extend the life of all components. Quick turnaround — most spring jobs are completed in under an hour.',
    benefits: [
      'High-cycle springs rated for 20,000+ cycles',
      'Safety-rated installation techniques',
      'Door balance adjustment included at no extra charge',
      'Quick turnaround — usually under 1 hour',
    ],
  },
  {
    slug: 'opener-services',
    title: 'Opener Services',
    shortTitle: 'Opener Services',
    icon: 'Radio',
    description: 'Installation, repair, and programming of all major garage door opener brands including LiftMaster and Chamberlain.',
    longDescription: 'Whether your existing opener is failing or you are ready to upgrade to a smart, Wi-Fi-enabled model, our technicians handle installation, repair, and programming of all major brands. We specialize in LiftMaster, Chamberlain, Genie, and Craftsman units. Every opener installation includes remote programming, keypad setup, and a full safety sensor test so you can drive away with confidence. Smart home integration is available for compatible units.',
    benefits: [
      'All major brands: LiftMaster, Chamberlain, Genie, Craftsman',
      'Smart home and Wi-Fi integration available',
      'Remote and keypad programming included',
      'Full safety sensor test on every install',
    ],
  },
  {
    slug: 'emergency-service',
    title: 'Emergency Service',
    shortTitle: 'Emergency Service',
    icon: 'AlertTriangle',
    description: 'Garage door emergencies don\'t wait for business hours — and neither do we. Call any time and a real person will answer.',
    longDescription: 'Garage door emergencies do not wait for business hours. Whether your door will not close — leaving your home unsecured — or a broken spring has trapped your car inside, we respond fast. Call us any time and you will always speak with a live team member, never an automated system. We maintain fast response times across all of Central Florida including Polk, Orange, Osceola, and Lake Counties. No hidden emergency surcharges — the same fair pricing applies.',
    benefits: [
      'Available extended hours, seven days a week',
      'Fast response times across Central Florida',
      'No hidden emergency surcharges',
      'You always speak with a live person',
    ],
  },
  {
    slug: 'commercial-doors',
    title: 'Commercial Doors',
    shortTitle: 'Commercial Doors',
    icon: 'Building2',
    description: 'Commercial-grade installation, repair, and maintenance for warehouses, retail locations, and businesses across Central Florida.',
    longDescription: 'We understand that downtime costs your business money. Our commercial door division serves warehouses, retail locations, auto shops, storage facilities, and more throughout Central Florida. We install and service sectional steel doors, rolling steel doors, and fire-rated doors to meet any commercial requirement. Ask about our preventive maintenance programs that help reduce unexpected failures and keep your operations running smoothly.',
    benefits: [
      'Sectional, roll-up, and fire-rated door options',
      'Preventive maintenance programs available',
      'High-traffic, industrial-grade hardware',
      'Minimal downtime during installation and repair',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug)
}
