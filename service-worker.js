const CACHE_NAME = 'my-cache-v1';
const urlsToCache = ['/', '/index.html', '/css/style.css', '/js/script.js', '/img/onerror.jpg'];

// self.addEventListener('install', (event) => {
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log('Caching app shell');
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      const promises = urlsToCache.map((url) => {
        return cache.add(url).catch((err) => {
          console.error(`Failed to cache ${url}:`, err);
        });
      });
      return Promise.all(promises);
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Если кэшированный ответ найден, вернуть его
      if (response) {
        return response;
      }
      // В противном случае выполнить сетевой запрос
      return fetch(event.request);
    })
  );
});
