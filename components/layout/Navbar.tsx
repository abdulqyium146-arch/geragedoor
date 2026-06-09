'use client'
import { useState, useEffect, useRef, useCallback } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Menu, X, Phone, GalleryHorizontalEnd, AlertTriangle,
  Star, ChevronDown, MapPin,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { PHONE_TEL, PHONE_DISPLAY } from '@/components/ui/PhoneLink'

// Semantic SEO: anchor text = exact keyword phrases users search
const SERVICE_LINKS = [
  { href: '/services/garage-door-repair',   label: 'Garage Door Repair',          desc: 'Same-day repairs, all brands' },
  { href: '/services/spring-replacement',   label: 'Spring Replacement',           desc: 'Torsion & extension springs' },
  { href: '/services/opener-services',      label: 'Opener Repair & Installation', desc: 'LiftMaster, Chamberlain & more' },
  { href: '/services/new-door-installation',label: 'New Door Installation',         desc: 'Steel, wood & composite doors' },
  { href: '/services/emergency-service',    label: 'Emergency Repair — 24/7',      desc: 'Real person answers every call' },
  { href: '/services/commercial-doors',     label: 'Commercial Garage Doors',      desc: 'Roll-up, sectional & industrial' },
]

const TOP_CITIES = [
  { href: '/service-areas/lakeland',     label: 'Lakeland' },
  { href: '/service-areas/winter-haven', label: 'Winter Haven' },
  { href: '/service-areas/kissimmee',    label: 'Kissimmee' },
  { href: '/service-areas/orlando',      label: 'Orlando' },
  { href: '/service-areas/clermont',     label: 'Clermont' },
  { href: '/service-areas/brandon',      label: 'Brandon' },
  { href: '/service-areas/tampa',        label: 'Tampa' },
  { href: '/service-areas/st-cloud',     label: 'St. Cloud' },
]

type DropdownKey = 'services' | 'areas' | null

export function Navbar() {
  const [scrolled, setScrolled]         = useState(false)
  const [mobileOpen, setMobileOpen]     = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<DropdownKey>(null)
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
    setMobileExpanded(null)
  }, [pathname])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const toggleDropdown = useCallback((key: DropdownKey) => {
    setActiveDropdown(prev => prev === key ? null : key)
  }, [])

  const transparent = isHome && !scrolled

  const textColor = transparent || (!scrolled && !isHome)
    ? 'text-white/90 hover:text-white'
    : scrolled && isHome
    ? 'text-brand-slate hover:text-brand-sky'
    : 'text-white/90 hover:text-white'

  const chevronColor = transparent || (!scrolled && !isHome)
    ? 'text-white/60'
    : scrolled && isHome
    ? 'text-brand-slate/50'
    : 'text-white/60'

  const isServicesActive = pathname.startsWith('/services')
  const isAreasActive    = pathname.startsWith('/service-areas')

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to main content</a>

      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          transparent ? 'bg-transparent' : scrolled && isHome ? 'bg-white shadow-nav' : 'bg-brand-navy shadow-nav'
        )}
        role="banner"
      >
        <nav
          ref={navRef}
          className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Garage Door Solutions of Central Florida — Home">
            <div className={cn(
              'w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300',
              scrolled && isHome ? 'bg-brand-navy' : 'bg-brand-amber'
            )}>
              <GalleryHorizontalEnd
                size={20}
                className={cn('transition-colors duration-300', scrolled && isHome ? 'text-brand-amber' : 'text-brand-navy')}
                aria-hidden="true"
              />
            </div>
            <div className={cn('leading-none transition-colors duration-300', scrolled && isHome ? 'text-brand-navy' : 'text-white')}>
              <span className="font-display font-bold text-base sm:text-lg block">Garage Door Solutions</span>
              <span className="text-brand-amber text-[11px] font-semibold tracking-wide block">of Central Florida</span>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <ul className="hidden md:flex items-center gap-1" role="list">

            {/* Garage Door Repair (Services dropdown) */}
            <li className="relative">
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-lg transition-colors duration-200',
                  textColor,
                  isServicesActive && 'text-brand-amber hover:text-brand-amber',
                  activeDropdown === 'services' && 'bg-white/10'
                )}
                onClick={() => toggleDropdown('services')}
                aria-expanded={activeDropdown === 'services'}
                aria-haspopup="true"
              >
                Garage Door Repair
                <ChevronDown
                  size={14}
                  className={cn('transition-transform duration-200', chevronColor, activeDropdown === 'services' && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>

              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                  <div className="p-2">
                    {SERVICE_LINKS.map(s => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className={cn(
                          'flex flex-col px-4 py-3 rounded-lg hover:bg-brand-cream transition-colors group',
                          pathname === s.href && 'bg-brand-cream'
                        )}
                        aria-current={pathname === s.href ? 'page' : undefined}
                      >
                        <span className={cn(
                          'text-sm font-semibold text-brand-navy group-hover:text-brand-sky transition-colors',
                          s.href === '/services/emergency-service' && 'text-red-600 group-hover:text-red-700'
                        )}>
                          {s.label}
                        </span>
                        <span className="text-xs text-slate-500 mt-0.5">{s.desc}</span>
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <Link
                        href="/services"
                        className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold text-brand-sky hover:bg-brand-cream transition-colors"
                      >
                        All Garage Door Services
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* Service Areas dropdown */}
            <li className="relative">
              <button
                className={cn(
                  'flex items-center gap-1 text-sm font-semibold px-3 py-2 rounded-lg transition-colors duration-200',
                  textColor,
                  isAreasActive && 'text-brand-amber hover:text-brand-amber',
                  activeDropdown === 'areas' && 'bg-white/10'
                )}
                onClick={() => toggleDropdown('areas')}
                aria-expanded={activeDropdown === 'areas'}
                aria-haspopup="true"
              >
                Service Areas
                <ChevronDown
                  size={14}
                  className={cn('transition-transform duration-200', chevronColor, activeDropdown === 'areas' && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>

              {activeDropdown === 'areas' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 overflow-hidden z-50">
                  <div className="p-2">
                    <p className="px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-wider">Central Florida</p>
                    <div className="grid grid-cols-2 gap-0.5">
                      {TOP_CITIES.map(city => (
                        <Link
                          key={city.href}
                          href={city.href}
                          className={cn(
                            'flex items-center gap-1.5 px-3 py-2.5 rounded-lg text-sm font-medium text-brand-navy hover:bg-brand-cream hover:text-brand-sky transition-colors',
                            pathname === city.href && 'bg-brand-cream text-brand-sky'
                          )}
                          aria-current={pathname === city.href ? 'page' : undefined}
                        >
                          <MapPin size={10} className="text-brand-amber shrink-0" aria-hidden="true" />
                          {city.label}
                        </Link>
                      ))}
                    </div>
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <Link
                        href="/service-areas"
                        className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs font-semibold text-brand-sky hover:bg-brand-cream transition-colors"
                      >
                        View All 20 Areas
                        <span aria-hidden="true">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* FAQ — topical authority signal */}
            <li>
              <Link
                href="/faq"
                className={cn(
                  'text-sm font-semibold px-3 py-2 rounded-lg transition-colors duration-200 block',
                  textColor,
                  pathname === '/faq' && 'text-brand-amber hover:text-brand-amber'
                )}
                aria-current={pathname === '/faq' ? 'page' : undefined}
              >
                FAQ
              </Link>
            </li>

            {/* About */}
            <li>
              <Link
                href="/about"
                className={cn(
                  'text-sm font-semibold px-3 py-2 rounded-lg transition-colors duration-200 block',
                  textColor,
                  pathname === '/about' && 'text-brand-amber hover:text-brand-amber'
                )}
                aria-current={pathname === '/about' ? 'page' : undefined}
              >
                About
              </Link>
            </li>
          </ul>

          {/* Desktop right: phone + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={PHONE_TEL}
              className={cn('text-sm font-semibold flex items-center gap-1.5 transition-colors', scrolled && isHome ? 'text-brand-sky hover:text-brand-sky/80' : 'text-white/90 hover:text-white')}
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone size={15} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="bg-brand-amber text-brand-navy text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-brand-amberHover transition-colors min-h-[44px] flex items-center"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile: phone chip + hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={PHONE_TEL}
              className={cn(
                'flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors min-h-[44px]',
                transparent || (!scrolled && !isHome)
                  ? 'bg-brand-amber/20 text-white hover:bg-brand-amber/30'
                  : scrolled && isHome
                  ? 'bg-brand-sky/10 text-brand-sky hover:bg-brand-sky/20'
                  : 'bg-brand-amber/20 text-white hover:bg-brand-amber/30'
              )}
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone size={13} aria-hidden="true" />
              <span>{PHONE_DISPLAY}</span>
            </a>
            <button
              className={cn('p-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center', transparent || !isHome ? 'text-white' : scrolled ? 'text-brand-slate' : 'text-white')}
              onClick={() => setMobileOpen(o => !o)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-nav"
        className={cn(
          'fixed inset-0 z-30 bg-brand-navy flex flex-col transition-transform duration-300 md:hidden pt-16 overflow-y-auto pb-24',
          mobileOpen ? 'translate-y-0' : '-translate-y-full'
        )}
        aria-hidden={!mobileOpen}
      >
        <nav className="flex flex-col flex-1 px-4 py-6" aria-label="Mobile navigation">

          {/* Emergency CTA — intent-first for high-value visitors */}
          <a
            href={PHONE_TEL}
            className="flex items-center gap-3 bg-red-600 text-white font-bold text-base py-4 px-5 rounded-xl w-full min-h-[56px] mb-4"
            aria-label="Emergency garage door repair — call now"
          >
            <AlertTriangle size={20} aria-hidden="true" />
            <div>
              <div className="text-sm font-bold leading-none">Emergency Repair — Call Now</div>
              <div className="text-xs font-semibold opacity-80 mt-0.5">{PHONE_DISPLAY} · Available 24/7</div>
            </div>
          </a>

          {/* Trust bar */}
          <div className="flex items-center justify-around bg-white/5 rounded-xl px-4 py-3 mb-5 text-center">
            <div>
              <div className="flex justify-center gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(n => <Star key={n} size={10} className="text-brand-amber" fill="currentColor" aria-hidden="true" />)}
              </div>
              <p className="text-white text-xs font-semibold">4.9★ Rating</p>
            </div>
            <div className="w-px h-8 bg-white/10" aria-hidden="true" />
            <div>
              <p className="text-brand-amber text-xs font-bold">24/7</p>
              <p className="text-white text-xs font-semibold">Always Open</p>
            </div>
            <div className="w-px h-8 bg-white/10" aria-hidden="true" />
            <div>
              <p className="text-brand-amber text-xs font-bold">15+</p>
              <p className="text-white text-xs font-semibold">Years Exp.</p>
            </div>
            <div className="w-px h-8 bg-white/10" aria-hidden="true" />
            <div>
              <p className="text-brand-amber text-xs font-bold">Licensed</p>
              <p className="text-white text-xs font-semibold">&amp; Insured</p>
            </div>
          </div>

          {/* ── Services accordion — semantic keyword links ── */}
          <div className="mb-2">
            <button
              className="flex items-center justify-between w-full text-base font-semibold text-white py-3.5 px-4 rounded-lg border-l-4 border-transparent hover:border-brand-amber/50 hover:bg-white/5 transition-colors"
              onClick={() => setMobileExpanded(prev => prev === 'services' ? null : 'services')}
              aria-expanded={mobileExpanded === 'services'}
            >
              <span className={cn(isServicesActive && 'text-brand-amber')}>Garage Door Repair</span>
              <ChevronDown
                size={18}
                className={cn('text-white/50 transition-transform duration-200', mobileExpanded === 'services' && 'rotate-180')}
                aria-hidden="true"
              />
            </button>

            {mobileExpanded === 'services' && (
              <ul className="ml-4 mt-1 space-y-0.5 border-l-2 border-brand-amber/20 pl-3" role="list">
                {SERVICE_LINKS.map(s => (
                  <li key={s.href}>
                    <Link
                      href={s.href}
                      className={cn(
                        'block py-2.5 px-3 rounded-lg text-sm font-medium transition-colors',
                        s.href === '/services/emergency-service'
                          ? 'text-red-400 hover:text-red-300 hover:bg-white/5'
                          : 'text-slate-300 hover:text-white hover:bg-white/5',
                        pathname === s.href && 'text-brand-amber'
                      )}
                      aria-current={pathname === s.href ? 'page' : undefined}
                    >
                      {s.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/services" className="block py-2.5 px-3 rounded-lg text-xs font-semibold text-brand-sky hover:bg-white/5 transition-colors">
                    All Services →
                  </Link>
                </li>
              </ul>
            )}
          </div>

          {/* ── Service Areas accordion ── */}
          <div className="mb-2">
            <button
              className="flex items-center justify-between w-full text-base font-semibold text-white py-3.5 px-4 rounded-lg border-l-4 border-transparent hover:border-brand-amber/50 hover:bg-white/5 transition-colors"
              onClick={() => setMobileExpanded(prev => prev === 'areas' ? null : 'areas')}
              aria-expanded={mobileExpanded === 'areas'}
            >
              <span className={cn(isAreasActive && 'text-brand-amber')}>Service Areas — Central FL</span>
              <ChevronDown
                size={18}
                className={cn('text-white/50 transition-transform duration-200', mobileExpanded === 'areas' && 'rotate-180')}
                aria-hidden="true"
              />
            </button>

            {mobileExpanded === 'areas' && (
              <div className="ml-4 mt-1 border-l-2 border-brand-amber/20 pl-3">
                <div className="grid grid-cols-2 gap-0.5">
                  {TOP_CITIES.map(city => (
                    <Link
                      key={city.href}
                      href={city.href}
                      className={cn(
                        'flex items-center gap-1.5 py-2.5 px-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors',
                        pathname === city.href && 'text-brand-amber'
                      )}
                      aria-current={pathname === city.href ? 'page' : undefined}
                    >
                      <MapPin size={10} className="text-brand-amber shrink-0" aria-hidden="true" />
                      {city.label}
                    </Link>
                  ))}
                </div>
                <Link href="/service-areas" className="block py-2.5 px-3 rounded-lg text-xs font-semibold text-brand-sky hover:bg-white/5 transition-colors mt-1">
                  View All 20 Areas →
                </Link>
              </div>
            )}
          </div>

          {/* Flat links */}
          {[{ href: '/faq', label: 'Garage Door FAQ' }, { href: '/about', label: 'About Us' }].map(link => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'flex items-center text-base font-semibold text-white py-3.5 px-4 rounded-lg border-l-4 transition-colors mb-1',
                  active ? 'border-brand-amber text-brand-amber bg-white/5' : 'border-transparent hover:border-brand-amber/50 hover:bg-white/5'
                )}
                aria-current={active ? 'page' : undefined}
              >
                {link.label}
              </Link>
            )
          })}

          {/* CTA row */}
          <div className="space-y-3 mt-6">
            <a
              href={PHONE_TEL}
              className="flex items-center justify-center gap-3 bg-brand-amber text-brand-navy font-bold text-base py-4 px-6 rounded-xl w-full min-h-[56px]"
              aria-label={`Call ${PHONE_DISPLAY}`}
            >
              <Phone size={18} aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center bg-white/10 text-white font-semibold text-sm py-3.5 px-6 rounded-xl w-full hover:bg-white/20 transition-colors min-h-[48px]"
            >
              Get Free Quote — No Obligation
            </Link>
          </div>

          {/* NAP — crawlable entity signal */}
          <address className="not-italic mt-6 pt-5 border-t border-white/10 text-slate-500 text-xs text-center">
            Garage Door Solutions of Central Florida, LLC · Polk County, FL · {PHONE_DISPLAY}
          </address>
        </nav>
      </div>
    </>
  )
}
