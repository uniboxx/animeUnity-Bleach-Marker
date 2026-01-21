import './style.css';
import { types, bleachEpisodeData } from './episodesData';
import { utils } from './UserScriptUntil';

// ================== MAIN CODE ==================
async function updateVideoTopBarTypeClass() {
  await utils.waitForElementPresent('#video-top');
  const videoTopBarEl = document.getElementById('video-top');
  const title = videoTopBarEl?.querySelector('.title');
  const activeEpisodeNumber = +(title?.textContent?.match(/\d+/)?.[0] ?? -1);
  console.log(
    '🚀 ~ :14 ~ updateVideoTopBarTypeClass ~ activeEpisodeNumber:',
    activeEpisodeNumber,
  );
  const activeEpisodeIdx = bleachEpisodeData.get(activeEpisodeNumber);
  const classToAdd = types[activeEpisodeIdx];
  videoTopBarEl && utils.addClass(videoTopBarEl, classToAdd);
}
updateVideoTopBarTypeClass();

await utils.waitForElementPresent('.episode-item');
const episodeBtns = document.querySelectorAll(
  '.episode-item',
) as NodeListOf<HTMLDivElement>;
console.log('🚀 ~ :17 ~ episodeBtns:', episodeBtns);

function updateEpisodesTypeClass() {
  episodeBtns.forEach((btn) => {
    const episodeNumber = +btn.textContent;
    if (!episodeNumber) return;
    const typeIdx = bleachEpisodeData.get(episodeNumber);
    const classToAdd = types[typeIdx];
    utils.addClass(btn, classToAdd);
  });
}
updateEpisodesTypeClass();
