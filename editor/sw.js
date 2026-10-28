// Offline support for the installed app: on the first visit the page, its
// scripts, styles and fonts are cached; afterwards they are served from the
// cache and refreshed in the background (a new version shows on the next visit).
const CACHE = "joue-editor-v2";

async function precache() {
  const cache = await caches.open(CACHE);
  const page = await fetch("./index.html", { cache: "no-cache" });
  const html = await page.clone().text();
  await cache.put("./index.html", page);
  const assets = [...html.matchAll(/(?:src|href)="(\.\/assets\/[^"]+)"/g)].map((m) => m[1]);
  await cache.addAll(["./", "./manifest.webmanifest", "./icon.svg", "./icon-192.png", ...assets]);
  // fonts are referenced by the style sheet
  for (const css of assets.filter((a) => a.endsWith(".css"))) {
    const text = await (await cache.match(css)).text();
    const fonts = [...text.matchAll(/url\(\.?\/?([^)"']+\.woff2?)\)/g)].map((m) => `./assets/${m[1].replace(/^assets\//, "")}`);
    await cache.addAll(fonts);
  }
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache());
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(req, { ignoreSearch: true });
      const network = fetch(req)
        .then((res) => {
          if (res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => cached);
      return cached ?? network;
    }),
  );
});
