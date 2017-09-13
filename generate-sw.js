const workboxBuild = require('workbox-build')

workboxBuild.injectManifest({
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{html,ico,css,woff2,jpg,js}",
    "fonts/*_subset.woff",
    "images/*.svg",
    "fonts/academicons.ttf"
  ],
  "swSrc": "src/serviceWorker.js",
  "swDest": "dist/serviceWorker.js",
  "globIgnores": [
    "../workbox-cli-config.js",
    "serviceWorker.js",
    "registerServiceWorker.js"
  ]
}).then(() => {
  console.log('The production service worker has been generated.');
})
