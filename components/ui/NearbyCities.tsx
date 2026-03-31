import Link from 'next/link'
import { ChevronRight, MapPin } from 'lucide-react'

const NEARBY: Record<string, string[]> = {
  'lakeland':       ['winter-haven', 'auburndale', 'plant-city'],
  'winter-haven':   ['lakeland', 'haines-city', 'auburndale'],
  'kissimmee':      ['st-cloud', 'orlando', 'celebration'],
  'orlando':        ['kissimmee', 'apopka', 'sanford'],
  'clermont':       ['orlando', 'apopka', 'davenport'],
  'haines-city':    ['winter-haven', 'davenport', 'poinciana'],
  'auburndale':     ['lakeland', 'winter-haven', 'haines-city'],
  'bartow':         ['lakeland', 'winter-haven', 'haines-city'],
  'plant-city':     ['lakeland', 'brandon', 'auburndale'],
  'brandon':        ['plant-city', 'lakeland', 'orlando'],
  'davenport':      ['haines-city', 'champions-gate', 'poinciana'],
  'poinciana':      ['kissimmee', 'davenport', 'haines-city'],
  'st-cloud':       ['kissimmee', 'celebration', 'orlando'],
  'celebration':    ['kissimmee', 'st-cloud', 'champions-gate'],
  'champions-gate': ['davenport', 'celebration', 'kissimmee'],
  'reunion':        ['kissimmee', 'champions-gate', 'davenport'],
  'deltona':        ['sanford', 'orlando', 'apopka'],
  'sanford':        ['deltona', 'apopka', 'orlando'],
  'apopka':         ['orlando', 'sanford', 'clermont'],
  'ocala':          ['clermont', 'apopka', 'lakeland'],
}

function cityLabel(slug: string): string {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

export function NearbyCities({ currentCity }: { currentCity: string }) {
  const nearby = NEARBY[currentCity] ?? []
  if (!nearby.length) return null

  return (
    <section className="py-12 px-4 bg-brand-cream border-t border-gray-100" aria-labelledby="nearby-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <MapPin size={18} className="text-brand-amber" aria-hidden="true" />
          <h2 id="nearby-heading" className="font-display text-xl font-bold text-brand-slate">
            We Also Serve Nearby Cities
          </h2>
        </div>
        <ul className="flex flex-wrap gap-3" role="list">
          {nearby.map(city => (
            <li key={city}>
              <Link
                href={`/service-areas/${city}`}
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-brand-steel text-sm font-semibold px-4 py-2.5 rounded-lg hover:border-brand-sky hover:text-brand-sky transition-colors"
                aria-label={`Garage door services in ${cityLabel(city)}, FL`}
              >
                Garage Door Services in {cityLabel(city)}, FL
                <ChevronRight size={14} aria-hidden="true" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
