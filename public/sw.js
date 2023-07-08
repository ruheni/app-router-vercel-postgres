if (!self.define) {
  let e,
    s = {};
  const t = (t, n) => (
    (t = new URL(t + ".js", n).href),
    s[t] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = t), (e.onload = s), document.head.appendChild(e);
        } else (e = t), importScripts(t), s();
      }).then(() => {
        let e = s[t];
        if (!e) throw new Error(`Module ${t} didn’t register its module`);
        return e;
      })
  );
  self.define = (n, i) => {
    const a =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[a]) return;
    let c = {};
    const r = (e) => t(e, a),
      o = { module: { uri: a }, exports: c, require: r };
    s[a] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (i(...e), c));
  };
}
define(["./workbox-80ca14c3"], function (e) {
  "use strict";
  importScripts(),
    self.addEventListener("message", (e) => {
      e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
    }),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "b9a4e731829ff793db600d778e082cd0",
        },
        {
          url: "/_next/static/8CSGNtt_LdU5j05i-_XWM/_buildManifest.js",
          revision: "03037481a5610ce7d5436eb7e4615d9a",
        },
        {
          url: "/_next/static/8CSGNtt_LdU5j05i-_XWM/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/3429a378-55552d5ffb20721e.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/575-4a907b23b7aa7fb3.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/613-e670d47298f070df.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/710-4989f091968d12b8.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/app/(pages)/users/%5Bid%5D/page-02123b6682bd9489.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/app/(pages)/users/login/page-9f04c50d93527e0e.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/app/layout-02bcd1e1565ab4e1.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/app/page-b0d3dd6352b539bc.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/framework-510ec8ffd65e1d01.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/main-app-9900ed4a60c4157a.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/main-ff5616f93358dcce.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/pages/_app-3cf29815402b3c20.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/pages/_error-0bc9686a461a3ab9.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
          revision: "79330112775102f91e1010318bae2bd3",
        },
        {
          url: "/_next/static/chunks/webpack-8580419b142dd1c5.js",
          revision: "8CSGNtt_LdU5j05i-_XWM",
        },
        {
          url: "/_next/static/css/9630c5d277910891.css",
          revision: "9630c5d277910891",
        },
        { url: "/manifest.json", revision: "1737ddf6d9fdada0ec1621870d1c0634" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: t,
              state: n,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
