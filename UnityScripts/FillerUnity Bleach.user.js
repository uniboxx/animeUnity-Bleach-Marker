// ==UserScript==
// @name         UnityFiller Bleach Marker
// @namespace    https://github.com/IlNubis/IlNubis-Js-scripts
// @version      08-01-2026
// @description  Mark Bleach mixed and filler episode on Animeunity.so
// @author       IlNubis
// @match        https://www.animeunity.so/anime/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=animeunity.so
// @updateURL    https://raw.githubusercontent.com/ilNubis/IlNubis-Js-scripts/refs/heads/main/UnityScripts/FillerUnity%20Bleach.user.js
// @downloadURL  https://raw.githubusercontent.com/ilNubis/IlNubis-Js-scripts/refs/heads/main/UnityScripts/FillerUnity%20Bleach.user.js
// @require      https://raw.githubusercontent.com/ilNubis/IlNubis-Js-scripts/refs/heads/main/Utils/JsIota.js
// @require      https://raw.githubusercontent.com/ilNubis/IlNubis-Js-scripts/refs/heads/main/Utils/AssertLib.js
// @run-at       document-end
// @grant        none
// ==/UserScript==


!function (){

    const CANON_ID = JsIota.next();
    const MIXED_ID = JsIota.next();
    const FILLER_ID = JsIota.next();

    const BLEACH_PATH = "69-bleach"
    const BLEACH_EPISODE_DATA = new Map([
        [1, CANON_ID],
        [2, CANON_ID],
        [3, CANON_ID],
        [4, CANON_ID],
        [5, CANON_ID],
        [6, CANON_ID],
        [7, CANON_ID],
        [8, MIXED_ID],
        [9, CANON_ID],
        [10, CANON_ID],
        [11, CANON_ID],
        [12, CANON_ID],
        [13, CANON_ID],
        [14, CANON_ID],
        [15, CANON_ID],
        [16, CANON_ID],
        [17, CANON_ID],
        [18, CANON_ID],
        [19, CANON_ID],
        [20, CANON_ID],
        [21, CANON_ID],
        [22, CANON_ID],
        [23, CANON_ID],
        [24, CANON_ID],
        [25, CANON_ID],
        [26, CANON_ID],
        [27, MIXED_ID],
        [28, CANON_ID],
        [29, CANON_ID],
        [30, CANON_ID],
        [31, CANON_ID],
        [32, MIXED_ID],
        [33, FILLER_ID],
        [34, CANON_ID],
        [35, CANON_ID],
        [36, CANON_ID],
        [37, CANON_ID],
        [38, CANON_ID],
        [39, CANON_ID],
        [40, CANON_ID],
        [41, CANON_ID],
        [42, CANON_ID],
        [43, CANON_ID],
        [44, CANON_ID],
        [45, CANON_ID],
        [46, MIXED_ID],
        [47, CANON_ID],
        [48, CANON_ID],
        [49, CANON_ID],
        [50, FILLER_ID],
        [51, CANON_ID],
        [52, CANON_ID],
        [53, CANON_ID],
        [54, CANON_ID],
        [55, CANON_ID],
        [56, CANON_ID],
        [57, CANON_ID],
        [58, CANON_ID],
        [59, CANON_ID],
        [60, CANON_ID],
        [61, CANON_ID],
        [62, CANON_ID],
        [63, CANON_ID],
        [64, FILLER_ID],
        [65, FILLER_ID],
        [66, FILLER_ID],
        [67, FILLER_ID],
        [68, FILLER_ID],
        [69, FILLER_ID],
        [70, FILLER_ID],
        [71, FILLER_ID],
        [72, FILLER_ID],
        [73, FILLER_ID],
        [74, FILLER_ID],
        [75, FILLER_ID],
        [76, FILLER_ID],
        [77, FILLER_ID],
        [78, FILLER_ID],
        [79, FILLER_ID],
        [80, FILLER_ID],
        [81, FILLER_ID],
        [82, FILLER_ID],
        [83, FILLER_ID],
        [84, FILLER_ID],
        [85, FILLER_ID],
        [86, FILLER_ID],
        [87, FILLER_ID],
        [88, FILLER_ID],
        [89, FILLER_ID],
        [90, FILLER_ID],
        [91, FILLER_ID],
        [92, FILLER_ID],
        [93, FILLER_ID],
        [94, FILLER_ID],
        [95, FILLER_ID],
        [96, FILLER_ID],
        [97, FILLER_ID],
        [98, FILLER_ID],
        [99, FILLER_ID],
        [100, FILLER_ID],
        [101, FILLER_ID],
        [102, FILLER_ID],
        [103, FILLER_ID],
        [104, FILLER_ID],
        [105, FILLER_ID],
        [106, FILLER_ID],
        [107, FILLER_ID],
        [108, FILLER_ID],
        [109, MIXED_ID],
        [110, CANON_ID],
        [111, MIXED_ID],
        [112, CANON_ID],
        [113, CANON_ID],
        [114, CANON_ID],
        [115, CANON_ID],
        [116, MIXED_ID],
        [117, CANON_ID],
        [118, CANON_ID],
        [119, MIXED_ID],
        [120, MIXED_ID],
        [121, CANON_ID],
        [122, CANON_ID],
        [123, CANON_ID],
        [124, MIXED_ID],
        [125, CANON_ID],
        [126, CANON_ID],
        [127, CANON_ID],
        [128, FILLER_ID],
        [129, FILLER_ID],
        [130, FILLER_ID],
        [131, FILLER_ID],
        [132, FILLER_ID],
        [133, FILLER_ID],
        [134, FILLER_ID],
        [135, FILLER_ID],
        [136, FILLER_ID],
        [137, FILLER_ID],
        [138, CANON_ID],
        [139, CANON_ID],
        [140, CANON_ID],
        [141, MIXED_ID],
        [142, CANON_ID],
        [143, MIXED_ID],
        [144, CANON_ID],
        [145, CANON_ID],
        [146, MIXED_ID],
        [147, FILLER_ID],
        [148, FILLER_ID],
        [149, FILLER_ID],
        [150, CANON_ID],
        [151, CANON_ID],
        [152, CANON_ID],
        [153, CANON_ID],
        [154, CANON_ID],
        [155, CANON_ID],
        [156, MIXED_ID],
        [157, CANON_ID],
        [158, CANON_ID],
        [159, CANON_ID],
        [160, MIXED_ID],
        [161, MIXED_ID],
        [162, CANON_ID],
        [163, CANON_ID],
        [164, CANON_ID],
        [165, CANON_ID],
        [166, CANON_ID],
        [167, CANON_ID],
        [168, FILLER_ID],
        [169, FILLER_ID],
        [170, FILLER_ID],
        [171, FILLER_ID],
        [172, FILLER_ID],
        [173, FILLER_ID],
        [174, FILLER_ID],
        [175, FILLER_ID],
        [176, FILLER_ID],
        [177, FILLER_ID],
        [178, FILLER_ID],
        [179, FILLER_ID],
        [180, FILLER_ID],
        [181, FILLER_ID],
        [182, FILLER_ID],
        [183, FILLER_ID],
        [184, FILLER_ID],
        [185, FILLER_ID],
        [186, FILLER_ID],
        [187, FILLER_ID],
        [188, FILLER_ID],
        [189, FILLER_ID],
        [190, MIXED_ID],
        [191, CANON_ID],
        [192, CANON_ID],
        [193, MIXED_ID],
        [194, CANON_ID],
        [195, CANON_ID],
        [196, CANON_ID],
        [197, CANON_ID],
        [198, CANON_ID],
        [199, CANON_ID],
        [200, CANON_ID],
        [201, CANON_ID],
        [202, CANON_ID],
        [203, CANON_ID],
        [204, FILLER_ID],
        [205, FILLER_ID],
        [206, MIXED_ID],
        [207, MIXED_ID],
        [208, CANON_ID],
        [209, MIXED_ID],
        [210, CANON_ID],
        [211, CANON_ID],
        [212, CANON_ID],
        [213, FILLER_ID],
        [214, FILLER_ID],
        [215, CANON_ID],
        [216, CANON_ID],
        [217, CANON_ID],
        [218, CANON_ID],
        [219, CANON_ID],
        [220, CANON_ID],
        [221, CANON_ID],
        [222, MIXED_ID],
        [223, MIXED_ID],
        [224, CANON_ID],
        [225, CANON_ID],
        [226, CANON_ID],
        [227, CANON_ID],
        [228, FILLER_ID],
        [229, FILLER_ID],
        [230, FILLER_ID],
        [231, FILLER_ID],
        [232, FILLER_ID],
        [233, FILLER_ID],
        [234, FILLER_ID],
        [235, FILLER_ID],
        [236, FILLER_ID],
        [237, FILLER_ID],
        [238, FILLER_ID],
        [239, FILLER_ID],
        [240, FILLER_ID],
        [241, FILLER_ID],
        [242, FILLER_ID],
        [243, FILLER_ID],
        [244, FILLER_ID],
        [245, FILLER_ID],
        [246, FILLER_ID],
        [247, FILLER_ID],
        [248, FILLER_ID],
        [249, FILLER_ID],
        [250, FILLER_ID],
        [251, FILLER_ID],
        [252, FILLER_ID],
        [253, FILLER_ID],
        [254, FILLER_ID],
        [255, FILLER_ID],
        [256, FILLER_ID],
        [257, FILLER_ID],
        [258, FILLER_ID],
        [259, FILLER_ID],
        [260, FILLER_ID],
        [261, FILLER_ID],
        [262, FILLER_ID],
        [263, FILLER_ID],
        [264, FILLER_ID],
        [265, FILLER_ID],
        [266, FILLER_ID],
        [267, MIXED_ID],
        [268, MIXED_ID],
        [269, CANON_ID],
        [270, CANON_ID],
        [271, CANON_ID],
        [272, CANON_ID],
        [273, CANON_ID],
        [274, MIXED_ID],
        [275, CANON_ID],
        [276, MIXED_ID],
        [277, CANON_ID],
        [278, CANON_ID],
        [279, CANON_ID],
        [280, CANON_ID],
        [281, CANON_ID],
        [282, CANON_ID],
        [283, CANON_ID],
        [284, MIXED_ID],
        [285, MIXED_ID],
        [286, CANON_ID],
        [287, FILLER_ID],
        [288, MIXED_ID],
        [289, CANON_ID],
        [290, MIXED_ID],
        [291, MIXED_ID],
        [292, CANON_ID],
        [293, CANON_ID],
        [294, CANON_ID],
        [295, MIXED_ID],
        [296, MIXED_ID],
        [297, CANON_ID],
        [298, FILLER_ID],
        [299, FILLER_ID],
        [300, CANON_ID],
        [301, CANON_ID],
        [302, CANON_ID],
        [303, FILLER_ID],
        [304, FILLER_ID],
        [305, FILLER_ID],
        [306, CANON_ID],
        [307, CANON_ID],
        [308, CANON_ID],
        [309, CANON_ID],
        [310, MIXED_ID],
        [311, FILLER_ID],
        [312, FILLER_ID],
        [313, FILLER_ID],
        [314, FILLER_ID],
        [315, FILLER_ID],
        [316, FILLER_ID],
        [317, FILLER_ID],
        [318, FILLER_ID],
        [319, FILLER_ID],
        [320, FILLER_ID],
        [321, FILLER_ID],
        [322, FILLER_ID],
        [323, FILLER_ID],
        [324, FILLER_ID],
        [325, FILLER_ID],
        [326, FILLER_ID],
        [327, FILLER_ID],
        [328, FILLER_ID],
        [329, FILLER_ID],
        [330, FILLER_ID],
        [331, FILLER_ID],
        [332, FILLER_ID],
        [333, FILLER_ID],
        [334, FILLER_ID],
        [335, FILLER_ID],
        [336, FILLER_ID],
        [337, FILLER_ID],
        [338, FILLER_ID],
        [339, FILLER_ID],
        [340, FILLER_ID],
        [341, FILLER_ID],
        [342, MIXED_ID],
        [343, MIXED_ID],
        [344, CANON_ID],
        [345, MIXED_ID],
        [346, CANON_ID],
        [347, MIXED_ID],
        [348, CANON_ID],
        [349, CANON_ID],
        [350, CANON_ID],
        [351, MIXED_ID],
        [352, CANON_ID],
        [353, CANON_ID],
        [354, CANON_ID],
        [355, FILLER_ID],
        [356, CANON_ID],
        [357, MIXED_ID],
        [358, CANON_ID],
        [359, CANON_ID],
        [360, CANON_ID],
        [361, CANON_ID],
        [362, CANON_ID],
        [363, CANON_ID],
        [364, CANON_ID],
        [365, CANON_ID],
        [366, CANON_ID],
    ]);

    const INCLUDE_PATH = new Map([
        [BLEACH_PATH, BLEACH_EPISODE_DATA]
    ]);



    const VIDEO_TOP_BAR_ID = "video-top";
    const VIDEO_BOTTOM_BAR_ID = "video-bottom";

    //#111925 #0a3a6e #0062cc


    // Neutral Filler background: #251111
    // Seen Filler background: #6e0a12
    // Active Filler background: #cc0018


    // Neutral Mixed background: #252311
    // Seen Mixed background: #6e640a
    // Active Mixed background: #ccc500

    const EPISODE_BTN_CLASS ="episode-item";
    const EPISODE_NEUTRAL = "episode";
    const EPISODE_SEEN = "seen";
    const EPISODE_ACTIVE = "active";

    const NEUTRAL_MIXED_CLASS = "mixed-episode";
    const SEEN_MIXED_CLASS = "seen-mixed";
    const ACTIVE_MIXED_CLASS = "active-mixed";

    const NEUTRAL_FILLER_CLASS = "filler-episode";
    const SEEN_FILLER_CLASS = "seen-filler";
    const ACTIVE_FILLER_CLASS = "active-filler";

    const NEUTRAL_BY_ID = [
        EPISODE_NEUTRAL,
        NEUTRAL_MIXED_CLASS,
        NEUTRAL_FILLER_CLASS
    ];
    AssertLib.assert(NEUTRAL_BY_ID.length == 3, "[NEUTRAL_BY_ID]: Unexpected length")

    const SEEN_BY_ID = [
        EPISODE_SEEN,
        SEEN_MIXED_CLASS,
        SEEN_FILLER_CLASS
    ];
    AssertLib.assert(SEEN_BY_ID.length == 3, "[SEEN_BY_ID]: Unexpected length")

    const ACTIVE_BY_ID = [
        EPISODE_ACTIVE,
        ACTIVE_MIXED_CLASS,
        ACTIVE_FILLER_CLASS
    ]
    AssertLib.assert(ACTIVE_BY_ID.length == 3, "[ACTIVE_BY_ID]: Unexpected length")

    const INJECT_STYLE = `
.box-16x9 {
    overflow: visible !important;
}
#${VIDEO_BOTTOM_BAR_ID} a{
    background: none !important;
}

.${NEUTRAL_FILLER_CLASS} {
    background: #251111 !important;
    --darkreader-inline-bgcolor: #251111
}

.${SEEN_FILLER_CLASS} {
    background: #6e0a12 !important;
    --darkreader-inline-bgcolor: #6e0a12
}

.${ACTIVE_FILLER_CLASS} {
    background: #cc0018 !important;
    --darkreader-inline-bgcolor: #cc0018
}



.${NEUTRAL_MIXED_CLASS} {
    background: #252311 !important;
    --darkreader-inline-bgcolor: #252311;
}

.${SEEN_MIXED_CLASS} {
    background: #6e640a !important;
    --darkreader-inline-bgcolor: #6e640a
}

.${ACTIVE_MIXED_CLASS} {
    background: #ccc500 !important;
    --darkreader-inline-bgcolor: #ccc500
}
`

    function onTextChange(elem, callback) {
        const observer = new MutationObserver((records) => {
            callback(elem);
        });

        observer.observe(elem, {
            childList: true,
            characterData: true,
            subtree: true
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

    function is_valid_id(id){
        return id >= CANON_ID && id <= FILLER_ID;
    }

    function is_neutral(episode_class) {

        if (episode_class.contains(NEUTRAL_BY_ID[CANON_ID])){
            return CANON_ID;
        }

        if (episode_class.contains(NEUTRAL_BY_ID[MIXED_ID])){
            return MIXED_ID;
        }

        if (episode_class.contains(NEUTRAL_BY_ID[FILLER_ID])){
            return FILLER_ID;
        }

        return null;
    }

    function is_seen(episode_class) {

        if (episode_class.contains(SEEN_BY_ID[CANON_ID])){
            return CANON_ID;
        }

        if (episode_class.contains(SEEN_BY_ID[MIXED_ID])){
            return MIXED_ID;
        }

        if (episode_class.contains(SEEN_BY_ID[FILLER_ID])){
            return FILLER_ID;
        }

        return null;
    }


    function is_active(episode_class) {

        if (episode_class.contains(ACTIVE_BY_ID[CANON_ID])){
            return CANON_ID;
        }

        if (episode_class.contains(ACTIVE_BY_ID[MIXED_ID])){
            return MIXED_ID;
        }

        if (episode_class.contains(ACTIVE_BY_ID[FILLER_ID])){
            return FILLER_ID;
        }

        return null;
    }

    function neutral_to_id(episode_class, prev_id, befo_id){
        AssertLib.assert(is_valid_id(prev_id), "(neutral_to_id): Unexpected prev_id value");
        AssertLib.assert(is_valid_id(befo_id), "(neutral_to_id): Unexpected befo_id value");

        if (prev_id == befo_id) {
            return false;
        }

        return episode_class.replace(NEUTRAL_BY_ID[prev_id], NEUTRAL_BY_ID[befo_id]);
    }

    function seen_to_id(episode_class, prev_id, befo_id){
        AssertLib.assert(is_valid_id(prev_id), "(seen_to_id): Unexpected prev_id value");
        AssertLib.assert(is_valid_id(befo_id), "(seen_to_id): Unexpected befo_id value");

        if (prev_id == befo_id) {
            return false;
        }

        return episode_class.replace(SEEN_BY_ID[prev_id], SEEN_BY_ID[befo_id]);
    }

    function active_to_id(episode_class, prev_id, befo_id){
        AssertLib.assert(is_valid_id(prev_id), "(active_to_id): Unexpected prev_id value");
        AssertLib.assert(is_valid_id(befo_id), "(active_to_id): Unexpected befo_id value");

        if (prev_id == befo_id) {
            return false;
        }

        return episode_class.replace(ACTIVE_BY_ID[prev_id], ACTIVE_BY_ID[befo_id]);
    }

    function convert_to_id(episode, episode_id){
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
       if (!(episodes instanceof HTMLCollection || episodes instanceof NodeList)){
           console.log(episodes);
           throw Error("(proc_episode): Unexpected type of arg. episodes");
       }
       if (!(episode_data instanceof Map)){
           console.log(episode_data);
           throw Error("(proc_episode): Unexpected type of arg. episode_data", episode_data);
       }

       for (let i = 0; i < episodes.length; i++){
           var episode = episodes[i];
           if (!episode.classList.contains(EPISODE_BTN_CLASS)) {
               throw Error("(proc_episode[for episodes]): Unexpected obj. episode", episode);
           }

           var episode_id = episode_data.get(parseInt(episode.textContent));

           if (undefined == episode_id) {
               console.log(parseInt(episode.textContent));
               continue;
           }

           onTextChange(episode, (episode) => {
               var episode_id = episode_data.get(parseInt(episode.textContent))
               if (undefined == episode_id) {
                   console.log(parseInt(episode.textContent));
                   return;
               }
               convert_to_id(episode, episode_id);
           });

           onAttrChange(episode, (episode) => {
               var episode_id = episode_data.get(parseInt(episode.textContent))
               if (undefined == episode_id) {
                   console.log(parseInt(episode.textContent));
                   return;
               }
               convert_to_id(episode, episode_id);

               if (episode.classList.contains(ACTIVE_BY_ID[episode_id])) {
                   var top_bar_class = document.getElementById(VIDEO_TOP_BAR_ID);
                   AssertLib.assert(top_bar_class!=null, "getElementById(VIDEO_TOP_BAR_ID): element not found.");
                   top_bar_class = top_bar_class.classList

                   var bottom_bar_class = document.getElementById(VIDEO_BOTTOM_BAR_ID);
                   AssertLib.assert(bottom_bar_class!=null, "getElementById(VIDEO_BOTTOM_BAR_ID): element not found.");
                   bottom_bar_class = bottom_bar_class.classList

                   var neutral_id = is_neutral(top_bar_class);
                   if (neutral_id == null) {
                       top_bar_class.add(NEUTRAL_BY_ID[episode_id]);
                   } else {neutral_to_id(top_bar_class, neutral_id, episode_id);}

                   neutral_id = is_neutral(bottom_bar_class);
                   if (neutral_id == null){
                       bottom_bar_class.add(NEUTRAL_BY_ID[episode_id]);
                   } else {neutral_to_id(bottom_bar_class, neutral_id, episode_id);}
               }
           });

           episode.childNodes[0].style.background = "none";
           convert_to_id(episode, episode_id);
           if (episode.classList.contains(ACTIVE_BY_ID[episode_id])) {
                   var top_bar_class = document.getElementById(VIDEO_TOP_BAR_ID);
                   AssertLib.assert(top_bar_class!=null, "getElementById(VIDEO_TOP_BAR_ID): element not found.");
                   top_bar_class = top_bar_class.classList

                   var bottom_bar_class = document.getElementById(VIDEO_BOTTOM_BAR_ID);
                   AssertLib.assert(bottom_bar_class!=null, "getElementById(VIDEO_BOTTOM_BAR_ID): element not found.");
                   bottom_bar_class = bottom_bar_class.classList

                   var neutral_id = is_neutral(top_bar_class);
                   if (neutral_id == null) {
                       top_bar_class.add(NEUTRAL_BY_ID[episode_id]);
                   } else {neutral_to_id(top_bar_class, neutral_id, episode_id);}

                   neutral_id = is_neutral(bottom_bar_class);
                   if (neutral_id == null){
                       bottom_bar_class.add(NEUTRAL_BY_ID[episode_id]);
                   } else {neutral_to_id(bottom_bar_class, neutral_id, episode_id);}
               }
       }
   }

    var paths = INCLUDE_PATH.keys();
    var path = null;

    while(true) {
        path = paths.next();

        if (path.done){
            path = null;
            break;
        }

        if (location.pathname.includes(path.value)){
            break;
        }
        path = null;
    }

    if (path != null){
        const timer = setInterval(() => {

            var episode_btn = document.getElementsByClassName(EPISODE_BTN_CLASS);
            var episode_data = INCLUDE_PATH.get(path.value);

            if (episode_btn.length > 0) {
                clearInterval(timer);

                // --- Style ---
                const btn_style = document.createElement("style");
                btn_style.textContent = INJECT_STYLE;
                document.head.appendChild(btn_style);
                // -------------

                onChangeElems(episode_btn[0].parentNode, records => {
                    for (const record of records) {
                        proc_episode(record.addedNodes, episode_data);
                    }
                });
                proc_episode(episode_btn, episode_data);

            }
        }, 500);
    }
}();
