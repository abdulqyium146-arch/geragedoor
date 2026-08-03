import type { Metadata } from 'next'
import { Shield, Award, Users, Heart } from 'lucide-react'
import { BreadcrumbNav } from '@/components/seo/BreadcrumbNav'
import { CTABanner } from '@/components/ui/CTABanner'
import { StarRating } from '@/components/ui/StarRating'

export const metadata: Metadata = {
  title: 'About Us — Your Central Florida Garage Door Neighbors',
  description:
    'Learn about Garage Door Solutions of Central Florida. 15+ years serving Polk County. Locally owned, licensed & insured. 4.9★ on Google.',
  alternates: { canonical: 'https://garagedoorsolutionscfl.com/about' },
  openGraph: {
    title: 'About Garage Door Solutions of Central Florida',
    description: '15+ years of trusted, local garage door service. Family-owned. Licensed & insured. Always a real person on the phone.',
    url: 'https://garagedoorsolutionscfl.com/about',
  },
}

const TEAM_MEMBERS = [
  { initials: 'MR', name: 'Mike R.', role: 'Founder & Lead Technician' },
  { initials: 'JL', name: 'James L.', role: 'Senior Technician' },
  { initials: 'SA', name: 'Sara A.', role: 'Customer Relations' },
  { initials: 'TP', name: 'Tom P.', role: 'Installation Specialist' },
]

const CREDENTIALS = [
  { icon: <Shield size={20} aria-hidden="true" />, label: 'Licensed & Insured' },
  { icon: <Award size={20} aria-hidden="true" />, label: 'Google Verified' },
  { icon: <Users size={20} aria-hidden="true" />, label: '937+ Happy Customers' },
  { icon: <Heart size={20} aria-hidden="true" />, label: 'Locally Owned & Operated' },
]

export default function AboutPage() {
  return (
    <>
      <BreadcrumbNav crumbs={[
        { label: 'Home', href: '/' },
        { label: 'About', href: '/about' },
      ]} />

      <section className="bg-brand-navy py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Your Central Florida Garage Door Neighbors
          </h1>
          <p className="text-slate-300 text-lg mt-4">
            Locally owned, operated, and proud to serve Polk County and all of Central Florida.
          </p>
        </div>
      </section>

      <main id="main-content" className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        {/* Origin story */}
        <section aria-labelledby="story-heading">
          <h2 id="story-heading" className="font-display text-2xl font-bold text-brand-slate mb-4">
            Polk County Roots, 15 Years Strong
          </h2>
          <div className="prose prose-slate max-w-none text-brand-steel leading-relaxed space-y-4">
            <p>
              Garage Door Solutions of Central Florida was founded right here in Polk County with a simple idea: Central Florida homeowners deserve honest, professional garage door service from people who actually live in their community. Not a national franchise with a call center in another state — a real local team that knows your neighborhood.
            </p>
            <p>
              What started as a one-truck operation has grown into one of the most trusted garage door companies in Central Florida, with a team of certified technicians serving Polk, Orange, Osceola, Lake, and surrounding counties. But the core values have never changed: show up on time, do the job right, and treat every customer the way you would want your own family treated.
            </p>
            <p>
              Over 15 years, we have installed thousands of garage doors, replaced countless springs, and repaired more openers than we can count. And through all of it, the thing we are most proud of is the 4.9-star rating built review by review from satisfied homeowners right here in Central Florida.
            </p>
          </div>
        </section>

        {/* Why different */}
        <section aria-labelledby="difference-heading">
          <h2 id="difference-heading" className="font-display text-2xl font-bold text-brand-slate mb-4">
            Local vs. Franchise — Why It Matters
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-cream rounded-xl p-6 border border-gray-200">
              <h3 className="font-display text-lg font-semibold text-brand-slate mb-3">🏠 Local Company (Us)</h3>
              <ul className="space-y-2 text-brand-steel text-sm">
                <li>✓ You speak with the actual technician</li>
                <li>✓ Pricing set locally — no corporate markups</li>
                <li>✓ We know Central Florida homes and weather</li>
                <li>✓ We are here tomorrow if something needs attention</li>
                <li>✓ Your review matters — we depend on referrals</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <h3 className="font-display text-lg font-semibold text-brand-steel mb-3">🏢 National Franchise</h3>
              <ul className="space-y-2 text-brand-steel text-sm">
                <li>✗ Call centers with scripted responses</li>
                <li>✗ Standardized pricing that may not fit FL costs</li>
                <li>✗ High technician turnover</li>
                <li>✗ Long wait times for callback or rescheduling</li>
                <li>✗ Profit goes out of the community</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Values */}
        <section aria-labelledby="values-heading">
          <h2 id="values-heading" className="font-display text-2xl font-bold text-brand-slate mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Honesty',
                icon: '🤝',
                body: 'We tell you what is wrong and what it will cost — before any work begins. No upselling, no surprise charges.',
              },
              {
                title: 'Quality',
                icon: '⭐',
                body: 'We use quality parts, follow manufacturer specifications, and stand behind every installation and repair.',
              },
              {
                title: 'Community',
                icon: '🏡',
                body: 'We live here. Our kids go to school here. Every job we do is for a neighbor, and we treat it that way.',
              },
            ].map(value => (
              <div key={value.title} className="text-center p-6 rounded-xl bg-brand-cream border border-gray-200">
                <div className="text-4xl mb-3" aria-hidden="true">{value.icon}</div>
                <h3 className="font-display text-xl font-bold text-brand-slate mb-2">{value.title}</h3>
                <p className="text-brand-steel text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section aria-labelledby="team-heading">
          <h2 id="team-heading" className="font-display text-2xl font-bold text-brand-slate mb-8 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map(member => (
              <div key={member.initials} className="text-center">
                <div
                  className="w-20 h-20 rounded-full bg-brand-navy flex items-center justify-center text-brand-amber font-display text-2xl font-bold mx-auto mb-3"
                  aria-label={member.name}
                >
                  {member.initials}
                </div>
                <p className="font-semibold text-brand-slate text-sm">{member.name}</p>
                <p className="text-brand-steel text-xs">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Credentials */}
        <section aria-labelledby="credentials-heading">
          <h2 id="credentials-heading" className="font-display text-2xl font-bold text-brand-slate mb-6 text-center">
            Trust &amp; Credentials
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {CREDENTIALS.map(cred => (
              <div
                key={cred.label}
                className="flex items-center gap-2 px-5 py-3 bg-white rounded-full border border-gray-200 text-brand-slate text-sm font-semibold [box-shadow:var(--shadow-card)]"
              >
                <span className="text-brand-amber">{cred.icon}</span>
                {cred.label}
              </div>
            ))}
          </div>
        </section>

        {/* Review pull quote */}
        <section aria-label="Customer testimonial" className="bg-brand-navy rounded-2xl p-8 md:p-12 text-center">
          <StarRating rating={5} size={24} className="justify-center mb-6" />
          <blockquote className="text-white text-xl leading-relaxed italic mb-6">
            &ldquo;Five stars is not enough. This is a local company that actually cares about their customers. Fast response, great work, and they stood behind their work when I had a minor issue a week later — no questions asked.&rdquo;
          </blockquote>
          <cite className="text-slate-400 not-italic text-sm">
            Michael R. · Haines City, FL · February 2024
          </cite>
        </section>
      </main>

      <CTABanner
        heading="Ready to Work With Your Garage Door Neighbors?"
        subtext="Call us or request a free quote. We always answer."
      />
    </>
  )
}
