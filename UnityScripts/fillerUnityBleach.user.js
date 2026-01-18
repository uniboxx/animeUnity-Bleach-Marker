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

  // Neutral Filler background: #251111
  const newNeutralFillerBg = 'maroon';
  // Seen Filler background: #6e0a12
  // Active Filler background: #cc0018

  // Neutral Mixed background: #252311
  const newNeutralMixedBg = 'olive';
  // Seen Mixed background: #6e640a
  // Active Mixed background: #ccc500

  const episodeBtnClass = 'episode-item';

  const episodeNeutral = 'episode';
  const episodeSeen = 'seen';
  const episodeActive = 'active';

  const neutralMixedClass = 'mixed-episode';
  const seenMixedClass = 'seen-mixed';
  const activeMixedClass = 'active-mixed';

  const neutralFillerClass = 'filler-episode';
  const seenFillerClass = 'seen-filler';
  const activeFillerClass = 'active-filler';

  const neutralClasses = [
    episodeNeutral,
    neutralMixedClass,
    neutralFillerClass,
  ];
  const seenClasses = [episodeSeen, seenMixedClass, seenFillerClass];
  const activeClasses = [episodeActive, activeMixedClass, activeFillerClass];

  // check length of classes arrays
  Object.entries({ neutralClasses, seenClasses, activeClasses }).forEach(
    ([key, value]) => {
      AssertLib.assert(value.length === 3, `[${key}]: Unexpected length`);
    },
  );

  const injectStyle = `
.box-16x9 {
    overflow: visible !important;
}
#${videoBottomBarId} a{
    background: none !important;
}

.${neutralFillerClass} {
    background: ${newNeutralFillerBg} !important;
    --darkreader-inline-bgcolor: ${newNeutralFillerBg}
}

.${seenFillerClass} {
    background: #6e0a12 !important;
    --darkreader-inline-bgcolor: #6e0a12
}

.${activeFillerClass} {
    background: #cc0018 !important;
    --darkreader-inline-bgcolor: #cc0018
}

.${neutralMixedClass} {
    background: ${newNeutralMixedBg} !important;
    --darkreader-inline-bgcolor: ${newNeutralMixedBg};
}

.${seenMixedClass} {
    background: #6e640a !important;
    --darkreader-inline-bgcolor: #6e640a
}

.${activeMixedClass} {
    background: #ccc500 !important;
    --darkreader-inline-bgcolor: #ccc500
}
`;

  // OBSERVER FUNCTIONS

  function onTextChange(elem, callback) {
    const observer = new MutationObserver((records) => {
      callback(elem);
    });

    observer.observe(elem, {
      childList: true,
      characterData: true,
      subtree: true,
    });

    return observer;
  }

  function onAttrChange(elem, callback) {
    const observer = new MutationObserver((records) => {
      callback(elem);
    });

    observer.observe(elem, {
      attributes: true,
    });

    return observer;
  }

  function onChangeElems(parent, callback) {
    const observer = new MutationObserver((records) => {
      callback(records);
    });

    //console.log(parent);

    observer.observe(parent, { childList: true });

    return observer;
  }

  // canonId === 0;
  // mixedId === 1;
  // fillerId === 2;

  // check if identifier is valid
  function isValidIdentifier(identifier) {
    return identifier >= canonId && identifier <= fillerId;
  }

  // check if episode is neutral
  function isNeutral(episode_classes) {
    let result = null;
    neutralClasses.forEach((value, idx) => {
      if (episode_classes.contains(value)) {
        result = idx;
      }
    });

    return result;
  }

  function isSeen(episode_classes) {
    let result = null;
    seenClasses.forEach((value, idx) => {
      if (episode_classes.contains(value)) {
        result = idx;
      }
    });

    return result;
  }

  function isActive(episode_classes) {
    let result = null;
    activeClasses.forEach((value, idx) => {
      if (episode_classes.contains(value)) {
        result = idx;
      }
    });

    return result;
  }

  function neutral_to_id(episode_classes, prev_id, befo_id) {
    AssertLib.assert(
      isValidIdentifier(prev_id),
      '(neutral_to_id): Unexpected prev_id value',
    );
    AssertLib.assert(
      isValidIdentifier(befo_id),
      '(neutral_to_id): Unexpected befo_id value',
    );

    if (prev_id == befo_id) {
      return false;
    }

    return episode_classes.replace(
      neutralClasses[prev_id],
      neutralClasses[befo_id],
    );
  }

  function seen_to_id(episode_classes, prev_id, befo_id) {
    AssertLib.assert(
      isValidIdentifier(prev_id),
      '(seen_to_id): Unexpected prev_id value',
    );
    AssertLib.assert(
      isValidIdentifier(befo_id),
      '(seen_to_id): Unexpected befo_id value',
    );

    if (prev_id == befo_id) {
      return false;
    }

    return episode_classes.replace(seenClasses[prev_id], seenClasses[befo_id]);
  }

  function active_to_id(episode_classes, prev_id, befo_id) {
    AssertLib.assert(
      isValidIdentifier(prev_id),
      '(active_to_id): Unexpected prev_id value',
    );
    AssertLib.assert(
      isValidIdentifier(befo_id),
      '(active_to_id): Unexpected befo_id value',
    );

    if (prev_id == befo_id) {
      return false;
    }

    return episode_classes.replace(
      activeClasses[prev_id],
      activeClasses[befo_id],
    );
  }

  function convert_to_id(episode, episode_id) {
    const episode_classes = episode.classList;
    // neutral
    const neutral_identifier = isNeutral(episode_classes);
    if (null != neutral_identifier) {
      neutral_to_id(episode_classes, neutral_identifier, episode_id);
    }

    const seen_id = isSeen(episode_classes);
    if (null != seen_id) {
      seen_to_id(episode_classes, seen_id, episode_id);
    }

    const active_id = isActive(episode_classes);
    if (null != active_id) {
      active_to_id(episode_classes, active_id, episode_id);
    }
  }

  function proc_episode(episodes, episode_data) {
    if (!(episodes instanceof HTMLCollection || episodes instanceof NodeList)) {
      console.log(episodes);
      throw Error('(proc_episode): Unexpected type of arg. episodes');
    }
    if (!(episode_data instanceof Map)) {
      console.log(episode_data);
      throw Error(
        '(proc_episode): Unexpected type of arg. episode_data',
        episode_data,
      );
    }

    for (let i = 0; i < episodes.length; i++) {
      const episode = episodes[i];
      if (!episode.classList.contains(episodeBtnClass)) {
        throw Error(
          '(proc_episode[for episodes]): Unexpected obj. episode',
          episode,
        );
      }

      const episode_id = episode_data.get(parseInt(episode.textContent));

      if (undefined == episode_id) {
        console.log(parseInt(episode.textContent));
        continue;
      }

      onTextChange(episode, (episode) => {
        const episode_id = episode_data.get(parseInt(episode.textContent));
        if (undefined == episode_id) {
          console.log(parseInt(episode.textContent));
          return;
        }
        convert_to_id(episode, episode_id);
      });

      onAttrChange(episode, (episode) => {
        const episode_id = episode_data.get(parseInt(episode.textContent));
        if (undefined == episode_id) {
          console.log(parseInt(episode.textContent));
          return;
        }
        convert_to_id(episode, episode_id);

        if (episode.classList.contains(activeClasses[episode_id])) {
          let top_bar_class = document.getElementById(videoTopBarId);
          AssertLib.assert(
            top_bar_class != null,
            'getElementById(videoTopBarId): element not found.',
          );
          top_bar_class = top_bar_class.classList;

          let bottom_bar_class = document.getElementById(videoBottomBarId);
          AssertLib.assert(
            bottom_bar_class != null,
            'getElementById(videoBottomBarId): element not found.',
          );
          bottom_bar_class = bottom_bar_class.classList;

          let neutral_identifier = isNeutral(top_bar_class);
          if (neutral_identifier == null) {
            top_bar_class.add(neutralClasses[episode_id]);
          } else {
            neutral_to_id(top_bar_class, neutral_identifier, episode_id);
          }

          neutral_identifier = isNeutral(bottom_bar_class);
          if (neutral_identifier == null) {
            bottom_bar_class.add(neutralClasses[episode_id]);
          } else {
            neutral_to_id(bottom_bar_class, neutral_identifier, episode_id);
          }
        }
      });

      episode.childNodes[0].style.background = 'none';
      convert_to_id(episode, episode_id);
      if (episode.classList.contains(activeClasses[episode_id])) {
        let top_bar_class = document.getElementById(videoTopBarId);
        AssertLib.assert(
          top_bar_class != null,
          'getElementById(videoTopBarId): element not found.',
        );
        top_bar_class = top_bar_class.classList;

        let bottom_bar_class = document.getElementById(videoBottomBarId);
        AssertLib.assert(
          bottom_bar_class != null,
          'getElementById(videoBottomBarId): element not found.',
        );
        bottom_bar_class = bottom_bar_class.classList;

        let neutral_identifier = isNeutral(top_bar_class);
        if (neutral_identifier == null) {
          top_bar_class.add(neutralClasses[episode_id]);
        } else {
          neutral_to_id(top_bar_class, neutral_identifier, episode_id);
        }

        neutral_identifier = isNeutral(bottom_bar_class);
        if (neutral_identifier == null) {
          bottom_bar_class.add(neutralClasses[episode_id]);
        } else {
          neutral_to_id(bottom_bar_class, neutral_identifier, episode_id);
        }
      }
    }
  }

  const paths = includePath.keys();
  let path = null;

  while (true) {
    path = paths.next();

    if (path.done) {
      path = null;
      break;
    }

    if (location.pathname.includes(path.value)) {
      break;
    }
    path = null;
  }

  if (path != null) {
    const timer = setInterval(() => {
      const episode_btn = document.getElementsByClassName(episodeBtnClass);
      const episode_data = includePath.get(path.value);

      if (episode_btn.length > 0) {
        clearInterval(timer);

        // --- Style ---
        const btn_style = document.createElement('style');
        btn_style.textContent = injectStyle;
        document.head.appendChild(btn_style);
        // -------------

        onChangeElems(episode_btn[0].parentNode, (records) => {
          for (const record of records) {
            proc_episode(record.addedNodes, episode_data);
          }
        });
        proc_episode(episode_btn, episode_data);
      }
    }, 500);
  }
})();
