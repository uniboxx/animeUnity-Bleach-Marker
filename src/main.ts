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

const observer = new MutationObserver(() => {
  updateVideoTopBarTypeClass();
  updateEpisodesTypeClass();
});

await utils.waitForElementPresent('#video-top');
observer.observe(document.querySelector('#video-top') as Node, {
  characterData: true,
  subtree: true,
});

await utils.waitForElementPresent('#episode-nav');
observer.observe(document.querySelector('#episode-nav') as Node, {
  attributes: true,
  subtree: true,
});
