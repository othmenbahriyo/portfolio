'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "2151cbd176b1b94e390071543827739d",
"assets/assets/04_D%25C3%25A9veloppement.pdf": "33aae6d0e1135e207364759cf729585d",
"assets/assets/1.png": "78d49bb1d6ba051d64f67c019f97786a",
"assets/assets/184680341_109519147971708_4908594272173886587_n.jpg": "23452a762836dcc3a337469957c216fc",
"assets/assets/2.png": "2fd26f6122147bcedb625229174656b1",
"assets/assets/297690326_452469776750004_1858389735320000936_n.jpg": "a652daaf5b2e810928e9398993f4c17d",
"assets/assets/3.jpg": "3ae75162a466ece1e67d06e2322adbe8",
"assets/assets/aaa.jpeg": "1de68326d0bedb1f682d8ec66fefa747",
"assets/assets/aandi.png": "1eb98910e156d08e8c1175940236ccb1",
"assets/assets/aero.png": "b6803293145e4fc1f69f7abf5f425aa5",
"assets/assets/andi.jpg": "950342b18317a245fb564343b499c590",
"assets/assets/andi.png": "ff4dd7a55adb88dcf1b06833bbedf2f3",
"assets/assets/andi2.jpg": "22cb5e0ef5e42e2f8d1fce7ba79d8291",
"assets/assets/andi2.png": "65c1bcfd09562b0c80ec2eb9479a489f",
"assets/assets/android.png": "658e9849ac141bfc3046b4e30cac34e1",
"assets/assets/apps/3andi/3.jpg": "d1d2636ee0d246e1bae9dcc08fc12f99",
"assets/assets/apps/dreamoove/1.png": "825af3f138eca0865b5ef8f7b11d5f29",
"assets/assets/apps/dreamoove/2.png": "543dcc45955e53aa785b3b09204e3a9f",
"assets/assets/apps/lab-logistic/1.png": "9b051388a94f2eee0c883ff2a9f95697",
"assets/assets/apps/lab-logistic/2.png": "e3ab9f162b87547ca23346d374e429fb",
"assets/assets/apps/labcrm/1.png": "8407286af181c17924504daf201a94ac",
"assets/assets/apps/labcrm/2.png": "9bb0e396e85a7a8690599fa7a2824ead",
"assets/assets/apps/proResto/3.jpg": "98fba813bdca86c00aa96c5ccf6644f6",
"assets/assets/apps/zetaGym/1.png": "34c5a9c1fa004ff0cd4265c4fba35e47",
"assets/assets/apps/zetaGym/2.png": "a349279ad0959d40e52d196fe75c443f",
"assets/assets/asm.png": "ab3e2e2dea7b75ef7cf0b26af59ce712",
"assets/assets/aviation.png": "9ff08dbb75af99a5fbe7f4cdf90698eb",
"assets/assets/aviationpng.png": "9097182f91f3dfce59d8cfa7be796101",
"assets/assets/az.png": "1deda17ef23f0146101b0e57706b3a0b",
"assets/assets/az1.png": "bc5614b2527fb49e47ee5e4f40cc7263",
"assets/assets/az3.png": "52a4841574d3e602dbd4d127ce2ae806",
"assets/assets/banner.jpg": "24afd59f078d93450789e686d08fb08b",
"assets/assets/block.png": "2a2e650258c6be349b9c116a9d4aa24e",
"assets/assets/book.png": "781de9cc825c1ec6934a4e8874d514a6",
"assets/assets/camp.png": "264e8120c7e93f3bf9e27feef91d6d9f",
"assets/assets/close.png": "e134976a56de4e03f07886ec57b02f05",
"assets/assets/cui.png": "b5608c4d79345ca955f990a24a454554",
"assets/assets/dart.png": "a675cb93b75d5f1656c920dceecdcb38",
"assets/assets/dream.png": "039571b5da761e1a501b9a2052577512",
"assets/assets/dsc.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/enetcom.png": "00a9e61c1ca18ab51b53e0acb857be9b",
"assets/assets/ex.jpg": "138c194e5e37a25c50cd83538504b561",
"assets/assets/firebasepng.png": "e8c2f7686c8f46511a01384207366ea6",
"assets/assets/flutter%2520(1).png": "3c19844633ad2f6a5de4c1dc280481fd",
"assets/assets/flutter.png": "4b2645829a599f2e0073f093eb5b9f53",
"assets/assets/flutterIsl.png": "aaaeddae163a2e71636d9d494e16f2db",
"assets/assets/fonts/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/assets/fonts/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/getx.png": "05026c983e40b6155e87a931858e6d5c",
"assets/assets/gym.png": "b48adbf537c1c1f99a82d1e5c66c5c7d",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/int.png": "70a810f2e4134db22d4da1dcc9912313",
"assets/assets/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/js.png": "1296a866e32efdce72f186a914eaa80a",
"assets/assets/labcrm.png": "8cb74fb880c057ef255fff8f38a2d000",
"assets/assets/logistic.png": "a952145219f281a7b49cca98eca652c3",
"assets/assets/logistique.png": "315cf1f1c59a5a0e7e16a03c1c890156",
"assets/assets/logo-3andi.png": "83321c2157d3e0c53ed3345aaf884fcc",
"assets/assets/mhms-logo.png": "342aca5f0536d5e220a29e12cafa1126",
"assets/assets/mob.jpg": "e9fa953241bed1746c0a4e3732636e45",
"assets/assets/mob.png": "396d7583e769f42caf8642ba0f67739d",
"assets/assets/mongo.png": "93901fd22c1fe99c18dfbad6b6f21a1e",
"assets/assets/mourafik.png": "45a79e011a308a97e2050844d2d431bb",
"assets/assets/music.png": "ed6f559f21a586a13380f1e31a144e00",
"assets/assets/my.jpg": "e5e1777bb62b8b9e71113c78a9d8be7f",
"assets/assets/my.png": "f62c7028a0f761845769e27ff426fb13",
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
"assets/assets/proresto.png": "7fb58314c2ea4ed204b6745bb626eb94",
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
"assets/assets/test.png": "bbcc17b4c786ecd19eaa6f0ada092427",
"assets/assets/treetronix.png": "b2fc2d82bc2bebee0f80e3fe81a95b89",
"assets/assets/umlpng.png": "93526a7faa6b562b852bef9f201f7fc2",
"assets/assets/vernicolor.png": "ef2a971533dec78dd6ae8f2ed5cc2a78",
"assets/assets/vscode.png": "441ab21e94b5a5645948c3271d44d172",
"assets/assets/waiter-logo.png": "7e0ba4974c370270897fbc60440e138a",
"assets/assets/waiter.png": "153046f161d33753421d670b1b05c51b",
"assets/assets/web.png": "968671063715cb94339f2bd9bbefbaac",
"assets/assets/whs.png": "7a3db3523b318590355c8b8863feb395",
"assets/assets/wided.jpg": "c46f67aa4b791cf6cba5764bc2fea25a",
"assets/assets/zeta.png": "5066a9054703cddbcfd553c542692f5f",
"assets/FontManifest.json": "9bdb557c6b2f6cedd7a1dc0d926f5bd0",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5fa2187eafaa5a242fdf9cb9d98eeeaa",
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
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "3241d1d9c15448a4da96df05f3292ffe",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "eaed33dc9678381a55cb5c13edaf241d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "ffed6899ceb84c60a1efa51c809a57e4",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "7508ab915d3bfc418e50e2c1c53456d2",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "7508ab915d3bfc418e50e2c1c53456d2",
"icons/Icon-512.png": "7508ab915d3bfc418e50e2c1c53456d2",
"index.html": "9df3e881f8eb0883a4f356d824752bd2",
"/": "9df3e881f8eb0883a4f356d824752bd2",
"main.dart.js": "f3b4b611a8d085eee4dea7f61936ae62",
"manifest.json": "49784c7ae91d2aad3874685b094eef3c",
"version.json": "a29e8b22a08aa0274b027931eec216c4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
