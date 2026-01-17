// ==UserScript==
// @name         UnityFiller Bleach Marker
// @namespace    https://github.com/IlNubis/IlNubis-Js-scripts
// @version      08-01-2026
// @description  Mark Bleach mixed and filler episode on Animeunity.so
// @author       IlNubis
// @collaborator uniboxx
// @match        https://www.animeunity.so/anime/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animeunity.so
// @updateURL    https://raw.githubusercontent.com/uniboxx/IlNubis-Js-scripts/refs/heads/refactoring/UnityScripts/FillerUnity%20Bleach.user.js
// @downloadURL  https://raw.githubusercontent.com/uniboxx/IlNubis-Js-scripts/refs/heads/refactoring/UnityScripts/FillerUnity%20Bleach.user.js
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

  const neutralById = [episodeNeutral, neutralMixedClass, neutralFillerClass];
  AssertLib.assert(neutralById.length == 3, '[neutralById]: Unexpected length');

  const seenById = [episodeSeen, seenMixedClass, seenFillerClass];
  AssertLib.assert(seenById.length == 3, '[seenById]: Unexpected length');

  const activeById = [episodeActive, activeMixedClass, activeFillerClass];
  AssertLib.assert(activeById.length == 3, '[activeById]: Unexpected length');

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

  function is_valid_id(id) {
    return id >= canonId && id <= fillerId;
  }

  function is_neutral(episode_class) {
    if (episode_class.contains(neutralById[canonId])) {
      return canonId;
    }

    if (episode_class.contains(neutralById[mixedId])) {
      return mixedId;
    }

    if (episode_class.contains(neutralById[fillerId])) {
      return fillerId;
    }

    return null;
  }

  function is_seen(episode_class) {
    if (episode_class.contains(seenById[canonId])) {
      return canonId;
    }

    if (episode_class.contains(seenById[mixedId])) {
      return mixedId;
    }

    if (episode_class.contains(seenById[fillerId])) {
      return fillerId;
    }

    return null;
  }

  function is_active(episode_class) {
    if (episode_class.contains(activeById[canonId])) {
      return canonId;
    }

    if (episode_class.contains(activeById[mixedId])) {
      return mixedId;
    }

    if (episode_class.contains(activeById[fillerId])) {
      return fillerId;
    }

    return null;
  }

  function neutral_to_id(episode_class, prev_id, befo_id) {
    AssertLib.assert(
      is_valid_id(prev_id),
      '(neutral_to_id): Unexpected prev_id value',
    );
    AssertLib.assert(
      is_valid_id(befo_id),
      '(neutral_to_id): Unexpected befo_id value',
    );

    if (prev_id == befo_id) {
      return false;
    }

    return episode_class.replace(neutralById[prev_id], neutralById[befo_id]);
  }

  function seen_to_id(episode_class, prev_id, befo_id) {
    AssertLib.assert(
      is_valid_id(prev_id),
      '(seen_to_id): Unexpected prev_id value',
    );
    AssertLib.assert(
      is_valid_id(befo_id),
      '(seen_to_id): Unexpected befo_id value',
    );

    if (prev_id == befo_id) {
      return false;
    }

    return episode_class.replace(seenById[prev_id], seenById[befo_id]);
  }

  function active_to_id(episode_class, prev_id, befo_id) {
    AssertLib.assert(
      is_valid_id(prev_id),
      '(active_to_id): Unexpected prev_id value',
    );
    AssertLib.assert(
      is_valid_id(befo_id),
      '(active_to_id): Unexpected befo_id value',
    );

    if (prev_id == befo_id) {
      return false;
    }

    return episode_class.replace(activeById[prev_id], activeById[befo_id]);
  }

  function convert_to_id(episode, episode_id) {
    var episode_class = episode.classList;
    // neutral
    var neutral_id = is_neutral(episode_class);
    if (null != neutral_id) {
      neutral_to_id(episode_class, neutral_id, episode_id);
    }

    var seen_id = is_seen(episode_class);
    if (null != seen_id) {
      seen_to_id(episode_class, seen_id, episode_id);
    }

    var active_id = is_active(episode_class);
    if (null != active_id) {
      active_to_id(episode_class, active_id, episode_id);
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
      var episode = episodes[i];
      if (!episode.classList.contains(episodeBtnClass)) {
        throw Error(
          '(proc_episode[for episodes]): Unexpected obj. episode',
          episode,
        );
      }

      var episode_id = episode_data.get(parseInt(episode.textContent));

      if (undefined == episode_id) {
        console.log(parseInt(episode.textContent));
        continue;
      }

      onTextChange(episode, (episode) => {
        var episode_id = episode_data.get(parseInt(episode.textContent));
        if (undefined == episode_id) {
          console.log(parseInt(episode.textContent));
          return;
        }
        convert_to_id(episode, episode_id);
      });

      onAttrChange(episode, (episode) => {
        var episode_id = episode_data.get(parseInt(episode.textContent));
        if (undefined == episode_id) {
          console.log(parseInt(episode.textContent));
          return;
        }
        convert_to_id(episode, episode_id);

        if (episode.classList.contains(activeById[episode_id])) {
          var top_bar_class = document.getElementById(videoTopBarId);
          AssertLib.assert(
            top_bar_class != null,
            'getElementById(videoTopBarId): element not found.',
          );
          top_bar_class = top_bar_class.classList;

          var bottom_bar_class = document.getElementById(videoBottomBarId);
          AssertLib.assert(
            bottom_bar_class != null,
            'getElementById(videoBottomBarId): element not found.',
          );
          bottom_bar_class = bottom_bar_class.classList;

          var neutral_id = is_neutral(top_bar_class);
          if (neutral_id == null) {
            top_bar_class.add(neutralById[episode_id]);
          } else {
            neutral_to_id(top_bar_class, neutral_id, episode_id);
          }

          neutral_id = is_neutral(bottom_bar_class);
          if (neutral_id == null) {
            bottom_bar_class.add(neutralById[episode_id]);
          } else {
            neutral_to_id(bottom_bar_class, neutral_id, episode_id);
          }
        }
      });

      episode.childNodes[0].style.background = 'none';
      convert_to_id(episode, episode_id);
      if (episode.classList.contains(activeById[episode_id])) {
        var top_bar_class = document.getElementById(videoTopBarId);
        AssertLib.assert(
          top_bar_class != null,
          'getElementById(videoTopBarId): element not found.',
        );
        top_bar_class = top_bar_class.classList;

        var bottom_bar_class = document.getElementById(videoBottomBarId);
        AssertLib.assert(
          bottom_bar_class != null,
          'getElementById(videoBottomBarId): element not found.',
        );
        bottom_bar_class = bottom_bar_class.classList;

        var neutral_id = is_neutral(top_bar_class);
        if (neutral_id == null) {
          top_bar_class.add(neutralById[episode_id]);
        } else {
          neutral_to_id(top_bar_class, neutral_id, episode_id);
        }

        neutral_id = is_neutral(bottom_bar_class);
        if (neutral_id == null) {
          bottom_bar_class.add(neutralById[episode_id]);
        } else {
          neutral_to_id(bottom_bar_class, neutral_id, episode_id);
        }
      }
    }
  }

  var paths = includePath.keys();
  var path = null;

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
      var episode_btn = document.getElementsByClassName(episodeBtnClass);
      var episode_data = includePath.get(path.value);

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
