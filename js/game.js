import { s, all, css, attr, html, text, insert } from './modules/base.js';
import { game } from './game-obj.js';
import { achievements } from './achievements-obj.js';
import { updateUI } from './update-ui.js';
import { saveGame, loadGame, saveAchievements, loadAchievements, autosaveInterval } from './localstorage.js';

// reset
function resetGame() {
  const answer = prompt('Для сброса прогресса введите: рестарт');

  if (answer?.trim().toLowerCase() === 'рестарт') {
    // 1) остановить автосохранение
    clearInterval(autosaveInterval);

    // 2) очистить localStorage
    localStorage.clear();

    // 3) перезагрузить страницу
    location.reload();
  } else {
    alert('Слово введено неверно или отменено. Прогресс не сброшен.');
  }
}

// количество золота в секунду от всех источников
function getAllGoldPerSecond() {
  return Math.floor(
    game.goldPerSecond +
      game.houses * game.houseGoldPerSecond +
      game.cars * game.carGoldPerSecond +
      game.whores * game.whoreGoldPerSecond +
      game.goldBar * game.goldBarGoldPerSecond +
      game.platinum * game.platinumGoldPerSecond +
      game.diamond * game.diamondGoldPerSecond +
      game.kaliforniy * game.kaliforniyPerSecond +
      game.osmiy * game.osmiyPerSecond +
      game.rodiy * game.rodiyPerSecond +
      game.pluto * game.plutoPerSecond +
      game.iridiy * game.iridiyPerSecond +
      game.nucklear * game.nucklearPerSecond +
      game.moon * game.moonPerSecond +
      game.mars * game.marsPerSecond +
      game.antimater * game.antimaterPerSecond +
      game.antimaterbomb * game.antimaterbombPerSecond,
  );
}

// обновленный вид золота и стоимости улучшений
function formatNumber(num) {
  if (num < 1000) {
    return Math.floor(num.toString());
  }

  // массив суффиксов: 1000, 1000000, 1000000000...
  const suffixes = ['', ' тыс.', ' млн', ' млрд', ' трлн', ' квадр', ' квинт', ' секст'];
  const degree = Math.max(0, Math.min(suffixes.length - 1, Math.floor(Math.log10(num) / 3)));
  const suffix = suffixes[degree];
  const divisor = 10 ** (degree * 3);
  const shortened = num / divisor;

  // если >= 10 — не показываем знаки после запятой, иначе — 3 знака
  const decimals = shortened >= 10 ? 3 : 3;

  return shortened.toFixed(decimals) + suffix;
}

// проигрывание звука когда не достаточно денег
function playSoundNotEnoughMoney(type) {
  if (game.gold < type) {
    // Плеер звука
    const coinSound = new Audio('mp3/need-more-money.mp3');
    coinSound.play().catch((err) => {
      console.warn('Звук не проигрался (например, нет взаимодействия пользователя):', err);
    });
    return false;
  }
  return true;
}

// проигрывание звука при покупке или улучшение
function playSound(music) {
  const coinSound = new Audio(music);
  coinSound.play().catch((err) => {
    console.warn('Звук не проигрался (например, нет взаимодействия пользователя):', err);
  });
}

// обновление денег
function improveGold(improveCost, whatImprove, powerImprove = 1.01, howManyImprove = 1) {
  game.gold -= game[improveCost];
  game[improveCost] = Number((game[improveCost] * powerImprove).toFixed(2));
  game[whatImprove] += howManyImprove;
}

// Проверка достижений
function getAchievements(achievementQuantity, achievementType, quantity, reward) {
  if (achievementQuantity === quantity && !achievements[achievementType]) {
    achievements[achievementType] = true;
    playSound('mp3/achievements-1.mp3');
    alert(`Достижение получено: Ваша награда: ${formatNumber(reward)}`);
    // дать бонус
    game.gold += reward;
    saveAchievements();
  }
  if (achievements.lvl1 === false) {
    if (
      achievements.clicks1000 &&
      achievements.whores100 &&
      achievements.cars100 &&
      achievements.houses100 &&
      achievements.goldBars100 &&
      achievements.platinums100 &&
      achievements.diamonds100
    ) {
      achievements.lvl1 = true;
      s('.tab-btn[data-tab="level2"]').disabled = false;
      alert(`Поздравляем! Уровень 1 пройден`);
      playSound('mp3/achievements-2.mp3');
      saveAchievements();
    }
  }

  if (achievements.lvl2 === false) {
    if (
      achievements.kaliforniy100 &&
      achievements.osmiy100 &&
      achievements.rodiy100 &&
      achievements.pluto100 &&
      achievements.iridiy100
    ) {
      achievements.lvl2 = true;
      s('.tab-btn[data-tab="level3"]').disabled = false;
      alert(`Поздравляем! Уровень 2 пройден`);
      playSound('mp3/achievements-3.mp3');
      saveAchievements();
    }
  }

  if (achievements.lvl3 === false) {
    if (
      achievements.nucklear100 &&
      achievements.moon100 &&
      achievements.mars100 &&
      achievements.antimater100 &&
      achievements.antimaterbomb100
    ) {
      achievements.lvl3 = true;
      alert(`Поздравляем! Уровень 3 пройден`);
      playSound('mp3/achievements-3.mp3');
      saveAchievements();
    }
  }

  if (achievements.lvl1 && achievements.lvl2 && achievements.lvl3) {
    alert('Браво! Игра полностью пройдена!');
  }
}

// Апгрейд хранилища
function buyStoragePowerUpgrade() {
  // Плеер когда не достаточно денег
  if (!playSoundNotEnoughMoney(game.storagePowerImproveCost)) {
    return;
  }

  improveGold('storagePowerImproveCost', 'storagePower', 1.05, 300);

  updateUI();

  // Плеер звука
  playSound('mp3/improve-level.mp3');
}

export {
  resetGame,
  getAllGoldPerSecond,
  formatNumber,
  playSoundNotEnoughMoney,
  playSound,
  improveGold,
  getAchievements,
  buyStoragePowerUpgrade,
};
