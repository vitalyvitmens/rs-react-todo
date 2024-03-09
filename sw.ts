/// <reference lib="webworker" />
/// <reference lib="dom" />

type Asset = string

const staticCacheName: string = 'static-site-todo-v1'
const dynamicCacheName: string = 'dynamic-site-todo-v1'
const ASSETS: Asset[] = ['/', '/index.html', '/src/main.tsx', '/src/App.tsx']

//install event
self.addEventListener('install', async (event: ExtendableEvent) => {
  const cache: Cache = await caches.open(staticCacheName)
  await cache.addAll(ASSETS)
  event.waitUntil(self.skipWaiting())
})

//activate event
self.addEventListener('activate', async (event: ExtendableEvent) => {
  const cachesKeysArr: string[] = await caches.keys()
  await Promise.all(
    cachesKeysArr
      .filter(
        (key: string) => key !== staticCacheName && key !== dynamicCacheName
      )
      .map((key: string) => caches.delete(key))
  )
  event.waitUntil(self.clients.claim())
})

//fetch event
self.addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(cacheFirst(event.request))
})

async function cacheFirst(request: Request): Promise<Response> {
  const cached: Response | undefined = await caches.match(request)
  try {
    return (
      cached ??
      (await fetch(request).then(() => {
        return networkFirst(request)
      }))
    )
  } catch (error) {
    return networkFirst(request)
  }
}

async function networkFirst(request: Request): Promise<Response> {
  const cache: Cache = await caches.open(dynamicCacheName)
  try {
    const response: Response = await fetch(request)
    await cache.put(request, response.clone())
    return response
  } catch (error) {
    const cached: Response | undefined = await cache.match(request)
    return cached! ?? (await caches.match('/offline.html'))
  }
}
