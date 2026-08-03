import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { StructuredData } from './StructuredData'

export interface Crumb {
  label: string
  href: string
}

interface Props {
  crumbs: Crumb[]
}

export function BreadcrumbNav({ crumbs }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `https://garagedoorsolutionscfl.com${crumb.href}`,
    })),
  }

  return (
    <>
      <StructuredData schema={schema} />
      <nav aria-label="Breadcrumb" className="py-3 px-4">
        <ol className="max-w-7xl mx-auto flex items-center flex-wrap gap-1 text-sm text-brand-steel" role="list">
          {crumbs.map((crumb, index) => (
            <li key={crumb.href} className="flex items-center gap-1">
              {index > 0 && <ChevronRight size={14} className="text-gray-300" aria-hidden="true" />}
              {index === crumbs.length - 1 ? (
                <span className="text-brand-slate font-medium" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:text-brand-sky transition-colors">
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
