import { s, all, css, attr, html, text, insert } from './modules/base.js';
import { saveGame, loadGame, saveAchievements, loadAchievements, autosaveInterval } from './localstorage.js';
import { game } from './game-obj.js';
import { achievements } from './achievements-obj.js';
import { updateUI } from './update-ui.js';
import {
  buyAutoClicker,
  buyAutoClickerUpgrade,
  buyWhore,
  buyCar,
  buyHouse,
  buyGoldBar,
  buyPlatinum,
  buyDiamond,
} from './buy-improvement-1.js';
import { buyKaliforniy, buyOsmiy, buyRodiy, buyPluto, buyIridiy } from './buy-improvement-2.js';
import { buyNucklear, buyMoon, buyMars, buyAntimater, buyAntimaterbomb } from './buy-improvment-3.js';

import {
  resetGame,
  getAllGoldPerSecond,
  formatNumber,
  playSoundNotEnoughMoney,
  playSound,
  improveGold,
  getAchievements,
  buyStoragePowerUpgrade,
} from './game.js';
import { getListenters } from './event-listeners.js';

// Секундный тик (пассивный доход)
setInterval(() => {
  game.gold += getAllGoldPerSecond();
  updateUI();
}, 1000);

// при загрузке страницы активируем первый таб
document.addEventListener('DOMContentLoaded', () => {
  all('.tab-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.dataset.tab;

      // убираем active со всех
      all('.tab-btn').forEach((b) => b.classList.remove('active'));
      all('.tab-pane').forEach((p) => p.classList.remove('active'));

      // ставим active кнопке и панели
      btn.classList.add('active');
      document.getElementById(targetId)?.classList.add('active');
    });
  });
});

getListenters(); // слушатели событий
loadGame(); // загрузить сохранённый прогресс при старте
loadAchievements(); // загрузить прогресс достижений; // загрузить сохранения
updateUI(); // пересчитать золота в секунду

if (achievements.lvl1 === true) {
  s('.tab-btn[data-tab="level2"]').disabled = false;
}
if (achievements.lvl2 === true) {
  s('.tab-btn[data-tab="level3"]').disabled = false;
}
