function assert(condition, message) {
  if (typeof message == 'string') {
    message = Error(message);
  }
  if (!condition) {
    throw message || 'Assertion failed';
  }
}

const episodeNeutral = 'episode';
const episodeSeen = 'seen';
const episodeActive = 'active';

const neutralMixedClass = 'mixed-episode';
const seenMixedClass = 'seen-mixed';
const activeMixedClass = 'active-mixed';

const neutralFillerClass = 'filler-episode';
const seenFillerClass = 'seen-filler';
const activeFillerClass = 'active-filler';

const neutralClasses = [episodeNeutral, neutralMixedClass, neutralFillerClass];
const seenClasses = [episodeSeen, seenMixedClass, seenFillerClass];
const activeClasses = [episodeActive, activeMixedClass, activeFillerClass];

const allTypeClasses = Object.entries({
  neutralClasses,
  seenClasses,
  activeClasses,
});
console.log('🚀 ~ :27 ~ allTypeClasses:', allTypeClasses);

allTypeClasses.forEach(([key, value]) => {
  assert(value.length === 3, `[${key}]: Unexpected length`);
});
function isValidIdentifier(identifier) {
  return identifier >= canonId && identifier <= fillerId;
}

function changeEpisodeTypeClass(typeClasses, episode_classes, nowIdx, newIdx) {
  Object.entries({ nowIdx, newIdx }).forEach(([key, idx]) => {
    console.log(this.name);
    assert(
      isValidIdentifier(idx),
      `(${this.name}): Unexpected identifier ${key}:${idx}`,
    );
  });

  if (nowIdx === newIdx) {
    return;
  }

  return episode_classes.replace(typeClasses[nowIdx], typeClasses[newIdx]);
}
function getTypeIdx(episode_classes) {
  let result = null;
  allTypeClasses.forEach((typeClasses, typeIdx) => {
    typeClasses[1].forEach((value, valueIdx) => {
      if (episode_classes.includes(value)) {
        result = [typeIdx, valueIdx];
      }
    });
  });

  return result;
}
console.log(getTypeIdx(['active-filler', 'some-hother']));

function convert_to_id(episodeEl, episodeNewIdx) {
  const episode_classes = episodeEl.classList;
  // neutral
  const [typeClassesIdx, classIdx] = getTypeIdx(episode_classes);
  if (classIdx !== null) {
    changeEpisodeTypeClass(
      allTypeClasses[typeClassesIdx][1],
      episode_classes,
      classIdx,
      episodeNewIdx,
    );
  }
}
