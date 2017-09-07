var CACHE_NAME = 'site-cache-v1'
var urlsToCache = [
  '/',
  '/favicon.ico',
  '/images/CC0.svg',
  '/images/AboutHeadshot.jpg',
  '/images/NavBarHeadshot.jpg',
  '/phenomic.main.js',
  '/about/index.html',
  '/fonts/academicons.ttf',
  '/fonts/fonts.css',
  '/fonts/LinLibertine_RB_subset.woff',
  '/fonts/fontawesome-webfont.woff2?v=4.7.0',
  '/fonts/LinBiolinum_R_subset.woff',
  '/fonts/LinLibertine_R_subset.woff',
  '/fonts/LinLibertine_RI_subset.woff',
  '/fonts/academicons-1.8.0.min.css',
  '/fonts/font-awesome-4.7.0.min.css'
]

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(caches.open(CACHE_NAME).
    then(function(cache) {
      console.log('Opened cache')
      return cache.addAll(urlsToCache)
    })
  )
})

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response
        }
        return fetch(event.request)
      }
    )
  )
})
