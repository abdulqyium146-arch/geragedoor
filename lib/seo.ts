export const BASE_URL = 'https://garagedoorsolutionsofcf.com'

export function getCanonicalUrl(path: string = ''): string {
  return `${BASE_URL}${path}`
}

export function getCityMetadata(citySlug: string) {
  const cityName = citySlug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return {
    cityName,
    title: `Garage Door Repair & Installation in ${cityName}, FL`,
    description: `Professional garage door repair and installation in ${cityName}, FL. Same-day service available. Call (863) 808-3341.`,
    canonical: `${BASE_URL}/service-areas/${citySlug}`,
  }
}
