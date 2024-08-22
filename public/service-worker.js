const cacheName = "v1";

const catchAssets = ["../src/app/character/loading.tsx"];

async function precache() {
  const cache = await caches.open(cacheName);
  return cache.addAll(catchAssets);
}

function isCacheable(request) {
  const url = new URL(request.url);
  return !url.pathname.endsWith(".json");
}

async function cacheFirstWithRefresh(request) {
  const fetchResponsePromise = fetch(request).then(async (networkResponse) => {
    if (networkResponse.ok) {
      const cache = await caches.open("AppCache_1");
      cache.put(request, networkResponse.clone());
    }

    return networkResponse;
  });

  return (await caches.match(request)) || (await fetchResponsePromise);
}

self.addEventListener("fetch", (event) => {
  if (isCacheable(event.request)) {
    event.respondWith(cacheFirstWithRefresh(event.request));
  }
});

// const installEvent = (event) => {
//   self.addEventListener("install", () => {
//     console.log("service worker installed");
//     event.waitUntil(precache());
//   });
// };
// installEvent();

// const activateEvent = () => {
//   self.addEventListener("activate", () => {
//     console.log("service worker activated");
//   });
// };
// activateEvent();
