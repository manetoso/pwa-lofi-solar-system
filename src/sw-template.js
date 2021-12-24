importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.loadModule('workbox-background-sync')

workbox.precaching.precacheAndRoute( self.__WB_MANIFEST );

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