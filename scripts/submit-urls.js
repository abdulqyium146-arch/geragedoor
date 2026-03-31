/**
 * Post-deploy URL submission helper
 * Run after each production deployment: node scripts/submit-urls.js
 *
 * Manual steps this script reminds you to do:
 *   1. Paste the sitemap ping URL in your browser
 *   2. Go to GSC and request indexing for each priority URL
 */

const BASE = 'https://garagedoorsolutionsofcf.com'

const PRIORITY_URLS = [
  `${BASE}/`,
  `${BASE}/services`,
  `${BASE}/contact`,
  `${BASE}/service-areas`,
  `${BASE}/about`,
  // Top city pages
  `${BASE}/service-areas/lakeland`,
  `${BASE}/service-areas/kissimmee`,
  `${BASE}/service-areas/orlando`,
  `${BASE}/service-areas/winter-haven`,
  `${BASE}/service-areas/clermont`,
]

console.log('\n════════════════════════════════════════')
console.log('  POST-DEPLOY SUBMISSION CHECKLIST')
console.log('════════════════════════════════════════\n')

console.log('STEP 1 — Ping Google with updated sitemap:')
console.log(`  Open in browser → https://www.google.com/ping?sitemap=${BASE}/sitemap.xml\n`)

console.log('STEP 2 — Request indexing in Google Search Console:')
console.log('  https://search.google.com/search-console\n')
console.log('  Paste each URL into the URL Inspection tool → click "Request Indexing":')
PRIORITY_URLS.forEach((url, i) => {
  console.log(`  ${String(i + 1).padStart(2, ' ')}. ${url}`)
})

console.log('\nSTEP 3 — Verify sitemap was accepted:')
console.log('  GSC → Sitemaps → confirm no errors on sitemap.xml\n')

console.log('════════════════════════════════════════\n')
