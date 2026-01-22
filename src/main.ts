import './style.css';
import { types, bleachEpisodeData } from './episodesData';
import { utils } from './UserScriptUntil';

// ================== MAIN CODE ==================

// callbacks for observers, executed when observer is triggered
async function updateVideoTopBarTypeClass() {
  await utils.waitForElementPresent('#video-top');
  const videoTopBarEl = document.getElementById('video-top');
  const title = videoTopBarEl?.querySelector('.title');
  const activeEpisodeNumber = +(title?.textContent?.match(/\d+/)?.[0] ?? -1);
  const activeEpisodeIdx = bleachEpisodeData.get(activeEpisodeNumber);
  const classToAdd = types[activeEpisodeIdx];
  videoTopBarEl && utils.addClass(videoTopBarEl, classToAdd);
}

async function updateEpisodesTypeClass() {
  await utils.waitForElementPresent('.episode-item');
  const episodeBtns = document.querySelectorAll(
    '.episode-item',
  ) as NodeListOf<HTMLDivElement>;
  episodeBtns.forEach((btn) => {
    const episodeNumber = +btn.textContent;
    if (!episodeNumber) return;
    const typeIdx = bleachEpisodeData.get(episodeNumber);
    const classToAdd = types[typeIdx];
    utils.addClass(btn, classToAdd);
  });
}

// wrapper for all changes to apply
function updateChanges() {
  updateVideoTopBarTypeClass();
  updateEpisodesTypeClass();
}
// initial execution at page load
updateChanges();

// define observer
const observer = new MutationObserver(updateChanges);

// define elements to observe
const elementsToObserve = [
  '#video-top .title',
  '.episode-wrapper .episode-item a',
];

// start observing
elementsToObserve.forEach(async (selector) => {
  await utils.waitForElementPresent(selector);
  observer.observe(document.querySelector(selector) as Node, {
    characterData: true,
    subtree: true,
  });
});
