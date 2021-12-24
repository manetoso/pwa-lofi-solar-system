importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.loadModule('workbox-background-sync')

workbox.precaching.precacheAndRoute( [{"revision":"fbd890694bf0cc304a846c749488a542","url":"asset-manifest.json"},{"revision":"c92b85a5b907c70211f4ec25e29a8c4a","url":"favicon.ico"},{"revision":"84dc19cb5eb732f495eeb2be28d723a4","url":"icons/logo.png"},{"revision":"a0dff5a8c195d49dbbf179a051563f92","url":"index.html"},{"revision":"c7c4069af1688b010a9e94b21cd0ebf0","url":"logo192.png"},{"revision":"3d6276a136e1b3e92f54456a02adf3d2","url":"logo512.png"},{"revision":"e7da65060fd8143fa7d01ab8128d617c","url":"logo64.png"},{"revision":"820c66b02c7ab515ba5f0487e3f89bb4","url":"manifest.json"},{"revision":"fa1ded1ed7c11438a9b0385b1e112850","url":"robots.txt"},{"revision":"32be34f678758086dd854fa76d4b3b83","url":"static/css/main.631e909a.css"},{"revision":"d575c940545652f59164d3045ea4ac7d","url":"static/js/787.bc7094bb.chunk.js"},{"revision":"c407e3aa7a4c1a4c6500c8a5b4a72d9c","url":"static/js/main.21e62f09.js"},{"revision":"6eee7b6dd42c34e8b055e45971f5f002","url":"static/js/main.21e62f09.js.LICENSE.txt"},{"revision":"2bf75e71d6ce5435b705c5d46fb78606","url":"ui/background-stars.svg"}] );

const { registerRoute } = workbox.routing
const { CacheFirst, NetworkFirst, NetworkOnly } = workbox.strategies
const { BackgroundSyncPlugin } = workbox.backgroundSync

registerRoute(
    new RegExp('https://www.google.com/images/cleardot.gif?zx=/'),
    new NetworkFirst()
)
    
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