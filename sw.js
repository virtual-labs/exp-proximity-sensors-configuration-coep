importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"c02c15f61a00b1ec9350bfc90cbc457f","url":"feedback.html"},{"revision":"6f2a1572e78e585f4cd3ae7ae345a5e7","url":"images/figure1.jpg"},{"revision":"3eb8139bf97580ffd965f5bb58785f52","url":"images/figure1.png"},{"revision":"caf4e0d659cd37f9f1d257e051901076","url":"images/figure6.png"},{"revision":"671a98da166b665cee14a6951e6230f5","url":"images/figure7.png"},{"revision":"26371808b401d4773f8aa409a0251df6","url":"index.html"},{"revision":"8f33b6a665d4c4eade02144bf06cc5d2","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"61c0c584ff43296d43b9e3fcbaab27e2","url":"posttest.html"},{"revision":"a5c045d88f87bb4c854c018c2540f5b6","url":"posttest.json"},{"revision":"e7355a068f26edbd953c0135fbca3698","url":"pretest.html"},{"revision":"206f4ec04dd8c7b17fe32d7a7c33dc55","url":"pretest.json"},{"revision":"b143c7090b4f74f05f10c36bc453c5eb","url":"procedure.html"},{"revision":"2bac99fca5d457f6e9dedf9746ab3661","url":"references.html"},{"revision":"f3fe3c25b038f5e9e7e488c35c7bc96f","url":"simulation.html"},{"revision":"a63b248fa49bc3477eff0d4b633c6edf","url":"simulation/css/analysis.css"},{"revision":"5018e07f09b8a72859b9ebfe1721af02","url":"simulation/css/header.css"},{"revision":"633f87b608e1652c9f262d550e21073d","url":"simulation/css/header1.css"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"5272fa1d86c139227e2dd29609c42bda","url":"simulation/css/mainPage.css"},{"revision":"2fb143a8a66bb6588c810168ac8026ac","url":"simulation/css/psensor.css"},{"revision":"9b3b54cdff6f67eb299cadfb92145c8a","url":"simulation/css/style.css"},{"revision":"2051fa6274546302946022984a2757d7","url":"simulation/images/b2.png"},{"revision":"1e2a40117a45fcb1a926a1aa5672d498","url":"simulation/images/btl.png"},{"revision":"2b664b49e83c8ca861d49c6fe3dd3021","url":"simulation/images/bulbOFF.png"},{"revision":"6c73d8adc8a49e4c74d098f2e26ff7dd","url":"simulation/images/bulbON.png"},{"revision":"f0219facc3468e9bf2e24bf6fcd56c3d","url":"simulation/images/caramicPreview.png"},{"revision":"853e30d7eb419924397cf10256c337ed","url":"simulation/images/cloth.png"},{"revision":"7507ef7138ed540b78ae8a310c73ce1a","url":"simulation/images/COEPlogo.png"},{"revision":"72f943daf1226d72caa3574c4b076976","url":"simulation/images/COEPlogo22.png"},{"revision":"172f833cb6400fa8e8365e898e671cc3","url":"simulation/images/Flash.png"},{"revision":"167f19a36bedc1379bc5309ba38f8a7b","url":"simulation/images/glass.png"},{"revision":"d63d65c8272dbd953a6f4f41559488b2","url":"simulation/images/ground.png"},{"revision":"5dbc27766b34fcdf164d6c28d11e58b8","url":"simulation/images/Inductive_psensor.png"},{"revision":"644426e2b2c85185059ac11b732a6057","url":"simulation/images/InductiveProximitySensor.png"},{"revision":"d9afe8815676249bbe27f4eda68dc787","url":"simulation/images/Led_Off_final.png"},{"revision":"39ef2ef00553282e444dfcec60dc1bcd","url":"simulation/images/led_ON_final.png"},{"revision":"0c996b006a52e001642867d3503bb458","url":"simulation/images/led.png"},{"revision":"ca16e45201730969984fed0797bb459f","url":"simulation/images/ledBlink.png"},{"revision":"9b9efb39590aa8712eea65b774082caf","url":"simulation/images/load.png"},{"revision":"8f629dc7a539ea857d65c3bcb1d1ceb9","url":"simulation/images/max.png"},{"revision":"173f0daadeedf69c3065b00b2a8afa81","url":"simulation/images/metal_img.png"},{"revision":"51461428697a3667a05e281d2f0103c4","url":"simulation/images/metal.png"},{"revision":"6afb85c26f01d790a3ed869fab3d171b","url":"simulation/images/min.png"},{"revision":"f8b7aa1455d9c6086f05da5d54fd48c2","url":"simulation/images/NPN_Animation.png"},{"revision":"7b438586d232d65c053296f1a9411f88","url":"simulation/images/onbulb.png"},{"revision":"d76b0bae67e9169d98714e13cc87d6fe","url":"simulation/images/p1.png"},{"revision":"5645d07ecac3663d979d89e951f25342","url":"simulation/images/paper_img.png"},{"revision":"5d93ff27f424e5078a4e3ac411bb20fd","url":"simulation/images/paper.png"},{"revision":"09c8e0c482b455a537a028d7e91eeef8","url":"simulation/images/paper1.png"},{"revision":"b6e239c72809c2a1603a10d4f0cf8442","url":"simulation/images/paperbox.png"},{"revision":"e458782bff6f132bee65a4ad3b39686f","url":"simulation/images/PNP_Animation_final.png"},{"revision":"506cbfe2ad7050c58324f1dadce1c04b","url":"simulation/images/PNP_Animation.png"},{"revision":"74a1df733fec80ccf8d1cb462c1589ba","url":"simulation/images/ProxiAnim.png"},{"revision":"d76b0bae67e9169d98714e13cc87d6fe","url":"simulation/images/proximitySensor.png"},{"revision":"caf4e0d659cd37f9f1d257e051901076","url":"simulation/images/ProxyCircuit.png"},{"revision":"3eb8139bf97580ffd965f5bb58785f52","url":"simulation/images/sensor_created_img.png"},{"revision":"3db4327b75856efe28150ce7a4fa1abd","url":"simulation/images/sensor.png"},{"revision":"1900ab8b5f8d9748db4c42407bf2dfd5","url":"simulation/images/sensor1.png"},{"revision":"34c2635ce0a0a031f2c5b9e45aa4a2d5","url":"simulation/images/status.png"},{"revision":"0b83d9b2c322182c437e582d7883996d","url":"simulation/images/vlablogo.jpg"},{"revision":"415ab963a15537e321915edb2df45f8c","url":"simulation/images/volt.png"},{"revision":"a738626bf38b9d20302d424c7a1fc354","url":"simulation/images/voltage.png"},{"revision":"5e5d2b4f89869a3413f362188a154130","url":"simulation/images/wave1-removebg-preview.png"},{"revision":"5e5d2b4f89869a3413f362188a154130","url":"simulation/images/wave1.png"},{"revision":"7c5ff10a241af62e82ac32aa537eb09f","url":"simulation/images/whiteLED.png"},{"revision":"df78de6cfa538c87d11bff1a03406b5c","url":"simulation/images/wood.png"},{"revision":"e3513176120103b15f9e4757bc0fbe73","url":"simulation/index.html"},{"revision":"cbe21ee49f13dc9256c5e51e3bd11b8a","url":"simulation/js/main.js"},{"revision":"4f252523d4af0b478c810c2547a63e19","url":"simulation/lib/jquery.js"},{"revision":"220afd743d9e9643852e31a135a9f3ae","url":"simulation/lib/jquery.min.js"},{"revision":"074952d02fd65490bb6e8eb97ed36bcf","url":"simulation/lib/raphael.js"},{"revision":"28c964ed8001f7e9930dc7c0a6daf2e1","url":"simulation/lib/raphael.min.js"},{"revision":"9fe128bd9b216f879133ef8376273e0d","url":"simulation/src/analysis.js"},{"revision":"f1862eba6b0622f1acde8f439fee9306","url":"simulation/src/AnalysisTable.js"},{"revision":"f38f90eb500eb734a7f50f41f11a184c","url":"simulation/src/animation.js"},{"revision":"2efed68a2d95f3faacc4b017b1b27ec2","url":"simulation/src/demo12.js"},{"revision":"8b2f40036f9376009019d82e4252a517","url":"simulation/src/mainPage.js"},{"revision":"5b2918a1734d4669db399d6de3f1d4fd","url":"simulation/src/mainPage111.js"},{"revision":"da7ce7fc184e32a03d7cf7325aaa447b","url":"simulation/src/mimic.js"},{"revision":"60cfb1f12d6d674b0e5e7838f1add767","url":"simulation/src/questionJson.js"},{"revision":"a8060eaad168d7767f5a2dd9e0f9760d","url":"simulation/src/questions.js"},{"revision":"b5e268f468bfff1ba188ecda9f33aac2","url":"simulation/src/table.js"},{"revision":"8f191133ac5ec9369a3f2a90a966ef9a","url":"theory.html"},{"revision":"0ba8dc3abf57b119a475fb178e353db5","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );