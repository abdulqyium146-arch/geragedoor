export interface City {
  slug: string
  name: string
  county: string
  lat: number
  lng: number
  population: number
}

export const CITIES: City[] = [
  { slug: 'lakeland',        name: 'Lakeland',        county: 'Polk',          lat: 28.0395,  lng: -81.9498, population: 115000 },
  { slug: 'winter-haven',    name: 'Winter Haven',    county: 'Polk',          lat: 28.0222,  lng: -81.7329, population: 45000  },
  { slug: 'kissimmee',       name: 'Kissimmee',       county: 'Osceola',       lat: 28.2919,  lng: -81.4076, population: 80000  },
  { slug: 'orlando',         name: 'Orlando',         county: 'Orange',        lat: 28.5383,  lng: -81.3792, population: 307000 },
  { slug: 'clermont',        name: 'Clermont',        county: 'Lake',          lat: 28.5494,  lng: -81.7729, population: 45000  },
  { slug: 'ocala',           name: 'Ocala',           county: 'Marion',        lat: 29.1872,  lng: -82.1401, population: 63000  },
  { slug: 'haines-city',     name: 'Haines City',     county: 'Polk',          lat: 28.1139,  lng: -81.6218, population: 27000  },
  { slug: 'auburndale',      name: 'Auburndale',      county: 'Polk',          lat: 28.0659,  lng: -81.7887, population: 18000  },
  { slug: 'bartow',          name: 'Bartow',          county: 'Polk',          lat: 27.8978,  lng: -81.8432, population: 20000  },
  { slug: 'plant-city',      name: 'Plant City',      county: 'Hillsborough',  lat: 28.0189,  lng: -82.1145, population: 40000  },
  { slug: 'brandon',         name: 'Brandon',         county: 'Hillsborough',  lat: 27.9378,  lng: -82.2859, population: 115000 },
  { slug: 'davenport',       name: 'Davenport',       county: 'Polk',          lat: 28.1611,  lng: -81.6015, population: 8000   },
  { slug: 'poinciana',       name: 'Poinciana',       county: 'Polk',          lat: 28.1278,  lng: -81.4915, population: 65000  },
  { slug: 'st-cloud',        name: 'St. Cloud',       county: 'Osceola',       lat: 28.2489,  lng: -81.2812, population: 55000  },
  { slug: 'celebration',     name: 'Celebration',     county: 'Osceola',       lat: 28.3239,  lng: -81.5478, population: 11000  },
  { slug: 'champions-gate',  name: 'Champions Gate',  county: 'Osceola',       lat: 28.2556,  lng: -81.5901, population: 4000   },
  { slug: 'reunion',         name: 'Reunion',         county: 'Osceola',       lat: 28.2292,  lng: -81.5942, population: 3000   },
  { slug: 'deltona',         name: 'Deltona',         county: 'Volusia',       lat: 28.9005,  lng: -81.2637, population: 92000  },
  { slug: 'sanford',         name: 'Sanford',         county: 'Seminole',      lat: 28.8006,  lng: -81.2731, population: 62000  },
  { slug: 'apopka',          name: 'Apopka',          county: 'Orange',        lat: 28.6753,  lng: -81.5323, population: 54000  },
]

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find(c => c.slug === slug)
}
