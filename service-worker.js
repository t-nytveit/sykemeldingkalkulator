const CACHE_NAME = 'sykemelding-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './kiwi-logo-e1620058626739-1024x346.png',
  './k_icon.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
