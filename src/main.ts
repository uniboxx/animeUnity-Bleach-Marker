import './style.css';
import './episodesData';
import { userScriptUtils } from './waitUntil';

// main.ts

console.log('Bleach Marker');

const result = await userScriptUtils.waitForElementPresent('#video-top');
console.log('🚀 ~ :10 ~ result:', result);
const videoTopBarEl = document.getElementById('video-top');
console.log('🚀 ~ :9 ~ videoTopBarEl:', videoTopBarEl);
