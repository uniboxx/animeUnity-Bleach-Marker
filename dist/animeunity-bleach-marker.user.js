// ==UserScript==
// @name         Bleach Marker
// @namespace    https://github.com/uniboxx/animeUnity-Bleach-Marker
// @version      1.0.0
// @author       uniboxx
// @description  Mark mixed and filler episodes
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animeunity.so
// @homepage     https://github.com/uniboxx/animeUnity-Bleach-Marker
// @match        https://www.animeunity.so/anime/*
// @downloadURL  https://github.com/uniboxx/animeUnity-Bleach-Marker/raw/main/dist/animeunity-bleach-marker.user.js
// ==/UserScript==

(function () {
  'use strict';

  const styleCss = '#video-top{background:#fff!important}';
  var a;
  const d = (b) => ((a = document.createElement('style')), a.append(b), a);
  d(styleCss);
  console.log('Bleach Marker');
})();
