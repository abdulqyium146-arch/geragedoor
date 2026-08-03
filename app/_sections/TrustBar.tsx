import { Star, MessageSquare, Clock, MapPin, Zap } from 'lucide-react'

const ITEMS = [
  { icon: <Star size={18} fill="currentColor" aria-hidden="true" />, text: 'Google 4.9★ Rated' },
  { icon: <MessageSquare size={18} aria-hidden="true" />, text: '937+ Verified Reviews' },
  { icon: <Clock size={18} aria-hidden="true" />, text: '15+ Years Experience' },
  { icon: <MapPin size={18} aria-hidden="true" />, text: 'Polk County Local' },
  { icon: <Zap size={18} aria-hidden="true" />, text: 'Same-Day Service' },
]

export function TrustBar() {
  return (
    <div className="bg-white border-y border-gray-100 py-4" aria-label="Trust indicators">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
          {ITEMS.map((item, i) => (
            <div key={i} className="flex items-center gap-2 shrink-0 text-brand-slate text-sm font-semibold">
              <span className="text-brand-amber">{item.icon}</span>
              {item.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
