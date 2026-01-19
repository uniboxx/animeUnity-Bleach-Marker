// ==UserScript==
// @name         UnityFiller Bleach Marker
// @namespace    https://github.com/IlNubis/IlNubis-Js-scripts
// @version      08-01-2026
// @description  Mark Bleach mixed and filler episode on Animeunity.so
// @author       IlNubis
// @collaborator uniboxx
// @match        https://www.animeunity.so/anime/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animeunity.so
// @updateURL    https://raw.githubusercontent.com/uniboxx/IlNubis-Js-scripts/refs/heads/refactoring/UnityScripts/fillerUnityBleach.user.js
// @downloadURL  https://raw.githubusercontent.com/uniboxx/IlNubis-Js-scripts/refs/heads/refactoring/UnityScripts/fillerUnityBleach.user.js
// @require      https://raw.githubusercontent.com/uniboxx/IlNubis-Js-scripts/refs/heads/refactoring/UnityScripts/episodesData.js
// @require      https://raw.githubusercontent.com/uniboxx/IlNubis-Js-scripts/refs/heads/refactoring/Utils/AssertLib.js
// @run-at       document-end
// @grant        none
// ==/UserScript==

!(function () {
  const bleachPath = '69-bleach';

  const includePath = new Map([[bleachPath, bleachEpisodeData]]);

  const videoTopBarId = 'video-top';
  const videoBottomBarId = 'video-bottom';

  //#111925 #0a3a6e #0062cc
  const episodeBtnClass = 'episode-item';
  // const canonClass = 'episode';

  // mixed backgrounds
  const baseMixedBg = 'lch(30 97 102)';
  const activeMixedBg = 'lch(60 97 102)';
  const seenMixedBg = 'lch(80 97 102)';

  // filler backgrounds
  const baseFillerBg = 'lch(20 97 45)';
  const activeFillerBg = 'lch(50 97 45)';
  const seenFillerBg = 'lch(70 97 45)';

  const mixedClass = 'mixed';
  const fillerClass = 'filler';

  const injectStyle = `
.box-16x9 {
    overflow: visible !important;
}
#${videoBottomBarId} a{
    background: none !important;
}

.${fillerClass} {
    background: ${baseFillerBg} !important;
    --darkreader-inline-bgcolor: ${baseFillerBg}
}

.seen.${fillerClass} {
    background: ${seenFillerBg} !important;
    --darkreader-inline-bgcolor: ${seenFillerBg}
}

.seen.active.${fillerClass} {
    background: ${activeFillerBg} !important;
    --darkreader-inline-bgcolor: ${activeFillerBg}
}

.${mixedClass} {
    background: ${baseMixedBg} !important;
    --darkreader-inline-bgcolor: ${baseMixedBg};
}

.seen.${mixedClass} {
    background: ${seenMixedBg} !important;
    --darkreader-inline-bgcolor: ${seenMixedBg}
}

.seen.active${mixedClass} {
    background: ${activeMixedBg} !important;
    --darkreader-inline-bgcolor: ${activeMixedBg}
}
`;

  const paths = includePath.keys();
  let path = null;

  while (true) {
    path = paths.next();

    if (path.done) {
      path = null;
      break;
    }

    if (location.pathname.includes(path.value)) {
      path = path.value;
      break;
    }
    path = null;
  }

  if (path != null) {
    const timer = setInterval(() => {
      const episodeBtnElements =
        document.getElementsByClassName(episodeBtnClass);
      console.log(episodeBtnElements);
      const episodes_data = includePath.get(path);
      console.log(episodes_data);
      if (episodeBtnElements.length > 0) {
        clearInterval(timer);

        // --- Style ---
        const styleElement = document.createElement('style');
        styleElement.textContent = injectStyle;
        document.head.appendChild(styleElement);
        // -------------

        // --- add classes ----
        for (let i = 0; i < episodeBtnElements.length; i++) {
          const episodeElement = episodeBtnElements[i];
          const episodeNumber = parseInt(episodeElement.textContent.trim());
          episodeElement.classList.add('canon');
        }
      }
    }, 500);
  }
})();
