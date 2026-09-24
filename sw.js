// Service Worker ultra-ligero para tools.dakesu.net (Cache First / Stale-While-Revalidate)
const CACHE_NAME = 'dakesu-tools-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/shared/i18n.js',
  '/manifest.json',
  '/icon.svg',
  '/asian-names/',
  '/asian-names/index.html',
  '/reading-speed/',
  '/reading-speed/index.html',
  '/cultivation-realms/',
  '/cultivation-realms/index.html',
  '/daoist-glossary/',
  '/daoist-glossary/index.html',
  '/currency-converter/',
  '/currency-converter/index.html',
  '/sect-generator/',
  '/sect-generator/index.html'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(
      keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then((cached) => {
      const networked = fetch(e.request).then((res) => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then((c) => c.put(e.request, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || networked;
    })
  );
});
