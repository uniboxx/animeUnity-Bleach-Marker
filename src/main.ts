import './style.css';
import './episodesData';
import { userScriptUtils } from './waitUntil';

// main.ts

console.log('Bleach Marker');

await userScriptUtils.waitForElementPresent('#video-top');
const videoTopBarEl = document.getElementById('video-top');
console.log('🚀 ~ :9 ~ videoTopBarEl:', videoTopBarEl);
