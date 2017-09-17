importScripts('workbox-sw.prod.v2.0.1.js');
importScripts('workbox-google-analytics.prod.v2.0.0.js');
workbox.googleAnalytics.initialize();

const workboxSW = new self.WorkboxSW({clientsClaim: true})
workboxSW.precache([])
