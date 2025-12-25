const CACHE_NAME = 'fandom-wallet-v1';
const urlsToCache = ['./', './index.html'];

self.addEventListener('install', event => {
  self.skipWaiting(); // 強制讓新的 Service Worker 立刻生效
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
