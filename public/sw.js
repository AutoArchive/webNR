const CACHE_NAME = 'webnr-shell-v3';
const APP_SHELL = ['/', '/manifest.json', '/favicon.ico'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(
        APP_SHELL.map(url => cache.add(new Request(url, { cache: 'reload' })).catch(error => {
          console.warn(`Unable to precache ${url}:`, error);
        })),
      ))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => Promise.all(
        cacheNames
          .filter(cacheName => cacheName.startsWith('webnr-') && cacheName !== CACHE_NAME)
          .map(cacheName => caches.delete(cacheName)),
      ))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  if (request.method !== 'GET' || url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok && url.pathname === '/' && !url.search) {
            const responseToCache = response.clone();
            void caches.open(CACHE_NAME).then(cache => cache.put('/', responseToCache));
          }
          return response;
        })
        .catch(async () => {
          const cachedShell = await caches.match('/');
          return cachedShell ?? new Response(
            '<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>WebNR offline</title><body><main><h1>WebNR is offline</h1><p>Reconnect once to cache the application shell, then try again.</p></main></body></html>',
            { headers: { 'Content-Type': 'text/html; charset=utf-8' }, status: 503 },
          );
        }),
    );
    return;
  }

  event.respondWith(
    caches.match(request).then(cachedResponse => {
      const networkResponse = fetch(request)
        .then(response => {
          if (response.ok && response.type === 'basic') {
            const responseToCache = response.clone();
            void caches.open(CACHE_NAME).then(cache => cache.put(request, responseToCache));
          }
          return response;
        })
        .catch(() => cachedResponse);

      return cachedResponse ?? networkResponse;
    }),
  );
});
