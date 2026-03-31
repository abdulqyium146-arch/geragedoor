import type { MetadataRoute } from 'next'
import { CITIES } from '@/lib/cities'

const BASE_URL = 'https://garagedoorsolutionsofcf.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const cityPages: MetadataRoute.Sitemap = CITIES.map(city => ({
    url: `${BASE_URL}/service-areas/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: BASE_URL,                       lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE_URL}/services`,         lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE_URL}/service-areas`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/contact`,          lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE_URL}/about`,            lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    ...cityPages,
  ]
}
