self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("game-cache").then(cache => cache.addAll([
      "index.html",
      "game.js",
      "manifest.json",
      "icon-192.png",
      "icon-512.png"
    ]))
  );
});
self.addEventListener("fetch", e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});