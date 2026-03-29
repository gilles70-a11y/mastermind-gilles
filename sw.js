const CACHE_NAME = 'mastermind-gilles-v5';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './MasterGilles.png'
];

// Installa il Service Worker e salva i file in cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Risponde con i file della cache quando sei offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
