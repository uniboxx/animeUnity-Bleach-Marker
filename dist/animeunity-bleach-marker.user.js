// ==UserScript==
// @name         animeUnity Bleach Marker
// @namespace    https://github.com/uniboxx/animeUnity-Bleach-Marker
// @version      1.0.0
// @author       uniboxx
// @description  Mark mixed and filler episodes
// @license      MIT
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animeunity.so
// @homepage     https://github.com/uniboxx/animeUnity-Bleach-Marker
// @downloadURL  https://github.com/uniboxx/animeUnity-Bleach-Marker/raw/main/dist/animeunity-bleach-marker.user.js
// @match        https://www.animeunity.so/anime/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  'use strict';

  const d=new Set;const importCSS = async e=>{d.has(e)||(d.add(e),(t=>{typeof GM_addStyle=="function"?GM_addStyle(t):(document.head||document.documentElement).appendChild(document.createElement("style")).append(t);})(e));};

  const styleCss = '.box-16x9{overflow:visible!important}#video-bottom a{background:none!important}#video-top{display:flex;justify-content:space-between;align-items:center}#video-top .episode-type{text-transform:uppercase}#video-top .episode-type:before,#video-top .episode-type:after{position:relative;top:.125em;content:" ***** "}.mixed{background:#404a00!important;background:lch(30 97 102)!important;--darkreader-inline-bgcolor: lch(30 97 102)}.seen.mixed{background:#c2cf00!important;background:lch(80 97 102)!important;--darkreader-inline-bgcolor: lch(80 97 102)}.seen.active.mixed{background:#889800!important;background:lch(60 97 102)!important;--darkreader-inline-bgcolor: lch(60 97 102)}.filler{background:#463100!important;background:lch(20 97 45)!important;--darkreader-inline-bgcolor: lch(20 97 45)}.seen.filler{background:#ff8c6b!important;background:lch(70 97 45)!important;--darkreader-inline-bgcolor: lch(70 97 45)}.seen.active.filler{background:#df2e00!important;background:lch(50 97 45)!important;--darkreader-inline-bgcolor: lch(50 97 45)}';
  importCSS(styleCss);
  const canonEpisodes = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    28,
    29,
    30,
    31,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    47,
    48,
    49,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    110,
    112,
    113,
    114,
    115,
    117,
    118,
    121,
    122,
    123,
    125,
    126,
    127,
    138,
    139,
    140,
    142,
    144,
    145,
    150,
    151,
    152,
    153,
    154,
    155,
    157,
    158,
    159,
    162,
    163,
    164,
    165,
    166,
    167,
    191,
    192,
    194,
    195,
    196,
    197,
    198,
    199,
    200,
    201,
    202,
    203,
    208,
    210,
    211,
    212,
    215,
    216,
    217,
    218,
    219,
    220,
    221,
    224,
    225,
    226,
    227,
    269,
    270,
    271,
    272,
    273,
    275,
    277,
    278,
    279,
    280,
    281,
    282,
    283,
    286,
    289,
    292,
    293,
    294,
    297,
    300,
    301,
    302,
    306,
    307,
    308,
    309,
    344,
    346,
    348,
    349,
    350,
    352,
    353,
    354,
    356,
    358,
    359,
    360,
    361,
    362,
    363,
    364,
    365,
    366
  ];
  const mixedEpisodes = [
    8,
    27,
    32,
    46,
    109,
    111,
    116,
    119,
    120,
    124,
    141,
    143,
    146,
    156,
    160,
    161,
    190,
    193,
    206,
    207,
    209,
    222,
    223,
    267,
    268,
    274,
    276,
    284,
    285,
    288,
    290,
    291,
    295,
    296,
    310,
    342,
    343,
    345,
    347,
    351,
    357
  ];
  const fillerEpisodes = [
    33,
    50,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
    104,
    105,
    106,
    107,
    108,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    147,
    148,
    149,
    168,
    169,
    170,
    171,
    172,
    173,
    174,
    175,
    176,
    177,
    178,
    179,
    180,
    181,
    182,
    183,
    184,
    185,
    186,
    187,
    188,
    189,
    204,
    205,
    213,
    214,
    228,
    229,
    230,
    231,
    232,
    233,
    234,
    235,
    236,
    237,
    238,
    239,
    240,
    241,
    242,
    243,
    244,
    245,
    246,
    247,
    248,
    249,
    250,
    251,
    252,
    253,
    254,
    255,
    256,
    257,
    258,
    259,
    260,
    261,
    262,
    263,
    264,
    265,
    266,
    287,
    298,
    299,
    303,
    304,
    305,
    311,
    312,
    313,
    314,
    315,
    316,
    317,
    318,
    319,
    320,
    321,
    322,
    323,
    324,
    325,
    326,
    327,
    328,
    329,
    330,
    331,
    332,
    333,
    334,
    335,
    336,
    337,
    338,
    339,
    340,
    341,
    355
  ];
  const types = ["canon", "mixed", "filler"];
  const [canonIdx, mixedIdx, fillerIdx] = [0, 1, 2];
  const totalEpisodesLength = canonEpisodes.length + mixedEpisodes.length + fillerEpisodes.length;
  const bleachEpisodeData = new Map();
  for (let i = 1; i <= totalEpisodesLength; i++) {
    if (canonEpisodes.includes(i)) {
      bleachEpisodeData.set(i, canonIdx);
    } else if (mixedEpisodes.includes(i)) {
      bleachEpisodeData.set(i, mixedIdx);
    } else if (fillerEpisodes.includes(i)) {
      bleachEpisodeData.set(i, fillerIdx);
    }
  }
  class UserScriptUtils {
    constructor() {
    }
    async waitUntil(testCondition, timeoutMs = 3e4, checkIntervalMs = 1e3) {
      const start_ts = ( new Date()).getTime();
      let elapsed_time = 0;
      while (!testCondition()) {
        elapsed_time = +(( new Date()).getTime() - start_ts);
        if (!!timeoutMs && !isNaN(timeoutMs) && timeoutMs > 0 && elapsed_time >= timeoutMs) {
          throw new Error(
            `Timeout of ${timeoutMs} ms exceeded (${elapsed_time} ms elapsed)`
          );
        }
        await this.sleep(checkIntervalMs);
      }
      return {
        msg: `The specified condition was met before the ${timeoutMs} ms timeout`,
        time: elapsed_time,
        given_timeout: timeoutMs
      };
    }
    async waitForElementPresent(cssSelector, type = "single", timeoutMs = 3e4) {
      if (!cssSelector.trim()) throw new Error("Please specify a css selector");
      try {
        const result = await this.waitUntil(() => {
          if (type === "multi") {
            return !!document.querySelector(cssSelector)?.parentElement?.lastChild;
          } else {
            return !!document.querySelector(cssSelector);
          }
        }, timeoutMs);
        return {
          msg: `Element with selector ${cssSelector} is present`,
          time: result.time
        };
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    }
    async waitForElementNotPresent(cssSelector, timeoutMs = 3e4) {
      if (!cssSelector.trim()) throw new Error("Please specify a css selector");
      try {
        const result = await this.waitUntil(
          () => !document.querySelector(cssSelector),
          timeoutMs
        );
        return {
          msg: `Element with selector ${cssSelector} is not present`,
          time: result.time
        };
      } catch (error) {
        if (error instanceof Error) throw new Error(error.message);
      }
    }
    sleep(ms = 0) {
      return new Promise((resolve, reject) => {
        if (!ms || isNaN(ms) || ms < 0) {
          reject(new Error("Timeout must be a positive number"));
        }
        setTimeout(resolve, ms);
      });
    }
    addClass(element, classToAdd, classesToClean = ["canon", "mixed", "filler"]) {
      element.classList.remove(...classesToClean);
      element.classList.add(classToAdd);
    }
  }
  const utils = new UserScriptUtils();
  async function updateVideoTopBarClass() {
    await utils.waitForElementPresent("#video-top");
    const videoTopBarElement = document.getElementById(
      "video-top"
    );
    const title = videoTopBarElement.querySelector(
      "span.title"
    );
    const activeEpisodeNumber = +(title.textContent.match(/\d+/)?.[0] ?? -1);
    const activeEpisodeIdx = bleachEpisodeData.get(activeEpisodeNumber);
    const episodeTypeClass = types[activeEpisodeIdx];
    utils.addClass(videoTopBarElement, episodeTypeClass);
    let typeElement = document.querySelector("#video-top span.episode-type");
    if (!typeElement) {
      typeElement = document.createElement("span");
      typeElement.className = "episode-type";
      title.insertAdjacentElement("afterend", typeElement);
    }
    typeElement.textContent = `[${episodeTypeClass}]`;
  }
  async function updateEpisodesClass() {
    await utils.waitForElementPresent(".episode-item", "multi");
    const episodeBtns = document.querySelectorAll(
      ".episode-item"
    );
    episodeBtns.forEach((btn) => {
      const episodeNumber = +btn.textContent;
      if (!episodeNumber) return;
      const typeIdx = bleachEpisodeData.get(episodeNumber);
      const typeClass = types[typeIdx];
      utils.addClass(btn, typeClass);
    });
  }
  function updateChanges() {
    updateVideoTopBarClass();
    updateEpisodesClass();
  }
  updateChanges();
  const observer = new MutationObserver(updateChanges);
  const elementsToObserve = [
    "#video-top .title",
    ".episode-wrapper .episode-item a"
  ];
  elementsToObserve.forEach(async (selector) => {
    await utils.waitForElementPresent(selector);
    observer.observe(document.querySelector(selector), {
      characterData: true,
      subtree: true
    });
  });

})();