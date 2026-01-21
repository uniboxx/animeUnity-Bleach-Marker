import './style.css';
import './episodesData';
import { utils } from './UserScriptUntil';

// main.ts

console.log('Bleach Marker');
const classesToRemove = ['canon', 'mixed', 'filler'];

const result = await utils.waitForElementPresent('#video-top');
console.log('🚀 ~ :10 ~ result:', result);
const videoTopBarEl = document.getElementById('video-top');
console.log('🚀 ~ :9 ~ videoTopBarEl:', videoTopBarEl);
if (videoTopBarEl) utils.addClass(videoTopBarEl, 'mixed');
