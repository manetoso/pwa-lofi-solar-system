importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.loadModule('workbox-background-sync')

workbox.precaching.precacheAndRoute( [{"revision":"8143f0ceb80c6e23d590d74f64e4da14","url":"asset-manifest.json"},{"revision":"c92b85a5b907c70211f4ec25e29a8c4a","url":"favicon.ico"},{"revision":"84dc19cb5eb732f495eeb2be28d723a4","url":"icons/logo.png"},{"revision":"d963d74942b18b34a69a753945ce3a86","url":"index.html"},{"revision":"c7c4069af1688b010a9e94b21cd0ebf0","url":"logo192.png"},{"revision":"3d6276a136e1b3e92f54456a02adf3d2","url":"logo512.png"},{"revision":"e7da65060fd8143fa7d01ab8128d617c","url":"logo64.png"},{"revision":"820c66b02c7ab515ba5f0487e3f89bb4","url":"manifest.json"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"42125ceb670b26f377d1d806237d3088","url":"static/css/main.5166aa36.css"},{"revision":"d575c940545652f59164d3045ea4ac7d","url":"static/js/787.bc7094bb.chunk.js"},{"revision":"c407e3aa7a4c1a4c6500c8a5b4a72d9c","url":"static/js/main.21e62f09.js"},{"revision":"6eee7b6dd42c34e8b055e45971f5f002","url":"static/js/main.21e62f09.js.LICENSE.txt"},{"revision":"2bf75e71d6ce5435b705c5d46fb78606","url":"static/media/background-stars.f6233a6a8d2351c57f2b.svg"},{"revision":"2bf75e71d6ce5435b705c5d46fb78606","url":"ui/background-stars.svg"}] );

const { registerRoute } = workbox.routing
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies
const { BackgroundSyncPlugin } = workbox.backgroundSync

// const cacheFirstNetwork = [
//     'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css',
//     'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css'
// ]

// registerRoute(
//     ({ request, url }) => {
//         // console.log({ request, url })
//         if ( cacheFirstNetwork.includes( url.href ) ) return true

//         return false
//     },
//     new CacheFirst()
// )
// registerRoute(
//     new RegExp('https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css'),
//     new CacheFirst()
// )
// registerRoute(
//     new RegExp('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css'),
//     new CacheFirst()
// )

// const cacheNetworkFirst = [
//     '/api/auth/renew',
//     '/api/events',
// ]

// registerRoute(
//     ({ request, url }) => {
//         // console.log({ request, url })
//         if ( cacheNetworkFirst.includes( url.pathname ) ) return true

//         return false
//     },
//     new NetworkFirst()
// )


registerRoute(
    new RegExp('https://www.google.com/images/cleardot.gif?zx=/'),
    new NetworkFirst()
)
// registerRoute(
//     new RegExp('http://localhost:4000/api/events'),
//     new NetworkFirst()
// )
    
// POSTS OFFLINE
const bgSyncPlugin = new BackgroundSyncPlugin('posts-offline', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours (specified in minutes)
})

registerRoute(
    new RegExp('https://firestore.googleapis.com/google.firestore.v1.Firestore/Listen/channel?database=projects%2Fcrafting-table-77516%2Fdatabases%2F/'),
    new NetworkOnly({
        plugins: [ bgSyncPlugin ]
    }),
    'POST'
)
// registerRoute(
//     new RegExp('http://localhost:4000/api/events/'),
//     new NetworkOnly({
//         plugins: [ bgSyncPlugin ]
//     }),
//     'DELETE'
// )
// registerRoute(
//     new RegExp('http://localhost:4000/api/events/'),
//     new NetworkOnly({
//         plugins: [ bgSyncPlugin ]
//     }),
//     'PUT'
// )