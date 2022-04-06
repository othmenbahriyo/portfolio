'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "67839e1bba5029447aa47d2e4b280b37",
".git/config": "9a1df216af845e067912cb648c300fa9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e1361c34df049b20b545133c5f08da8e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5956310ece21e1f8fc13698e6923cc59",
".git/logs/refs/heads/master": "5956310ece21e1f8fc13698e6923cc59",
".git/logs/refs/remotes/origin/master": "bb60fc94ad9e02a6bf44199f85fc3276",
".git/objects/0e/5cb6975562a9a88b357b042b107925b314a75f": "0d13bbfd4467c5df50a76a4b154944cf",
".git/objects/36/c898d7d4e160a27d749bee3dd6ada7ed100d15": "e27d382a422c36e99a9db829a06ee7f7",
".git/objects/75/ca5c06b052555e4155386a52bd0a6196cfa767": "f3991bbb048ec6a5fea53d3300bbd95a",
".git/objects/8c/e417f5163c2df35c50f96af105173b3c06d167": "30f9d6d67378fef4460afc5aba7836fc",
".git/objects/96/4d9c4a7fcbc67f1fdbdd0e616d0a69c4b30d33": "ffaf460eda96c4a332a185fa4d8ee4ff",
".git/objects/e8/4f1d238c684a1e8e4eadc12d1cbec8585ae614": "3ec90cac7ade6fddbe729d1357c48b7c",
".git/refs/heads/master": "bce3aa06a5baefa6e6e5df2627578266",
".git/refs/remotes/origin/master": "bce3aa06a5baefa6e6e5df2627578266",
"assets/AssetManifest.json": "e2bae21388a7714de085277238c0f22f",
"assets/assets/1.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/2.png": "2fd26f6122147bcedb625229174656b1",
"assets/assets/3.jpg": "3ae75162a466ece1e67d06e2322adbe8",
"assets/assets/aaa.jpeg": "1de68326d0bedb1f682d8ec66fefa747",
"assets/assets/aero.png": "b6803293145e4fc1f69f7abf5f425aa5",
"assets/assets/andi.jpg": "950342b18317a245fb564343b499c590",
"assets/assets/andi.png": "ff4dd7a55adb88dcf1b06833bbedf2f3",
"assets/assets/andi2.jpg": "22cb5e0ef5e42e2f8d1fce7ba79d8291",
"assets/assets/andi2.png": "65c1bcfd09562b0c80ec2eb9479a489f",
"assets/assets/android.png": "658e9849ac141bfc3046b4e30cac34e1",
"assets/assets/asm.png": "ab3e2e2dea7b75ef7cf0b26af59ce712",
"assets/assets/aviation.png": "9ff08dbb75af99a5fbe7f4cdf90698eb",
"assets/assets/aviationpng.png": "9097182f91f3dfce59d8cfa7be796101",
"assets/assets/az.png": "1deda17ef23f0146101b0e57706b3a0b",
"assets/assets/az1.png": "bc5614b2527fb49e47ee5e4f40cc7263",
"assets/assets/az3.png": "52a4841574d3e602dbd4d127ce2ae806",
"assets/assets/banner.jpg": "24afd59f078d93450789e686d08fb08b",
"assets/assets/book.png": "781de9cc825c1ec6934a4e8874d514a6",
"assets/assets/camp.png": "264e8120c7e93f3bf9e27feef91d6d9f",
"assets/assets/close.png": "e134976a56de4e03f07886ec57b02f05",
"assets/assets/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/enetcom.png": "00a9e61c1ca18ab51b53e0acb857be9b",
"assets/assets/firebasepng.png": "e8c2f7686c8f46511a01384207366ea6",
"assets/assets/flutter%2520(1).png": "3c19844633ad2f6a5de4c1dc280481fd",
"assets/assets/flutter.png": "4b2645829a599f2e0073f093eb5b9f53",
"assets/assets/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/getx.png": "6cb994c621b4d1a9acaa1e82f3984381",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/int.png": "70a810f2e4134db22d4da1dcc9912313",
"assets/assets/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/js.png": "1296a866e32efdce72f186a914eaa80a",
"assets/assets/logistique.png": "315cf1f1c59a5a0e7e16a03c1c890156",
"assets/assets/logo-3andi.png": "83321c2157d3e0c53ed3345aaf884fcc",
"assets/assets/mhms-logo.png": "342aca5f0536d5e220a29e12cafa1126",
"assets/assets/mob.jpg": "e9fa953241bed1746c0a4e3732636e45",
"assets/assets/mob.png": "396d7583e769f42caf8642ba0f67739d",
"assets/assets/mongo.png": "93901fd22c1fe99c18dfbad6b6f21a1e",
"assets/assets/music.png": "ed6f559f21a586a13380f1e31a144e00",
"assets/assets/mysqlpng.png": "64bd4c190d6fc9644e8ad464711ef297",
"assets/assets/nest.png": "429bcad2082bda8936ab191778067390",
"assets/assets/node.png": "38c3a911493bf29320caa2cb901e0ecb",
"assets/assets/open.png": "f887afc5ea92c3d3ef73145fda75eb83",
"assets/assets/oth.jpg": "8e557e4b8094b66c0d98162f64da7846",
"assets/assets/oth.png": "029852c7c2bb7f8183cdf5c8d0eac1fb",
"assets/assets/othb.png": "3543fbcf6efeb7e6b0f24f3d13620842",
"assets/assets/othwiths.png": "de1a22391e4e13c75319947a4ab398b9",
"assets/assets/php.png": "95ff3068316abd1bf21611a462a4a0c4",
"assets/assets/procaisse-logo.png": "c8d3ac07e17892de53fbea2e76fbe742",
"assets/assets/procaissemobility.jpg": "b3eb4e1f84aecc3b208dcef7dfaa1225",
"assets/assets/projects/android.png": "765adf924dae4d5e67bfb640bcd05c48",
"assets/assets/projects/covid.png": "27c600501d335324e8fce4c5d6c22b76",
"assets/assets/projects/covidB.png": "1884ac58a9de5d81e995f1e46e4b7398",
"assets/assets/projects/earbender.png": "64099d76f6c7df0fac39c222293fd473",
"assets/assets/projects/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/projects/hereiam.png": "cbb5a77a5e19e1224080dcaf0e3b5407",
"assets/assets/projects/hereiamB.png": "16ee68a57fbf0eae5c50e1b8376064df",
"assets/assets/projects/java.png": "62be9fb6e1d7166e9cbeeed913096752",
"assets/assets/projects/medkit.png": "915431d4f438d5bc7c642fed8dbfb419",
"assets/assets/projects/medkitB.png": "058d00d54c3ee8a953442d0cf3bfb866",
"assets/assets/projects/messenger.png": "f28ead750653b586737ed63db6f2d53a",
"assets/assets/projects/quran.png": "55e8a0c928bc192f682ca0e61cb61ce3",
"assets/assets/projects/quranB.png": "3cf070457b64cf93d11ad2073bff88e2",
"assets/assets/proresto-logo.png": "532f73fee6a4cc69f0398b4f2cb1df47",
"assets/assets/proresto.png": "3dbba169d7e4c1c108cad8872aa93320",
"assets/assets/prors.png": "989f649e329eb07513e82a6e7a2bb57f",
"assets/assets/Protech.png": "3ef03e18ea085f5f428f24f473f72e36",
"assets/assets/python.png": "d935495ed56b1d60cadc1cb9a3ea6e70",
"assets/assets/reduction1.png": "607c7fe915707a6fcb20fbf2269b64b4",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/sof.PNG": "0849c622b04e33ea899d22eeb8cf9b65",
"assets/assets/sport.png": "4348a9963d3eeff44d1ea62fe97fdaf2",
"assets/assets/sportpng.png": "0dea2fd3120e4b72d29bd2702b9a7b9a",
"assets/assets/spring.png": "9b6b213af1978c86144d5fa4f92e720f",
"assets/assets/sql.png": "a73ee94b3da26c6d08e727d9e7331e73",
"assets/assets/sqls.png": "367020f31a0deeeab9e379b6c4f18865",
"assets/assets/treetronix.png": "b2fc2d82bc2bebee0f80e3fe81a95b89",
"assets/assets/umlpng.png": "93526a7faa6b562b852bef9f201f7fc2",
"assets/assets/vernicolor.png": "ef2a971533dec78dd6ae8f2ed5cc2a78",
"assets/assets/vscode.png": "441ab21e94b5a5645948c3271d44d172",
"assets/assets/waiter-logo.png": "7e0ba4974c370270897fbc60440e138a",
"assets/assets/waiter.png": "153046f161d33753421d670b1b05c51b",
"assets/assets/web.png": "968671063715cb94339f2bd9bbefbaac",
"assets/assets/whs.png": "7a3db3523b318590355c8b8863feb395",
"assets/assets/wided.jpg": "c46f67aa4b791cf6cba5764bc2fea25a",
"assets/assets/zeta.png": "3b5094d10f37ed2788ce31ab774f44a3",
"assets/FontManifest.json": "9bdb557c6b2f6cedd7a1dc0d926f5bd0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "50426e6b8d686ae158bd610da2ccafe0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "7508ab915d3bfc418e50e2c1c53456d2",
"icons/Icon-192.png": "7508ab915d3bfc418e50e2c1c53456d2",
"icons/Icon-512.png": "7508ab915d3bfc418e50e2c1c53456d2",
"index.html": "7b45e9f48bc374187c960817c3a85fbb",
"/": "7b45e9f48bc374187c960817c3a85fbb",
"main.dart.js": "d10f06aba9a787935a052e6219d38833",
"manifest.json": "49784c7ae91d2aad3874685b094eef3c",
"version.json": "a29e8b22a08aa0274b027931eec216c4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
