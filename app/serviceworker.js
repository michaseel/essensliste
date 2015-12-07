var CACHE_NAME = 'main-cache-essen';
var urlsToCache = [
  '/'
];
var urlsToPrefetch = [
  'https://fb.me/react-with-addons-0.14.3.min.js',
  'https://fb.me/react-dom-0.14.3.min.js',
  'https://cdn.firebase.com/js/client/2.3.2/firebase.js',
  'https://cdn.firebase.com/libs/reactfire/0.5.1/reactfire.min.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        cache.addAll(urlsToPrefetch.map(function(urlToPrefetch) {
          return new Request(urlToPrefetch, { mode: 'no-cors' });
        })).then(function() {
          console.log('All resources have been fetched and cached.');
        });
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }

          return fetch(event.request);
        }
      )
  );
});
