import { game } from './game-obj.js';
import { achievements } from './achievements-obj.js';

// ключ для localStorage
const SAVE_KEY = 'idle_game_save';
const SAVE_ACHIEVEMENTS = 'achievements';

// Сохранить прогресс
function saveGame() {
  game.lastSave = Date.now();
  localStorage.setItem(SAVE_KEY, JSON.stringify(game));
}

// Загрузить прогресс
function loadGame() {
  const saved = localStorage.getItem(SAVE_KEY);
  if (saved) {
    const data = JSON.parse(saved);

    // количество золота в секунду от всех источников
    function getAllGoldPerSecond() {
      return Math.floor(
        data.goldPerSecond +
          data.houses * data.houseGoldPerSecond +
          data.cars * data.carGoldPerSecond +
          data.whores * data.whoreGoldPerSecond +
          data.goldBar * data.goldBarGoldPerSecond +
          data.platinum * data.platinumGoldPerSecond +
          data.diamond * data.diamondGoldPerSecond +
          data.kaliforniy * data.kaliforniyPerSecond +
          data.osmiy * data.osmiyPerSecond +
          data.rodiy * data.rodiyPerSecond +
          data.pluto * data.plutoPerSecond +
          data.iridiy * data.iridiyPerSecond +
          data.nucklear * data.nucklearPerSecond +
          data.moon * data.moonPerSecond +
          data.mars * data.marsPerSecond +
          data.antimater * data.antimaterPerSecond +
          data.antimaterbomb * data.antimaterbombPerSecond,
      );
    }

    const now = Date.now();
    const offlineMs = now - (data.lastSave || now);
    const offlineSec = Math.min(offlineMs / 1000, data.storagePower); // максимум времени офлайн
    // добавляем золото так, как будто игра шла в фоне
    data.gold += getAllGoldPerSecond() * offlineSec;

    Object.assign(game, data);
  }
}

// Сохранение достижений
function saveAchievements() {
  localStorage.setItem(SAVE_ACHIEVEMENTS, JSON.stringify(achievements));
}

// Загрузить прогресс достижений
function loadAchievements() {
  const saved = localStorage.getItem(SAVE_ACHIEVEMENTS);
  if (saved) {
    Object.assign(achievements, JSON.parse(saved));
  }
}

// авто‑сохранение каждые 3 секунды
let autosaveInterval = setInterval(saveGame, 1000);

export { saveGame, loadGame, saveAchievements, loadAchievements, autosaveInterval };
