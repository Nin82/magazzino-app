// service-worker.js
const CACHE_NAME = "magazzino-cache-v1";
const urlsToCache = [
  "/magazzino-app/",
  "/magazzino-app/index.html",
  "/magazzino-app/manifest.json",
  "/magazzino-app/icons/icon-192.png",
  "/magazzino-app/icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  console.log("✅ Service Worker installato e cache creata");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

