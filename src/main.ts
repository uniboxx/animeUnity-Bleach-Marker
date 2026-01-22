import './style.css';
import { types, bleachEpisodeData } from './episodesData';
import { utils } from './UserScriptUntil';

// functions to execute when observer is triggered
async function updateVideoTopBarClass() {
  await utils.waitForElementPresent('#video-top');
  const videoTopBarElement = document.getElementById(
    'video-top',
  ) as HTMLDivElement;
  const title = videoTopBarElement.querySelector(
    'span.title',
  ) as HTMLSpanElement;
  const activeEpisodeNumber = +(title.textContent.match(/\d+/)?.[0] ?? -1);
  const activeEpisodeIdx = bleachEpisodeData.get(activeEpisodeNumber);
  const episodeTypeClass = types[activeEpisodeIdx]; // "canon", "mixed" or "filler"
  utils.addClass(videoTopBarElement, episodeTypeClass);

  let typeElement = document.querySelector('#video-top span.episode-type');

  if (!typeElement) {
    typeElement = document.createElement('span');
    typeElement.className = 'episode-type';
    title.insertAdjacentElement('afterend', typeElement);
  }
  typeElement.textContent = `[${episodeTypeClass}]`;
}

async function updateEpisodesClass() {
  await utils.waitForElementPresent('.episode-item', 'multi');
  const episodeBtns = document.querySelectorAll(
    '.episode-item',
  ) as NodeListOf<HTMLDivElement>;
  episodeBtns.forEach((btn) => {
    const episodeNumber = +btn.textContent;
    if (!episodeNumber) return;
    const typeIdx = bleachEpisodeData.get(episodeNumber);
    const typeClass = types[typeIdx];
    utils.addClass(btn, typeClass);
  });
}

// wrapper for all changes to apply
function updateChanges() {
  updateVideoTopBarClass();
  updateEpisodesClass();
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
