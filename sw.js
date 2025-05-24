// Cache name
const CACHE_NAME = 'tools-cache-v1';

// Files to cache
const urlsToCache = [
  '/',
  '/index.html',
  '/styles/main.css',
  '/favicon.ico',
  '/favicon.png'
];

// Install service worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
