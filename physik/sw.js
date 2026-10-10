// Offline support for "Physik heute".
// Online: always the fresh version from the network (and the cache gets updated).
// Offline: the cached copy. Icons and fonts come straight from the cache.
// Videos are left to the network: phones fetch them in byte ranges, which a simple cache can't answer.
const CACHE = 'physik-heute-v1';
const CORE = [
  './', './index.html', './manifest.webmanifest', './manifest-l.webmanifest',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png', './schach.png',
  './ana3-data.js', './katex/katex.min.css', './katex/katex.min.js', './katex/auto-render.min.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  if (url.pathname.endsWith('.mp4')) return;

  // icons and fonts never change: cache first
  if (/\.(png|woff2)$/.test(url.pathname)) {
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
      if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
      return res;
    })));
    return;
  }

  // everything else: fresh from the network, cached copy when offline
  const key = req.mode === 'navigate' ? './index.html' : req;
  e.respondWith(
    fetch(req)
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(key, copy)); }
        return res;
      })
      .catch(() => caches.match(key))
  );
});
