import './style.css';
import { types, bleachEpisodeData } from './episodesData';
import { utils } from './UserScriptUntil';

// ================== MAIN CODE ==================
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
updateVideoTopBarTypeClass();
updateEpisodesTypeClass();

await utils.waitForElementPresent('#video-top span');
const targetNode = document.querySelector('#video-top span');

const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'characterData') {
      updateVideoTopBarTypeClass();
      updateEpisodesTypeClass();
    }
  }
});
observer.observe(targetNode as Node, { characterData: true, subtree: true });
