'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a5555db0387de145a67c45447f3670bd",
".git/config": "03b747c843459c3087155e1610ded78b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
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
".git/index": "336cbb83b2fb00991908d3a5b0f2ed31",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f962bb992144f494d2f6d47d589f4b55",
".git/logs/refs/heads/main": "10afc38a171437109b81a995a39e4887",
".git/logs/refs/remotes/origin/main": "6ad6ed261571e69cfc6dd519a55fec53",
".git/objects/00/ebd9c08a622cea76f01bececc3b56dfa5a1a4a": "e61fd33524b9fa5b849a6dc4ad7215ee",
".git/objects/01/70fbaa3ff3e1ac5f032080c98f725679bc0ce9": "2d89928becf790927291010668e96b89",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/02/82b51f363d44b224952e133e9c1b53aa1d4994": "687d16289b0904d848ff5010acdf027d",
".git/objects/04/3e864c0aad5bd0eadb2c84845d7e9d7d5f27ac": "d36e10182b3922a63749b09c1998501b",
".git/objects/07/a5dbdb43b1bde399fe783a79c38dd4d38517f6": "3ecc50c2974de87452999ced447d4ebc",
".git/objects/11/ab3d71f1caa9a50229363af99c1f2580b99027": "dc130387c356c781e1b7770d844c0ab7",
".git/objects/13/60f2726783a73c04a06668f104c9239779197e": "23ae844c3a2d629c62f7e9f9b0d7db10",
".git/objects/1b/f8242d751cc80923d159064e82d716a3c7075c": "56ff2cbe34d451f88ad1ed7754a03b08",
".git/objects/1f/722cd5bedb87c8f33a36648e037b29fd3b608c": "7454e46eb434f999adf546972d2cad95",
".git/objects/25/e7db48425d8d774d6e209f88e3d804b18f3f37": "7bc0d360863a2c5ec326385fa7d2bc07",
".git/objects/2a/fc443962ca31c26136de7a324752889aa0bd10": "24b4eb6d72cb8e67748e9b9a6d53b4de",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/f2b7a425a2ef75d11f70bbb203315a03987133": "7ff6cef2f49b8fd313df117b82066c7b",
".git/objects/33/2cfede5b29bccc4e60cd8e81002c6f7983d184": "46d0126e7bbf11e28bf145fcc69c65ea",
".git/objects/34/a380ce792635c73c261ecf21d518203d7fb374": "b0a7895e11f4aa3885e7245197211c2b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/03440589f6257335ef3db250945310b819ec95": "c099f1e5724db3f960d294c44af5928d",
".git/objects/3b/3b58d67f46ecba87934a90835b394717720bd8": "b1b84e49ade457492dc8c065a9189412",
".git/objects/43/ee8cd7d6a54b6ad3ef306645355e47601b0ab5": "b928ecff696225e1884f070eb3f2d9d3",
".git/objects/48/6ffc804810de8481d284ffcbcd32df5a567a69": "ca697d712b81331cc0795cd4af4069e6",
".git/objects/48/710b2ca748f4ade2efe8d26c9a73bb9f507e1b": "f02d16fad459a23fec92d0778ff759cf",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/02c40011476a9233008330ac22e7082499376c": "94e85b2dd2e804e8e271d6adb2dac151",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/fdc515a19d1d3edcb77dba3525352b99fd5c8c": "f49e374118b6b7d7948b4777e7c064d5",
".git/objects/58/e7f96ca689c3c2c5299382633317759903757c": "bad1b9af968da991161fe6624f4f719f",
".git/objects/60/2e3da5a02fd81cc939ad01ad6dd708ff064752": "c4d3b6908060fb3b1bcb76174c061279",
".git/objects/65/349e1df3bf8dffdefb9f271e85b6f111d6c7d1": "6a0a682217cca036c17a2db911c55836",
".git/objects/69/cbc936ec35d71ebce6ae5a6f494cc42c38667a": "5685d41b5ccc55a4cbb34e1f2153175c",
".git/objects/6d/9272fa12ca275294e8285ad405634faafc3f6c": "bf9fec0937f666363abb44d2c11b9b2d",
".git/objects/72/b97d5fe13fccd56c9d7bc31c00fcf624647a9b": "11a289fdbfc6958ecfa1ef7764a9566a",
".git/objects/75/1f974155f68607a66c5f954c7b42effc596785": "a789878af9b7dcc4360b9985a450f6b3",
".git/objects/75/2b3f484b3e625b89c05b34215647f48559adc6": "ad17e248a985e5bc0e81f7c3f407a169",
".git/objects/7d/8a9401cada54a2a3a3a65b79cc75389edb7f1f": "dfb90e3b2ad6abfad2be37f9cb27150c",
".git/objects/80/e58ec9d3c5fa2b84c9915e6b33130ddd4243c3": "16f1ed22c92b87a6eb29893e54720943",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/83/edef9c0400827b1c9c4d8820dd82ef72d6e191": "80bbf6f16c2623e368cf510a6ae411f1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/90/3f2550051c8261463feab761d087d2e5451bde": "642c0a81e11713dea593f23688616c8f",
".git/objects/90/e2e6c87a1adea5a3c45623bcc0fa237749634a": "19c87756f0d3ab33c40b29bdb87207a6",
".git/objects/93/7b2c1b2ac56968b71830f013c08863da1098ef": "3d7e5a1d4ed68c033188a3ef3ff40e08",
".git/objects/95/edddbf6895a64e6ea9651e4b0a206fadf92655": "ab32b28edfa9ffc2185b074a078df8dd",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/97/ee43c0ee81c6fe2f4e5be13a438d2ad931e1f9": "f80741f090c00967493835a67d3e53d1",
".git/objects/9e/606a31c10bec1ed57a742abaf154b9ee515c15": "319d8742137e88c3739e3736a28f8098",
".git/objects/a3/c8197c50e2686618401928fe5679cd0e6ef8b0": "71ad8754de2d4100cda87e2a128e7524",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a8/a77950857c16b0147a3e5a10dace6ca5bd223c": "9ada3bb30b4b09c37c6dab23d600991d",
".git/objects/ac/82856433294c0309defb0e749ff4d5f415f5cb": "0c02406f2f5ddeceece95a4d7ac4a26d",
".git/objects/b1/240479fee49a38d46842fb7618fe1b3071a0da": "6bb2fe5f249dab90c01f3af02b755098",
".git/objects/b5/31826590681172d5e52d0209fd418039e5c820": "6344731faa364ec744fe0c442a0971d0",
".git/objects/b5/d41c74fe301c0c955059453b67309982ff3d36": "8e9bc20d227dc280cb8447506e216a69",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/5ca752e5e9bb3206dbda30ef01cdc037df6403": "2818a2d655b6401afb71e12411b37696",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/792dd0460540507b6abaac09bcdabe30e92e97": "2a218ec36781df5502dc02445e7824c3",
".git/objects/c2/ecf3520c61274faf389e101c76a61d6434c9c0": "13b850dfeb8ee05706fa53345327e6f7",
".git/objects/c7/25445776755c856e6d663e7caf0d52e63d9593": "2f2ea94ad0ade7a8d46b5894589dc0f7",
".git/objects/cd/687a54f23ee543822968912492e332a18cb427": "543a07cf2220e305b26d1aa43ef264c7",
".git/objects/ce/3efec7fc2aba4e34e100890793236448c8afe0": "af90b465045ee61c47f0cd9d73088a0e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/4be8ae787d40cd370b592021650e4f22af769b": "fa1202c92287edbec86c9fe37da42f82",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/b7b640169464e0bca54d0467852d410bdf00aa": "d25b6535b513fe7e589b504bd759b76d",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/bc649d92f3ac0eeff00e305f283c1187593c4a": "2f04f763a01a35bf47e2b913ab10cd76",
".git/objects/e3/485754dd3599f9bc89d6c4692accfb89002951": "b2d565bcaa826a49006029d2ad29a784",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/67b12e565054cfb3ec9d65ce23e892a4129664": "0ebbc109998e40b88a1fef1f84b42b81",
".git/objects/f0/987f99373f3b1844bd1a64d9557ab51bfc521c": "d7b633638fb538489906cb903e487553",
".git/objects/f5/a3eadc91e5bfcccdc41a8585c4b2318ac4fe9c": "2cd9bc29d814e8421d66563c216dfd86",
".git/objects/fa/de951283dd5ce1873ae565f9b1cbc2802beead": "29369c485902b8710199f8e45ad9216e",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/main": "ae52305eedb8c6ae1d88b327b87a6c34",
".git/refs/remotes/origin/main": "ae52305eedb8c6ae1d88b327b87a6c34",
"assets/AssetManifest.bin": "8a3ef2a9e5a032286ecfd653db50a934",
"assets/AssetManifest.json": "d9b48188e947e17596b8ae07aa7c164c",
"assets/assets/deco_1.jpg": "c288f543ea0865721dcd59a93051e15d",
"assets/assets/deco_2.jpg": "5aec072bb290c292359728b7a1189715",
"assets/assets/deco_3.jpg": "5d60aa17ef42bd4c0463d3fc02f3df9a",
"assets/assets/deco_4.jpg": "5b3f90acfb8189f73abb2ea92d71d072",
"assets/assets/deco_5.jpg": "5928e7c267248f6c4fd719a8891dc044",
"assets/assets/deco_6.jpg": "5039b408a0b4fb272c7f9be9702e9c06",
"assets/assets/deco_7.jpg": "f3159bcecdda1852e5a28ff4e0da9f79",
"assets/assets/deco_8.jpg": "79f362a2f3e81bd7a5be1d277ac48876",
"assets/assets/deco_9.jpg": "dd0fceaaf0088f8ccc2c5e7429450ed4",
"assets/assets/fonts/Limelight-Regular.ttf": "05e2219509d86cc93d6d13001d234c86",
"assets/assets/fonts/Lora.ttf": "ea5cbfa365fc139fc6d7b4ad26287e2e",
"assets/assets/img_1.png": "81540514c1226451bec1f47af6a64e2e",
"assets/assets/img_2.png": "0244704a7795f5fa64de94c647682fc1",
"assets/assets/img_3.png": "10d751fb310d4d7801e1234e086bcc56",
"assets/assets/Insta.png": "77874ff2678c4b852dc2c6f83e03e24d",
"assets/assets/logo.png": "d04b04fbb85ce5b5ca62c78466b40075",
"assets/assets/wpp.png": "8c5bb6f113258b4712284c0de4cdd3b7",
"assets/FontManifest.json": "78495daff486089c0948f18c1f71f338",
"assets/fonts/MaterialIcons-Regular.otf": "fb87b5803905d4008dfb47b7e4261035",
"assets/NOTICES": "eceff85b48624144ef150fe612d48a2b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "e4b93c451aa880d5b985b748baeaadeb",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/icon-192.png": "16bfe9000f1f5d01cd17a44e81fa4ac2",
"icons/icon-512.png": "d84402049e72a37281ba4e165b4f25ac",
"icons/icon-maskable-192.png": "16bfe9000f1f5d01cd17a44e81fa4ac2",
"icons/icon-maskable-512.png": "d84402049e72a37281ba4e165b4f25ac",
"index.html": "749089e0fc6eec10aee060971077f05b",
"/": "749089e0fc6eec10aee060971077f05b",
"main.dart.js": "513e11abc8f2ef56dbf78641bd642739",
"manifest.json": "1124425b0891818e7504f41801fd8cbf",
"version.json": "02fdacf47259ad9027c3f4794acadbde"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
