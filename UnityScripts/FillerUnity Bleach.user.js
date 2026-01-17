// ==UserScript==
// @name         UnityFiller Bleach Marker
// @namespace    https://github.com/IlNubis/IlNubis-Js-scripts
// @version      08-01-2026
// @description  Mark Bleach mixed and filler episode on Animeunity.so
// @author       IlNubis
// @collaborator uniboxx
// @match        https://www.animeunity.so/anime/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animeunity.so
// @updateURL    https://raw.githubusercontent.com/uniboxx/IlNubis-Js-scripts/refs/heads/main/UnityScripts/FillerUnity%20Bleach.user.js
// @downloadURL  https://raw.githubusercontent.com/uniboxx/IlNubis-Js-scripts/refs/heads/main/UnityScripts/FillerUnity%20Bleach.user.js
// @require      https://raw.githubusercontent.com/uniboxx/IlNubis-Js-scripts/refs/heads/main/Utils/AssertLib.js
// @run-at       document-end
// @grant        none
// ==/UserScript==
import bleachEpisodeData from './data';

!(function () {
  // const canonId = 0;
  // const mixedId = 1;
  // const fillerId = 2;

  const bleachPath = '69-bleach';

  // const bleachEpisodeData = new Map([
  //   [1, canonId],
  //   [2, canonId],
  //   [3, canonId],
  //   [4, canonId],
  //   [5, canonId],
  //   [6, canonId],
  //   [7, canonId],
  //   [8, mixedId],
  //   [9, canonId],
  //   [10, canonId],
  //   [11, canonId],
  //   [12, canonId],
  //   [13, canonId],
  //   [14, canonId],
  //   [15, canonId],
  //   [16, canonId],
  //   [17, canonId],
  //   [18, canonId],
  //   [19, canonId],
  //   [20, canonId],
  //   [21, canonId],
  //   [22, canonId],
  //   [23, canonId],
  //   [24, canonId],
  //   [25, canonId],
  //   [26, canonId],
  //   [27, mixedId],
  //   [28, canonId],
  //   [29, canonId],
  //   [30, canonId],
  //   [31, canonId],
  //   [32, mixedId],
  //   [33, fillerId],
  //   [34, canonId],
  //   [35, canonId],
  //   [36, canonId],
  //   [37, canonId],
  //   [38, canonId],
  //   [39, canonId],
  //   [40, canonId],
  //   [41, canonId],
  //   [42, canonId],
  //   [43, canonId],
  //   [44, canonId],
  //   [45, canonId],
  //   [46, mixedId],
  //   [47, canonId],
  //   [48, canonId],
  //   [49, canonId],
  //   [50, fillerId],
  //   [51, canonId],
  //   [52, canonId],
  //   [53, canonId],
  //   [54, canonId],
  //   [55, canonId],
  //   [56, canonId],
  //   [57, canonId],
  //   [58, canonId],
  //   [59, canonId],
  //   [60, canonId],
  //   [61, canonId],
  //   [62, canonId],
  //   [63, canonId],
  //   [64, fillerId],
  //   [65, fillerId],
  //   [66, fillerId],
  //   [67, fillerId],
  //   [68, fillerId],
  //   [69, fillerId],
  //   [70, fillerId],
  //   [71, fillerId],
  //   [72, fillerId],
  //   [73, fillerId],
  //   [74, fillerId],
  //   [75, fillerId],
  //   [76, fillerId],
  //   [77, fillerId],
  //   [78, fillerId],
  //   [79, fillerId],
  //   [80, fillerId],
  //   [81, fillerId],
  //   [82, fillerId],
  //   [83, fillerId],
  //   [84, fillerId],
  //   [85, fillerId],
  //   [86, fillerId],
  //   [87, fillerId],
  //   [88, fillerId],
  //   [89, fillerId],
  //   [90, fillerId],
  //   [91, fillerId],
  //   [92, fillerId],
  //   [93, fillerId],
  //   [94, fillerId],
  //   [95, fillerId],
  //   [96, fillerId],
  //   [97, fillerId],
  //   [98, fillerId],
  //   [99, fillerId],
  //   [100, fillerId],
  //   [101, fillerId],
  //   [102, fillerId],
  //   [103, fillerId],
  //   [104, fillerId],
  //   [105, fillerId],
  //   [106, fillerId],
  //   [107, fillerId],
  //   [108, fillerId],
  //   [109, mixedId],
  //   [110, canonId],
  //   [111, mixedId],
  //   [112, canonId],
  //   [113, canonId],
  //   [114, canonId],
  //   [115, canonId],
  //   [116, mixedId],
  //   [117, canonId],
  //   [118, canonId],
  //   [119, mixedId],
  //   [120, mixedId],
  //   [121, canonId],
  //   [122, canonId],
  //   [123, canonId],
  //   [124, mixedId],
  //   [125, canonId],
  //   [126, canonId],
  //   [127, canonId],
  //   [128, fillerId],
  //   [129, fillerId],
  //   [130, fillerId],
  //   [131, fillerId],
  //   [132, fillerId],
  //   [133, fillerId],
  //   [134, fillerId],
  //   [135, fillerId],
  //   [136, fillerId],
  //   [137, fillerId],
  //   [138, canonId],
  //   [139, canonId],
  //   [140, canonId],
  //   [141, mixedId],
  //   [142, canonId],
  //   [143, mixedId],
  //   [144, canonId],
  //   [145, canonId],
  //   [146, mixedId],
  //   [147, fillerId],
  //   [148, fillerId],
  //   [149, fillerId],
  //   [150, canonId],
  //   [151, canonId],
  //   [152, canonId],
  //   [153, canonId],
  //   [154, canonId],
  //   [155, canonId],
  //   [156, mixedId],
  //   [157, canonId],
  //   [158, canonId],
  //   [159, canonId],
  //   [160, mixedId],
  //   [161, mixedId],
  //   [162, canonId],
  //   [163, canonId],
  //   [164, canonId],
  //   [165, canonId],
  //   [166, canonId],
  //   [167, canonId],
  //   [168, fillerId],
  //   [169, fillerId],
  //   [170, fillerId],
  //   [171, fillerId],
  //   [172, fillerId],
  //   [173, fillerId],
  //   [174, fillerId],
  //   [175, fillerId],
  //   [176, fillerId],
  //   [177, fillerId],
  //   [178, fillerId],
  //   [179, fillerId],
  //   [180, fillerId],
  //   [181, fillerId],
  //   [182, fillerId],
  //   [183, fillerId],
  //   [184, fillerId],
  //   [185, fillerId],
  //   [186, fillerId],
  //   [187, fillerId],
  //   [188, fillerId],
  //   [189, fillerId],
  //   [190, mixedId],
  //   [191, canonId],
  //   [192, canonId],
  //   [193, mixedId],
  //   [194, canonId],
  //   [195, canonId],
  //   [196, canonId],
  //   [197, canonId],
  //   [198, canonId],
  //   [199, canonId],
  //   [200, canonId],
  //   [201, canonId],
  //   [202, canonId],
  //   [203, canonId],
  //   [204, fillerId],
  //   [205, fillerId],
  //   [206, mixedId],
  //   [207, mixedId],
  //   [208, canonId],
  //   [209, mixedId],
  //   [210, canonId],
  //   [211, canonId],
  //   [212, canonId],
  //   [213, fillerId],
  //   [214, fillerId],
  //   [215, canonId],
  //   [216, canonId],
  //   [217, canonId],
  //   [218, canonId],
  //   [219, canonId],
  //   [220, canonId],
  //   [221, canonId],
  //   [222, mixedId],
  //   [223, mixedId],
  //   [224, canonId],
  //   [225, canonId],
  //   [226, canonId],
  //   [227, canonId],
  //   [228, fillerId],
  //   [229, fillerId],
  //   [230, fillerId],
  //   [231, fillerId],
  //   [232, fillerId],
  //   [233, fillerId],
  //   [234, fillerId],
  //   [235, fillerId],
  //   [236, fillerId],
  //   [237, fillerId],
  //   [238, fillerId],
  //   [239, fillerId],
  //   [240, fillerId],
  //   [241, fillerId],
  //   [242, fillerId],
  //   [243, fillerId],
  //   [244, fillerId],
  //   [245, fillerId],
  //   [246, fillerId],
  //   [247, fillerId],
  //   [248, fillerId],
  //   [249, fillerId],
  //   [250, fillerId],
  //   [251, fillerId],
  //   [252, fillerId],
  //   [253, fillerId],
  //   [254, fillerId],
  //   [255, fillerId],
  //   [256, fillerId],
  //   [257, fillerId],
  //   [258, fillerId],
  //   [259, fillerId],
  //   [260, fillerId],
  //   [261, fillerId],
  //   [262, fillerId],
  //   [263, fillerId],
  //   [264, fillerId],
  //   [265, fillerId],
  //   [266, fillerId],
  //   [267, mixedId],
  //   [268, mixedId],
  //   [269, canonId],
  //   [270, canonId],
  //   [271, canonId],
  //   [272, canonId],
  //   [273, canonId],
  //   [274, mixedId],
  //   [275, canonId],
  //   [276, mixedId],
  //   [277, canonId],
  //   [278, canonId],
  //   [279, canonId],
  //   [280, canonId],
  //   [281, canonId],
  //   [282, canonId],
  //   [283, canonId],
  //   [284, mixedId],
  //   [285, mixedId],
  //   [286, canonId],
  //   [287, fillerId],
  //   [288, mixedId],
  //   [289, canonId],
  //   [290, mixedId],
  //   [291, mixedId],
  //   [292, canonId],
  //   [293, canonId],
  //   [294, canonId],
  //   [295, mixedId],
  //   [296, mixedId],
  //   [297, canonId],
  //   [298, fillerId],
  //   [299, fillerId],
  //   [300, canonId],
  //   [301, canonId],
  //   [302, canonId],
  //   [303, fillerId],
  //   [304, fillerId],
  //   [305, fillerId],
  //   [306, canonId],
  //   [307, canonId],
  //   [308, canonId],
  //   [309, canonId],
  //   [310, mixedId],
  //   [311, fillerId],
  //   [312, fillerId],
  //   [313, fillerId],
  //   [314, fillerId],
  //   [315, fillerId],
  //   [316, fillerId],
  //   [317, fillerId],
  //   [318, fillerId],
  //   [319, fillerId],
  //   [320, fillerId],
  //   [321, fillerId],
  //   [322, fillerId],
  //   [323, fillerId],
  //   [324, fillerId],
  //   [325, fillerId],
  //   [326, fillerId],
  //   [327, fillerId],
  //   [328, fillerId],
  //   [329, fillerId],
  //   [330, fillerId],
  //   [331, fillerId],
  //   [332, fillerId],
  //   [333, fillerId],
  //   [334, fillerId],
  //   [335, fillerId],
  //   [336, fillerId],
  //   [337, fillerId],
  //   [338, fillerId],
  //   [339, fillerId],
  //   [340, fillerId],
  //   [341, fillerId],
  //   [342, mixedId],
  //   [343, mixedId],
  //   [344, canonId],
  //   [345, mixedId],
  //   [346, canonId],
  //   [347, mixedId],
  //   [348, canonId],
  //   [349, canonId],
  //   [350, canonId],
  //   [351, mixedId],
  //   [352, canonId],
  //   [353, canonId],
  //   [354, canonId],
  //   [355, fillerId],
  //   [356, canonId],
  //   [357, mixedId],
  //   [358, canonId],
  //   [359, canonId],
  //   [360, canonId],
  //   [361, canonId],
  //   [362, canonId],
  //   [363, canonId],
  //   [364, canonId],
  //   [365, canonId],
  //   [366, canonId],
  // ]);

  const includePath = new Map([[bleachPath, bleachEpisodeData]]);

  const videoTopBarId = 'video-top';
  const videoBottomBarId = 'video-bottom';

  //#111925 #0a3a6e #0062cc

  // Neutral Filler background: #251111
  // Seen Filler background: #6e0a12
  // Active Filler background: #cc0018

  // Neutral Mixed background: #252311
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
    background: maroon !important;
    --darkreader-inline-bgcolor: #251111
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
    background: olive !important;
    --darkreader-inline-bgcolor: #252311;
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
