workbox.core.setCacheNameDetails({ prefix: "vue-starter-kit" });

self.addEventListener('message', (event) => {

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }

});

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
