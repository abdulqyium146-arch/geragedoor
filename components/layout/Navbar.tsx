'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, GalleryHorizontalEnd, AlertTriangle, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { PHONE_TEL, PHONE_DISPLAY } from '@/components/ui/PhoneLink'

const NAV_LINKS = [
  { href: '/',              label: 'Home' },
  { href: '/services',      label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/faq',           label: 'FAQ' },
  { href: '/about',         label: 'About' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [pathname])

  const transparent = isHome && !scrolled

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
          className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between"
          role="navigation"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Garage Door Solutions of Central Florida — Home">
            <div className={cn(
              'w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors duration-300',
              scrolled && isHome ? 'bg-brand-navy' : 'bg-brand-amber'
            )}>
              <GalleryHorizontalEnd
                size={20}
                className={cn(
                  'transition-colors duration-300',
                  scrolled && isHome ? 'text-brand-amber' : 'text-brand-navy'
                )}
                aria-hidden="true"
              />
            </div>
            <div className={cn(
              'leading-none transition-colors duration-300',
              scrolled && isHome ? 'text-brand-navy' : 'text-white'
            )}>
              <span className="font-display font-bold text-base sm:text-lg block">Garage Door Solutions</span>
              <span className="text-brand-amber text-[11px] font-semibold tracking-wide block">of Central Florida</span>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map(link => {
              const active = link.href !== '/#reviews' && (pathname === link.href || (link.href !== '/' && link.href !== '/#reviews' && pathname.startsWith(link.href)))
              const linkColor = transparent || (!scrolled && !isHome) ? 'text-white/90 hover:text-white' : scrolled && isHome ? 'text-brand-slate hover:text-brand-sky' : 'text-white/90 hover:text-white'
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn('text-sm font-semibold transition-colors duration-200 relative pb-1', linkColor, active && 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-amber')}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Desktop right */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={PHONE_TEL}
              className={cn('text-sm font-semibold flex items-center gap-1.5 transition-colors', scrolled && isHome ? 'text-brand-sky hover:text-brand-sky/80' : 'text-white/90 hover:text-white')}
              aria-label="Call (702) 935-3283"
            >
              <Phone size={15} aria-hidden="true" />
              (702) 935-3283
            </a>
            <Link
              href="/contact"
              className="bg-brand-amber text-brand-navy text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-brand-amberHover transition-colors min-h-[44px] flex items-center"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile: phone + hamburger */}
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
              <span className="hidden xs:inline">{PHONE_DISPLAY}</span>
              <span className="xs:hidden">Call</span>
            </a>
            <button
              className={cn('p-2 rounded-lg min-h-[44px] min-w-[44px] flex items-center justify-center', transparent || !isHome ? 'text-white' : scrolled ? 'text-brand-slate' : 'text-white')}
              onClick={() => setOpen(o => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={cn(
          'fixed inset-0 z-30 bg-brand-navy flex flex-col transition-transform duration-300 md:hidden pt-16 overflow-y-auto pb-20',
          open ? 'translate-y-0' : '-translate-y-full'
        )}
        aria-hidden={!open}
      >
        <nav className="flex flex-col flex-1 px-4 py-6" aria-label="Mobile navigation">

          {/* Emergency CTA — captured first for high-intent visitors */}
          <a
            href={PHONE_TEL}
            className="flex items-center gap-3 bg-red-600 text-white font-bold text-base py-4 px-5 rounded-xl w-full min-h-[56px] mb-5"
            aria-label="Emergency garage door repair — call now"
          >
            <AlertTriangle size={20} aria-hidden="true" />
            <div>
              <div className="text-sm font-bold leading-none">Emergency Repair — Call Now</div>
              <div className="text-xs font-semibold opacity-80 mt-0.5">{PHONE_DISPLAY} · 24/7</div>
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

          {/* Nav links */}
          <ul className="flex flex-col gap-1 mb-6" role="list">
            {NAV_LINKS.map(link => {
              const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'flex items-center text-base font-semibold text-white py-3.5 px-4 rounded-lg border-l-4 transition-colors',
                      active ? 'border-brand-amber text-brand-amber bg-white/5' : 'border-transparent hover:border-brand-amber/50 hover:bg-white/5'
                    )}
                    aria-current={active ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Secondary CTA row */}
          <div className="space-y-3 mt-auto">
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

          {/* NAP for crawlability */}
          <address className="not-italic mt-6 pt-5 border-t border-white/10 text-slate-500 text-xs text-center">
            Garage Door Solutions of Central Florida, LLC · Polk County, FL · {PHONE_DISPLAY}
          </address>
        </nav>
      </div>
    </>
  )
}
