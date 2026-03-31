import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { StructuredData } from './StructuredData'

export interface Crumb { label: string; href: string }

interface Props { crumbs: Crumb[] }

export function BreadcrumbNav({ crumbs }: Props) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: `https://garagedoorsolutionsofcf.com${c.href}`,
    })),
  }
  return (
    <>
      <StructuredData schema={schema} />
      <nav aria-label="Breadcrumb" className="py-3 px-4 bg-white border-b border-gray-100">
        <ol className="max-w-7xl mx-auto flex items-center flex-wrap gap-1 text-sm text-brand-steel" role="list">
          {crumbs.map((crumb, i) => (
            <li key={crumb.href} className="flex items-center gap-1">
              {i > 0 && <ChevronRight size={14} className="text-gray-300" aria-hidden="true" />}
              {i === crumbs.length - 1
                ? <span className="text-brand-slate font-medium" aria-current="page">{crumb.label}</span>
                : <Link href={crumb.href} className="hover:text-brand-sky transition-colors">{crumb.label}</Link>
              }
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
